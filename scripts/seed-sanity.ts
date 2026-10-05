/**
 * Builds scripts/sanity-seed.ndjson from the data that is currently hard-coded
 * in the website, so it can be imported into Sanity in one go.
 *
 *   npx tsx scripts/seed-sanity.ts
 *   npx sanity dataset import scripts/sanity-seed.ndjson production --replace
 *
 * Document IDs are fixed (product-<slug>, post-<slug>, page-<path>), so running
 * the import again updates the same documents instead of creating duplicates.
 * Note: --replace overwrites edits made in the Studio for these documents.
 */
import fs from 'node:fs'
import path from 'node:path'
import { BRAKE_CHAMBERS } from '../src/lib/data'
import { blogPosts } from '../src/data/blogPosts'

const ROOT = path.resolve(__dirname, '..')
const OUT = path.join(__dirname, 'sanity-seed.ndjson')

const safeId = (s: string) => s.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'home'
const key = (i: number) => `k${i}`

const docs: Record<string, unknown>[] = []

// ── Products ────────────────────────────────────────────────
for (const p of BRAKE_CHAMBERS) {
  docs.push({
    _id: `product-${safeId(p.slug)}`,
    _type: 'product',
    name: p.name,
    slug: { _type: 'slug', current: p.slug },
    category: p.category,
    type: p.type,
    modelDesignation: p.modelDesignation,
    brakingMethod: p.brakingMethod,
    strokeSize: p.strokeSize,
    strokeInch: p.strokeInch,
    pushRodLengthInch: p.pushRodLengthInch,
    dutySpec: p.dutySpec,
    mountType: p.mountType,
    application: p.application,
    material: p.material,
    brandSlug: p.brandSlug,
    description: p.description,
    includedItems: p.includedItems,
    specifications: p.specifications,
    oemPartNumbers: p.oemPartNumbers?.map((o, i) => ({ _key: key(i), _type: 'oemPart', ...o })),
    crossReferenceBrands: p.crossReferenceBrands,
    hiddenSearchTags: p.hiddenSearchTags,
    galleryUrls: p.galleryUrls,
    factoryVideoUrl: p.factoryVideoUrl,
    promoVideoUrl: p.promoVideoUrl,
    priceUSD: p.priceUSD,
    moq: p.moq,
    palletQuantity: p.palletQuantity,
    stock: p.stock,
    publishedAt: p.publishedAt,
  })
}

// ── Blog posts ──────────────────────────────────────────────
const toIsoDate = (d: string) => {
  const parsed = new Date(d)
  return isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10)
}

for (const b of blogPosts) {
  docs.push({
    _id: `post-${safeId(b.slug)}`,
    _type: 'post',
    title: b.title,
    slug: { _type: 'slug', current: b.slug },
    category: b.category,
    publishedAt: toIsoDate(b.date),
    readTime: b.readTime,
    excerpt: b.excerpt,
    imageUrl: b.imageUrl,
    contentHtml: b.content.trim(),
  })
}

// ── Page SEO (one per static route in src/app) ──────────────
const SKIP_DIRS = new Set(['api', 'studio', 'test-route'])

function readString(block: string, field: string): string | undefined {
  const m = block.match(new RegExp(`\\b${field}:\\s*(['"\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`))
  return m ? m[2].replace(/\\(['"`\\])/g, '$1') : undefined
}

function walk(dir: string, segments: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const name = entry.name
    if (SKIP_DIRS.has(name) || name.startsWith('[') || name.startsWith('_')) continue
    const next = name.startsWith('(') ? segments : [...segments, name]
    walk(path.join(dir, name), next)
  }

  const file = path.join(dir, 'page.tsx')
  if (!fs.existsSync(file)) return

  const src = fs.readFileSync(file, 'utf8')
  const start = src.indexOf('export const metadata')
  const block = start >= 0 ? src.slice(start, start + 3000) : ''
  const metaTitle = block ? readString(block, 'title') : undefined
  const metaDescription = block ? readString(block, 'description') : undefined

  const routePath = '/' + segments.join('/')
  const label = segments.length
    ? segments[segments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : 'Home'

  docs.push({
    _id: `page-${safeId(segments.join('-'))}`,
    _type: 'page',
    title: segments.length > 1 ? `${label} (${segments[0].replace(/-/g, ' ')})` : label,
    path: routePath,
    seo: metaTitle || metaDescription ? { _type: 'seo', metaTitle, metaDescription } : undefined,
  })
}

walk(path.join(ROOT, 'src', 'app'), [])

fs.writeFileSync(OUT, docs.map((d) => JSON.stringify(d)).join('\n') + '\n', 'utf8')

const count = (t: string) => docs.filter((d) => d._type === t).length
console.log(`Wrote ${docs.length} documents to ${path.relative(ROOT, OUT)}`)
console.log(`  products: ${count('product')}  blog posts: ${count('post')}  pages: ${count('page')}`)

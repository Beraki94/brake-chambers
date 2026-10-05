const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

function processFiles(dir) {
  const files = walk(dir);

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('BRAKE_CHAMBERS')) return;
    
    let modified = false;

    // Handle imports
    const importRegex = /import\s+\{([^}]*?)BRAKE_CHAMBERS([^}]*?)\}\s+from\s+['"]@\/lib\/data['"];?/g;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, (match, p1, p2) => {
        let imports = (p1 + p2).split(',').map(s => s.trim()).filter(Boolean);
        let newImport = imports.length ? `import { ${imports.join(', ')} } from '@/lib/data';\n` : '';
        return newImport + `import { getProducts } from '@/sanity/queries';`;
      });
      modified = true;
    }

    // Add await getProducts() to page components
    if (modified && content.includes('export default function')) {
      content = content.replace(/export default function/, 'export default async function');
    }
    
    if (modified && content.includes('export default async function')) {
      content = content.replace(/(export default async function\s+[a-zA-Z0-9_]+\([^)]*\)\s*{(?:\s*))/, '$1const BRAKE_CHAMBERS = await getProducts();\n  ');
    }

    // Add await getProducts() to generateStaticParams
    if (modified && content.includes('export function generateStaticParams')) {
      content = content.replace(/export function generateStaticParams/, 'export async function generateStaticParams');
    }

    if (modified && content.includes('export async function generateStaticParams')) {
      content = content.replace(/(export async function generateStaticParams\s*\([^)]*\)\s*{(?:\s*))/, '$1const BRAKE_CHAMBERS = await getProducts();\n  ');
    }
    
    // For RelatedProducts.tsx which is not a page
    if (modified && file.includes('RelatedProducts.tsx')) {
       content = content.replace(/export default function RelatedProducts/, 'export default async function RelatedProducts');
       content = content.replace(/(export default async function RelatedProducts\s*\([^)]*\)\s*{(?:\s*))/, '$1const BRAKE_CHAMBERS = await getProducts();\n  ');
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  });
}

processFiles('src/app');
processFiles('src/features');

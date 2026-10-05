import { groq } from 'next-sanity';
import { client } from './lib/client';
import { BrakeChamber, BrakeAccessory, BlogPost } from '@/types';

// We project the data to match the existing TypeScript interfaces 
// so the rest of the application doesn't need to change.
export const allProductsQuery = groq`*[_type == "product"] {
  "slug": slug.current,
  name,
  brandSlug,
  category,
  priceUSD,
  type,
  modelDesignation,
  brakingMethod,
  strokeSize,
  strokeInch,
  pushRodLengthInch,
  dutySpec,
  mountType,
  application,
  crossReferenceBrands,
  oemPartNumbers,
  hiddenSearchTags,
  material,
  includedItems,
  description,
  specifications,
  galleryUrls,
  factoryVideoUrl,
  promoVideoUrl,
  stock,
  publishedAt,
  moq,
  palletQuantity,
  "uploadedImages": images[].asset->url
}`;

export const allBlogPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  category,
  publishedAt,
  readTime,
  excerpt,
  "imageUrl": imageUrl,
  "uploadedImage": image.asset->url,
  "content": contentHtml
}`;

export const allPagesQuery = groq`*[_type == "page"] {
  title,
  path,
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

export async function getProducts(): Promise<BrakeChamber[]> {
  const products = await client.fetch(allProductsQuery);
  return products.map((p: any) => ({
    ...p,
    // If they upload images via Studio, we add them to the start of the gallery
    galleryUrls: p.uploadedImages ? [...p.uploadedImages, ...(p.galleryUrls || [])] : (p.galleryUrls || [])
  }));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch(allBlogPostsQuery);
  return posts.map((p: any) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    featuredImageUrl: p.uploadedImage || p.imageUrl,
    publishDate: p.publishedAt,
    category: p.category,
    readTime: p.readTime
  }));
}

export async function getPages() {
  return await client.fetch(allPagesQuery);
}

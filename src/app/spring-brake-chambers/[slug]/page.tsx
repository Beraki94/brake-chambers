import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS } from '@/lib/data';
import { SPRING_BRAKES_META } from '@/lib/categoryMeta';
import ProductListingLayout from '@/components/products/ProductListingLayout';
import ProductDetailLayout from '@/components/product-detail/ProductDetailLayout';

export async function generateStaticParams() {
  const categories = Object.keys(SPRING_BRAKES_META).map((slug) => ({ slug }));
  const products = BRAKE_CHAMBERS.filter(p => p.category === 'Spring Brake').map(p => ({ slug: p.slug }));
  return [...categories, ...products];
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  
  const meta = SPRING_BRAKES_META[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.desc,
      keywords: [meta.name, 'Commercial Air Brakes', 'Spring Brake Chambers'],
    };
  }

  const product = BRAKE_CHAMBERS.find(p => p.slug === slug && p.category === 'Spring Brake');
  if (product) {
    return {
      title: `${product.name} | BRC Manufacturer`,
      description: `Wholesale ${product.name}. Factory direct pricing.`,
      alternates: {
        canonical: `https://www.brcbrakechambers.com/spring-brake-chambers/${product.slug}`
      }
    };
  }

  return { title: 'Not Found' };
}

export default async function SpringBrakesSlugPage(
  props: { 
    params: Promise<{ slug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const params = await props.params;
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  const { slug } = params;

  // 1. Is it a Sub-Category (e.g. "30-30-air-brake-chambers")?
  const meta = SPRING_BRAKES_META[slug];
  if (meta) {
    let products = BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake');
    
    // Apply strict category filtering
    if (slug.includes('30-30') && !slug.includes('piggyback')) {
      products = products.filter(c => c.type === 'Type 30/30' && !c.name.toLowerCase().includes('piggyback'));
    } else if (slug.includes('piggyback')) {
      products = products.filter(c => c.name.toLowerCase().includes('piggyback'));
    } else if (slug.includes('24-30')) {
      products = products.filter(c => c.type === 'Type 24/30' || c.type === 'Type 24/24');
    } else if (slug.includes('20-24')) {
      products = products.filter(c => c.type === 'Type 20/24');
    } else if (slug.includes('36-36')) {
      products = products.filter(c => c.type === 'Type 36/36');
    } else if (slug.includes('30-28')) {
      products = products.filter(c => c.type === 'Type 30/28');
    }

    return (
      <ProductListingLayout
        title={meta.name}
        description={meta.desc}
        badge="Sub-Category"
        baseCategory="spring-brake-chambers"
        products={products}
        searchParams={searchParams}
        seoText={meta.seoText}
        isSubCategory={true}
        breadcrumbs={[
          { label: 'Spring Brakes', href: '/spring-brake-chambers' },
          { label: meta.name }
        ]}
      />
    );
  }

  // 2. Is it a specific product?
  const product = BRAKE_CHAMBERS.find(p => p.slug === slug && p.category === 'Spring Brake');
  if (product) {
    return (
      <ProductDetailLayout 
        product={product} 
        categoryName="Spring Brakes" 
        categoryPath="spring-brake-chambers" 
      />
    );
  }

  notFound();
}

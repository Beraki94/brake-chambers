import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS } from '@/lib/data';
import { SERVICE_CHAMBERS_META } from '@/lib/categoryMeta';
import ProductListingLayout from '@/components/ProductListingLayout';
import ProductDetailLayout from '@/components/ProductDetailLayout';

export async function generateStaticParams() {
  const categories = Object.keys(SERVICE_CHAMBERS_META).map((slug) => ({ slug }));
  const products = BRAKE_CHAMBERS.filter(p => p.category === 'Service Brake').map(p => ({ slug: p.slug }));
  return [...categories, ...products];
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  
  const meta = SERVICE_CHAMBERS_META[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.desc,
      keywords: [meta.name, 'Commercial Air Brakes', 'Service Brake Chambers'],
    };
  }

  const product = BRAKE_CHAMBERS.find(p => p.slug === slug && p.category === 'Service Brake');
  if (product) {
    return {
      title: `${product.name} | BRC Manufacturer`,
      description: `Wholesale ${product.name}. Factory direct pricing.`,
      alternates: {
        canonical: `https://www.brcbrakechambers.com/service-chambers/${product.slug}`
      }
    };
  }

  return { title: 'Not Found' };
}

export default async function ServiceBrakesSlugPage(
  props: { 
    params: Promise<{ slug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const params = await props.params;
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  const { slug } = params;

  // 1. Is it a Sub-Category?
  const meta = SERVICE_CHAMBERS_META[slug];
  if (meta) {
    let products = BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake');
    
    // Apply strict category filtering
    if (slug.includes('type-20')) {
      products = products.filter(c => c.type.includes('Type 20'));
    } else if (slug.includes('type-30')) {
      products = products.filter(c => c.type.includes('Type 30'));
    } else if (slug.includes('type-12-16-24')) {
      products = products.filter(c => c.type.includes('Type 12') || c.type.includes('Type 16') || c.type.includes('Type 24'));
    } else if (slug.includes('welded-clevis')) {
      products = products.filter(c => c.name.toLowerCase().includes('welded'));
    } else if (slug.includes('type-36')) {
      products = products.filter(c => c.type.includes('Type 36'));
    }

    return (
      <ProductListingLayout
        title={meta.name}
        description={meta.desc}
        badge="Sub-Category"
        baseCategory="service-chambers"
        products={products}
        searchParams={searchParams}
        seoText={meta.seoText}
        isSubCategory={true}
        breadcrumbs={[
          { label: 'Service Brakes', href: '/service-chambers' },
          { label: meta.name }
        ]}
      />
    );
  }

  // 2. Is it a specific product?
  const product = BRAKE_CHAMBERS.find(p => p.slug === slug && p.category === 'Service Brake');
  if (product) {
    return (
      <ProductDetailLayout 
        product={product} 
        categoryName="Service Chambers" 
        categoryPath="service-chambers" 
      />
    );
  }

  notFound();
}

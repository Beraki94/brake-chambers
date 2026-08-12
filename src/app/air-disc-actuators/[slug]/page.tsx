import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS } from '@/lib/data';
import { AIR_DISC_ACTUATORS_META } from '@/lib/categoryMeta';
import ProductListingLayout from '@/components/products/ProductListingLayout';
import ProductDetailLayout from '@/components/product-detail/ProductDetailLayout';

export async function generateStaticParams() {
  const categories = Object.keys(AIR_DISC_ACTUATORS_META).map((slug) => ({ slug }));
  const products = BRAKE_CHAMBERS.filter(p => p.category === 'Air Disc Actuator').map(p => ({ slug: p.slug }));
  return [...categories, ...products];
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  
  const meta = AIR_DISC_ACTUATORS_META[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.desc,
      keywords: [meta.name, 'Air Disc Brakes', 'ADB Actuators', 'Commercial Air Brakes'],
    };
  }

  const product = BRAKE_CHAMBERS.find(p => p.slug === slug && p.category === 'Air Disc Actuator');
  if (product) {
    return {
      title: `${product.name} | BRC Manufacturer`,
      description: `Wholesale ${product.name}. Factory direct pricing.`,
      alternates: {
        canonical: `https://www.brcbrakechambers.com/air-disc-actuators/${product.slug}`
      }
    };
  }

  return { title: 'Not Found' };
}

export default async function AirDiscActuatorsSlugPage(
  props: { 
    params: Promise<{ slug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const params = await props.params;
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  const { slug } = params;

  // 1. Is it a Sub-Category?
  const meta = AIR_DISC_ACTUATORS_META[slug];
  if (meta) {
    let products = BRAKE_CHAMBERS.filter(c => c.category === 'Air Disc Actuator');
    
    // Apply strict category filtering
    if (slug.includes('16-18')) {
      products = products.filter(c => c.type.includes('Type 16') || c.type.includes('Type 18'));
    } else if (slug.includes('20-24')) {
      products = products.filter(c => c.type.includes('Type 20/24'));
    } else if (slug.includes('24-24')) {
      products = products.filter(c => c.type.includes('Type 24/24'));
    } else if (slug.includes('24-30')) {
      products = products.filter(c => c.type.includes('Type 24/30'));
    }

    return (
      <ProductListingLayout
        title={meta.name}
        description={meta.desc}
        badge="Sub-Category"
        baseCategory="air-disc-actuators"
        products={products}
        searchParams={searchParams}
        seoText={meta.seoText}
        isSubCategory={true}
        breadcrumbs={[
          { label: 'Air Disc Actuators', href: '/air-disc-actuators' },
          { label: meta.name }
        ]}
      />
    );
  }

  // 2. Is it a specific product?
  const product = BRAKE_CHAMBERS.find(p => p.slug === slug && p.category === 'Air Disc Actuator');
  if (product) {
    return (
      <ProductDetailLayout 
        product={product} 
        categoryName="Air Disc Actuators" 
        categoryPath="air-disc-actuators" 
      />
    );
  }

  notFound();
}

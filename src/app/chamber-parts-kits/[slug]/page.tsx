import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BRAKE_ACCESSORIES } from '@/lib/data';
import { CHAMBER_PARTS_KITS_META } from '@/lib/categoryMeta';
import ProductListingLayout from '@/components/ProductListingLayout';
import ProductDetailLayout from '@/components/ProductDetailLayout';

export async function generateStaticParams() {
  const categories = Object.keys(CHAMBER_PARTS_KITS_META).map((slug) => ({ slug }));
  const products = BRAKE_ACCESSORIES.map(p => ({ slug: p.slug }));
  return [...categories, ...products];
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  
  const meta = CHAMBER_PARTS_KITS_META[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.desc,
      keywords: [meta.name, 'Commercial Air Brakes', 'Brake Chamber Parts'],
    };
  }

  const product = BRAKE_ACCESSORIES.find(p => p.slug === slug);
  if (product) {
    return {
      title: `${product.name} | BRC Manufacturer`,
      description: `Wholesale ${product.name}. Factory direct pricing.`,
      alternates: {
        canonical: `https://www.brcbrakechambers.com/chamber-parts-kits/${product.slug}`
      }
    };
  }

  return { title: 'Not Found' };
}

export default async function ChamberPartsKitsSlugPage(
  props: { 
    params: Promise<{ slug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const params = await props.params;
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  const { slug } = params;

  // 1. Is it a Sub-Category?
  const meta = CHAMBER_PARTS_KITS_META[slug];
  if (meta) {
    let products = [...BRAKE_ACCESSORIES];
    
    // Apply strict category filtering
    if (slug === 'air-brake-chamber-rebuild-kits') {
      products = products.filter(c => c.category === 'Other');
    } else if (slug === 'brake-chamber-diaphragms') {
      products = products.filter(c => c.category === 'Diaphragm');
    } else if (slug === 'brake-chamber-caging-bolts-tools') {
      products = products.filter(c => c.category === 'Caging Bolt');
    } else if (slug === 'brake-chamber-clamp-bands') {
      products = products.filter(c => c.category === 'Clamp Band');
    } else if (slug === 'automatic-manual-slack-adjusters') {
      products = products.filter(c => c.category === 'Slack Adjuster');
    } else if (slug === 'clevis-pins-slack-adjuster-hardware') {
      products = products.filter(c => c.category === 'Other');
    }

    return (
      <ProductListingLayout
        title={meta.name}
        description={meta.desc}
        badge="Sub-Category"
        baseCategory="chamber-parts-kits"
        products={products}
        searchParams={searchParams}
        seoText={meta.seoText}
        isSubCategory={true}
        breadcrumbs={[
          { label: 'Chamber Parts & Kits', href: '/chamber-parts-kits' },
          { label: meta.name }
        ]}
        cardType="accessory"
      />
    );
  }

  // 2. Is it a specific product?
  const product = BRAKE_ACCESSORIES.find(p => p.slug === slug);
  if (product) {
    return (
      <ProductDetailLayout 
        product={product} 
        categoryName="Parts & Kits" 
        categoryPath="chamber-parts-kits" 
      />
    );
  }

  notFound();
}

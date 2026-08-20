import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import ProductDetailLayout from '@/components/product-detail/ProductDetailLayout';

export async function generateStaticParams() {
  const chambers = BRAKE_CHAMBERS.map((p) => ({ slug: p.slug }));
  const accessories = BRAKE_ACCESSORIES.map((p) => ({ slug: p.slug }));
  return [...chambers, ...accessories];
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  
  const chamber = BRAKE_CHAMBERS.find(p => p.slug === slug);
  const accessory = BRAKE_ACCESSORIES.find(p => p.slug === slug);
  const product = chamber || accessory;

  if (product) {
    const keywords = [
      product.name, 
      product.category,
      'Commercial Air Brake', 
      'OEM Replacement',
      ...('crossReferenceBrands' in product ? (product.crossReferenceBrands || []) : []),
      ...('oemPartNumbers' in product ? (product.oemPartNumbers?.map((o: any) => o.partNumber) || []) : [])
    ].join(', ');

    return {
      title: `${product.name} | BRC Manufacturer`,
      description: `Wholesale ${product.name}. Direct replacement for commercial applications. Factory direct pricing and bulk shipping available.`,
      keywords,
    };
  }

  return { title: 'Product Not Found' };
}

export default async function ProductRootPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const { slug } = params;

  const chamber = BRAKE_CHAMBERS.find(p => p.slug === slug);
  const accessory = BRAKE_ACCESSORIES.find(p => p.slug === slug);
  const product = chamber || accessory;

  if (product) {
    // Determine categoryName and categoryPath
    let categoryName = '';
    let categoryPath = '';
    
    if (product.category === 'Spring Brake') {
      categoryName = 'Spring Brakes';
      categoryPath = 'spring-brakes';
    } else if (product.category === 'Service Brake') {
      categoryName = 'Service Chambers';
      categoryPath = 'service-chambers';
    } else if (product.category === 'Air Disc Actuator') {
      categoryName = 'Air Disc Actuators';
      categoryPath = 'air-disc-brake-actuator';
    } else {
      categoryName = 'Parts & Kits';
      categoryPath = 'chamber-parts-kits';
    }

    return (
      <ProductDetailLayout 
        product={product} 
        categoryName={categoryName} 
        categoryPath={categoryPath} 
      />
    );
  }

  notFound();
}

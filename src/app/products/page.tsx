import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ProductsClient from '@/components/page-clients/ProductsClient';

export const metadata: Metadata = {
  title: 'All Products | BRC Brake Chambers',
  description: 'Browse our complete catalog of premium commercial vehicle brake chambers, air disc actuators, and replacement parts.',
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsClient />
      <BreadcrumbSchema items={[{ name: 'Products' }]} />
    </main>
  );
}

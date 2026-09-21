import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ProductsClient from '@/features/products/components/ProductsClient';

export const metadata: Metadata = {
  title: 'Commercial Brake Chamber Catalog — Spring, Service & ADB | BRC',
  description: "Browse BRC's full range of OEM-grade brake chambers: spring brakes, service chambers, air disc actuators, and replacement parts. IATF 16949 standard manufacturing.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsClient />
      <BreadcrumbSchema items={[{ name: 'Products' }]} />
    </main>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ManufacturingClient from '@/features/manufacturing/components/ManufacturingClient';

export const metadata: Metadata = {
  title: 'Brake Chamber Manufacturing in China — Inside Our IATF 16949-Aligned Factory | BRC',
  description: 'Tour our 50,000 sqm brake chamber factory in Zhejiang, China. IATF 16949-aligned production. 1M+ chambers produced annually. Serving 30+ countries.',
};

export default function ManufacturingPage() {
  return (
    <main>
      <ManufacturingClient />
      <BreadcrumbSchema items={[{ name: 'Manufacturing' }]} />
    </main>
  );
}

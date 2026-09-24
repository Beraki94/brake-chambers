import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ManufacturingClient from '@/features/manufacturing/components/ManufacturingClient';

export const metadata: Metadata = {
  title: 'Brake Chamber Manufacturing: Inside Our IATF 16949 Factory | BRC',
  description: 'Tour our 50,000 sqm brake chamber factory in Zhejiang, China. See how we cast, machine, assemble & stress-test every chamber to IATF 16949 standards. Export-ready.',
};

export default function ManufacturingPage() {
  return (
    <main>
      <ManufacturingClient />
      <BreadcrumbSchema items={[{ name: 'Manufacturing' }]} />
    </main>
  );
}

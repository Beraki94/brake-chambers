import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ManufacturingClient from '@/features/manufacturing/components/ManufacturingClient';

export const metadata: Metadata = {
  title: 'Manufacturing & OEM Solutions | BRC Brake Chambers',
  description: 'Discover BRC\'s vertically integrated manufacturing process, custom OEM actuator solutions, private labeling, and high-volume wholesale distribution.',
};

export default function ManufacturingPage() {
  return (
    <main>
      <ManufacturingClient />
      <BreadcrumbSchema items={[{ name: 'Manufacturing' }]} />
    </main>
  );
}

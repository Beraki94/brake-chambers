import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import MaterialSourcingClient from '@/features/manufacturing/components/MaterialSourcingClient';

export const metadata: Metadata = {
  title: 'Material Sourcing — Steel, Rubber & Coatings | BRC Brake Chambers',
  description: 'How BRC sources and qualifies premium raw materials for brake chambers: high-tensile steel housings, extreme-temperature rubber diaphragms, power springs, and multi-layer corrosion protection.',
};

export default function MaterialSourcingPage() {
  return (
    <main>
      <MaterialSourcingClient />
      <BreadcrumbSchema items={[
        { name: 'Manufacturing', item: '/manufacturing' },
        { name: 'Material Sourcing' }
      ]} />
    </main>
  );
}

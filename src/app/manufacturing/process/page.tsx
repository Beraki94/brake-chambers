import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ProductionProcessClient from '@/features/manufacturing/components/ProductionProcessClient';

export const metadata: Metadata = {
  title: 'Manufacturing Process — 6-Stage Production Line | BRC Brake Chambers',
  description: 'Walk through BRC\'s 6-stage brake chamber manufacturing process: steel stamping, robotic welding, CNC machining, assembly, e-coating, and 100% end-of-line pneumatic testing.',
};

export default function ProductionProcessPage() {
  return (
    <main>
      <ProductionProcessClient />
      <BreadcrumbSchema items={[
        { name: 'Manufacturing', item: '/manufacturing' },
        { name: 'Manufacturing Process' }
      ]} />
    </main>
  );
}

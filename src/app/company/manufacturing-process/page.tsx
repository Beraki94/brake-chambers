import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ProductionProcessClient from '@/components/page-clients/ProductionProcessClient';

export const metadata: Metadata = {
  title: 'Manufacturing & Manufacturing Process | BRC Brake Chambers',
  description: 'Explore BRC\'s automated robotic welding, CNC machining, and continuous flow assembly lines that guarantee absolute consistency.',
};

export default function ProductionProcessPage() {
  return (
    <main>
      <ProductionProcessClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'Manufacturing Process' }
      ]} />
    </main>
  );
}

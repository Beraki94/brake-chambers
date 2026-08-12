import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import MaterialSourcingClient from '@/components/page-clients/MaterialSourcingClient';

export const metadata: Metadata = {
  title: 'Raw Material Sourcing | BRC Brake Chambers',
  description: 'Learn about the premium 8-gauge steel, advanced neoprene rubber compounds, and heavy epoxy coatings used in BRC brake chambers.',
};

export default function MaterialSourcingPage() {
  return (
    <main>
      <MaterialSourcingClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'Material Sourcing' }
      ]} />
    </main>
  );
}

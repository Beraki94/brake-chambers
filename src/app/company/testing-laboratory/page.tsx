import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import TestingLaboratoryClient from '@/components/page-clients/TestingLaboratoryClient';

export const metadata: Metadata = {
  title: 'Quality Testing Laboratory | BRC Brake Chambers',
  description: 'Inside the BRC testing lab: 1 million+ cycle testing, salt spray corrosion chambers, and 100% end-of-line pneumatic leak testing.',
};

export default function TestingLaboratoryPage() {
  return (
    <main>
      <TestingLaboratoryClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'Testing Laboratory' }
      ]} />
    </main>
  );
}

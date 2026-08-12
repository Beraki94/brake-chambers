import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ResearchAndInnovationsClient from '@/components/page-clients/ResearchAndInnovationsClient';

export const metadata: Metadata = {
  title: 'R&D and Innovations | BRC Brake Chambers',
  description: 'Discover how BRC\'s engineering team is developing next-generation Air Disc Brakes (ADB) and custom OEM solutions.',
};

export default function ResearchAndInnovationsPage() {
  return (
    <main>
      <ResearchAndInnovationsClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'Research & Innovations' }
      ]} />
    </main>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import OurStoryClient from '@/components/page-clients/OurStoryClient';

export const metadata: Metadata = {
  title: 'Our Story & History | BRC Brake Chambers',
  description: 'Discover the history of BRC, from a specialized engineering firm to a global manufacturer of heavy-duty commercial air brake components.',
};

export default function OurStoryPage() {
  return (
    <main>
      <OurStoryClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'Our Story' }
      ]} />
    </main>
  );
}

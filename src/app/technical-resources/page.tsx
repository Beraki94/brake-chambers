import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import TechnicalResourcesClient from '@/components/page-clients/TechnicalResourcesClient';

export const metadata: Metadata = {
  title: 'Technical Resources & Documentation | BRC Brake Chambers',
  description: 'Download installation manuals, maintenance guides, technical specifications, and warranty information for all BRC brake chambers.',
};

export default function TechnicalResourcesPage() {
  return (
    <main>
      <TechnicalResourcesClient />
      <BreadcrumbSchema items={[{ name: 'Technical Resources' }]} />
    </main>
  );
}

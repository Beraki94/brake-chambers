import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FacilityOverviewClient from '@/components/page-clients/FacilityOverviewClient';

export const metadata: Metadata = {
  title: 'Production Facility & Global Logistics | BRC Brake Chambers',
  description: 'Take a look inside BRC\'s IATF 16949 certified manufacturing facilities and discover our global warehousing and logistics capabilities.',
};

export default function FacilityOverviewPage() {
  return (
    <main>
      <FacilityOverviewClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'Production Facility' }
      ]} />
    </main>
  );
}

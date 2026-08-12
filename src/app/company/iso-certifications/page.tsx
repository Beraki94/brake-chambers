import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import IsoCertificationsClient from '@/components/page-clients/IsoCertificationsClient';

export const metadata: Metadata = {
  title: 'ISO 9001 Certifications & Compliance | BRC Brake Chambers',
  description: 'BRC facilities are fully ISO 9001:2015 certified, manufacturing products that comply with SAE J1469 and FMVSS 121 standards.',
};

export default function IsoCertificationsPage() {
  return (
    <main>
      <IsoCertificationsClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'ISO Certifications' }
      ]} />
    </main>
  );
}

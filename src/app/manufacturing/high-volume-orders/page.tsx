import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import HighVolumeOrdersClient from '@/features/manufacturing/components/HighVolumeOrdersClient';

export const metadata: Metadata = {
  title: 'High Volume Brake Chamber Orders — Factory-Direct Pricing | BRC',
  description: 'Factory-direct tiered pricing on high-volume brake chamber orders. From 500-unit starter orders to 20,000+ unit strategic programs with dedicated account management and container optimization.',
};

export default function HighVolumeOrdersPage() {
  return (
    <main>
      <HighVolumeOrdersClient />
      <BreadcrumbSchema items={[
        { name: 'Manufacturing', item: '/manufacturing' },
        { name: 'High Volume Orders' }
      ]} />
    </main>
  );
}

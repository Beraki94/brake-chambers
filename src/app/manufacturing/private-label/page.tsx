import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import PrivateLabelClient from '@/features/manufacturing/components/PrivateLabelClient';

export const metadata: Metadata = {
  title: 'Private Label & White Label Brake Chambers | BRC',
  description: 'Launch your own aftermarket brake chamber brand. BRC manufactures, brands, and packages brake chambers under your name — custom paint, laser engraving, branded packaging, and full factory-direct margins.',
};

export default function PrivateLabelPage() {
  return (
    <main>
      <PrivateLabelClient />
      <BreadcrumbSchema items={[
        { name: 'Manufacturing', item: '/manufacturing' },
        { name: 'Private Label & White Label' }
      ]} />
    </main>
  );
}

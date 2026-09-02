import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import CustomOemClient from '@/features/manufacturing/components/CustomOemClient';

export const metadata: Metadata = {
  title: 'Custom OEM Brake Chamber Manufacturing | BRC',
  description: 'Partner with BRC to engineer and mass-produce proprietary brake chamber designs. Full CAD prototyping, FEA validation, in-house tooling, and 100% IP protection from NDA to delivery.',
};

export default function CustomOemPage() {
  return (
    <main>
      <CustomOemClient />
      <BreadcrumbSchema items={[
        { name: 'Manufacturing', item: '/manufacturing' },
        { name: 'Custom OEM Manufacturing' }
      ]} />
    </main>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import TestingLaboratoryClient from '@/features/manufacturing/components/TestingLaboratoryClient';

export const metadata: Metadata = {
  title: 'Quality Assurance & Testing Lab — Brake Chamber QA | BRC',
  description: 'Inside BRC\'s 24-hour QA laboratory: 100% pneumatic leak testing, 1M+ cycle endurance tests, salt spray corrosion chambers, and FMVSS-121 compliance validation for every brake chamber.',
};

export default function TestingLaboratoryPage() {
  return (
    <main>
      <TestingLaboratoryClient />
      <BreadcrumbSchema items={[
        { name: 'Manufacturing', item: '/manufacturing' },
        { name: 'Quality Assurance & Lab' }
      ]} />
    </main>
  );
}

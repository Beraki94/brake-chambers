import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import LeadershipClient from '@/components/page-clients/LeadershipClient';

export const metadata: Metadata = {
  title: 'Executive Leadership Team | BRC Brake Chambers',
  description: 'Meet the executive and engineering leadership team driving innovation at BRC.',
};

export default function LeadershipPage() {
  return (
    <main>
      <LeadershipClient />
      <BreadcrumbSchema items={[
        { name: 'Company', item: '/company' },
        { name: 'Leadership Team' }
      ]} />
    </main>
  );
}

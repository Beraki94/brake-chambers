import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ApplicationsClient from '@/features/applications/components/ApplicationsClient';

export const metadata: Metadata = {
  title: 'Industry Applications | Commercial Brake Chambers | BRC',
  description: 'Explore BRC commercial air brake chambers engineered for specific industry applications including linehaul freight, severe-duty refuse, and transit buses.',
  alternates: {
    canonical: '/applications',
  },
  openGraph: {
    title: 'Industry Applications | Commercial Brake Chambers | BRC',
    description: 'Explore BRC commercial air brake chambers engineered for specific industry applications.',
    url: '/applications',
    type: 'website',
  }
};

export default function ApplicationsPage() {
  return (
    <main>
      <ApplicationsClient />
      <BreadcrumbSchema items={[{ name: 'Applications' }]} />
    </main>
  );
}

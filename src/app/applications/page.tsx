import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ApplicationsClient from '@/features/applications/components/ApplicationsClient';

export const metadata: Metadata = {
  title: 'Brake Chambers by Application | Trucks, Trailers, Transit & Off-Highway | BRC',
  description: 'Find the right BRC brake chamber for your vehicle or industry. Trucks, trailers, transit buses, refuse, mining, and off-highway applications. IATF 16949 certified.',
  alternates: {
    canonical: '/applications',
  },
  openGraph: {
    title: 'Brake Chambers by Application | Trucks, Trailers, Transit & Off-Highway | BRC',
    description: 'Find the right BRC brake chamber for your vehicle or industry. Trucks, trailers, transit buses, refuse, mining, and off-highway applications. IATF 16949 certified.',
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

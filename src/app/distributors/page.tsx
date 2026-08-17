import { Metadata } from 'next';
import DistributorsClient from '@/components/page-clients/DistributorsClient';

export const metadata: Metadata = {
  title: 'Global Distributor Network & Partner Portal | BRC Brake Chambers',
  description: 'Find a BRC distributor near you, or log in to the wholesale partner portal to access B2B pricing, inventory, and place bulk orders.',
  openGraph: {
    title: 'Global Distributor Network | BRC Brake Chambers',
    description: 'Find a BRC distributor near you, or log in to the wholesale partner portal.',
    url: 'https://brc-brakes.com/distributors',
    siteName: 'BRC Brake Chambers',
    images: [
      {
        url: '/images/og-distributors.jpg',
        width: 1200,
        height: 630,
        alt: 'BRC Global Distributor Network',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function DistributorsPage() {
  return <DistributorsClient />;
}

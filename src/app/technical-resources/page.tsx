import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import TechnicalResourcesClient from '@/features/technical-resources/components/TechnicalResourcesClient';

export const metadata: Metadata = {
  title: 'Brake Chamber Technical Resources | BRC Engineering',
  description: 'Access BRC brake chamber installation guides, size & dimension charts, stroke length limits, caging procedures, and selection guides. Free technical documentation for Types 12–36 service and spring brake chambers.',
  keywords: 'brake chamber installation guide, brake chamber size chart, spring brake caging procedure, stroke length limits, CVSA readjustment limits, brake chamber dimensions, Type 30 brake chamber specs, long stroke brake chamber, brake chamber selection guide, commercial brake chamber specifications',
  alternates: {
    canonical: 'https://brcengineering.com/technical-resources',
  },
  openGraph: {
    title: 'Brake Chamber Technical Resources | BRC Engineering',
    description: 'Installation guides, size charts, stroke length specs, and caging procedures for all BRC brake chamber types. Free technical documentation.',
    url: 'https://brcengineering.com/technical-resources',
    type: 'website',
  },
};

export default function TechnicalResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Brake Chamber Technical Resources & Documentation",
    "description": "Comprehensive technical library for commercial brake chambers including installation guides, size charts, stroke length specifications, caging procedures, and selection guides.",
    "url": "https://brcengineering.com/technical-resources",
    "publisher": {
      "@type": "Organization",
      "name": "BRC Brake Chambers",
      "url": "https://brcengineering.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Brake Chamber Installation Guides",
          "url": "https://brcengineering.com/technical-resources/installation"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Safe Caging Procedures",
          "url": "https://brcengineering.com/technical-resources/caging"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Size & Dimension Charts",
          "url": "https://brcengineering.com/technical-resources/size-charts"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Stroke Length Guide & CVSA Limits",
          "url": "https://brcengineering.com/technical-resources/stroke-length"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Chamber Selection Guides",
          "url": "https://brcengineering.com/technical-resources/selection-guides"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Visual Identification Guide",
          "url": "https://brcengineering.com/technical-resources/identification"
        }
      ]
    }
  };

  return (
    <main>
      <Script
        id="technical-resources-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechnicalResourcesClient />
      <BreadcrumbSchema items={[
        { name: 'Technical Resources' }
      ]} />
    </main>
  );
}

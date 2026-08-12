import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import OEMCrossReferenceClient from '@/components/page-clients/OEMCrossReferenceClient';
import TrendingModelsMarquee from '@/components/shared/TrendingModelsMarquee';

export const metadata: Metadata = {
  title: 'OEM Cross-Reference Tool | BRC Brake Chambers',
  description: 'Instantly find BRC factory-direct aftermarket equivalents for Bendix, Haldex, Meritor, and Wabco brake chambers. Free commercial air brake cross-reference.',
  keywords: ['Brake Chamber Cross Reference', 'Bendix Interchange', 'Haldex Replacement', 'Meritor Cross Reference', 'Wabco Air Brakes', 'MGM Brakes'],
};

export default function OEMCrossReference() {
  return (
    <>
      <OEMCrossReferenceClient />
      <TrendingModelsMarquee />

      {/* JSON-LD Schema */}
      <Script id="cross-reference-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "BRC Brake Chamber Cross-Reference Tool",
          "operatingSystem": "Web",
          "applicationCategory": "BusinessApplication",
          "description": "Find aftermarket equivalents for major commercial air brake brands including Bendix, Haldex, Meritor, Wabco, and MGM.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "provider": {
            "@type": "Organization",
            "name": "BRC Brake Chambers"
          }
        }
      ) }} />
      <BreadcrumbSchema items={[{ name: 'OEM Cross-Reference' }]} />
    </>
  );
}

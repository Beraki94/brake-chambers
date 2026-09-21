import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import OEMCrossReferenceClient from '@/features/oem/components/OEMCrossReferenceClient';


export const metadata: Metadata = {
  title: 'OEM Brake Chamber Cross-Reference — Find Direct Replacements | BRC',
  description: 'Search Bendix, Haldex, Meritor, Knorr-Bremse, WABCO, SORL, TSE & MGM part numbers and find the exact BRC brake chamber equivalent. Verified fit, form & function.',
  keywords: ['Brake Chamber Cross Reference', 'Bendix Interchange', 'Haldex Replacement', 'Meritor Cross Reference', 'Wabco Air Brakes', 'MGM Brakes'],
};

export default function OEMCrossReference() {
  return (
    <>
      <OEMCrossReferenceClient />


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

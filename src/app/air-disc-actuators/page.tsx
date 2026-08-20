import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { AIR_DISC_ACTUATORS } from '@/lib/data';
import ProductListingLayout from '@/components/products/ProductListingLayout';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';

export const metadata: Metadata = {
  title: 'Air Disc Brake (ADB) Actuators | BRC Manufacturer',
  description: 'Factory-direct heavy-duty Air Disc Brake (ADB) actuators. Direct aftermarket replacements for Bendix, Meritor, and Wabco. ISO 9001 certified manufacturer.',
  keywords: ['Air Disc Actuators', 'ADB Actuators', 'Type 20/24 ADB', 'Commercial Air Brakes', 'Bendix ADB22X Replacement'],
};

export default async function AirDiscActuatorsPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base Filter for ADB Actuators
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Air Disc Actuator');

  // Legacy basic filters for main page
  if (searchParams?.filter) {
    const filter = searchParams.filter as string;
    if (filter === 'Standard') {
      products = products.filter(c => c.strokeSize === 'Standard');
    }
  }

  const seoContent = (
    <>
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Why Upgrade to BRC Air Disc Actuators?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed text-sm md:text-base">
          <div>
            <p className="mb-4">
              The commercial trucking industry is rapidly transitioning from traditional drum brakes to Air Disc Brakes (ADB) due to their significantly shorter stopping distances, reduced brake fade, and simplified maintenance. BRC's line of Air Disc Actuators is engineered to maximize these benefits.
            </p>
            <p>
              Unlike standard S-cam chambers, ADB actuators push directly against a caliper mechanism. This requires an actuator with an extremely precise force output curve and a sealed housing to prevent moisture ingress, which can corrode internal caliper components.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Direct OEM Replacements:</strong> Our ADB actuators are designed to perfectly interface with all major disc brake calipers on the market, including Bendix ADB22X, Meritor EX+, and Wabco PAN/MAXX systems.
            </p>
            <ul className="space-y-2 mt-4 list-disc pl-5 text-slate-600">
              <li>Internal breather tube designs to completely seal out moisture and contaminants.</li>
              <li>High-strength power springs for reliable parking brake application on steep grades.</li>
              <li>Lightweight, high-strength aluminum and steel hybrid construction.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
        <GlobalFAQAccordion faqs={[
          {
            q: 'Can I replace a standard spring brake with an ADB actuator?',
            a: 'No, ADB actuators are specifically designed to mount to an air disc brake caliper, not an S-cam slack adjuster. The pushrod length and mounting bolt patterns are entirely different.'
          },
          {
            q: 'Are your ADB actuators compatible with Bendix ADB22X calipers?',
            a: 'Yes, our Type 18/24 and Type 20/24 ADB actuators are frequently used as direct aftermarket replacements for Bendix ADB22X systems on both steer and drive axles.'
          }
        ]} />
      </section>

      <Script id="adb-actuators-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Air Disc Brake (ADB) Actuators",
          "description": "Factory-direct heavy-duty Air Disc Brake (ADB) actuators. Direct aftermarket replacements for Bendix, Meritor, and Wabco.",
          "url": "https://www.brcbrakechambers.com/air-disc-actuators",
          "manufacturer": {
            "@type": "Organization",
            "name": "BRC Brake Chambers"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I replace a standard spring brake with an ADB actuator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, ADB actuators are specifically designed to mount to an air disc brake caliper, not an S-cam slack adjuster. The pushrod length and mounting bolt patterns are entirely different."
              }
            },
            {
              "@type": "Question",
              "name": "Are your ADB actuators compatible with Bendix ADB22X calipers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our Type 18/24 and Type 20/24 ADB actuators are frequently used as direct aftermarket replacements for Bendix ADB22X systems on both steer and drive axles."
              }
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.brcbrakechambers.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Air Disc Actuators",
              "item": "https://www.brcbrakechambers.com/air-disc-actuators"
            }
          ]
        }
      ]) }} />
    </>
  );

  return (
    <ProductListingLayout
      title="Air Disc Actuators (ADB)"
      description="Next-generation Air Disc Brake (ADB) actuators for modern commercial vehicles. Superior stopping power and completely sealed from environmental contaminants."
      badge="Disc Brake Systems"
      baseCategory="air-disc-actuators"
      products={products}
      searchParams={searchParams}
      visualizerType="adp"
      seoText={seoContent}
      breadcrumbs={[{ label: 'Air Disc Actuators' }]}
    />
  );
}

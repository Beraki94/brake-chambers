import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { BRAKE_CHAMBERS } from '@/lib/data';
import ProductListingLayout from '@/components/products/ProductListingLayout';

export const metadata: Metadata = {
  title: 'Heavy-Duty Commercial Service Brake Chambers | BRC Manufacturer',
  description: 'Factory-direct heavy-duty service brake chambers for steer axles and primary braking. Direct aftermarket replacements for Bendix, Meritor, Haldex, and Wabco. ISO 9001 certified manufacturer.',
  keywords: ['Service Brake Chambers', 'Type 20', 'Type 24', 'Type 30', 'Commercial Air Brakes', 'Heavy-Duty Brake Chambers', 'Bendix Replacement', 'Meritor Replacement'],
};

export default async function ServiceBrakesPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base Filter for Service Brakes
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake');

  // Legacy basic filters for main page
  if (searchParams?.filter) {
    const filter = searchParams.filter as string;
    if (filter === 'Standard') {
      products = products.filter(c => c.strokeSize === 'Standard');
    } else if (filter === 'Long Stroke') {
      products = products.filter(c => c.strokeSize === 'Long Stroke');
    }
  }

  const seoContent = (
    <>
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Why Choose BRC Service Brake Chambers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed text-sm md:text-base">
          <div>
            <p className="mb-4">
              Service brake chambers are the heart of your vehicle's primary braking system, translating compressed air into the mechanical force needed to stop Class 8 trucks and commercial trailers. At BRC, we manufacture high-reliability service chambers designed specifically for front steer axles and heavy-duty applications.
            </p>
            <p>
              Our ISO 9001:2015 certified manufacturing process ensures that every service chamber delivers consistent, even braking force. We utilize heavy-gauge steel housings and premium elastomeric diaphragms to prevent premature wear and resist corrosion from harsh road chemicals.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Direct OEM Replacements:</strong> BRC service chambers are engineered to drop directly into existing Bendix, Meritor, Haldex, and Wabco setups without modification, ensuring rapid maintenance turnarounds.
            </p>
            <ul className="space-y-2 mt-4 list-disc pl-5 text-slate-600">
              <li>Available in multiple sizes including Type 16, Type 20, Type 24, and Type 30.</li>
              <li>Standard and Long Stroke (LS) options to match your exact application.</li>
              <li>Corrosion-resistant epoxy powder coating for extended service life.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">What is the difference between a service brake and a spring brake?</h3>
            <p className="text-slate-600 text-sm">A service brake chamber contains a single diaphragm and provides the primary stopping power when the driver presses the brake pedal. A spring brake includes an additional powerful mechanical spring for parking and emergency braking.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">When should I choose a Long Stroke (LS) service chamber?</h3>
            <p className="text-slate-600 text-sm">Long stroke chambers provide an extra margin of safety by allowing the pushrod to travel further before bottoming out. Always replace a long stroke chamber with another long stroke chamber, identified typically by square ports or special tags.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">Are these direct replacements for Bendix service chambers?</h3>
            <p className="text-slate-600 text-sm">Yes, our service chambers are designed as exact aftermarket replacements for Bendix, Meritor, and other major OEM brands. The mounting bolts, air ports, and pushrod lengths match OEM specifications perfectly.</p>
          </div>
        </div>
      </section>

      <Script id="service-chambers-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Heavy-Duty Commercial Service Brake Chambers",
          "description": "Factory-direct heavy-duty service brake chambers for steer axles and primary braking. Direct aftermarket replacements for Bendix, Meritor, Haldex, and Wabco.",
          "url": "https://www.brcbrakechambers.com/service-chambers",
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
              "name": "What is the difference between a service brake and a spring brake?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A service brake chamber contains a single diaphragm and provides the primary stopping power when the driver presses the brake pedal. A spring brake includes an additional powerful mechanical spring for parking and emergency braking."
              }
            },
            {
              "@type": "Question",
              "name": "When should I choose a Long Stroke (LS) service chamber?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Long stroke chambers provide an extra margin of safety by allowing the pushrod to travel further before bottoming out. Always replace a long stroke chamber with another long stroke chamber, identified typically by square ports or special tags."
              }
            },
            {
              "@type": "Question",
              "name": "Are these direct replacements for Bendix service chambers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our service chambers are designed as exact aftermarket replacements for Bendix, Meritor, and other major OEM brands. The mounting bolts, air ports, and pushrod lengths match OEM specifications perfectly."
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
              "name": "Service Brakes",
              "item": "https://www.brcbrakechambers.com/service-chambers"
            }
          ]
        }
      ]) }} />
    </>
  );

  return (
    <ProductListingLayout
      title="Service Brake Chambers"
      description="Factory-direct durable service brake chambers for steer axles and primary braking. Built to exceed OEM specifications. ISO 9001:2015 Certified."
      badge="Primary Braking"
      baseCategory="service-chambers"
      products={products}
      searchParams={searchParams}
      visualizerType="service"
      seoText={seoContent}
      breadcrumbs={[{ label: 'Service Brakes' }]}
    />
  );
}

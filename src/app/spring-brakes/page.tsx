import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { BRAKE_CHAMBERS } from '@/lib/data';
import ProductListingLayout from '@/components/products/ProductListingLayout';

export const metadata: Metadata = {
  title: 'Heavy-Duty Commercial Spring Brake Chambers | BRC Manufacturer',
  description: 'Factory-direct heavy-duty spring brake chambers. Direct aftermarket replacements for Bendix, Meritor, Haldex, and Wabco. ISO 9001 certified manufacturer.',
  keywords: ['Spring Brake Chambers', 'Type 30/30', 'Commercial Air Brakes', 'Heavy-Duty Brake Chambers', 'Bendix Replacement', 'Meritor Replacement'],
};

export default async function SpringBrakesPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base Filter for Spring Brakes
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake');

  // Legacy basic filters for main page
  if (searchParams?.filter) {
    const filter = searchParams.filter as string;
    if (filter === 'Piggyback Kit') {
      products = products.filter(c => c.name.toLowerCase().includes('piggyback'));
    } else if (filter === 'Long Stroke') {
      products = products.filter(c => c.strokeSize === 'Long Stroke');
    } else if (filter === 'Standard Stroke') {
      products = products.filter(c => c.strokeSize === 'Standard');
    } else if (filter === 'Complete Assembly') {
      products = products.filter(c => !c.name.toLowerCase().includes('piggyback'));
    }
  }

  const seoContent = (
    <>
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Why Choose BRC Spring Brake Chambers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed text-sm md:text-base">
          <div>
            <p className="mb-4">
              Commercial fleets require absolute reliability when it comes to parking and emergency braking. BRC's heavy-duty spring brake chambers are engineered to exceed OEM standards, providing maximum hold and stopping power for Class 8 trucks, trailers, and heavy-duty vehicles.
            </p>
            <p>
              Manufactured in our ISO 9001:2015 certified facility, our chambers feature heavy-gauge steel construction, high-tensile strength power springs, and a superior epoxy powder-coating that resists salt, magnesium chloride, and severe road conditions.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Direct OEM Replacements:</strong> Our spring brakes are designed as exact drop-in replacements for major brands, including Bendix, Meritor, Haldex, and Wabco, ensuring seamless installation and compliance.
            </p>
            <ul className="space-y-2 mt-4 list-disc pl-5 text-slate-600">
              <li>Available in popular sizes: Type 30/30, 30/30 Long Stroke, and 24/30.</li>
              <li>Premium heavy-duty diaphragms engineered for extreme temperatures (-40°C to 80°C).</li>
              <li>Tamper-resistant designs for enhanced mechanic safety during maintenance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">What does "Type 30/30" mean?</h3>
            <p className="text-slate-600 text-sm">The numbers indicate the effective area (in square inches) of the diaphragm for the service chamber (first number) and the spring chamber (second number). A Type 30/30 has 30 square inches of area for both braking functions.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">Are your spring brakes compatible with Bendix systems?</h3>
            <p className="text-slate-600 text-sm">Yes, our spring brake assemblies and piggyback kits are manufactured as direct aftermarket replacements for Bendix, Meritor, and other major OEM systems, matching exact stroke, pushrod length, and port angles.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">Should I replace the entire assembly or just use a piggyback kit?</h3>
            <p className="text-slate-600 text-sm">If the service chamber housing and pushrod are still in excellent condition and free of corrosion, a piggyback kit is a cost-effective solution. However, replacing the entire complete assembly is often recommended for maximum safety.</p>
          </div>
        </div>
      </section>

      <Script id="spring-brakes-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Heavy-Duty Commercial Spring Brake Chambers",
          "description": "Factory-direct heavy-duty spring brake chambers. Direct aftermarket replacements for Bendix, Meritor, Haldex, and Wabco.",
          "url": "https://www.brcbrakechambers.com/spring-brakes",
          "manufacturer": {
            "@type": "Organization",
            "name": "BRC Brake Chambers"
          }
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
              "name": "Spring Brakes",
              "item": "https://www.brcbrakechambers.com/spring-brakes"
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does 'Type 30/30' mean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The numbers indicate the effective area (in square inches) of the diaphragm for the service chamber (first number) and the spring chamber (second number). A Type 30/30 has 30 square inches of area for both braking functions."
              }
            },
            {
              "@type": "Question",
              "name": "Are your spring brakes compatible with Bendix systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our spring brake assemblies and piggyback kits are manufactured as direct aftermarket replacements for Bendix, Meritor, and other major OEM systems, matching exact stroke, pushrod length, and port angles."
              }
            },
            {
              "@type": "Question",
              "name": "Should I replace the entire assembly or just use a piggyback kit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If the service chamber housing and pushrod are still in excellent condition and free of corrosion, a piggyback kit is a cost-effective solution. However, replacing the entire complete assembly is often recommended for maximum safety."
              }
            }
          ]
        }
      ]) }} />
    </>
  );

  return (
    <ProductListingLayout
      title="Spring Brake Chambers"
      description="Factory-direct heavy-duty spring brake chambers for primary and emergency braking. Built to exceed OEM specifications. ISO 9001:2015 Certified."
      badge="Emergency & Parking"
      baseCategory="spring-brakes"
      products={products}
      searchParams={searchParams}
      visualizerType="spring"
      seoText={seoContent}
      breadcrumbs={[{ label: 'Spring Brakes' }]}
    />
  );
}

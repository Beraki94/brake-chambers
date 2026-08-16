import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListingLayout from '@/components/products/ProductListingLayout';

export const metadata: Metadata = {
  title: 'Heavy-Duty Commercial Brake Chamber Accessories | BRC Manufacturer',
  description: 'Factory-direct heavy-duty brake chamber accessories and replacement parts. Direct aftermarket replacements for Bendix, Meritor, Haldex, and Wabco. ISO 9001 certified manufacturer.',
  keywords: ['Brake Chamber Accessories', 'Replacement Diaphragms', 'Clevis Kits', 'Commercial Air Brakes', 'Bendix Replacement', 'Meritor Replacement'],
};

export default async function ChamberPartsKitsPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base Filter for Accessories
  let products = BRAKE_ACCESSORIES;

  // Legacy basic filters for main page
  if (searchParams?.filter) {
    const filter = searchParams.filter as string;
    if (filter === 'Diaphragm') {
      products = products.filter(c => c.category === 'Diaphragm');
    } else if (filter === 'Slack Adjuster') {
      products = products.filter(c => c.category === 'Slack Adjuster');
    }
  }

  const seoContent = (
    <>
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Why Choose BRC Brake Chamber Accessories?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed text-sm md:text-base">
          <div>
            <p className="mb-4">
              Regular maintenance is critical for the safety and longevity of your commercial air brake systems. BRC manufactures premium heavy-duty replacement parts and accessories, including high-performance diaphragms, clevis kits, and mounting hardware engineered to keep your fleet on the road.
            </p>
            <p>
              By controlling the entire manufacturing process in our ISO 9001:2015 certified facility, we offer uncompromised quality at factory-direct wholesale pricing. Every component is rigorously tested to ensure it meets or exceeds OEM performance standards.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Direct Aftermarket Replacements:</strong> Our accessories are engineered as exact fit replacements for industry-leading OEM brands. Whether you need to repair a Bendix, Meritor, Haldex, or Wabco unit, our parts drop right into your existing system with identical specifications.
            </p>
            <ul className="space-y-2 mt-4 list-disc pl-5 text-slate-600">
              <li>Proprietary synthetic rubber diaphragms operating seamlessly from -40°C to +80°C.</li>
              <li>Heavy-gauge steel hardware with advanced corrosion-resistant coating.</li>
              <li>Complete repair kits for simplified maintenance and reduced downtime.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">What brake chamber accessories do you offer?</h3>
            <p className="text-slate-600 text-sm">We provide a comprehensive range of replacement parts including premium diaphragms, clevis assemblies, clamp bands, return springs, and complete piggyback repair kits for both service and spring brake chambers.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">Are BRC accessories compatible with OEM chambers like Bendix or Meritor?</h3>
            <p className="text-slate-600 text-sm">Yes, all our replacement parts and accessories are engineered as direct drop-in aftermarket replacements for major OEM systems including Bendix, Meritor, Haldex, and Wabco, matching exact specifications and tolerances.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2">Do you offer wholesale pricing for repair shops and fleets?</h3>
            <p className="text-slate-600 text-sm">Absolutely. As an ISO 9001 certified manufacturer, we supply distributors, repair shops, and large commercial fleets directly with bulk wholesale pricing, bypassing standard distribution markups.</p>
          </div>
        </div>
      </section>

      <Script id="accessories-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Heavy-Duty Commercial Brake Chamber Accessories",
          "description": "Factory-direct heavy-duty brake chamber accessories and replacement parts. Direct aftermarket replacements for Bendix, Meritor, Haldex, and Wabco.",
          "url": "https://www.brcbrakechambers.com/chamber-parts-kits",
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
              "name": "What brake chamber accessories do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide a comprehensive range of replacement parts including premium diaphragms, clevis assemblies, clamp bands, return springs, and complete piggyback repair kits for both service and spring brake chambers."
              }
            },
            {
              "@type": "Question",
              "name": "Are BRC accessories compatible with OEM chambers like Bendix or Meritor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our replacement parts and accessories are engineered as direct drop-in aftermarket replacements for major OEM systems including Bendix, Meritor, Haldex, and Wabco, matching exact specifications and tolerances."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer wholesale pricing for repair shops and fleets?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. As an ISO 9001 certified manufacturer, we supply distributors, repair shops, and large commercial fleets directly with bulk wholesale pricing, bypassing standard distribution markups."
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
              "name": "Chamber Parts & Kits",
              "item": "https://www.brcbrakechambers.com/chamber-parts-kits"
            }
          ]
        }
      ]) }} />
    </>
  );

  return (
    <ProductListingLayout
      title="Chamber Parts & Kits"
      description="Factory-direct repair kits, diaphragms, and hardware for commercial air brake chambers. Precision manufactured to OEM specifications."
      badge="Maintenance & Repair"
      baseCategory="chamber-parts-kits"
      products={products}
      searchParams={searchParams}
      visualizerType="parts"
      seoText={seoContent}
      breadcrumbs={[{ label: 'Chamber Parts & Kits' }]}
      cardType="accessory"
    />
  );
}

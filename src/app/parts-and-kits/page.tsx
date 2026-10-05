import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListingLayout from '@/features/products/components/ProductListingLayout';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import SectionHeader from '@/components/ui/SectionHeader';
import { Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brake Chamber Parts & Kits: Diaphragms, Caging Bolts & Hardware | BRC',
  description: 'Factory-direct brake chamber parts and kits. Diaphragms, caging bolts, clevis pins, and rebuild kits. Direct OEM fitment. In-stock and ready to ship worldwide.',
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

  const manufacturingCards = [
    { title: 'Air Brake Chamber Repair Kits', desc: 'Complete rebuild kits for field servicing. Includes diaphragm, seals, caging bolt, and all necessary hardware for a full overhaul.' },
    { title: 'Brake Chamber Diaphragms', desc: 'High-tensile neoprene rubber diaphragms with nylon reinforcement. Rated for -40°C to +80°C operating range.' },
    { title: 'Clevis Pins & Hardware', desc: 'Zinc-plated steel clevis pins, cotter pins, and mounting hardware for commercial brake chambers.' },
    { title: 'Caging Bolts & Tools', desc: 'Manual and automatic caging bolts for spring brake chambers. Includes caging tools for safe spring brake release during maintenance.' },
    { title: 'Slack Adjusters', desc: 'Automatic and manual slack adjusters for S-cam drum brake systems. Direct OEM fitment.' },
    { title: 'Clamp Bands', desc: 'Heavy-duty clamp bands for securing brake chamber housing sections. Zinc-plated for corrosion resistance.' },
    { title: 'Pre-Caged Piggyback Kits', desc: 'Complete pre-caged piggyback sections for rapid spring brake replacement without dismounting the entire chamber.' },
    { title: 'Return Springs', desc: 'Epoxy-coated internal return springs for service and spring brake chambers. Prevents rust flaking and center seal failure.' }
  ];

  const seoContent = (
    <>
      <section className="mb-16">
        <SectionHeader
          badge="Maintenance & Repair"
          title="Why Quality Replacement Parts Matter for Brake Chambers"
          align="left"
          accentColor="amber"
          className="!mb-8"
        />
        <div className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl">
          <p className="mb-4">
            A brake chamber is a sealed assembly, but it can be rebuilt. When the diaphragm fails, when the caging bolt is lost, or when the return spring weakens, replacement parts bring the chamber back to full function.
          </p>
          <p className="mb-6">
            Using low-quality aftermarket parts causes premature failure, air leaks, and unsafe braking. Every BRC replacement part is manufactured to OEM specifications to restore the chamber to its original performance.
          </p>
          <Link href="/technical-resources" className="text-amber-600 font-bold hover:underline inline-flex items-center">
            See our brake chamber installation guide <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      <section className="mb-16 bg-slate-50 p-8 rounded-3xl border border-slate-100">
        <SectionHeader
          badge="Product Range"
          title="Brake Chamber Parts & Kits We Manufacture"
          align="center"
          accentColor="amber"
          className="!mb-6"
        />
        <div className="text-slate-600 leading-relaxed text-sm md:text-base max-w-4xl mx-auto space-y-4 text-center mb-8">
          <p>
            BRC manufactures the full range of commercial brake chamber replacement parts. Every part is a direct OEM replacement for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO components.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {manufacturingCards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all">
              <h3 className="font-bold text-navy-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center">
          <Link href="/products" className="text-amber-600 font-bold hover:underline inline-flex items-center">
            View all parts & kit specs <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto">
        <SectionHeader
          badge="Common Questions"
          title="Brake Chamber Parts FAQs"
          description="Common questions from fleet managers, technicians, and distributors about brake chamber replacement parts."
          align="center"
          accentColor="amber"
        />
        <GlobalFAQAccordion faqs={[
          {
            q: 'What brake chamber accessories do you offer?',
            a: 'BRC manufactures a full range of replacement parts and kits: air brake chamber repair kits, rubber diaphragms (neoprene, nylon-reinforced), caging bolts and tools, clevis pins and hardware, slack adjusters, clamp bands, pre-caged piggyback kits, and internal return springs. All parts are manufactured to OEM specifications.'
          },
          {
            q: 'Are BRC parts compatible with OEM chambers like Bendix or Meritor?',
            a: 'Yes. BRC replacement parts are engineered to match OEM dimensions and function for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO brake chambers. Use our OEM cross-reference tool to confirm the exact part number match for your application.'
          },
          {
            q: 'Do you offer wholesale pricing for repair shops and fleets?',
            a: 'Yes. BRC supplies repair shops, fleet maintenance departments, and distributors with wholesale pricing on parts and kits. Volume discounts are available for regular orders. Contact our sales team for pricing and account setup.'
          },
          {
            q: 'What is a pre-caged piggyback kit?',
            a: 'A pre-caged piggyback kit is a complete spring brake replacement section that arrives already caged at the factory. It allows mechanics to swap the parking spring section without dismounting the entire chamber, saving significant installation time. See our selection guide for full details on when to use a piggyback kit vs. a full chamber replacement.'
          },
          {
            q: 'What is the operating temperature range for BRC diaphragms?',
            a: 'BRC neoprene rubber diaphragms are rated for -40°C to +80°C (-40°F to +176°F) operating range. They remain flexible in extreme cold and resist thermal degradation in high-heat applications.'
          },
          {
            q: 'How do I identify the correct diaphragm for my brake chamber?',
            a: 'Diaphragms are matched by chamber type (e.g., Type 30/30, Type 24/24). You can identify your chamber type by measuring the outside diameter of the clamp band or checking the ID tag. See our brake chamber visual identification guide for step-by-step instructions.'
          }
        ]} />
        <div className="mt-8 text-center">
          <Link href="/technical-resources" className="text-amber-600 font-bold hover:underline inline-flex items-center">
            See all brake chamber technical resources <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      <Script id="parts-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Brake Chamber Parts & Kits: Diaphragms, Caging Bolts & Hardware",
          "description": "Factory-direct brake chamber parts and kits. Diaphragms, caging bolts, clevis pins, and rebuild kits. Direct OEM fitment.",
          "url": "https://www.brcbrakechambers.com/parts-and-kits",
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
                "text": "BRC manufactures a full range of replacement parts and kits: air brake chamber repair kits, rubber diaphragms (neoprene, nylon-reinforced), caging bolts and tools, clevis pins and hardware, slack adjusters, clamp bands, pre-caged piggyback kits, and internal return springs. All parts are manufactured to OEM specifications."
              }
            },
            {
              "@type": "Question",
              "name": "Are BRC parts compatible with OEM chambers like Bendix or Meritor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. BRC replacement parts are engineered to match OEM dimensions and function for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO brake chambers. Use our OEM cross-reference tool to confirm the exact part number match for your application."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer wholesale pricing for repair shops and fleets?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. BRC supplies repair shops, fleet maintenance departments, and distributors with wholesale pricing on parts and kits. Volume discounts are available for regular orders. Contact our sales team for pricing and account setup."
              }
            },
            {
              "@type": "Question",
              "name": "What is a pre-caged piggyback kit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A pre-caged piggyback kit is a complete spring brake replacement section that arrives already caged at the factory. It allows mechanics to swap the parking spring section without dismounting the entire chamber, saving significant installation time. See our selection guide for full details on when to use a piggyback kit vs. a full chamber replacement."
              }
            },
            {
              "@type": "Question",
              "name": "What is the operating temperature range for BRC diaphragms?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BRC neoprene rubber diaphragms are rated for -40°C to +80°C (-40°F to +176°F) operating range. They remain flexible in extreme cold and resist thermal degradation in high-heat applications."
              }
            },
            {
              "@type": "Question",
              "name": "How do I identify the correct diaphragm for my brake chamber?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Diaphragms are matched by chamber type (e.g., Type 30/30, Type 24/24). You can identify your chamber type by measuring the outside diameter of the clamp band or checking the ID tag. See our brake chamber visual identification guide for step-by-step instructions."
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
              "item": "https://www.brcbrakechambers.com/parts-and-kits"
            }
          ]
        }
      ]) }} />
    </>
  );

  return (
    <ProductListingLayout
      badge="Maintenance & Repair"
      badgeIcon={Wrench}
      title="Brake Chamber Parts & Kits: Diaphragms, Caging Bolts & Hardware"
      description="Factory-direct replacement parts for commercial brake chambers. Repair kits, rubber diaphragms, caging bolts, clevis pins, and mounting hardware, all precision-manufactured to OEM specifications. In-stock and ready to ship worldwide."
      baseCategory="parts-and-kits"
      products={products}
      searchParams={searchParams}
      visualizerType="accessories"
      seoText={seoContent}
      breadcrumbs={[{ label: 'Chamber Parts & Kits' }]}
    />
  );
}

// Force rebuild to clear Next.js Turbopack cache
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListCard from '@/components/products/ProductListCard';
import AccessoryListCard from '@/components/product-detail/AccessoryListCard';
import OEMCrossReferenceCard from '@/components/oem/OEMCrossReferenceCard';
import OEMSearchForm from '@/components/oem/OEMSearchForm';
import PageHeader from '@/components/layout/PageHeader';
import { Truck, ArrowLeft, ShieldCheck, Settings, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

const OEM_BRANDS: Record<string, { name: string, type: string, desc: string }> = {
  'bendix': { name: 'Bendix', type: 'brand', desc: 'Direct aftermarket replacements for Bendix commercial air brake chambers.' },
  'meritor': { name: 'Meritor', type: 'brand', desc: 'Direct aftermarket replacements for Meritor commercial air brake chambers.' },
  'haldex': { name: 'Haldex', type: 'brand', desc: 'Direct aftermarket replacements for Haldex commercial air brake chambers.' },
  'wabco': { name: 'WABCO', type: 'brand', desc: 'Direct aftermarket replacements for WABCO commercial air brake chambers.' },
  'mgm': { name: 'MGM Brakes', type: 'brand', desc: 'Direct aftermarket replacements for MGM commercial air brake chambers.' },
  'automann': { name: 'Automann', type: 'brand', desc: 'Direct aftermarket replacements for Automann commercial air brake chambers.' },
  'dexter': { name: 'Dexter', type: 'brand', desc: 'Direct aftermarket replacements for Dexter commercial air brake chambers.' },
  'tse': { name: 'TSE', type: 'brand', desc: 'Direct aftermarket replacements for TSE commercial air brake chambers.' },
  'tse-brakes': { name: 'TSE Brakes', type: 'brand', desc: 'Direct aftermarket replacements for TSE Brakes commercial air brake chambers.' },
  
  // Truck Manufacturers
  'freightliner': { name: 'Freightliner', type: 'truck', desc: 'Direct aftermarket replacements for Freightliner truck air brake chambers.' },
  'peterbilt': { name: 'Peterbilt', type: 'truck', desc: 'Direct aftermarket replacements for Peterbilt truck air brake chambers.' },
  'kenworth': { name: 'Kenworth', type: 'truck', desc: 'Direct aftermarket replacements for Kenworth truck air brake chambers.' },
  'volvo-mack': { name: 'Volvo / Mack', type: 'truck', desc: 'Direct aftermarket replacements for Volvo and Mack truck air brake chambers.' },
  'navistar': { name: 'Navistar', type: 'truck', desc: 'Direct aftermarket replacements for Navistar / International truck air brake chambers.' },
  
  // Axle & Suspension
  'hendrickson': { name: 'Hendrickson', type: 'axle', desc: 'Direct aftermarket replacements for Hendrickson axle and suspension air brake chambers.' },
  'saf-holland': { name: 'SAF-Holland', type: 'axle', desc: 'Direct aftermarket replacements for SAF-Holland axle and suspension air brake chambers.' },
  'dana': { name: 'Dana', type: 'axle', desc: 'Direct aftermarket replacements for Dana axle air brake chambers.' },
  'meritor-axles': { name: 'Meritor Axles', type: 'axle', desc: 'Direct aftermarket replacements for Meritor axle applications.' }
};

export async function generateMetadata(
  props: { params: Promise<{ brandSlug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const brandInfo = OEM_BRANDS[params.brandSlug];

  if (!brandInfo) {
    return { title: 'OEM Brand Not Found' };
  }

  return {
    title: `${brandInfo.name} Brake Chamber Cross Reference & Replacements | BRC`,
    description: `Find exact aftermarket equivalents for ${brandInfo.name} air brake chambers. View cross-reference data, interchange part numbers, and factory-direct pricing.`,
    keywords: [`${brandInfo.name} Brake Chambers`, `${brandInfo.name} Cross Reference`, `${brandInfo.name} Interchange`, 'Direct Replacement', 'Aftermarket Air Brakes', 'Wholesale'],
    alternates: {
      canonical: `https://www.brcbrakechambers.com/oem-cross-reference/${params.brandSlug}`
    }
  };
}

export default async function OEMBrandPage(
  props: {
    params: Promise<{ brandSlug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const params = await props.params;
  const searchParams = props.searchParams ? await props.searchParams : undefined;

  const brandInfo = OEM_BRANDS[params.brandSlug];
  if (!brandInfo) {
    notFound();
  }

  const normalizedBrandName = brandInfo.name.toLowerCase();

  const matchingChambers = BRAKE_CHAMBERS.filter(c => {
    // Exact match for the brand slug
    if (c.brandSlug === params.brandSlug) return true;
    
    // Check cross references
    const hasCross = c.crossReferenceBrands?.some(b => b.toLowerCase().includes(normalizedBrandName) || normalizedBrandName.includes(b.toLowerCase()));
    
    // Check OEM part numbers
    const hasPartNum = c.oemPartNumbers?.some(p => p.brand.toLowerCase().includes(normalizedBrandName) || normalizedBrandName.includes(p.brand.toLowerCase()));
    
    // For Truck/Axle applications, check descriptions or compatibility fields if they exist
    // Currently doing a broad text search in the description as a fallback
    const hasDescMatch = c.description?.toLowerCase().includes(normalizedBrandName);
    
    return hasCross || hasPartNum || hasDescMatch;
  });

  const matchingAccessories = BRAKE_ACCESSORIES.filter(c =>
    c.brandSlug === params.brandSlug || 
    c.name.toLowerCase().includes(normalizedBrandName) ||
    c.description?.toLowerCase().includes(normalizedBrandName)
  );

  // Extract unique dedicated OEM part numbers for this brand to link to their SEO pages
  const uniqueOEMParts = new Map<string, string>();
  BRAKE_CHAMBERS.forEach(c => {
    if (c.oemPartNumbers) {
      c.oemPartNumbers.forEach(oem => {
        const oBrandSlug = oem.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (oBrandSlug === params.brandSlug) {
          const oPartSlug = oem.partNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          uniqueOEMParts.set(oPartSlug, oem.partNumber);
        }
      });
    }
  });
  const oemPartLinks = Array.from(uniqueOEMParts.entries());

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      <PageHeader
        title={`${brandInfo.name} Replacements`}
        description={`Consolidate your sourcing with our factory-direct aftermarket equivalents for ${brandInfo.name} ${brandInfo.type === 'truck' ? 'commercial vehicles' : brandInfo.type === 'axle' ? 'suspension applications' : 'air brakes'}. Identical fitment, zero modifications required, and significant cost savings for your fleet.`}
        badge="Direct Aftermarket Replacement"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: brandInfo.name }
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center text-sm font-bold text-navy-950 bg-white/90 px-4 py-2 rounded-lg shadow-sm border border-navy-100">
            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Form & Fit Match
          </div>
          <div className="flex items-center text-sm font-bold text-navy-950 bg-white/90 px-4 py-2 rounded-lg shadow-sm border border-navy-100">
            <ShieldCheck className="w-4 h-4 mr-2 text-blue-500" /> ISO Certified
          </div>
        </div>
      </PageHeader>

      {/* OEM Search Tool Prominent Placement */}
      <section className="relative z-20 -mt-12 lg:-mt-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16 lg:mb-24">
        <div className="w-full">
          <OEMSearchForm />
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Left Column: Trust & Engineering Proof */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-[#FFB000]" />
              Engineering Compatibility
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Matching Stroke Lengths</h4>
                  <p className="text-sm text-slate-600 mt-1">Both Standard and Long Stroke variants exactly match {brandInfo.name} travel limits.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Identical Port Angles</h4>
                  <p className="text-sm text-slate-600 mt-1">Drop-in replacement means no rerouting of airline hoses or modifying fittings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Mounting Hardware</h4>
                  <p className="text-sm text-slate-600 mt-1">Stud sizes, spacing, and clevis threads align perfectly with existing brackets.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-navy-50 p-8 rounded-2xl border border-navy-100 text-center">
            <h3 className="text-lg font-bold text-navy-900 mb-2">Need a specific {brandInfo.name} part number?</h3>
            <p className="text-sm text-slate-600 mb-6">If you can't find your exact part in our standard online catalog, our engineers can map it for you instantly.</p>
            <Link href="/contact" className="w-full block bg-navy-900 text-white font-bold py-3 rounded-xl hover:bg-[#FFB000] hover:text-navy-900 transition-colors shadow-md">
              Request Part Mapping
            </Link>
          </div>
        </div>

        {/* Right Column: Compatible Products */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center pb-2 border-b border-slate-200">
            Top Replacements for {brandInfo.name}
          </h2>

          {matchingChambers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {matchingChambers.slice(0, 4).map(chamber => (
                <OEMCrossReferenceCard
                  key={chamber.slug}
                  product={chamber}
                  categoryPath={chamber.category === 'Spring Brake' ? 'spring-brakes' : 'service-chambers'}
                  brandSlug={params.brandSlug}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center mb-12">
              <p className="text-slate-600 mb-4">No direct chamber cross-references currently mapped online for {brandInfo.name}.</p>
              <Link href="/contact" className="text-[#FFB000] font-bold hover:underline">Contact our engineering team for custom matching.</Link>
            </div>
          )}

          {matchingChambers.length > 4 && (
            <div className="text-center mb-12">
              <Link href={`/spring-brakes?brand=${normalizedBrandName}`} className="inline-flex items-center font-bold text-navy-600 hover:text-[#FFB000] transition-colors">
                View all {matchingChambers.length} compatible chambers <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          )}

          {oemPartLinks.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center pb-2 border-b border-slate-200 mt-8">
                Individual {brandInfo.name} Part Numbers
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                {oemPartLinks.map(([partSlug, partName]) => (
                  <Link 
                    key={partSlug} 
                    href={`/oem-cross-reference/${params.brandSlug}/${partSlug}`}
                    className="bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md p-4 rounded-xl text-center transition-all group"
                  >
                    <div className="font-mono font-bold text-navy-900 group-hover:text-amber-600">{partName}</div>
                    <div className="text-xs text-slate-500 mt-1">View Replacement</div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {matchingAccessories.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center pb-2 border-b border-slate-200">
                Compatible Accessories & Hardware
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {matchingAccessories.slice(0, 4).map(accessory => (
                  <AccessoryListCard
                    key={accessory.slug}
                    product={accessory}
                    categoryPath="chamber-parts-kits"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Programmatic SEO Text Block */}
      <section className="py-16 bg-white border-t border-slate-200 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-6 tracking-tight">
            Why cross-reference {brandInfo.name} brake chambers?
          </h2>
          <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
            <p className="mb-4">
              When replacing <strong>{brandInfo.name}</strong> air brake components, fleet managers often face high markup costs associated with brand-name packaging. BRC Brake Chambers provides a factory-direct aftermarket alternative that matches or exceeds original equipment specifications.
            </p>
            <p className="mb-4">
              Our {brandInfo.type === 'truck' ? 'commercial vehicle' : brandInfo.type === 'axle' ? 'suspension' : 'heavy-duty'} brake chambers are engineered to act as exact drop-in replacements for <strong>{brandInfo.name}</strong> setups. This means identical pushrod lengths, matching port angles, and standardized mounting hardware—requiring absolutely zero modifications during installation.
            </p>
            <p>
              By utilizing our <strong>{brandInfo.name} interchange</strong> database, you ensure regulatory compliance (FMVSS-121) while significantly reducing your maintenance overhead. All recommended cross-references have undergone 1-million cycle life testing and rigorous 100% pneumatic leak checks.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <Script id={`brand-hub-${params.brandSlug}-schema`} type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${brandInfo.name} Brake Chamber Replacements`,
            "description": brandInfo.desc,
            "url": `https://www.brcbrakechambers.com/oem-cross-reference/${params.brandSlug}`,
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
                "name": `Are BRC chambers exact replacements for ${brandInfo.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes, BRC aftermarket chambers are engineered as exact drop-in replacements for ${brandInfo.name} equipment, featuring identical mounting hardware, port angles, and pushrod lengths.`
                }
              },
              {
                "@type": "Question",
                "name": `Will using aftermarket parts void my ${brandInfo.name} warranty?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Under the Magnuson-Moss Warranty Act, it is illegal to void a warranty simply for using a high-quality aftermarket replacement part, unless they can prove the part caused the failure."
                }
              }
            ]
          }
        ])
      }} />
      </div>
    </div>
  );
}

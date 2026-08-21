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
  'zf-wabco': { name: 'ZF / WABCO', type: 'brand', desc: 'Direct aftermarket replacements for ZF / WABCO commercial air brake chambers.' },
  'knorr-bremse': { name: 'Knorr-Bremse', type: 'brand', desc: 'Direct aftermarket replacements for Knorr-Bremse commercial air brake chambers.' },
  'sorl': { name: 'SORL Auto Parts', type: 'brand', desc: 'Direct aftermarket replacements for SORL Auto Parts commercial air brake chambers.' },
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
  
  // European Truck Manufacturers
  'scania': { name: 'Scania', type: 'truck', desc: 'Direct aftermarket replacements for Scania truck air brake chambers.' },
  'man': { name: 'MAN', type: 'truck', desc: 'Direct aftermarket replacements for MAN truck air brake chambers.' },
  'mercedes-benz': { name: 'Mercedes-Benz Trucks', type: 'truck', desc: 'Direct aftermarket replacements for Mercedes-Benz truck air brake chambers.' },
  'daf': { name: 'DAF', type: 'truck', desc: 'Direct aftermarket replacements for DAF truck air brake chambers.' },
  'iveco': { name: 'Iveco', type: 'truck', desc: 'Direct aftermarket replacements for Iveco truck air brake chambers.' },
  
  // Asian Truck Manufacturers
  'isuzu': { name: 'Isuzu', type: 'truck', desc: 'Direct aftermarket replacements for Isuzu truck air brake chambers.' },
  'hino': { name: 'Hino', type: 'truck', desc: 'Direct aftermarket replacements for Hino truck air brake chambers.' },
  'fuso': { name: 'Fuso', type: 'truck', desc: 'Direct aftermarket replacements for Fuso truck air brake chambers.' },
  'dongfeng': { name: 'Dongfeng', type: 'truck', desc: 'Direct aftermarket replacements for Dongfeng truck air brake chambers.' },
  'tata': { name: 'Tata', type: 'truck', desc: 'Direct aftermarket replacements for Tata truck air brake chambers.' },
  
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
  const originalSlug = params.brandSlug;
  let brandSlug = originalSlug;
  let categoryNameForSeo = '';

  if (brandSlug.endsWith('-spring-brake-chambers')) {
    brandSlug = brandSlug.replace('-spring-brake-chambers', '');
    categoryNameForSeo = 'Spring Brake Chambers';
  } else if (brandSlug.endsWith('-service-brake-chambers')) {
    brandSlug = brandSlug.replace('-service-brake-chambers', '');
    categoryNameForSeo = 'Service Brake Chambers';
  } else if (brandSlug.endsWith('-air-disc-brake-actuators')) {
    brandSlug = brandSlug.replace('-air-disc-brake-actuators', '');
    categoryNameForSeo = 'Air Disc Brake Actuators';
  }

  const brandInfo = OEM_BRANDS[brandSlug];

  if (!brandInfo) {
    return { title: 'OEM Brand Not Found' };
  }

  const titlePrefix = categoryNameForSeo ? `${brandInfo.name} ${categoryNameForSeo}` : `${brandInfo.name} Brake Chamber`;

  return {
    title: `${titlePrefix} Cross Reference & Replacements | BRC`,
    description: `Find exact aftermarket equivalents for ${brandInfo.name} ${categoryNameForSeo ? categoryNameForSeo.toLowerCase() : 'air brake chambers'}. View cross-reference data, interchange part numbers, and factory-direct pricing.`,
    keywords: [`${brandInfo.name} ${categoryNameForSeo || 'Brake Chambers'}`, `${brandInfo.name} Cross Reference`, `${brandInfo.name} Interchange`, 'Direct Replacement', 'Aftermarket Air Brakes', 'Wholesale'],
    alternates: {
      canonical: `https://www.brcbrakechambers.com/oem-cross-reference/${originalSlug}`
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
  const originalSlug = params.brandSlug;

  let brandSlug = originalSlug;
  let categoryFilter: 'Spring Brake' | 'Service Brake' | 'Air Disc Actuator' | null = null;
  let categoryNameForSeo = '';

  if (brandSlug.endsWith('-spring-brake-chambers')) {
    brandSlug = brandSlug.replace('-spring-brake-chambers', '');
    categoryFilter = 'Spring Brake';
    categoryNameForSeo = 'Spring Brake Chambers';
  } else if (brandSlug.endsWith('-service-brake-chambers')) {
    brandSlug = brandSlug.replace('-service-brake-chambers', '');
    categoryFilter = 'Service Brake';
    categoryNameForSeo = 'Service Brake Chambers';
  } else if (brandSlug.endsWith('-air-disc-brake-actuators')) {
    brandSlug = brandSlug.replace('-air-disc-brake-actuators', '');
    categoryFilter = 'Air Disc Actuator';
    categoryNameForSeo = 'Air Disc Brake Actuators';
  }

  const brandInfo = OEM_BRANDS[brandSlug];
  if (!brandInfo) {
    notFound();
  }

  const normalizedBrandName = brandInfo.name.toLowerCase();

  let matchingChambers = BRAKE_CHAMBERS.filter(c => {
    // Exact match for the brand slug
    if (c.brandSlug === brandSlug) return true;
    
    // Check cross references
    const hasCross = c.crossReferenceBrands?.some(b => b.toLowerCase().includes(normalizedBrandName) || normalizedBrandName.includes(b.toLowerCase()));
    
    // Check OEM part numbers
    const hasPartNum = c.oemPartNumbers?.some(p => p.brand.toLowerCase().includes(normalizedBrandName) || normalizedBrandName.includes(p.brand.toLowerCase()));
    
    // For Truck/Axle applications, check descriptions or compatibility fields if they exist
    // Currently doing a broad text search in the description as a fallback
    const hasDescMatch = c.description?.toLowerCase().includes(normalizedBrandName);
    
    return hasCross || hasPartNum || hasDescMatch;
  });

  if (categoryFilter) {
    matchingChambers = matchingChambers.filter(c => c.category === categoryFilter);
  }

  const matchingAccessories = categoryFilter ? [] : BRAKE_ACCESSORIES.filter(c =>
    c.brandSlug === brandSlug || 
    c.name.toLowerCase().includes(normalizedBrandName) ||
    c.description?.toLowerCase().includes(normalizedBrandName)
  );

  // Extract unique dedicated OEM part numbers for this brand to link to their SEO pages
  const uniqueOEMParts = new Map<string, { partNumber: string, categoryPath: string }>();
  BRAKE_CHAMBERS.forEach(c => {
    if (categoryFilter && c.category !== categoryFilter) return;

    if (c.oemPartNumbers) {
      c.oemPartNumbers.forEach(oem => {
        const oBrandSlug = oem.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (oBrandSlug === brandSlug) {
          const oPartSlug = oem.partNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          const categoryPath = c.category === 'Spring Brake' ? 'spring-brake-chambers' : c.category === 'Service Brake' ? 'service-brake-chambers' : 'air-disc-brake-actuators';
          uniqueOEMParts.set(oPartSlug, { partNumber: oem.partNumber, categoryPath });
        }
      });
    }
  });
  const oemPartLinks = Array.from(uniqueOEMParts.entries());

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      <PageHeader
        title={`${brandInfo.name} ${categoryNameForSeo || 'Replacements'}`}
        description={`Consolidate your sourcing with our factory-direct aftermarket equivalents for ${brandInfo.name} ${categoryNameForSeo ? categoryNameForSeo.toLowerCase() : (brandInfo.type === 'truck' ? 'commercial vehicles' : brandInfo.type === 'axle' ? 'suspension applications' : 'air brakes')}. Identical fitment, zero modifications required, and significant cost savings for your fleet.`}
        badge="Direct Aftermarket Replacement"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: categoryNameForSeo ? `${brandInfo.name} ${categoryNameForSeo}` : brandInfo.name }
        ]}
      >
      </PageHeader>

      {/* OEM Search Tool Prominent Placement */}
      <section className="relative z-20 -mt-8 sm:-mt-12 lg:-mt-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-12 lg:mb-24">
        <div className="w-full">
          <OEMSearchForm />
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row gap-8 mb-16">
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
                  categoryPath={chamber.category === 'Spring Brake' ? 'spring-brake-chambers' : chamber.category === 'Service Brake' ? 'service-brake-chambers' : 'air-disc-brake-actuators'}
                  brandSlug={brandSlug}
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
              <Link href={`/${categoryFilter === 'Service Brake' ? 'service-brake-chambers' : categoryFilter === 'Air Disc Actuator' ? 'air-disc-brake-actuators' : 'spring-brake-chambers'}?brand=${normalizedBrandName}`} className="inline-flex items-center font-bold text-navy-600 hover:text-[#FFB000] transition-colors">
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
                {oemPartLinks.map(([partSlug, partData]) => (
                  <Link 
                    key={partSlug} 
                    href={`/${partData.categoryPath}/${brandSlug}-${partSlug}`}
                    className="bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md p-4 rounded-xl text-center transition-all group"
                  >
                    <div className="font-mono font-bold text-navy-900 group-hover:text-amber-600">{partData.partNumber}</div>
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
                    categoryPath="parts-and-kits"
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
            Why cross-reference {brandInfo.name} {categoryNameForSeo ? categoryNameForSeo.toLowerCase() : 'brake chambers'}?
          </h2>
          <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
            <p className="mb-4">
              When replacing <strong>{brandInfo.name}</strong> {categoryNameForSeo ? categoryNameForSeo.toLowerCase() : 'air brake components'}, fleet managers often face high markup costs associated with brand-name packaging. BRC Brake Chambers provides a factory-direct aftermarket alternative that matches or exceeds original equipment specifications.
            </p>
            <p className="mb-4">
              Our {brandInfo.type === 'truck' ? 'commercial vehicle' : brandInfo.type === 'axle' ? 'suspension' : 'heavy-duty'} {categoryNameForSeo ? categoryNameForSeo.toLowerCase() : 'brake chambers'} are engineered to act as exact drop-in replacements for <strong>{brandInfo.name}</strong> setups. This means identical pushrod lengths, matching port angles, and standardized mounting hardware—requiring absolutely zero modifications during installation.
            </p>
            <p>
              By utilizing our <strong>{brandInfo.name} interchange</strong> database, you ensure regulatory compliance (FMVSS-121) while significantly reducing your maintenance overhead. All recommended cross-references have undergone 1-million cycle life testing and rigorous 100% pneumatic leak checks.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <Script id={`brand-hub-${originalSlug}-schema`} type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${brandInfo.name} ${categoryNameForSeo || 'Brake Chamber'} Replacements`,
            "description": brandInfo.desc,
            "url": `https://www.brcbrakechambers.com/oem-cross-reference/${originalSlug}`,
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

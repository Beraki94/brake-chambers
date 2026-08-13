import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS } from '@/lib/data';
import ProductListCard from '@/components/products/ProductListCard';
import PageHeader from '@/components/layout/PageHeader';
import { Truck, CheckCircle2, ShieldCheck, ArrowRight, Cog, Settings2 } from 'lucide-react';

export async function generateStaticParams() {
  const params: { brandSlug: string, partNumber: string }[] = [];
  
  BRAKE_CHAMBERS.forEach(chamber => {
    if (chamber.oemPartNumbers) {
      chamber.oemPartNumbers.forEach(oem => {
        const brandSlug = oem.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const partNumber = oem.partNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        params.push({ brandSlug, partNumber });
      });
    }
  });

  return params;
}

export async function generateMetadata(
  props: { params: Promise<{ brandSlug: string, partNumber: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const normalizedBrand = params.brandSlug.replace(/-/g, ' ');
  const partNumber = params.partNumber.toUpperCase();

  return {
    title: `${partNumber} ${normalizedBrand} Aftermarket Equivalent | BRC Brake Chambers`,
    description: `Direct replacement for ${normalizedBrand} ${partNumber}. View specifications, stroke size, and duty spec for this exact match aftermarket air brake chamber.`,
    keywords: [`${partNumber} replacement`, `${normalizedBrand} ${partNumber}`, 'Cross Reference', 'Direct Replacement', 'Aftermarket'],
  };
}

export default async function OEMPartNumberPage(
  props: { params: Promise<{ brandSlug: string, partNumber: string }> }
) {
  const params = await props.params;
  
  // Find the matching BRC chamber based on brandSlug and partNumber
  let matchedChamber = null;
  let oemOriginalBrand = '';
  let oemOriginalPart = '';

  for (const chamber of BRAKE_CHAMBERS) {
    if (chamber.oemPartNumbers) {
      const match = chamber.oemPartNumbers.find(oem => {
        const oBrandSlug = oem.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const oPartNum = oem.partNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return oBrandSlug === params.brandSlug && oPartNum === params.partNumber;
      });
      
      if (match) {
        matchedChamber = chamber;
        oemOriginalBrand = match.brand;
        oemOriginalPart = match.partNumber;
        break;
      }
    }
  }

  if (!matchedChamber) {
    notFound();
  }

  const categoryPath = matchedChamber.category === 'Spring Brake' ? 'spring-brakes' : 
                       matchedChamber.category === 'Service Brake' ? 'service-chambers' : 'air-disc-actuators';

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        title={`${oemOriginalBrand} ${oemOriginalPart} Equivalent`}
        description={`Found an exact 1:1 direct aftermarket replacement for ${oemOriginalBrand} part number ${oemOriginalPart}. No modifications required.`}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl -mt-10 relative z-20">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 bg-white py-3 px-6 rounded-xl border border-slate-200 shadow-sm inline-block">
          <ol className="flex items-center space-x-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-navy-900 transition-colors">Home</Link></li>
            <li><span className="text-slate-300">/</span></li>
            <li><Link href="/oem-cross-reference" className="hover:text-navy-900 transition-colors">OEM Cross-Reference</Link></li>
            <li><span className="text-slate-300">/</span></li>
            <li><Link href={`/oem-cross-reference/${params.brandSlug}`} className="hover:text-navy-900 transition-colors">{oemOriginalBrand}</Link></li>
            <li><span className="text-slate-300">/</span></li>
            <li className="text-navy-900 font-bold" aria-current="page">{oemOriginalPart}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Replacement Card */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-success-500" />
              Exact Match Found
            </h2>
            <div className="mb-8">
              <ProductListCard product={matchedChamber} categoryPath={categoryPath} />
            </div>

            {/* Spec Comparison */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <Settings2 className="w-5 h-5 mr-2 text-primary-500" />
                Technical Specifications Match
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Chamber Type</div>
                  <div className="font-bold text-navy-900">{matchedChamber.type}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Stroke Profile</div>
                  <div className="font-bold text-navy-900">{matchedChamber.strokeSize} ({matchedChamber.strokeInch})</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Duty Specification</div>
                  <div className="font-bold text-navy-900 capitalize">{matchedChamber.dutySpec || 'Standard Duty'}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Application</div>
                  <div className="font-bold text-navy-900">{matchedChamber.application}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 sm:col-span-2">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Form & Fit Guarantee</div>
                  <div className="text-sm text-slate-600 mt-1">This BRC chamber provides an exact physical and functional replacement for the {oemOriginalBrand} {oemOriginalPart}, ensuring identical mounting stud alignment, pushrod length, and port configurations.</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                 <Link href={`/${categoryPath}/${matchedChamber.slug}`} className="inline-flex items-center justify-center bg-navy-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-500 hover:text-navy-950 transition-colors shadow-lg">
                   View Full Details & Add to Cart <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0">
             <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-xl sticky top-8">
               <h3 className="font-bold text-xl mb-4 flex items-center">
                 <ShieldCheck className="w-5 h-5 mr-2 text-primary-500" />
                 Why switch to BRC?
               </h3>
               <ul className="space-y-4 mb-6">
                 <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0"></div>
                   <p className="text-sm text-navy-100"><strong className="text-white">Wholesale Pricing:</strong> Buy direct from the factory and cut out the middleman.</p>
                 </li>
                 <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0"></div>
                   <p className="text-sm text-navy-100"><strong className="text-white">Tested Quality:</strong> Rated for over 1 million duty cycles.</p>
                 </li>
                 <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0"></div>
                   <p className="text-sm text-navy-100"><strong className="text-white">Immediate Stock:</strong> Most parts ship same-day globally.</p>
                 </li>
               </ul>
               <Link href="/contact" className="block w-full py-2 bg-white/10 hover:bg-white/20 text-center rounded-lg text-sm font-bold transition-colors border border-white/10">
                 Request Bulk Quote
               </Link>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

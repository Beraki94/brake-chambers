import fs from 'fs';
import path from 'path';

const categoryMeta = `const CATEGORY_META: Record<string, { title: string, desc: string, name: string }> = {
  'type-30-30': {
    title: 'Type 30/30 Spring Brake Chambers | Wholesale | BRC',
    desc: 'Factory-direct Type 30/30 spring brake chambers. OEM replacements for heavy-duty commercial trucks.',
    name: 'Type 30/30 Spring Brakes'
  },
  'type-24-30': {
    title: 'Type 24/30 Spring Brake Chambers | Wholesale | BRC',
    desc: 'Factory-direct Type 24/30 spring brake chambers. OEM replacements for heavy-duty commercial trucks.',
    name: 'Type 24/30 Spring Brakes'
  },
  'standard-stroke': {
    title: 'Standard Stroke Spring Brake Chambers | Wholesale | BRC',
    desc: 'Factory-direct standard stroke spring brake chambers. OEM replacements for heavy-duty commercial trucks.',
    name: 'Standard Stroke Spring Brakes'
  },
  'long-stroke': {
    title: 'Long Stroke Spring Brake Chambers | Wholesale | BRC',
    desc: 'Long stroke spring brake chambers for extended safety margin. Direct replacements for Bendix and Meritor.',
    name: 'Long Stroke Spring Brakes'
  },
  'welded-clevis': {
    title: 'Welded Clevis Spring Brakes | Wholesale | BRC',
    desc: 'Welded clevis spring brake chambers. Factory direct wholesale pricing.',
    name: 'Welded Clevis Spring Brakes'
  }
};`;

const springBrakeFilterLogic = `
  // Base Filter for Spring Brakes
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake');
  
  // Apply Category Filter
  if (slug === 'type-30-30') {
    products = products.filter(c => c.type.includes('30/30'));
  } else if (slug === 'type-24-30') {
    products = products.filter(c => c.type.includes('24/30'));
  } else if (slug === 'standard-stroke') {
    products = products.filter(c => c.strokeSize === 'Standard Stroke');
  } else if (slug === 'long-stroke') {
    products = products.filter(c => c.strokeSize === 'Long Stroke');
  } else if (slug === 'welded-clevis') {
    products = products.filter(c => c.type.toLowerCase().includes('welded'));
  }
`;

const imports = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import { BRAKE_CHAMBERS } from '@/lib/data';
import ProductListCard from '@/components/ProductListCard';
import FacetedSidebar from '@/components/FacetedSidebar';
import StrokeVisualizer from '@/components/StrokeVisualizer';
import Pagination from '@/components/Pagination';
import Breadcrumb from '@/components/Breadcrumb';
import { Truck, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
`;

const metadataBlock = `
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  
  const meta = CATEGORY_META[slug];
  
  if (meta) {
    return {
      title: meta.title,
      description: meta.desc,
      keywords: [meta.name, 'Commercial Air Brakes', 'Spring Brake Chambers'],
    };
  }

  const product = BRAKE_CHAMBERS.find(p => p.slug === slug);
  if (product) {
    return {
      title: \`\${product.name} | BRC Brake Chambers\`,
      description: product.description.replace(/<[^>]+>/g, '').substring(0, 160),
    };
  }

  return { title: 'Product Not Found' };
}
`;

const componentStart = `
export default async function UnifiedSpringBrakesPage(
  props: { 
    params: Promise<{ slug: string }>,
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }> 
  }
) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { slug } = params;

  const meta = CATEGORY_META[slug];
  const product = BRAKE_CHAMBERS.find(p => p.slug === slug);

  if (!meta && !product) {
    notFound();
  }
`;

const categoryRender = `
  if (meta) {
    ${springBrakeFilterLogic}
    
    // Apply Faceted Filters
    if (searchParams) {
      const applyFilter = (key: string, paramVal: string | string[] | undefined, filterFn: (p: any, val: string) => boolean) => {
        if (!paramVal) return;
        const values = Array.isArray(paramVal) ? paramVal : [paramVal];
        products = products.filter(p => values.some(v => filterFn(p, v)));
      };

      applyFilter('brand', searchParams.brand, (p, v) => p.crossReferenceBrands?.includes(v) || p.brandSlug === v.toLowerCase());
      applyFilter('model', searchParams.model, (p, v) => p.type.includes(v));
      applyFilter('strokeInch', searchParams.strokeInch, (p, v) => p.strokeInch === v);
      applyFilter('pushRodLength', searchParams.pushRodLength, (p, v) => p.pushRodLengthInch === v);
      applyFilter('application', searchParams.application, (p, v) => p.application === v);
    }
    
    // Pagination
    const currentPage = Number(searchParams?.page) || 1;
    const PAGE_SIZE = 20;
    const totalPages = Math.ceil(products.length / PAGE_SIZE) || 1;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

    return (
      <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl">
        <Breadcrumb items={[{ label: 'Spring Brakes', href: '/spring-brakes' }, { label: meta.name }]} />
        
        {/* Category Header Hero */}
        <div className="mb-8 rounded-3xl bg-navy-900 relative overflow-hidden shadow-2xl shadow-navy-900/20 p-8 sm:p-12 border border-navy-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-navy-800 border border-navy-700 text-amber-400 text-xs font-bold uppercase tracking-widest">
              {meta.name}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              {meta.name}
            </h1>
            <p className="text-navy-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              {meta.desc}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4">
            <FacetedSidebar baseCategory="spring-brakes" />
            {/* OEM CTA Banner */}
            <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800 rounded-2xl text-center mt-6 shadow-xl shadow-navy-900/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
               <div className="bg-navy-800/80 p-2.5 rounded-full mb-3 border border-navy-700">
                 <Truck size={20} className="text-amber-400" />
               </div>
               <h4 className="font-extrabold text-white text-sm mb-2 uppercase tracking-wide">Bulk OEM Orders</h4>
               <p className="text-xs mb-5 text-navy-200 leading-relaxed">
                 Custom paint, private labeling, and ISO 9001 certified manufacturing for large fleets.
               </p>
               <Link href="/quote" className="w-full bg-amber-500 text-navy-900 text-xs font-extrabold px-4 py-2.5 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5">
                 Get a Custom Quote
               </Link>
            </div>
          </div>

          <div className="flex-grow">
            <div className="bg-navy-900 p-3 rounded-xl shadow-md flex justify-between items-center mb-5 text-sm">
              <div className="text-white font-bold tracking-wide">Showing {products.length} products</div>
              <select className="bg-navy-800 border border-navy-700 rounded-lg px-3 py-1.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-navy-400 cursor-pointer transition-all">
                <option>Sort by: Recommended</option>
              </select>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                {paginatedProducts.map(product => (
                  <ProductListCard key={product.slug} product={product} categoryPath="spring-brakes" />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                <h3 className="text-lg font-bold text-navy-900 mb-2">No Products Found</h3>
                <p className="text-slate-600 mb-4">We couldn't find any {meta.name.toLowerCase()} matching your criteria.</p>
                <Link href="/spring-brakes" className="text-amber-600 font-bold hover:underline">View All Spring Brakes</Link>
              </div>
            )}

            {totalPages > 1 && <Pagination totalPages={totalPages} />}
          </div>
        </div>
        
        <StrokeVisualizer />
        
        <Script id={\`spring-brakes-\${slug}-schema\`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": meta.title,
            "description": meta.desc,
            "url": \`https://www.brcbrakechambers.com/spring-brakes/\${slug}\`,
            "manufacturer": { "@type": "Organization", "name": "BRC Brake Chambers" }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brcbrakechambers.com/" },
              { "@type": "ListItem", "position": 2, "name": "Spring Brakes", "item": "https://www.brcbrakechambers.com/spring-brakes" },
              { "@type": "ListItem", "position": 3, "name": meta.name, "item": \`https://www.brcbrakechambers.com/spring-brakes/\${slug}\` }
            ]
          }
        ]) }} />
      </div>
    );
  }
`;

const productRender = `
  if (product) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-8 max-w-6xl">
        <Breadcrumb items={[{ label: 'Spring Brakes', href: '/spring-brakes' }, { label: product.name }]} />

        <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 bg-[#F8FAFC] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-navy-100">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-xl shadow-sm overflow-hidden p-4 mb-4">
              <Image src={product.galleryUrls[0]} alt={product.name} fill className="object-contain p-4" />
            </div>
            <div className="flex gap-2">
               <span className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"><ShieldCheck size={14} className="mr-1 text-slate-600"/> ISO 9001 Certified</span>
               <span className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"><Truck size={14} className="mr-1 text-slate-600"/> Factory Direct</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 flex flex-col">
            <div className="mb-2 text-sm text-slate-600 font-bold uppercase tracking-wider">{product.type}</div>
            <h1 className="text-3xl font-bold text-navy-900 mb-4">{product.name}</h1>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-bold text-navy-900 mb-2">Wholesale Supply Logistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Minimum Order (MOQ)</span>
                  <span className="font-semibold text-navy-900">{product.moq || 50} Units</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Pallet Packaging</span>
                  <span className="font-semibold text-navy-900">{product.palletQuantity || 120} Units / Pallet</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">Guaranteed OEM Fit for Standard Drive and Trailer Axles</span>
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 mb-8" dangerouslySetInnerHTML={{ __html: product.description }} />

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                <h3 className="font-bold text-navy-900 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  Technical Specifications
                </h3>
              </div>
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th className="px-5 py-3 text-slate-500 font-medium w-1/2">Application</th>
                    <td className="px-5 py-3 font-semibold text-navy-900">{product.application || 'S-Cam Brake'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th className="px-5 py-3 text-slate-500 font-medium">Stroke Size</th>
                    <td className="px-5 py-3 font-semibold text-navy-900">{product.strokeSize}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th className="px-5 py-3 text-slate-500 font-medium">Stroke (Inch)</th>
                    <td className="px-5 py-3 font-semibold text-navy-900">{product.strokeInch}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th className="px-5 py-3 text-slate-500 font-medium">Push Rod Length</th>
                    <td className="px-5 py-3 font-semibold text-navy-900">{product.specifications.pushRodLength} ({product.pushRodLengthInch})</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th className="px-5 py-3 text-slate-500 font-medium">Max Pressure</th>
                    <td className="px-5 py-3 font-semibold text-navy-900">{product.specifications.maxOperatingPressure}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th className="px-5 py-3 text-slate-500 font-medium">Port Size</th>
                    <td className="px-5 py-3 font-semibold text-navy-900">{product.specifications.portSize}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th className="px-5 py-3 text-slate-500 font-medium">Weight</th>
                    <td className="px-5 py-3 font-semibold text-navy-900">{product.specifications.weight}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8 shadow-sm">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                <h3 className="font-bold text-navy-900 flex items-center">
                  <ShieldCheck size={18} className="mr-2 text-emerald-600"/> OEM Cross-Reference
                </h3>
              </div>
              <div className="px-5 py-3 bg-white border-b border-slate-100 text-xs text-slate-500">
                This BRC aftermarket chamber is engineered as a direct replacement for the following exact parts:
              </div>
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
                  <tr>
                    <th className="px-5 py-2">Brand</th>
                    <th className="px-5 py-2">Part Number</th>
                    <th className="px-5 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.oemPartNumbers && product.oemPartNumbers.length > 0 ? (
                    product.oemPartNumbers.map((oem, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/50 transition-colors group">
                        <td className="px-5 py-3 font-medium text-navy-700">{oem.brand}</td>
                        <td className="px-5 py-3 font-mono font-bold text-navy-900 group-hover:text-[#D9B340]">{oem.partNumber}</td>
                        <td className="px-5 py-3 text-slate-500 text-xs">{oem.notes || 'Interchangeable'}</td>
                      </tr>
                    ))
                  ) : (
                    product.crossReferenceBrands?.map((brand, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3 font-medium text-navy-700">{brand}</td>
                        <td className="px-5 py-3 font-mono text-slate-400">Match by Specs</td>
                        <td className="px-5 py-3 text-slate-400 text-xs">-</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 mb-8">
              <h3 className="font-bold text-navy-900 mb-3 border-b border-slate-200 pb-2">Downloadable Resources</h3>
              <div className="flex flex-col gap-2">
                 <a href="#" className="text-sm text-amber-600 hover:text-amber-500 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                   Technical Data Sheet (PDF)
                 </a>
                 <a href="#" className="text-sm text-amber-600 hover:text-amber-500 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                   Installation Manual (PDF)
                 </a>
              </div>
            </div>

            <div className="mt-auto">
              <Link href="/distributor/login" className="block w-full bg-navy-900 text-white text-center font-bold py-4 rounded-xl hover:bg-amber-500 hover:text-navy-900 transition-colors shadow-lg shadow-navy-900/20 uppercase tracking-widest text-sm mb-3">
                Apply for Wholesale Account
              </Link>
              <Link href="/quote" className="block w-full bg-white border-2 border-navy-900 text-navy-900 text-center font-bold py-3.5 rounded-xl hover:bg-navy-50 transition-colors uppercase tracking-widest text-sm">
                Submit Bulk RFQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
`;

fs.mkdirSync('src/app/spring-brakes/[slug]', { recursive: true });
fs.writeFileSync('src/app/spring-brakes/[slug]/page.tsx', [
  imports,
  categoryMeta,
  metadataBlock,
  componentStart,
  categoryRender,
  productRender
].join('\\n'));


import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListCard from '@/components/products/ProductListCard';
import FacetedSidebar from '@/components/products/FacetedSidebar';
import { Truck, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';


export const metadata: Metadata = {
  title: 'Severe-Duty & Off-Highway | BRC Manufacturer',
  description: 'Rugged spring brake chambers designed for construction, mining, and extreme off-highway applications.',
};

export default async function SubCategoryPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  // Fix Turbopack await bug by falling back if undefined
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base category filter
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake' && (c.description?.toLowerCase().includes('heavy') || c.strokeSize === 'Long Stroke'));

  // Apply Faceted Filters from Sidebar
  if (searchParams) {
    const applyFilter = (key: string, paramVal: string | string[] | undefined, filterFn: (p: any, val: string) => boolean) => {
      if (!paramVal) return;
      const values = Array.isArray(paramVal) ? paramVal : [paramVal];
      products = products.filter(p => values.some(v => filterFn(p, v)));
    };

    applyFilter('brand', searchParams.brand, (p, v) => p.crossReferenceBrands?.includes(v) || p.brandSlug === v.toLowerCase());
    applyFilter('strokeInch', searchParams.strokeInch, (p, v) => p.strokeInch === v);
    applyFilter('pushRodLength', searchParams.pushRodLength, (p, v) => p.pushRodLengthInch === v);
    applyFilter('application', searchParams.application, (p, v) => p.application === v);
    
    // Support the technical model filters inside the intent-based pages
    applyFilter('model', searchParams.model, (p, v) => p.type && p.type.includes(v.replace('T','')));
    applyFilter('filter', searchParams.filter, (p, v) => p.category === v);
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      <PageHeader 
        badge="Application Guide"
        title="Severe-Duty & Off-Highway"
        description="When the pavement ends, the demands on your braking system multiply. BRC Severe-Duty and Off-Highway Spring Brakes are heavily reinforced to survive in mining, logging, construction, and refuse applications."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Spring Brakes', href: '/spring-brakes' },
          { label: 'Severe-Duty & Off-Highway' }
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4">
           <FacetedSidebar baseCategory="spring-brakes" />
           
          {/* OEM CTA Banner */}
          <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800 rounded-2xl text-center mt-6 shadow-xl shadow-navy-900/10 relative overflow-hidden sticky top-[30vh]">
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
          <div className="bg-navy-900 p-4 rounded-xl shadow-md flex justify-between items-center mb-6 text-sm text-white">
            <div className="font-bold tracking-wide">Showing {products.length} Products</div>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              {products.map(product => (
                <ProductListCard key={product.slug} product={product} categoryPath="spring-brakes" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-navy-900 mb-3">No matching products found</h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">We may still manufacture this specification. Contact our engineering team for custom requirements.</p>
              <Link href="/quote" className="inline-block bg-navy-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-navy-800 transition-colors">
                Contact Sales
              </Link>
            </div>
          )}

          
      {/* Key Features Section */}
      <div className="mt-16 mb-8 border-t border-slate-200 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-navy-900">Why Choose BRC for Severe-Duty & Off-Highway?</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Engineered for absolute reliability and performance in the most demanding conditions.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Double-Plated Housing</h3>
            <p className="text-slate-600 leading-relaxed">Extra thick steel construction to resist rock strikes and heavy impacts.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Extreme Temp Diaphragms</h3>
            <p className="text-slate-600 leading-relaxed">Specially formulated rubber compounds that maintain flexibility in extreme cold and resist degradation in high heat.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Sealed Dust Protection</h3>
            <p className="text-slate-600 leading-relaxed">Enhanced booting and filtration to keep abrasive dust and mud out of the chamber.</p>
          </div>
          
        </div>
      </div>
  
          

        </div>
      </div>
    </div>
    </div>
  );
}

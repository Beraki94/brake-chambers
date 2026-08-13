
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListCard from '@/components/products/ProductListCard';
import FacetedSidebar from '@/components/products/FacetedSidebar';
import { Truck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Heavy-Duty Truck Spring Brakes | BRC Manufacturer',
  description: 'Premium spring brakes engineered specifically for Class 8 heavy-duty commercial trucks. ISO 9001 certified OEM replacements.',
};

export default async function SubCategoryPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  // Fix Turbopack await bug by falling back if undefined
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base category filter
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake');

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
    <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-slate-500">
          <li><Link href="/" className="hover:text-navy-900 transition-colors">Home</Link></li>
          <li><span className="text-slate-300">/</span></li>
          <li><Link href="/spring-brakes" className="hover:text-navy-900 transition-colors capitalize">spring brakes</Link></li>
          <li><span className="text-slate-300">/</span></li>
          <li className="text-navy-900 font-semibold" aria-current="page">Heavy-Duty Truck Spring Brakes</li>
        </ol>
      </nav>

      {/* SEO Hero Header */}
      <div className="mb-8 rounded-3xl bg-navy-900 relative overflow-hidden shadow-2xl p-8 sm:p-12 border border-navy-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">Heavy-Duty Truck Spring Brakes</h1>
            <div className="text-navy-100 text-base sm:text-lg leading-relaxed space-y-4">
              <p>Our Heavy-Duty Truck Spring Brakes are engineered specifically for Class 8 commercial vehicles that demand absolute reliability. Designed as direct aftermarket replacements for major OEM brands like Bendix, Meritor, and Haldex, these chambers deliver uncompromising stopping power.</p>              <p>Manufactured under strict ISO 9001 quality standards, BRC heavy-duty chambers feature enhanced corrosion resistance, premium nylon-reinforced diaphragms, and 8-gauge heavy steel housings to withstand millions of cycles in harsh over-the-road environments.</p>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl text-center w-72 flex-shrink-0">
             <div className="bg-amber-500/20 p-3 rounded-full mb-4 border border-amber-500/30">
               <Truck size={24} className="text-amber-400" />
             </div>
             <h4 className="font-extrabold text-white text-lg mb-2">Direct OEM Supply</h4>
             <p className="text-sm mb-6 text-navy-200 leading-relaxed">Factory-direct pricing on bulk orders for fleets and distributors.</p>
             <Link href="/quote" className="w-full bg-amber-500 text-navy-900 font-extrabold px-6 py-3 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2">
               Request Wholesale Quote
             </Link>
          </div>
        </div>
      </div>

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
          <h2 className="text-3xl font-extrabold text-navy-900">Why Choose BRC for Heavy-Duty Truck Spring Brakes?</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Engineered for absolute reliability and performance in the most demanding conditions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">OEM Exact Fit</h3>
            <p className="text-slate-600 leading-relaxed">Guaranteed drop-in replacements for standard Class 8 truck air brake systems.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Maximum Durability</h3>
            <p className="text-slate-600 leading-relaxed">Constructed with epoxy-coated return springs and heavy-duty steel housings.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Tested Reliability</h3>
            <p className="text-slate-600 leading-relaxed">Every unit undergoes strict pressure and cycle testing before leaving our facility.</p>
          </div>
          
        </div>
      </div>
  
          
      {/* FAQ Section */}
      <div className="mt-16 mb-12 bg-navy-50 rounded-3xl p-8 lg:p-12 border border-navy-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-navy-900 mb-2">What sizes are most common for Class 8 heavy-duty trucks?</h3>
              <p className="text-slate-600">Type 30/30 (T3030) is the industry standard for drive axles on Class 8 heavy-duty trucks. We offer both standard and long-stroke (3-inch) variants.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-navy-900 mb-2">Are these direct replacements for Bendix or Meritor?</h3>
              <p className="text-slate-600">Yes, our chambers are designed to match or exceed OEM specifications and cross-reference perfectly with major brand part numbers.</p>
            </div>
            
          </div>
        </div>
      </div>
  

        </div>
      </div>
    </div>
  );
}

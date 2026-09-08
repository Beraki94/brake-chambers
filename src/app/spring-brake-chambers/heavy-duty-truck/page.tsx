import React from 'react';
import Link from 'next/link';
import BulkOemCard from '@/components/ui/BulkOemCard';
import type { Metadata } from 'next';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListCard from '@/features/products/components/ProductListCard';
import FacetedSidebar from '@/features/products/components/FacetedSidebar';
import { Truck, CheckCircle2 } from 'lucide-react';import PageHeader from '@/components/layout/PageHeader';
import Card from '@/components/ui/Card';


export const metadata: Metadata = {
  title: 'Heavy-Duty Truck Spring Brakes | BRC Manufacturer',
  description: 'Premium spring brakes engineered specifically for Class 8 heavy-duty commercial trucks. OEM replacements manufactured to IATF 16949 standards.',
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
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      <PageHeader 
        badge="Heavy-Duty Truck Spring"
        title="Heavy-Duty Truck Spring Brakes"
        description="Our Heavy-Duty Truck Spring Brakes are engineered specifically for Class 8 commercial vehicles that demand absolute reliability. Designed as direct aftermarket replacements for major OEM brands like Bendix, Meritor, and Haldex, these chambers deliver uncompromising stopping power."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Spring Brakes', href: '/spring-brake-chambers' },
          { label: 'Heavy-Duty Truck Spring Brakes' }
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1920px] relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4">
           <FacetedSidebar baseCategory="spring-brake-chambers" />
           
          {/* OEM CTA Banner */}
          <BulkOemCard />
        </div>

        <div className="flex-grow">
          <div className="bg-navy-900 p-4 rounded-xl shadow-md flex justify-between items-center mb-6 text-sm text-white">
            <div className="font-bold tracking-wide">Showing {products.length} Products</div>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              {products.map(product => (
                <ProductListCard key={product.slug} product={product} categoryPath="spring-brake-chambers" />
              ))}
            </div>
          ) : (
            <Card padding="md" className="text-center py-16 -slate-200">
              <h3 className="text-2xl font-bold text-navy-900 mb-3">No matching products found</h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">We may still manufacture this specification. Contact our engineering team for custom requirements.</p>
              <Link href="/quote" className="inline-block bg-navy-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-navy-800 transition-colors">
                Contact Sales
              </Link>
            </Card>
          )}

          
      {/* Key Features Section */}
      <div className="mt-16 mb-8 border-t border-slate-200 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-navy-900">Why Choose BRC for Heavy-Duty Truck Spring Brakes?</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Engineered for absolute reliability and performance in the most demanding conditions.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          
          <Card padding="lg" hoverEffect="lift" className="-slate-100 hover:">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">OEM Exact Fit</h3>
            <p className="text-slate-600 leading-relaxed">Guaranteed drop-in replacements for standard Class 8 truck air brake systems.</p>
          </Card>
          
          <Card padding="lg" hoverEffect="lift" className="-slate-100 hover:">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Maximum Durability</h3>
            <p className="text-slate-600 leading-relaxed">Constructed with epoxy-coated return springs and heavy-duty steel housings.</p>
          </Card>
          
          <Card padding="lg" hoverEffect="lift" className="-slate-100 hover:">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Tested Reliability</h3>
            <p className="text-slate-600 leading-relaxed">Every unit undergoes strict pressure and cycle testing before leaving our facility.</p>
          </Card>
          
        </div>
      </div>
  
          
      {/* FAQ Section */}
      <div className="mt-16 mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-8 text-center">Frequently Asked Questions</h2>
          <GlobalFAQAccordion faqs={[
            {
              q: 'What sizes are most common for Class 8 heavy-duty trucks?',
              a: 'Type 30/30 (T3030) is the industry standard for drive axles on Class 8 heavy-duty trucks. We offer both standard and long-stroke (3-inch) variants.'
            },
            {
              q: 'Are these direct replacements for Bendix or Meritor?',
              a: 'Yes, our chambers are designed to match or exceed OEM specifications and cross-reference perfectly with major brand part numbers.'
            }
          ]} />
        </div>
      </div>
  

        </div>
      </div>
    </div>
    </div>
  );
}

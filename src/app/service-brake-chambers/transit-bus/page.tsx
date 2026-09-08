
import React from 'react';
import Link from 'next/link';
import BulkOemCard from '@/components/ui/BulkOemCard';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListCard from '@/features/products/components/ProductListCard';
import FacetedSidebar from '@/features/products/components/FacetedSidebar';
import { Truck, CheckCircle2 } from 'lucide-react';import PageHeader from '@/components/layout/PageHeader';
import Card from '@/components/ui/Card';


export const metadata: Metadata = {
  title: 'Transit & Bus Service Chambers | BRC Manufacturer',
  description: 'Specialized service chambers designed for the frequent stop-and-go cycles of transit buses.',
};

export default async function SubCategoryPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  // Fix Turbopack await bug by falling back if undefined
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base category filter
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake');

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
        badge="Transit & Bus Service"
        title="Transit & Bus Service Chambers"
        description="Transit buses experience incredibly high-frequency braking cycles in urban environments. Our Transit Service Chambers are built with upgraded diaphragms and springs designed specifically to resist fatigue in high-cycle, stop-and-go applications."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Chambers', href: '/service-brake-chambers' },
          { label: 'Transit & Bus Service Chambers' }
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1920px] relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4">
           <FacetedSidebar baseCategory="service-brake-chambers" />
           
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
                <ProductListCard key={product.slug} product={product} categoryPath="service-brake-chambers" />
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

          
          

        </div>
      </div>
    </div>
    </div>
  );
}

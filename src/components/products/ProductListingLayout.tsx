import React from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';
import ProductListCard from '@/components/products/ProductListCard';
import AccessoryListCard from '@/components/product-detail/AccessoryListCard';
import FacetedSidebar from '@/components/products/FacetedSidebar';
import CategoryVisualizer from '@/components/products/CategoryVisualizer';
import Pagination from '@/components/products/Pagination';
import TrustBanner from '@/components/shared/TrustBanner';
import FleetReviewsSection from '@/components/home/FleetReviewsSection';
import OEMQuickLinks from '@/components/oem/OEMQuickLinks';
import TechnicalResourcesSection from '@/components/shared/TechnicalResourcesSection';
import SubCategoryComparisonTable from '@/components/products/SubCategoryComparisonTable';
import SubCategoryWholesaleCTA from '@/components/products/SubCategoryWholesaleCTA';
import SubCategoryFAQ from '@/components/products/SubCategoryFAQ';
import PageHeader from '@/components/layout/PageHeader';

interface ProductListingLayoutProps {
  title: string;
  description: string;
  badge?: string;
  baseCategory: "all" | "spring-brakes" | "service-chambers" | "chamber-parts-kits" | "air-disc-actuators";
  products: any[];
  searchParams?: { [key: string]: string | string[] | undefined };
  visualizerType?: 'spring' | 'service' | 'parts' | 'adp';
  seoText?: React.ReactNode;
  breadcrumbs: { label: string; href?: string }[];
  isSubCategory?: boolean;
  cardType?: 'product' | 'accessory';
}

export default function ProductListingLayout({
  title,
  description,
  badge,
  baseCategory,
  products: initialProducts,
  searchParams,
  visualizerType,
  seoText,
  breadcrumbs,
  isSubCategory = false,
  cardType = 'product'
}: ProductListingLayoutProps) {

  // Apply Faceted Filters
  let products = [...initialProducts];
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

    const filter = searchParams.filter as string;
    if (filter === 'Standard') {
      products = products.filter(c => c.strokeSize === 'Standard');
    } else if (filter === 'Long Stroke') {
      products = products.filter(c => c.strokeSize === 'Long Stroke');
    }
  }

  // Pagination
  const currentPage = Number(searchParams?.page) || 1;
  const PAGE_SIZE = 20;
  const totalPages = Math.ceil(products.length / PAGE_SIZE) || 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        badge={badge}
        breadcrumbs={[{ label: 'Home', href: '/' }, ...breadcrumbs]}
      />
      <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl">

      {!isSubCategory && <TrustBanner />}

      <div className="flex flex-col lg:flex-row gap-6 relative">
        <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4">
           <FacetedSidebar baseCategory={baseCategory} />
           
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
          <div className="bg-navy-900 p-3 rounded-xl shadow-md flex justify-between items-center mb-5 text-sm">
            <div className="text-white font-bold tracking-wide">Showing {products.length} products</div>
            <select className="bg-navy-800 border border-navy-700 rounded-lg px-3 py-1.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-navy-400 cursor-pointer transition-all">
              <option>Sort by: Recommended</option>
            </select>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              {paginatedProducts.map(product => (
                cardType === 'product' ? (
                  <ProductListCard key={product.slug} product={product} categoryPath={baseCategory} />
                ) : (
                  <AccessoryListCard key={product.slug} product={product} categoryPath={baseCategory} />
                )
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <h3 className="text-lg font-bold text-navy-900 mb-2">No Products Found</h3>
              <p className="text-slate-600 mb-4">We couldn't find any products matching your criteria.</p>
              <Link href={`/${baseCategory}`} className="text-amber-600 font-bold hover:underline">View All {title}</Link>
            </div>
          )}

          {totalPages > 1 && <Pagination totalPages={totalPages} />}
          
          {seoText && (
            <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-slate-600 prose prose-slate max-w-none">
              {seoText}
            </div>
          )}
          
          {!isSubCategory && (
            <>
              <FleetReviewsSection categoryName={title} />
              <OEMQuickLinks categoryName={title} />
              <TechnicalResourcesSection categoryName={title} />
            </>
          )}

          {isSubCategory && (
            <>
              <SubCategoryComparisonTable products={paginatedProducts} categoryName={title} />
              <SubCategoryWholesaleCTA categoryName={title} />
              <SubCategoryFAQ categoryName={title} />
            </>
          )}
          
        </div>
      </div>

      {!isSubCategory && visualizerType && <CategoryVisualizer type={visualizerType} />}
      </div>
    </>
  );
}

import React from 'react';
import Link from 'next/link';

interface SubCategoryComparisonTableProps {
  products: any[];
  categoryName: string;
}

export default function SubCategoryComparisonTable({ products, categoryName }: SubCategoryComparisonTableProps) {
  if (!products || products.length === 0) return null;

  // We only want to compare up to 6 products to keep the table readable
  const comparisonProducts = products.slice(0, 6);
  const isChamber = 'type' in comparisonProducts[0];

  return (
    <section className="mt-16 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-8 py-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <span className="text-amber-400 mr-3">⚙️</span>
          {categoryName} Technical Comparison
        </h2>
        <p className="text-navy-100 text-sm mt-2">
          Compare specifications across our top {categoryName.toLowerCase()} to find the exact match for your fleet.
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
            <tr>
              <th className="px-6 py-4 border-b border-slate-100">Model</th>
              {isChamber && <th className="px-6 py-4 border-b border-slate-100">Stroke Size</th>}
              <th className="px-6 py-4 border-b border-slate-100">Primary Application</th>
              <th className="px-6 py-4 border-b border-slate-100">Key OEM Replacement</th>
              <th className="px-6 py-4 border-b border-slate-100 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {comparisonProducts.map((product) => {
              const categoryPath = product.category === 'Spring Brake' ? 'spring-brakes' :
                                   product.category === 'Service Brake' ? 'service-chambers' :
                                   product.category === 'Air Disc Actuator' ? 'air-disc-brake-actuator' : 'chamber-parts-kits';
              return (
              <tr key={product.slug} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-navy-900">
                  <Link href={`/${categoryPath}/${product.slug}`} className="hover:text-amber-600 transition-colors">
                    {product.name}
                  </Link>
                </td>
                {isChamber && (
                  <td className="px-6 py-4 text-slate-600 font-mono">
                    {product.strokeSize || '-'}
                  </td>
                )}
                <td className="px-6 py-4 text-slate-600">
                  {product.application || product.category}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {product.crossReferenceBrands ? product.crossReferenceBrands[0] : 'Multiple'}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link 
                    href={`/${categoryPath}/${product.slug}`}
                    className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 text-xs uppercase tracking-wide"
                  >
                    View Specs &rarr;
                  </Link>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

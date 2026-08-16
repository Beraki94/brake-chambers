import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrakeChamber } from '@/types';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function ProductListCard({ product, categoryPath }: { product: BrakeChamber, categoryPath: string }) {
  return (
    <Link href={`/${categoryPath}/${product.slug}`} className="h-full flex flex-col sm:flex-row items-stretch bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
      
      {/* Left: Image (Flexible height, fixed width on desktop) */}
      <div className="w-full sm:w-48 aspect-square sm:aspect-auto sm:min-h-full flex-shrink-0 relative bg-white flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-slate-100">
        <Image 
          src={product.galleryUrls[0]} 
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 right-0 bg-navy-50 text-navy-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg border-b border-l border-navy-100 z-10">
          {product.type}
        </div>
      </div>

      {/* Right: Details (SEO & Wholesale Focused) */}
      <div className="flex flex-col flex-grow w-full min-w-0 p-4 sm:p-5 h-full">
        
        {/* Top Info: Name, SKU & Main Spec */}
        <div className="mb-4">
          {/* H3 with min-height ensures 1-line and 2-line titles take the same space */}
          <h3 className="font-bold text-navy-900 text-lg leading-tight line-clamp-2 min-h-[2.75rem] group-hover:text-amber-600 transition-colors duration-200 mb-2">
            {product.name}
          </h3>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3">
             <span className="text-xs font-mono font-bold text-navy-400">
               SKU: {product.slug.split('-').pop()?.toUpperCase()}
             </span>
             {product.strokeSize && (
               <span className="text-xs font-semibold text-slate-500 border-l border-slate-200 pl-3">
                 Stroke: <span className="text-navy-700">{product.strokeSize}</span>
               </span>
             )}
          </div>
        </div>

        {/* Middle Info: OEM Cross-Ref */}
        <div className="mb-4">
          <div className="bg-slate-50 rounded border border-slate-100 p-2.5 h-[76px] flex flex-col justify-center w-full">
            {product.oemPartNumbers && product.oemPartNumbers.length > 0 ? (
              <>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5">
                  Replaces OEM:
                </span>
                <div className="flex overflow-hidden gap-2">
                  {product.oemPartNumbers.slice(0, 2).map((oem: any, idx: number) => (
                    <span key={idx} className="text-[11px] font-mono font-semibold text-navy-800 bg-white px-1.5 py-0.5 border border-slate-200 rounded shadow-sm whitespace-nowrap">
                      {oem.brand} {oem.partNumber}
                    </span>
                  ))}
                  {product.oemPartNumbers.length > 2 && (
                    <span className="text-[10px] font-bold text-slate-400 self-center uppercase whitespace-nowrap">
                      +{product.oemPartNumbers.length - 2} More
                    </span>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center w-full">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
                  Fitment
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Universal / Match by Specs
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Action Button & Trust - Forced to Bottom */}
        <div className="mt-auto flex justify-between items-center pt-2 gap-2">
           <span className="flex-shrink-0 flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 uppercase tracking-wider whitespace-nowrap">
             <ShieldCheck size={12} className="mr-1 flex-shrink-0" /> Factory Direct
           </span>
          <span className="flex-shrink-0 whitespace-nowrap text-amber-600 text-sm font-bold flex items-center group-hover:text-amber-500 transition-colors">
            View Details <ChevronRight size={16} className="ml-1 flex-shrink-0 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

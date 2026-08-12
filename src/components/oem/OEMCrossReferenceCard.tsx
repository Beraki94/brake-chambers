import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrakeChamber } from '@/types';
import { ShieldCheck, ChevronRight, CheckCircle2, ArrowRightLeft } from 'lucide-react';

export default function OEMCrossReferenceCard({ 
  product, 
  categoryPath,
  brandSlug 
}: { 
  product: BrakeChamber, 
  categoryPath: string,
  brandSlug: string 
}) {
  // Find the exact OEM matches for the searched brand
  const matchedOEMs = product.oemPartNumbers?.filter(oem => oem.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-') === brandSlug) || [];

  // Determine brand display name based on slug, or default to slug capitalized
  const brandName = matchedOEMs.length > 0 ? matchedOEMs[0].brand : brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);

  return (
    <Link href={`/${categoryPath}/${product.slug}`} className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-amber-400 hover:-translate-y-0.5 transition-all duration-300 group">
      
      {/* Top Banner: The Match */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 p-4 sm:p-5 border-b border-navy-700 flex flex-col gap-2 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <ArrowRightLeft className="w-24 h-24 -mt-4 -mr-4 text-white" />
        </div>
        
        <div className="flex items-center text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 z-10">
          <CheckCircle2 className="w-4 h-4 mr-1.5" /> 1:1 Direct Replacement
        </div>
        
        <div className="z-10">
          <span className="text-navy-300 text-[10px] uppercase font-bold tracking-widest block mb-1.5">
            Replaces {brandName}:
          </span>
          {matchedOEMs.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {matchedOEMs.map((oem, idx) => (
                <span key={idx} className="bg-white/10 text-white border border-white/20 px-2 py-1 rounded font-mono font-bold text-sm shadow-sm backdrop-blur-sm">
                  {oem.partNumber}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-white font-mono font-bold text-sm">
              Multiple Part Numbers
            </span>
          )}
        </div>
      </div>

      {/* Main Content: BRC Product */}
      <div className="p-4 sm:p-5 flex gap-4 items-center bg-white flex-grow">
        
        {/* Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 relative bg-slate-50 rounded-lg p-2 border border-slate-100 flex items-center justify-center">
          <Image 
            src={product.galleryUrls[0]} 
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col flex-grow w-full">
           <span className="text-[10px] sm:text-xs font-mono font-bold text-navy-400 mb-1">
             BRC SKU: {product.slug.split('-').pop()?.toUpperCase()}
           </span>
           <h3 className="font-extrabold text-navy-900 text-base sm:text-lg leading-tight mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
             {product.name}
           </h3>
           <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-semibold text-slate-500">
              <span className="bg-slate-100 px-2 py-1 rounded border border-slate-200 text-navy-700">
                {product.type}
              </span>
              {product.strokeSize && <span>Stroke: <span className="text-navy-900">{product.strokeSize}</span></span>}
           </div>
        </div>
      </div>
      
      {/* Action Footer */}
      <div className="bg-slate-50 p-3 px-4 sm:px-5 border-t border-slate-100 flex justify-between items-center mt-auto">
        <span className="flex items-center text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
          <ShieldCheck size={14} className="mr-1.5" /> ISO 9001 Factory
        </span>
        <span className="text-amber-600 text-[11px] sm:text-sm font-bold flex items-center group-hover:text-amber-500 transition-colors">
          View BRC Part <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
        </span>
      </div>

    </Link>
  );
}

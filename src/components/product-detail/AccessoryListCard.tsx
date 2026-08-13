import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrakeAccessory } from '@/types';
import { ShieldCheck, Truck, Star } from 'lucide-react';

export default function AccessoryListCard({ product, categoryPath }: { product: BrakeAccessory, categoryPath: string }) {
  
  // Generate a pseudo-random high rating (4.8 to 5.0) and review count based on slug
  const hash = product.slug.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
  const rating = (4.8 + (Math.abs(hash) % 3) * 0.1).toFixed(1);
  const reviews = 50 + (Math.abs(hash) % 150);

  return (
    <Link href={`/${categoryPath}/${product.slug}`} className="h-full flex flex-row items-center bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-4 gap-4 sm:gap-6 group">
      
      {/* Left: Image (Square, fixed width & aspect ratio) */}
      <div className="w-32 sm:w-48 aspect-square flex-shrink-0 relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg overflow-hidden flex items-center justify-center p-3 border border-slate-100">
        <Image 
          src={product.galleryUrls[0]} 
          alt={product.name}
          width={160}
          height={160}
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 right-0 bg-navy-50 text-navy-600 text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg border-b border-l border-navy-100">
          {product.category}
        </div>
      </div>

      {/* Right: Details (Professional B2B Typography) */}
      <div className="flex flex-col flex-grow min-w-0 justify-between py-0.5">
        
        {/* Top Info: Name & Rating */}
        <div className="mb-3">
          <h3 className="font-bold text-navy-900 text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-primary-600 transition-colors duration-200 mb-1.5">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1.5">
            <div className="flex items-center text-primary-400">
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
               <Star size={12} fill={rating === '5.0' ? "currentColor" : "none"} className={rating !== '5.0' ? "text-primary-400" : ""} />
            </div>
            <span className="text-[11px] font-bold text-navy-800">{rating}</span>
            <span className="text-[11px] text-slate-500">({reviews} reviews)</span>
          </div>
        </div>

        {/* Middle Info: Specs & Badges (sleek and compact) */}
        <div className="flex flex-col gap-2.5 mb-3">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="flex items-center text-[10px] font-bold text-success-700 bg-success-50 px-1.5 py-0.5 rounded border border-success-100 uppercase tracking-wider">
              <ShieldCheck size={12} className="mr-1" /> Premium
            </span>
            <span className="flex items-center text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
              <Truck size={12} className="mr-1" /> Fast Ship
            </span>
          </div>

          {/* Features */}
          <ul className="flex flex-col gap-1 text-xs text-slate-600 mt-0.5">
             {product.features.slice(0, 2).map((feat, i) => (
               <li key={i} className="flex items-start gap-1.5">
                 <span className="text-primary-500 font-bold mt-0.5 text-[10px]">•</span>
                 <span className="leading-tight">{feat}</span>
               </li>
             ))}
          </ul>

        </div>
        
        {/* Action Button */}
        <div className="mt-auto flex justify-end">
          <button className="bg-navy-900 text-white text-xs font-bold px-4 py-2 rounded-lg group-hover:bg-primary-500 transition-colors duration-300">
            View Details
          </button>
        </div>

      </div>

    </Link>
  );
}

import React from 'react';
import Link from 'next/link';

interface SubCategoryWholesaleCTAProps {
  categoryName: string;
}

export default function SubCategoryWholesaleCTA({ categoryName }: SubCategoryWholesaleCTAProps) {
  return (
    <section className="mt-8 mb-8 relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl shadow-lg border border-navy-700 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
      
      <div className="relative z-10 flex-1 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold text-amber-400 tracking-widest uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Factory Direct Wholesale
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Procuring <span className="text-amber-400">{categoryName}</span> in Bulk?
        </h2>
        
        <p className="text-navy-200 text-lg md:text-xl leading-relaxed">
          Skip the middlemen. We manufacture our {categoryName.toLowerCase()} directly to ISO 9001 standards. Get preferential pricing, guaranteed lead times, and pallet shipping discounts when you order directly from BRC.
        </p>
      </div>

      <div className="relative z-10 flex flex-col w-full md:w-auto gap-4 min-w-[200px]">
        <Link 
          href="/quote" 
          className="bg-amber-500 text-navy-900 font-extrabold py-4 px-8 rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25 text-center uppercase tracking-widest text-sm"
        >
          Request Bulk Quote
        </Link>
        <Link 
          href="/distributor/login" 
          className="bg-navy-900/50 backdrop-blur-sm text-white border border-white/20 font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all text-center uppercase tracking-widest text-sm"
        >
          View Pallet Pricing
        </Link>
      </div>
    </section>
  );
}

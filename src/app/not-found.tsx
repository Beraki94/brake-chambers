"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowRight, Cog } from 'lucide-react';
import TrendingModelsMarquee from '@/components/shared/TrendingModelsMarquee';

export default function NotFound() {
  return (
    <>
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="w-24 h-24 bg-navy-100 rounded-[2rem] flex items-center justify-center mx-auto mb-8 relative shadow-inner">
            <Cog className="w-12 h-12 text-navy-800 relative z-10" />
            <ShieldAlert className="w-8 h-8 text-amber-500 absolute -bottom-2 -right-2 z-20 bg-white rounded-full p-1 shadow-sm" />
          </div>
          
          <h1 className="font-heading font-black text-6xl md:text-8xl text-navy-900 mb-6 tracking-tight">404</h1>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-800 mb-4">Part Not Found</h2>
          
          <p className="text-slate-600 text-lg mb-12 max-w-lg mx-auto leading-relaxed font-light">
            Looks like this page was shipped to the wrong dock, or the part number you're looking for doesn't exist in our current catalog. Let's get you back on the road.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="px-8 py-4 bg-amber-500 text-navy-950 rounded-xl font-extrabold hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center uppercase tracking-widest text-sm">
              View Catalog <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-navy-900 border border-slate-200 rounded-xl font-bold hover:border-navy-900 hover:shadow-md transition-all flex items-center gap-2 w-full sm:w-auto justify-center uppercase tracking-widest text-sm">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      
      {/* Show popular assemblies to recover traffic */}
      <TrendingModelsMarquee />
    </>
  );
}

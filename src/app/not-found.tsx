"use client";

import Link from 'next/link';
import { Smartphone, ArrowRight, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <Smartphone className="w-12 h-12 text-slate-600 relative z-10" />
          <AlertTriangle className="w-6 h-6 text-red-500 absolute bottom-0 right-0 z-20 bg-white rounded-full" />
        </div>
        
        <h1 className="font-heading font-black text-6xl md:text-8xl text-navy-900 mb-6 tracking-tight">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-800 mb-4">Deal Not Found</h2>
        
        <p className="text-navy-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Looks like this page was shipped to the wrong address, or the device you're looking for is out of stock. Let's get you back to our premium inventory.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="px-8 py-4 bg-slate-500 text-white rounded-xl font-bold hover:bg-slate-400 transition-colors shadow-lg shadow-slate-500/30 flex items-center gap-2 w-full sm:w-auto justify-center">
            View Latest Inventory <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white text-navy-900 border border-navy-200 rounded-xl font-bold hover:border-slate-500 hover:text-slate-600 transition-colors shadow-sm flex items-center gap-2 w-full sm:w-auto justify-center">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

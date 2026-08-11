import React from 'react';
import { ShieldCheck, Truck, RotateCcw, BadgeCheck } from 'lucide-react';

export default function TrustMarquee() {
  return (
    <section className="relative z-20 -mt-8 lg:-mt-10 mb-8 lg:mb-12 py-6 bg-white border border-slate-100 overflow-hidden shadow-lg rounded-xl mx-4 md:mx-auto max-w-5xl">
      {/* Left/Right Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* First Group */}
        <div className="flex gap-12 px-6 items-center">
          {/* Set 1 */}
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><ShieldCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Data Wipe Certified</h3></div>
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><RotateCcw className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">14-Day Returns</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><BadgeCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">90-Day Warranty</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><Truck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Secure Global Shipping</h3></div>
          {/* Set 2 (To ensure screen width coverage) */}
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><ShieldCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Data Wipe Certified</h3></div>
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><RotateCcw className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">14-Day Returns</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><BadgeCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">90-Day Warranty</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><Truck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Secure Global Shipping</h3></div>
        </div>
        
        {/* Second Group (Duplicate for seamless loop) */}
        <div className="flex gap-12 px-6 items-center" aria-hidden="true">
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><ShieldCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Data Wipe Certified</h3></div>
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><RotateCcw className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">14-Day Returns</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><BadgeCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">90-Day Warranty</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><Truck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Secure Global Shipping</h3></div>
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><ShieldCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Data Wipe Certified</h3></div>
          <div className="flex items-center gap-3"><div className="bg-slate-100 p-2 rounded-full text-slate-600"><RotateCcw className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">14-Day Returns</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><BadgeCheck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">90-Day Warranty</h3></div>
          <div className="flex items-center gap-3"><div className="bg-navy-50 p-2 rounded-full text-navy-600"><Truck className="w-5 h-5" /></div><h3 className="font-bold text-navy-900 text-sm whitespace-nowrap">Secure Global Shipping</h3></div>
        </div>
      </div>
    </section>
  );
}

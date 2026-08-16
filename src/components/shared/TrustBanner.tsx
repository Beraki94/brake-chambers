import React from 'react';
import { Truck, ShieldCheck, CheckCircle, Settings } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border-b-4 border-amber-500 py-6 rounded-[1.5rem] mb-8 shadow-xl shadow-navy-900/20 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none"></div>
      <div className="px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-navy-700/50">
          <div className="flex flex-col items-center justify-center p-2">
            <Truck className="w-8 h-8 text-amber-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">Fast Shipping</h3>
            <p className="text-navy-300 text-xs mt-1">In stock & ready to dispatch</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <ShieldCheck className="w-8 h-8 text-amber-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">Extended Warranty</h3>
            <p className="text-navy-300 text-xs mt-1">Tested for 1 million cycles</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <CheckCircle className="w-8 h-8 text-amber-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">ISO 9001:2015</h3>
            <p className="text-navy-300 text-xs mt-1">Factory-direct quality</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Settings className="w-8 h-8 text-amber-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">Exact OEM Match</h3>
            <p className="text-navy-300 text-xs mt-1">Drop-in replacements</p>
          </div>
        </div>
      </div>
    </div>
  );
}

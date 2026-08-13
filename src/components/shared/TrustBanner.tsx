import React from 'react';
import { Truck, ShieldCheck, CheckCircle, Settings } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="bg-navy-900 border-b-4 border-[#FFB000] py-6 rounded-2xl mb-8 shadow-xl">
      <div className="px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-navy-700/50">
          <div className="flex flex-col items-center justify-center p-2">
            <Truck className="w-8 h-8 text-primary-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">Fast Shipping</h3>
            <p className="text-navy-300 text-xs mt-1">In stock & ready to dispatch</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <ShieldCheck className="w-8 h-8 text-primary-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">Extended Warranty</h3>
            <p className="text-navy-300 text-xs mt-1">Tested for 1 million cycles</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <CheckCircle className="w-8 h-8 text-primary-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">ISO 9001:2015</h3>
            <p className="text-navy-300 text-xs mt-1">Factory-direct quality</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Settings className="w-8 h-8 text-primary-500 mb-2" />
            <h3 className="text-white font-bold text-sm md:text-base">Exact OEM Match</h3>
            <p className="text-navy-300 text-xs mt-1">Drop-in replacements</p>
          </div>
        </div>
      </div>
    </div>
  );
}

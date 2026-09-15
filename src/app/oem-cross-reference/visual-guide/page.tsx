import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { Ruler, ShieldCheck, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visual Identification Guide | BRC Brake Chambers',
  description: 'Learn how to visually identify your commercial brake chamber, measure pushrod length, and determine port angles for accurate cross-referencing.',
  keywords: ['Brake Chamber Identification', 'Measure Pushrod', 'Port Angles', 'Air Brake Specs'],
};

export default function VisualGuidePage() {
  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24 font-sans overflow-x-clip">
      <PageHeader
        badge="Technical Reference"
        title="Visual Identification Guide"
        description="Don't have a part number? Use this guide to visually measure and identify your current brake chamber to find the correct BRC replacement."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: 'Visual Guide' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] -mt-6 sm:-mt-16 relative z-20 max-w-5xl">
        
        {/* Step 1: Pushrod Length */}
        <div className="bg-white rounded-none sm:rounded-[2rem] shadow-sm sm:shadow-xl border-y sm:border border-slate-100 p-6 sm:p-8 lg:p-12 -mx-4 sm:mx-0 mb-8 sm:mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 font-bold uppercase tracking-wide text-xs sm:text-sm rounded-full mb-4">
                <Ruler className="w-4 h-4" /> Step 1
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4 tracking-tight">Measure the Pushrod</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
                The pushrod length is measured from the base of the chamber body (where it mounts to the bracket) to the very center of the clevis pin hole. 
              </p>
              <ul className="space-y-3 mb-8 sm:mb-0">
                <li className="flex items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">Ensure the chamber is fully released (caged or no air pressure).</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">Do not measure just the exposed rod; measure from the mounting face.</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shrink-0">
               {/* Placeholder for actual diagram */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <Ruler className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mb-4" />
                 <p className="text-slate-500 font-mono text-xs sm:text-sm">Pushrod Measurement Diagram</p>
               </div>
            </div>
          </div>
        </div>

        {/* Step 2: Port Angles */}
        <div className="bg-white rounded-none sm:rounded-[2rem] shadow-sm sm:shadow-xl border-y sm:border border-slate-100 p-6 sm:p-8 lg:p-12 -mx-4 sm:mx-0 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center relative z-10">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-100 text-navy-700 font-bold uppercase tracking-wide text-xs sm:text-sm rounded-full mb-4">
                <Settings className="w-4 h-4" /> Step 2
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4 tracking-tight">Determine Port Angles</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
                Air ports are clocked relative to the mounting studs. Looking directly at the rear of the chamber with the mounting studs at 3 o'clock and 9 o'clock, determine the degree angle of the ports.
              </p>
              <ul className="space-y-3 mb-8 sm:mb-0">
                <li className="flex items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">Standard port configurations are typically 0°, 45°, 90°, or 180°.</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">Match this angle to ensure your air hoses can reach without kinking.</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shrink-0">
               {/* Placeholder for actual diagram */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <Settings className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mb-4" />
                 <p className="text-slate-500 font-mono text-xs sm:text-sm">Port Angle Diagram (Looking from Rear)</p>
               </div>
            </div>
          </div>
        </div>

      </div>

      <BreadcrumbSchema items={[
        { name: 'OEM Cross-Reference', item: 'https://www.brcbrakechambers.com/oem-cross-reference' },
        { name: 'Visual Guide' }
      ]} />
    </div>
  );
}

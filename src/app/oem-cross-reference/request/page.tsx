import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { ShieldCheck, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import RequestForm from './RequestForm';

export const metadata: Metadata = {
  title: 'Request an OEM Cross-Match | BRC Brake Chambers',
  description: 'Can\'t find your exact brake chamber part number? Submit your part details or photos to our factory technical team and we will help identify the correct BRC replacement.',
  keywords: ['Request Brake Chamber Cross Reference', 'Unknown Air Brake Part', 'Engineering Match', 'Brake Chamber Drawing Fitment'],
};

export default function RequestMatchPage() {
  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24 font-sans overflow-x-clip">
      <PageHeader
        badge="Engineering Support & Cross-Reference"
        title="Request an OEM Cross-Match: Factory Engineering Desk"
        description="If you have a specialized, legacy, or rusted part number not found in our online catalog, our factory engineering team can review your specifications and assist in finding the matching BRC replacement."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: 'Request Match' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] -mt-6 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Column (Left) */}
          <div className="lg:col-span-7 xl:col-span-8 order-1">
            <RequestForm />
          </div>

          {/* Sticky Sidebar Cards (Right) */}
          <div className="lg:col-span-5 xl:col-span-4 order-2 space-y-5 lg:sticky lg:top-24">
            
            {/* Card 1: How Cross-Matching Works */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_8px_24px_rgba(10,25,41,0.04)]">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 font-bold text-xs shrink-0 border border-amber-500/20 whitespace-nowrap">
                  Steps
                </span>
                <h3 className="font-extrabold text-navy-900 text-base sm:text-lg">
                  How Cross-Matching Works
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-navy-950 font-black text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm mb-0.5">Submit Part Details</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Provide part numbers, cast marks, or upload a clear photo of the chamber tag or port layout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-navy-950 font-black text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm mb-0.5">Engineering Verification</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Our engineers evaluate stroke length, diaphragm size, clamp angle, and port thread pitch to match your application.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-navy-950 font-black text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm mb-0.5">Matching Part Recommendation</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      We provide the matching BRC part number, technical specifications, and factory wholesale pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Direct Manufacturer Advantages */}
            <div className="bg-gradient-to-b from-navy-800 to-navy-900 text-white border border-navy-700/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(10,25,41,0.18)]">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Direct Manufacturer Advantages
                </h3>
              </div>
              <p className="text-navy-200 text-xs sm:text-sm leading-relaxed mb-4">
                Work directly with Zhuji City's leading brake chamber manufacturing facility for dependable quality and reliability:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct OEM / Factory-Floor Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Extensive OEM & Aftermarket Interchange Data</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Manufactured to SAE J1469 Standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Factory-Direct Wholesale Pricing</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-navy-700/60">
                <a
                  href="https://wa.me/8613395856758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with an Engineer on WhatsApp</span>
                </a>
                <p className="text-[11px] text-navy-300 text-center mt-2">
                  Direct factory sales & technical support.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <BreadcrumbSchema items={[
        { name: 'OEM Cross-Reference', item: 'https://www.brakechambers.com/oem-cross-reference' },
        { name: 'Request Match' }
      ]} />
    </div>
  );
}

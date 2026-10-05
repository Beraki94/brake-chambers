import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import SectionHeader from '@/components/ui/SectionHeader';
import { ShieldCheck, Clock } from 'lucide-react';
import RequestForm from './RequestForm';

export const metadata: Metadata = {
  title: 'Request a Cross-Match | BRC Brake Chambers',
  description: 'Can\'t find your exact brake chamber part number? Submit it to our engineering team and we will manually cross-reference it within 24 hours.',
  keywords: ['Request Brake Chamber Cross Reference', 'Unknown Air Brake Part', 'Engineering Match'],
};

export default function RequestMatchPage() {
  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24 font-sans overflow-x-clip">
      <PageHeader
        badge="Engineering Support"
        title="Request a Cross-Match"
        description="If you have a specialized, legacy, or rusted part number not found in our online database, our engineering team can reverse-engineer and match it to a BRC equivalent."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: 'Request Match' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] -mt-6 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Left Sidebar: Info */}
          <div className="lg:col-span-1 order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-sm sm:shadow-md border border-slate-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-6">How It Works</h2>
              
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-slate-200">
                <div className="relative z-10 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-navy-950 shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg mb-1">Submit Data</h3>
                    <p className="text-slate-600 text-sm">Provide the part number, brand (if known), or upload a photo of the data tag and the chamber body.</p>
                  </div>
                </div>
                <div className="relative z-10 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-navy-950 shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg mb-1">Engineering Review</h3>
                    <p className="text-slate-600 text-sm">Our team will manually cross-reference the specs against our internal master database of over 10,000 components.</p>
                  </div>
                </div>
                <div className="relative z-10 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-navy-950 shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg mb-1">Guaranteed Match</h3>
                    <p className="text-slate-600 text-sm">We'll email you the exact BRC equivalent part number, ensuring a 100% drop-in fitment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 text-white shadow-xl shadow-navy-900/20">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-amber-500" /> 24-Hour SLA
              </h3>
              <p className="text-navy-200 text-sm leading-relaxed mb-4">
                We know fleet downtime is expensive. Most manual cross-reference requests are completed and replied to within 2-4 hours during business days.
              </p>
              <div className="flex items-center text-sm font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4 mr-2" /> Free service for fleets & distributors
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-2 2xl:col-span-3 order-1 lg:order-2 flex flex-col gap-6 sm:gap-8">
            <div className="bg-white rounded-none sm:rounded-[2rem] shadow-sm sm:shadow-xl border-y sm:border border-slate-100 p-6 sm:p-8 lg:p-10 -mx-4 sm:mx-0">
              <SectionHeader
                badge="Engineering Match"
                title="Submission Form"
                align="left"
                accentColor="amber"
                className="!mb-6 sm:!mb-8"
              />
              <p className="text-slate-500 mb-8 -mt-4">Please fill out as much information as possible to expedite the match.</p>
              
              <RequestForm />
            </div>
          </div>

        </div>
      </div>

      <BreadcrumbSchema items={[
        { name: 'OEM Cross-Reference', item: 'https://www.brcbrakechambers.com/oem-cross-reference' },
        { name: 'Request Match' }
      ]} />
    </div>
  );
}

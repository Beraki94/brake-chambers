import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { Mail, ShieldCheck, Clock, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Cross-Match | BRC Brake Chambers',
  description: 'Can\'t find your exact brake chamber part number? Submit it to our engineering team and we will manually cross-reference it within 24 hours.',
  keywords: ['Request Brake Chamber Cross Reference', 'Unknown Air Brake Part', 'Engineering Match'],
};

export default function RequestMatchPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
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

      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Info */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-6">How It Works</h2>
            
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

            <div className="mt-12 bg-navy-900 rounded-2xl p-6 text-white shadow-xl shadow-navy-900/20">
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

          {/* Right: Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-2">Submission Form</h2>
            <p className="text-slate-500 mb-8">Please fill out as much information as possible to expedite the match.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Your Name *</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Company / Fleet *</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="Logistics Inc" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Email Address *</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6">
                <h3 className="text-lg font-bold text-navy-900 mb-4">Part Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Unknown Part Number(s)</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all font-mono uppercase" placeholder="e.g. NT3030STD" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Suspected Brand / OEM</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="Bendix, Meritor, etc." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Additional Context (Optional)</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none" placeholder="Provide vehicle application, pushrod length, or any other identifying marks..."></textarea>
                </div>
              </div>

              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <Camera className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                <p className="text-navy-900 font-bold mb-1">Upload Data Tag Photos</p>
                <p className="text-slate-500 text-sm">Drag and drop images here, or click to browse. Max 5MB per file.</p>
              </div>

              <button type="button" className="w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-8 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1">
                Submit for Engineering Match
              </button>
            </form>
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

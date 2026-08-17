import React from 'react';
import type { Metadata } from 'next';
import OEMSearchForm from '@/components/oem/OEMSearchForm';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { Database, Zap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'OEM Part Number Search | BRC Brake Chambers',
  description: 'Search our live database of competitor brake chamber part numbers to instantly find the exact factory-direct BRC equivalent.',
  keywords: ['Brake Chamber Part Search', 'OEM Cross Reference', 'Bendix Interchange', 'Haldex Replacement', 'Meritor Part Lookup'],
};

export default function PartSearchPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <PageHeader
        badge="Live Database Lookup"
        title="Part Number Search"
        description="Enter any competitor or OEM part number below. Our live database will instantly map it to the exact BRC aftermarket equivalent."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: 'Part Search' }
        ]}
      />

      {/* Main Search Interface */}
      <section className="relative z-20 -mt-12 lg:-mt-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16 lg:mb-24">
        <div className="w-full">
          <OEMSearchForm />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Extensive Database</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We've cataloged thousands of proprietary OEM part numbers from Bendix, Haldex, Meritor, and Wabco, mapping them to our standardized catalog.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-500">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Instant Results</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Skip the confusing paper catalogs. Our real-time search engine immediately identifies the exact stroke length, port angles, and hardware.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Guaranteed Fit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every cross-referenced part is guaranteed to drop in with zero modifications. Form, fit, and function are identical to the original equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[
        { name: 'OEM Cross-Reference', item: 'https://www.brcbrakechambers.com/oem-cross-reference' },
        { name: 'Part Search' }
      ]} />
    </div>
  );
}

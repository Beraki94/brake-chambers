import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Search, Tag, Eye } from 'lucide-react';
import OEMSearchForm from '@/components/oem/OEMSearchForm';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Part Number Search | BRC Brake Chambers',
  description: 'Search our extensive cross-reference database using your OEM or competitor part number to find the exact BRC aftermarket equivalent.',
};

export default function PartSearchPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        badge="Part Lookup"
        title="Part Number Search"
        description="Enter your competitor or OEM part number below to instantly find the BRC factory-direct equivalent."
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 border border-slate-200 p-2 mb-12">
          <OEMSearchForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <Tag className="w-6 h-6 text-amber-500" />
              Where to find your part number
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center shrink-0 font-bold text-navy-900">1</div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Look for the Metal Identification Tag</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Most original brake chambers have a small metal tag riveted or clamped under the clamp band bolt. The part number is usually stamped on this tag.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center shrink-0 font-bold text-navy-900">2</div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Check the Weatherseal / Dust Plug</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Some manufacturers print or emboss their part numbers directly on the rubber weatherseal located at the pushrod opening.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center shrink-0 font-bold text-navy-900">3</div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Inspect the Housing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Look for ink-stamped numbers or embossed numbers directly on the steel or aluminum housing of the chamber.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-navy-900 rounded-2xl p-8 shadow-sm text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h2 className="text-xl font-bold mb-3">No part number visible?</h2>
              <p className="text-navy-200 text-sm leading-relaxed mb-6">
                If the tag is missing or illegible due to rust, you can still identify your chamber by measuring it or visually matching its features.
              </p>
              <Link href="/oem-cross-reference/visual-guide" className="inline-flex items-center justify-center w-full bg-amber-500 text-navy-950 font-bold py-3 px-6 rounded-xl hover:bg-amber-400 transition-colors">
                <Eye className="w-5 h-5 mr-2" /> Use Visual Guide
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <h2 className="text-xl font-bold text-navy-900 mb-3">Need Engineering Help?</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our engineers can map your unidentified parts if you send us photos and basic measurements.
              </p>
              <Link href="/oem-cross-reference/request" className="inline-flex items-center justify-center w-full bg-navy-50 text-navy-900 font-bold py-3 px-6 rounded-xl hover:bg-navy-100 transition-colors border border-navy-200">
                Request a Manual Match
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

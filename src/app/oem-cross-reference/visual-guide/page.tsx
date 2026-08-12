import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Ruler, AlertCircle, Eye, ShieldCheck, ArrowRight, Tag } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Visual Identification Guide | BRC Brake Chambers',
  description: 'Learn how to visually identify your commercial air brake chamber, measure pushrod length, and determine port angles without needing a part number.',
};

export default function VisualGuidePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        title="Visual Identification Guide"
        description="No part number? No problem. Use our visual guide to correctly identify your brake chamber size, stroke, and port angle."
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl -mt-10 relative z-20">
        
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-navy-900/5 mb-12">
          
          {/* Step 1: Chamber Type */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-navy-950 flex items-center justify-center font-black text-sm">1</span>
              Identify Chamber Type & Size
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-navy-900 mb-2">Spring Brake vs. Service Chamber</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  <strong>Spring Brakes</strong> (Piggybacks) have two distinct halves and are noticeably longer. They handle both service braking and emergency/parking braking. <strong>Service Chambers</strong> are single, pancake-like units used primarily on steering axles.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-navy-900 mb-2">Determine the Size (Type 30, Type 24, etc.)</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  The "Type" refers to the effective square area of the diaphragm. You can usually determine the size by measuring the outside diameter (O.D.) of the clamp band.
                </p>
                <ul className="text-sm space-y-2 text-slate-700 font-medium">
                  <li className="flex justify-between border-b border-slate-200 pb-1"><span>Type 30</span> <span className="text-navy-900">~ 8-1/4" O.D.</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-1"><span>Type 24</span> <span className="text-navy-900">~ 7-1/4" O.D.</span></li>
                  <li className="flex justify-between pb-1"><span>Type 20</span> <span className="text-navy-900">~ 6-25/32" O.D.</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Stroke Length */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-navy-950 flex items-center justify-center font-black text-sm">2</span>
              Standard vs. Long Stroke
            </h2>
            <div className="bg-navy-50 rounded-xl p-8 border border-navy-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-white p-4 rounded-lg shadow-sm w-full md:w-1/3 shrink-0 flex items-center justify-center">
                <Ruler className="w-16 h-16 text-navy-300" />
              </div>
              <div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  It is critical not to mix standard and long stroke chambers on the same axle. You can identify a long stroke chamber visually by looking at the air ports.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><Eye className="w-3 h-3 text-blue-600" /></div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm">Square vs Round Ports</h4>
                      <p className="text-slate-600 text-sm mt-1">Long stroke chambers typically have <strong>square bosses</strong> around the air ports, whereas standard stroke chambers have round bosses.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><Tag className="w-3 h-3 text-blue-600" /></div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm">Trapezoidal Tag</h4>
                      <p className="text-slate-600 text-sm mt-1">DOT regulations require long stroke chambers to have a trapezoidal (rather than circular) identification tag.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Pushrod & Clevis */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-navy-950 flex items-center justify-center font-black text-sm">3</span>
              Pushrod Length & Clevis Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-navy-900 mb-2">Measuring the Pushrod</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Measure the pushrod from the bottom of the chamber housing (where the pushrod exits) to the center of the clevis pin hole. Ensure the chamber is fully released (caged) when measuring.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-2">Welded vs Threaded Clevis</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  <strong>Threaded Clevis:</strong> The clevis is screwed onto the pushrod and can be adjusted or removed.<br/><br/>
                  <strong>Welded Clevis:</strong> The clevis is permanently welded to the pushrod. These are common on specific truck models (like Freightliner) and cannot be adjusted.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Action Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-navy-900 rounded-2xl p-8 shadow-sm text-white">
              <h2 className="text-xl font-bold mb-3">Got your measurements?</h2>
              <p className="text-navy-200 text-sm leading-relaxed mb-6">
                Now that you know your size and stroke, head over to our product catalog and use the filters to find your exact match.
              </p>
              <Link href="/spring-brakes" className="inline-flex items-center justify-center w-full bg-amber-500 text-navy-950 font-bold py-3 px-6 rounded-xl hover:bg-amber-400 transition-colors">
                Browse Catalog <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900 mb-3 flex items-center"><AlertCircle className="w-5 h-5 text-red-500 mr-2" /> Still Unsure?</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Don't guess with your brakes. Take a few photos of your current chamber and let our engineering team match it for you.
              </p>
              <Link href="/oem-cross-reference/request" className="inline-flex items-center justify-center w-full bg-navy-50 text-navy-900 font-bold py-3 px-6 rounded-xl hover:bg-navy-100 transition-colors border border-navy-200">
                Request Manual Match
              </Link>
            </div>
        </div>

      </div>
    </div>
  );
}

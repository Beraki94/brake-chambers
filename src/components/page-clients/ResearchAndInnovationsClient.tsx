"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { ArrowRight, Lightbulb, PenTool, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ResearchAndInnovationsClient() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader 
        title="R&D and Innovations"
        description="We don't just follow industry standards; we engineer the technologies that define them."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'R&D and Innovations' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">
              Engineering <span className="text-amber-500">Tomorrow's</span> Safety
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our dedicated R&D division focuses on rapid prototyping, finite element analysis (FEA), and continuous metallurgical improvements to reduce component weight while increasing structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm text-center">
              <Lightbulb className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Air Disc Brake (ADB) Advancement</h3>
              <p className="text-slate-600 leading-relaxed">
                As the industry shifts towards disc brakes, our R&D team is pioneering more compact, higher-output actuator designs that deliver superior stopping power without the severe brake fade associated with traditional drum systems.
              </p>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm text-center">
              <PenTool className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Custom OEM Engineering</h3>
              <p className="text-slate-600 leading-relaxed">
                We work directly with trailer builders and heavy-duty chassis manufacturers to design bespoke braking solutions tailored to their specific geometric and pneumatic requirements.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm text-center">
              <TrendingUp className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Metallurgical Improvements</h3>
              <p className="text-slate-600 leading-relaxed">
                We are constantly testing new advanced high-strength steel (AHSS) alloys to produce lighter brake chambers that still exceed extreme SAE J1469 burst pressure requirements.
              </p>
            </div>
          </div>
          
          <div className="bg-navy-950 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-6 font-heading tracking-tight">Need a Custom Engineering Solution?</h3>
              <p className="text-navy-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Partner with our R&D team to prototype and manufacture the exact braking components your vehicles need.
              </p>
              <Link href="/contact" className="inline-block bg-amber-500 text-navy-950 font-extrabold text-[13px] px-10 py-5 rounded-2xl hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-xl hover:shadow-amber-500/30 uppercase tracking-widest">
                Contact Our Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

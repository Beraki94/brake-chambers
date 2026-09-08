"use client";

import React from 'react';
import { ArrowRight, Layers, Droplet, Shield, Zap, Box } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import CompanyPageLayout from '@/features/company/components/CompanyPageLayout';

export default function MaterialSourcingClient() {
  return (
    <CompanyPageLayout
      badge="Supply Chain"
      title="Material Sourcing"
      description="The best engineering means nothing if raw materials fail. We source only premium-grade metals and synthetic compounds."
    >
      <div className="space-y-12">
        <div className="w-full">
          <SectionHeader
            badge="Material Superiority"
            title={<>No Compromises. <span className="text-amber-500">No Shortcuts.</span></>}
            description="While competitors thin their housings to save weight and cut costs, BRC utilizes heavy-gauge materials designed to resist rock strikes, vibration fatigue, and the immense torsional forces of heavy braking."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-amber-50/80 border border-amber-100/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-navy-900 mb-4 group-hover:text-amber-600 transition-colors">8-Gauge Steel Housings</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed">
                Our pressure housings are formed from premium 8-gauge steel, providing superior burst strength and resistance to road debris impacts compared to standard 9-gauge or 11-gauge alternatives.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-navy-50/80 border border-navy-100/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Droplet className="w-8 h-8 text-navy-500" />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-navy-900 mb-4 group-hover:text-navy-600 transition-colors">Advanced Neoprene Rubber</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed">
                Our diaphragms are molded from advanced neoprene rubber compounds reinforced with high-strength nylon fabric. They maintain extreme flexibility in -40°F cold and resist degradation in high heat.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-amber-50/80 border border-amber-100/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-navy-900 mb-4 group-hover:text-amber-600 transition-colors">Dual-Layer Corrosion Defense</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed">
                We utilize a multi-stage cathodic electrodeposition (E-coat) followed by heavy epoxy coatings on our internal return springs and housing interiors to prevent rust flaking, the #1 cause of center seal failure.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-navy-50/80 border border-navy-100/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-navy-500" />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-navy-900 mb-4 group-hover:text-navy-600 transition-colors">Machined Push-Rods</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed">
                Our push-rods are CNC machined from high-tensile steel to guarantee perfect linearity, preventing the binding and uneven wear that destroys center seals in inferior designs.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-amber-50/80 border border-amber-100/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Box className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-navy-900 mb-4 group-hover:text-amber-600 transition-colors">Premium Aluminum Ingots</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed">
                We source specific high-grade aluminum alloys (like ADC12) tailored for high-pressure die casting. This ensures our non-pressure housings are entirely free of structural porosity and micro-cracks.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#F1EFE8] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200 mt-16">
          <SectionHeader 
            title="Discover Our Brake R&D" 
            description="See how our materials are put to the test in our state-of-the-art research and development facility."
            className="!mb-8"
            plainText={true}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Contact Engineering <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/manufacturing/research-development" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Brake R&D
            </Link>
          </div>
        </div>
      </div>
    </CompanyPageLayout>
  );
}

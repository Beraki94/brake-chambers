"use client";

import React from 'react';
import { ArrowRight, Layers, Droplet, Shield, Zap, Box, Info } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import CompanyPageLayout from '@/features/company/components/CompanyPageLayout';

export default function MaterialSourcingClient() {
  return (
    <CompanyPageLayout
      badge="Supply Chain & Materials"
      title="Brake Chamber Material Sourcing: Steel, Rubber & Aluminum"
      description="Brake chamber lifespan starts with material quality. BRC sources 8-gauge steel, high-strength neoprene rubber compounds, and ADC12 aluminum ingots, and qualifies every batch before it enters production."
    >
      <div className="space-y-12">
        <div className="w-full">
          <SectionHeader
            badge="Material Superiority"
            title={<>How We Source Brake Chamber <span className="text-amber-500">Materials</span></>}
            description="Brake chamber lifespan is determined by the quality of its raw materials. Every BRC chamber is built with heavy-gauge steel, high-strength rubber compounds, and pressure-cast aluminum, verified for grade, thickness, and hardness before production begins."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-amber-50/80 border border-amber-100/50 flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-navy-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors">8-Gauge Steel Housings</h3>
              <p className="relative z-10 text-[15px] md:text-base text-slate-600 leading-relaxed">
                BRC pressure housings are stamped from verified 8-gauge steel, thicker than the 9-gauge and 11-gauge housings used by many aftermarket suppliers. The heavier gauge delivers superior burst strength, improved fatigue resistance, and greater tolerance to road debris impact.
              </p>
              <div className="relative z-10 mt-4 pt-4 md:mt-6 md:pt-6 border-t border-slate-100 flex items-start gap-3">
                <div className="shrink-0 p-1.5 bg-amber-50 rounded-md">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Quality Control</span>
                  <p className="text-sm text-slate-700 font-medium leading-snug">
                    Incoming steel is tested for grade, thickness, and hardness before it enters the press line.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-navy-50/80 border border-navy-100/50 flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Droplet className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-navy-900 mb-3 md:mb-4 group-hover:text-navy-600 transition-colors">High-Strength Neoprene Rubber Diaphragms</h3>
              <p className="relative z-10 text-[15px] md:text-base text-slate-600 leading-relaxed">
                BRC brake chamber diaphragms are molded from high-strength neoprene rubber compounds reinforced with nylon fabric. They remain flexible at -40°F and resist thermal degradation up to 200°F, delivering consistent stroke response across extreme operating environments.
              </p>
              <div className="relative z-10 mt-4 pt-4 md:mt-6 md:pt-6 border-t border-slate-100 flex items-start gap-3">
                <div className="shrink-0 p-1.5 bg-navy-50 rounded-md">
                  <Info className="w-3.5 h-3.5 text-navy-600" />
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Quality Control</span>
                  <p className="text-sm text-slate-700 font-medium leading-snug">
                    Every diaphragm batch is tensile-tested and flex-tested before assembly.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-amber-50/80 border border-amber-100/50 flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-navy-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors">Dual-Layer Corrosion Defense</h3>
              <p className="relative z-10 text-[15px] md:text-base text-slate-600 leading-relaxed">
                Every internal return spring and housing interior passes through a multi-stage cathodic electrodeposition (E-coat) process, followed by a heavy epoxy topcoat. This dual-layer defense prevents the internal rust flaking that is the leading cause of center seal failure in aftermarket brake chambers.
              </p>
              <div className="relative z-10 mt-4 pt-4 md:mt-6 md:pt-6 border-t border-slate-100 flex items-start gap-3">
                <div className="shrink-0 p-1.5 bg-amber-50 rounded-md">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Quality Control</span>
                  <p className="text-sm text-slate-700 font-medium leading-snug">
                    Coating thickness is measured and logged for every production batch.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-navy-50/80 border border-navy-100/50 flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-navy-900 mb-3 md:mb-4 group-hover:text-navy-600 transition-colors">CNC-Machined Push-Rods</h3>
              <p className="relative z-10 text-[15px] md:text-base text-slate-600 leading-relaxed">
                BRC push-rods are CNC-machined from high-tensile steel to maintain straight-line tolerance across the full stroke. This prevents the binding and uneven wear that damages center seals and shortens brake chamber service life.
              </p>
              <div className="relative z-10 mt-4 pt-4 md:mt-6 md:pt-6 border-t border-slate-100 flex items-start gap-3">
                <div className="shrink-0 p-1.5 bg-navy-50 rounded-md">
                  <Info className="w-3.5 h-3.5 text-navy-600" />
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Quality Control</span>
                  <p className="text-sm text-slate-700 font-medium leading-snug">
                    Every push-rod is measured against tolerance before assembly.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-amber-50/80 border border-amber-100/50 flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Box className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-navy-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors">ADC12 Aluminum Die-Cast Ingots</h3>
              <p className="relative z-10 text-[15px] md:text-base text-slate-600 leading-relaxed">
                BRC sources ADC12-grade aluminum alloy ingots specifically formulated for high-pressure die casting. This ensures non-pressure housings are free of structural porosity and micro-cracks, delivering consistent strength without the weight of steel.
              </p>
              <div className="relative z-10 mt-4 pt-4 md:mt-6 md:pt-6 border-t border-slate-100 flex items-start gap-3">
                <div className="shrink-0 p-1.5 bg-amber-50 rounded-md">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Quality Control</span>
                  <p className="text-sm text-slate-700 font-medium leading-snug">
                    Every aluminum batch is spectro-analyzed for alloy composition before casting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-24">
          <SectionHeader
            badge="Quality Intake"
            title="Brake Chamber Material Qualification"
            description="No raw material enters BRC production without passing intake inspection at our Zhejiang lab. Steel is tested for grade, thickness, and hardness. Rubber is tensile-tested and flex-tested. Aluminum is spectro-analyzed for alloy composition. Every batch is logged and traceable to its source."
          />
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#F1EFE8] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200 mt-24">
          <SectionHeader 
            badge="Engineering Collaboration"
            title="Need Custom Brake Chamber Materials?" 
            description="BRC can source and qualify alternative steel grades, rubber compounds, or aluminum alloys for custom brake chamber applications. Send us your material specifications, and our engineering team will respond within 24 hours."
            className="!mb-8"
            plainText={true}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[11px] sm:text-[12px] md:text-[13px] whitespace-nowrap transform hover:-translate-y-1 w-full sm:w-auto">
              Contact Engineering <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/manufacturing/research-development" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[11px] sm:text-[12px] md:text-[13px] whitespace-nowrap transform hover:-translate-y-1 w-full sm:w-auto">
              Explore Brake Chamber R&D <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </CompanyPageLayout>
  );
}



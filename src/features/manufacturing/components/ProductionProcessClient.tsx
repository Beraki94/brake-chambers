"use client";

import React from 'react';
import { ArrowRight, Settings, Cpu, ShieldAlert, CheckCircle2, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import CompanyPageLayout from '@/features/company/components/CompanyPageLayout';

export default function ProductionProcessClient() {
  const steps = [
    {
      step: '01',
      title: "Brake Chamber Stamping & Forming",
      description: "Every 8-gauge steel brake chamber housing begins in heavy-tonnage hydraulic presses. Automated stamping ensures exact tolerances and forms the rigid foundation required to withstand torsional forces, pressure cycling, and road impact stress.",
      icon: <Settings className="w-8 h-8 text-amber-500" />,
      image: "/images/manufacturing_floor.png",
      subNote: "Incoming steel is verified for grade, thickness, and hardness before entering the press line.",
      linkUrl: null,
      linkText: null
    },
    {
      step: '02',
      title: "Robotic Welding of Brake Chamber Housings",
      description: "Critical structural welds on every BRC brake chamber are performed by 6-axis robotic welding arms. Continuous, deep-penetration seams run around the housing to ensure structural integrity and burst resistance across millions of pressure cycles.",
      icon: <Cpu className="w-8 h-8 text-navy-500" />,
      image: "/products/scattered_chambers_footer.png",
      subNote: "Every weld is visually inspected and pressure-tested before moving to the next stage.",
      linkUrl: null,
      linkText: null
    },
    {
      step: '03',
      title: "Brake Chamber E-Coating & Epoxy Finishing",
      description: "Every steel component, including internal return springs, passes through a multi-stage cathodic electrodeposition (E-coat) process, followed by a heavy epoxy finish. This dual-layer corrosion defense prevents the internal rust flaking that damages center seals and shortens chamber life.",
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      image: "/images/engineering_blueprint.png",
      subNote: "Coating thickness is measured and logged for every production batch.",
      linkUrl: null,
      linkText: null
    },
    {
      step: '04',
      title: "Brake Chamber Automated Assembly",
      description: "Every brake chamber is assembled in a clean-room environment using torque-controlled fastening systems. Neoprene diaphragms and machined push-rods are aligned to deliver consistent linear force across the full stroke, without binding, hesitation, or air loss.",
      icon: <CheckCircle2 className="w-8 h-8 text-navy-500" />,
      image: "/images/commercial_trailer.png",
      subNote: "Every assembled chamber is 100% pneumatic leak-tested before packaging.",
      linkUrl: "/manufacturing/quality-assurance",
      linkText: "See Quality Assurance Testing"
    }
  ];

  return (
    <CompanyPageLayout
      badge="Production Process"
      title="Brake Chamber Manufacturing Process: From Raw Steel to Export-Ready"
      description="Inside our 50,000 sqm factory in Zhejiang, China, every BRC brake chamber moves through a controlled four-stage production flow: stamping, welding, e-coating, and automated assembly. Each stage is audited to IATF 16949 standards."
    >
      <div className="space-y-16">
        <div className="w-full">
          <SectionHeader
            badge="Production Overview"
            title={<>Inside Our Brake Chamber <span className="text-amber-500">Production Process</span></>}
            description="Our vertically integrated brake chamber production lines are built around one principle: consistency. Every unit is engineered to perform identically to the million chambers manufactured before it. Here are the four controlled stages that make it possible."
          />

          <div className="space-y-20 mt-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                <div className="w-full md:w-1/2">
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                    <Image src={step.image} alt={step.title} fill className="object-cover " />
                    <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100">
                      <span className="text-amber-600 font-extrabold uppercase tracking-widest text-xs">Step {step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-navy-900 mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {step.description}
                  </p>
                  {step.subNote && (
                    <div className="mt-8 flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 group-hover:bg-amber-400 transition-colors"></div>
                      <div className="shrink-0 p-2 bg-amber-50 rounded-lg">
                        <Info className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Quality Control</span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          {step.subNote}
                        </p>
                      </div>
                    </div>
                  )}
                  {step.linkUrl && (
                    <div className="mt-6">
                      <Link href={step.linkUrl} className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 uppercase tracking-widest text-sm">
                        {step.linkText} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#F1EFE8] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200 mt-16">
          <SectionHeader 
            badge="Material Sourcing"
            title="Brake Chamber Material Sourcing" 
            description="Steel grade, rubber compound, and die-cast aluminum all affect chamber lifespan. See how BRC sources and qualifies every raw material before it enters the production line."
            className="!mb-8"
            plainText={true}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/manufacturing/material-sourcing" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[11px] sm:text-[12px] md:text-[13px] whitespace-nowrap transform hover:-translate-y-1 w-full sm:w-auto">
              Explore Material Sourcing <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/quote" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[11px] sm:text-[12px] md:text-[13px] whitespace-nowrap transform hover:-translate-y-1 w-full sm:w-auto">
              Request Factory Pricing <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </CompanyPageLayout>
  );
}


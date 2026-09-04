"use client";

import React from 'react';
import { ArrowRight, Settings, Cpu, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import CompanyPageLayout from '@/features/company/components/CompanyPageLayout';

export default function ProductionProcessClient() {
  const steps = [
    {
      step: '01',
      title: "Precision Stamping & Forming",
      description: "Our 8-gauge steel housings start in heavy-tonnage hydraulic presses. Automated stamping ensures exact tolerances and forms the rigid foundation necessary to withstand severe torsional forces and road impacts.",
      icon: <Settings className="w-8 h-8 text-amber-500" />,
      image: "/images/manufacturing_floor.png"
    },
    {
      step: '02',
      title: "Robotic Welding",
      description: "Human error is eliminated from our critical structural welds. 6-axis robotic welding arms perform continuous, deep-penetration seams around the housing to guarantee absolute structural integrity and burst resistance.",
      icon: <Cpu className="w-8 h-8 text-navy-500" />,
      image: "/products/scattered_chambers_footer.png"
    },
    {
      step: '03',
      title: "E-Coating & Epoxy Finishes",
      description: "Every steel component, including internal return springs, passes through a multi-stage cathodic electrodeposition (E-coat) process, followed by a heavy epoxy finish. This dual-layer defense system prevents the internal rust flaking that destroys center seals.",
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      image: "/images/engineering_blueprint.png"
    },
    {
      step: '04',
      title: "Automated Assembly",
      description: "Components are assembled in a clean-room environment using automated, torque-controlled fastening systems. Premium neoprene diaphragms and machined push-rods are perfectly aligned to guarantee linear force without binding.",
      icon: <CheckCircle2 className="w-8 h-8 text-navy-500" />,
      image: "/images/commercial_trailer.png"
    }
  ];

  return (
    <CompanyPageLayout
      badge="Engineering & Production"
      title="Manufacturing Process"
      description="Automated precision. Lean manufacturing. Zero compromises. Discover how we build the world's most reliable brake chambers."
    >
      <div className="space-y-16">
        <div className="w-full">
          <SectionHeader
            badge="Production Flow"
            title={<>The <span className="text-amber-500">Blueprint</span> of Quality</>}
            description="Our vertically integrated production lines are designed around one core principle: consistency. When a fleet installs a BRC brake chamber, they are getting a product engineered to perform identically to the million units manufactured before it."
          />

          <div className="space-y-20 mt-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                <div className="w-full md:w-1/2">
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                    <Image src={step.image} alt={step.title} fill className="object-cover grayscale" />
                    <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                      <span className="text-slate-600 font-extrabold uppercase tracking-widest text-xs">Step {step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-navy-900 mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200 mt-16">
          <SectionHeader 
            title="Explore the Raw Materials We Use" 
            description="Discover how we source premium steel, rubber, and alloys to build the most reliable brake chambers on the market."
            className="!mb-8"
            plainText={true}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Request Factory Pricing <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/manufacturing/material-sourcing" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Material Sourcing
            </Link>
          </div>
        </div>
      </div>
    </CompanyPageLayout>
  );
}

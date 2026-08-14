"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { ArrowRight, Settings, Cpu, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProductionProcessClient() {
  const steps = [
    {
      title: "1. Precision Stamping & Forming",
      description: "Our 8-gauge steel housings start in heavy-tonnage hydraulic presses. Automated stamping ensures exact tolerances and forms the rigid foundation necessary to withstand severe torsional forces and road impacts.",
      icon: <Settings className="w-8 h-8 text-navy-500" />,
      image: "/images/manufacturing_floor.png"
    },
    {
      title: "2. Robotic Welding",
      description: "Human error is eliminated from our critical structural welds. 6-axis robotic welding arms perform continuous, deep-penetration seams around the housing to guarantee absolute structural integrity and burst resistance.",
      icon: <Cpu className="w-8 h-8 text-navy-500" />,
      image: "/products/scattered_chambers_footer.png"
    },
    {
      title: "3. E-Coating & Epoxy Finishes",
      description: "Every steel component, including internal return springs, passes through a multi-stage cathodic electrodeposition (E-coat) process, followed by a heavy epoxy finish. This dual-layer defense system prevents the internal rust flaking that destroys center seals.",
      icon: <ShieldAlert className="w-8 h-8 text-navy-500" />,
      image: "/images/engineering_blueprint.png"
    },
    {
      title: "4. Automated Assembly",
      description: "Components are assembled in a clean-room environment using automated, torque-controlled fastening systems. Premium neoprene diaphragms and machined push-rods are perfectly aligned to guarantee linear force without binding.",
      icon: <CheckCircle2 className="w-8 h-8 text-navy-500" />,
      image: "/images/commercial_trailer.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        badge="Engineering & Production"
        title="Production Process"
        description="Automated precision. Lean manufacturing. Zero compromises. Discover how we build the world's most reliable brake chambers."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'Production Process' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeader
            title={<>The <span className="text-navy-600">Blueprint</span> of Quality</>}
            description="Our vertically integrated production lines are designed around one core principle: consistency. When a fleet installs a BRC brake chamber, they are getting a product engineered to perform identically to the million units manufactured before it."
          />

          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                <div className="w-full md:w-1/2">
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-navy-950 py-20 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <SectionHeader title="Explore the Raw Materials We Use" className="!mb-6" />

          <Link href="/company/material-sourcing" className="inline-flex items-center text-amber-500 font-bold hover:text-amber-400 transition-colors uppercase tracking-widest text-lg">
            View Material Sourcing <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PenTool, Microscope, Factory, ShieldCheck, CheckCircle2, Settings, Lock, Users, FileText, Cog, Package, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import IconBox from '@/components/ui/IconBox';

export default function CustomOemClient() {

  const phases = [
    {
      phase: '01',
      title: 'CAD Concept & Design Review',
      description: 'Send us your CAD files, engineering drawings, or even a physical sample. Our team analyzes the design for manufacturability, identifies cost-reduction opportunities, and proposes material and geometry optimizations — all before any tooling investment.',
      icon: <PenTool />,
      features: ['3D Modeling & Stress Analysis', 'Material Selection Consultation', 'DFM (Design for Manufacturing) Audits', 'Cost Engineering & Value Analysis'],
      image: '/images/engineering_blueprint.png',
    },
    {
      phase: '02',
      title: 'Rapid Prototyping & Validation',
      description: 'Before committing to expensive production tooling, we create fully functional prototypes using rapid 3D printing and low-volume CNC machining. Prototypes undergo real-world pneumatic testing, dimensional verification, and performance benchmarking against your requirements.',
      icon: <Microscope />,
      features: ['Functional Metal Prototypes in 14 Days', 'Pneumatic & Burst Pressure Testing', 'Iterative Design Refinement', 'Customer Sign-Off Before Tooling'],
      image: '/images/commercial_trailer.png',
    },
    {
      phase: '03',
      title: 'Tooling, Production & Delivery',
      description: 'Once prototypes are approved, we develop custom aluminum die-casting molds and stamping dies in-house. Our automated production lines scale seamlessly from pilot runs of 500 units to full production of 500,000+ units — with 100% end-of-line testing on every chamber.',
      icon: <Factory />,
      features: ['Custom Aluminum Die-Casting Molds', 'Automated Robotic Welding & Assembly', 'Scalable 500 to 500,000+ Units', '100% End-of-Line Quality Testing'],
      image: '/images/manufacturing_floor.png',
    },
  ];

  const stats = [
    { value: '500K+', label: 'Annual Unit Capacity', icon: Factory },
    { value: '14', label: 'Days to First Prototype', icon: Cog },
    { value: '100%', label: 'IP Protection', icon: Lock },
    { value: '50+', label: 'OEM Programs Delivered', icon: Handshake },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-clip">
      <PageHeader
        badge="Custom Engineering"
        title="Custom OEM Manufacturing"
        description="We are the manufacturing powerhouse behind some of the world's most recognized brake brands. Bring your proprietary specs, and we will engineer, prototype, and mass-produce them at scale."
        imageSrc="/images/manufacturing_floor.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manufacturing', href: '/manufacturing' },
          { label: 'Custom OEM Manufacturing' }
        ]}
      />

      {/* Light Value Proposition (Section Grey) */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <SectionHeader
            title={<>Your Design. <span className="text-amber-500">Our Factory.</span></>}
            description="You don't need to build a factory in China to get factory-direct margins. Partner with BRC to engineer, test, and mass-produce your proprietary brake chamber designs at scale — while we handle every aspect of manufacturing, testing, and logistics."
            align="center"
            theme="light"
            accentColor="amber"
            plainText={true}
            className="!mb-10"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Lock className="w-5 h-5 text-emerald-500" />, text: '100% IP Protection' },
              { icon: <Settings className="w-5 h-5 text-amber-500" />, text: 'In-House Tooling' },
              { icon: <FileText className="w-5 h-5 text-emerald-500" />, text: 'NDA Before Review' },
            ].map((badge, idx) => (
              <div key={idx} className="bg-white border border-slate-200 px-5 py-3 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                {badge.icon}
                <span className="text-navy-900 text-sm font-bold">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-blue-50/40 border-y border-blue-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-6 md:p-8 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center justify-center h-full"
              >
                <IconBox icon={<stat.icon />} color="amber" size="lg" className="mb-4 md:mb-6" />
                <div className="text-3xl md:text-5xl font-black text-navy-900 mb-2 tracking-tight group-hover:text-amber-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Phase Development Process — Alternating Layout */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge="Development Phases"
            title="The OEM Development Process"
            accentColor="amber"
          />

          <div className="space-y-20 md:space-y-28">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <IconBox icon={phase.icon} color={isEven ? "amber" : "navy"} size="lg" className="group-hover:scale-110 transition-transform shadow-sm" />
                      <span className="text-slate-400 font-black text-5xl md:text-6xl tracking-tighter opacity-20">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-black text-navy-900 mb-4 tracking-tight transition-colors ${isEven ? 'group-hover:text-amber-600' : 'group-hover:text-navy-600'}`}>{phase.title}</h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8">{phase.description}</p>
                    <div className="space-y-3">
                      {phase.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-navy-900 font-semibold text-sm md:text-base">{f}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative h-[280px] md:h-[380px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group">
                      <Image src={phase.image} alt={phase.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[8s] group-hover:scale-110 ease-out grayscale" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IP Protection Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group">
                <Image src="/images/engineering_blueprint.png" alt="OEM IP Protection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-[8s] grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <SectionHeader
                badge="Confidentiality"
                title="Your IP is Sacred"
                description="We understand that your proprietary designs represent years of R&D investment. Our OEM program is built on a foundation of absolute confidentiality and intellectual property protection at every stage."
                align="left"
                theme="light"
                accentColor="amber"
                className="!mb-8"
              />
              <div className="space-y-5">
                {[
                  { title: 'Standard NDA Before Any Review', desc: 'We sign comprehensive non-disclosure agreements before you share a single CAD file or specification sheet.' },
                  { title: 'Dedicated Engineering Team', desc: 'Your project is assigned to a dedicated team that operates independently — your designs are never shared across other client programs.' },
                  { title: 'Exclusive Tooling Ownership', desc: 'All custom molds, dies, and tooling developed for your program remain your intellectual property. You own what you pay for.' },
                  { title: 'Segregated Production Runs', desc: 'Custom OEM orders run on segregated lines with controlled access — ensuring your products never mix with standard catalog items.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <IconBox icon={<ShieldCheck />} color="amber" size="md" className="shrink-0 mt-1 shadow-sm group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold text-lg text-navy-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] pb-16 md:pb-24 mt-16 md:mt-24">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200">
          <SectionHeader 
            title="Ready to Discuss Your Project?" 
            description="We sign standard NDAs to protect your intellectual property before reviewing any files. Reach out to our engineering liaison team to get started."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Request OEM Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/manufacturing/private-label" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Private Label Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


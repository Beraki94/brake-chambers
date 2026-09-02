"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PenTool, Microscope, Factory, ShieldCheck, CheckCircle2, Settings, Lock, Users, FileText, Cog, Package, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';

export default function CustomOemClient() {

  const phases = [
    {
      phase: '01',
      title: 'CAD Concept & Design Review',
      description: 'Send us your CAD files, engineering drawings, or even a physical sample. Our team analyzes the design for manufacturability, identifies cost-reduction opportunities, and proposes material and geometry optimizations — all before any tooling investment.',
      icon: <PenTool className="w-8 h-8 text-amber-500" />,
      features: ['3D Modeling & Stress Analysis', 'Material Selection Consultation', 'DFM (Design for Manufacturing) Audits', 'Cost Engineering & Value Analysis'],
      image: '/images/engineering_blueprint.png',
    },
    {
      phase: '02',
      title: 'Rapid Prototyping & Validation',
      description: 'Before committing to expensive production tooling, we create fully functional prototypes using rapid 3D printing and low-volume CNC machining. Prototypes undergo real-world pneumatic testing, dimensional verification, and performance benchmarking against your requirements.',
      icon: <Microscope className="w-8 h-8 text-navy-500" />,
      features: ['Functional Metal Prototypes in 14 Days', 'Pneumatic & Burst Pressure Testing', 'Iterative Design Refinement', 'Customer Sign-Off Before Tooling'],
      image: '/images/commercial_trailer.png',
    },
    {
      phase: '03',
      title: 'Tooling, Production & Delivery',
      description: 'Once prototypes are approved, we develop casting molds and stamping dies in-house. Our automated production lines scale seamlessly from pilot runs of 500 units to full production of 500,000+ units — with 100% end-of-line testing on every chamber.',
      icon: <Factory className="w-8 h-8 text-amber-500" />,
      features: ['In-House Tooling & Die Making', 'Automated Robotic Welding & Assembly', 'Scalable 500 to 500,000+ Units', '100% End-of-Line Quality Testing'],
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

      {/* Dark Hero Value Proposition */}
      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Your Design. <span className="text-amber-400">Our Factory.</span>
          </h2>
          <p className="text-navy-200 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            You don't need to build a factory in China to get factory-direct margins. Partner with BRC 
            to engineer, test, and mass-produce your proprietary brake chamber designs at scale — while 
            we handle every aspect of manufacturing, testing, and logistics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Lock className="w-5 h-5 text-emerald-400" />, text: '100% IP Protection' },
              { icon: <Settings className="w-5 h-5 text-amber-400" />, text: 'In-House Tooling' },
              { icon: <FileText className="w-5 h-5 text-sky-400" />, text: 'NDA Before Review' },
            ].map((badge, idx) => (
              <div key={idx} className="bg-navy-900/80 border border-navy-700 px-5 py-3 rounded-full flex items-center gap-2">
                {badge.icon}
                <span className="text-white text-sm font-bold">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-6 md:p-8 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-amber-500" aria-hidden="true" />
                </div>
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[11px] font-bold uppercase tracking-widest">
              Development Phases
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight">
              The OEM <span className="text-amber-500">Development</span> Process
            </h2>
          </div>

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
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center">
                        {phase.icon}
                      </div>
                      <span className="text-slate-400 font-black text-5xl md:text-6xl tracking-tighter opacity-20">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-navy-900 mb-4 tracking-tight">{phase.title}</h3>
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
                <Image src="/images/commercial_trailer.png" alt="OEM IP Protection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-[8s] grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-[11px] font-bold uppercase tracking-widest">
                Confidentiality
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-navy-900 mb-6 tracking-tight leading-tight">
                Your IP is <span className="text-amber-500">Sacred</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-8">
                We understand that your proprietary designs represent years of R&D investment. Our 
                OEM program is built on a foundation of absolute confidentiality and intellectual 
                property protection at every stage.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Standard NDA Before Any Review', desc: 'We sign comprehensive non-disclosure agreements before you share a single CAD file or specification sheet.' },
                  { title: 'Dedicated Engineering Team', desc: 'Your project is assigned to a dedicated team that operates independently — your designs are never shared across other client programs.' },
                  { title: 'Exclusive Tooling Ownership', desc: 'All custom molds, dies, and tooling developed for your program remain your intellectual property. You own what you pay for.' },
                  { title: 'Segregated Production Runs', desc: 'Custom OEM orders run on segregated lines with controlled access — ensuring your products never mix with standard catalog items.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <Lock className="w-5 h-5 text-emerald-600" />
                    </div>
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
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-black text-navy-900 mb-4 tracking-tight">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            We sign standard NDAs to protect your intellectual property before reviewing any files. 
            Reach out to our engineering liaison team to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Request OEM Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/manufacturing/private-label" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Private Label Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


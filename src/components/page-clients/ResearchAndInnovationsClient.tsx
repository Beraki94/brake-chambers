"use client";

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, Lightbulb, PenTool, TrendingUp, Cpu, FlaskConical, Layers, Zap, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CompanyPageLayout from '@/components/company/CompanyPageLayout';

export default function ResearchAndInnovationsClient() {
  const initiatives = [
    {
      icon: <Lightbulb className="w-10 h-10 text-amber-500" />,
      title: 'Air Disc Brake (ADB) Advancement',
      badge: 'Active R&D',
      description:
        'As the industry shifts towards disc brakes, our R&D team is pioneering more compact, higher-output actuator designs that deliver superior stopping power without the severe brake fade associated with traditional drum systems.',
      link: '/air-disc-brake-actuator',
      accent: 'amber',
    },
    {
      icon: <PenTool className="w-10 h-10 text-navy-500" />,
      title: 'Custom OEM Engineering',
      badge: 'Partnership Program',
      description:
        'We work directly with trailer builders and heavy-duty chassis manufacturers to design bespoke braking solutions tailored to their specific geometric and pneumatic requirements — from first sketch to full production run.',
      link: '/contact',
      accent: 'navy',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-amber-500" />,
      title: 'Advanced High-Strength Steel (AHSS)',
      badge: 'Materials Science',
      description:
        'We constantly test new AHSS alloys to produce lighter brake chambers that still exceed extreme SAE J1469 burst pressure requirements, reducing vehicle weight without sacrificing a single pound of structural integrity.',
      link: '/company/material-sourcing',
      accent: 'amber',
    },
  ];

  const roadmapItems = [
    {
      icon: <Cpu className="w-6 h-6 text-slate-500" />,
      title: 'Smart Sensor Integration',
      detail: 'Embedded stroke and temperature sensors enabling real-time telematics for fleet predictive maintenance.',
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-amber-500" />,
      title: 'Next-Gen Elastomer Compounds',
      detail: 'Advanced synthetic rubber formulations for extreme heat and UV resistance — targeting a 200°F continuous rating.',
    },
    {
      icon: <Layers className="w-6 h-6 text-navy-500" />,
      title: 'Electric Vehicle Actuators',
      detail: 'Redesigned spring brake architectures for electric semi-trucks with regenerative braking integration.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Lightweight Composite Housings',
      detail: 'Carbon-fiber reinforced polymer (CFRP) housing prototypes delivering 30% weight reduction at equivalent burst strength.',
    },
  ];

  return (
    <CompanyPageLayout
      badge="R&D Hub"
      title="R&D and Innovations"
      description="We don't just follow industry standards — we engineer the technologies that define them."
    >
      <div className="space-y-12">
        <div className="w-full">
          <SectionHeader
            title={<>Engineering <span className="text-amber-500">Tomorrow's</span> Safety</>}
            description="Our dedicated R&D division focuses on rapid prototyping, finite element analysis (FEA), and continuous metallurgical improvements to reduce component weight while increasing structural integrity."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {initiatives.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                  {item.badge}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow mb-8">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors uppercase tracking-widest group/link"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        </div>

      {/* Innovation Roadmap */}
      <div className="bg-slate-50 p-8 lg:p-12 border border-slate-200 rounded-3xl">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-5/12">
              <SectionHeader
                badge="Future Pipeline"
                title={<>What We're <span className="text-slate-600">Building Next</span></>}
                description="A glimpse into our active R&D roadmap. These programs are currently in prototype or early production-validation stages."
                align="left"
                accentColor="slate"
              />
              <div className="space-y-4">
                {roadmapItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-slate-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-sm mb-1">{item.title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="bg-navy-950 rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                    OEM Partnership Program
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-5 font-heading tracking-tight leading-tight">
                    Need a Custom Engineering Solution?
                  </h3>
                  <p className="text-navy-200 text-base leading-relaxed mb-8">
                    Partner with our R&D team to prototype and manufacture the exact braking components your vehicles need. We handle everything from initial FEA simulation to regulatory certification and full-scale production runs of 100,000+ units.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {[
                      'Dedicated engineering team assignment',
                      'NDA-protected development programs',
                      'Rapid 3D prototyping within 2 weeks',
                      'Full regulatory certification support',
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-navy-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block bg-amber-500 text-navy-950 font-extrabold text-[13px] px-10 py-5 rounded-2xl hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-xl hover:shadow-amber-500/30 uppercase tracking-widest"
                  >
                    Contact Our Engineering Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100">
          <SectionHeader title="See Our Work Put to the Test" className="!mb-6" />
          <Link href="/company/testing-laboratory" className="inline-flex items-center text-amber-600 font-bold hover:text-amber-500 transition-colors uppercase tracking-widest text-lg">
            Inside the Testing Laboratory <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </CompanyPageLayout>
  );
}

"use client";

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, Microscope, Thermometer, ShieldAlert, Activity, FlaskConical, Gauge, Cpu, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CompanyPageLayout from '@/components/company/CompanyPageLayout';

export default function TestingLaboratoryClient() {
  const stats = [
    { value: '1M+', label: 'Cycle Tests Per Unit' },
    { value: '500h', label: 'Salt Spray Duration' },
    { value: '-40°F', label: 'Cold Chamber Rating' },
    { value: '100%', label: 'End-of-Line Tested' },
  ];

  const tests = [
    {
      title: '1 Million+ Cycle Testing',
      description: 'We subject our chambers to over 1,000,000 continuous actuate/release cycles under maximum operating pressure to ensure the center seals and return springs never fatigue prematurely.',
      icon: <Activity className="w-8 h-8 text-amber-400" />,
      badge: 'Fatigue & Durability',
    },
    {
      title: 'Salt Spray Corrosion Chambers',
      description: 'Chambers are placed in intense saline fog environments for hundambers of hours to simulate years of exposure to winter road salts and magnesium chloride — the #1 killer of inferior chambers.',
      icon: <ShieldAlert className="w-8 h-8 text-amber-400" />,
      badge: 'Corrosion Resistance',
    },
    {
      title: 'Extreme Temperature Chambers',
      description: 'Our neoprene diaphragms are tested in environmental chambers ranging from -40°F (-40°C) to 200°F (93°C) to guarantee flexibility in Arctic cold and structural integrity in desert heat.',
      icon: <Thermometer className="w-8 h-8 text-amber-400" />,
      badge: 'Thermal Performance',
    },
    {
      title: '100% End-of-Line Pneumatic Testing',
      description: 'We do not rely on batch testing. Every single brake chamber that leaves our facility is pneumatically leak-tested on the assembly line. If it leaks a fraction of a PSI, it gets scrapped.',
      icon: <Microscope className="w-8 h-8 text-amber-400" />,
      badge: 'Zero-Defect Policy',
    },
    {
      title: 'Burst Pressure Validation',
      description: 'Every housing design undergoes destructive burst pressure testing at 4× its rated operating pressure, validating our 8-gauge steel structural integrity under catastrophic failure scenarios.',
      icon: <Gauge className="w-8 h-8 text-amber-400" />,
      badge: 'Structural Safety',
    },
    {
      title: 'Diaphragm Ozone Testing',
      description: 'Rubber diaphragms are exposed to accelerated ozone environments equivalent to 10+ years of outdoor aging, ensuring they remain crack-free and flexible throughout their service life.',
      icon: <FlaskConical className="w-8 h-8 text-amber-400" />,
      badge: 'Material Longevity',
    },
  ];

  const equipment = [
    { name: 'Pneumatic Cycle Test Rigs', detail: 'Automated 24/7 cycle testing at 150 PSI' },
    { name: 'Environmental Salt Chambers', detail: '500-hour ASTM B117 standard tests' },
    { name: 'Climate Simulation Chambers', detail: '-60°C to +150°C range' },
    { name: 'Burst Pressure Test Fixtures', detail: 'Up to 600 PSI destructive testing' },
    { name: 'CMM Dimensional Inspection', detail: '±0.001" measurement accuracy' },
    { name: 'Pneumatic Leak Detection', detail: '100% inline, zero batch sampling' },
  ];

  return (
    <CompanyPageLayout
      badge="Quality Assurance"
      title="Testing Laboratory"
      description="Where we try our hardest to break our own products — so they never break on you."
    >
      <div className="space-y-12">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-navy-900 mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Test Protocols Section */}
      <div className="py-4">
        <div className="w-full">
          <SectionHeader
            title={<>Failure is <span className="text-amber-400">Not an Option</span></>}
            description="A commercial truck hauling 80,000 lbs cannot afford a brake failure. That is why our in-house testing laboratory is the most crucial department in our entire manufacturing facility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {tests.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-5">
                  {test.badge}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {test.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{test.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {test.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="bg-white p-8 lg:p-12 border border-slate-100 rounded-3xl">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                badge="Laboratory Equipment"
                title={<>World-Class <span className="text-amber-400">Test Equipment</span></>}
                description="Our laboratory is equipped with industry-leading precision instruments that run 24 hours a day, 7 days a week."
                align="left"
                accentColor="amber"
              />
              <div className="space-y-4">
                {equipment.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-amber-100 hover:bg-amber-50/30 transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-sm">{item.name}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-navy-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden h-full min-h-[400px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-400/20">
                    <Cpu className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-4 font-heading tracking-tight">ISO-Audited Process</h3>
                  <p className="text-navy-200 text-base leading-relaxed mb-8">
                    Every test result is logged in our ISO 9001:2015 quality management system, providing full traceability from raw material to finished chamber for every batch we produce.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-navy-800/60 rounded-2xl p-4 border border-navy-700">
                      <div className="text-2xl font-black text-white mb-1">100%</div>
                      <div className="text-xs font-bold text-navy-400 uppercase tracking-widest">Traceability</div>
                    </div>
                    <div className="bg-navy-800/60 rounded-2xl p-4 border border-navy-700">
                      <div className="text-2xl font-black text-white mb-1">3rd Party</div>
                      <div className="text-xs font-bold text-navy-400 uppercase tracking-widest">Audited Annually</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Next Step CTA */}
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100">
          <SectionHeader title="Explore the Future of Braking" className="!mb-6" />
          <Link href="/company/research-and-innovations" className="inline-flex items-center text-amber-400 font-bold hover:text-amber-400 transition-colors uppercase tracking-widest text-lg">
            View R&D and Innovations <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </CompanyPageLayout>
  );
}

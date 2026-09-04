"use client";

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, Microscope, Thermometer, ShieldAlert, Activity, FlaskConical, Gauge, Cpu, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CompanyPageLayout from '@/features/company/components/CompanyPageLayout';
import IconBox from '@/components/ui/IconBox';

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
      icon: <Activity />,
      badge: 'Fatigue & Durability',
    },
    {
      title: 'Salt Spray Corrosion Chambers',
      description: 'Chambers are placed in intense saline fog environments for hundambers of hours to simulate years of exposure to winter road salts and magnesium chloride — the #1 killer of inferior chambers.',
      icon: <ShieldAlert />,
      badge: 'Corrosion Resistance',
    },
    {
      title: 'Extreme Temperature Chambers',
      description: 'Our neoprene diaphragms are tested in environmental chambers ranging from -40°F (-40°C) to 200°F (93°C) to guarantee flexibility in Arctic cold and structural integrity in desert heat.',
      icon: <Thermometer />,
      badge: 'Thermal Performance',
    },
    {
      title: '100% End-of-Line Pneumatic Testing',
      description: 'We do not rely on batch testing. Every single brake chamber that leaves our facility is pneumatically leak-tested on the assembly line. If it leaks a fraction of a PSI, it gets scrapped.',
      icon: <Microscope />,
      badge: 'Zero-Defect Policy',
    },
    {
      title: 'Burst Pressure Validation',
      description: 'Every housing design undergoes destructive burst pressure testing at 4× its rated operating pressure, validating our 8-gauge steel structural integrity under catastrophic failure scenarios.',
      icon: <Gauge />,
      badge: 'Structural Safety',
    },
    {
      title: 'Diaphragm Ozone Testing',
      description: 'Rubber diaphragms are exposed to accelerated ozone environments equivalent to 10+ years of outdoor aging, ensuring they remain crack-free and flexible throughout their service life.',
      icon: <FlaskConical />,
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
      title="Brake Testing Lab"
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
      <div className="-mx-4 sm:mx-0 px-4 sm:px-8 md:px-12 py-10 md:py-12 bg-blue-50/50 sm:border border-blue-100/50 rounded-none sm:rounded-3xl md:rounded-[2.5rem] my-8 md:my-12">
        <div className="w-full">
          <SectionHeader
            title={<>Failure is <span className="text-amber-500">Not an Option</span></>}
            description="A commercial truck hauling 80,000 lbs cannot afford a brake failure. That is why our in-house testing laboratory is the most crucial department in our entire manufacturing facility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <IconBox 
                    icon={test.icon} 
                    color="slate" 
                    size="lg" 
                    className="group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100" 
                  />
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold uppercase tracking-widest">
                    {test.badge}
                  </div>
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

      {/* Equipment & Quality Section */}
      <div className="-mx-4 sm:mx-0 px-4 sm:px-8 md:px-12 py-10 md:py-12 bg-white sm:border border-slate-100 rounded-none sm:rounded-3xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <SectionHeader
              badge="Laboratory Equipment"
              title="World-Class Test Equipment"
              description="Our laboratory is equipped with industry-leading precision instruments that run 24 hours a day, 7 days a week."
              accentColor="amber"
              plainText={true}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {equipment.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-amber-100 hover:bg-amber-50/30 transition-all group shadow-sm hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-base mb-1">{item.name}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ISO Callout Banner */}
        <div className="-mx-4 sm:mx-0 bg-navy-950 rounded-none sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10 flex-1">
            <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-400/20">
              <Cpu className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-heading tracking-tight">IATF-Aligned Quality System</h3>
            <p className="text-navy-200 text-sm md:text-base leading-relaxed">
              Every test result is logged in our quality management system—operating strictly to IATF 16949 standards—providing full traceability from raw material to finished chamber for every batch we produce.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              <div className="bg-navy-800/60 rounded-2xl p-5 md:p-6 border border-navy-700 text-center md:text-left min-w-0 md:min-w-[200px]">
                <div className="text-3xl font-black text-white mb-1 md:mb-2">100%</div>
                <div className="text-xs font-bold text-navy-400 uppercase tracking-widest">Traceability</div>
              </div>
              <div className="bg-navy-800/60 rounded-2xl p-5 md:p-6 border border-navy-700 text-center md:text-left min-w-0 md:min-w-[200px]">
                <div className="text-3xl font-black text-white mb-1 md:mb-2">Strict</div>
                <div className="text-xs font-bold text-navy-400 uppercase tracking-widest">Internal Quality Audits</div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Bottom CTA */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200 mt-16">
          <SectionHeader 
            title="Ready for Custom Engineering?" 
            description="Bring your proprietary specs, and our R&D team will engineer, prototype, and mass-produce them at scale."
            className="!mb-8"
            plainText={true}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Request Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/manufacturing/custom-oem" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Custom OEM Manufacturing
            </Link>
          </div>
        </div>
      </div>
    </CompanyPageLayout>
  );
}

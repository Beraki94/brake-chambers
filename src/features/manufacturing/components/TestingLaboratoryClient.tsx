"use client";

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, Microscope, Thermometer, ShieldAlert, Activity, FlaskConical, Gauge, Cpu, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CompanyPageLayout from '@/features/company/components/CompanyPageLayout';
import IconBox from '@/components/ui/IconBox';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';

export default function TestingLaboratoryClient() {
  const stats = [
    { value: '1M+', label: 'Cycle Tests Per Sampled Unit', icon: Activity },
    { value: '500-Hour', label: 'Salt Spray Testing', icon: ShieldAlert },
    { value: '-40°F to 200°F', label: 'Thermal Validation', icon: Thermometer },
    { value: '100%', label: 'End-of-Line Pneumatic Testing', icon: Gauge },
  ];

  const tests = [
    {
      title: '1 Million+ Cycle Testing',
      description: 'Sampled BRC brake chambers are subject to 1,000,000 continuous actuate/release cycles under maximum operating pressure. Chambers that show any loss of stroke response, air leakage, or return-spring degradation before the full cycle count are rejected from the batch.',
      icon: <Activity />,
      badge: 'Fatigue & Durability',
    },
    {
      title: 'Salt Spray Corrosion Chambers',
      description: 'Chambers are placed in inline saline fog environments for 500 hours, simulating years of exposure to winter road salt and coastal humidity. This is well beyond the ASTM B117 industry baseline for aftermarket brake components.',
      icon: <ShieldAlert />,
      badge: 'Corrosion Resistance',
    },
    {
      title: 'Extreme Temperature Chambers',
      description: 'Neoprene diaphragms and internal springs are tested in thermal chambers spanning -40°F to 200°F (-40°C to 93°C). This validates flexibility in Arctic cold and structural integrity in desert heat.',
      icon: <Thermometer />,
      badge: 'Thermal Performance',
    },
    {
      title: '100% End-of-Line Pneumatic Testing',
      description: 'We do not rely on batch testing. Every brake chamber leaving our factory is individually pneumatic leak-tested on the assembly line. If it fails a fraction of a PSI, it is scrapped.',
      icon: <Microscope />,
      badge: 'Zero-Defect Policy',
    },
    {
      title: 'Burst Pressure Validation',
      description: 'Every housing design undergoes destructive burst pressure testing at 4× its rated operating pressure. This validates structural integrity under catastrophic failure scenarios, the foundation of our FMVSS-121 compliance claim.',
      icon: <Gauge />,
      badge: 'Structural Safety',
    },
    {
      title: 'Diaphragm Ozone & Aging Testing',
      description: 'Rubber diaphragms are exposed to accelerated ozone environments, UV radiation, and thermal cycling, simulating extended outdoor aging. Compounds that crack, harden, or lose flexibility are rejected before production.',
      icon: <FlaskConical />,
      badge: 'Material Longevity',
    },
  ];

  const equipment = [
    { name: 'Pneumatic Cycle Test Rigs', detail: 'Automated 24/7 cycle testing at 150 PSI operating pressure.' },
    { name: 'Environmental Salt Chambers', detail: '500-hour ASTM B117 salt spray exposure.' },
    { name: 'Climate Simulation Chambers', detail: '-40°C to +150°C thermal cycling range.' },
    { name: 'Burst Pressure Test Fixtures', detail: 'Up to 600 PSI destructive pressure testing.' },
    { name: 'CMM Dimensional Inspection', detail: '±0.001" measurement accuracy on critical tolerances.' },
    { name: 'Pneumatic Leak Detection', detail: '100% inline leak testing, zero batch sampling.' },
  ];

  return (
    <CompanyPageLayout
      badge="Quality Assurance"
      title="Brake Chamber Quality Assurance: Inside Our Testing Lab"
      description="Every BRC brake chamber is pressure-tested, cycle-tested, and corrosion-tested before it ships. Our in-house lab validates each unit under our IATF 16949-aligned quality system, because a brake chamber that fails on the road is not an option."
    >
      <div className="space-y-12">
        {/* Stats */}
        <section className="py-12 md:py-16 bg-blue-50 border-y border-slate-200 w-[100vw] relative left-1/2 -translate-x-1/2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-slate-800 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-center border border-slate-700 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  
                  {/* The Top Right Circle Decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-700/30 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-slate-700/50 text-amber-400 flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-slate-600/50 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-400 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-md">
                      <stat.icon className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>      {/* Test Protocols Section */}
      <div className="px-4 sm:px-8 md:px-12 py-10 md:py-12 bg-blue-50/50 border border-blue-100/50 rounded-3xl md:rounded-[2.5rem] my-8 md:my-12">
        <div className="w-full">
          <SectionHeader
            badge="Zero-Defect Manufacturing"
            title={<>Why Brake Chamber Quality Assurance <span className="text-amber-500 whitespace-nowrap">Matters</span></>}
            description="A loaded commercial vehicle cannot afford a brake failure, whether that is 36,000 kg on a European motorway or 80,000 lbs on an American interstate. That is why our in-house testing lab is the final checkpoint between our production line and your fleet."
            className="!mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Top Right Circle Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/60 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0 pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between mb-6">
                  <IconBox 
                    icon={test.icon} 
                    color="slate" 
                    size="lg" 
                    className="group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100 transition-colors" 
                  />
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-bold uppercase tracking-widest bg-white/50 backdrop-blur-sm">
                    {test.badge}
                  </div>
                </div>
                <h3 className="relative z-10 text-xl font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">{test.title}</h3>
                <p className="relative z-10 text-slate-600 leading-relaxed text-sm">
                  {test.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment & Quality Section */}
      <div className="px-4 sm:px-8 md:px-12 py-10 md:py-12 bg-white border border-slate-100 rounded-3xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <SectionHeader
              badge="Laboratory Equipment"
              title="Brake Chamber Testing Equipment"
              description="Our lab runs precision test equipment around the clock. Every instrument is calibrated annually to traceable standards."
              accentColor="amber"
              plainText={true}
              className="!mb-6"
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
        <div className="mt-20 bg-navy-950 rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-navy-800 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
          <AnimatedGridBackground opacity={0.08} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 pointer-events-none z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <Cpu className="w-7 h-7 text-amber-500" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 text-[11px] font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10">
                  Quality Management System
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 font-heading tracking-tight">IATF 16949-Aligned Quality Management System</h2>
              <p className="text-navy-200 text-base md:text-lg leading-relaxed font-light">
                Every brake chamber test result is logged in our quality management system, which operates to IATF 16949-aligned standards. This provides full traceability from raw material intake to finished chamber packaging, for every batch we produce.
              </p>
            </div>
            
            <div className="shrink-0 w-full md:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="bg-gradient-to-b from-navy-800 to-navy-900 rounded-2xl p-6 border border-navy-700 text-center md:text-left min-w-0 md:min-w-[240px] shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors">100%</div>
                  <div className="text-xs font-bold text-navy-300 uppercase tracking-widest">Traceability</div>
                </div>
                <div className="bg-gradient-to-b from-navy-800 to-navy-900 rounded-2xl p-6 border border-navy-700 text-center md:text-left min-w-0 md:min-w-[240px] shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors">Strict</div>
                  <div className="text-xs font-bold text-navy-300 uppercase tracking-widest">Internal Quality Audits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-12 md:pb-16 mt-16">
        {/* Bottom CTA */}
        <div className="bg-[#F1EFE8] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200 mt-16">
          <SectionHeader 
            badge="Quality You Can Verify"
            title="Need a Sample to Verify Our Quality?" 
            description="Order an evaluation sample directly from our factory. Test it against your current brake chamber brand: pressure, stroke, fit, and finish. If it does not meet your standard, you don't place an order."
            className="!mb-8"
            plainText={true}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[11px] sm:text-[12px] md:text-[13px] whitespace-nowrap transform hover:-translate-y-1 w-full sm:w-auto">
              Order Evaluation Sample <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/oem-cross-reference" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[11px] sm:text-[12px] md:text-[13px] whitespace-nowrap transform hover:-translate-y-1 w-full sm:w-auto">
              View OEM Cross-Reference <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </CompanyPageLayout>
  );
}


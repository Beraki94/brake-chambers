"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Microscope, Factory, ShieldCheck, Globe2, Trophy, Users, Cog, LineChart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft } from '@/lib/animations';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import TrendingModelsMarquee from '@/components/ui/TrendingModelsMarquee';

export default function ManufacturingClient() {
  const steps = [
    {
      step: '01',
      title: 'Research & Development',
      slug: 'research-development',
      description: 'Our in-house engineering team uses advanced CAD, FEA, and rapid prototyping to continuously improve chamber design, reducing weight while increasing burst strength and longevity.',
      image: '/images/engineering_blueprint.png',
      accent: 'amber',
      icon: <Microscope className="w-8 h-8 text-amber-500" />,
      features: [
        'Advanced 3D CAD Modeling',
        'Finite Element Analysis (FEA)',
        'Rapid 3D Prototyping',
        'Custom OEM Engineering'
      ]
    },
    {
      step: '02',
      title: 'Precision Assembly',
      slug: 'manufacturing',
      description: 'IATF 16949 certified facilities utilizing automated robotic welding, CNC machining, and precision assembly lines to guarantee absolute consistency across millions of units.',
      image: '/images/manufacturing_floor.png',
      accent: 'navy',
      icon: <Factory className="w-8 h-8 text-navy-500" />,
      features: [
        'Automated Robotic Welding',
        'High-Precision CNC Machining',
        'Continuous Flow Assembly Lines',
        'Lean Manufacturing Principles'
      ]
    },
    {
      step: '03',
      title: 'Quality Assurance',
      slug: 'quality-assurance',
      description: 'Every BRC spring brake undergoes 100% pneumatic leak testing and mechanical cycle testing before boxing. We don\'t do batch testing; we test every single unit.',
      image: '/images/commercial_trailer.png',
      accent: 'amber',
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      features: [
        '100% End-of-Line Pneumatic Testing',
        'Salt Spray & Corrosion Resistance',
        'Extreme Temperature Cycle Testing',
        'Burst Strength Validation'
      ]
    },
    {
      step: '04',
      title: 'Global Distribution',
      slug: 'distribution',
      description: 'With strategic distribution centers across North America, we offer same-day shipping on standard SKUs, JIT delivery for OEMs, and robust inventory management.',
      image: '/images/heavy_duty_truck.png',
      accent: 'slate',
      icon: <Globe2 className="w-8 h-8 text-slate-500" />,
      features: [
        'Strategic North American Hubs',
        'Just-In-Time (JIT) OEM Supply',
        'Advanced Inventory Management',
        'Same-Day Shipping on Core SKUs'
      ]
    }
  ];

  const stats = [
    { icon: Trophy, value: "IATF 16949", label: "Certified Facility" },
    { icon: Cog, value: "1M+", label: "Chambers Produced" },
    { icon: Users, value: "250+", label: "Dedicated Experts" },
    { icon: LineChart, value: "100%", label: "Pneumatic Testing" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-0 overflow-x-clip">
      <PageHeader
        badge="How We Build"
        title="Manufacturing"
        description="Take an exclusive look inside our world-class facilities to see how we engineer, cast, and assemble the most reliable heavy-duty brake chambers on the market."
        imageSrc="/images/engineering_blueprint.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manufacturing' }
        ]}
      />
      
      {/* Clean Intro Section instead of a massive card */}
      <section className="pt-16 md:pt-24 pb-4 md:pb-8 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title={<>The BRC <span className="text-amber-500 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Step-by-Step</span> Process</>}
              description="We don't just assemble parts. We control the entire lifecycle of our products, ensuring every chamber exceeds industry standards from initial design to final delivery."
              className="max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Timeline Section */}
      <section className="pt-4 md:pt-8 pb-16 md:pb-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
          
          {/* Central Vertical Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 -translate-x-1/2 z-0"></div>

          <div className="space-y-16 lg:space-y-24 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group/row`}>
                  
                  {/* Content Block */}
                  <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="max-w-lg"
                    >
                      <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-${step.accent}-50 border border-${step.accent}-100 mb-6 shadow-sm`}>
                        <span className={`text-${step.accent}-600 font-extrabold uppercase tracking-widest text-sm`}>Step {step.step}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-black text-navy-900 mb-6 font-heading tracking-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                        {step.description}
                      </p>
                      
                      <div className={`flex flex-col gap-4 mb-10 ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                        {step.features.map((feature, fIdx) => (
                          <div key={fIdx} className={`flex items-center gap-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                            <CheckCircle2 className={`w-6 h-6 text-${step.accent}-500 flex-shrink-0`} />
                            <span className="text-navy-900 font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/manufacturing/${step.slug}`} 
                        className={`inline-flex items-center justify-center gap-2 text-${step.accent}-600 font-extrabold hover:text-${step.accent}-700 transition-colors uppercase tracking-widest text-sm group/link`}
                      >
                        View Engineering Specs <ArrowRight className={`w-5 h-5 group-hover/link:translate-x-1 transition-transform ${isEven ? 'lg:-translate-x-1 lg:group-hover/link:-translate-x-2' : ''} ${isEven ? 'lg:rotate-180' : ''}`} />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Timeline Center Node (Visible on Desktop) */}
                  <div className="hidden lg:flex w-16 h-16 absolute left-1/2 -translate-x-1/2 bg-white rounded-full border-4 border-slate-100 items-center justify-center shadow-xl z-20 transition-all duration-500 group-hover/row:scale-110 group-hover/row:border-slate-200">
                    <div className={`w-10 h-10 rounded-full bg-${step.accent}-50 flex items-center justify-center`}>
                      {React.cloneElement(step.icon as React.ReactElement<any>, { 
                        className: `w-6 h-6 text-${step.accent}-500 transition-transform duration-500 group-hover/row:rotate-12`,
                        'aria-hidden': 'true' 
                      })}
                    </div>
                  </div>

                  {/* Image Block */}
                  <div className="w-full lg:w-1/2">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group"
                    >
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[10s] group-hover/row:scale-110 ease-out grayscale" 
                      />
                      {/* Gradient overlay to ensure image isn't too overpowering */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto mb-16">
            <SectionHeader
              title={<>Backed by <span className="text-amber-500">Data</span></>}
              description="We operate at the intersection of massive industrial scale and microscopic manufacturing tolerances. Here is what that looks like by the numbers."
              theme="dark"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 text-center border border-white/10 hover:border-amber-500/50 hover:bg-white/10 shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-amber-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-amber-500/20 group-hover:border-amber-500/50 group-hover:bg-amber-500/20">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400 transition-transform duration-300 group-hover:rotate-12 group-hover:text-amber-300" aria-hidden="true" />
                </div>
                <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 tracking-tight transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Superiority */}
      <section className="py-16 md:py-24 bg-blue-50 border-t border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                badge="No Compromises"
                title={<>Material <span className="text-amber-500">Superiority</span></>}
                description="The best engineering in the world means nothing if the raw materials fail. We source only premium-grade metals and synthetic compounds to ensure our chambers survive environments where others crack, rust, or burst."
                align="left"
                className="!mb-8"
              />
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-navy-900 mb-1">8-Gauge Steel Housings</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Extra-thick pressure vessels resist denting from road debris and maintain perfect structural geometry under maximum braking force.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 mt-1">
                    <Cog className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-navy-900 mb-1">Extreme-Temp Rubber Compounds</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Our proprietary diaphragm blends maintain flexibility at -40°F and resist thermal breakdown up to 200°F.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-navy-900 mb-1">Zinc-Plated Hardware</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">All mounting studs, nuts, and clevis pins feature advanced zinc-plating for maximum resistance to galvanic corrosion.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="/products/spring-brake.jpg" alt="Brake Chamber Engineering" className="rounded-[2.5rem] shadow-2xl border border-slate-200 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* OEM Partner Call to Action */}
      <section className="py-16 md:py-24 bg-amber-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-navy-700 bg-navy-800/80 text-navy-300 text-[11px] font-bold uppercase tracking-widest w-max mx-auto md:mx-0">
                <Factory className="w-3 h-3 mr-2 text-amber-500" /> Contract Manufacturing
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Partner with <span className="text-amber-400">BRC Manufacturing</span>
              </h2>
              
              <p className="text-navy-200 text-base md:text-lg font-light leading-relaxed">
                From initial CAD conceptualization to final production runs of 100,000+ units, we are ready to be your dedicated manufacturing arm.
              </p>
            </div>

            <div className="relative z-10 flex flex-col w-full md:w-auto gap-4 min-w-[240px] shrink-0 mt-8 md:mt-0">
              <Link 
                href="/contact" 
                className="bg-amber-500 text-navy-950 font-black py-4 px-8 rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 text-center uppercase tracking-widest text-[13px] transform hover:-translate-y-1"
              >
                Request Factory Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <TrendingModelsMarquee />
    </div>
  );
}

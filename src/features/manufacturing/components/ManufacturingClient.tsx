"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Microscope, Factory, ShieldCheck, Trophy, Users, Cog, LineChart, CheckCircle2, Layers, PenTool, Tag, Package, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ManufacturingClient() {
  const stats = [
    { icon: Trophy, value: "IATF 16949", label: "Aligned Facility" },
    { icon: Cog, value: "1M+", label: "Brake Chambers Produced Annually" },
    { icon: Users, value: "250+", label: "Manufacturing Specialists" },
    { icon: LineChart, value: "100%", label: "Pneumatic Testing Before Shipment" },
  ];

  const subPages = [
    {
      title: "Brake Chamber Production Process",
      desc: "Four controlled stages: stamping, robotic welding, e-coating, and automated assembly.",
      icon: <Settings className="w-8 h-8 text-amber-500 transition-colors" />,
      link: "/manufacturing/process",
      linkText: "Explore the Production Process"
    },
    {
      title: "Brake Chamber Material Sourcing",
      desc: "8-gauge steel, high-strength neoprene rubber, and ADC12 aluminum. Verified before production.",
      icon: <Layers className="w-8 h-8 text-amber-500 transition-colors" />,
      link: "/manufacturing/material-sourcing",
      linkText: "Explore Material Sourcing"
    },
    {
      title: "Brake Chamber R&D",
      desc: "3D CAD modeling, FEA simulation, and rapid prototyping. How we design the next generation.",
      icon: <Microscope className="w-8 h-8 text-amber-500 transition-colors" />,
      link: "/manufacturing/research-development",
      linkText: "Explore Brake Chamber R&D"
    },
    {
      title: "Brake Chamber Quality Assurance",
      desc: "1M+ cycle testing, salt spray chambers, burst pressure validation, and 100% leak testing.",
      icon: <ShieldCheck className="w-8 h-8 text-amber-500 transition-colors" />,
      link: "/manufacturing/quality-assurance",
      linkText: "Explore Quality Assurance"
    },
    {
      title: "Custom OEM Manufacturing",
      desc: "Bring your proprietary brake chamber design and we will engineer, prototype, and mass-produce it.",
      icon: <PenTool className="w-8 h-8 text-amber-500 transition-colors" />,
      link: "/manufacturing/custom-oem",
      linkText: "Explore Custom OEM Manufacturing"
    },
    {
      title: "Private Label Brake Chambers",
      desc: "Launch your own brake chamber brand with custom paint, laser engraving, and branded packaging.",
      icon: <Tag className="w-8 h-8 text-amber-500 transition-colors" />,
      link: "/manufacturing/private-label",
      linkText: "Explore Private Label"
    },
    {
      title: "High-Volume Brake Chamber Orders",
      desc: "Tiered factory-direct pricing from 500-unit pilot orders to annual container programs.",
      icon: <Package className="w-8 h-8 text-amber-500 transition-colors" />,
      link: "/manufacturing/high-volume-orders",
      linkText: "Explore High-Volume Orders"
    }
  ];

  const facts = [
    { label: "Location", value: "Fengqiao Industrial Zone, Zhuji, Zhejiang Province, China 311811" },
    { label: "Factory Size", value: "50,000 sqm vertically integrated production facility" },
    { label: "Annual Capacity", value: "1M+ brake chambers produced annually" },
    { label: "Manufacturing Staff", value: "250+ production and quality specialists on the factory floor" },
    { label: "Export Ports", value: "Ningbo-Zhoushan Port and Port of Shanghai" },
    { label: "Quality System", value: "IATF 16949-aligned" },
    { label: "Buyers Welcome", value: "Factory visits and third-party audits available on request" }
  ];

  return (
    <article className="min-h-screen bg-slate-50 font-sans pb-0 overflow-x-clip">
      {/* SECTION 1 - HERO */}
      <PageHeader
        badge="Inside the Factory"
        badgeIcon={Factory}
        title="Brake Chamber Manufacturing in China: Inside Our Zhejiang Factory"
        description="BRC operates a 50,000 sqm brake chamber factory in Zhejiang, China. Every chamber is manufactured under our IATF 16949-aligned quality system and stress-tested before shipment to distributors in 30+ countries."
        imageSrc="/images/manufacturing_floor.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manufacturing' }
        ]}
      />

      {/* SECTION 3 & STATS BAR - COMBINED FOR SEAMLESS OVERLAP */}
      <section className="pb-16 md:pb-32 relative z-10 bg-navy-900 border-t border-transparent">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/brc4.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-navy-950/60" />
        
        {/* White overlay ONLY at the top to separate from the PageHeader */}
        <div className="absolute top-0 inset-x-0 h-[300px] bg-gradient-to-b from-white/60 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-white/40 z-0 pointer-events-none" />
        
        {/* OVERLAPPING STATS BAR (Half on PageHeader, Half on Image) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20 -mt-12 md:-mt-24 mb-10 md:mb-24">
          <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-2xl shadow-navy-900/5 border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 p-2 md:p-4 lg:p-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center justify-center text-center px-2 py-5 md:p-6 hover:-translate-y-1 transition-transform duration-300
                    ${idx % 2 === 0 ? 'border-r border-slate-100' : ''} 
                    ${idx < 2 ? 'border-b border-slate-100 md:border-b-0' : ''} 
                    ${idx !== 3 ? 'md:border-r border-slate-100' : ''}
                  `}
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-amber-50 flex items-center justify-center mb-3 md:mb-4">
                    <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-amber-500" />
                  </div>
                  <h4 className="text-lg md:text-2xl font-black text-navy-900 mb-1 md:mb-2">{stat.value}</h4>
                  <p className="text-slate-500 text-[9px] md:text-xs uppercase tracking-wider md:tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MANUFACTURING OVERVIEW CONTENT */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <motion.div
            className="bg-white rounded-[2rem] shadow-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-50 text-amber-600 border border-amber-100 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm">
              Production Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-8">How We Manufacture Brake Chambers</h2>
            
            <div className="prose prose-lg prose-slate text-slate-600 mb-10 max-w-none">
              <p className="mb-6">
                Every BRC brake chamber passes through four controlled production stages: R&D, precision assembly, quality assurance, and export packaging. Each stage is documented and audited under our IATF 16949-aligned quality system.
              </p>
              <p>
                From raw steel intake to final container loading, our vertically integrated factory controls every step of brake chamber manufacturing. This lets us deliver consistent OEM-grade quality at factory-direct pricing, without middlemen or trading companies.
              </p>
            </div>
            
            <div className="text-right">
              <Link href="/manufacturing/process" className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 uppercase tracking-widest text-sm group">
                Explore Our Brake Chamber Production Process <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - SUB-PAGE NAVIGATION GRID */}
      <section className="py-12 md:py-16 bg-blue-50 border-y border-blue-100 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeader
              badge="Explore Manufacturing"
              title="Inside Our Brake Chamber Manufacturing Operation"
              description="Each stage of our brake chamber manufacturing process has a dedicated deep-dive. Choose a topic below."
              plainText={true}
            />
          </div>

          {/* Grid Layout: 2-Column Horizontal Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {subPages.map((page, idx) => (
              <Link
                href={page.link}
                key={idx}
                className={`bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 group items-start relative overflow-hidden ${idx === 6 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto w-full' : ''}`}
              >
                {/* Icon Left - NO HOVER EFFECTS */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-700/50 border border-slate-600/50 flex items-center justify-center shrink-0">
                  <div className="[&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-amber-400">
                    {page.icon}
                  </div>
                </div>
                
                {/* Text Content Right */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    {/* Title - NO HOVER EFFECTS */}
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight pr-4 leading-tight">
                      {page.title}
                    </h3>
                    
                    {/* Button - HOVER EFFECTS ONLY HERE (Always active on mobile) */}
                    <div className="w-8 h-8 rounded-full bg-amber-500 border-amber-400 md:bg-slate-700/50 border md:border-slate-600/50 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:border-amber-400 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-slate-900 md:text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light">
                    {page.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - FACTORY FOOTPRINT */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] border border-slate-100">
                <Image 
                  src="/images/manufacturing_floor.png" 
                  alt="BRC Brake Chamber Factory Floor in Zhejiang, China" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="inline-block py-1.5 px-4 rounded-full bg-amber-50 text-amber-600 border border-amber-100 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm">
                Our Factory
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-6">Inside Our 50,000 Sqm Brake Chamber Factory in Zhejiang, China</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our vertically integrated factory in Zhejiang, China is built for one purpose: manufacturing brake chambers at scale without sacrificing precision.
              </p>
              
              <div className="space-y-6">
                {facts.map((fact, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy-900">{fact.label}:</span> <span className="text-slate-600">{fact.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - BOTTOM CTA */}
      <section className="py-12 md:py-16 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>

            <div className="relative z-10 flex-1 max-w-2xl text-center md:text-left">
              <SectionHeader
                badge="Work With BRC"
                title="Ready to Source Brake Chambers From a Chinese Manufacturer?"
                description="Send us your specifications, target volumes, and destination country. Our export engineering team responds within 24 business hours with factory-direct pricing and lead times."
                align="left"
                theme="dark"
                accentColor="amber"
                className="!mb-0"
                plainText={true}
              />
            </div>

            <div className="relative z-10 flex flex-col w-full md:w-auto gap-4 min-w-[240px] shrink-0 mt-8 md:mt-0">
              <Link 
                href="/quote" 
                className="bg-amber-500 text-navy-950 font-black py-4 px-8 rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 text-center uppercase tracking-widest text-[13px] transform hover:-translate-y-1 flex items-center justify-center"
              >
                Request Factory Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="bg-navy-800 text-white border border-navy-600 font-black py-4 px-8 rounded-xl hover:bg-navy-700 hover:border-navy-500 transition-all text-center uppercase tracking-widest text-[13px] transform hover:-translate-y-1 flex items-center justify-center"
              >
                Contact Engineering <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}

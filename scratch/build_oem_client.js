const fs = require('fs');

const oemClientCode = `"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRightLeft, ArrowRight, ShieldCheck, Zap, Wrench, Camera, Download, Mail, BookOpen, FileText, CheckCircle2, MonitorCheck, FileDigit, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import OEMSearchForm from '@/features/oem/components/OEMSearchForm';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';

export default function OEMCrossReferenceClient() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      {/* Hero Section */}
      <PageHeader
        badge="Cross-Reference Tool"
        badgeIcon={ArrowRightLeft}
        title="OEM Brake Chamber Cross-Reference: Find Direct Replacements"
        description="Search by Bendix, Haldex, Meritor, Knorr-Bremse, WABCO, SORL, or MGM part number and get the exact BRC equivalent in seconds. Every match is verified for fit, form, and function."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'OEM Cross-Reference' }
        ]}
      />

      {/* Main Search Interface */}
      <section id="search-tool" className="scroll-mt-32 lg:scroll-mt-40 relative z-20 -mt-12 lg:-mt-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <OEMSearchForm />
        </motion.div>
      </section>

      {/* NEW: SECTION 3 — HOW IT WORKS */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white border-y border-slate-200">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeader
            badge="How It Works"
            title="How the BRC Brake Chamber Cross-Reference Works"
            description="Find the exact BRC replacement for any OEM brake chamber in three simple steps."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">1</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Enter OEM Part Number</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Type in your Bendix, Haldex, Meritor, WABCO, Knorr-Bremse, SORL, TSE, or MGM part number.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">2</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Get Verified Equivalent</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Our database returns the matching BRC brake chamber, confirmed for fit, form, and function.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">3</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Order Direct</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Request pricing or place a container order — shipped direct from our IATF 16949 compliant factory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BRAND LIBRARY */}
      <section className="pt-16 pb-24 relative overflow-hidden bg-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-6 text-center lg:text-left">
            <div className="max-w-3xl">
              <SectionHeader
                badge="Component Library"
                title="Browse Brake Chamber Replacements by OEM Brand"
                description="Select your OEM brand or vehicle manufacturer to find guaranteed compatible BRC aftermarket brake chambers. Every brand page includes part numbers, dimensional data, and verified interchange matches."
                align="left"
                className="!mb-0"
              />
            </div>
            <Link href="/products" className="hidden lg:flex text-amber-600 font-extrabold uppercase tracking-widest text-[13px] items-center justify-center hover:text-amber-500 transition-colors bg-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md whitespace-nowrap border border-slate-200">
              View All Brake Chamber Cross-References <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 max-w-[1920px] mx-auto"
          >
            {[
              { name: 'Bendix', path: 'bendix', color: 'amber', region: 'North America', desc: 'View Bendix brake chamber replacements' },
              { name: 'Meritor', path: 'meritor', color: 'amber', region: 'North America', desc: 'View Meritor brake chamber replacements' },
              { name: 'Haldex', path: 'haldex', color: 'amber', region: 'North America', desc: 'View Haldex brake chamber replacements' },
              { name: 'MGM', path: 'mgm', color: 'amber', region: 'North America', desc: 'View MGM brake chamber replacements' },
              { name: 'TSE', path: 'tse', color: 'amber', region: 'North America', desc: 'View TSE brake chamber replacements' },
              { name: 'ZF / WABCO', path: 'zf-wabco', color: 'navy', region: 'Europe / Global', desc: 'View ZF/WABCO brake chamber replacements' },
              { name: 'Knorr-Bremse', path: 'knorr-bremse', color: 'navy', region: 'Europe / Global', desc: 'View Knorr-Bremse replacements' },
              { name: 'SORL', path: 'sorl', color: 'navy', region: 'Europe / Global', desc: 'View SORL brake chamber replacements' }
            ].map((brand) => (
              <motion.div key={brand.name} variants={fadeInUp}>
                <Link 
                  href={\`/oem-cross-reference/\${brand.path}\`} 
                  className={\`bg-white rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-\${brand.color}-200 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden h-full\`}
                >
                  <div className={\`absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-\${brand.color}-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0\`}></div>
                  <div className={\`relative z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-\${brand.color}-100 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300\`}>
                    <ShieldCheck className={\`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-\${brand.color}-600\`} />
                  </div>
                  <h3 className={\`relative z-10 text-base sm:text-lg lg:text-xl font-extrabold text-navy-900 mb-1 lg:mb-2 group-hover:text-\${brand.color}-600 transition-colors leading-tight\`}>{brand.name}</h3>
                  <p className="relative z-10 text-slate-500 text-[10px] sm:text-xs lg:text-sm font-medium mb-1 flex-grow leading-tight">{brand.region}</p>
                  <p className="relative z-10 text-slate-400 text-[10px] sm:text-[11px] mb-4 sm:mb-6 lg:mb-8 flex-grow leading-tight hidden sm:block">{brand.desc}</p>
                  
                  <span className={\`relative z-10 text-\${brand.color}-600 font-extrabold text-[9px] sm:text-[11px] lg:text-[13px] uppercase tracking-widest flex items-center mt-auto\`}>
                    View Parts <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 ml-1 sm:ml-1.5 lg:ml-2 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — WHY FLEET MANAGERS USE BRC */}
      <section className="py-16 md:py-24 bg-navy-950 border-y border-navy-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <AnimatedGridBackground opacity={0.08} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Imagery */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img src="/images/home/spring-brakes-bg.jpg" alt="Testing" className="rounded-2xl shadow-lg w-full h-40 sm:h-48 object-cover transition-all duration-500" />
                  <img src="/images/home/piggybacks-bg.jpg" alt="Manufacturing" className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover transition-all duration-500" />
                </div>
                <div className="pt-8">
                  <img src="/images/home/service-brakes-bg.jpg" alt="Spring Brake" className="rounded-2xl shadow-lg w-full h-64 sm:h-80 object-cover object-center bg-slate-100" />
                </div>
              </motion.div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <SectionHeader
                badge="BRC Cross-Reference Database"
                title={<>Why Fleet Managers Use the <span className="text-amber-500">BRC Brake Chamber Cross-Reference</span></>}
                description="Stop guessing whether an aftermarket brake chamber will fit. Every BRC cross-reference is verified against manufacturer catalogs — if we say it fits, it fits."
                align="left"
                theme="dark"
              />
              <ul className="space-y-6">
                <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-200 text-sm md:text-base leading-relaxed"><strong className="text-white">Verified Match Guarantee:</strong> Every cross-reference is confirmed against the original manufacturer catalog. If we say it fits, it fits.</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-200 text-sm md:text-base leading-relaxed"><strong className="text-white">Live Database Updates:</strong> New OEM part numbers are added weekly. Your search is always current, never outdated.</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-start gap-4">
                  <Wrench className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-200 text-sm md:text-base leading-relaxed"><strong className="text-white">Engineering Validation:</strong> Every match is validated by air brake specialists, not software algorithms. 100% technical accuracy across thousands of part combinations.</span>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* SECTION 6 — ACTION CARDS */}
          <div className="mt-16 lg:mt-24 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Tool 1 */}
              <Link href="/technical-resources" className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                <div className="relative z-10 w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="relative z-10 text-2xl font-extrabold text-navy-900 mb-4 group-hover:text-amber-600 transition-colors">Visual ID Guide</h3>
                <p className="relative z-10 text-slate-600 text-base leading-relaxed mb-8 flex-grow">Identify your current brake chamber by physical appearance, mounting type, and stroke dimensions. Our visual guide covers all common commercial configurations.</p>
                <span className="relative z-10 text-amber-600 font-extrabold text-[13px] uppercase tracking-widest flex items-center mt-auto">
                  View Visual Guide <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Tool 2 (Dark Theme) */}
              <Link href="/oem-cross-reference" className="bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 p-6 lg:p-10 rounded-[2rem] hover:border-emerald-500/50 transition-all duration-500 shadow-xl shadow-navy-900/10 group flex flex-col relative overflow-hidden transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-700/40 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                
                <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center mb-8 shadow-inner border border-navy-700 group-hover:border-emerald-500/50 transition-colors">
                  <Download className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="relative z-10 text-2xl font-extrabold text-white mb-4 group-hover:text-emerald-400 transition-colors">Download Cross-Reference Database</h3>
                <p className="relative z-10 text-navy-300 text-base leading-relaxed mb-8 flex-grow font-light">Download the full BRC brake chamber cross-reference database in PDF and CSV formats. Includes all major OEM part numbers.</p>
                <span className="relative z-10 text-emerald-400 font-extrabold text-[13px] uppercase tracking-widest flex items-center mt-auto group-hover:text-emerald-300 transition-colors">
                  Download Database <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Link>

              {/* Tool 3 */}
              <Link href="/contact" className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-navy-200 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                <div className="relative z-10 w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-navy-600" />
                </div>
                <h3 className="relative z-10 text-2xl font-extrabold text-navy-900 mb-4 group-hover:text-navy-600 transition-colors">Request a Custom Cross-Match</h3>
                <p className="relative z-10 text-slate-600 text-base leading-relaxed mb-8 flex-grow">Have a specialized or legacy part number not listed in our database? Our engineers will reverse-engineer the match within 24 hours.</p>
                <span className="relative z-10 text-navy-600 font-extrabold text-[13px] uppercase tracking-widest flex items-center mt-auto">
                  Request Cross-Match <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeader
            badge="Common Questions"
            title="Brake Chamber Cross-Reference FAQs"
            description="Answers to the most common questions about our OEM cross-reference database, verified matches, and aftermarket brake chamber fitment."
            accentColor="amber"
          />
          <div className="mt-8">
            <GlobalFAQAccordion faqs={[
              { q: "Will using an aftermarket brake chamber void my vehicle's warranty?", a: "No. In most jurisdictions — including the United States (Magnuson-Moss Warranty Act), the European Union, and Australia — using an aftermarket replacement part does not void a vehicle's warranty, as long as the part meets or exceeds OEM specifications. BRC brake chambers are manufactured to IATF 16949 standards and tested to FMVSS-121 (North America) and ECE R13 (Europe)." },
              { q: "How accurate is the BRC cross-reference database?", a: "Every cross-reference in our database is validated against the original manufacturer catalog by our in-house engineering team. If our database says a BRC chamber matches a specific OEM part number, it will fit, form, and function identically. We update the database weekly with new OEM part numbers." },
              { q: "Do BRC brake chambers meet the same safety standards as OEM?", a: "Yes. BRC brake chambers are manufactured in an IATF 16949 compliant facility and tested to FMVSS-121 (North America) and ECE R13 (Europe) standards. Every chamber undergoes pressure testing and stroke testing before shipment. Our chambers are direct replacements for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO." },
              { q: "How do I identify my current brake chamber type?", a: "Check the chamber's ID tag or stamped markings. Most commercial brake chambers include a type number (e.g., Type 30/30, Type 20/24) and a manufacturer part number. If you can't find these, our Visual ID Guide walks you through measuring the chamber body, stroke, and mounting type to identify it." },
              { q: "What if I order a cross-referenced part and it doesn't fit?", a: "This is extremely rare, but if it happens, contact our team immediately. We will either provide a corrected replacement at no cost or issue a full refund. Every BRC cross-reference is backed by our Verified Match Guarantee." },
              { q: "Can I search by brand and part number at the same time?", a: "Yes. Our interchange search accepts either a raw OEM part number (e.g., 5009011) or a brand-prefixed format (e.g., Bendix 5009011). The database will return the matching BRC equivalent in seconds." },
              { q: "How quickly can I get a sample of a cross-referenced part?", a: "Sample orders ship directly from our factory in Zhejiang, China. Most cross-referenced samples are dispatched within 5–7 business days. Express shipping (DHL, FedEx, UPS) is available for urgent evaluation." }
            ]} />
          </div>
        </div>
      </section>

      {/* SECTION 8 — RECENTLY CROSS-REFERENCED */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge="Recently Cross-Referenced"
            title="Latest Brake Chamber Matches"
            description="New OEM part numbers added to the BRC cross-reference database this week."
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 max-w-[1920px] mx-auto">
            {[
              { oem: 'Bendix 5009011', brc: 'BRC Type 30/30 Spring Brake' },
              { oem: 'Meritor MGC3030', brc: 'BRC Type 30/30 Long Stroke' },
              { oem: 'Haldex GC3030', brc: 'BRC Type 30/30 Standard' },
              { oem: 'WABCO 925 384 001 0', brc: 'BRC Type 24/24 Air Disc' }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-amber-200 transition-all group">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">OEM Part</p>
                  <p className="font-mono text-navy-900 font-bold text-lg mb-4">{item.oem}</p>
                  <ArrowRight className="w-4 h-4 text-slate-300 mb-4 transform rotate-90 sm:rotate-0" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">BRC Match</p>
                  <p className="font-semibold text-emerald-600">{item.brc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — CUSTOM CROSS-REFERENCE CTA */}
      <div className="py-16 md:py-24 bg-navy-950 relative overflow-hidden border-b border-navy-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[80px] -mt-40 z-0 pointer-events-none"></div>

            <div className="relative z-10">
              <SectionHeader
                badge="Engineering Support"
                title="Need a Custom Brake Chamber Cross-Reference?"
                description={<>If you have a specialized, discontinued, or legacy OEM part number not found in our database, our engineering team will reverse-engineer the match and return a BRC equivalent within 24 hours. Every custom match is backed by our Verified Match Guarantee.</>}
                align="center"
                theme="dark"
                accentColor="amber"
                className="!mb-8"
              />
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 justify-center">
              <Link href="/contact" className="inline-block w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Request a Custom Cross-Match <ArrowRight className="w-4 h-4 inline-block ml-1" />
              </Link>
              <button onClick={() => { document.getElementById('search-tool')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-block w-full sm:w-auto bg-navy-800/60 hover:bg-navy-800 border border-navy-600 hover:border-amber-500 text-white font-black text-center px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Search the Full Database
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 10 — RELATED RESOURCES */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge="Related Resources"
            title="Brake Chamber Technical & Reference Resources"
            description="Everything you need to spec, install, and maintain commercial brake chambers."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mt-10">
            {[
              { title: "Brake Chamber Visual ID Guide", icon: Camera },
              { title: "Brake Chamber Size Chart", icon: FileDigit },
              { title: "Brake Chamber Installation Guide", icon: BookOpen },
              { title: "Brake Chamber Torque Specs", icon: Wrench }
            ].map((res, i) => (
              <Link key={i} href="/technical-resources" className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4 hover:border-amber-400 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-50 transition-colors">
                  <res.icon className="w-6 h-6 text-navy-600 group-hover:text-amber-600 transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-navy-900 group-hover:text-amber-600 transition-colors leading-tight">{res.title}</h4>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 flex items-center group-hover:text-amber-500">
                    View <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
`;

fs.writeFileSync('src/features/oem/components/OEMCrossReferenceClient.tsx', oemClientCode);
console.log('Successfully rebuilt OEMCrossReferenceClient.tsx');

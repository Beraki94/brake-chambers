"use client";
import React from 'react';
import Link from 'next/link';
import { Settings, ArrowRight, ShieldCheck, CheckCircle2, Truck, Zap, Wrench, Camera, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import OEMSearchForm from '@/components/oem/OEMSearchForm';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import TrendingModelsMarquee from '@/components/shared/TrendingModelsMarquee';

export default function OEMCrossReferenceClient() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      {/* Hero Section */}
      <PageHeader
        badge="Cross-Reference Tool"
        title={
          <>
            Find Your BRC Brake Chamber Equivalent by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300">OEM Part Number</span>
          </>
        }
        description="Search by Bendix, Meritor, Haldex, WABCO, MGM, or TSE part number to find the exact BRC match. Same fit, form, and performance — guaranteed."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'OEM Cross-Reference' }
        ]}
      />
      {/* Main Search Interface */}
      <section id="search-tool" className="scroll-mt-32 lg:scroll-mt-40 relative z-20 -mt-12 lg:-mt-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <OEMSearchForm />
        </motion.div>
      </section>

      {/* Categories Grid - Clean & Modern Light Mode */}
      <section className="pt-8 pb-24 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-white/60 skew-x-12 -translate-x-1/4 pointer-events-none z-0" />
        
        {/* Rotating Brake Chamber Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] opacity-[0.06] pointer-events-none animate-[spin_120s_linear_infinite] z-0">
          <img src="/products/spring-brake.jpg" alt="Brake Chamber Background" className="w-full h-full object-contain mix-blend-multiply grayscale drop-shadow-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl w-full">
              <SectionHeader
                badge="Component Library"
                title="Prefer to Browse?"
                description="Select your OEM brand, vehicle manufacturer, or suspension type to find guaranteed compatible aftermarket brake chambers."
                align="center"
              />
            </div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Major Brake Brands */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 hover:border-amber-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-6">Brake Brands</h3>
              <ul className="space-y-2 mt-auto">
                {[
                  { name: 'View Bendix Equivalents', path: 'bendix' },
                  { name: 'View Haldex Equivalents', path: 'haldex' },
                  { name: 'View Meritor Equivalents', path: 'meritor' },
                  { name: 'View MGM Equivalents', path: 'mgm' }
                ].map(item => (
                  <li key={item.name}>
                    <Link href={`/oem-cross-reference/${item.path}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-amber-600 transition-colors group/link font-medium text-sm">
                      {item.name} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Truck Manufacturers */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 hover:border-navy-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-6 h-6 text-navy-500" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-6">Truck OEMs</h3>
              <ul className="space-y-2 mt-auto">
                {[
                  { name: 'Freightliner Replacements', path: 'freightliner' },
                  { name: 'Peterbilt Replacements', path: 'peterbilt' },
                  { name: 'Kenworth Replacements', path: 'kenworth' },
                  { name: 'Volvo / Mack Replacements', path: 'volvo-mack' }
                ].map(item => (
                  <li key={item.name}>
                    <Link href={`/oem-cross-reference/${item.path}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-navy-600 transition-colors group/link font-medium text-sm">
                      {item.name} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Axle & Suspension */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 hover:border-amber-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-6">Suspension</h3>
              <ul className="space-y-2 mt-auto">
                {[
                  { name: 'Hendrickson Apps', path: 'hendrickson' },
                  { name: 'SAF-Holland Apps', path: 'saf-holland' },
                  { name: 'Dana Axle Apps', path: 'dana' },
                  { name: 'Meritor Axle Apps', path: 'meritor-axles' }
                ].map(item => (
                  <li key={item.name}>
                    <Link href={`/oem-cross-reference/${item.path}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-amber-600 transition-colors group/link font-medium text-sm">
                      {item.name} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Feature Split Section */}
      <section className="py-16 md:py-24 bg-navy-950 border-y border-navy-900 overflow-hidden relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left side: Imagery (Bottom on Mobile, Left on Desktop) */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Testing" className="rounded-2xl shadow-lg w-full h-40 sm:h-48 object-cover grayscale mix-blend-luminosity transition-all duration-500" />
                  <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80" alt="Manufacturing" className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover grayscale mix-blend-luminosity transition-all duration-500" />
                </div>
                <div className="pt-8">
                  <img src="/products/spring-brake.jpg" alt="Spring Brake" className="rounded-2xl shadow-lg w-full h-64 sm:h-80 object-cover object-center bg-slate-100" />
                </div>
              </motion.div>
            </div>
            {/* Right side: Content */}
            <div className="w-full lg:w-1/2">
              <SectionHeader
                badge="BRC Database"
                title={<>Why fleet managers use the <span className="text-amber-500">BRC Cross-Reference</span> database.</>}
                description="Stop guessing whether an aftermarket brake chamber will fit. Our database gives you verified matches, backed by engineering precision."
                align="left"
                theme="dark"
              />
              <ul className="space-y-6">
                <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-200 text-sm md:text-base leading-relaxed"><strong className="text-white">Verified Match Guarantee:</strong> Every match in our database is confirmed against manufacturer catalogs. If it says it fits, it fits.</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-200 text-sm md:text-base leading-relaxed"><strong className="text-white">Live Database Updates:</strong> We add new part numbers weekly. Your search is always current, never outdated.</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-start gap-4">
                  <Wrench className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-200 text-sm md:text-base leading-relaxed"><strong className="text-white">Engineering Validation:</strong> Built by air brake specialists, not software algorithms, ensuring 100% technical accuracy across thousands of SKU combinations.</span>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* THE 3 TOOLS - Placed below the split section as floating interactive cards */}
          <div className="mt-16 lg:mt-24 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Tool 1 */}
              <Link href="/oem-cross-reference/visual-guide" className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                <div className="relative z-10 w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="relative z-10 text-2xl font-extrabold text-navy-900 mb-4 group-hover:text-amber-600 transition-colors">Visual ID Guide</h3>
                <p className="relative z-10 text-slate-600 text-base leading-relaxed mb-8 flex-grow">Identify your chamber by physical appearance and dimensions.</p>
                <span className="relative z-10 text-amber-600 font-extrabold text-[13px] uppercase tracking-widest flex items-center mt-auto">
                  View Guide <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              {/* Tool 2 (Dark Theme for emphasis) */}
              <Link href="/oem-cross-reference/database" className="bg-navy-900 rounded-[2rem] p-6 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-navy-800 hover:border-navy-600 hover:shadow-[0_20px_40px_rgb(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-800 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                <div className="relative z-10 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-7 h-7 text-white" />
                </div>
                <h3 className="relative z-10 text-2xl font-extrabold text-white mb-4 group-hover:text-amber-400 transition-colors">Download Database</h3>
                <p className="relative z-10 text-navy-200 text-base leading-relaxed mb-8 flex-grow">Full cross-reference database in PDF and CSV formats.</p>
                <span className="relative z-10 text-white font-extrabold text-[13px] uppercase tracking-widest flex items-center mt-auto group-hover:text-amber-400 transition-colors">
                  Download Now <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Tool 3 */}
              <Link href="/oem-cross-reference/request" className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-navy-200 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                <div className="relative z-10 w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-navy-600" />
                </div>
                <h3 className="relative z-10 text-2xl font-extrabold text-navy-900 mb-4 group-hover:text-navy-600 transition-colors">Request Cross-Match</h3>
                <p className="relative z-10 text-slate-600 text-base leading-relaxed mb-8 flex-grow">Submit specs for any unlisted or custom part. Our engineers will identify the correct replacement.</p>
                <span className="relative z-10 text-navy-600 font-extrabold text-[13px] uppercase tracking-widest flex items-center mt-auto">
                  Request Match <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Cross-Reference FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeader
            badge="Cross-Reference FAQ"
            title="Frequently Asked Questions"
            accentColor="amber"
          />
          <div className="mt-8">
            <GlobalFAQAccordion faqs={[
              { q: "Will using an aftermarket chamber void my vehicle's warranty?", a: "No. The Magnuson-Moss Warranty Act protects your right to use aftermarket parts. BRC chambers are engineered to meet or exceed OEM specifications, so your vehicle warranty remains fully intact." },
              { q: "How accurate is the BRC cross-reference database?", a: "Our database is verified against manufacturer catalogs and updated weekly. If you need additional verification, our engineering team can manually confirm any match before you order." },
              { q: "Do BRC chambers meet the same safety standards?", a: "Yes. All BRC chambers are FMVSS 121 certified, SAE J1469 compliant, and 100% end-of-line tested for pneumatics and operational consistency." },
              { q: "How do I identify my current chamber type?", a: "Check the ID tag or stamp on your existing chamber. Use our Visual ID Guide for assistance, or contact our support team with a photo and we will identify it for you." },
              { q: "What if I order a cross-referenced part and it doesn't fit?", a: "We guarantee every cross-referenced match for exact fit, form, and function. If a verified BRC match doesn't fit, our engineering team will resolve the match or process a return—no restocking fees." },
              { q: "Can I search by brand and part number at the same time?", a: "Yes. Our live database accepts full part numbers, partial part numbers, or brand-specific searches. We recommend entering the full OEM number for the most precise match." },
              { q: "How quickly can I get a sample of a cross-referenced part?", a: "We offer expedited sample shipping directly from our factory or regional warehouses. Once you find your match, you can request a sample for physical verification within days." }
            ]} />
          </div>
        </div>
      </section>

      {/* MOST POPULAR ASSEMBLIES */}
      <TrendingModelsMarquee />

      {/* Final CTA Section */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[11px] font-extrabold uppercase tracking-widest backdrop-blur-sm">
                Engineering Support
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Need a Custom Cross-Reference?</h3>
              <p className="text-navy-200 text-base md:text-lg font-light leading-relaxed">
                If you have a specialized or legacy part number not found in our database, our engineering team can reverse-engineer and match it to a BRC equivalent within 24 hours. <strong className="text-white font-bold">No guesswork. No compromises.</strong>
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-10 py-4 sm:py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Request OEM Match Quote
              </Link>
              <Link href="/database" className="inline-block w-full bg-navy-800/60 hover:bg-navy-800 border border-navy-600 hover:border-amber-500 text-white font-black text-center px-6 sm:px-10 py-4 sm:py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Search Entire Database
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

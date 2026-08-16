"use client";
import React from 'react';
import Link from 'next/link';
import { Settings, ArrowRight, ShieldCheck, CheckCircle2, Search, Wrench, Zap, Truck, Database, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import OEMSearchForm from '@/components/oem/OEMSearchForm';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
export default function OEMCrossReferenceClient() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      {/* Hero Section */}
      <PageHeader
        badge="Interchange Database"
        title={
          <>
            OEM Cross-Reference <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-navy-400">Database</span>
          </>
        }
        description="Instantly map competitor part numbers to our direct aftermarket equivalents. Engineered for exact fitment, guaranteed performance, and substantial cost savings."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference' }
        ]}
      />
      {/* Main Search Interface */}
      <section className="relative z-20 -mt-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-20">
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
      <section className="pt-8 pb-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="max-w-2xl w-full">
              <SectionHeader
                badge="Component Library"
                title="Browse by Category"
                description="Prefer to browse? Select your OEM brand, vehicle manufacturer, or suspension type to find guaranteed compatible aftermarket brake chambers."
                align="center"
              />
            </div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
            {/* Interchange Tools */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 hover:border-slate-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-6">Database Tools</h3>
              <ul className="space-y-2 mt-auto">
                {[
                  { name: 'Visual ID Guide', path: 'visual-guide' },
                  { name: 'Download Database', path: 'database' },
                  { name: 'Request Cross-Match', path: 'request' }
                ].map(item => (
                  <li key={item.name}>
                    <Link href={`/oem-cross-reference/${item.path}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-slate-600 transition-colors group/link font-medium text-sm">
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
      <section className="py-16 md:py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            {/* Left side: Imagery (Bottom on Mobile, Left on Desktop) */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Testing" className="rounded-2xl shadow-lg w-full h-48 object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-500" />
                  <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80" alt="Manufacturing" className="rounded-2xl shadow-lg w-full h-64 object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="pt-8">
                  <img src="/products/spring-brake.jpg" alt="Spring Brake" className="rounded-2xl shadow-lg w-full h-80 object-cover object-center bg-slate-100" />
                </div>
              </motion.div>
            </div>
            {/* Right side: Content */}
            <div className="w-full lg:w-1/2">
              <SectionHeader
                badge="Factory-Direct Advantage"
                title={<>Why fleet managers choose <span className="text-amber-500">BRC replacements</span>.</>}
                description="Consolidating your sourcing directly with the manufacturer ensures you get uncompromised quality without the brand markup. Every BRC chamber matches or exceeds OEM specifications."
                align="left"
              />
              <div className="space-y-6">
                {[
                  { icon: Settings, title: "Exact Drop-In Fitment", desc: "Identical mounting hardware, pushrod lengths, and port angles. Zero modifications required." },
                  { icon: Zap, title: "1 Million Cycle Tested", desc: "Every unit design undergoes severe life-cycle testing before it ever hits the road." },
                  { icon: ShieldCheck, title: "ISO 9001:2015 Certified", desc: "Rigorous 100% pneumatic leak and operational testing on our automated assembly lines." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-6 h-6 text-navy-900" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cross-Reference FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeader
            title="Cross-Reference FAQ"
            description="Common questions about switching to BRC aftermarket chambers."
            accentColor="amber"
          />
          <div className="space-y-4">
            {[
              { q: "Will using an aftermarket chamber void my vehicle's warranty?", a: "No. Under the Magnuson-Moss Warranty Act, it is illegal for a manufacturer to void your warranty simply because you used an aftermarket part, unless they can prove the aftermarket part caused the failure." },
              { q: "How accurate is the BRC cross-reference database?", a: "Our database is meticulously maintained by our engineering team. Every cross-referenced part is guaranteed to have identical mounting hardware, pushrod length, port angles, and operational stroke." },
              { q: "Do BRC chambers meet the same safety standards?", a: "Yes. All BRC brake chambers are engineered to meet or exceed FMVSS-121 compliance and undergo identical 100% pneumatic leak testing as OEM parts." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-navy-900 group-hover:text-amber-500 transition-colors">{faq.q}</h4>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <p className="mt-4 text-slate-600 font-light leading-relaxed hidden group-hover:block">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Need a Custom Cross-Reference?</h3>
              <p className="text-navy-200 text-base md:text-lg font-light">If you have a specialized or legacy part number not found in our database, our engineering team can reverse-engineer and match it to a BRC equivalent within 24 hours.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-nowrap">
                Upload Bulk Part List
              </Link>
              <Link href="/database" className="inline-block w-full bg-navy-800/60 hover:bg-navy-800 border border-navy-600 hover:border-amber-500 text-white font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
                Download PDF Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Zap, Settings, Camera, FileText, Truck, AlertTriangle, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function WarrantyClient() {
  return (
    <div className="bg-[#F8FAFC] pb-20 font-sans">
      <PageHeader 
        badge={<><ShieldCheck className="w-4 h-4 inline-block mr-1" /> Quality Assurance</>}
        title="Warranty & Quality Assurance"
        description="IATF 16949 Certified Manufacturing. Every chamber is 100% leak-tested and stroke-tested at our facility before leaving the factory line."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Warranty' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-16 relative z-30">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Section 1: Standard Warranty */}
          <motion.section 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <motion.div variants={fadeInUp} className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-amber-50 rounded-full flex items-center justify-center relative shadow-inner">
                  <div className="absolute inset-2 border-2 border-amber-200 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
                  <ShieldCheck className="w-16 h-16 text-amber-500 relative z-10" />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:w-2/3">
                <h2 className="text-3xl font-extrabold text-navy-900 mb-4 font-heading">The BRC 1-Year Guarantee</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  BRC Brake Chambers provides a standard 1-year factory warranty on all spring and service brake assemblies against manufacturing defects in materials and workmanship, under normal heavy-duty use.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Defective Materials",
                    "Faulty Workmanship",
                    "Diaphragm Failure (Non-Puncture)",
                    "Internal Spring Breakage"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 2: Quality Control Grid */}
          <section className="py-12">
            <SectionHeader 
              title="Rigorous Testing Protocols"
              description="Every chamber undergoes strict automated and manual validation processes at our IATF 16949 certified facility, ensuring perfect sealing and structural integrity."
              accentColor="emerald"
            />
            
            <motion.div 
              variants={staggerContainer} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {[
                { icon: Zap, title: "100% Leak Testing", desc: "Every unit is pressure tested using automated pneumatics to detect microscopic air loss before packaging.", color: "emerald" },
                { icon: Settings, title: "Full Stroke Validation", desc: "Actuator pushrods are cycled to maximum stroke length to verify spring force and return consistency.", color: "amber" },
                { icon: ShieldCheck, title: "Burst Pressure Analysis", desc: "Randomized batch sampling subjects housings to extreme burst pressures far exceeding SAE J1469 requirements.", color: "navy" }
              ].map((test, i) => (
                <motion.div key={i} variants={scaleIn} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-lg transition-shadow text-center group">
                  <div className={`w-16 h-16 mx-auto bg-${test.color}-50 text-${test.color}-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <test.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-900 mb-3">{test.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{test.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Section 3: Claims Process Timeline */}
          <section className="bg-navy-950 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950 opacity-50"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-heading">Streamlined Claims Process</h2>
              <p className="text-navy-200 max-w-2xl mx-auto">We understand downtime costs money. Our B2B claims process is designed to be fast, transparent, and hassle-free for our distribution partners.</p>
            </div>

            <motion.div 
              variants={staggerContainer} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
            >
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-navy-800 via-amber-500/50 to-navy-800 z-0"></div>

              {[
                { icon: Camera, title: "1. Document", desc: "Take clear photos or video of the defect, capturing the serial number and batch code stamped on the chamber." },
                { icon: FileText, title: "2. Submit Claim", desc: "Contact your dedicated account manager or submit the evidence via our B2B distributor portal." },
                { icon: Truck, title: "3. Resolution", desc: "Once verified, we will issue immediate credit notes or ship replacements in your next container." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative z-10 text-center px-4">
                  <div className="w-24 h-24 mx-auto bg-navy-900 border border-navy-700 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-navy-950/50 group hover:border-amber-500 transition-colors">
                    <step.icon className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="relative z-10 mt-12 text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:-translate-y-1 uppercase tracking-wide text-sm">
                Contact Warranty Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Section 4: FAQ */}
          <section className="py-12 max-w-4xl mx-auto w-full">
             <SectionHeader 
              title="Frequently Asked Questions"
              align="center"
              accentColor="amber"
            />
            
            <div className="mt-8">
              <GlobalFAQAccordion faqs={[
                { 
                  q: "What voids the standard warranty?", 
                  a: "The warranty is voided if the chamber exhibits signs of severe external physical damage, improper installation (e.g., cutting the pushrod incorrectly), exposure to corrosive chemicals outside of normal road salt, or if the unit was disassembled." 
                },
                { 
                  q: "Do I need to return the defective chambers?", 
                  a: "In most cases, no. We rely on high-quality photographic evidence and the batch serial numbers to process claims quickly. We may request specific units be returned at our expense for engineering analysis if a rare failure pattern emerges." 
                },
                { 
                  q: "Does the warranty cover labor costs?", 
                  a: "No. The standard BRC factory warranty is strictly limited to the replacement of the defective product or a credit note for the purchase price of the unit. We do not cover consequential damages, towing, or installation labor." 
                }
              ]} />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

const fs = require('fs');

const file = `"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Zap, Settings, AlertTriangle, FileText, UploadCloud, RefreshCw, ArrowRight, XCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import Link from 'next/link';

const faqs = [
  {
    q: "What voids the standard warranty?",
    a: "The BRC warranty is void if: (a) the chamber was installed incorrectly or by an unqualified technician; (b) the chamber was operated outside specified air pressure ranges; (c) the chamber was modified, disassembled, or repaired by anyone other than BRC; (d) the failure resulted from accident, misuse, or external physical damage; (e) the chamber was installed on a vehicle for which it was not specified."
  },
  {
    q: "Do I need to return the defective chambers?",
    a: "Not in all cases. For clear manufacturing defects documented by photo, we typically issue credit or replacement without requiring physical return. For failures requiring QA analysis (unusual failure modes, disputed claims, or batch-level concerns), we may request the failed part be returned for engineering review. Return shipping in these cases is paid by the buyer, unless the claim is confirmed as a manufacturing defect."
  },
  {
    q: "Does the warranty cover labor costs?",
    a: "No. The BRC warranty covers replacement of the defective brake chamber itself. It does not cover labor, downtime, towing, or any incidental or consequential costs associated with replacing a covered chamber. This is standard in the commercial vehicle parts industry."
  },
  {
    q: "How long is the warranty period?",
    a: "12 months from the date of shipment. The warranty is non-transferable and applies only to the original purchaser."
  },
  {
    q: "Does the warranty cover normal wear and tear?",
    a: "No. Wear-and-tear items like diaphragms (from normal operational cycling) and push-rod seals are not covered beyond their normal service life. Warranty coverage is limited to manufacturing defects in materials and workmanship."
  },
  {
    q: "How do I file a warranty claim?",
    a: "Submit your claim through our online portal or by contacting sales@brakechambers.com. Include photographs, invoice number, batch code, and a description of the failure. Claims are reviewed within 24 business hours."
  }
];

export default function WarrantyClient() {
  return (
    <div className="bg-[#F8FAFC] pb-0 font-sans overflow-x-clip">
      {/* SECTION 1 — HERO */}
      <PageHeader 
        badge="Warranty & Claims"
        badgeIcon={ShieldCheck}
        title="Brake Chamber Warranty — 1-Year Factory Guarantee"
        description="Every BRC brake chamber carries a 1-year limited factory warranty against manufacturing defects in materials and workmanship. Claims are processed within 24 hours through our online portal."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Warranty' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-6 sm:-mt-16 relative z-30 mb-16 md:mb-24">
        
        {/* SECTION 2 — WARRANTY TERMS */}
        <motion.section 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 mb-16"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-amber-50 rounded-full flex items-center justify-center relative shadow-inner shrink-0">
                <div className="absolute inset-2 border-2 border-amber-200 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
                <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-amber-500 relative z-10" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-2/3">
              <SectionHeader
                badge="Warranty Terms"
                title="BRC 1-Year Limited Brake Chamber Warranty"
                description="BRC Brake Chambers (Zhejiang GAP Auto Parts Co., Ltd.) warrants that brake chambers manufactured under the BRC brand are free from defects in materials and workmanship for a period of 12 months from the date of shipment."
                align="left"
                theme="light"
                accentColor="amber"
                plainText={true}
                className="!mb-8"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-navy-900 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> Covered (Subject to Conditions)</h4>
                  <ul className="space-y-3">
                    {[
                      "Manufacturing defects in materials",
                      "Manufacturing defects in workmanship",
                      "Diaphragm failure under normal service conditions (excluding punctures, tears, or damage from external causes)",
                      "Internal power spring failure under normal service conditions"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500" /> Conditions</h4>
                  <ul className="space-y-3">
                    {[
                      "Warranty is extended to the original purchaser and is non-transferable.",
                      "Covered products must be installed by a qualified technician in accordance with BRC installation procedures.",
                      "Covered products must be operated within specified air system pressure ranges.",
                      "Claims must be submitted within 30 days of failure discovery.",
                      "Original invoice or proof of purchase is required."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-amber-500 font-bold mt-0.5">-</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SECTION 3 — QUALITY VERIFICATION */}
        <section className="mb-20">
          <SectionHeader 
            badge="Quality Verification"
            title="How BRC Verifies Every Brake Chamber Before Shipment"
            description="Every BRC brake chamber is verified before shipment under our IATF 16949-aligned quality system. These tests confirm warranty coverage applies to products built to specification."
            accentColor="emerald"
            plainText={true}
          />
          
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: Zap, title: "100% Pneumatic Leak Testing", desc: "Every unit is pressure-tested using automated equipment to detect microscopic air loss before packaging. Failing units are scrapped.", color: "emerald" },
              { icon: Settings, title: "Full Stroke Validation", desc: "Push-rods are cycled to verify spring force and return consistency across the full stroke range.", color: "amber" },
              { icon: ShieldCheck, title: "Burst Pressure Testing", desc: "Random batch sampling subjects housings to burst pressure testing above the rated operating pressure, validating structural integrity.", color: "navy" }
            ].map((test, i) => (
              <motion.div key={i} variants={scaleIn} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow text-center group">
                <div className={"w-16 h-16 mx-auto bg-" + test.color + "-50 text-" + test.color + "-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm"}>
                  <test.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">{test.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{test.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link href="/manufacturing/quality-assurance" className="inline-flex items-center gap-2 text-navy-600 font-bold hover:text-emerald-500 transition-colors">
              View Full Quality Assurance Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 4 — CLAIMS PROCESS */}
        <section className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-50 border-b border-slate-200 p-8 sm:p-10">
            <SectionHeader 
              badge="How to File a Warranty Claim"
              title="BRC Brake Chamber Warranty Claim Process"
              description="Claims are reviewed within 24 business hours of submission. Once verified, we issue replacement units or credit, according to the terms below."
              align="left"
              plainText={true}
              className="!mb-0"
            />
          </div>
          
          <div className="p-8 sm:p-10">
            <motion.div 
              variants={staggerContainer} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            >
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-slate-100 z-0"></div>

              {[
                { step: "STEP 1", title: "Document the Failure", desc: "Photograph the failed chamber clearly, capturing the serial number and batch code stamped on the housing. Include a description of the failure and operating conditions.", icon: Camera },
                { step: "STEP 2", title: "Submit the Claim", desc: "Submit your claim through our online portal or by contacting sales@brakechambers.com. Include photos, the original invoice number, and the quantity affected.", icon: UploadCloud },
                { step: "STEP 3", title: "Review & Resolution", desc: "Our QA team reviews the submitted evidence and responds within 24 business hours. Verified claims are resolved by (a) replacement units shipped with your next order, or (b) credit note applied to your account.", icon: RefreshCw }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-md relative">
                    <step.icon className="w-7 h-7 text-amber-500" />
                    <div className="absolute -bottom-2 bg-navy-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{step.step}</div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 bg-amber-50/50 border border-amber-100 rounded-xl p-6 sm:p-8">
              <h4 className="font-bold text-navy-900 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-amber-500" /> Claim Conditions</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Claims must be submitted within 30 days of discovering the failure.",
                  "Physical return of failed parts may be requested for QA analysis before credit is issued.",
                  "Replacement units ship FOB factory (standard Incoterms apply).",
                  "Labour costs are not covered under this warranty."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                    <span className="text-amber-500 font-bold mt-0.5">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 5 — FAQ */}
      <section className="py-16 md:py-24 bg-white relative border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeader
            badge="Common Questions"
            title="Brake Chamber Warranty FAQs"
            description="Common questions from distributors and fleet operators about BRC brake chamber warranty coverage."
            align="center"
          />
          <div className="mt-12">
            <GlobalFAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA */}
      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="File a Claim"
            title="Need to File a Brake Chamber Warranty Claim?"
            description="Submit your claim with photos of the failed chamber, the batch code, and the original invoice number. Our team responds within 24 business hours."
            align="center"
            theme="dark"
            className="!mb-10 max-w-3xl mx-auto"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact?subject=Warranty+Claim" className="inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 uppercase tracking-widest text-sm transform hover:-translate-y-1">
              Contact Warranty Support →
            </Link>
            <Link href="/manufacturing/quality-assurance" className="inline-flex justify-center items-center gap-2 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white font-bold px-8 py-4 rounded-xl transition-all uppercase tracking-widest text-sm">
              View Quality Assurance Process →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

fs.writeFileSync('src/features/warranty/components/WarrantyClient.tsx', file);
console.log('Done writing WarrantyClient.tsx');

"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function IsoCertificationsClient() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        badge="Global Standards"
        title="ISO Certifications"
        description="Our commitment to uncompromising quality is backed by rigorous international standards and continuous auditing."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'ISO Certifications' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-navy-950 rounded-[3rem] p-12 text-center text-white relative overflow-hidden mb-20">
            <Award className="w-20 h-20 text-amber-500 mx-auto mb-6" />
            <SectionHeader
              title="ISO 9001:2015 Certified"
              description="BRC’s entire manufacturing ecosystem—from raw material procurement and metallurgical testing to automated assembly and final dispatch—operates strictly under ISO 9001:2015 Quality Management Systems. We do not self-certify; we undergo strict annual third-party audits to maintain our standing."
              theme="dark"
              className="!mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-navy-900 mb-6 font-heading tracking-tight">Regulatory Compliance</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Beyond manufacturing quality, the final product must meet the strict safety requirements of North American and European highway transport regulations.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-amber-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">SAE J1469 Compliant</h4>
                    <p className="text-slate-500 mt-1">Meets the Society of Automotive Engineers standards for air brake actuator performance and stroke force.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-amber-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">FMVSS 121 Compliant</h4>
                    <p className="text-slate-500 mt-1">Exceeds the Federal Motor Vehicle Safety Standards for commercial air brake systems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-amber-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">100% Traceability</h4>
                    <p className="text-slate-500 mt-1">Every chamber is stamped with lot codes allowing full traceability back to the exact steel batch used in its housing.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-500 p-12 rounded-[3rem] shadow-xl text-center">
              <h3 className="text-3xl font-black text-navy-900 mb-4">Request Certificates</h3>
              <p className="text-navy-900/80 mb-8 font-medium">
                Are you an OEM or procurement manager requiring official documentation?
              </p>
              <Link href="/contact" className="inline-block bg-navy-900 text-white font-extrabold text-sm px-8 py-4 rounded-xl hover:bg-navy-800 transition-all shadow-lg uppercase tracking-widest">
                Contact Compliance Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-slate-50 py-20 text-center border-t border-slate-200">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <SectionHeader title="See How We Test Our Products" className="!mb-6" />
          <Link href="/company/testing-laboratory" className="inline-flex items-center text-amber-600 font-bold hover:text-amber-500 transition-colors uppercase tracking-widest text-lg">
            Inside the Testing Laboratory <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

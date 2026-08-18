"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, MapPin, Truck, Box, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FacilityOverviewClient() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Facility Overview"
        description="A massive, vertically integrated manufacturing campus built for global scale and precision."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'Facility Overview' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/products/scattered_chambers_footer.png" alt="Facility exterior" fill className="object-cover bg-navy-900 grayscale" />
              <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply"></div>
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[11px] font-bold uppercase tracking-widest">
                FACTORY-DIRECT SUPPLY
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">
                Inside Our 500,000 SQM <span className="text-amber-500">Manufacturing Hub</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light mb-8">
                <p>
                  Eliminate supply chain fragmentation and middleman markups. By partnering directly with our IATF-certified factory in Zhejiang, China, you gain a vertically integrated manufacturing ally. We manage the entire lifecycle—from proprietary tool design and raw aluminum die-casting to final automated end-of-line testing. Experience absolute OEM-quality precision backed by factory-direct logistical scale.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Box className="w-8 h-8 text-amber-500 mb-4" />
                  <h4 className="text-2xl font-bold text-navy-900 mb-1">500k+</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sq. Ft. Facility</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Globe className="w-8 h-8 text-amber-500 mb-4" />
                  <h4 className="text-2xl font-bold text-navy-900 mb-1">35+</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Countries Supplied</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Tier-1 Automotive Certification", desc: "Operating under strict ISO 9001:2015 and IATF 16949 certified quality management systems. Validated for global OEM supply chains." },
                  { title: "Mass-Volume Capacity", desc: "Fully automated robotic assembly lines scaling to 1,000,000+ units annually to support global distribution networks." },
                  { title: "In-House Metallurgical Labs", desc: "Dedicated metallurgical engineering and lifecycle stress-testing bays validating every material batch." },
                  { title: "Turnkey Export Logistics", desc: "Seamless ocean-freight container shipping with comprehensive handling of all customs and international port compliance." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-navy-950 font-extrabold text-base md:text-lg mb-1">{feature.title}</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="bg-navy-950 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Global Warehousing & Logistics</h3>
                <p className="text-navy-200 text-lg leading-relaxed mb-8">
                  Manufacturing the best brake chambers is only half the battle. Delivering them efficiently across the globe is the other. We maintain strategic warehousing locations to fulfill massive container-load orders for global distributors and OEMs rapidly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-amber-400" />
                    <span className="font-semibold">Direct-to-Port Logistics Network</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-amber-400" />
                    <span className="font-semibold">Strategic North American Distribution Hubs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Box className="w-6 h-6 text-amber-400" />
                    <span className="font-semibold">Custom Palletizing & Private Labeling</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/heavy_duty_truck.png" alt="Logistics" fill className="object-cover grayscale" />
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-slate-50 py-20 text-center border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <SectionHeader
            title="See How We Ensure Perfection"
            accentColor="amber"
          />
          <div className="mt-6">
            <Link href="/company/testing-laboratory" className="inline-flex items-center text-amber-600 font-bold hover:text-amber-500 transition-colors uppercase tracking-widest text-lg">
            Explore the Testing Laboratory <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { ArrowRight, History, Globe2, Target, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function OurStoryClient() {
  const milestones = [
    { year: '1998', title: 'The Foundation', description: 'Founded as a specialized mechanical engineering firm focused on reverse-engineering commercial brake failure points.' },
    { year: '2005', title: 'First Production Facility', description: 'Opened our first dedicated manufacturing plant, bringing production fully in-house for absolute quality control.' },
    { year: '2012', title: 'ISO 9001 Certification', description: 'Achieved rigorous international quality management certification, standardizing our testing protocols.' },
    { year: '2018', title: 'Global Expansion', description: 'Expanded distribution to over 35 countries, becoming a tier-1 supplier for major international fleets.' },
    { year: '2024', title: 'Next-Gen Robotics', description: 'Fully integrated automated robotic welding and CNC machining into all heavy-duty assembly lines.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Our Story"
        description="A legacy of uncompromising quality, from a specialized engineering firm to a global manufacturing powerhouse."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'Our Story' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">
                Built on <span className="text-primary-500">Engineering Excellence</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  BRC Brake Chambers didn't start as a massive factory. We started as a small team of engineers who were tired of seeing aftermarket air brake chambers fail prematurely in the field.
                </p>
                <p>
                  We spent our early years reverse-engineering the most common failure points in commercial transport—center seal blowouts, rust-flaked return springs, and ruptured diaphragms. We realized that the only way to fix these issues was to stop relying on third-party suppliers and build the components ourselves.
                </p>
                <p>
                  Today, we are proud to say that we own the entire production lifecycle. We don't just assemble parts; we source the raw 8-gauge steel, we compound the premium neoprene rubber, and we apply our own heavy epoxy anti-corrosion coatings.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/images/manufacturing_floor.png" alt="Early engineering" fill className="object-cover" />
              <div className="absolute inset-0 bg-navy-900/20"></div>
            </div>
          </div>

          {/* Timeline */}
          <div className="py-20 border-t border-slate-200">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 font-heading tracking-tight">Our Journey</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-8 mb-12 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-navy-50 border-2 border-primary-500 flex items-center justify-center text-navy-900 font-bold group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0">
                      {milestone.year}
                    </div>
                    {idx !== milestones.length - 1 && (
                      <div className="w-1 h-full bg-slate-200 mt-4 group-hover:bg-primary-200 transition-colors"></div>
                    )}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-navy-950 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-6">Meet the Team Behind the Engineering</h2>
          <Link href="/company/leadership" className="inline-flex items-center text-primary-500 font-bold hover:text-primary-400 transition-colors uppercase tracking-widest text-lg">
            View Leadership Team <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

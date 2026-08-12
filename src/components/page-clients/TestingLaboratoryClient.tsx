"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { ArrowRight, Microscope, Thermometer, ShieldAlert, Activity } from 'lucide-react';
import Link from 'next/link';

export default function TestingLaboratoryClient() {
  const tests = [
    {
      title: '1 Million+ Cycle Testing',
      description: 'We subject our chambers to over 1,000,000 continuous actuate/release cycles under maximum operating pressure to ensure the center seals and return springs never fatigue prematurely.',
      icon: <Activity className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'Salt Spray Corrosion Chambers',
      description: 'Chambers are placed in intense saline fog environments for hundreds of hours to simulate years of exposure to winter road salts and magnesium chloride.',
      icon: <ShieldAlert className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'Extreme Temperature Chambers',
      description: 'Our neoprene diaphragms are tested in environmental chambers ranging from -40°F (-40°C) to 200°F (93°C) to guarantee flexibility in Arctic cold and structural integrity in desert heat.',
      icon: <Thermometer className="w-8 h-8 text-emerald-500" />
    },
    {
      title: '100% End-of-Line Pneumatic Testing',
      description: 'We do not rely on batch testing. Every single brake chamber that leaves our facility is pneumatically leak-tested on the assembly line. If it leaks a fraction of a PSI, it gets scrapped.',
      icon: <Microscope className="w-8 h-8 text-emerald-500" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        title="Testing Laboratory"
        description="Where we try our hardest to break our own products, so they never break on you."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'Testing Laboratory' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">
              Failure is <span className="text-emerald-500">Not an Option</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              A commercial truck hauling 80,000 lbs cannot afford a brake failure. That is why our in-house testing laboratory is the most crucial department in our entire manufacturing facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {tests.map((test, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {test.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{test.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {test.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-white py-16 border-t border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">Explore the Future of Braking</h2>
          <Link href="/company/research-and-innovations" className="inline-flex items-center text-amber-500 font-bold hover:text-amber-400 transition-colors uppercase tracking-widest text-lg">
            View R&D and Innovations <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

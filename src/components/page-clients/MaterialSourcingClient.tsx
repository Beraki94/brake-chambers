"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { ArrowRight, Layers, Droplet, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function MaterialSourcingClient() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        title="Material Sourcing"
        description="The best engineering means nothing if raw materials fail. We source only premium-grade metals and synthetic compounds."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'Material Sourcing' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">
              No Compromises. <span className="text-purple-600">No Shortcuts.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              While competitors thin their housings to save weight and cut costs, BRC utilizes heavy-gauge materials designed to resist rock strikes, vibration fatigue, and the immense torsional forces of heavy braking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <Layers className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 mb-4">8-Gauge Steel Housings</h3>
              <p className="text-slate-600 leading-relaxed">
                Our pressure housings are formed from premium 8-gauge steel, providing superior burst strength and resistance to road debris impacts compared to standard 9-gauge or 11-gauge alternatives.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <Droplet className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Advanced Neoprene Rubber</h3>
              <p className="text-slate-600 leading-relaxed">
                Our diaphragms are molded from advanced neoprene rubber compounds reinforced with high-strength nylon fabric. They maintain extreme flexibility in -40°F cold and resist degradation in high heat.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <Shield className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Dual-Layer Corrosion Defense</h3>
              <p className="text-slate-600 leading-relaxed">
                We utilize a multi-stage cathodic electrodeposition (E-coat) followed by heavy epoxy coatings on our internal return springs and housing interiors to prevent rust flaking, the #1 cause of center seal failure.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <Zap className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Machined Push-Rods</h3>
              <p className="text-slate-600 leading-relaxed">
                Our push-rods are CNC machined from high-tensile steel to guarantee perfect linearity, preventing the binding and uneven wear that destroys center seals in inferior designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-white py-16 border-t border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">Verified by Global Standards</h2>
          <Link href="/company/iso-certifications" className="inline-flex items-center text-primary-500 font-bold hover:text-primary-400 transition-colors uppercase tracking-widest text-lg">
            View ISO Certifications <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

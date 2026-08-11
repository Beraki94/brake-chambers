import React from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import type { Metadata } from 'next';
import { ShieldCheck, Target, Factory, Users, Truck, Globe, Award, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About BRC | ISO 9001 Certified Commercial Brake Manufacturer',
  description: 'Learn about BRC, a leading manufacturer of heavy-duty commercial air brake chambers, air disc actuators, and accessories. ISO 9001 certified.',
};

import PageHeader from '@/components/PageHeader';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        badge={<><Award className="w-4 h-4 inline-block -mt-0.5" /> ISO 9001:2015 Certified</>}
        title="Engineered for the Long Haul"
        description="BRC is a premier global manufacturer of heavy-duty commercial air brake chambers, air disc actuators, and brake accessories. We don't just assemble parts; we engineer safety."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">About BRC</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      {/* Stats/Highlight Bar */}
      <div className="bg-amber-500 shadow-lg relative z-20 -mt-8 mx-4 sm:mx-auto max-w-5xl rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-4 border border-amber-400">
        <div className="text-center">
          <div className="text-4xl font-extrabold text-navy-900 mb-1">1M+</div>
          <div className="text-sm font-bold text-navy-800 uppercase tracking-wide">Cycles Tested</div>
        </div>
        <div className="hidden sm:block w-px h-12 bg-amber-400"></div>
        <div className="text-center">
          <div className="text-4xl font-extrabold text-navy-900 mb-1">ISO 9001</div>
          <div className="text-sm font-bold text-navy-800 uppercase tracking-wide">Certified Quality</div>
        </div>
        <div className="hidden sm:block w-px h-12 bg-amber-400"></div>
        <div className="text-center">
          <div className="text-4xl font-extrabold text-navy-900 mb-1">50+</div>
          <div className="text-sm font-bold text-navy-800 uppercase tracking-wide">Countries Supplied</div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-20 max-w-7xl space-y-24">
        
        {/* Manufacturing Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mb-6">
              <Factory className="w-6 h-6 text-navy-900" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-6">Direct from the Manufacturer</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Unlike distributors who simply rebox products, BRC owns the entire manufacturing process. From sourcing high-grade 8-gauge steel to the final epoxy coating, we maintain complete oversight of our production lines.
              </p>
              <p>
                This vertical integration allows us to offer OEM-level quality at direct-to-market prices. We proudly supply commercial fleets, trailer builders, and aftermarket distributors worldwide with drop-in replacements for Bendix, Meritor, and Haldex systems.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="font-bold text-navy-900 mb-2">Quality Control</h3>
              <p className="text-sm text-slate-500">Every chamber undergoes strict pressure and cycle testing before boxing.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 translate-y-8">
              <Target className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-bold text-navy-900 mb-2">Precision Engineering</h3>
              <p className="text-sm text-slate-500">Machined push-rods and heavy-duty center seals guarantee linear force.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Truck className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-navy-900 mb-2">Fleet Ready</h3>
              <p className="text-sm text-slate-500">Designed to withstand the harsh realities of over-the-road hauling.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 translate-y-8">
              <Globe className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-bold text-navy-900 mb-2">Global Scale</h3>
              <p className="text-sm text-slate-500">Capable of fulfilling massive container-load orders for global distributors.</p>
            </div>
          </div>
        </div>

        {/* The BRC Difference */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-navy-900 mb-4">The BRC Difference</h2>
            <p className="text-slate-600 text-lg">We don't cut corners. Our brake chambers are built to exceed SAE (Society of Automotive Engineers) and DOT specifications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-navy-900 text-xl mb-3 border-b-2 border-amber-500 pb-2 inline-block">Premium Diaphragms</h4>
              <p className="text-slate-600">Our diaphragms are molded from advanced neoprene rubber compounds and reinforced with high-strength nylon fabric. They maintain flexibility in extreme -40°F cold and resist degradation in high heat.</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-900 text-xl mb-3 border-b-2 border-amber-500 pb-2 inline-block">Corrosion Defenses</h4>
              <p className="text-slate-600">We utilize heavy epoxy coatings on our internal return springs and housing interiors to prevent rust flaking, which is the #1 cause of center seal failure in commercial air brakes.</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-900 text-xl mb-3 border-b-2 border-amber-500 pb-2 inline-block">Heavy-Gauge Steel</h4>
              <p className="text-slate-600">While competitors thin their housings to save weight, BRC utilizes heavy-gauge steel construction to resist rock strikes, vibration fatigue, and the immense torsional forces of heavy braking.</p>
            </div>
          </div>
        </div>

        {/* Our Story Timeline */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-navy-900 mb-4">Our Story</h2>
            <p className="text-slate-600 text-lg">Decades of manufacturing excellence built on a foundation of unyielding quality.</p>
          </div>
          
          <div className="relative border-l-4 border-amber-500 ml-6 md:ml-0 md:border-l-0">
            <div className="md:hidden absolute top-0 bottom-0 left-[-4px] w-1 bg-amber-500"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 bg-amber-500 rounded-full"></div>
              
              <div className="relative flex flex-col md:flex-row items-center md:justify-between w-full md:even:flex-row-reverse group">
                <div className="absolute left-[-34px] md:left-1/2 md:-ml-[15px] w-8 h-8 rounded-full bg-white border-4 border-amber-500 z-10 shadow-md"></div>
                <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 ml-6 md:ml-0">
                  <span className="text-amber-500 font-bold text-sm tracking-widest uppercase block mb-2">The Beginning</span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Founding BRC Engineering</h3>
                  <p className="text-slate-600 text-sm">Founded with a vision to eliminate the compromises found in aftermarket air brake chambers. We started by reverse-engineering the most common failure points in commercial transport.</p>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:justify-between w-full flex-row-reverse md:flex-row group md:mt-12">
                <div className="absolute left-[-34px] md:left-1/2 md:-ml-[15px] w-8 h-8 rounded-full bg-white border-4 border-amber-500 z-10 shadow-md"></div>
                <div className="hidden md:block md:w-5/12"></div>
                <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 ml-6 md:ml-0">
                  <span className="text-amber-500 font-bold text-sm tracking-widest uppercase block mb-2">Expansion</span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">ISO 9001 Certification</h3>
                  <p className="text-slate-600 text-sm">Achieved rigorous international quality management certification, standardizing our testing protocols and unlocking global OEM distribution channels.</p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:justify-between w-full md:even:flex-row-reverse group md:mt-12">
                <div className="absolute left-[-34px] md:left-1/2 md:-ml-[15px] w-8 h-8 rounded-full bg-white border-4 border-amber-500 z-10 shadow-md"></div>
                <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 ml-6 md:ml-0">
                  <span className="text-amber-500 font-bold text-sm tracking-widest uppercase block mb-2">Today</span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Global Scale</h3>
                  <p className="text-slate-600 text-sm">Today, BRC supplies heavy-duty brake systems to fleets across 50+ countries. We continue to innovate with next-generation Air Disc Brake (ADB) technologies and advanced metallurgical alloys.</p>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CTA Section */}
      <div className="bg-navy-950 py-20 border-t border-navy-800">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Partner With a Proven Manufacturer</h2>
          <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need a custom OEM solution, private labeling, or a container of replacement chambers for your distribution network, BRC delivers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/quote" className="w-full sm:w-auto bg-amber-500 text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2">
              Request Wholesale Quote
            </Link>
            <Link href="/products" className="w-full sm:w-auto bg-navy-800 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-navy-700 transition-colors flex items-center justify-center gap-2">
              View Our Catalog <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <BreadcrumbSchema items={[{ name: 'About BRC' }]} />
    </div>
  );
}

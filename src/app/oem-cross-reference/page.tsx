import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Settings, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import OEMSearchForm from '@/components/OEMSearchForm';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'OEM Cross-Reference Tool | BRC Brake Chambers',
  description: 'Instantly find BRC factory-direct aftermarket equivalents for Bendix, Haldex, Meritor, and Wabco brake chambers. Free commercial air brake cross-reference.',
  keywords: ['Brake Chamber Cross Reference', 'Bendix Interchange', 'Haldex Replacement', 'Meritor Cross Reference', 'Wabco Air Brakes', 'MGM Brakes'],
};

export default function OEMCrossReference() {
  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Hero Section */}
      <PageHeader
        badge="Digital Engineering Tool"
        title="OEM Cross-Reference Database"
        description="Instantly map competitor part numbers to our direct aftermarket equivalents. Engineered for exact fitment, guaranteed performance, and substantial cost savings."
      >
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mt-6">
          {['Bendix', 'Haldex', 'Meritor', 'Wabco', 'MGM'].map((brand) => (
            <div key={brand} className="bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2.5 rounded-lg text-white font-extrabold tracking-widest text-[12px] uppercase flex items-center shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              {brand}
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Main Search Interface (Pulled up to overlap hero) */}
      <section className="relative z-20 -mt-20 container mx-auto px-4 lg:px-8 max-w-5xl mb-16">
        <OEMSearchForm />
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-heading tracking-tight">Browse by Category</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              Select your OEM brand, vehicle manufacturer, or suspension type to find guaranteed compatible aftermarket brake chambers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Major Brake Brands */}
            <div className="bg-white rounded-2xl shadow-sm border-2 border-amber-100 p-8 flex flex-col h-full hover:border-amber-300 transition-colors">
              <h3 className="text-xl font-extrabold text-navy-900 mb-6 flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-amber-500" /> Brake Brands</h3>
              <ul className="space-y-3 mt-auto">
                <li><Link href="/oem-cross-reference/bendix" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-amber-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Bendix Equivalents <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-amber-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/haldex" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-amber-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Haldex Equivalents <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-amber-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/meritor" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-amber-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Meritor Equivalents <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-amber-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/mgm" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-amber-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">MGM Equivalents <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-amber-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/tse-brakes" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-amber-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">TSE Equivalents <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-amber-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
              </ul>
            </div>

            {/* Truck Manufacturers */}
            <div className="bg-white rounded-2xl shadow-sm border-2 border-blue-100 p-8 flex flex-col h-full hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-extrabold text-navy-900 mb-6 flex items-center gap-3"><Settings className="w-6 h-6 text-blue-500" /> Truck Brands</h3>
              <ul className="space-y-3 mt-auto">
                <li><Link href="/oem-cross-reference/freightliner" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-blue-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Freightliner Replacements <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/peterbilt" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-blue-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Peterbilt Replacements <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/kenworth" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-blue-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Kenworth Replacements <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/volvo-mack" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-blue-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Volvo / Mack Replacements <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/navistar" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-blue-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Navistar Replacements <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
              </ul>
            </div>

            {/* Axle & Suspension */}
            <div className="bg-white rounded-2xl shadow-sm border-2 border-emerald-100 p-8 flex flex-col h-full hover:border-emerald-300 transition-colors">
              <h3 className="text-xl font-extrabold text-navy-900 mb-6 flex items-center gap-3"><Settings className="w-6 h-6 text-emerald-500" /> Axle & Suspension</h3>
              <ul className="space-y-3 mt-auto">
                <li><Link href="/oem-cross-reference/hendrickson" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-emerald-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Hendrickson Applications <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-emerald-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/saf-holland" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-emerald-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">SAF-Holland Applications <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-emerald-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/dana" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-emerald-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Dana Axle Applications <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-emerald-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/meritor-axles" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-emerald-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Meritor Axle Applications <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-emerald-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
              </ul>
            </div>

            {/* Interchange Tools */}
            <div className="bg-white rounded-2xl shadow-sm border-2 border-purple-100 p-8 flex flex-col h-full hover:border-purple-300 transition-colors">
              <h3 className="text-xl font-extrabold text-navy-900 mb-6 flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-purple-500" /> Interchange Tools</h3>
              <ul className="space-y-3 mt-auto">
                <li><Link href="/oem-cross-reference/part-search" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-purple-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Part Number Search <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-purple-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/visual-guide" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-purple-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Visual Identification Guide <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-purple-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/database" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-purple-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Full Interchange Database <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-purple-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
                <li><Link href="/oem-cross-reference/request" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-purple-600 transition-colors group/link border border-slate-100 font-bold text-navy-900 text-sm">Request a Cross-Match <ArrowRight className="w-4 h-4 text-slate-400 group-hover/link:text-purple-600 group-hover/link:translate-x-1 transition-all" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / How it Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-heading tracking-tight">Why Use Factory-Direct Replacements?</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              Consolidating your sourcing directly with the manufacturer ensures you get uncompromised quality without the brand markup. Every BRC chamber matches or exceeds OEM specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-50 group-hover:scale-110 transition-all duration-300">
                <Settings className="w-8 h-8 text-navy-900 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-3">Exact Fitment</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Our chambers use identical mounting hardware, pushrod lengths, and port angles. It's a true drop-in replacement with zero modifications required.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-navy-900 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-3">ISO 9001 Certified</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Produced in our state-of-the-art facility. Every unit undergoes 100% pneumatic leak and cycle testing before shipping to your fleet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-50 group-hover:scale-110 transition-all duration-300">
                <CheckCircle2 className="w-8 h-8 text-navy-900 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-3">Cost Reduction</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                By purchasing aftermarket equivalents factory-direct, fleet managers and distributors average a 25-40% reduction in replacement costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Sourcing Call to Action */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-navy-900/30">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-heading">Bulk Sourcing & OEM Engineering</h2>
              <p className="text-navy-200 mb-10 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Can't find your specific part number in the tool? We provide direct factory manufacturing and can reverse-engineer or customize brake chambers to your fleet's exact specifications.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 text-navy-950 font-extrabold px-10 py-4 rounded-xl hover:from-amber-300 hover:to-amber-500 transition-all shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 uppercase tracking-widest text-[13px]"
              >
                Contact Engineering Team <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <Script id="cross-reference-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "BRC Brake Chamber Cross-Reference Tool",
          "operatingSystem": "Web",
          "applicationCategory": "BusinessApplication",
          "description": "Find aftermarket equivalents for major commercial air brake brands including Bendix, Haldex, Meritor, Wabco, and MGM.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "provider": {
            "@type": "Organization",
            "name": "BRC Brake Chambers"
          }
        }
      ) }} />
    </div>
  );
}

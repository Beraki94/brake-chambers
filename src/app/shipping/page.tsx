import React from 'react';
import Link from 'next/link';
import { ArrowRight, Ship, Truck, Globe2, Anchor, Package, FileText, CheckCircle2 } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Global Logistics | BRC Brake Chambers',
  description: 'Global logistics and shipping information for bulk brake chambers. FCL container optimization, ISPM-15 packaging, and reliable supply chain.',
};

export default function ShippingPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      <section className="bg-navy-950 relative pt-24 pb-36 border-b border-navy-800 overflow-hidden text-center px-4">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -ml-40 -mb-40 mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-navy-900 border border-navy-700 shadow-xl shadow-navy-950 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
            <Globe2 className="w-4 h-4 mr-2" /> Global Logistics
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 drop-shadow-lg leading-tight tracking-tight">Factory to <span className="text-amber-400">Doorstep.</span></h1>
          <p className="text-navy-200 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            We operate a seamless, globally integrated supply chain. From EXW factory floor to CIF at your destination port, our logistics team handles the complexities so you don't have to.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 max-w-screen-2xl -mt-20 relative z-20">
        
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Card padding="md" className="-slate-100 text-center">
            <h4 className="text-3xl font-black text-navy-900 mb-1">100+</h4>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Countries Shipped</p>
          </Card>
          <Card padding="md" className="-slate-100 text-center">
            <h4 className="text-3xl font-black text-navy-900 mb-1">20-35</h4>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Days to Americas</p>
          </Card>
          <Card padding="md" className="-slate-100 text-center">
            <h4 className="text-3xl font-black text-navy-900 mb-1">ISPM-15</h4>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Treated Pallets</p>
          </Card>
          <Card padding="md" className="-slate-100 text-center">
            <h4 className="text-3xl font-black text-amber-500 mb-1">Zero</h4>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Dead Container Space</p>
          </Card>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-navy-50 p-8 md:p-16 text-navy-600 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -mr-20 -mt-20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Column */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                    <Ship className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-navy-900">Freight Volumes</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6 font-light">We engineer our pallets to maximize spatial efficiency within standard ISO shipping containers. You never pay to ship dead air.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <div>
                      <strong className="text-navy-900 block text-lg">FCL (Full Container Load)</strong>
                      <span className="text-slate-600 font-light">Best value for bulk orders. Available in 20ft and 40ft HQ containers. We use specialized loading software to calculate the absolute maximum number of chambers per container without risking crush damage.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <div>
                      <strong className="text-navy-900 block text-lg">LCL (Less than Container Load)</strong>
                      <span className="text-slate-600 font-light">Consolidated pallet shipments designed for smaller distributors restocking high-velocity SKUs.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-600">
                    <Package className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-navy-900">Export Packaging</h2>
                </div>
                <p className="text-lg leading-relaxed font-light">
                  All brake chambers are securely packaged on heat-treated wooden pallets strictly compliant with ISPM-15 international standards. Pallets are double shrink-wrapped, corner-protected, and steel-strapped to ensure absolute zero movement and zero damage during rough ocean transit. Custom retail cartons are also available for Private Label customers.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-navy-900">Incoterms & Customs</h2>
                </div>
                <p className="text-lg leading-relaxed font-light mb-6">We support all standard international trade terms. If you lack a dedicated freight forwarder, our in-house export department handles the entire booking process seamlessly.</p>
                <Card padding="md" className="-slate-100 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="font-bold text-navy-900">EXW</span>
                    <span className="text-slate-600">Ex Works (Factory pickup)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="font-bold text-navy-900">FOB</span>
                    <span className="text-slate-600">Free on Board (Shanghai/Ningbo)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-navy-900">CIF/DDP</span>
                    <span className="text-slate-600">Cost & Freight / Delivered</span>
                  </div>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-navy-900">Transit Lead Times</h2>
                </div>
                <p className="text-lg leading-relaxed font-light mb-6">
                  Standard manufacturing lead times are 30 days. Once loaded, estimated ocean transit times are highly predictable:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                    <span className="font-bold text-navy-900">North & South America</span>
                    <span className="text-amber-600 font-bold">20 - 35+ days</span>
                  </li>
                  <li className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                    <span className="font-bold text-navy-900">Europe</span>
                    <span className="text-amber-600 font-bold">25 - 35 days</span>
                  </li>
                  <li className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                    <span className="font-bold text-navy-900">Asia & Middle East</span>
                    <span className="text-amber-600 font-bold">10 - 18 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-16 text-center shadow-inner border border-slate-200 mb-20">
          <h3 className="text-3xl font-black text-navy-900 mb-6 tracking-tight">Need a Logistics Quote?</h3>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto font-light">
            Contact our export team today. Tell us your port of destination and estimated volume, and we will calculate the exact CIF pricing for your order.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-black px-10 py-5 rounded-xl hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[13px]">
            Request Freight Quote <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>

      </section>
    </div>
  );
}

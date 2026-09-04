import React from 'react';
import Link from 'next/link';
import { ArrowRight, Ship, Truck, Globe2, Anchor, Package, FileText, CheckCircle2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';

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
          <SectionHeader
            badge={<><Globe2 className="w-3.5 h-3.5 mr-2 inline-block relative -top-[1px]" /> Global Logistics</>}
            title={<>Factory to <span className="text-amber-400">Doorstep.</span></>}
            description="We operate a seamless, globally integrated supply chain. From EXW factory floor to CIF at your destination port, our logistics team handles the complexities so you don't have to."
            align="center"
            theme="dark"
            accentColor="amber"
            asH1={true}
            className="!mb-0"
          />
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
                <SectionHeader
                  badge={<><Ship className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Volume</>}
                  title="Freight Volumes"
                  description="We engineer our pallets to maximize spatial efficiency within standard ISO shipping containers. You never pay to ship dead air."
                  align="left"
                  theme="light"
                  accentColor="amber"
                  plainText={true}
                  className="!mb-6"
                />
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
                <SectionHeader
                  badge={<><Package className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Packaging</>}
                  title="Export Packaging"
                  description="All brake chambers are securely packaged on heat-treated wooden pallets strictly compliant with ISPM-15 international standards. Pallets are double shrink-wrapped, corner-protected, and steel-strapped to ensure absolute zero movement and zero damage during rough ocean transit. Custom retail cartons are also available for Private Label customers."
                  align="left"
                  theme="light"
                  accentColor="navy"
                  plainText={true}
                  className="!mb-6"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div>
                <SectionHeader
                  badge={<><Anchor className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Trade Terms</>}
                  title="Incoterms & Customs"
                  description="We support all standard international trade terms. If you lack a dedicated freight forwarder, our in-house export department handles the entire booking process seamlessly."
                  align="left"
                  theme="light"
                  accentColor="emerald"
                  plainText={true}
                  className="!mb-6"
                />
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
                <SectionHeader
                  badge={<><Truck className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Schedule</>}
                  title="Transit Lead Times"
                  description="Standard manufacturing lead times are 30 days. Once loaded, estimated ocean transit times are highly predictable:"
                  align="left"
                  theme="light"
                  accentColor="navy"
                  plainText={true}
                  className="!mb-6"
                />
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
          <SectionHeader
            title="Need a Logistics Quote?"
            description="Contact our export team today. Tell us your port of destination and estimated volume, and we will calculate the exact CIF pricing for your order."
            align="center"
            theme="light"
            accentColor="amber"
            plainText={true}
            className="!mb-10"
          />
          <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-black px-10 py-5 rounded-xl hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[13px]">
            Request Freight Quote <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>

      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Ship, Truck, Anchor, Package, CheckCircle2, MapPin, Globe2, ShieldCheck, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';

export const metadata = {
  title: 'Global Logistics | BRC Brake Chambers',
  description: 'Global logistics and shipping information for bulk brake chambers. FCL container optimization, ISPM-15 packaging, and reliable supply chain.',
};

export default function ShippingPage() {
  return (
    <article className="bg-[#F8FAFC] pb-12 md:pb-20 overflow-x-clip font-sans" itemScope itemType="https://schema.org/WebPage">
      
      {/* 1. PAGE HEADER */}
      <PageHeader
        badge="Supply Chain"
        title="Factory to Doorstep."
        description="We operate a seamless, globally integrated supply chain. From EXW factory floor to CIF at your destination port, our logistics team handles the complexities so you don't have to."
        imageSrc="/images/shipping_cargo.png" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Global Logistics' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl relative z-20 -mt-16 md:-mt-24 lg:-mt-32">
        
        {/* 2. QUICK STATS GRID */}
        <section aria-label="Logistics Statistics" className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
          <Card padding="md" className="bg-white border-slate-100 shadow-xl shadow-navy-900/5 text-center transform transition-all duration-300 hover:-translate-y-1">
            <Globe2 className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-black text-navy-900 mb-1">100+</div>
            <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider">Countries Shipped</p>
          </Card>
          <Card padding="md" className="bg-white border-slate-100 shadow-xl shadow-navy-900/5 text-center transform transition-all duration-300 hover:-translate-y-1">
            <Clock className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-black text-navy-900 mb-1">20-35</div>
            <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider">Days to Americas</p>
          </Card>
          <Card padding="md" className="bg-white border-slate-100 shadow-xl shadow-navy-900/5 text-center transform transition-all duration-300 hover:-translate-y-1">
            <ShieldCheck className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-black text-navy-900 mb-1">ISPM-15</div>
            <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider">Treated Pallets</p>
          </Card>
          <Card padding="md" className="bg-white border-slate-100 shadow-xl shadow-navy-900/5 text-center transform transition-all duration-300 hover:-translate-y-1">
            <Package className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-black text-navy-900 mb-1">Zero</div>
            <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider">Dead Container Space</p>
          </Card>
        </section>

        {/* 3. GLOBAL LOGISTICS MAP (Full-Width Card) */}
        <section aria-labelledby="map-heading" className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl shadow-navy-900/5 border border-slate-100 mb-12 md:mb-16 overflow-hidden">
          <div className="p-6 md:p-10 text-center">
            <SectionHeader
              badge="Global Logistics Map"
              title={<span id="map-heading">Our Worldwide Routes</span>}
              description="Visualizing our active shipping lanes from the factory directly to international distribution hubs."
              align="center"
              theme="light"
              accentColor="amber"
              plainText={true}
              className="!mb-0"
            />
          </div>
          
          {/* Map Image expanding edge-to-edge inside the card */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-slate-50 border-t border-slate-100">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
          </div>
        </section>

        {/* 4. DISTRIBUTION NETWORK HUBS */}
        <section aria-labelledby="hubs-heading" className="bg-navy-950 -mx-4 sm:mx-0 rounded-none sm:rounded-[2rem] md:rounded-[3rem] px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 mb-12 md:mb-20 relative overflow-hidden shadow-2xl shadow-navy-900/20 border-y sm:border border-navy-800">
          
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity grayscale"></div>
          {/* Subtle Modern Dot Grid Background */}
          <AnimatedGridBackground opacity={0.08} />
          {/* Fade out masks to make the grid blend smoothly into the dark section */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Header Centered for better span */}
            <div className="max-w-3xl mx-auto mb-6 md:mb-10">
              <SectionHeader
                badge="Global Reach"
                title={<span id="hubs-heading">Distribution <span className="text-amber-500">Network</span></span>}
                description="Our shipping lines connect our manufacturing facility directly to major distribution hubs across the Americas, Europe, and Asia. We navigate global customs and routing with precision."
                theme="dark"
                accentColor="amber"
                align="center"
                plainText={true}
                className="!mb-0"
              />
            </div>
            
            {/* Full Width Grid for Hubs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="flex flex-col items-center text-center gap-4 bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 p-6 md:p-8 rounded-xl shadow-lg group hover:bg-navy-800 transition-all duration-300 transform hover:-translate-y-1 hover:border-amber-500/50">
                <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center border border-navy-800 shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-all duration-300 mb-1">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <strong className="text-white block font-extrabold text-lg tracking-widest mb-2 group-hover:text-amber-400 transition-colors drop-shadow-md">Americas</strong>
                  <span className="text-navy-300 text-sm leading-relaxed">Long Beach, LA<br/>Houston, New York</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 p-6 md:p-8 rounded-xl shadow-lg group hover:bg-navy-800 transition-all duration-300 transform hover:-translate-y-1 hover:border-amber-500/50">
                <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center border border-navy-800 shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-all duration-300 mb-1">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <strong className="text-white block font-extrabold text-lg tracking-widest mb-2 group-hover:text-amber-400 transition-colors drop-shadow-md">Europe</strong>
                  <span className="text-navy-300 text-sm leading-relaxed">Rotterdam<br/>Hamburg, Antwerp</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 p-6 md:p-8 rounded-xl shadow-lg group hover:bg-navy-800 transition-all duration-300 transform hover:-translate-y-1 hover:border-amber-500/50">
                <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center border border-navy-800 shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-all duration-300 mb-1">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <strong className="text-white block font-extrabold text-lg tracking-widest mb-2 group-hover:text-amber-400 transition-colors drop-shadow-md">Middle East</strong>
                  <span className="text-navy-300 text-sm leading-relaxed">Jebel Ali<br/>Jeddah, Dammam</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 p-6 md:p-8 rounded-xl shadow-lg group hover:bg-navy-800 transition-all duration-300 transform hover:-translate-y-1 hover:border-amber-500/50">
                <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center border border-navy-800 shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-all duration-300 mb-1">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <strong className="text-white block font-extrabold text-lg tracking-widest mb-2 group-hover:text-amber-400 transition-colors drop-shadow-md">Oceania</strong>
                  <span className="text-navy-300 text-sm leading-relaxed">Sydney, Melbourne<br/>Brisbane, Auckland</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 5. ZIG-ZAG LOGISTICS DETAILS SECTION (Full Bleed Background) */}
      <section aria-label="Logistics Details" className="w-full bg-white border-y border-slate-200 py-12 md:py-24 mb-12 md:mb-20 relative overflow-hidden text-navy-600">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl relative z-10 space-y-16 md:space-y-20">
          
          {/* Row 1: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 border border-slate-200 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <SectionHeader
                  badge={<><Ship className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Volume</>}
                  title="Freight Volumes"
                  description="We engineer our pallets to maximize spatial efficiency within standard ISO shipping containers. You never pay to ship dead air."
                  align="left"
                  theme="light"
                  accentColor="amber"
                  plainText={true}
                  className="!mb-6 lg:!mb-8"
                />
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="mt-1 bg-emerald-100 p-1.5 rounded-full shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <strong className="text-navy-900 block text-lg mb-1">FCL (Full Container Load)</strong>
                      <span className="text-slate-600 font-light leading-relaxed">Best value for bulk orders. Available in 20ft and 40ft HQ containers. We use specialized loading software to calculate the absolute maximum number of chambers per container without risking crush damage.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="mt-1 bg-emerald-100 p-1.5 rounded-full shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <strong className="text-navy-900 block text-lg mb-1">LCL (Less than Container Load)</strong>
                      <span className="text-slate-600 font-light leading-relaxed">Consolidated pallet shipments designed for smaller distributors restocking high-velocity SKUs.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <SectionHeader
                  badge={<><Package className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Packaging</>}
                  title="Export Packaging"
                  description="All brake chambers are securely packaged on heat-treated wooden pallets strictly compliant with ISPM-15 international standards. Pallets are double shrink-wrapped, corner-protected, and steel-strapped to ensure absolute zero movement and zero damage during rough ocean transit. Custom retail cartons are also available for Private Label customers."
                  align="left"
                  theme="light"
                  accentColor="amber"
                  plainText={true}
                  className="!mb-0"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-1 lg:order-1 space-y-12">
              <div>
                <SectionHeader
                  badge={<><Anchor className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Trade Terms</>}
                  title="Incoterms & Customs"
                  description="We support all standard international trade terms. If you lack a dedicated freight forwarder, our in-house export department handles the entire booking process seamlessly."
                  align="left"
                  theme="light"
                  accentColor="amber"
                  plainText={true}
                  className="!mb-6 lg:!mb-8"
                />
                <Card padding="md" className="bg-slate-50 border-slate-100 shadow-sm space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                    <span className="font-black text-navy-900 tracking-wide">EXW</span>
                    <span className="text-slate-600 font-medium">Ex Works (Factory pickup)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                    <span className="font-black text-navy-900 tracking-wide">FOB</span>
                    <span className="text-slate-600 font-medium">Free on Board (Shanghai/Ningbo)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-navy-900 tracking-wide">CIF/DDP</span>
                    <span className="text-slate-600 font-medium">Cost & Freight / Delivered</span>
                  </div>
                </Card>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <SectionHeader
                  badge={<><Truck className="w-3.5 h-3.5 inline-block mr-1.5 relative -top-[1px]" /> Schedule</>}
                  title="Transit Lead Times"
                  description="Standard manufacturing lead times are 30 days. Once loaded, estimated ocean transit times are highly predictable:"
                  align="left"
                  theme="light"
                  accentColor="amber"
                  plainText={true}
                  className="!mb-6"
                />
                <ul className="space-y-3">
                  <li className="flex items-center justify-between bg-white border border-slate-100 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-bold text-navy-900">North & South America</span>
                    <span className="text-amber-600 font-black">20 - 35+ days</span>
                  </li>
                  <li className="flex items-center justify-between bg-white border border-slate-100 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-bold text-navy-900">Europe</span>
                    <span className="text-amber-600 font-black">25 - 35 days</span>
                  </li>
                  <li className="flex items-center justify-between bg-white border border-slate-100 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-bold text-navy-900">Asia & Middle East</span>
                    <span className="text-amber-600 font-black">10 - 18 days</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="order-2 lg:order-2 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 border border-slate-200 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412519320-ce68f51152d0?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section aria-labelledby="cta-heading" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl relative z-20 pb-12">
        <div className="bg-[#F1EFE8] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 text-center shadow-sm border border-slate-200">
          <SectionHeader
            title={<span id="cta-heading">Need a Logistics Quote?</span>}
            description="Contact our export team today. Tell us your port of destination and estimated volume, and we will calculate the exact CIF pricing for your order."
            align="center"
            theme="light"
            accentColor="amber"
            plainText={true}
            className="!mb-8 md:!mb-10 max-w-2xl mx-auto"
          />
          <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-black px-8 md:px-12 py-4 md:py-5 rounded-xl hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] w-full sm:w-auto">
            Request Freight Quote <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </section>

    </article>
  );
}

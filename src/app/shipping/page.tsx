import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Shipping & Delivery | BRC Brake Chambers',
  description: 'Global logistics and shipping information for bulk brake chambers.',
};

export default function ShippingPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      <section className="bg-navy-950 relative pt-20 pb-36 border-b border-navy-800 overflow-hidden text-center px-4">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -ml-40 -mb-40 mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy-900 border border-navy-700 shadow-xl shadow-navy-950 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
            Global Logistics
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">Shipping & Logistics</h1>
          <p className="text-navy-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We handle everything from EXW factory floor to CIF at your destination port. Global FCL, LCL, and Air Freight Solutions.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 max-w-4xl -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-navy-50 p-8 md:p-12 space-y-8 text-navy-600">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
              1. Freight Volumes
            </h2>
            <p className="mb-4">We accommodate various shipment sizes to meet your inventory needs:</p>
            <ul className="list-disc pl-6 space-y-2">
               <li><strong className="text-navy-800">FCL (Full Container Load):</strong> Best value for bulk orders. Available in 20ft and 40ft HQ containers.</li>
               <li><strong className="text-navy-800">LCL (Less than Container Load):</strong> Consolidated pallet shipments for smaller distributor restocking.</li>
               <li><strong className="text-navy-800">Air Freight:</strong> Available for urgent OEM production line shortages or sample evaluation.</li>
            </ul>
          </div>
          <div className="h-px w-full bg-slate-100"></div>
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              2. Incoterms & Ports
            </h2>
            <p>We support standard Incoterms for international trade, primarily <strong>EXW</strong>, <strong>FOB (Shanghai / Ningbo)</strong>, and <strong>CIF</strong> to your destination port. If you do not have a dedicated logistics partner, our expert export department can arrange reliable freight forwarders to handle customs clearance and delivery to your warehouse door. <Link href="/contact" className="text-amber-600 font-bold hover:underline">Contact us to arrange shipping.</Link></p>
          </div>
          <div className="h-px w-full bg-slate-100"></div>
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              3. Packaging Standards
            </h2>
            <p>All brake chambers are securely packaged on heat-treated wooden pallets (ISPM-15 compliant), shrink-wrapped, and strapped to ensure zero damage during ocean transit. Custom OEM packaging, private label stamping, and branded cartons are available upon request for full container orders.</p>
          </div>
          <div className="h-px w-full bg-slate-100"></div>
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              4. Lead Times & Transit
            </h2>
            <p>Standard manufacturing lead times range from 15 to 30 days depending on the current production queues. Estimated ocean transit times:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
               <li>Asia & Middle East: 10 - 18 days</li>
               <li>Europe: 25 - 35 days</li>
               <li>North & South America: 20 - 35+ days</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

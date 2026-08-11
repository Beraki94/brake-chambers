import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Warranty | BRC Brake Chambers',
  description: 'Factory warranty information for our commercial vehicle air brakes.',
};

export default function WarrantyPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      <section className="bg-navy-950 relative pt-20 pb-36 border-b border-navy-800 overflow-hidden text-center px-4">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -ml-40 -mb-40 mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy-900 border border-navy-700 shadow-xl shadow-navy-950 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
            Quality Assurance
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">Warranty & Quality Assurance</h1>
          <p className="text-navy-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            ISO 9001 Certified Manufacturing. Every chamber is 100% leak-tested and stroke-tested at our facility before leaving the factory line.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 max-w-4xl -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-navy-50 p-8 md:p-12 space-y-8 text-navy-600">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Standard Warranty</h2>
            <p>BRC Brake Chambers provides a standard 1-year factory warranty on all spring and service brake assemblies against manufacturing defects in materials and workmanship, under normal heavy-duty use.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Quality Control</h2>
            <p>Every chamber is 100% leak-tested and stroke-tested at our ISO 9001 certified facility before leaving the factory line, ensuring perfect sealing and structural integrity.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Claims Process</h2>
            <p>If a batch contains defective units, distributors must <Link href="/contact" className="text-amber-600 font-bold hover:underline">contact support</Link> to provide video and photographic evidence of the defect along with the batch serial number. We will issue replacements in your next container shipment or provide credit notes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

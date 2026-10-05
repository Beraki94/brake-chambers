import React from 'react';
import { Truck, Factory, ShieldCheck, FileCheck } from 'lucide-react';
import BulkInquiriesForm from './BulkInquiriesForm';

export const metadata = {
  title: 'Bulk Sourcing & OEM/ODM | BRC Brake Chambers',
  description: 'Direct factory manufacturing for custom brake chambers and large fleets.',
};

export default function BulkInquiriesPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      <section className="bg-navy-900 pt-20 pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Bulk Sourcing & OEM/ODM</h1>
          <p className="text-navy-200 text-lg md:text-xl leading-relaxed">
            Partner directly with our factory operating to IATF 16949 standards for high-volume custom manufacturing, private labeling, and exclusive distribution agreements.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-navy-50 p-8 flex gap-4">
              <Factory className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-navy-900 mb-1">Custom Manufacturing</h3>
                <p className="text-sm text-navy-600">Special stroke lengths, custom port alignments, and bespoke spring force ratings.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md border border-navy-50 p-8 flex gap-4">
              <FileCheck className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-navy-900 mb-1">Private Labeling</h3>
                <p className="text-sm text-navy-600">Custom paint, etched logos, and branded packaging for your distribution network.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md border border-navy-50 p-8 flex gap-4">
              <ShieldCheck className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-navy-900 mb-1">IATF 16949 Compliance</h3>
                <p className="text-sm text-navy-600">Rigorous audit trails, material certifications, and batch testing provided for every container.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-navy-50 p-8 md:p-12">
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Submit an OEM/ODM Inquiry</h2>
            <BulkInquiriesForm />
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Truck, Factory, ShieldCheck, FileCheck } from 'lucide-react';

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
            Partner directly with our ISO 9001 factory for high-volume custom manufacturing, private labeling, and exclusive distribution agreements.
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
                <h3 className="font-bold text-navy-900 mb-1">ISO 9001 Compliance</h3>
                <p className="text-sm text-navy-600">Rigorous audit trails, material certifications, and batch testing provided for every container.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-navy-50 p-8 md:p-12">
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Submit an OEM/ODM Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Company Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="e.g. Global Truck Parts LLC" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Contact Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Annual Volume (Units)</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 text-navy-700">
                    <option>1,000 - 5,000</option>
                    <option>5,000 - 20,000</option>
                    <option>20,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Engineering / Customization Requirements</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="Please describe the specifications required, including any OEM part numbers for reference..."></textarea>
              </div>
              <button type="button" className="w-full bg-amber-500 text-navy-900 font-extrabold text-lg py-4 rounded-xl hover:bg-amber-400 shadow-lg shadow-amber-500/30 transition-all active:scale-[0.98]">
                Send Request to Engineering
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | BRC Brake Chambers',
  description: 'Get in touch with our global sales and technical support team.',
};

import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      <PageHeader 
        badge="Sales & Support"
        title="Contact BRC Global Sales"
        description="Ready to equip your fleet with world-class safety? Our dedicated OEM and wholesale agents are available to assist with technical specs, cross-referencing, and bulk quotes."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Contact Us</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <section className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-navy-50 p-8">
              <Phone className="w-8 h-8 text-slate-600 mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">Technical Sales Support</h3>
              <p className="text-navy-600 mb-4 text-sm">For immediate assistance with OEM cross-referencing and inventory.</p>
              <a href="https://wa.me/8613800000000" className="text-slate-600 font-bold hover:underline">+86 138 0000 0000</a>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-navy-50 p-8">
              <Mail className="w-8 h-8 text-slate-600 mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">Email Us</h3>
              <p className="text-navy-600 mb-4 text-sm">For formal RFQs, container shipping logistics, and partnerships.</p>
              <a href="mailto:sales@brcbrakechambers.com" className="text-slate-600 font-bold hover:underline">sales@brcbrakechambers.com</a>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-navy-50 p-8">
              <MapPin className="w-8 h-8 text-slate-600 mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">Global Headquarters</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Industrial Manufacturing Zone<br />Hangzhou, Zhejiang<br />China
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-navy-50 p-8 md:p-12">
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Request a Wholesale Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Company / Fleet Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="Global Trucking Logistics" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Phone / WhatsApp</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Destination Country</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="United States, Mexico, etc." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Estimated Order Quantity</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all text-navy-600">
                    <option>Pallet (50 - 100 units)</option>
                    <option>LCL (100 - 500 units)</option>
                    <option>FCL (20ft / 40ft Container)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Part Numbers & Specifications</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="E.g., Looking for a quote on 200x Type 30/30 Spring Brakes (cross ref: Bendix 801083)..."></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-navy-950 font-extrabold text-lg py-4 rounded-xl hover:from-amber-300 hover:to-amber-500 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-[0.98] uppercase tracking-widest text-[13px]">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: 'Contact Us' }]} />
    </div>
  );
}

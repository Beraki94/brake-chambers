import React from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { Globe, Package, Truck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Global Wholesale RFQ | BRC Brake Chambers',
  description: 'Request a quote for bulk orders, full containers, or OEM partnerships for our heavy-duty commercial air brake chambers.',
};

export default function QuotePage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      <PageHeader
        badge="OEM Partnerships"
        title="Global Wholesale RFQ"
        description="BRC supplies OEM-quality brake chambers to fleets and distributors worldwide. Fill out the form below for container pricing and factory-direct logistics."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-primary-400 font-semibold" aria-current="page">Quote</li>
            </ol>
          </nav>
        </div>
      </PageHeader>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          {/* Left column: Form */}
          <div className="lg:col-span-2">
          <form className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="John" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Doe" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Acme Fleet Parts" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email *</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="purchasing@acmeparts.com" required />
              </div>
            </div>

            <h3 className="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3 mt-4">Order Requirements</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Volume</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer">
                  <option>LCL (Less than Container Load)</option>
                  <option>20ft Container (FCL)</option>
                  <option>40ft Container (FCL)</option>
                  <option>Pallet Quantities (LTL)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination Country / Port</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="e.g. Los Angeles, USA" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Product Specifications & Customization</label>
              <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Please list target OEM part numbers, BRC models, or special requests like private labeling/custom paint..." required></textarea>
            </div>
            
            <button type="submit" className="w-full bg-gradient-to-r from-primary-400 to-primary-600 text-navy-950 font-extrabold text-lg py-4 rounded-xl hover:from-primary-300 hover:to-primary-500 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-[0.98] uppercase tracking-widest text-[13px] mt-2">
              Request Factory Pricing
            </button>
          </form>
        </div>

        {/* Right column: Value Props */}
        <div className="flex flex-col gap-6">
           <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <Package className="w-8 h-8 text-primary-400 mb-4 relative z-10" />
             <h4 className="text-xl font-bold mb-2 relative z-10">Private Labeling</h4>
             <p className="text-navy-200 text-sm leading-relaxed relative z-10">
               Build your own brand. We offer custom stamping, branded boxes, and custom paint colors for full container orders.
             </p>
           </div>

           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
             <Truck className="w-8 h-8 text-success-500 mb-4" />
             <h4 className="text-xl font-bold text-navy-900 mb-2">Global Logistics</h4>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               Our export team handles everything from EXW factory floor to CIF at your destination port.
             </p>
             <ul className="text-sm text-slate-500 space-y-2">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> ISO 9001 Certified</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> Multi-Language Support</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> Fast Turnaround</li>
             </ul>
           </div>
        </div>

        </div>
      </div>
      <BreadcrumbSchema items={[{ name: 'Quote' }]} />
    </div>
  );
}

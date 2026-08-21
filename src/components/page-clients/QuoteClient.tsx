'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Globe, Package, Truck, ArrowRight, Trash2, Edit2, CheckCircle2 } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function QuoteClient() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const isEmpty = items.length === 0;

  return (
    <div className="container mx-auto px-4 lg:px-8 max-w-6xl -mt-20 relative z-20">
      
      {/* Prominent Selected Items Section */}
      <div className="bg-white border border-slate-200 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 mb-8">
        <h3 className="text-2xl font-extrabold text-navy-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
          <Package className="w-8 h-8 text-amber-500" /> 
          Selected Items for Quote
        </h3>

        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-10 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
              <Package className="w-10 h-10 text-slate-300" />
            </div>
            <h4 className="text-2xl font-bold text-navy-900 mb-3">Your quote list is empty</h4>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed mb-8">
              To request a quote, please browse our catalog or use our OEM cross-reference tool to add specific part numbers to your RFQ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2">
                Browse Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/oem-cross-reference" className="bg-white hover:bg-slate-50 text-navy-900 font-bold px-8 py-3.5 rounded-xl shadow-sm border border-slate-200 transition-all flex items-center gap-2">
                OEM Reference
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-100 bg-slate-50 rounded-xl relative group">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-amber-500 mb-1 uppercase tracking-wider">{item.product.brandSlug === 'brc' ? 'BRC' : item.product.brandSlug}</p>
                    <h5 className="font-bold text-navy-900 text-lg">{item.product.name}</h5>
                    <p className="text-sm text-slate-500 mb-3">SKU: {item.product.slug.toUpperCase()}</p>
                    
                    <div className="flex items-center gap-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Qty:</label>
                      <input 
                        type="number" 
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-20 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-bold text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute top-4 right-4 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
               <Link href="/products" className="text-sm font-bold text-amber-500 hover:text-amber-600 transition-colors flex items-center gap-1">
                 + Add more products
               </Link>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: Form */}
        <div className="lg:col-span-2">
          <form className="bg-white p-5 sm:p-8 lg:p-10 rounded-3xl sm:rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-5 sm:gap-6 h-fit relative">
            
            {/* If cart is empty, optionally show a small warning on the form */}
            {isEmpty && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-10 rounded-[2rem] flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm text-center">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900 mb-2">Select Products First</h4>
                  <p className="text-sm text-slate-500 mb-4">Please add items to your quote list before submitting your request.</p>
                </div>
              </div>
            )}

            <h3 className="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="John" required disabled={isEmpty} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="Doe" required disabled={isEmpty} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="Acme Fleet Parts" required disabled={isEmpty} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email *</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="purchasing@acmeparts.com" required disabled={isEmpty} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3 mt-4">Order Requirements</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Volume</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all cursor-pointer placeholder:text-slate-400" disabled={isEmpty}>
                  <option>LCL (Less than Container Load)</option>
                  <option>20ft Container (FCL)</option>
                  <option>40ft Container (FCL)</option>
                  <option>Pallet Quantities (LTL)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination Country / Port</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="e.g. Los Angeles, USA" disabled={isEmpty} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Product Specifications & Customization</label>
              <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-none" placeholder={isEmpty ? "" : `Additional notes for items in quote...`} required disabled={isEmpty}></textarea>
            </div>
            
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-sm sm:text-lg py-3 sm:py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all active:scale-[0.98] uppercase tracking-widest sm:text-[13px] mt-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isEmpty}>
              Request Factory Pricing
            </button>
          </form>
        </div>

        {/* Right column: Value Props */}
        <div className="flex flex-col gap-5 sm:gap-6">
           <div className="bg-navy-900 text-white rounded-3xl sm:rounded-[2rem] p-6 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <Truck className="w-8 h-8 text-amber-400 mb-4 relative z-10" />
             <h4 className="text-xl font-bold mb-2 relative z-10">Private Labeling</h4>
             <p className="text-navy-200 text-sm leading-relaxed relative z-10">
               Build your own brand. We offer custom stamping, branded boxes, and custom paint colors for full container orders.
             </p>
           </div>

           <div className="bg-white border border-slate-200 rounded-3xl sm:rounded-[2rem] p-6 shadow-sm">
             <Globe className="w-8 h-8 text-emerald-500 mb-4" />
             <h4 className="text-xl font-bold text-navy-900 mb-2">Global Logistics</h4>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               Our export team handles everything from EXW factory floor to CIF at your destination port.
             </p>
             <ul className="text-sm text-slate-500 space-y-2">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> IATF 16949 Certified</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> Multi-Language Support</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> Fast Turnaround</li>
             </ul>
           </div>
        </div>

      </div>
    </div>
  );
}

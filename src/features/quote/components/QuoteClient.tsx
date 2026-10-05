'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Globe, Package, Truck, ArrowRight, Trash2, Edit2, CheckCircle2, User, Building, Mail, Info } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function QuoteClient() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const quoteItems = items.map(i => `${i.product.name} (Qty: ${i.quantity})`);
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          source: 'Quote Request', 
          ...data,
          items: quoteItems
        })
      });
      setIsSuccess(true);
      clearCart();
    } catch (error) {
      console.error('Submission failed', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const isEmpty = items.length === 0;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl -mt-8 sm:-mt-20 relative z-20">
      
      {/* Prominent Selected Items Section */}
      <div className="bg-white border-y sm:border border-slate-200 rounded-none sm:rounded-[2rem] p-5 sm:p-8 lg:p-10 shadow-sm sm:shadow-xl shadow-slate-200/50 mb-8 -mx-4 sm:mx-0">
        <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 border-b border-slate-100 pb-4 px-4 sm:px-0">
          <Package className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 shrink-0" /> 
          Selected Items for Quote
        </h2>

        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-6 sm:py-10 px-4 sm:px-8 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 mx-4 sm:mx-0">
            <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-6 shadow-sm border border-slate-100">
              <Package className="w-6 h-6 sm:w-10 sm:h-10 text-slate-300" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-navy-900 mb-2">No Products Selected</h3>
            <p className="text-slate-500 text-[14px] md:text-[15px] leading-[1.6] max-w-sm mx-auto mb-5 sm:mb-6 font-normal">
              Browse our catalog and add items to your quote request to get factory-direct pricing.
            </p>
            <Link href="/products" className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold px-5 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg shadow-navy-900/20 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base">
              Browse Products <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="mt-4 sm:hidden text-[11px] text-slate-400 font-bold flex items-center justify-center gap-1.5 uppercase tracking-wide">
              <Info className="w-3.5 h-3.5" /> 
              Quote form appears here after adding items
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-5 sm:p-4 border border-slate-100 bg-slate-50 rounded-xl relative group">
                  <div className="flex-1 pr-10 sm:pr-12">
                    <p className="text-[10px] sm:text-xs font-bold text-amber-500 mb-1 uppercase tracking-wider">{item.product.brandSlug === 'brc' ? 'BRC' : item.product.brandSlug}</p>
                    <h3 className="font-bold text-navy-900 text-base sm:text-lg leading-snug mb-1 sm:mb-0">{item.product.name}</h3>
                    <p className="text-[13px] leading-[1.6] text-slate-500 mb-3 font-normal">SKU: {item.product.slug.toUpperCase()}</p>
                    
                    <div className="flex items-center gap-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Qty:</label>
                      <input 
                        type="number" 
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-16 sm:w-20 px-2 sm:px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-bold text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 text-slate-400 bg-white border border-slate-200 shadow-sm hover:text-red-600 hover:bg-red-50 hover:border-red-200 rounded-xl transition-all"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4 sm:w-4 sm:h-4" />
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

      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {/* Left column: Form */}
        <div className={`lg:col-span-2 ${isEmpty ? 'hidden lg:block' : 'block'}`}>
          <form onSubmit={handleSubmit} className="bg-white p-5 sm:p-8 lg:p-10 rounded-none sm:rounded-[2rem] shadow-sm sm:shadow-xl shadow-slate-200/50 border-y sm:border border-slate-100 flex flex-col gap-5 sm:gap-6 h-fit relative -mx-4 sm:mx-0">
            {isSuccess && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 rounded-none sm:rounded-[2rem] flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Quote Requested!</h3>
                <p className="text-slate-500 mb-6 max-w-sm">Our sales team will get back to you shortly with pricing and availability.</p>
                <Link href="/products" onClick={() => setIsSuccess(false)} className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  Continue Browsing
                </Link>
              </div>
            )}
            
            {/* If cart is empty, optionally show a small warning on the form */}
            {isEmpty && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-10 rounded-[2rem] flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm text-center">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Select Products First</h3>
                  <p className="text-sm text-slate-500 mb-4">Please add items to your quote list before submitting your request.</p>
                </div>
              </div>
            )}

            <h2 className="text-lg sm:text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                  <input type="text" name="name" className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 rounded-xl text-navy-900 px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="John Doe" required disabled={isEmpty || isSubmitting} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                <div className="relative">
                  <Building className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                  <input type="text" name="companyName" className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 rounded-xl text-navy-900 px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="Acme Fleet Parts" required disabled={isEmpty || isSubmitting} />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email *</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                  <input type="email" name="email" className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 rounded-xl text-navy-900 px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="purchasing@acmeparts.com" required disabled={isEmpty || isSubmitting} />
                </div>
              </div>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-navy-900 border-b border-slate-100 pb-3 mt-4">Order Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Volume</label>
                <div className="relative">
                  <Package className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select name="volume" className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 rounded-xl text-navy-900 px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all cursor-pointer placeholder:text-slate-400 appearance-none" disabled={isEmpty || isSubmitting}>
                    <option>LCL (Less than Container Load)</option>
                    <option>20ft Container (FCL)</option>
                    <option>40ft Container (FCL)</option>
                    <option>Pallet Quantities (LTL)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination Country / Port</label>
                <div className="relative">
                  <Globe className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                  <input type="text" name="destination" className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 rounded-xl text-navy-900 px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="e.g. Los Angeles, USA" disabled={isEmpty || isSubmitting} />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Product Specifications & Customization</label>
              <textarea name="notes" rows={5} className="w-full bg-white border-2 border-slate-200 rounded-xl text-navy-900 px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-none" placeholder={isEmpty ? "" : `Additional notes for items in quote...`} required disabled={isEmpty || isSubmitting}></textarea>
            </div>
            
            <button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-base sm:text-lg py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl shadow-navy-900/20 transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isEmpty || isSubmitting}>
              {isSubmitting ? 'Sending Request...' : 'Request Factory Pricing'} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Right column: Value Props */}
        <div className="flex flex-col gap-4 sm:gap-6">
           <div className="bg-gradient-to-b from-navy-800 to-navy-900 text-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 shadow-sm sm:shadow-xl relative overflow-hidden border border-navy-700 shadow-navy-900/10 group flex flex-col transform hover:-translate-y-2 transition-all duration-500 hover:border-amber-500/50">
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
             
             {/* Corner Element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-navy-700/40 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0 pointer-events-none"></div>

             <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-navy-700 group-hover:border-amber-500/50 transition-colors">
               <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
             </div>
             
             <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 relative z-10 group-hover:text-amber-400 transition-colors">Private Labeling</h3>
             <p className="text-navy-300 text-[14px] md:text-[15px] leading-[1.6] font-normal relative z-10">
               Build your own brand. We offer custom stamping, branded boxes, and custom paint colors for full container orders.
             </p>
           </div>

           <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 shadow-sm hover:shadow-xl shadow-slate-200/50 group flex flex-col relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-amber-500/30">
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
             
             {/* Corner Element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0 pointer-events-none"></div>

             <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-amber-200 group-hover:bg-amber-50/50 transition-colors">
               <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
             </div>
             
             <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-3 relative z-10 group-hover:text-amber-600 transition-colors">Global Logistics</h3>
             <p className="text-slate-600 text-[14px] md:text-[15px] leading-[1.6] mb-6 relative z-10 font-normal">
               Our export team handles everything from EXW factory floor to CIF at your destination port.
             </p>
             <ul className="text-[14px] md:text-[15px] leading-[1.6] text-slate-500 space-y-3 relative z-10 font-normal">
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" /> Manufactured to IATF 16949 standards</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" /> Multi-Language Support</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" /> Fast Turnaround</li>
             </ul>
           </div>
        </div>

      </div>
    </div>
  );
}


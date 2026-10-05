'use client';

import React, { useState } from 'react';
import { User, Building, Mail, Phone, Camera, ArrowRight, CheckCircle } from 'lucide-react';

export default function RequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'OEM Match Request', ...data })
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission failed', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-16 bg-white rounded-[2rem] shadow-sm border border-slate-100">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Match Request Submitted!</h3>
        <p className="text-[15px] leading-[1.6] font-normal text-slate-600 max-w-md mx-auto">Our engineering team will review the details and get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Your Name <span className="text-red-500">*</span></label>
          <div className="relative">
            <User className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              name="name"
              required
              disabled={isSubmitting}
              className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
              placeholder="John Doe" 
            />
          </div>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Company / Fleet <span className="text-red-500">*</span></label>
          <div className="relative">
            <Building className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              name="company"
              required
              disabled={isSubmitting}
              className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
              placeholder="Logistics Inc" 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Email Address <span className="text-red-500">*</span></label>
          <div className="relative">
            <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="email" 
              name="email"
              required
              disabled={isSubmitting}
              className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
              placeholder="john@example.com" 
            />
          </div>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Phone Number <span className="text-slate-400 font-normal">(Optional)</span></label>
          <div className="relative">
            <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="tel" 
              name="phone"
              disabled={isSubmitting}
              className="w-full pl-11 sm:pl-12 bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
              placeholder="(555) 123-4567" 
            />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-6 mt-6">
        <h3 className="text-lg font-bold text-navy-900 mb-4">Part Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-5">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Unknown Part Number(s)</label>
            <input type="text" name="unknownPart" disabled={isSubmitting} className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all font-mono uppercase placeholder:font-sans placeholder:normal-case placeholder:text-slate-400" placeholder="e.g. NT3030STD" />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Suspected Brand / OEM</label>
            <input type="text" name="suspectedBrand" disabled={isSubmitting} className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Bendix, Meritor, etc." />
          </div>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Additional Context <span className="text-slate-400 font-normal">(Optional)</span></label>
          <textarea 
            name="context"
            rows={4} 
            disabled={isSubmitting}
            className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all resize-none placeholder:text-slate-400" 
            placeholder="Provide vehicle application, pushrod length, or any other identifying marks..."
          ></textarea>
        </div>
      </div>

      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 sm:p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer mt-2">
        <Camera className="w-8 h-8 text-slate-400 mx-auto mb-3" />
        <p className="text-navy-900 font-bold mb-1">Upload Data Tag Photos</p>
        <p className="text-slate-500 text-sm">Drag and drop images here, or click to browse. Max 5MB per file.</p>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-navy-900/20 flex items-center justify-center gap-2 group text-lg mt-6"
      >
        {isSubmitting ? 'Sending Request...' : 'Submit for Engineering Match'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}

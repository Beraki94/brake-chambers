'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function BulkInquiriesForm() {
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
        body: JSON.stringify({ source: 'Bulk / OEM Inquiry', ...data })
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
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Inquiry Submitted!</h3>
        <p className="text-slate-600">Our engineering team will review your requirements and contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-navy-900 mb-2">Company Name <span className="text-red-500">*</span></label>
          <input type="text" name="companyName" required disabled={isSubmitting} className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50" placeholder="e.g. Global Truck Parts LLC" />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-900 mb-2">Contact Name <span className="text-red-500">*</span></label>
          <input type="text" name="contactName" required disabled={isSubmitting} className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-900 mb-2">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" required disabled={isSubmitting} className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50" placeholder="john@company.com" />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-900 mb-2">Annual Volume (Units)</label>
          <select name="annualVolume" disabled={isSubmitting} className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 text-navy-700 disabled:opacity-50">
            <option>1,000 - 5,000</option>
            <option>5,000 - 20,000</option>
            <option>20,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-navy-900 mb-2">Engineering / Customization Requirements <span className="text-red-500">*</span></label>
        <textarea name="requirements" required disabled={isSubmitting} rows={5} className="w-full bg-white border-2 border-slate-200 text-navy-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50 resize-none" placeholder="Please describe the specifications required, including any OEM part numbers for reference..."></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 text-navy-900 font-extrabold text-lg py-4 rounded-xl hover:bg-amber-400 shadow-lg shadow-amber-500/30 transition-all active:scale-[0.98] disabled:opacity-50">
        {isSubmitting ? 'Sending Request...' : 'Send Request to Engineering'}
      </button>
    </form>
  );
}

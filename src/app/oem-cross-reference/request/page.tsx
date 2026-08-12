'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Camera, FileUp, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export default function RequestCrossMatchPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        title="Request a Custom Cross-Match"
        description="Can't find your part number? Our engineering team will manually identify your brake chamber and provide a factory-direct aftermarket equivalent."
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl -mt-10 relative z-20">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-navy-900/5">
          
          {isSuccess ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-navy-900 mb-4 font-heading">Request Submitted!</h2>
              <p className="text-slate-600 max-w-md mx-auto mb-8 text-lg">
                Our engineering team has received your information. We typically cross-match and respond within 1-2 business hours.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="bg-navy-50 text-navy-900 font-bold py-3 px-8 rounded-xl hover:bg-navy-100 transition-colors border border-navy-200"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10 bg-amber-50 border border-amber-200 p-6 rounded-xl flex gap-4 items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">Instructions for best results</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    If you have a large list of parts, you can upload a CSV or Excel file. If you have an unidentified physical chamber, please provide clear photos of the <strong>housing</strong>, the <strong>air ports</strong>, and the <strong>pushrod/clevis</strong> assembly.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-4 border-b border-slate-100 pb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input type="text" id="name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company Name *</label>
                      <input type="text" id="company" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Fleet Transport Inc." />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                      <input type="email" id="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                </div>

                {/* Request Details */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-navy-900 mb-4 border-b border-slate-100 pb-2">Part Details</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="details" className="block text-sm font-bold text-slate-700 mb-2">Competitor Part Numbers or Description *</label>
                    <textarea 
                      id="details" 
                      required 
                      rows={4} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                      placeholder="List any part numbers, brands, or physical descriptions (e.g. Type 30/30, long stroke, welded clevis)..."
                    ></textarea>
                  </div>

                  {/* File Upload Area */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 hover:border-amber-400 transition-colors cursor-pointer group">
                      <Camera className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover:text-amber-500 transition-colors" />
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Upload Photos</h4>
                      <p className="text-xs text-slate-500">JPG, PNG up to 5MB</p>
                    </div>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 hover:border-amber-400 transition-colors cursor-pointer group">
                      <FileUp className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover:text-amber-500 transition-colors" />
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Upload Parts List</h4>
                      <p className="text-xs text-slate-500">CSV, Excel, or PDF</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-navy-900 text-white font-extrabold py-4 rounded-xl hover:bg-navy-800 transition-colors shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting Request...' : (
                      <>Submit for Engineering Review <Send className="w-5 h-5" /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">By submitting this form, you agree to our privacy policy. Your data is secure.</p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

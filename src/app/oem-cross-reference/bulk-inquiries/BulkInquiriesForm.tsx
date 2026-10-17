'use client';

import React, { useState, useMemo } from 'react';
import { CheckCircle, AlertCircle, ArrowRight, Building, User, Mail, Package, Factory } from 'lucide-react';
import { validateEmail, validateRequired } from '@/lib/validation';

export default function BulkInquiriesForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    annualVolume: '1,000 - 5,000 Units',
    requirements: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => ({
    companyName: touched.companyName ? validateRequired(formData.companyName, 'Company name', 2) : null,
    contactName: touched.contactName ? validateRequired(formData.contactName, 'Contact name', 2) : null,
    email: touched.email ? validateEmail(formData.email) : null,
    requirements: touched.requirements ? validateRequired(formData.requirements, 'Engineering requirements', 10) : null,
  }), [formData, touched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
    setServerError(null);
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    const allTouched = {
      companyName: true,
      contactName: true,
      email: true,
      requirements: true
    };
    setTouched(allTouched);

    const hasErrors =
      validateRequired(formData.companyName, 'Company name', 2) ||
      validateRequired(formData.contactName, 'Contact name', 2) ||
      validateEmail(formData.email) ||
      validateRequired(formData.requirements, 'Engineering requirements', 10);

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'Bulk / OEM Custom Engineering Inquiry', ...formData })
      });
      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || 'Failed to submit inquiry');
      }
      setIsSuccess(true);
    } catch (error: any) {
      console.error('Submission failed', error);
      setServerError(error.message || 'Something went wrong. Please try again or email sales@brakechambers.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="-mx-4 sm:mx-0 bg-white rounded-none sm:rounded-3xl shadow-[0_12px_36px_rgba(10,25,41,0.06)] border-y sm:border border-slate-200/90 overflow-hidden relative">
        <div className="h-1.5 w-full bg-gradient-to-r from-navy-900 via-amber-500 to-navy-900" />
        <div className="text-center py-16 px-6 sm:px-10">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
            Inquiry Successfully Submitted!
          </h3>
          <p className="text-base sm:text-lg leading-relaxed font-normal text-slate-600 max-w-md mx-auto mb-8">
            Our OEM manufacturing and technical project team will review your annual volume requirements and reply within 24 business hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-lg shadow-navy-900/15 cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="-mx-4 sm:mx-0 bg-white rounded-none sm:rounded-3xl shadow-[0_12px_36px_rgba(10,25,41,0.06)] border-y sm:border border-slate-200/90 overflow-hidden relative">
      {/* Signature top accent line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-navy-900 via-amber-500 to-navy-900" />

      {/* Form Card Header Bar */}
      <div className="p-6 sm:p-8 lg:p-9 bg-slate-50/70 border-b border-slate-200/80">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-500/10 text-amber-700 border border-amber-500/20">
            <Factory className="w-4 h-4 text-amber-600" />
            OEM / ODM Sourcing Desk
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            Factory Direct Sourcing
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-navy-900 tracking-tight leading-tight">
          Bulk Sourcing & Custom Manufacturing Inquiry
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
          Direct factory manufacturing operating to IATF 16949 standards for container-load orders, private-label packaging, and custom engineered brake chambers.
        </p>
      </div>

      {/* Form Content */}
      <form className="p-5 sm:p-7 lg:p-9 space-y-7 sm:space-y-9" onSubmit={handleSubmit} noValidate>
        {serverError && (
          <div className="p-4 bg-rose-50/70 border border-rose-200 text-rose-800 rounded-xl sm:rounded-2xl text-sm sm:text-base flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <span>{serverError}</span>
          </div>
        )}

        {/* Section 01: Corporate & Buyer Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5 pb-3.5 mb-5 border-b border-slate-200/80">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-navy-900 text-amber-400 font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs">
              01
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 tracking-tight">
              Corporate & Buyer Profile
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* Contact Name */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Contact Name <span className="text-amber-500 font-bold">*</span>
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text" 
                  name="contactName" 
                  value={formData.contactName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('contactName')}
                  required 
                  disabled={isSubmitting} 
                  placeholder="John Doe"
                  className={`w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-medium transition-all shadow-2xs focus:outline-none placeholder:text-slate-400 placeholder:font-normal ${
                    errors.contactName
                      ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                      : 'bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed'
                  }`}
                />
              </div>
              {errors.contactName && (
                <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.contactName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Business Email <span className="text-amber-500 font-bold">*</span>
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  required 
                  disabled={isSubmitting} 
                  placeholder="john@company.com"
                  className={`w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-medium transition-all shadow-2xs focus:outline-none placeholder:text-slate-400 placeholder:font-normal ${
                    errors.email
                      ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                      : 'bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.email}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Company / Fleet Name <span className="text-amber-500 font-bold">*</span>
              </label>
              <div className="relative">
                <Building className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text" 
                  name="companyName" 
                  value={formData.companyName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('companyName')}
                  required 
                  disabled={isSubmitting} 
                  placeholder="Global Trucking Logistics"
                  className={`w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-medium transition-all shadow-2xs focus:outline-none placeholder:text-slate-400 placeholder:font-normal ${
                    errors.companyName
                      ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                      : 'bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed'
                  }`}
                />
              </div>
              {errors.companyName && (
                <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.companyName}
                </p>
              )}
            </div>

            {/* Annual Volume */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">Annual Volume (Units)</label>
              <div className="relative">
                <Package className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select 
                  name="annualVolume" 
                  value={formData.annualVolume}
                  onChange={handleChange}
                  disabled={isSubmitting} 
                  className="w-full pl-12 pr-10 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-medium focus:outline-none transition-all appearance-none shadow-2xs bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed cursor-pointer"
                >
                  <option value="1,000 - 5,000 Units">1,000 - 5,000 Units</option>
                  <option value="5,000 - 20,000 Units">5,000 - 20,000 Units</option>
                  <option value="20,000+ Units (Container Programs)">20,000+ Units (Container Programs)</option>
                  <option value="Sample / Pilot Evaluation">Sample / Pilot Evaluation</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Section 02: Technical Specifications & Customization */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5 pb-3.5 mb-5 border-b border-slate-200/80">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-navy-900 text-amber-400 font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs">
              02
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 tracking-tight">
              Technical Specifications & Customization
            </h3>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
              Engineering & Customization Requirements <span className="text-amber-500 font-bold">*</span>
            </label>
            <textarea 
              name="requirements" 
              rows={4} 
              value={formData.requirements}
              onChange={handleChange}
              onBlur={() => handleBlur('requirements')}
              required 
              disabled={isSubmitting} 
              placeholder="Describe specifications needed, OEM reference part numbers, special stroke lengths, port angles, bespoke spring ratings, or private labeling requirements..."
              className={`w-full p-4 bg-white border border-slate-200 text-navy-900 rounded-xl sm:rounded-2xl text-base font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all resize-none placeholder:text-slate-400 placeholder:font-normal shadow-2xs disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed ${
                errors.requirements
                  ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                  : ''
              }`}
            />
            {errors.requirements && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.requirements}
              </p>
            )}
          </div>
        </div>

        {/* Submit CTA Button */}
        <div>
          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-navy-900 hover:bg-navy-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-extrabold text-base sm:text-lg py-4 sm:py-4.5 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg shadow-navy-900/15 transition-all flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                Sending to Engineering...
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Submit OEM / Sourcing Inquiry <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </button>

          {/* Trust Markers */}
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left border-t border-slate-100 mt-5">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>IATF 16949 Certified</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Custom Stroke & Ports</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Direct Factory Pricing</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import { User, Building, Mail, Phone, Camera, ArrowRight, CheckCircle, AlertCircle, FileText, X, Cpu } from 'lucide-react';
import { validateEmail, validatePhone, validateRequired } from '@/lib/validation';

export default function RequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    unknownPart: '',
    suspectedBrand: '',
    context: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => ({
    name: touched.name ? validateRequired(formData.name, 'Your name', 2) : null,
    company: touched.company ? validateRequired(formData.company, 'Company / Fleet name', 2) : null,
    email: touched.email ? validateEmail(formData.email) : null,
    phone: touched.phone ? validatePhone(formData.phone, false) : null,
    unknownPart: touched.unknownPart ? validateRequired(formData.unknownPart, 'Unknown part number', 2) : null,
  }), [formData, touched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
    setServerError(null);
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    const allTouched = {
      name: true,
      company: true,
      email: true,
      phone: true,
      unknownPart: true
    };
    setTouched(allTouched);

    const hasErrors =
      validateRequired(formData.name, 'Your name', 2) ||
      validateRequired(formData.company, 'Company / Fleet name', 2) ||
      validateEmail(formData.email) ||
      validatePhone(formData.phone, false) ||
      validateRequired(formData.unknownPart, 'Unknown part number', 2);

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const payload: Record<string, any> = {
        source: 'OEM Cross-Reference Match Request',
        ...formData
      };

      if (selectedFile) {
        payload.attachedFileName = selectedFile.name;
        payload.attachedFileSize = `${(selectedFile.size / 1024).toFixed(1)} KB`;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || 'Failed to submit match request');
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
            Match Request Submitted!
          </h3>
          <p className="text-base sm:text-lg leading-relaxed font-normal text-slate-600 max-w-md mx-auto mb-8">
            Our engineering team will review your part specifications and contact you with the recommended BRC replacement.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-lg shadow-navy-900/15 cursor-pointer"
          >
            Submit Another Request
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
            <Cpu className="w-4 h-4 text-amber-600" />
            Engineering Cross-Reference
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            Direct Technical Support
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-navy-900 tracking-tight leading-tight">
          Engineering Cross-Reference Match Form
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
          Submit unknown, rusted, or OEM part numbers. Our technical team will review your specifications, measurements, or photos to identify the compatible BRC replacement.
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

        {/* Section 01: Contact & Fleet Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5 pb-3.5 mb-5 border-b border-slate-200/80">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-navy-900 text-amber-400 font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs">
              01
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 tracking-tight">
              Contact & Fleet Profile
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Your Name <span className="text-amber-500 font-bold">*</span>
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  required
                  disabled={isSubmitting}
                  placeholder="John Doe"
                  className={`w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-medium transition-all shadow-2xs focus:outline-none placeholder:text-slate-400 placeholder:font-normal ${
                    errors.name
                      ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                      : 'bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.name}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Company / Fleet <span className="text-amber-500 font-bold">*</span>
              </label>
              <div className="relative">
                <Building className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={() => handleBlur('company')}
                  required
                  disabled={isSubmitting}
                  placeholder="Global Trucking Logistics"
                  className={`w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-medium transition-all shadow-2xs focus:outline-none placeholder:text-slate-400 placeholder:font-normal ${
                    errors.company
                      ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                      : 'bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed'
                  }`}
                />
              </div>
              {errors.company && (
                <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.company}
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

            {/* Phone */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Direct Phone / WhatsApp <span className="text-slate-500 text-xs sm:text-sm font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  disabled={isSubmitting}
                  placeholder="+1 (555) 019-2834"
                  className={`w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-medium transition-all shadow-2xs focus:outline-none placeholder:text-slate-400 placeholder:font-normal ${
                    errors.phone
                      ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                      : 'bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 02: Part Identification & Context */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5 pb-3.5 mb-5 border-b border-slate-200/80">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-navy-900 text-amber-400 font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs">
              02
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 tracking-tight">
              Part Identification & Vehicle Context
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Unknown Part */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Unknown Part Number(s) <span className="text-amber-500 font-bold">*</span>
              </label>
              <input 
                type="text" 
                name="unknownPart" 
                value={formData.unknownPart}
                onChange={handleChange}
                onBlur={() => handleBlur('unknownPart')}
                required
                disabled={isSubmitting} 
                placeholder="e.g. NT3030STD"
                className={`w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-base font-mono uppercase transition-all shadow-2xs focus:outline-none placeholder:font-sans placeholder:normal-case placeholder:text-slate-400 placeholder:font-normal ${
                  errors.unknownPart
                    ? 'bg-rose-50/30 border-2 border-rose-300 focus:border-rose-400 text-navy-900'
                    : 'bg-white border border-slate-200 text-navy-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 disabled:bg-slate-50/70 disabled:text-slate-600 disabled:cursor-not-allowed'
                }`}
              />
              {errors.unknownPart && (
                <p className="mt-1.5 text-xs sm:text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" /> {errors.unknownPart}
                </p>
              )}
            </div>

            {/* Suspected Brand */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
                Suspected Brand / OEM <span className="text-slate-500 text-xs sm:text-sm font-normal">(Optional)</span>
              </label>
              <input 
                type="text" 
                name="suspectedBrand" 
                value={formData.suspectedBrand}
                onChange={handleChange}
                disabled={isSubmitting} 
                placeholder="e.g. Bendix, Meritor, Wabco"
                className="w-full px-4 py-3 sm:py-3.5 bg-white border border-slate-200 text-navy-900 rounded-xl sm:rounded-2xl text-base font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 placeholder:font-normal shadow-2xs" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-navy-900 mb-1.5">
              Additional Context <span className="text-slate-500 text-xs sm:text-sm font-normal">(Optional)</span>
            </label>
            <textarea 
              name="context"
              rows={3} 
              value={formData.context}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Provide vehicle application, axle type, pushrod length, or any other identifying markings..."
              className="w-full p-4 bg-white border border-slate-200 text-navy-900 rounded-xl sm:rounded-2xl text-base font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all resize-none placeholder:text-slate-400 placeholder:font-normal shadow-2xs" 
            />
          </div>
        </div>

        {/* Section 03: Data Tag & Spec Photo Upload */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5 pb-3.5 mb-5 border-b border-slate-200/80">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-navy-900 text-amber-400 font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs">
              03
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 tracking-tight">
              Data Tag & Chamber Photo Upload
            </h3>
          </div>

          <div className="relative">
            <input 
              type="file" 
              id="photo-upload" 
              accept="image/*,.pdf" 
              onChange={handleFileChange} 
              className="sr-only" 
              disabled={isSubmitting}
            />
            <label 
              htmlFor="photo-upload" 
              className="border-2 border-dashed border-slate-300 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-slate-50/80 hover:border-amber-400 transition-all cursor-pointer block group shadow-2xs"
            >
              {selectedFile ? (
                <div className="flex items-center justify-center gap-3">
                  <FileText className="w-8 h-8 text-amber-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-navy-900 font-bold text-sm sm:text-base">{selectedFile.name}</p>
                    <p className="text-slate-500 text-xs sm:text-sm">{(selectedFile.size / 1024).toFixed(1)} KB — Click to change</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedFile(null);
                    }}
                    className="ml-2 p-1.5 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Camera className="w-8 h-8 text-slate-400 group-hover:text-amber-500 mx-auto mb-2.5 transition-colors" />
                  <p className="text-navy-900 font-bold text-sm sm:text-base mb-1">Upload Data Tag or Chamber Photo</p>
                  <p className="text-slate-500 text-xs sm:text-sm">Click to choose a photo or drag file here (JPEG, PNG, PDF up to 5MB)</p>
                </>
              )}
            </label>
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
                Submit for Engineering Match <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </button>

          {/* Trust Markers */}
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left border-t border-slate-100 mt-5">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Direct Manufacturer Support</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>IATF 16949 Certified Facility</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Free Cross-Match Service</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

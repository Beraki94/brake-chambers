"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, User, FileSignature, ArrowRight, Globe, Lock, Mail, Building, Phone, PhoneCall, ExternalLink, ShieldCheck, X } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

const MOCK_DISTRIBUTORS: any[] = [];

const REGIONS = ['All', 'North America', 'Europe', 'Middle East', 'Asia Pacific', 'South America', 'Africa'];

export default function DistributorsClient() {
    const [activeModal, setActiveModal] = useState<'none' | 'login' | 'register'>('none');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Collect form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'Distributor Application', ...data })
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission failed', error);
      // Proceed to success anyway for demo purposes, or handle error
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const closeModal = () => {
    setActiveModal('none');
    setTimeout(() => setIsSuccess(false), 300);
  };

  const filteredDistributors = MOCK_DISTRIBUTORS.filter(d => selectedRegion === 'All' || d.region === selectedRegion);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeModal !== 'none') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function to restore scrolling if component unmounts while modal is open
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  return (
    <article className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-clip relative">
      <PageHeader
        badge="Global Network & Portal"
        badgeIcon={Globe}
        title="Become a BRC Brake Chamber Distributor: Global Partner Network"
        description="Join BRC's global network of authorized brake chamber distributors. Access wholesale pricing, private-label programs, marketing support, and priority factory logistics. Apply to become a distributor or log in to the partner portal."
        imageSrc="/images/pageheaders/brc_whosale_distributor.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Distributors' }
        ]}
      />

      {/* Main Content Area */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative z-20 flex-grow flex flex-col mb-16">
        
        {/* Overlapping Quick Actions Box */}
        <div className="-mt-8 sm:-mt-20 bg-white border border-slate-200 rounded-2xl sm:rounded-[2rem] p-6 lg:p-8 shadow-sm sm:shadow-xl shadow-slate-200/50 mb-10 sm:mb-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="w-full text-center md:text-left">
              <SectionHeader
                title="Partner Portal"
                description="Access B2B pricing, or apply to join our global network."
                align="left"
                theme="light"
                accentColor="navy"
                plainText={true}
                className="!mb-0"
              />
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button onClick={() => setActiveModal('login')} className="bg-navy-50 text-navy-900 hover:bg-navy-100 border border-navy-100 font-extrabold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md w-full md:w-auto text-[13px] uppercase tracking-widest whitespace-nowrap">
                 <Lock className="w-5 h-5 shrink-0"/> Partner Login
              </button>
              <button onClick={() => setActiveModal('register')} className="bg-amber-500 text-navy-950 hover:bg-amber-400 font-extrabold px-6 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 w-full md:w-auto text-[13px] uppercase tracking-widest hover:-translate-y-0.5 whitespace-nowrap">
                 <FileSignature className="w-5 h-5 shrink-0"/> Become a Partner
              </button>
           </div>
        </div>

        {/* Network Content (Always Visible) */}
        <div className="w-full flex-grow relative min-h-[400px]">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Sticky Sidebar for Regions */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <div className="sticky top-32">
                <h2 className="text-xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight flex items-center gap-2">
                  <Globe className="w-5 h-5 text-amber-500" /> Filter by Region
                </h2>
                <div className="flex flex-row lg:flex-col flex-wrap gap-2">
                  {REGIONS.map(region => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-bold transition-all ${
                        selectedRegion === region
                          ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/20 scale-[1.02]'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {region}
                      {selectedRegion === region && <ArrowRight className="w-4 h-4 text-amber-500" />}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-navy-50 rounded-2xl border border-navy-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">Verified Partners</h3>
                  <p className="text-[14px] leading-[1.6] text-slate-600 font-normal">All listed distributors are fully authorized to sell genuine BRC OEM replacement parts and honor factory warranties.</p>
                </div>
              </div>
            </div>

            {/* Right Side Grid */}
            <div className="w-full lg:w-3/4">
              <SectionHeader
                title="Global Authorized Network"
                description={selectedRegion === 'All' ? 'Showing all international distributors.' : `Showing authorized distributors in ${selectedRegion}.`}
                align="left"
                theme="light"
                accentColor="navy"
                plainText={true}
                asH1={true}
                className="!mb-8"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredDistributors.map((dist) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={dist.id}
                      className="bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200/60 p-6 sm:p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 flex flex-col relative overflow-hidden group"
                    >
                      {/* Decorative abstract map/grid watermark */}
                      <div className="absolute -right-12 -top-12 w-48 h-48 bg-slate-50 rounded-full opacity-50 group-hover:bg-amber-50 transition-colors duration-500 -z-0"></div>
                      <div className="absolute right-8 top-8 w-16 h-16 border-4 border-slate-100 rounded-full opacity-50 group-hover:border-amber-100 transition-colors duration-500 -z-0"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-navy-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-50 group-hover:text-amber-600 transition-all duration-300 flex-shrink-0 text-navy-900">
                            <MapPin className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] uppercase tracking-wider font-extrabold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">
                            {dist.type}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold tracking-tight text-navy-900 mb-2">{dist.name}</h3>
                        
                        <div className="flex items-start gap-3 text-slate-500 mb-6">
                          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                          <div className="font-normal leading-[1.6] text-[15px]">
                            {dist.address}<br />
                            {dist.city}, {dist.country}
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-6 border-t border-slate-100 space-y-3 mb-8">
                          <a href={`tel:${dist.phone}`} className="flex items-center gap-3 text-[14px] md:text-[15px] text-navy-700 hover:text-amber-600 font-bold transition-colors">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center"><PhoneCall className="w-4 h-4 text-slate-400" /></div>
                            {dist.phone}
                          </a>
                          <a href={`mailto:${dist.email}`} className="flex items-center gap-3 text-[14px] md:text-[15px] text-navy-700 hover:text-amber-600 font-bold transition-colors">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center"><Mail className="w-4 h-4 text-slate-400" /></div>
                            {dist.email}
                          </a>
                        </div>

                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${dist.name} ${dist.address} ${dist.city} ${dist.country}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-sm group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" /> 
                          View on Google Maps
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {filteredDistributors.length === 0 && (
                <div className="text-center py-12 sm:py-20 px-4 sm:px-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 mt-6 shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">No distributors in this region</h3>
                  <p className="text-slate-500 text-[15px] leading-[1.6] font-normal mb-6 max-w-md mx-auto">We are actively looking for qualified partners to exclusively represent BRC in this territory.</p>
                  <button 
                    onClick={() => setActiveModal('register')} 
                    className="inline-flex items-center gap-2 bg-amber-500 text-navy-950 font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20 whitespace-nowrap"
                  >
                    Apply for Territory Rights <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modals for Login & Register */}
      <AnimatePresence>
        {activeModal !== 'none' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => closeModal()}
              className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
            />
            
            {/* Modal Content Wrapper */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className={`relative z-10 w-full max-w-4xl flex flex-col ${activeModal === 'login' ? 'h-auto p-4 sm:p-0' : 'h-full sm:h-auto'}`}
            >
              {/* LOGIN MODAL */}
              {activeModal === 'login' && (
                <div className="max-w-md mx-auto w-full bg-white rounded-[2rem] shadow-2xl border border-slate-200/60 relative flex flex-col overflow-hidden">
                  {/* Fixed Header with Close Button */}
                  <div className="shrink-0 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 bg-white relative z-20 flex justify-end">
                    <button 
                      onClick={() => closeModal()}
                      className="w-10 h-10 bg-navy-900 hover:bg-navy-800 text-white shadow-xl shadow-navy-900/20 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-amber-50 rounded-full opacity-50 blur-2xl z-0 pointer-events-none"></div>

                  <div className="px-6 sm:px-8 pb-8 sm:pb-10 relative z-10 flex flex-col items-center">
                    <div className="text-center mb-6 relative z-10 w-full">
                      <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-navy-900/20">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                      <SectionHeader
                        title="Portal Coming Soon"
                        description="We are currently building our online wholesale portal. Check back soon for B2B pricing, live inventory, and bulk ordering."
                        align="center"
                        theme="light"
                        accentColor="navy"
                        plainText={true}
                        className="!mb-0"
                      />
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center w-full">
                      <p className="text-slate-500 text-center mb-6">
                        If you are interested in becoming a partner, please submit an application.
                      </p>
                      <button 
                        onClick={() => setActiveModal('register')} 
                        className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group whitespace-nowrap w-full sm:w-auto"
                      >
                        Become a Partner <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* REGISTER MODAL */}
              {activeModal === 'register' && (
                <div className="w-full h-full sm:h-auto sm:max-h-[85vh] bg-white rounded-none sm:rounded-[2.5rem] shadow-2xl border-0 sm:border border-slate-200/60 relative flex flex-col overflow-hidden">
                  {/* Fixed Header with Close Button — stays pinned above scrolling form and preserves rounded curve */}
                  <div className="shrink-0 px-6 sm:px-8 lg:px-12 pt-7 sm:pt-9 pb-5 border-b border-slate-100 bg-white relative z-10 pr-20 sm:pr-24">
                    <button 
                      onClick={() => closeModal()}
                      className="absolute top-6 sm:top-8 right-6 sm:right-8 w-10 h-10 bg-navy-900 hover:bg-navy-800 text-white shadow-xl shadow-navy-900/20 rounded-full flex items-center justify-center transition-transform hover:scale-105 z-20"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <SectionHeader 
                      title="Become a BRC Distributor" 
                      description="Join our authorized network and gain access to factory-direct pricing, technical support, and marketing resources." 
                      accentColor="navy"
                      plainText={true}
                      className="!mb-0"
                    />
                  </div>

                  {/* Scrollable Body — vertical scroll starts cleanly below the header and curve */}
                  <div className="modal-scroll flex-1 overflow-y-auto px-6 sm:px-8 lg:px-12 py-6 mb-2">
                  {isSuccess ? (
                    <div className="mt-12 text-center py-16 px-4">
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                        <ShieldCheck className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-navy-900 mb-4">Application Received!</h3>
                      <p className="text-slate-600 text-lg max-w-md mx-auto mb-8">
                        Thank you for your interest in becoming a BRC partner. Our distributor success team will review your application and contact you within 2-3 business days.
                      </p>
                      <button 
                        onClick={closeModal}
                        className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md"
                      >
                        Return to Distributors
                      </button>
                    </div>
                  ) : (
                    <form className="mt-6 grid md:grid-cols-2 gap-x-6 gap-y-5" onSubmit={handleRegisterSubmit}>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-navy-900 mb-2">Company Name *</label>
                        <div className="relative">
                          <Building className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input required type="text" className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 text-navy-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all text-base font-medium" placeholder="Acme Truck Parts LLC" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">Contact Name *</label>
                        <div className="relative">
                          <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input required type="text" className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 text-navy-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all text-base font-medium" placeholder="John Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">Business Email *</label>
                        <div className="relative">
                          <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input required type="email" className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 text-navy-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all text-base font-medium" placeholder="john@company.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">Phone Number *</label>
                        <div className="relative">
                          <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input required type="tel" className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 text-navy-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all text-base font-medium" placeholder="+1 (555) 000-0000" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">Country / Region *</label>
                        <div className="relative">
                          <Globe className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <select required className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 text-navy-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all text-base text-navy-900 font-medium appearance-none">
                            <option value="">Select Region...</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            <option>Europe</option>
                            <option>Middle East</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:col-span-2 mt-6 flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                        <input required type="checkbox" id="terms" className="mt-1 w-5 h-5 text-navy-900 rounded border-slate-300 focus:ring-navy-900" />
                        <label htmlFor="terms" className="text-[14px] text-slate-600 leading-[1.6] font-normal">
                          I verify that I am an authorized representative of this company and agree to the BRC Distributor Terms & Conditions. I understand that submitting this application does not guarantee partnership approval. *
                        </label>
                      </div>
                      <div className="md:col-span-2 mt-4">
                        <button disabled={isSubmitting} type="submit" className="w-full bg-navy-900 hover:bg-navy-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-extrabold py-5 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-navy-900/20 flex items-center justify-center gap-2 group text-base sm:text-lg whitespace-nowrap">
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">Processing <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></span>
                          ) : (
                            <span className="flex items-center gap-2">Submit Partnership Application <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" /></span>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </article>
  );
}


"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, User, FileSignature, ArrowRight, Globe, Lock, Mail, Building, Phone, PhoneCall, ExternalLink, ShieldCheck, X } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

const MOCK_DISTRIBUTORS = [
  { id: 1, region: 'North America', name: 'Apex Heavy Duty Parts', address: '1200 Industrial Blvd', city: 'Dallas, TX', country: 'USA', phone: '+1 (214) 555-0198', email: 'sales@apexhd.com', type: 'Master Distributor' },
  { id: 2, region: 'North America', name: 'Northern Fleet Supply', address: '4500 W Logistics Way', city: 'Chicago, IL', country: 'USA', phone: '+1 (312) 555-0142', email: 'orders@northernfleet.com', type: 'Regional Partner' },
  { id: 3, region: 'North America', name: 'TransCanada Truck Parts', address: '88 Transport Road', city: 'Toronto, ON', country: 'Canada', phone: '+1 (416) 555-0188', email: 'info@transcanadaparts.ca', type: 'Regional Partner' },
  { id: 4, region: 'Europe', name: 'EuroTruck Spares GmbH', address: 'Dieselstraße 14', city: 'Frankfurt', country: 'Germany', phone: '+49 69 12345678', email: 'info@eurotruck.de', type: 'Master Distributor' },
  { id: 5, region: 'Middle East', name: 'Gulf Commercial Auto', address: 'Al Quoz Industrial Area 3', city: 'Dubai', country: 'UAE', phone: '+971 4 123 4567', email: 'sales@gulfcommercial.ae', type: 'Regional Partner' },
  { id: 6, region: 'Asia Pacific', name: 'Pacific Commercial Parts', address: '120 Logistics Place', city: 'Brisbane, QLD', country: 'Australia', phone: '+61 7 1234 5678', email: 'sales@pacificparts.com.au', type: 'Master Distributor' },
];

const REGIONS = ['All', 'North America', 'Europe', 'Middle East', 'Asia Pacific', 'South America', 'Africa'];

export default function DistributorsClient() {
  const [activeModal, setActiveModal] = useState<'none' | 'login' | 'register'>('none');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredDistributors = MOCK_DISTRIBUTORS.filter(d => selectedRegion === 'All' || d.region === selectedRegion);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-clip relative">
      <PageHeader
        badge="Global Network & Portal"
        title="Partner with the Industry Leader"
        description="Find an authorized BRC distributor near you, log in to the wholesale partner portal, or apply to join our global network."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Distributors' }
        ]}
      />

      {/* Main Content Area */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20 flex-grow flex flex-col mb-16">
        
        {/* Overlapping Quick Actions Box */}
        <div className="-mt-16 sm:-mt-20 bg-white border border-slate-200 rounded-2xl sm:rounded-[2rem] p-6 lg:p-8 shadow-xl shadow-slate-200/50 mb-10 sm:mb-16 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">Partner Portal</h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">Access B2B pricing, or apply to join our global network.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button onClick={() => setActiveModal('login')} className="bg-navy-50 text-navy-900 hover:bg-navy-100 border border-navy-100 font-extrabold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md w-full md:w-auto text-base sm:text-lg">
                 <Lock className="w-5 h-5"/> Partner Login
              </button>
              <button onClick={() => setActiveModal('register')} className="bg-amber-500 text-navy-950 hover:bg-amber-400 font-extrabold px-6 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 w-full md:w-auto text-base sm:text-lg hover:-translate-y-0.5">
                 <FileSignature className="w-5 h-5"/> Become a Partner
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
                  <p className="text-sm text-slate-600">All listed distributors are fully authorized to sell genuine BRC OEM replacement parts and honor factory warranties.</p>
                </div>
              </div>
            </div>

            {/* Right Side Grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-2">
                  Global Authorized Network
                </h1>
                <p className="text-lg text-slate-500">
                  {selectedRegion === 'All' ? 'Showing all international distributors.' : `Showing authorized distributors in ${selectedRegion}.`}
                </p>
              </div>

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
                      className="bg-white rounded-[2rem] border border-slate-200/60 p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 flex flex-col relative overflow-hidden group"
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
                        
                        <h3 className="text-xl font-extrabold text-navy-900 mb-2">{dist.name}</h3>
                        
                        <div className="flex items-start gap-3 text-slate-500 text-sm mb-6">
                          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                          <div className="font-medium leading-relaxed">
                            {dist.address}<br />
                            {dist.city}, {dist.country}
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-6 border-t border-slate-100 space-y-3 mb-8">
                          <a href={`tel:${dist.phone}`} className="flex items-center gap-3 text-sm text-navy-700 hover:text-amber-600 font-bold transition-colors">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center"><PhoneCall className="w-4 h-4 text-slate-400" /></div>
                            {dist.phone}
                          </a>
                          <a href={`mailto:${dist.email}`} className="flex items-center gap-3 text-sm text-navy-700 hover:text-amber-600 font-bold transition-colors">
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
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 mt-6 shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">No distributors in this region</h3>
                  <p className="text-slate-500 font-medium mb-6 max-w-md mx-auto">We are actively looking for qualified partners to exclusively represent BRC in this territory.</p>
                  <button 
                    onClick={() => setActiveModal('register')} 
                    className="inline-flex items-center gap-2 bg-amber-500 text-navy-950 font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20"
                  >
                    Apply for Territory Rights <ArrowRight className="w-4 h-4" />
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal('none')}
              className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
            />
            
            {/* Modal Content Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="relative z-10 w-full max-w-4xl my-auto"
            >
              {/* LOGIN MODAL */}
              {activeModal === 'login' && (
                <div className="max-w-md mx-auto w-full min-h-screen sm:min-h-0 bg-white sm:rounded-[2rem] p-8 lg:p-10 shadow-2xl border-0 sm:border border-slate-200/60 relative overflow-hidden flex flex-col justify-center">
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="absolute top-6 right-6 w-10 h-10 bg-navy-900 hover:bg-navy-800 text-white shadow-xl shadow-navy-900/20 rounded-full flex items-center justify-center transition-transform hover:scale-105 z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  {/* Decorative element */}
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-amber-50 rounded-full opacity-50 blur-2xl"></div>

                  <div className="text-center mb-10 relative z-10">
                    <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-navy-900/20">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-navy-900 mb-2 font-heading tracking-tight">Partner Portal</h2>
                    <p className="text-slate-500 font-medium">Sign in to access B2B pricing, live inventory, and bulk ordering.</p>
                  </div>

                  <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input 
                          type="email" 
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-navy-900 font-medium"
                          placeholder="partner@company.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-sm font-bold text-navy-900">Password</label>
                        <a href="#" className="text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors">Forgot Password?</a>
                      </div>
                      <div className="relative">
                        <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input 
                          type="password" 
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-navy-900 font-medium"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group mt-4">
                      Sign In Securely <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              )}

              {/* REGISTER MODAL */}
              {activeModal === 'register' && (
                <div className="w-full min-h-screen sm:min-h-0 bg-white sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl border-0 sm:border border-slate-200/60 relative overflow-hidden flex flex-col justify-center">
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="absolute top-6 right-6 w-10 h-10 bg-navy-900 hover:bg-navy-800 text-white shadow-xl shadow-navy-900/20 rounded-full flex items-center justify-center transition-transform hover:scale-105 z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <SectionHeader 
                    title="Become a BRC Distributor" 
                    description="Join our authorized network and gain access to factory-direct pricing, technical support, and marketing resources." 
                    accentColor="navy"
                  />
                  <form className="mt-12 grid md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-navy-900 mb-2">Company Name</label>
                      <div className="relative">
                        <Building className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input type="text" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all font-medium" placeholder="Acme Truck Parts LLC" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-2">Contact Name</label>
                      <div className="relative">
                        <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input type="text" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all font-medium" placeholder="John Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-2">Business Email</label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input type="email" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all font-medium" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input type="tel" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all font-medium" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-2">Country / Region</label>
                      <div className="relative">
                        <Globe className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <select className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white transition-all text-navy-900 font-medium appearance-none">
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
                      <input type="checkbox" id="terms" className="mt-1 w-5 h-5 text-navy-900 rounded border-slate-300 focus:ring-navy-900" />
                      <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed font-medium">
                        I verify that I am an authorized representative of this company and agree to the BRC Distributor Terms & Conditions. I understand that submitting this application does not guarantee partnership approval.
                      </label>
                    </div>
                    <div className="md:col-span-2 mt-4">
                      <button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-5 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-navy-900/20 flex items-center justify-center gap-2 group text-lg">
                        Submit Partnership Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

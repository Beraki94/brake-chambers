"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Globe, Truck, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const contactCards = [
  {
    icon: Phone,
    title: "Technical Sales Support",
    description: "For immediate assistance with OEM cross-referencing and inventory.",
    value: "+86 186 0202 1144",
    href: "https://wa.me/8618602021144",
    color: "emerald",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "For formal RFQs, container shipping logistics, and partnerships.",
    value: "sales@brcbrakechambers.com",
    href: "mailto:sales@brcbrakechambers.com",
    color: "amber",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
  },
  {
    icon: MapPin,
    title: "Global Headquarters",
    description: "Industrial Park, Ningbo, Zhejiang Province, China",
    value: "View on Map",
    href: "#",
    color: "navy",
    bgColor: "bg-navy-50",
    textColor: "text-navy-600",
    borderHover: "hover:border-navy-300",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday – Saturday: 08:00 – 18:00 CST (GMT+8). Closed Sundays & Chinese public holidays.",
    value: "08:00 – 18:00 CST",
    href: undefined,
    color: "slate",
    bgColor: "bg-slate-50",
    textColor: "text-slate-600",
    borderHover: "hover:border-slate-300",
  },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#F8FAFC] pb-20 font-sans">
      <PageHeader
        badge="Customer Support"
        title="Contact BRC Global Sales"
        description="Ready to equip your fleet with world-class safety? Our dedicated OEM and wholesale agents are available to assist with technical specs, cross-referencing, and bulk quotes."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Left Sidebar — Contact Info Cards */}
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1 order-2 lg:order-1 grid grid-cols-1 gap-3 sm:gap-4"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`bg-white rounded-xl sm:rounded-2xl shadow-md border border-slate-100 ${card.borderHover} p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${card.bgColor} ${card.textColor} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-navy-900 mb-1">{card.title}</h3>
                <p className="text-navy-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 text-justify">{card.description}</p>
                {card.href ? (
                  <a href={card.href} className={`${card.textColor} text-xs sm:text-sm font-bold hover:underline inline-flex items-center gap-1 break-all`}>
                    {card.value} <ArrowRight className="w-3 h-3 shrink-0" />
                  </a>
                ) : (
                  <span className="text-slate-700 text-xs sm:text-sm font-bold">{card.value}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side — Form */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 order-1 lg:order-2 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6 md:p-8 lg:p-10"
          >
            <SectionHeader
              badge="Wholesale Inquiries"
              title="Request a Wholesale Quote"
              align="left"
              accentColor="amber"
              className="!mb-6 sm:!mb-8"
            />

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Inquiry Submitted!</h3>
                <p className="text-slate-600 max-w-md mx-auto">Our sales team will review your request and respond within 24 business hours with a detailed quote.</p>
              </motion.div>
            ) : (
              <form className="space-y-4 sm:space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Company / Fleet Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="Global Trucking Logistics" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="john@company.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Phone / WhatsApp</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="+1 234 567 8900" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Destination Country</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="United States, Mexico, etc." 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Estimated Order Quantity</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all text-navy-600">
                      <option>Pallet (50 - 100 units)</option>
                      <option>LCL (100 - 500 units)</option>
                      <option>FCL (20ft / 40ft Container)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Part Numbers & Specifications</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400 resize-none" 
                    placeholder="E.g., Looking for a quote on 200x Type 30/30 Spring Brakes (cross ref: Bendix 801083)..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-navy-950 font-extrabold py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl hover:from-amber-300 hover:to-amber-500 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-[0.98] uppercase tracking-widest text-xs sm:text-[13px] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Additional Section: Global Reach */}
        <motion.section 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-navy-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

            <motion.div variants={fadeInUp} className="relative z-10 text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4 font-heading">Global Distribution Network</h2>
              <p className="text-navy-200 max-w-2xl mx-auto text-sm sm:text-base">We ship FCL containers to 40+ countries across six continents. Wherever your fleet operates, BRC chambers are ready to deliver.</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative z-10">
              {[
                { icon: Globe, stat: "40+", label: "Countries Served" },
                { icon: Truck, stat: "500K+", label: "Units Shipped/Year" },
                { icon: MessageCircle, stat: "24h", label: "Response Time" },
                { icon: CheckCircle, stat: "99.7%", label: "On-Time Delivery" }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleIn} className="bg-navy-900/60 backdrop-blur-md border border-navy-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-amber-500/50 transition-colors group">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">{item.stat}</div>
                  <div className="text-navy-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

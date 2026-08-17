"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Globe, Truck, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const contactCards = [
  {
    icon: Phone,
    title: "Technical Sales Support",
    description: "For immediate assistance with OEM cross-referencing and inventory.",
    value: "+86 13395856758",
    href: "tel:+8613395856758",
    color: "emerald",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "For formal RFQs, container shipping logistics, and partnerships.",
    value: "sales@brakechambers.com",
    href: "mailto:sales@brakechambers.com",
    color: "amber",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
  },
  {
    icon: MapPin,
    title: "Global Headquarters",
    description: "Block 3, No 55 Tianyang Rd, Fengqiao, Zhuji, Zhejiang. China 311811",
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
  const faqs = [
    {
      q: "What is your Minimum Order Quantity (MOQ)?",
      a: "For direct factory pricing, our MOQ is typically 1 standard pallet (approx. 50-100 units depending on the chamber size). For initial testing and prototyping, we can accommodate smaller LCL shipments."
    },
    {
      q: "What are your standard manufacturing lead times?",
      a: "Standard production time for FCL (Full Container Load) orders is 15-25 business days. Transit time varies by destination, but typically ranges from 14-30 days for global ocean freight."
    },
    {
      q: "Do you offer private labeling or custom OEM branding?",
      a: "Yes. We offer comprehensive private labeling services including custom laser etching, branded packaging, and custom paint coding for our high-volume distribution partners."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24 font-sans">
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
                className={`bg-white rounded-2xl sm:rounded-[2rem] shadow-md border border-slate-100 ${card.borderHover} p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group`}
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

          {/* Right Side — Form & FAQ */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col gap-6 sm:gap-8">
            {/* The Form */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-3xl sm:rounded-[2rem] shadow-xl border border-slate-100 p-6 sm:p-8 lg:p-10"
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
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="john@company.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Company / Fleet Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="Global Trucking Logistics" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                      placeholder="+1 234 567 8900" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Message & Requirements <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={4} 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400 resize-none" 
                    placeholder="Please include part numbers, estimated quantities, or destination country for shipping quotes..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl shadow-xl shadow-amber-500/20 transition-all active:scale-[0.98] uppercase tracking-widest text-xs sm:text-[13px] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
                </form>
              )}
            </motion.div>

            {/* The FAQ Accordion */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-3xl sm:rounded-[2rem] shadow-xl border border-slate-100 p-6 sm:p-8 lg:p-10"
            >
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-6 tracking-tight">Frequently Asked Questions</h3>
              <GlobalFAQAccordion faqs={faqs} />
              </motion.div>
            </div>
          </div>
          
        {/* Factory Location Map */}
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-6 sm:mt-8 bg-white rounded-3xl sm:rounded-[2rem] shadow-xl border border-slate-100 p-2 sm:p-3 relative overflow-hidden group"
        >
          <div className="absolute bottom-4 left-4 right-4 sm:top-8 sm:left-8 sm:bottom-auto sm:right-auto bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 z-20 pointer-events-none transform group-hover:scale-[1.02] sm:group-hover:scale-105 transition-transform duration-500">
            <h3 className="font-heading font-extrabold text-navy-900 text-base sm:text-lg mb-0.5 sm:mb-1 tracking-tight">BRC Manufacturing Headquarters</h3>
            <p className="text-xs sm:text-sm font-medium text-slate-500 flex items-center gap-1.5 sm:gap-2"><MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" /> <span className="truncate">Block 3, No 55 Tianyang Rd, Fengqiao, Zhuji</span></p>
          </div>
          
          {/* Amber Duotone Overlay */}
          <div className="absolute inset-0 bg-amber-500/30 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000 ease-out rounded-[1.25rem] sm:rounded-[1.5rem] m-2 sm:m-3"></div>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.57398188172!2d121.4633716503816!3d29.87834529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d634db8bebaeb%3A0xeab5c8148b301764!2sNingbo%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-[1.25rem] sm:rounded-[1.5rem] filter grayscale contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out relative z-0"
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Additional Section: Global Reach */}
        <motion.section 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 md:mt-24"
        >
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl">
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
                <motion.div key={i} variants={scaleIn} className="bg-navy-900/60 backdrop-blur-md border border-navy-700 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-colors group">
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

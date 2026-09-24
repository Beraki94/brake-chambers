const fs = require('fs');

const file = `"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, Phone, MapPin, Clock, Send, Globe, Truck, MessageCircle, ArrowRight, CheckCircle, User, Building, HelpCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const contactCards = [
  {
    icon: Phone,
    title: "Technical Sales Support",
    description: "Direct line to our engineering team for OEM cross-referencing, part specifications, and inventory checks.",
    value: "+86 13395856758",
    subtext: "Same number - WhatsApp available",
    href: "tel:+8613395856758",
    color: "emerald",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  {
    icon: Mail,
    title: "Wholesale & RFQ",
    description: "For formal RFQs, container shipping logistics, distribution partnerships, and pricing tiers.",
    value: "sales@brakechambers.com",
    subtext: "Typical response time: 2-4 hours",
    href: "mailto:sales@brakechambers.com",
    color: "amber",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
  },
  {
    icon: MapPin,
    title: "Manufacturing Facility",
    description: "Block 3, No 55 Tianyang Rd, Fengqiao, Zhuji, Zhejiang. China 311811",
    value: "View on Google Maps",
    href: "#map-section",
    color: "navy",
    bgColor: "bg-navy-50",
    textColor: "text-navy-600",
    borderHover: "hover:border-navy-300",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday - Saturday: 08:00 - 18:00 CST (GMT+8). Closed Sundays and Chinese public holidays.",
    value: "US: Prev day 19:00 - 05:00 EST | EU: 02:00 - 12:00 CET",
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
      a: "For standard catalog brake chambers, our MOQ is 500 units per order (LCL pilot order). For customized or private label orders, MOQ is typically 1,000 units per part number. Sample orders of 1-5 units are available for evaluation - contact us for sample pricing."
    },
    {
      q: "What are your standard manufacturing lead times?",
      a: "Standard catalog orders ship 30 days from order confirmation. Custom OEM or private label orders require 45-60 days depending on tooling and packaging requirements. Sample orders ship within 5-7 business days."
    },
    {
      q: "Do you offer private labeling or custom OEM branding?",
      a: "Yes. We offer both private label (custom paint, laser engraving, branded packaging on BRC-manufactured chambers) and custom OEM (full design-to-production of your proprietary chamber design). See our private label and custom OEM pages for details."
    },
    {
      q: "What payment terms do you accept?",
      a: "Standard terms are 30% deposit / 70% balance before shipment via T/T (bank wire). For long-term partners, we offer L/C at sight and revolving credit terms. Contact sales@brakechambers.com for terms specific to your order size."
    },
    {
      q: "Which countries do you ship to?",
      a: "BRC exports to 40+ countries across North America, Australia, New Zealand, Europe, and the Middle East. We handle FCL, LCL, and door-to-door container shipping with EXW, FOB, CIF, and DDP terms available."
    },
    {
      q: "What is your warranty policy?",
      a: "BRC brake chambers are covered by a 3-year limited warranty against manufacturing defects. Warranty claims are submitted through our online portal with photo documentation. Response within 24 hours. See our warranty page for full terms."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24 font-sans overflow-x-clip">
      <PageHeader
        badge="Customer Support"
        badgeIcon={PhoneCall}
        title="Contact BRC: Brake Chamber Sales & Technical Support"
        description="Connect with our OEM and wholesale team in Zhejiang, China. We respond to technical specifications, cross-reference requests, sample orders, and bulk pricing inquiries within 24 hours."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] -mt-6 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Left Sidebar - Contact Info Cards */}
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1 order-2 lg:order-1 grid grid-cols-1 gap-4"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={"bg-white rounded-2xl sm:rounded-[2rem] shadow-sm sm:shadow-md border border-slate-100 p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group relative overflow-hidden " + card.borderHover}
              >
                {/* Top Right Circle Decoration */}
                <div className={"absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0 pointer-events-none " + card.bgColor}></div>

                <div className="relative z-10">
                  <div className={"w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm " + card.bgColor + " " + card.textColor}>
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy-900 mb-1">{card.title}</h3>
                  <p className="text-navy-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 text-left">{card.description}</p>
                  
                  {card.subtext && <p className="text-slate-500 text-xs mb-2 italic">{card.subtext}</p>}

                  {card.href ? (
                    <a href={card.href} className={card.textColor + " text-xs sm:text-sm font-bold hover:underline inline-flex items-center gap-1 break-all"}>
                      {card.value} <ArrowRight className="w-3 h-3 shrink-0" />
                    </a>
                  ) : (
                    <span className="text-slate-700 text-xs sm:text-sm font-bold">{card.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Form & FAQ */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col gap-6 sm:gap-8">
            {/* The Form */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-none sm:rounded-[2rem] shadow-sm sm:shadow-xl border-y sm:border border-slate-100 p-6 sm:p-8 lg:p-10 -mx-4 sm:mx-0"
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
                    <div className="relative">
                      <User className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        required
                        className="w-full pl-11 sm:pl-12 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        type="email" 
                        required
                        className="w-full pl-11 sm:pl-12 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Company / Fleet Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Building className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        required
                        className="w-full pl-11 sm:pl-12 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                        placeholder="Global Trucking Logistics" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Country <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Globe className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        required
                        className="w-full pl-11 sm:pl-12 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                        placeholder="United States" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        className="w-full pl-11 sm:pl-12 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400" 
                        placeholder="+1 234 567 8900" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Inquiry Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <HelpCircle className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                      <select 
                        required
                        defaultValue=""
                        className="w-full pl-11 sm:pl-12 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all text-navy-900 appearance-none"
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="technical">Technical Support</option>
                        <option value="sample">Sample Request</option>
                        <option value="partnership">Partnership</option>
                        <option value="general">General Inquiry</option>
                        <option value="press">Press</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Message & Requirements <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={4} 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400 resize-none pt-3" 
                    placeholder="Please include part numbers, estimated quantities, or destination country for shipping quotes..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-navy-900/20 flex items-center justify-center gap-2 group text-lg mt-6"
                >
                  Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              className="bg-white rounded-none sm:rounded-[2rem] shadow-sm sm:shadow-xl border-y sm:border border-slate-100 p-6 sm:p-8 lg:p-10 -mx-4 sm:mx-0"
            >
              <SectionHeader
                title="Frequently Asked Questions"
                align="left"
                theme="light"
                accentColor="amber"
                plainText={true}
                className="!mb-6"
              />
              <GlobalFAQAccordion faqs={faqs} />
              </motion.div>
            </div>
          </div>
        </div>
          
        {/* Factory Location Map - Full Width */}
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 sm:mt-20 lg:mt-24 bg-white border-y border-slate-200 overflow-hidden relative w-full"
        >
          {/* Main Map Container */}
          <div id="map-section" className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] group bg-slate-100">
            {/* Amber Duotone Overlay - covers the entire map seamlessly */}
            <div className="absolute inset-0 bg-amber-500/15 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000 ease-out"></div>
            
            {/* The Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.57398188172!2d121.4633716503816!3d29.87834529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d634db8bebaeb%3A0xeab5c8148b301764!2sNingbo%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full filter -[0.8] contrast-[1.1] opacity-90 group-hover:-0 group-hover:opacity-100 transition-all duration-1000 ease-out z-0"
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Floating Info Card - Positioned at bottom left, fully responsive */}
            <div className="absolute bottom-0 left-0 w-full sm:w-auto p-4 sm:p-6 z-20 pointer-events-none flex justify-center sm:justify-start">
              <div className="bg-white/95 backdrop-blur-md px-5 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 transform group-hover:-translate-y-1 sm:group-hover:-translate-y-2 transition-transform duration-500 w-full sm:w-auto max-w-[400px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-heading font-extrabold text-navy-900 text-base sm:text-lg mb-0.5 sm:mb-1 tracking-tight">BRC Manufacturing Headquarters</h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed">
                      Block 3, No 55 Tianyang Rd, Fengqiao,<br className="hidden sm:block" />
                      Zhuji, Zhejiang, China
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Re-open container for the next section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] mb-20">
          {/* Additional Section: Global Reach */}
          <motion.section 
            variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-16 md:mt-24"
        >
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-none sm:shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

            <motion.div variants={fadeInUp} className="relative z-10">
              <SectionHeader
                badge="Global Reach"
                title="Global Distribution Network"
                description="We ship FCL containers to 40+ countries across six continents. Wherever your fleet operates, BRC chambers are ready to deliver."
                align="center"
                theme="dark"
                accentColor="amber"
                className="!mb-8 sm:!mb-12"
              />
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
      
      {/* SECTION 7: BOTTOM CTA */}
      <section className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>

            <div className="relative z-10 flex-1 max-w-2xl text-center md:text-left">
              <SectionHeader
                badge="Ready to Order?"
                title={<>Request a Wholesale <span className="text-amber-400">Brake Chamber Quote</span></>}
                description="Tell us your target volumes, brake chamber types, and destination country. Our team will respond with factory-direct pricing, estimated lead times, and shipping options within 24 hours."
                align="left"
                theme="dark"
                accentColor="amber"
                className="!mb-0"
                plainText={true}
              />
            </div>

            <div className="relative z-10 flex flex-col w-full md:w-auto gap-4 min-w-[240px] shrink-0 mt-8 md:mt-0">
              <Link 
                href="/quote" 
                className="bg-amber-500 text-navy-950 font-black py-4 px-8 rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 text-center uppercase tracking-widest text-[13px] transform hover:-translate-y-1"
              >
                Request a Quote <ArrowRight className="inline-block w-4 h-4 ml-2 -mt-1" />
              </Link>
              <Link 
                href="/contact?subject=Sample+Request" 
                className="bg-navy-800 text-white border border-navy-600 font-black py-4 px-8 rounded-xl hover:bg-navy-700 hover:border-navy-500 transition-all text-center uppercase tracking-widest text-[13px] transform hover:-translate-y-1"
              >
                Order Evaluation Samples
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
`;

fs.writeFileSync('src/features/contact/components/ContactClient.tsx', file);
console.log('Done writing ContactClient.tsx');

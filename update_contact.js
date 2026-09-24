const fs = require('fs');

const file = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, Phone, MapPin, Clock, Send, Globe, Truck, MessageCircle, ArrowRight, CheckCircle, User, Building, Map, HelpCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const contactCards = [
  {
    icon: Phone,
    title: "Technical Sales Support",
    description: "Direct line to our engineering team for OEM cross-referencing, part specifications, and application questions.",
    value: "+86 139 6556 7530",
    subtext: "Same number — WhatsApp available",
    href: "tel:+8613965567530",
    color: "emerald",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  {
    icon: Mail,
    title: "Wholesale & RFQ Inquiries",
    description: "For formal RFQs, container shipping logistics, private label programs, and distribution partnerships.",
    value: "sales@brakechambers.com",
    href: "mailto:sales@brakechambers.com",
    color: "amber",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
  },
  {
    icon: MapPin,
    title: "Manufacturing Facility",
    description: "Block 3, No 55 Tianyang Rd, Fengqiao, Zhuji, Zhejiang, China 311811",
    value: "View on Google Maps →",
    href: "#map-section",
    color: "navy",
    bgColor: "bg-navy-50",
    textColor: "text-navy-600",
    borderHover: "hover:border-navy-300",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday — Saturday: 08:00 — 18:00 CST (GMT+8). Closed Sundays and Chinese public holidays.",
    value: "US: Prev day 19:00—05:00 EST | EU: 02:00—12:00 CET",
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
      a: "For standard catalog brake chambers, our MOQ is 500 units per order (LCL pilot order). For customized or private label orders, MOQ is typically 1,000 units per part number. Sample orders of 1–5 units are available for evaluation — contact us for sample pricing."
    },
    {
      q: "What are your standard manufacturing lead times?",
      a: "Standard catalog orders ship 30 days from order confirmation. Custom OEM or private label orders require 45–60 days depending on tooling and packaging requirements. Sample orders ship within 5–7 business days."
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
    <div className="bg-[#F8FAFC] pb-0 font-sans overflow-x-clip">
      {/* SECTION 1 — PAGE HERO */}
      <PageHeader
        badge="Customer Support"
        badgeIcon={PhoneCall}
        title="Contact BRC — Brake Chamber Sales & Technical Support"
        description="Connect with our OEM and wholesale team in Zhejiang, China. We respond to technical specifications, cross-reference requests, sample orders, and bulk pricing inquiries within 24 hours."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
      />

      {/* SECTION 2 & 3 — CONTACT CARDS & CONTACT FORM */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] -mt-6 sm:-mt-16 relative z-20 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Left Sidebar — Contact Info Cards */}
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
                      {card.value}
                    </a>
                  ) : (
                    <span className="text-slate-700 text-xs sm:text-sm font-bold">{card.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side — Form */}
          <div className="lg:col-span-2 2xl:col-span-3 order-1 lg:order-2 flex flex-col gap-6 sm:gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-none sm:rounded-[2rem] shadow-sm sm:shadow-xl border-y sm:border border-slate-100 p-6 sm:p-8 lg:p-10 -mx-4 sm:mx-0"
            >
              <SectionHeader
                badge="Send a Message"
                title="Contact BRC Brake Chambers"
                description="For general inquiries, technical support, or partnership questions. For specific pricing requests, use our dedicated quote form."
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
                  <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">We respond within 24 business hours.</p>
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
                      <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Company Name <span className="text-red-500">*</span></label>
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
                          placeholder="+1 (555) 000-0000" 
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
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5 sm:mb-2">Message <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <MessageCircle className="w-5 h-5 text-slate-400 absolute left-3.5 sm:left-4 top-4" />
                      <textarea 
                        required
                        rows={4}
                        className="w-full pl-11 sm:pl-12 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all placeholder:text-slate-400 resize-none pt-3" 
                        placeholder="Describe your inquiry. For technical questions, include part numbers or vehicle details."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 uppercase tracking-widest text-xs sm:text-sm"
                    >
                      <Send className="w-4 h-4" />
                      Send Message →
                    </button>
                    <span className="text-slate-500 text-xs font-medium text-center">We respond within 24 business hours.</span>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <a href="/quote" className="text-navy-600 font-bold hover:text-amber-500 transition-colors text-sm flex items-center justify-center sm:justify-start gap-2">
                      Need a wholesale quote? Use our dedicated quote form →
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION 4 — FAQ */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Common Questions"
              title="Contact & Ordering FAQs"
              description="Answers to the most common questions from distributors, fleet managers, and importers contacting BRC."
              align="center"
            />
            <div className="mt-12">
              <GlobalFAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — MAP */}
      <section id="map-section" className="relative h-[400px] md:h-[600px] w-full bg-slate-200 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.673809618032!2d120.21980005!3d29.74230005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ0JzMyLjMiTiAxMjDCsDEzJzExLjMiRQ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
        ></iframe>
        <div className="absolute inset-0 bg-navy-900/10 pointer-events-none"></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:-translate-x-0 w-[calc(100%-40px)] md:w-[400px] bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h4 className="font-bold text-navy-900 text-lg mb-1">BRC Brake Chamber Factory</h4>
              <p className="text-slate-600 text-sm mb-3">Zhejiang, China</p>
              <p className="text-slate-500 text-xs mb-4">Block 3, No 55 Tianyang Rd, Fengqiao, Zhuji, Zhejiang, China 311811</p>
              <a href="https://maps.google.com/?q=Zhuji+Zhejiang+China" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold text-sm hover:underline flex items-center gap-1">
                Get Directions <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — GLOBAL DISTRIBUTION */}
      <section className="py-16 md:py-24 bg-slate-50 relative border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Global Reach"
              title="BRC Brake Chamber Distribution Network"
              description="BRC exports FCL and LCL brake chamber orders to 40+ countries across North America, Australia, New Zealand, Europe, and the Middle East. Direct factory shipping from our Zhejiang facility to your port or warehouse."
              align="center"
              className="!mb-8"
            />
            <a href="/manufacturing/process" className="inline-flex items-center gap-2 text-navy-600 font-bold hover:text-amber-500 transition-colors">
              View Shipping & Logistics <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — BOTTOM CTA */}
      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Ready to Order?"
            title="Request a Wholesale Brake Chamber Quote"
            description="Tell us your target volumes, brake chamber types, and destination country. Our team will respond with factory-direct pricing, estimated lead times, and shipping options within 24 hours."
            align="center"
            theme="dark"
            className="!mb-10 max-w-3xl mx-auto"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/quote" className="inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 uppercase tracking-widest text-sm transform hover:-translate-y-1">
              Request a Quote →
            </a>
            <a href="/contact?subject=Sample+Request" className="inline-flex justify-center items-center gap-2 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white font-bold px-8 py-4 rounded-xl transition-all uppercase tracking-widest text-sm">
              Order Evaluation Samples →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
`

fs.writeFileSync('src/features/contact/components/ContactClient.tsx', file);
console.log('Done writing ContactClient.tsx');

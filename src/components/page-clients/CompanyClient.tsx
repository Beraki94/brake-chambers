"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Microscope, MapPin, Globe2, Wrench, Sparkles, TestTube, History, Users, Layers, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CompanyClient() {
  const pillars = [
    {
      title: "Phase 01 — The Foundation",
      subtitle: "Decades of Engineering Excellence",
      desc: "BRC was founded on a simple principle: reverse-engineer the most common failure points in commercial transport and build a better brake chamber. Today, our leadership team continues that legacy of relentless innovation.",
      keyFeatures: [
        { icon: <Microscope className="w-5 h-5" />, title: "Reverse-Engineering", desc: "We study OEM failures and build better solutions." },
        { icon: <Globe2 className="w-5 h-5" />, title: "Global Manufacturer", desc: "Trusted by fleets in 35+ countries." },
        { icon: <ShieldCheck className="w-5 h-5" />, title: "Tier-1 Supplier", desc: "Certified to IATF 16949 standards." }
      ],
      image: "/images/engineering_blueprint.png",
      colors: {
        bg: "bg-amber-900/20",
        hoverBorder: "hover:border-amber-300",
        from: "from-amber-50/50",
        iconBg: "bg-amber-50",
        iconBorder: "border-amber-100",
        iconText: "text-amber-500",
        linkText: "text-amber-600"
      },
      cards: [
        {
          id: 'our-story',
          title: 'Our Story & History',
          desc: 'Explore our journey from a specialized mechanical engineering firm to becoming a global tier-1 manufacturer supplying heavy-duty commercial air brake components worldwide.',
          icon: <History className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
          href: '/company/our-story',
          keywords: ['Heritage', 'Global Growth', 'Milestones']
        },
        {
          id: 'leadership',
          title: 'Leadership Team',
          desc: 'Our executive and engineering leadership teams bring decades of combined experience in commercial vehicle braking systems, metallurgical science, and lean manufacturing.',
          icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
          href: '/company/leadership',
          keywords: ['Engineering Experts', 'Lean Manufacturing', 'Metallurgy']
        }
      ],
      ctaLabel: "Explore Our Story",
      ctaHref: "/company/our-story"
    },
    {
      title: "Phase 02 — The Factory",
      subtitle: "Vertically Integrated Manufacturing",
      desc: "Unlike resellers and drop-shippers, we own our entire production lifecycle. From our in-house aluminum die casting and robotic welding to advanced E-coating and automated assembly, every process stays under one roof. This eliminates supply chain bottlenecks and ensures absolute control over every component.",
      keyFeatures: [
        { icon: <Factory className="w-5 h-5" />, title: "In-House Aluminum Die Casting", desc: "Proprietary casting of lightweight, high-strength housings." },
        { icon: <Wrench className="w-5 h-5" />, title: "Robotic Welding", desc: "6-axis arms for deep-penetration seams and structural integrity." },
        { icon: <Sparkles className="w-5 h-5" />, title: "Advanced E-Coat Protection", desc: "Multi-stage electro-deposition coating for superior corrosion resistance." }
      ],
      image: "/images/manufacturing_floor.png",
      colors: {
        bg: "bg-navy-900/20",
        hoverBorder: "hover:border-navy-300",
        from: "from-navy-50/50",
        iconBg: "bg-navy-50",
        iconBorder: "border-navy-100",
        iconText: "text-navy-500",
        linkText: "text-navy-600"
      },
      cards: [
        {
          id: 'production-process',
          title: 'Manufacturing Process',
          desc: 'Take an exclusive look inside our world-class facilities. Witness how we utilize 6-axis robotic welding arms for deep-penetration seams, ensuring absolute structural integrity.',
          icon: <Factory className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />,
          href: '/company/manufacturing-process',
          keywords: ['Robotic Welding', 'CNC Machining', 'Burst Resistance']
        },
        {
          id: 'facility-overview',
          title: 'Production Facility',
          desc: 'Our primary manufacturing campus is a state-of-the-art, IATF 16949 certified facility spanning over 500,000 square feet, designed for massive scale and direct-to-port logistics.',
          icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />,
          href: '/company/production-facility',
          keywords: ['500,000 Sq Ft Campus', 'Global Logistics']
        },
        {
          id: 'material-sourcing',
          title: 'Material Sourcing',
          desc: 'The best engineering means nothing if raw materials fail. Discover why we strictly source premium 8-gauge steel and utilize advanced neoprene rubber compounds.',
          icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />,
          href: '/company/material-sourcing',
          keywords: ['8-Gauge Steel', 'Neoprene Diaphragms', 'Die Casting']
        }
      ],
      ctaLabel: "Production Facility",
      ctaHref: "/company/production-facility"
    },
    {
      title: "Phase 03 — The Standard",
      subtitle: "Zero-Defect Quality Control",
      desc: "A commercial truck hauling 80,000 lbs cannot afford a brake failure. That is why our in-house testing laboratory and our strict adherence to international safety standards represent the most crucial pillars of our operation.",
      keyFeatures: [
        { icon: <Microscope className="w-5 h-5" />, title: "1 Million Cycle Test", desc: "Continuous actuate/release cycles to ensure extreme durability." },
        { icon: <TestTube className="w-5 h-5" />, title: "Salt Spray Corrosion", desc: "Advanced E-coating tested for harsh winter road conditions." },
        { icon: <ShieldCheck className="w-5 h-5" />, title: "Pneumatic Leak Testing", desc: "100% end-of-line testing for every chamber." }
      ],
      image: "/products/scattered_chambers_footer.png",
      colors: {
        bg: "bg-emerald-900/20",
        hoverBorder: "hover:border-emerald-300",
        from: "from-emerald-50/50",
        iconBg: "bg-emerald-50",
        iconBorder: "border-emerald-100",
        iconText: "text-emerald-600",
        linkText: "text-emerald-600"
      },
      cards: [
        {
          id: 'testing-laboratory',
          title: 'Brake Testing Lab',
          desc: 'See inside our lab where we subject chambers to 1 million+ continuous actuate/release cycles, intense salt spray corrosion environments, and extreme temperature variations.',
          icon: <Microscope className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
          href: '/company/brake-testing-lab',
          keywords: ['1 Million Cycle Test', 'Salt Spray', 'End-of-Line']
        },
        {
          id: 'iso-certifications',
          title: 'IATF Certifications & Compliance',
          desc: 'Our entire manufacturing ecosystem is audited strictly under IATF 16949 Quality Management Systems, complying fully with SAE J1469 and FMVSS 121 standards.',
          icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
          href: '/company/iatf-certifications',
          keywords: ['IATF 16949', 'SAE J1469', 'FMVSS 121']
        },
        {
          id: 'innovations',
          title: 'Brake R&D',
          desc: 'Partner with our dedicated R&D division for custom OEM engineering solutions and the next generation of Air Disc Brake (ADB) technologies.',
          icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
          href: '/company/brake-r-and-d',
          keywords: ['Air Disc Brakes', 'Custom OEM Solutions']
        }
      ],
      ctaLabel: "View Certifications",
      ctaHref: "/company/iatf-certifications"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-clip">
      <PageHeader
        badge="Company Overview"
        title="Built by Engineers. Trusted by Fleets."
        description="Deep engineering, vertically integrated manufacturing, and uncompromising quality control. Welcome to BRC Brake Chambers — where every chamber is designed, tested, and built in our own factory."
        imageSrc="/images/engineering_blueprint.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company' }
        ]}
      >
        <Link href="/company/iatf-certifications" className="inline-flex items-center text-amber-500 font-bold hover:text-amber-400 transition-colors uppercase tracking-widest text-sm mt-4">
          View IATF Certifications <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </PageHeader>

      {/* SECTION 2: THE BRC STANDARD - Premium Image Redesign */}
      <div className="relative border-b border-slate-200">
        <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
          {/* Background Image of the Company/Factory */}
          <div className="absolute inset-0 z-0 w-full h-full lg:w-[60%] lg:left-auto lg:right-0">
            <Image
              src="/images/manufacturing_floor.png"
              alt="BRC Manufacturing Facility"
              fill
              className="object-cover object-right-top opacity-90 grayscale"
            />
            {/* Gradient fading to blend image with the white background */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 lg:via-slate-50/50 to-transparent z-10"></div>
            {/* Blue tint overlay */}
            <div className="absolute inset-0 bg-navy-900/10 z-10 mix-blend-overlay"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col justify-center text-left">
            <div className="max-w-3xl w-full">
              <SectionHeader
                badge={<span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> The BRC Standard</span>}
                title={<>Engineered to Outperform.<br />Built to <span className="text-amber-500">Last.</span></>}
                align="left"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-white relative overflow-hidden -mt-6"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600"></div>
                <p className="text-slate-700 text-lg font-light leading-relaxed mb-6">
                  When you partner with BRC Brake Chambers, you are cutting out the middlemen and dealing directly with the source.
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  As a vertically integrated manufacturer of commercial air brake actuators, we control every variable of the production process — from raw metallurgy to final pneumatic leak testing.
                </p>
                <p className="text-navy-900 font-bold text-base leading-snug pt-6 border-t border-slate-200">
                  This means higher burst strength, longer operational lifespans, and absolute reliability for heavy-duty fleets worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* The Ultra-Stable Sticky-Scroll */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {pillars.map((pillar, pIdx) => (
            // Flex layout with items-start is CRITICAL for the sticky element to work smoothly without snapping or jittering.
            <div key={pIdx} className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-16 lg:mb-24 last:mb-0 relative border-t border-slate-200 pt-12 lg:pt-16 first:border-0 first:pt-0">
              {/* STICKY LEFT COLUMN */}
              <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-10 flex flex-col">
                <div className="mb-6 inline-block self-start px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest shadow-sm">
                  {pillar.title.split(' — ')[0]}
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4 tracking-tight pb-2">
                  {pillar.subtitle}
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-slate-600 mb-8 max-w-lg">
                  {pillar.desc}
                </p>
                
                {/* 3 Pillars / Key Features block */}
                <div className="space-y-4">
                  {pillar.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${pillar.colors.iconBg} ${pillar.colors.iconBorder} ${pillar.colors.iconText}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-extrabold text-navy-900 text-sm mb-1">{feature.title}</h5>
                        <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SCROLLING RIGHT COLUMN */}
              <div className="w-full lg:w-7/12 flex flex-col gap-8 md:gap-10">
                {pillar.cards.map((card, cIdx) => (
                  <motion.div
                    key={cIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <Link href={card.href} className="block group w-full h-full outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-[2rem] lg:rounded-[2.5rem]">
                      <div className={`bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 border border-slate-100 ${pillar.colors.hoverBorder} h-full relative overflow-hidden flex flex-col`}>
                        {/* Hover Gradient Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${pillar.colors.from} to-transparent`} />
                        
                        <div className="relative z-10">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-6">
                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border ${pillar.colors.iconBg} ${pillar.colors.iconBorder} group-hover:scale-110 transition-transform duration-500`}>
                              {card.icon}
                            </div>
                            <h4 className="text-2xl md:text-3xl font-extrabold text-navy-900 leading-tight">
                              {card.title}
                            </h4>
                          </div>
                          
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-8 text-justify">
                            {card.desc}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                            {card.keywords.map((kw, kIdx) => (
                              <span key={kIdx} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 text-xs md:text-sm font-semibold rounded-lg flex items-center gap-1.5">
                                <CheckCircle2 className={`w-3.5 h-3.5 md:w-4 md:h-4 ${pillar.colors.iconText}`} />
                                {kw}
                              </span>
                            ))}
                          </div>
                          
                          <div className={`mt-auto inline-flex items-center ${pillar.colors.linkText} font-bold uppercase tracking-widest text-xs md:text-sm`}>
                            Explore Section <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CERTIFICATIONS & COMPLIANCE */}
      <section className="py-20 md:py-32 bg-navy-900 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeader
            badge="Certifications & Compliance"
            title="Certified to Global Standards"
            description="We don't self-certify. Our entire manufacturing ecosystem is audited strictly under international quality management systems."
            align="center"
            theme="dark"
            accentColor="amber"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "IATF 16949", desc: "Quality Management Systems — Certified" },
              { title: "IATF 16949", desc: "Automotive Quality Management — Certified" },
              { title: "FMVSS 121", desc: "Federal Motor Vehicle Safety Standards — Compliant" },
              { title: "SAE J1469", desc: "Air Brake Actuator Standards — Compliant" }
            ].map((badge, idx) => (
              <div key={idx} className="bg-navy-900 border border-navy-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:border-amber-500/50 transition-colors group">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-lg mb-2">{badge.title}</h4>
                <p className="text-navy-300 text-sm font-light">{badge.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/company/iatf-certifications" className="inline-flex items-center bg-transparent border border-navy-600 text-white font-bold hover:text-amber-400 hover:border-amber-500 px-8 py-4 rounded-xl uppercase tracking-widest text-[13px] transition-all duration-300">
              View All Certifications <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] border-t border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
                Ready to Partner?
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Partner With a Proven Manufacturer</h3>
              <p className="text-navy-200 text-base md:text-lg font-light">Whether you need a custom OEM solution, private labeling, or a container of replacement chambers for your distribution network, BRC delivers.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-10 py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Contact Sales Team
              </Link>
              <Link href="/company/iatf-certifications" className="inline-block w-full bg-navy-800/60 hover:bg-navy-800 border border-navy-600 hover:border-amber-500 text-white font-black text-center px-6 sm:px-10 py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                View IATF Certifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

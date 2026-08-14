"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, History, Microscope, Layers, Users, Lightbulb, MapPin, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
export default function CompanyClient() {
  const pillars = [
    {
      title: "The Foundation",
      subtitle: "Decades of Engineering Excellence",
      desc: "BRC was founded on a simple principle: reverse-engineer the most common failure points in commercial transport and build a better brake chamber. Today, our leadership team continues that legacy of relentless innovation.",
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
          desc: 'Explore our journey from a specialized mechanical engineering firm focused on solving center seal blowouts, to becoming a global tier-1 manufacturer supplying heavy-duty commercial air brake components to fleets across 35 countries.',
          icon: <History className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
          href: '/company/our-story',
          keywords: ['Reverse-Engineering', 'Global Manufacturer', 'Tier-1 Supplier']
        },
        {
          id: 'leadership',
          title: 'Leadership Team',
          desc: 'Our executive and engineering leadership teams bring decades of combined experience in commercial vehicle braking systems, metallurgical science, and lean manufacturing processes to guarantee uncompromising product quality.',
          icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
          href: '/company/leadership',
          keywords: ['Engineering Experts', 'Lean Manufacturing', 'Metallurgy']
        }
      ]
    },
    {
      title: "The Factory",
      subtitle: "Vertically Integrated Manufacturing",
      desc: "Unlike resellers and drop-shippers, we own our entire production lifecycle. By keeping stamping, welding, coating, and assembly under one roof, we eliminate supply chain bottlenecks and maintain absolute control over every component.",
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
          title: 'Production Process',
          desc: 'Take an exclusive look inside our world-class facilities. Witness how we utilize 6-axis robotic welding arms for deep-penetration seams, ensuring our brake chambers offer absolute structural integrity and unmatched burst resistance.',
          icon: <Factory className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />,
          href: '/company/production-process',
          keywords: ['Robotic Welding', 'CNC Machining', 'Burst Resistance']
        },
        {
          id: 'facility-overview',
          title: 'Facility Overview',
          desc: 'Our primary manufacturing campus is a state-of-the-art, ISO 9001 certified facility spanning over 500,000 square feet. It is designed for massive scale, supporting a direct-to-port global warehousing and logistics network.',
          icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />,
          href: '/company/facility-overview',
          keywords: ['500,000 Sq Ft Campus', 'Global Logistics', 'Strategic Warehousing']
        },
        {
          id: 'material-sourcing',
          title: 'Material Sourcing',
          desc: 'The best engineering means nothing if raw materials fail. Discover why we strictly source premium 8-gauge steel housings and utilize advanced neoprene rubber compounds reinforced with high-strength nylon fabric.',
          icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-navy-500" />,
          href: '/company/material-sourcing',
          keywords: ['8-Gauge Steel', 'Neoprene Diaphragms', 'Epoxy Coatings']
        }
      ]
    },
    {
      title: "The Standard",
      subtitle: "Zero-Defect Quality Control",
      desc: "A commercial truck hauling 80,000 lbs cannot afford a brake failure. That is why our in-house testing laboratory and our strict adherence to international safety standards represent the most crucial pillars of our operation.",
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
          title: 'Testing Laboratory',
          desc: 'We try our hardest to break our own products. See inside our lab where we subject chambers to 1 million+ continuous actuate/release cycles, intense salt spray corrosion environments, and extreme temperature variations.',
          icon: <Microscope className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
          href: '/company/testing-laboratory',
          keywords: ['1 Million Cycle Test', 'Salt Spray Corrosion', 'Pneumatic Leak Testing']
        },
        {
          id: 'iso-certifications',
          title: 'ISO Certifications & Compliance',
          desc: 'We do not self-certify. Our entire manufacturing ecosystem is audited strictly under ISO 9001:2015 Quality Management Systems, and every product we manufacture complies with SAE J1469 and FMVSS 121 standards.',
          icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
          href: '/company/iso-certifications',
          keywords: ['ISO 9001:2015', 'SAE J1469', 'FMVSS 121 Compliant']
        },
        {
          id: 'innovations',
          title: 'R&D and Innovations',
          desc: 'We do not just follow industry standards; we engineer the technologies that define them. Partner with our dedicated R&D division for custom OEM engineering solutions and the next generation of Air Disc Brake (ADB) technologies.',
          icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
          href: '/company/research-and-innovations',
          keywords: ['Air Disc Brakes', 'Custom OEM Solutions', 'Rapid Prototyping']
        }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-clip">
      <PageHeader
        badge="Company Overview"
        title="The Manufacturer's Edge"
        description="Deep engineering, vertically integrated manufacturing, and uncompromising quality control. Welcome to BRC."
        imageSrc="/images/engineering_blueprint.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company' }
        ]}
      />
      {/* Intro SEO Block */}
      <section className="relative py-20 md:py-28 border-b border-slate-200 overflow-hidden">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/manufacturing_floor.png" 
            alt="BRC Manufacturing Facility" 
            fill 
            className="object-cover object-right-top opacity-80"
          />
          {/* White gradient fading from left to right */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_70%,rgba(255,255,255,0)_100%)] z-10"></div>
          {/* Touch of primary blue on the right edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-navy-900/30 to-transparent z-10 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 max-w-4xl text-center">
          <SectionHeader
            badge="The BRC Standard"
            title={<>Engineered to Outperform.<br/>Built to <span className="text-navy-600">Last.</span></>}
            description="When you partner with BRC Brake Chambers, you are cutting out the middlemen and dealing directly with the source. As a vertically integrated manufacturer of commercial air brake actuators, we control every variable of the production process—from raw metallurgy to final pneumatic leak testing. This means higher burst strength, longer operational lifespans, and absolute reliability for heavy-duty fleets worldwide."
            accentColor="navy"
          />
        </div>
      </section>
      {/* The Ultra-Stable Sticky-Scroll */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {pillars.map((pillar, pIdx) => (
            // Flex layout with items-start is CRITICAL for the sticky element to work smoothly without snapping or jittering.
            <div key={pIdx} className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-24 md:mb-32 last:mb-0 relative border-t border-slate-200 pt-12 md:pt-20 first:border-0 first:pt-0">
              {/* STICKY LEFT COLUMN */}
              <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-10 flex flex-col">
                <div className="mb-6 inline-block self-start px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest shadow-sm">
                  Phase 0{pIdx + 1}
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-navy-900 mb-4 font-heading tracking-tight leading-tight">
                  {pillar.title}
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-slate-700 mb-6">
                  {pillar.subtitle}
                </h4>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-light max-w-lg">
                  {pillar.desc}
                </p>
                {/* Replaced fixed heights with robust aspect ratios to ensure perfect scaling across all device sizes */}
                <div className="relative w-full aspect-video md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover mix-blend-multiply opacity-90"
                  />
                  <div className={`absolute inset-0 opacity-10 ${pillar.colors.bg}`}></div>
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
                    <Link href={card.href} className="block group w-full h-full outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-[2rem]">
                      <div className={`bg-white p-6 md:p-10 rounded-[2rem] shadow-md border border-slate-200 hover:shadow-2xl ${pillar.colors.hoverBorder} transition-all duration-500 relative overflow-hidden h-full flex flex-col`}>
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
                          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8">
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
      {/* Final CTA Section */}
      <div className="bg-[#F1EFE8] py-16 md:py-24 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden border border-navy-700">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-amber-500/20 backdrop-blur-sm">
                <Settings className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
              </div>
              <SectionHeader
                badge="Global Supply Chain"
                title="Partner With a Proven Manufacturer"
                description="Whether you need a custom OEM solution, private labeling, or a container of replacement chambers for your distribution network, BRC delivers."
                theme="dark"
              />
              <Link href="/contact" className="inline-block bg-amber-500 text-navy-950 font-extrabold text-[11px] md:text-[13px] px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-xl hover:shadow-amber-500/30 uppercase tracking-widest">
                Request Wholesale Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Bus, Factory, ShieldAlert, ArrowRight, CheckCircle2, ThermometerSnowflake, Flame, Droplets, Activity, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../../lib/animations';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';

export default function ApplicationsClient() {
  const accentMap = {
    amber: {
      gradient: 'from-amber-50/50',
      iconBorder: 'border-amber-100',
      iconBg: 'bg-amber-50',
      iconText: 'text-amber-500',
      linkHoverBorder: 'hover:border-amber-300',
      linkHoverShadow: 'hover:shadow-md',
      linkHoverIconBg: 'group-hover/link:bg-amber-50',
      linkHoverIconText: 'group-hover/link:text-amber-500',
      linkHoverText: 'group-hover/link:text-amber-700',
      imgGlow: 'bg-amber-900/20 group-hover:bg-amber-900/10',
      btnHover: 'hover:bg-amber-400 shadow-amber-500/20'
    },
    navy: {
      gradient: 'from-navy-50/50',
      iconBorder: 'border-navy-100',
      iconBg: 'bg-navy-50',
      iconText: 'text-navy-500',
      linkHoverBorder: 'hover:border-navy-300',
      linkHoverShadow: 'hover:shadow-md',
      linkHoverIconBg: 'group-hover/link:bg-navy-50',
      linkHoverIconText: 'group-hover/link:text-navy-500',
      linkHoverText: 'group-hover/link:text-navy-700',
      imgGlow: 'bg-navy-900/20 group-hover:bg-navy-900/10',
      btnHover: 'hover:bg-amber-400 shadow-amber-500/20'
    },
    slate: {
      gradient: 'from-slate-100/50',
      iconBorder: 'border-slate-200',
      iconBg: 'bg-slate-100',
      iconText: 'text-slate-500',
      linkHoverBorder: 'hover:border-slate-300',
      linkHoverShadow: 'hover:shadow-md',
      linkHoverIconBg: 'group-hover/link:bg-slate-100',
      linkHoverIconText: 'group-hover/link:text-slate-600',
      linkHoverText: 'group-hover/link:text-slate-700',
      imgGlow: 'bg-slate-900/20 group-hover:bg-slate-900/10',
      btnHover: 'hover:bg-amber-400 shadow-amber-500/20'
    }
  };

  const categoryGroups = [
    {
      title: 'Commercial & Freight',
      slug: 'commercial-freight',
      desc: 'The backbone of the global supply chain requires absolute reliability and extreme mileage endurance. Our linehaul chambers are built for the long haul.',
      icon: <Truck className="w-8 h-8" />,
      image: '/images/heavy_duty_truck.png',
      accent: 'amber',
      links: [
        { id: '/applications/commercial-freight/commercial-linehaul', title: 'Commercial Linehaul' },
        { id: '/applications/commercial-freight/heavy-duty-freight', title: 'Heavy-Duty Freight' },
        { id: '/applications/commercial-freight/regional-delivery', title: 'Regional Delivery' },
      ]
    },
    {
      title: 'Severe-Duty',
      slug: 'severe-duty',
      desc: 'Surviving in environments where pavement ends and the most punishing, high-cycle conditions begin. Built with reinforced housings for extreme vibration.',
      icon: <ShieldAlert className="w-8 h-8" />,
      image: '/images/specialty_vehicle.png',
      accent: 'navy',
      links: [
        { id: '/applications/severe-duty/refuse-sanitation', title: 'Refuse & Sanitation Trucks' },
        { id: '/applications/severe-duty/off-highway-mining', title: 'Off-Highway & Mining' },
        { id: '/applications/severe-duty/agricultural-transport', title: 'Agricultural Transport' },
      ]
    },
    {
      title: 'Passenger & Transit',
      slug: 'passenger-transit',
      desc: 'Precision modulation and failsafe reliability required for carrying the most precious cargo. Engineered for frequent start-stop city cycles.',
      icon: <Bus className="w-8 h-8" />,
      image: '/images/transit_bus.png',
      accent: 'amber',
      links: [
        { id: '/applications/passenger-transit/transit-coach-bus', title: 'Transit & Coach Buses' },
        { id: '/applications/passenger-transit/school-buses', title: 'School Buses' },
        { id: '/applications/passenger-transit/shuttle-fleets', title: 'Shuttle Fleets' },
      ]
    },
    {
      title: 'OEM & Custom',
      slug: 'oem-custom',
      desc: 'Partner directly with the manufacturer. We provide custom engineering, bulk volume fulfillment, and contract manufacturing for specialized builds.',
      icon: <Factory className="w-8 h-8" />,
      image: '/images/manufacturing_floor.png',
      accent: 'slate',
      links: [
        { id: '/applications/oem-custom/fleet-volume-orders', title: 'Fleet Volume Orders' },
        { id: '/applications/oem-custom/custom-engineering', title: 'Custom Engineering' },
        { id: '/applications/oem-custom/contract-manufacturing', title: 'Contract Manufacturing' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-clip">
      <PageHeader
        badge="Applications"
        title="Engineered for Your Fleet"
        description="We engineer severe-duty brake chambers tailored to the unique abuse of your operational environment. Explore our application-specific solutions."
        imageSrc="/products/scattered_chambers_footer.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Applications' }
        ]}
      />

      {/* Overlapping Container to bridge the dark header and light background */}
      <div className="-mt-20 relative z-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col gap-16 md:gap-20">
            {categoryGroups.map((group, idx) => {
              const isEven = idx % 2 === 0;
              const a = accentMap[group.accent as keyof typeof accentMap] ?? accentMap.amber;
              return (
                <div key={idx} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Image side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex"
                  >
                    <div className="relative w-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl group border border-slate-200/50 min-h-[300px] sm:min-h-[360px] lg:min-h-[450px] lg:aspect-[16/11]">
                      {/* Interactive Gradients */}
                      <div className={`absolute inset-0 z-10 transition-colors duration-700 ${a.imgGlow}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-700" />

                      <Image
                        src={group.image}
                        alt={group.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>

                  {/* Content side */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex"
                  >
                    <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center w-full relative overflow-hidden group/card">

                      {/* Subtle hover background glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${a.gradient} to-transparent`} />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center border flex-shrink-0 shadow-sm ${a.iconBg} ${a.iconBorder} ${a.iconText}`}>
                            {React.cloneElement(group.icon as React.ReactElement<any>, {
                              className: 'w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-500 group-hover/card:rotate-12 group-hover/card:scale-110',
                              'aria-hidden': 'true'
                            })}
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 font-heading tracking-tight leading-tight">
                            {group.title}
                          </h2>
                        </div>

                        <p className="text-slate-600 mb-6 sm:mb-10 leading-relaxed font-light text-base md:text-lg">
                          {group.desc}
                        </p>

                        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                          <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Key Applications</h3>
                          <div className="flex flex-col gap-2 sm:gap-3">
                            {group.links.map((link) => (
                              <Link
                                key={link.id}
                                href={link.id}
                                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-100 transition-all group/link hover:bg-white ${a.linkHoverBorder} ${a.linkHoverShadow} hover:-translate-y-1 transform`}
                              >
                                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 transition-colors ${a.linkHoverIconBg}`}>
                                  <CheckCircle2 className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-300 transition-colors ${a.linkHoverIconText}`} aria-hidden="true" />
                                </div>
                                <span className={`font-bold text-navy-800 text-sm transition-colors ${a.linkHoverText}`}>{link.title}</span>
                                <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 text-slate-300 ml-auto transition-all group-hover/link:translate-x-1 ${a.linkHoverIconText}`} aria-hidden="true" />
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto">
                          <Link
                            href={`/${group.slug}`}
                            className={`inline-flex w-full items-center justify-center px-10 py-5 bg-amber-500 text-navy-950 rounded-xl font-black uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 group/btn ${a.btnHover}`}
                          >
                            View {group.title} Solutions
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tested for the Extremes */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeader
            badge="Quality Assurance"
            title={<>Tested for the <span className="text-amber-500">Extremes</span></>}
            description="Our application-specific engineering means your brake chambers don't just meet standards—they survive the harshest operational environments on the planet."
            accentColor="amber"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ThermometerSnowflake, color: "text-navy-600", bg: "bg-navy-100", title: "Sub-Zero Rated", desc: "Specialized diaphragms maintain flexibility and prevent cracking in -40°F Arctic linehaul routes." },
              { icon: Flame, color: "text-red-600", bg: "bg-red-100", title: "High-Heat Tolerance", desc: "Advanced return springs and seals withstand immense thermal soak during steep grade descents." },
              { icon: Droplets, color: "text-amber-600", bg: "bg-amber-100", title: "Corrosion Proof", desc: "Multi-stage E-coating provides unmatched resistance against winter road salts and ocean spray." },
              { icon: Activity, color: "text-amber-600", bg: "bg-amber-100", title: "Vibration Dampening", desc: "Reinforced steel housings prevent stress fractures on punishing off-highway mining roads." }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-2xl lg:rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] hover:border-amber-300 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <h4 className="text-xl font-extrabold text-navy-900 mb-3">{stat.title}</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BRC Performance Guarantee */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-navy-950 border-y border-navy-800">
        {/* Animated Grid & Glow */}
        <AnimatedGridBackground opacity={0.15} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Icon Block (Vertically Centered) */}
            <div className="lg:col-span-5 flex justify-center items-center h-full">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-navy-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-amber-500/20 shadow-[0_0_60px_rgba(245,158,11,0.15)] relative z-10">
                  <CheckCircle2 className="w-24 h-24 md:w-32 md:h-32 text-amber-500" />
                </div>
              </div>
            </div>

            {/* Right Column: Text & Features */}
            <div className="lg:col-span-7 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight text-left">
                The BRC Performance <span className="text-amber-500">Guarantee</span>
              </h2>
              <p className="text-navy-100 text-lg md:text-xl font-light leading-relaxed mb-10 text-left">
                We don't just build brake chambers; we build confidence. Every BRC application-specific chamber is backed by our industry-leading guarantee to match or exceed OEM operational lifespan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                {/* Feature Card 1 */}
                <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <ShieldAlert className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">3-Year Warranty</h4>
                    <p className="text-sm text-navy-200 leading-relaxed">Comprehensive coverage against all manufacturing defects.</p>
                  </div>
                </div>

                {/* Feature Card 2 */}
                <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Activity className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">OEM Match</h4>
                    <p className="text-sm text-navy-200 leading-relaxed">Guaranteed direct-fit replacement for specified models.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Need a Custom Manufacturing Solution?</h3>
              <p className="text-navy-200 text-base md:text-lg font-light">Our engineering team can design, prototype, and produce custom air brake actuators tailored to your specific mechanical requirements.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <Link href="/quote" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-10 py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Request Custom Application Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

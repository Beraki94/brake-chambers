"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Bus, Factory, ShieldAlert, ArrowRight, CheckCircle2, ThermometerSnowflake, Flame, Droplets, Activity, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../../lib/animations';
import PageHeader from '@/components/layout/PageHeader';

export default function ApplicationsClient() {
  const categoryGroups = [
    {
      title: 'Commercial & Freight',
      slug: 'commercial-freight',
      desc: 'The backbone of the global supply chain requires absolute reliability and extreme mileage endurance. Our linehaul chambers are built for the long haul.',
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      image: '/images/heavy_duty_truck.png',
      accent: 'blue',
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
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      image: '/images/specialty_vehicle.png',
      accent: 'amber',
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
      icon: <Bus className="w-8 h-8 text-emerald-500" />,
      image: '/images/transit_bus.png',
      accent: 'emerald',
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
      icon: <Factory className="w-8 h-8 text-purple-500" />,
      image: '/images/manufacturing_floor.png',
      accent: 'purple',
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
          <div className="flex flex-col gap-16 md:gap-32">
            {categoryGroups.map((group, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image side - Animated from edge */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex"
                  >
                    <div className="relative w-full h-[400px] lg:h-auto min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-slate-200/50">
                      {/* Interactive Gradients */}
                      <div className={`absolute inset-0 z-10 transition-colors duration-700
                        ${group.accent === 'blue' ? 'bg-blue-900/20 group-hover:bg-blue-900/10' : ''}
                        ${group.accent === 'amber' ? 'bg-amber-900/20 group-hover:bg-amber-900/10' : ''}
                        ${group.accent === 'emerald' ? 'bg-emerald-900/20 group-hover:bg-emerald-900/10' : ''}
                        ${group.accent === 'purple' ? 'bg-purple-900/20 group-hover:bg-purple-900/10' : ''}
                      `} />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                      
                      <Image 
                        src={group.image} 
                        alt={group.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-[15s] ease-out mix-blend-luminosity grayscale group-hover:grayscale-0" 
                      />
                    </div>
                  </motion.div>
                  
                  {/* Content side - Animated from bottom up */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex"
                  >
                    <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center w-full relative overflow-hidden group/card">
                      
                      {/* Subtle hover background glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none
                        ${group.accent === 'blue' ? 'bg-gradient-to-br from-blue-50/50 to-transparent' : ''}
                        ${group.accent === 'amber' ? 'bg-gradient-to-br from-amber-50/50 to-transparent' : ''}
                        ${group.accent === 'emerald' ? 'bg-gradient-to-br from-emerald-50/50 to-transparent' : ''}
                        ${group.accent === 'purple' ? 'bg-gradient-to-br from-purple-50/50 to-transparent' : ''}
                      `} />

                      <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-8">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border flex-shrink-0 shadow-sm
                            ${group.accent === 'blue' ? 'bg-blue-50 border-blue-100' : ''}
                            ${group.accent === 'amber' ? 'bg-amber-50 border-amber-100' : ''}
                            ${group.accent === 'emerald' ? 'bg-emerald-50 border-emerald-100' : ''}
                            ${group.accent === 'purple' ? 'bg-purple-50 border-purple-100' : ''}
                          `}>
                            {group.icon}
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 font-heading tracking-tight leading-tight">
                            {group.title}
                          </h2>
                        </div>
                        
                        <p className="text-slate-600 mb-10 leading-relaxed font-light text-lg">
                          {group.desc}
                        </p>
                        
                        <div className="space-y-4 mb-12">
                          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Key Applications</h3>
                          <div className="flex flex-col gap-3">
                            {group.links.map((link) => (
                              <Link 
                                key={link.id} 
                                href={link.id} 
                                className={`flex items-center gap-4 p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-100 transition-all group/link hover:shadow-md hover:bg-white
                                  ${group.accent === 'blue' ? 'hover:border-blue-300' : ''}
                                  ${group.accent === 'amber' ? 'hover:border-amber-300' : ''}
                                  ${group.accent === 'emerald' ? 'hover:border-emerald-300' : ''}
                                  ${group.accent === 'purple' ? 'hover:border-purple-300' : ''}
                                `}
                              >
                                <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 transition-colors
                                  ${group.accent === 'blue' ? 'group-hover/link:bg-blue-50' : ''}
                                  ${group.accent === 'amber' ? 'group-hover/link:bg-amber-50' : ''}
                                  ${group.accent === 'emerald' ? 'group-hover/link:bg-emerald-50' : ''}
                                  ${group.accent === 'purple' ? 'group-hover/link:bg-purple-50' : ''}
                                `}>
                                  <CheckCircle2 className={`w-4 h-4 text-slate-300 transition-colors
                                    ${group.accent === 'blue' ? 'group-hover/link:text-blue-500' : ''}
                                    ${group.accent === 'amber' ? 'group-hover/link:text-amber-500' : ''}
                                    ${group.accent === 'emerald' ? 'group-hover/link:text-emerald-500' : ''}
                                    ${group.accent === 'purple' ? 'group-hover/link:text-purple-500' : ''}
                                  `} />
                                </div>
                                <span className={`font-bold text-navy-800 text-sm transition-colors
                                  ${group.accent === 'blue' ? 'group-hover/link:text-blue-700' : ''}
                                  ${group.accent === 'amber' ? 'group-hover/link:text-amber-700' : ''}
                                  ${group.accent === 'emerald' ? 'group-hover/link:text-emerald-700' : ''}
                                  ${group.accent === 'purple' ? 'group-hover/link:text-purple-700' : ''}
                                `}>{link.title}</span>
                                <ArrowRight className={`w-4 h-4 text-slate-300 ml-auto transition-all group-hover/link:translate-x-1
                                  ${group.accent === 'blue' ? 'group-hover/link:text-blue-500' : ''}
                                  ${group.accent === 'amber' ? 'group-hover/link:text-amber-500' : ''}
                                  ${group.accent === 'emerald' ? 'group-hover/link:text-emerald-500' : ''}
                                  ${group.accent === 'purple' ? 'group-hover/link:text-purple-500' : ''}
                                `} />
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <Link 
                            href={`/${group.slug}`}
                            className={`inline-flex w-full items-center justify-center px-8 py-4 text-white rounded-xl font-bold tracking-wide transition-all shadow-lg group/btn
                              ${group.accent === 'blue' ? 'bg-navy-900 hover:bg-blue-600' : ''}
                              ${group.accent === 'amber' ? 'bg-navy-900 hover:bg-amber-500 hover:text-navy-900' : ''}
                              ${group.accent === 'emerald' ? 'bg-navy-900 hover:bg-emerald-500 hover:text-navy-900' : ''}
                              ${group.accent === 'purple' ? 'bg-navy-900 hover:bg-purple-600' : ''}
                            `}
                          >
                            View {group.title} Solutions
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

      {/* NEW SECTION: Tested for the Extremes */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight leading-tight">
              Tested for the <span className="text-amber-500">Extremes</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Our application-specific engineering means your brake chambers don't just meet standards—they survive the harshest operational environments on the planet.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ThermometerSnowflake, color: "text-blue-600", bg: "bg-blue-100", title: "Sub-Zero Rated", desc: "Specialized diaphragms maintain flexibility and prevent cracking in -40°F Arctic linehaul routes." },
              { icon: Flame, color: "text-red-600", bg: "bg-red-100", title: "High-Heat Tolerance", desc: "Advanced return springs and seals withstand immense thermal soak during steep grade descents." },
              { icon: Droplets, color: "text-emerald-600", bg: "bg-emerald-100", title: "Corrosion Proof", desc: "Multi-stage E-coating provides unmatched resistance against winter road salts and ocean spray." },
              { icon: Activity, color: "text-amber-600", bg: "bg-amber-100", title: "Vibration Dampening", desc: "Reinforced steel housings prevent stress fractures on punishing off-highway mining roads." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <h4 className="text-xl font-extrabold text-navy-900 mb-3">{stat.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BRC Performance Guarantee */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 border border-slate-200 shadow-xl relative flex flex-col lg:flex-row items-center gap-12">
            
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center border-4 border-amber-100 shadow-lg relative z-10">
                  <CheckCircle2 className="w-24 h-24 text-amber-500" />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">
                The BRC Performance <span className="text-amber-500">Guarantee</span>
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                We don't just build brake chambers; we build confidence. Every BRC application-specific chamber is backed by our industry-leading guarantee to match or exceed OEM operational lifespan.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">3-Year Warranty</h4>
                    <p className="text-sm text-slate-500 mt-1">Comprehensive coverage against all manufacturing defects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">OEM Match Guarantee</h4>
                    <p className="text-sm text-slate-500 mt-1">Guaranteed direct-fit replacement for specified models.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="bg-navy-950 py-16 md:py-24 border-t border-navy-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-[2.5rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden border border-navy-700">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-500/20 backdrop-blur-sm">
                <Settings className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-heading tracking-tight">Need a Custom Manufacturing Solution?</h2>
              <p className="text-navy-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Our engineering team can design, prototype, and produce custom air brake actuators tailored to your specific mechanical requirements.
              </p>
              <Link href="/quote" className="inline-block bg-amber-500 text-navy-950 font-extrabold text-[13px] px-10 py-5 rounded-2xl hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-xl hover:shadow-amber-500/30 uppercase tracking-widest">
                Submit Engineering Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

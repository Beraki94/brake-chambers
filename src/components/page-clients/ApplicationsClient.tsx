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
      title: 'Highway & Freight Fleets',
      slug: 'highway-freight',
      desc: 'Built for the backbone of the supply chain. Designed for extreme mileage endurance and consistent performance on long-haul and regional routes.',
      icon: <Truck className="w-8 h-8" />,
      image: '/images/heavy_duty_truck.png',
      accent: 'amber',
      links: [
        { id: '/applications/long-haul-semi', title: 'Long-Haul Semi Trucks' },
        { id: '/applications/heavy-duty-trailer', title: 'Heavy-Duty Trailer Axles' },
        { id: '/applications/medium-duty-trucks', title: 'Medium-Duty Box Trucks' },
      ],
      cta: 'View Highway Solutions'
    },
    {
      title: 'Severe-Duty & Vocational',
      slug: 'severe-duty',
      desc: 'Engineered for the harshest environments where pavement ends. Reinforced housings and components built to withstand extreme vibration, impact, and high-cycle abuse.',
      icon: <ShieldAlert className="w-8 h-8" />,
      image: '/images/specialty_vehicle.png',
      accent: 'navy',
      links: [
        { id: '/applications/garbage-refuse', title: 'Garbage & Waste Trucks' },
        { id: '/applications/mining-construction', title: 'Mining & Construction Equipment' },
        { id: '/applications/ag-trailers', title: 'Agricultural Trailers' },
      ],
      cta: 'View Severe-Duty Solutions'
    },
    {
      title: 'Passenger Transport',
      slug: 'passenger-transport',
      desc: 'Precision modulation and fail-safe reliability for vehicles carrying passengers. Optimized for frequent stop-start city cycles and maximum safety.',
      icon: <Bus className="w-8 h-8" />,
      image: '/images/transit_bus.png',
      accent: 'amber',
      links: [
        { id: '/applications/transit-buses', title: 'City Bus & Transit Coach' },
        { id: '/applications/school-buses', title: 'School Bus Fleets' },
        { id: '/applications/shuttle-vans', title: 'Shuttle & Delivery Vans' },
      ],
      cta: 'View Passenger Solutions'
    },
    {
      title: 'Wholesale & Custom OEM',
      slug: 'wholesale-custom',
      desc: 'Partner directly with the manufacturer for custom engineering, private labeling, and high-volume contract manufacturing.',
      icon: <Factory className="w-8 h-8" />,
      image: '/images/manufacturing_floor.png',
      accent: 'slate',
      links: [
        { id: '/applications/bulk-wholesale', title: 'High Volume & Container Orders' },
        { id: '/applications/custom-manufacturing', title: 'Custom OEM Manufacturing' },
        { id: '/applications/private-label', title: 'Private Label & White Label' },
      ],
      cta: 'View OEM & Custom Solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-clip">
      <PageHeader
        badge="Applications"
        title="Built for Your Operating Environment"
        description="Whether you run long-haul freight, refuse trucks, city transit, or off-highway equipment — find the brake chambers engineered for your specific conditions."
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
                            className={`inline-flex w-full items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-amber-500 text-navy-950 rounded-xl font-black uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 group/btn ${a.btnHover}`}
                          >
                            {group.cta}
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
      <section className="py-16 md:py-24 bg-navy-950 border-y border-navy-900 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-0" />

        {/* Rotating Brake Chamber Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] opacity-[0.03] pointer-events-none animate-[spin_120s_linear_infinite] z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
            <path d="M50,5 A45,45 0 1,0 95,50 A45,45 0 0,0 50,5 Z M50,15 A35,35 0 1,1 15,50 A35,35 0 0,1 50,15 Z M45,45 L45,20 L55,20 L55,45 L80,45 L80,55 L55,55 L55,80 L45,80 L45,55 L20,55 L20,45 Z" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="20" cy="50" r="4" />
            <circle cx="80" cy="50" r="4" />
            <circle cx="50" cy="20" r="4" />
            <circle cx="50" cy="80" r="4" />
            <circle cx="29" cy="29" r="3" />
            <circle cx="71" cy="71" r="3" />
            <circle cx="29" cy="71" r="3" />
            <circle cx="71" cy="29" r="3" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeader
            badge="Tested for the Extremes"
            title={<>Engineered for the <span className="text-amber-500">Harshest Conditions</span></>}
            description="Our application-specific designs don't just meet industry standards—they dominate the harshest elements on the planet."
            accentColor="amber"
            theme="dark"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ThermometerSnowflake, title: "Sub-Zero Rated", desc: "Maintains flexibility and prevents cracking in -40°F Arctic linehaul conditions." },
              { icon: Flame, title: "High-Heat Tolerant", desc: "Advanced seals and return springs withstand intense thermal soak on steep descents." },
              { icon: Droplets, title: "Corrosion Proof", desc: "Multi-stage E-coating delivers unmatched resistance against winter road salts." },
              { icon: Activity, title: "Vibration Dampening", desc: "Reinforced steel housings prevent stress fractures on off-highway mining roads." }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-[2rem] p-6 sm:p-8 border border-white/10 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.2)] hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/10 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-white group-hover:text-amber-400 transition-colors" />
                </div>
                <h4 className="text-xl font-extrabold text-white mb-3">{stat.title}</h4>
                <p className="text-navy-200 text-sm md:text-base leading-relaxed font-light">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Success Snapshot */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" 
                alt="Arctic Mining Truck" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-xl relative z-10 grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-extrabold uppercase tracking-widest">
                Real-World Results
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 tracking-tight">
                Fleet Success Snapshot: <br className="hidden sm:block" /><span className="text-amber-500">Arctic Mining Operator</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-slate-50 border-l-4 border-slate-300 p-5 rounded-r-xl transition-all duration-300 hover:shadow-md">
                  <h4 className="font-bold text-navy-900 mb-1 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-slate-500" /> Challenge
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base font-light">
                    Extreme cold causing frozen diaphragms and costly roadside repairs.
                  </p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-sm shadow-amber-500/10 transition-all duration-300 hover:shadow-md hover:shadow-amber-500/20">
                  <h4 className="font-bold text-navy-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> Result
                  </h4>
                  <p className="text-slate-700 text-sm md:text-base font-medium">
                    Zero failures after switching to BRC Sub-Zero rated chambers. Maintenance costs reduced 25%.
                  </p>
                </div>
              </div>

              <Link 
                href="/blog/arctic-mining-success" 
                className="inline-flex items-center font-bold text-amber-500 hover:text-amber-600 transition-colors group tracking-wide"
              >
                Read Full Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
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

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[11px] font-extrabold uppercase tracking-widest backdrop-blur-sm">
                Custom Solutions
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Need a Custom Brake Chamber Solution?</h3>
              <p className="text-navy-200 text-base md:text-lg font-light leading-relaxed">
                Work directly with our engineering team to design, prototype, and manufacture custom air brake actuators that meet your exact mechanical requirements. <strong className="text-white font-bold">No middlemen. No compromises.</strong>
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/quote" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-10 py-4 sm:py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

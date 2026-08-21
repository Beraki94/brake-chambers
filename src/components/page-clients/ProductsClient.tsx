"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Settings, Wrench, Package, ArrowRight, Disc, CheckCircle2, ShieldCheck, Zap, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';


export default function ProductsClient() {
  const categoryGroups = [
    {
      title: 'Spring Brakes',
      slug: 'spring-brake-chambers',
      tag: 'Parking & Emergency Chambers',
      desc: 'High-durability spring brakes for heavy-duty trucks and trailers. Available in standard stroke, long stroke, and welded clevis configurations.',
      icon: <Settings className="w-10 h-10 text-white" />,
      image: '/images/heavy_duty_truck.png',
      accent: 'amber',
      links: [
        { id: '/spring-brake-chambers/30-30-air-brake-chambers', title: 'Type 30/30 Spring Brake', desc: 'Standard & Long Stroke' },
        { id: '/spring-brake-chambers/24-30-24-24-spring-brakes', title: 'Type 24/30 & 24/24', desc: 'Heavy-Duty Parking' },
        { id: '/spring-brake-chambers/20-24-spring-brake-chambers', title: 'Type 20/24 Spring Brake', desc: 'Compact Power' },
        { id: '/spring-brake-chambers/type-30-30-piggyback-kits', title: 'Type 30/30 Piggyback', desc: 'Quick Replacement' },
      ]
    },
    {
      title: 'Service Chambers',
      slug: 'service-brake-chambers',
      tag: 'Steer & Drive Axles',
      desc: 'Reliable single-diaphragm service chambers engineered for immediate response, extended service life, and consistent braking performance.',
      icon: <Wrench className="w-10 h-10 text-white" />,
      image: '/images/commercial_trailer.png',
      accent: 'navy',
      links: [
        { id: '/service-brake-chambers/type-20-steer-axle-brake-chambers', title: 'Type 20 Steer Axle', desc: 'Precision Control' },
        { id: '/service-brake-chambers/type-30-service-chambers', title: 'Type 30 Service Chamber', desc: 'Maximum Force' },
        { id: '/service-brake-chambers/type-12-16-24-service-chambers', title: 'Type 12, 16 & 24', desc: 'Versatile Fitment' },
        { id: '/service-brake-chambers/welded-clevis-brake-chambers', title: 'Welded Clevis', desc: 'Factory Sealed' },
      ]
    },
    {
      title: 'Air Disc Actuators',
      slug: 'air-disc-brake-actuators',
      tag: 'High Output Technology (HOT)',
      desc: 'Advanced ADB actuators for modern fleets requiring superior stopping power, reduced brake fade, and consistent performance under extreme heat and heavy loads.',
      icon: <Disc className="w-10 h-10 text-white" />,
      image: '/images/transit_bus.png',
      accent: 'amber',
      links: [
        { id: '/air-disc-brake-actuators/type-16-18-adb-actuators', title: 'Type 16 & 18 ADB', desc: 'Linear Output' },
        { id: '/air-disc-brake-actuators/type-20-24-air-disc-brake-actuator', title: 'Type 20/24 ADB', desc: 'High Capacity' },
        { id: '/air-disc-brake-actuators/type-24-24-adb-chambers', title: 'Type 24/24 ADB', desc: 'Severe Duty' },
        { id: '/air-disc-brake-actuators/type-24-30-air-disc-brake-actuators', title: 'Type 24/30 ADB', desc: 'Maximum Torque' },
      ]
    },
    {
      title: 'Chamber Parts & Kits',
      slug: 'parts-and-kits',
      tag: 'Rebuild Kits · Diaphragms · Hardware',
      desc: 'Genuine replacement components for field servicing and maintenance. Includes rebuild kits, diaphragms, caging bolts, clevis pins, and hardware.',
      icon: <Package className="w-10 h-10 text-white" />,
      image: '/images/manufacturing_floor.png',
      accent: 'navy',
      links: [
        { id: '/parts-and-kits/air-brake-chamber-rebuild-kits', title: 'Chamber Rebuild Kits', desc: 'All-in-One Overhaul' },
        { id: '/parts-and-kits/brake-chamber-diaphragms', title: 'Rubber Diaphragms', desc: 'Extreme Temp Rated' },
        { id: '/parts-and-kits/clevis-pins-slack-adjuster-hardware', title: 'Clevis Pins & Hardware', desc: 'Zinc Plated Steel' },
        { id: '/parts-and-kits/brake-chamber-caging-bolts-tools', title: 'Caging Bolts & Tools', desc: 'Safety First' },
      ]
    }
  ];

  // Accent colour lookup maps — avoids repetitive ternary chains
  const accentMap = {
    amber: {
      bg: 'bg-amber-500/20 border-amber-400/30',
      glow: 'bg-amber-500',
      overlay: 'bg-amber-900/20',
      cardText: 'group-hover/card:text-amber-700',
      gradient: 'from-amber-400/10',
      borderBar: 'bg-amber-400',
      iconHover: 'group-hover/card:from-amber-400 group-hover/card:to-amber-500 group-hover/card:text-navy-950',
    },
    navy: {
      bg: 'bg-navy-500/20 border-navy-400/30',
      glow: 'bg-navy-500',
      overlay: 'bg-navy-900/20',
      cardText: 'group-hover/card:text-navy-700',
      gradient: 'from-navy-400/10',
      borderBar: 'bg-navy-400',
      iconHover: 'group-hover/card:from-navy-400 group-hover/card:to-navy-500 group-hover/card:text-white',
    },
    emerald: {
      bg: 'bg-emerald-500/20 border-emerald-400/30',
      glow: 'bg-emerald-500',
      overlay: 'bg-emerald-900/20',
      cardText: 'group-hover/card:text-emerald-700',
      gradient: 'from-emerald-400/10',
      borderBar: 'bg-emerald-400',
      iconHover: 'group-hover/card:from-emerald-400 group-hover/card:to-emerald-500 group-hover/card:text-white',
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">

      {/* PAGE HEADER — do not modify */}
      <PageHeader
        badge="Heavy-Duty Components"
        title="Complete Brake Chamber Catalog"
        description="Browse our full range of OEM-grade commercial vehicle brake chambers and replacement parts. Every product includes technical specifications, dimensional data, and direct OEM cross-reference options."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' }
        ]}
      >
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Link href="/oem-cross-reference" className="inline-flex items-center text-navy-200 hover:text-white font-medium text-sm transition-colors group">
            Search by OEM Part Number <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/applications" className="inline-flex items-center text-navy-200 hover:text-white font-medium text-sm transition-colors group">
            View by Vehicle Application <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </PageHeader>

      {/* MAIN PRODUCT CATEGORIES */}
      <section className="relative z-20 -mt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {categoryGroups.map((group, idx) => {
            const isEven = idx % 2 === 0;
            const a = accentMap[group.accent as keyof typeof accentMap] ?? accentMap.amber;

            return (
              <motion.div
                key={idx}
                id={group.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={[
                  'flex flex-col gap-6',
                  'lg:flex-row lg:gap-10 lg:items-stretch',
                  isEven ? '' : 'lg:flex-row-reverse',
                  idx === 0 ? 'mt-0' : 'mt-8 sm:mt-10 lg:mt-16',
                  idx > 0 ? 'border-t border-slate-200/60 pt-8 sm:pt-10 lg:pt-16' : '',
                ].join(' ')}
              >
                {/* LARGE FEATURE CARD */}
                <div className="w-full lg:w-5/12 rounded-3xl lg:rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between shadow-2xl group min-h-[300px] sm:min-h-[360px] lg:min-h-[450px]">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[10s] group-hover:scale-110 ease-out grayscale mix-blend-luminosity opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-900/40 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className={`absolute inset-0 ${a.overlay} mix-blend-color`} />
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[80px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-40 ${a.glow}`} />

                  <div className="relative z-10 p-6 sm:p-8 lg:p-10 xl:p-12 h-full flex flex-col">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-auto border backdrop-blur-md shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500 ${a.bg}`}>
                      {React.cloneElement(group.icon as React.ReactElement<any>, {
                        className: 'w-8 h-8 lg:w-10 lg:h-10 text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110',
                        'aria-hidden': 'true'
                      })}
                    </div>
                    <div className="mt-6 lg:mt-8">
                      {group.tag && (
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-xl">
                          {group.tag}
                        </div>
                      )}
                      <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3 drop-shadow-lg group-hover:translate-x-2 transition-transform duration-300">
                        {group.title}
                      </h3>
                      <p className="text-navy-100 text-sm md:text-base leading-relaxed font-light mb-6 max-w-sm text-justify">
                        {group.desc}
                      </p>
                      <Link
                        href={`/${group.slug}`}
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 font-black tracking-widest uppercase text-[12px] transition-all group/link"
                      >
                        View Technical Specs <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* PRODUCT SUB-CARDS
                    Mobile  : 1 column (full-width comfortable cards)
                    sm+     : 2 columns
                    lg      : 2 columns inside 7/12 of the row
                */}
                <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {group.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.id}
                      className="group/card relative bg-white rounded-2xl overflow-hidden p-6 lg:p-8 xl:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300 transform hover:-translate-y-1 flex flex-col justify-between"
                    >
                      {/* Gradient wash on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${a.gradient} to-transparent`} />

                      {/* Left accent bar */}
                      <div className={`absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 ${a.borderBar}`} />

                      <div className="relative z-10">
                        {/* Colored top dash — grows on hover */}
                        <div className={`w-8 h-1 rounded-full mb-5 transition-all duration-300 group-hover/card:w-14 ${a.borderBar}`} />
                        <div className="mb-3 lg:mb-4">
                          <h4 className={`text-lg sm:text-xl lg:text-2xl font-extrabold text-navy-900 transition-colors ${a.cardText} leading-tight`}>
                            {link.title}
                          </h4>
                        </div>
                        <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed text-justify">
                          {link.desc}
                        </p>
                      </div>

                      <div className="relative z-10 mt-8 flex justify-end">
                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center transition-all duration-300 text-navy-900 shadow-sm group-hover/card:shadow-md ${a.iconHover} transform group-hover/card:rotate-45`}>
                          <ArrowRight className="w-5 h-5 transition-transform duration-300" aria-hidden="true" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* TRUSTED BY GLOBAL FLEETS - DARK THEME */}
      <section className="py-12 md:py-20 bg-navy-950 border-y border-navy-900 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Text + stats */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-navy-900 border border-navy-800 text-amber-400 text-[11px] font-extrabold uppercase tracking-widest">
                Proven Reliability
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Trusted by <span className="text-amber-500">Global Fleets</span>
              </h2>
              <p className="text-navy-200 text-base md:text-lg font-light leading-relaxed mb-8">
                From sub-zero Arctic logging routes to blistering desert mining operations, our brake chambers are the chosen aftermarket replacement for the world's most demanding fleets.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-navy-800/50">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white mb-1">1.2M+</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-widest">Units Deployed</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white mb-1">35+</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-widest">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Images — side by side on mobile, offset grid on desktop */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                  alt="Fleet trucks"
                  className="rounded-2xl lg:rounded-3xl shadow-xl shadow-navy-950/50 w-full h-48 sm:h-56 lg:h-64 object-cover object-center grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                />
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
                  alt="Global logistics"
                  className="rounded-2xl lg:rounded-3xl shadow-xl shadow-navy-950/50 w-full h-60 sm:h-72 lg:h-80 object-cover object-center mt-6 sm:mt-8 lg:mt-12 grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BY VEHICLE APPLICATION TEASER */}
      <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/60 -skew-x-12 translate-x-1/4 pointer-events-none z-0" />
        
        {/* Rotating Brake Chamber Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] opacity-[0.06] pointer-events-none animate-[spin_120s_linear_infinite] z-0">
          <img src="/products/spring-brake.jpg" alt="Brake Chamber Background" className="w-full h-full object-contain mix-blend-multiply grayscale drop-shadow-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[11px] font-extrabold uppercase tracking-widest">
                By Vehicle Application
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 tracking-tight">
                Not sure which brake chamber you need?
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
                Select your vehicle type to see the recommended products for your operating environment.
              </p>
            </div>
            <Link href="/applications" className="hidden md:inline-flex items-center text-amber-600 font-extrabold uppercase tracking-widest text-[13px] hover:text-amber-500 transition-colors group">
              Explore All Applications <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: 'Heavy-Duty Trucks', rec: 'Spring Brakes (Type 30/30, 24/30)', img: '/images/heavy_duty_truck.png', link: '/applications/long-haul-semi' },
              { title: 'Commercial Trailers', rec: 'Service Chambers (Type 20, 30)', img: '/images/commercial_trailer.png', link: '/applications/heavy-duty-trailer' },
              { title: 'Transit Buses', rec: 'Air Disc Actuators (Type 16/18)', img: '/images/transit_bus.png', link: '/applications/transit-buses' },
              { title: 'Off-Highway & Mining', rec: 'Severe-Duty ADB (Type 24/24)', img: 'https://images.unsplash.com/photo-1579417865672-88126b8821eb?auto=format&fit=crop&w=800&q=80', link: '/applications/mining-construction' }
            ].map((app, idx) => (
              <Link key={idx} href={app.link} className="group relative h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                <Image
                  src={app.img}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-[10s] group-hover:scale-110 grayscale mix-blend-luminosity opacity-80"
                />
                {/* Heavy dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-amber-900/20 mix-blend-color" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end">
                  <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-navy-200 text-sm font-medium mb-4">{app.rec}</p>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/applications" className="mt-8 md:hidden inline-flex items-center text-amber-600 font-extrabold uppercase tracking-widest text-[13px] hover:text-amber-500 transition-colors group">
            Explore All Applications <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SHORT OEM CROSS-REFERENCE TEASER */}
      <section className="py-10 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative overflow-hidden">
            
            {/* Subtle background element for depth */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none -mr-10 -mt-10"></div>
            
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
                <Search className="w-3.5 h-3.5" />
                Find Your Match
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">
                Already have an OEM part number?
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Enter your Bendix, Knorr-Bremse, ZF/WABCO, Haldex, SORL, or MGM part number to instantly find the matching BRC equivalent.
              </p>
            </div>

            {/* Action Area (Fake Input + Button) */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:shrink-0 relative z-10">
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. 5061011..." 
                  className="w-full pl-11 pr-4 py-3.5 md:py-4 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none hover:border-amber-400 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all shadow-inner cursor-pointer"
                  onClick={() => window.location.href='/oem-cross-reference'}
                  readOnly
                />
              </div>
              <Link href="/oem-cross-reference" className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 md:py-4 rounded-xl text-[13px] uppercase tracking-widest transition-all shadow-md transform hover:-translate-y-0.5 whitespace-nowrap border border-navy-700">
                Search Database <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* WHOLESALE CTA */}
      <div className="py-12 md:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] p-8 sm:p-10 md:p-12 lg:p-16 text-white shadow-2xl shadow-navy-900/20 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[11px] font-extrabold uppercase tracking-widest backdrop-blur-sm">
                Factory Direct
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Looking for Volume Pricing or Container Orders?</h3>
              <p className="text-navy-200 text-base md:text-lg font-light leading-relaxed">
                Distributors and large fleets get direct factory pricing, tiered discounts, and reliable container shipping from our manufacturing hub factory in China. <strong className="text-white font-bold">No middlemen. No compromises.</strong>
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-10 py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Request Factory Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

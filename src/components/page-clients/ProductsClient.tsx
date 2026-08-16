"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Settings, Wrench, Package, ArrowRight, Disc, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';

export default function ProductsClient() {
  const categoryGroups = [
    {
      title: 'Spring Brakes',
      slug: 'spring-brakes',
      desc: 'High-durability parking and emergency spring brakes including Standard Stroke, Long Stroke, and Welded Clevis configurations.',
      icon: <Settings className="w-10 h-10 text-white" />,
      image: '/images/heavy_duty_truck.png',
      accent: 'amber',
      links: [
        { id: '/spring-brakes/30-30-air-brake-chambers', title: 'Type 30/30 Spring Brake', desc: 'Standard & Long Stroke' },
        { id: '/spring-brakes/24-30-24-24-spring-brakes', title: 'Type 24/30 & 24/24', desc: 'Heavy-Duty Parking' },
        { id: '/spring-brakes/20-24-spring-brake-chambers', title: 'Type 20/24 Spring Brake', desc: 'Compact Power' },
        { id: '/spring-brakes/type-30-30-piggyback-kits', title: 'Type 30/30 Piggyback', desc: 'Quick Replacement' },
      ]
    },
    {
      title: 'Service Chambers',
      slug: 'service-chambers',
      desc: 'Reliable service chambers for optimal braking performance. Engineered for immediate response and longevity.',
      icon: <Wrench className="w-10 h-10 text-white" />,
      image: '/images/commercial_trailer.png',
      accent: 'navy',
      links: [
        { id: '/service-chambers/type-20-steer-axle-brake-chambers', title: 'Type 20 Steer Axle', desc: 'Precision Control' },
        { id: '/service-chambers/type-30-service-chambers', title: 'Type 30 Service Chamber', desc: 'Maximum Force' },
        { id: '/service-chambers/type-12-16-24-service-chambers', title: 'Type 12, 16 & 24', desc: 'Versatile Fitment' },
        { id: '/service-chambers/welded-clevis-brake-chambers', title: 'Welded Clevis', desc: 'Factory Sealed' },
      ]
    },
    {
      title: 'Air Disc Actuators',
      slug: 'air-disc-actuators',
      desc: 'Advanced ADB actuators designed for modern fleets requiring superior stopping power and consistency under extreme heat.',
      icon: <Disc className="w-10 h-10 text-white" />,
      image: '/images/transit_bus.png',
      accent: 'amber',
      links: [
        { id: '/air-disc-actuators/type-16-18-adb-actuators', title: 'Type 16 & 18 ADB', desc: 'Linear Output' },
        { id: '/air-disc-actuators/type-20-24-air-disc-actuators', title: 'Type 20/24 ADB', desc: 'High Capacity' },
        { id: '/air-disc-actuators/type-24-24-adb-chambers', title: 'Type 24/24 ADB', desc: 'Severe Duty' },
        { id: '/air-disc-actuators/type-24-30-air-disc-brake-actuators', title: 'Type 24/30 ADB', desc: 'Maximum Torque' },
      ]
    },
    {
      title: 'Chamber Parts & Kits',
      slug: 'chamber-parts-kits',
      desc: 'Premium replacement components, piggyback kits, diaphragms, and hardware for field servicing and maintenance.',
      icon: <Package className="w-10 h-10 text-white" />,
      image: '/images/manufacturing_floor.png',
      accent: 'navy',
      links: [
        { id: '/chamber-parts-kits/air-brake-chamber-rebuild-kits', title: 'Chamber Rebuild Kits', desc: 'All-in-one overhaul' },
        { id: '/chamber-parts-kits/brake-chamber-diaphragms', title: 'Rubber Diaphragms', desc: 'Extreme Temp Rated' },
        { id: '/chamber-parts-kits/clevis-pins-slack-adjuster-hardware', title: 'Clevis Pins & Hardware', desc: 'Zinc Plated Steel' },
        { id: '/chamber-parts-kits/brake-chamber-caging-bolts-tools', title: 'Caging Bolts & Tools', desc: 'Safety First' },
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
    blue: {
      bg: 'bg-navy-500/20 border-navy-400/30',
      glow: 'bg-navy-500',
      overlay: 'bg-navy-900/20',
      cardText: 'group-hover/card:text-navy-700',
      gradient: 'from-navy-400/10',
      borderBar: 'bg-navy-400',
      iconHover: 'group-hover/card:from-blue-400 group-hover/card:to-blue-500 group-hover/card:text-white',
    },
    emerald: {
      bg: 'bg-amber-500/20 border-amber-400/30',
      glow: 'bg-amber-500',
      overlay: 'bg-amber-900/20',
      cardText: 'group-hover/card:text-amber-700',
      gradient: 'from-amber-400/10',
      borderBar: 'bg-amber-400',
      iconHover: 'group-hover/card:from-emerald-400 group-hover/card:to-emerald-500 group-hover/card:text-white',
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">

      {/* PAGE HEADER — do not modify */}
      <PageHeader
        badge="Heavy-Duty Components"
        title="Engineered for Extreme Endurance"
        description="Browse our complete catalog of OEM-grade air brake chambers, disc actuators, and replacement parts. Built to outlast the competition."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' }
        ]}
      />

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

      {/* MANUFACTURING STANDARD */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100 overflow-hidden relative">
        {/* Premium Fixed Parallax Background */}
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
          <div className="w-full h-full bg-[url('/products/spring-brake.jpg')] bg-fixed bg-center bg-no-repeat bg-[length:800px_800px] mix-blend-multiply grayscale"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeader
            badge="Quality Control"
            title={<>The BRC Manufacturing <span className="text-amber-500">Standard</span></>}
            description="Every brake chamber in our catalog is engineered in-house and built to outlast OEM equivalents in the most severe operating environments."
            accentColor="amber"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              { icon: ShieldCheck, title: '100% End-of-Line Tested', desc: 'Every unit is pneumatically tested for leaks and operational consistency before packaging.' },
              { icon: Zap, title: 'Advanced E-Coating', desc: 'Multi-stage electro-deposition coating ensures superior corrosion resistance against winter road salts.' },
              { icon: CheckCircle2, title: 'FMVSS 121 Compliant', desc: 'Engineered to meet and exceed all North American Federal Motor Vehicle Safety Standards.' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 lg:p-10 rounded-2xl lg:rounded-[2rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-amber-500" />
                </div>
                <h4 className="text-xl font-extrabold text-navy-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base text-justify">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SCROLLING LOGO CAROUSEL */}
      <div className="bg-white py-10 overflow-hidden whitespace-nowrap relative z-30 shadow-sm border-y border-slate-200">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="flex animate-marquee w-max items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ animationDuration: '40s' }}>
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center transition-transform duration-500 hover:scale-105">
                <span className="font-black text-3xl tracking-tighter uppercase text-[#004b8d] drop-shadow-sm">BENDIX</span>
              </div>
              <div className="flex items-center transition-transform duration-500 hover:scale-105">
                <span className="font-extrabold text-3xl tracking-widest uppercase text-[#da291c] drop-shadow-sm">MERITOR</span>
              </div>
              <div className="flex items-center transition-transform duration-500 hover:scale-105">
                <span className="font-bold text-3xl tracking-tight uppercase italic text-[#cc0000] drop-shadow-sm">HALDEX</span>
              </div>
              <div className="flex items-center transition-transform duration-500 hover:scale-105">
                <span className="font-black text-3xl uppercase text-[#0033a0] drop-shadow-sm">WABCO</span>
              </div>
              <div className="flex items-center transition-transform duration-500 hover:scale-105">
                <span className="font-extrabold text-3xl uppercase tracking-widest text-[#002f6c] drop-shadow-sm">MGM BRAKES</span>
              </div>
              <div className="flex items-center transition-transform duration-500 hover:scale-105">
                <span className="font-black text-3xl uppercase tracking-tighter text-[#ed1c24] drop-shadow-sm">TSE BRAKES</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

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
                    <ShieldCheck className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">3-Year Warranty</h4>
                    <p className="text-sm text-navy-200 leading-relaxed">Comprehensive coverage against all manufacturing defects.</p>
                  </div>
                </div>

                {/* Feature Card 2 */}
                <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Zap className="w-6 h-6 text-blue-400" />
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

      {/* TRUSTED BY GLOBAL FLEETS */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

            {/* Text + stats */}
            <div className="w-full lg:w-1/2">
              <SectionHeader
                badge="Proven Reliability"
                title={<>Trusted by <span className="text-amber-500">Global Fleets</span></>}
                description="From sub-zero Arctic logging routes to blistering desert mining operations, our brake chambers are the chosen aftermarket replacement for the world's most demanding fleets."
                align="left"
              />
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-navy-900 mb-1">1.2M+</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">Units Deployed</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-navy-900 mb-1">35+</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Images — side by side on mobile, offset grid on desktop */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                  alt="Fleet trucks"
                  className="rounded-2xl lg:rounded-3xl shadow-lg w-full h-48 sm:h-56 lg:h-64 object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
                  alt="Global logistics"
                  className="rounded-2xl lg:rounded-3xl shadow-lg w-full h-60 sm:h-72 lg:h-80 object-cover object-center mt-6 sm:mt-8 lg:mt-12 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHOLESALE CTA */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Need Wholesale Pricing?</h3>
              <p className="text-navy-200 text-base md:text-lg font-light">We offer tiered volume discounts and direct container shipping for distributors and large fleets worldwide. Connect directly with our manufacturing campus.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-nowrap">
                Request Factory Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

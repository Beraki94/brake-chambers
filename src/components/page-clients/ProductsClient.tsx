"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Settings, Shield, Wrench, Package, ArrowRight, Disc, ChevronRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../lib/animations';
import PageHeader from '@/components/layout/PageHeader';

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
      accent: 'blue',
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
      accent: 'emerald',
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
      accent: 'purple',
      links: [
        { id: '/chamber-parts-kits/air-brake-chamber-rebuild-kits', title: 'Chamber Rebuild Kits', desc: 'All-in-one overhaul' },
        { id: '/chamber-parts-kits/brake-chamber-diaphragms', title: 'Rubber Diaphragms', desc: 'Extreme Temp Rated' },
        { id: '/chamber-parts-kits/clevis-pins-slack-adjuster-hardware', title: 'Clevis Pins & Hardware', desc: 'Zinc Plated Steel' },
        { id: '/chamber-parts-kits/brake-chamber-caging-bolts-tools', title: 'Caging Bolts & Tools', desc: 'Safety First' },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-clip">
      <PageHeader
        badge="Heavy-Duty Components"
        title="Engineered for Extreme Endurance"
        description="Browse our complete catalog of OEM-grade air brake chambers, disc actuators, and replacement parts. Built to outlast the competition."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto">
          {[
            { name: 'Spring Brakes', href: '#spring-brakes' },
            { name: 'Service Chambers', href: '#service-chambers' },
            { name: 'Air Disc Actuators', href: '#air-disc-actuators' },
            { name: 'Parts & Kits', href: '#chamber-parts-kits' }
          ].map(item => (
            <Link 
              key={item.name} 
              href={item.href}
              className="bg-navy-900/60 hover:bg-amber-500 hover:text-navy-950 text-white border border-navy-700 backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </PageHeader>

      {/* Main Categories - Staggered Layout with Animation */}
      <section className="relative z-20 -mt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16 lg:space-y-24">
          {categoryGroups.map((group, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                id={group.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Hero Category Card */}
                <div className="w-full lg:w-5/12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between shadow-2xl group min-h-[450px]">
                  {/* Image with zoom effect */}
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover transition-transform duration-[10s] group-hover:scale-110 ease-out grayscale mix-blend-luminosity opacity-80"
                  />
                  
                  {/* Rich Gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-900/40 opacity-90 transition-opacity duration-500 group-hover:opacity-100`}></div>
                  {/* Accent color overlay */}
                  {group.accent === 'amber' && <div className="absolute inset-0 bg-amber-900/20 mix-blend-color"></div>}
                  {group.accent === 'blue' && <div className="absolute inset-0 bg-blue-900/20 mix-blend-color"></div>}
                  {group.accent === 'emerald' && <div className="absolute inset-0 bg-emerald-900/20 mix-blend-color"></div>}
                  {group.accent === 'purple' && <div className="absolute inset-0 bg-purple-900/20 mix-blend-color"></div>}

                  {/* Accent Glow */}
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[80px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-40
                    ${group.accent === 'amber' ? 'bg-amber-500' : ''}
                    ${group.accent === 'blue' ? 'bg-blue-500' : ''}
                    ${group.accent === 'emerald' ? 'bg-emerald-500' : ''}
                    ${group.accent === 'purple' ? 'bg-purple-500' : ''}
                  `}></div>

                  <div className="relative z-10 p-10 lg:p-12 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-auto border backdrop-blur-md shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500
                      ${group.accent === 'amber' ? 'bg-amber-500/20 border-amber-400/30' : ''}
                      ${group.accent === 'blue' ? 'bg-blue-500/20 border-blue-400/30' : ''}
                      ${group.accent === 'emerald' ? 'bg-emerald-500/20 border-emerald-400/30' : ''}
                      ${group.accent === 'purple' ? 'bg-purple-500/20 border-purple-400/30' : ''}
                    `}>
                      {group.icon}
                    </div>

                    <div className="mt-8">
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight mb-4 drop-shadow-lg group-hover:translate-x-2 transition-transform duration-300">
                        {group.title}
                      </h2>
                      <p className="text-navy-100 text-lg leading-relaxed font-light mb-8 max-w-sm">
                        {group.desc}
                      </p>
                      
                      <Link
                        href={`/${group.slug}`}
                        className={`inline-flex items-center text-white font-bold tracking-wide uppercase text-sm transition-all
                          ${group.accent === 'amber' ? 'hover:text-amber-400' : ''}
                          ${group.accent === 'blue' ? 'hover:text-blue-400' : ''}
                          ${group.accent === 'emerald' ? 'hover:text-emerald-400' : ''}
                          ${group.accent === 'purple' ? 'hover:text-purple-400' : ''}
                        `}
                      >
                        View Technical Specs <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sub-Category Grid Cards */}
                <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {group.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.id}
                      className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-slate-300 hover:-translate-y-2 transition-all duration-300 group/card flex flex-col justify-between h-full relative overflow-hidden"
                    >
                      {/* Interactive Gradient Background */}
                      <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none
                        ${group.accent === 'amber' ? 'bg-gradient-to-br from-amber-500/5 to-transparent' : ''}
                        ${group.accent === 'blue' ? 'bg-gradient-to-br from-blue-500/5 to-transparent' : ''}
                        ${group.accent === 'emerald' ? 'bg-gradient-to-br from-emerald-500/5 to-transparent' : ''}
                        ${group.accent === 'purple' ? 'bg-gradient-to-br from-purple-500/5 to-transparent' : ''}
                      `}></div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className={`text-xl lg:text-2xl font-extrabold text-navy-900 transition-colors
                            ${group.accent === 'amber' ? 'group-hover/card:text-amber-600' : ''}
                            ${group.accent === 'blue' ? 'group-hover/card:text-blue-600' : ''}
                            ${group.accent === 'emerald' ? 'group-hover/card:text-emerald-600' : ''}
                            ${group.accent === 'purple' ? 'group-hover/card:text-purple-600' : ''}
                          `}>
                            {link.title}
                          </h3>
                        </div>
                        <p className="text-slate-500 text-base font-medium leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                      
                      <div className="relative z-10 mt-8 flex justify-end">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-inner group-hover/card:shadow-md
                          ${group.accent === 'amber' ? 'bg-slate-50 group-hover/card:bg-amber-50 text-slate-400 group-hover/card:text-amber-600 group-hover/card:scale-110' : ''}
                          ${group.accent === 'blue' ? 'bg-slate-50 group-hover/card:bg-blue-50 text-slate-400 group-hover/card:text-blue-600 group-hover/card:scale-110' : ''}
                          ${group.accent === 'emerald' ? 'bg-slate-50 group-hover/card:bg-emerald-50 text-slate-400 group-hover/card:text-emerald-600 group-hover/card:scale-110' : ''}
                          ${group.accent === 'purple' ? 'bg-slate-50 group-hover/card:bg-purple-50 text-slate-400 group-hover/card:text-purple-600 group-hover/card:scale-110' : ''}
                        `}>
                          <ChevronRight className="w-6 h-6" />
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

      {/* Features / Manufacturing Standards */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight leading-tight">
              The BRC Manufacturing <span className="text-emerald-500">Standard</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Every brake chamber in our catalog is engineered in-house and built to outlast OEM equivalents in the most severe operating environments.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "100% End-of-Line Tested", desc: "Every unit is pneumatically tested for leaks and operational consistency before packaging." },
              { icon: Zap, title: "Advanced E-Coating", desc: "Multi-stage electro-deposition coating ensures superior corrosion resistance against winter road salts." },
              { icon: CheckCircle2, title: "FMVSS 121 Compliant", desc: "Engineered to meet and exceed all North American Federal Motor Vehicle Safety Standards." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className="bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                  <feature.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h4 className="text-xl font-extrabold text-navy-900 mb-4">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Trust / Social Proof */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight leading-tight">
                Trusted by <span className="text-amber-500">Global Fleets</span>
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                From sub-zero Arctic logging routes to blistering desert mining operations, our brake chambers are the chosen aftermarket replacement for the world's most demanding fleets.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-black text-navy-900 mb-1">1.2M+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Units Deployed</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-navy-900 mb-1">35+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" alt="Fleet" className="rounded-3xl shadow-lg w-full h-48 object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80" alt="Logistics" className="rounded-3xl shadow-lg w-full h-64 object-cover object-center mt-8 grayscale hover:grayscale-0 transition-all duration-500" />
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
                <Package className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-heading tracking-tight">Need Wholesale Pricing?</h2>
              <p className="text-navy-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                We offer tiered volume discounts and direct container shipping for distributors and large fleets worldwide.
              </p>
              <Link href="/contact" className="inline-block bg-amber-500 text-navy-950 font-extrabold text-[13px] px-10 py-5 rounded-2xl hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-xl hover:shadow-amber-500/30 uppercase tracking-widest">
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

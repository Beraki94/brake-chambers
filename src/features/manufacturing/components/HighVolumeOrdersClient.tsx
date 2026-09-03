"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Package, Ship, TrendingDown, Users, Clock, Globe2, Calculator, BarChart3, Boxes, Container, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

export default function HighVolumeOrdersClient() {

  const tiers = [
    {
      tier: 'LCL Pilot Order',
      range: '500 – 1,999 units',
      discount: 'Base Pricing',
      color: 'slate',
      features: ['Standard catalog products', 'LCL ocean freight support', 'Standard 30-day lead time', 'Email-based account support'],
    },
    {
      tier: 'Standard FCL',
      range: '2,000 – 4,999 units',
      discount: 'Volume Discount',
      color: 'amber',
      popular: true,
      features: ['Full catalog + custom specs', 'Optimized LCL/FCL shipping', 'Priority 30-day lead time', 'Dedicated account manager'],
    },
    {
      tier: 'Multi-Container',
      range: '5,000 – 19,999 units',
      discount: 'Tier-2 Pricing',
      color: 'navy',
      features: ['Custom OEM engineering available', 'Full container (FCL) optimization', 'Guaranteed 30-day allocation', 'Quarterly business reviews'],
    },
    {
      tier: 'Annual Contract',
      range: '20,000+ units',
      discount: 'Best Factory-Direct Rate',
      color: 'emerald',
      features: ['Dedicated production line access', 'Multi-container programs', 'JIT 30-day inventory holding', 'Executive partnership program'],
    },
  ];

  const advantages = [
    {
      icon: <TrendingDown className="w-7 h-7 text-amber-500" />,
      title: 'Aggressive Tiered Pricing',
      description: 'The more you order, the lower your per-unit cost. Our pricing tiers are structured so that scaling your orders directly translates to stronger margins for your business — with no hidden fees or surcharges.',
    },
    {
      icon: <Container className="w-7 h-7 text-navy-500" />,
      title: 'Container Load Optimization',
      description: 'Our logistics team optimizes every container shipment to maximize pallet density. We calculate the most efficient box configurations and stacking patterns to fit the most units per 20ft or 40ft container — reducing your per-unit freight cost.',
    },
    {
      icon: <Clock className="w-7 h-7 text-amber-500" />,
      title: 'Priority Production Scheduling',
      description: 'High-volume clients receive priority scheduling on our production lines. Your orders move to the front of the queue with guaranteed capacity reservations — so your lead times remain predictable even during peak season.',
    },
    {
      icon: <Users className="w-7 h-7 text-navy-500" />,
      title: 'Dedicated Account Management',
      description: 'Every high-volume client is assigned a dedicated account manager who coordinates production scheduling, quality reports, shipping logistics, and ongoing communication. One point of contact for everything.',
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-amber-500" />,
      title: 'Demand Forecasting & JIT Supply',
      description: 'For strategic partners, we offer demand forecasting and just-in-time inventory programs. We pre-produce and warehouse your orders so they are ready to ship the moment your warehouse needs replenishment.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-navy-500" />,
      title: 'Enhanced Quality Reporting',
      description: 'High-volume clients receive detailed quality reports with every shipment — including test results, dimensional data, and traceability certificates. Full transparency into every batch that leaves our factory.',
    },
  ];

  const stats = [
    { value: '1M+', label: 'Annual Production Capacity', icon: Boxes },
    { value: '30+', label: 'Countries Shipping To', icon: Globe2 },
    { value: '30', label: 'Day Standard Lead Time', icon: Clock },
    { value: '40ft', label: 'FCL Container Programs', icon: Container },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-clip">
      <PageHeader
        badge="Scale & Save"
        title="High Volume Orders"
        description="Factory-direct pricing that gets better as you scale. From 500-unit starter orders to strategic multi-container programs, BRC offers aggressive tiered pricing, priority production, and dedicated account management."
        imageSrc="/images/manufacturing_floor.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manufacturing', href: '/manufacturing' },
          { label: 'High Volume Orders' }
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
            <SectionHeader 
              title={<>Factory-Direct <span className="text-amber-500">Pricing</span> at Scale</>}
            />
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-6">
              When you buy directly from our factory, you eliminate every middleman markup between the 
              production line and your warehouse. Our tiered pricing program rewards volume with progressively 
              better per-unit costs — passing our manufacturing efficiency directly to your bottom line.
            </p>
            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Whether you're a regional distributor placing your first container order, or a multinational 
              aftermarket group running multi-container programs — we have the production capacity, logistics 
              infrastructure, and pricing flexibility to support your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-blue-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-6 md:p-8 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-amber-500" aria-hidden="true" />
                </div>
                <div className="text-3xl md:text-5xl font-black text-navy-900 mb-2 tracking-tight group-hover:text-amber-600 transition-colors">{stat.value}</div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Tiers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge="Pricing Tiers"
            title={<>Volume <span className="text-amber-500">Discount</span> Structure</>}
            description="Transparent tiered pricing — the more you order, the better your margins."
            accentColor="amber"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden ${
                  tier.popular
                    ? 'bg-amber-50 border-amber-300 shadow-lg'
                    : 'bg-slate-50 border-slate-200 shadow-sm'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-navy-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-black text-navy-900 mb-2">{tier.tier}</h3>
                <div className="text-amber-600 font-bold text-sm mb-1">{tier.range}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">{tier.discount}</div>
                <ul className="space-y-3">
                  {tier.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm text-navy-900">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages — 2-Column Grid */}
      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mb-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative z-10">
          <SectionHeader
            badge="Why Scale With BRC"
            title={<>The High-Volume <span className="text-amber-400">Advantage</span></>}
            theme="dark"
            accentColor="amber"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="bg-navy-900/60 backdrop-blur-md border border-navy-700 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-navy-800 border border-navy-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-navy-200 text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] pb-16 md:pb-24 mt-16 md:mt-24">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200">
          <SectionHeader 
            title="Request Your Volume Pricing" 
            description="Tell us your target volumes and product mix, and we'll provide a detailed quotation with tiered pricing, container optimization analysis, and estimated lead times."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Get Volume Pricing <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/shipping" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Global Logistics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


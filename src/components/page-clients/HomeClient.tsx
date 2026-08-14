"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, ShieldCheck, Settings, Cpu, Zap,
  Map, CheckCircle, FileText, Wrench, Globe2, ChevronRight, Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../lib/animations';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/ui/BlogCard';

const HERO_SLIDES = [
  {
    id: 1,
    badge: "Advanced Actuation Technology",
    badgeIcon: <Cpu className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />,
    title: <>Precision Built for the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600">Long Haul.</span></>,
    description: "The world leader in aftermarket commercial brake chambers. Delivering direct replacements for Bendix, Haldex, Meritor, and Wabco to global fleets.",
    cta1: { text: "View Product Catalog", link: "/products" },
    cta2: { text: "Request Custom Quote", link: "/quote" },
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80",
    gradient: "from-navy-950 via-navy-950/90 to-transparent",
    glow: "bg-amber-500"
  },
  {
    id: 2,
    badge: "High Output Technology (HOT)",
    badgeIcon: <Zap className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />,
    title: <>Next-Generation <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-600">Air Disc Brakes.</span></>,
    description: "Experience unprecedented stopping power and fade resistance. Engineered for extreme heavy-duty performance and drastic maintenance reduction.",
    cta1: { text: "Partner With Us", link: "/contact" },
    cta2: { text: "Download Specifications", link: "/technical-resources" },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
    gradient: "from-navy-950 via-navy-950/80 to-transparent",
    glow: "bg-emerald-500"
  },
  {
    id: 3,
    badge: "Global Logistics Network",
    badgeIcon: <Globe2 className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />,
    title: <>OEM Supply at <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600">Global Scale.</span></>,
    description: "Shipping high-performance brake components to over 30 countries. We handle LTL, FTL, and direct container shipping logistics internally.",
    cta1: { text: "Start Wholesale Application", link: "/contact" },
    cta2: { text: "View Shipping Zones", link: "/shipping" },
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80",
    gradient: "from-navy-950 via-navy-950/90 to-transparent",
    glow: "bg-amber-500"
  }
];

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans bg-[#F8FAFC]">
      {/* 1. Dynamic Engineering Hero Carousel */}
      <section className="relative min-h-[85vh] flex items-center bg-navy-950 overflow-hidden">

        {/* Carousel Backgrounds & Slides */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image with grayscale for industrial feel */}
            <img
              src={slide.image}
              alt="Heavy-Duty Commercial Brake Chamber Manufacturing Facility"
              className="absolute inset-0 w-full h-full object-cover object-[25%_center] md:object-center mix-blend-luminosity opacity-40 grayscale scale-100 md:scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]"
              style={{ animationPlayState: index === currentSlide ? 'running' : 'paused' }}
            />
            {/* Image Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${slide.gradient}`}></div>

            {/* Dynamic Glow */}
            <div className={`absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] ${slide.glow} opacity-10 rounded-full blur-[80px] md:blur-[120px] -mr-20 -mt-20 md:-mr-40 md:-mt-40 mix-blend-screen transition-colors duration-1000`}></div>
          </div>
        ))}

        {/* Blueprint Grid Overlay (Static) */}
        <div
          className="absolute inset-0 z-20 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-30 py-12 md:py-20">
          <div className="max-w-3xl h-[480px] sm:h-[400px] flex flex-col justify-center relative -mt-16 sm:mt-0">

            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out ${index === currentSlide
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 translate-y-8 invisible'
                  }`}
              >
                <div>
                  <div className="inline-block px-3 py-1 mb-4 md:px-4 md:py-1.5 md:mb-6 rounded-full bg-gradient-to-r from-navy-800 to-navy-900 border border-navy-700 text-amber-400 text-[10px] md:text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-navy-950 whitespace-nowrap">
                    {slide.badgeIcon} {slide.badge}
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-4 md:mb-6 tracking-tight drop-shadow-2xl">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl font-light text-navy-100">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                    <Link href={slide.cta1.link} className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-navy-950 font-extrabold px-6 py-3.5 md:px-8 md:py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] text-center flex items-center justify-center gap-2 uppercase tracking-wide text-[12px] md:text-[13px] transform hover:-translate-y-0.5 w-full sm:w-auto">
                      {slide.cta1.text} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href={slide.cta2.link} className="bg-navy-900/60 backdrop-blur-md border border-navy-600 hover:border-amber-500 hover:text-amber-400 text-white font-bold px-6 py-3.5 md:px-8 md:py-3.5 rounded-xl transition-all duration-300 text-center uppercase tracking-wide text-[12px] md:text-[13px] shadow-xl shadow-navy-950 transform hover:-translate-y-0.5 w-full sm:w-auto">
                      {slide.cta2.text}
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 sm:bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 bg-amber-500' : 'w-4 bg-navy-700 hover:bg-navy-500'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Compliance & Trust Banner — Infinite Marquee */}
      <div className="bg-navy-900 border-y border-amber-500/30 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5">
          {[...Array(2)].map((_, dupeIdx) => (
            <div key={dupeIdx} className="flex shrink-0 items-center">
              {[
                'SAE J1469 & J1463 Compliant',
                'FMVSS 121 Certified',
                'ISO 9001:2015 Manufacturing',
                '1,000,000+ Cycle Tested',
                'Advanced E-Coat Corrosion Protection',
                'Variable Clocking Technology',
              ].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 text-sm font-bold text-navy-100 uppercase tracking-widest mx-10"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* 2. The 4 Pillars of Manufacturing Excellence */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { icon: Settings, color: "amber", title: "Actuator Design & R&D", desc: "Pioneering structural innovations and proprietary housing designs for reduced weight and maximum durability." },
              { icon: Zap, color: "amber", title: "Variable Clocking", desc: "Our VCT technology allows infinite port angle alignment, streamlining installation and reducing inventory SKU requirements." },
              { icon: ShieldCheck, color: "emerald", title: "Advanced E-Coating", desc: "Multi-stage electro-deposition coating ensures superior corrosion resistance even in the harshest winter road conditions." },
              { icon: CheckCircle, color: "emerald", title: "1M Cycle Tested", desc: "Every chamber design is rigorously subjected to 1 million cycle lab tests to guarantee extreme lifecycle performance." }
            ].map((pillar, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl flex items-center justify-center text-${pillar.color}-500 mb-5 group-hover:from-${pillar.color}-50 group-hover:to-${pillar.color}-100 transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-2`}>
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-extrabold text-navy-900 mb-3 group-hover:text-${pillar.color}-600 transition-colors`}>{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Aftermarket Brands Showcase */}
      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity grayscale"></div>

        {/* Blinking Stars Background */}
        <div className="absolute inset-0 pointer-events-none">
          {mounted && [...Array(30)].map((_, i) => {
            const size = Math.random() * 2 + 1.5;
            const isGold = Math.random() > 0.5;
            return (
              <div
                key={`star-${i}`}
                className={`absolute rounded-full animate-pulse ${isGold ? 'bg-[#D9B340]/60' : 'bg-white/40'}`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDuration: `${Math.random() * 3 + 1.5}s`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            );
          })}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy-900 border border-navy-700 shadow-xl shadow-navy-950 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
            Direct Aftermarket Replacements
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Engineered to Replace the Industry's Biggest Brands
          </h2>
          <p className="text-navy-300 max-w-2xl mx-auto mb-12 text-sm font-light leading-relaxed">
            We manufacture premium aftermarket brake chambers designed as direct, drop-in replacements for the leading OEM brands.
            Same fit, form, and extreme performance—straight from our factory to your fleet.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 md:gap-6 mb-12"
          >
            {[
              { name: "BENDIX", hoverBorder: "hover:border-emerald-500/50", hoverText: "group-hover:text-emerald-400" },
              { name: "MERITOR", hoverBorder: "hover:border-amber-500/50", hoverText: "group-hover:text-amber-400" },
              { name: "HALDEX", hoverBorder: "hover:border-sky-500/50", hoverText: "group-hover:text-sky-400" },
              { name: "WABCO", hoverBorder: "hover:border-indigo-500/50", hoverText: "group-hover:text-indigo-400" },
              { name: "MGM BRAKES", hoverBorder: "hover:border-rose-500/50", hoverText: "group-hover:text-rose-400" }
            ].map((brand, idx) => (
              <motion.div
                key={brand.name}
                variants={scaleIn}
                className={`bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 px-4 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg flex items-center justify-center min-w-[140px] sm:min-w-[160px] group hover:bg-navy-800 transition-all duration-300 transform hover:-translate-y-1 ${brand.hoverBorder} ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <span className={`text-white font-extrabold text-sm sm:text-lg tracking-widest transition-colors drop-shadow-md ${brand.hoverText}`}>
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <Link href="/oem-cross-reference" className="inline-flex items-center text-navy-950 bg-white font-extrabold px-8 py-3.5 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] text-[12px] uppercase tracking-widest transform hover:-translate-y-0.5">
            Search the OEM Database <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* 3. Comprehensive Product Architecture */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
        {/* Subtle background gradient accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-navy-100/40 to-transparent rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        {/* Premium Fixed Parallax Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('/products/spring-brake.jpg')] bg-fixed bg-center bg-no-repeat bg-[length:800px_800px] mix-blend-multiply grayscale"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-14 gap-6 text-center md:text-left">
            <div className="max-w-2xl flex flex-col items-center md:items-start">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-navy-900 text-amber-400 text-[11px] font-bold uppercase tracking-widest shadow-md">
                Precision Manufacturing
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-700 mb-3 tracking-tight">Product Architecture</h2>
              <p className="text-slate-600 text-base font-light">Industry-standard and proprietary solutions for every commercial vehicle braking application.</p>
            </div>
            <Link href="/products" className="text-amber-600 font-extrabold uppercase tracking-widest text-[13px] flex items-center justify-center hover:text-amber-500 transition-colors bg-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md">
              View All BRC Chambers <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spring Brakes */}
            <Link href="/spring-brakes" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-all duration-700 grayscale mix-blend-luminosity z-0 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-navy-50/90 z-0"></div>

              <div className="relative z-10 p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Combination Spring Brakes (Drum)</h3>
                      <p className="text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">Double Diaphragm Chambers</p>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm max-w-md leading-relaxed mb-6">Complete heavy-duty tandem units managing both service braking and parking brakes for traditional S-cam drum setups. Available in sizes Type 20/24 to Type 36/36.</div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">
                    <ArrowRight className="w-5 h-5 text-navy-900" />
                  </div>
                </div>
                <div className="w-full sm:w-48 h-48 sm:h-48 flex-shrink-0 relative mt-4 sm:mt-0 flex items-center justify-center">
                  <img src="/products/spring-brake.jpg" alt="Spring Brake Chamber" className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.05)' }} />
                </div>
              </div>
            </Link>

            {/* Service Brakes */}
            <Link href="/service-chambers" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-all duration-700 grayscale mix-blend-luminosity z-0 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-navy-50/90 z-0"></div>

              <div className="relative z-10 p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Service Brake Chambers (Drum)</h3>
                      <p className="text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">Steer & Drive Axles</p>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm max-w-md leading-relaxed mb-6">Compact, highly durable single-diaphragm chambers engineered for precision pneumatic response on drum brake systems. Available in sizes 9 through 36.</div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">
                    <ArrowRight className="w-5 h-5 text-navy-900" />
                  </div>
                </div>
                <div className="w-full sm:w-48 h-48 sm:h-48 flex-shrink-0 relative mt-4 sm:mt-0 flex items-center justify-center">
                  <img src="/products/service-brake.jpg" alt="Service Brake Chamber" className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.05)' }} />
                </div>
              </div>
            </Link>

            {/* Air Disc Brakes */}
            <Link href="/contact" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-all duration-700 grayscale mix-blend-luminosity z-0 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-navy-50/90 z-0"></div>

              <div className="relative z-10 p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Air Disc Brake (ADB) Chambers</h3>
                      <p className="text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">High Output Actuators</p>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm max-w-md leading-relaxed mb-6">Next-generation disc-specific actuators providing direct-force clamping, reduced brake fade, and shorter pushrods for severe-duty caliper systems.</div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">
                    <ArrowRight className="w-5 h-5 text-navy-900" />
                  </div>
                </div>
                <div className="w-full sm:w-48 h-48 sm:h-48 flex-shrink-0 relative mt-4 sm:mt-0 flex items-center justify-center">
                  <img src="/products/air-disc-brake.jpg" alt="Air Disc Brake Chamber" className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.05)' }} />
                </div>
              </div>
            </Link>

            {/* Piggybacks & Accessories */}
            <Link href="/chamber-parts-kits" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-all duration-700 grayscale mix-blend-luminosity z-0 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-navy-50/90 z-0"></div>

              <div className="relative z-10 p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Piggybacks & Replacement Parts</h3>
                      <p className="text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">Kits & Accessories</p>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm max-w-md leading-relaxed mb-6">Save on full replacements with genuine aftermarket repair components, including Piggyback Kits, Diaphragms, Caging Bolts, and Clamp Bands.</div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">
                    <ArrowRight className="w-5 h-5 text-navy-900" />
                  </div>
                </div>
                <div className="w-full sm:w-48 h-48 sm:h-48 flex-shrink-0 relative mt-4 sm:mt-0 flex items-center justify-center">
                  <img src="/products/piggyback.jpg" alt="Piggyback & Accessories" className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.05)' }} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Digital B2B Tools & Support */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-navy-950">
        {/* Core Gradient & Imagery */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" alt="Dashboard" className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/95 to-navy-950/95"></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-color-dodge" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -mr-20 -mt-20 mix-blend-screen pointer-events-none transition-all duration-1000 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -ml-20 -mb-20 mix-blend-screen pointer-events-none transition-all duration-1000 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 pr-6">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy-900 border border-navy-700 shadow-xl shadow-navy-950 text-emerald-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
                Digital Ecosystem
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">Digital Manufacturer Tools</h2>
              <p className="text-navy-200 text-base mb-8 leading-relaxed font-light">
                We empower our distributors and fleet managers with advanced digital tools to streamline procurement, verify specifications, and train technicians effortlessly.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tool 1 */}
              <Link href="/oem-cross-reference" className="block bg-gradient-to-b from-navy-800/60 to-navy-900/60 backdrop-blur-md border border-navy-700/50 p-6 md:p-8 rounded-2xl hover:border-amber-500/50 hover:bg-navy-800/80 transition-all duration-500 shadow-2xl shadow-navy-950 group transform hover:-translate-y-1 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-navy-700 group-hover:border-amber-500/50 transition-colors">
                    <FileText className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">Cross-Reference</h3>
                  <p className="text-navy-300 text-[13px] mb-8 leading-relaxed font-light">Instantly map competitor part numbers (Bendix, Meritor, Haldex, Wabco, MGM) to direct aftermarket equivalents.</p>
                  <div className="text-amber-400 text-[11px] font-extrabold uppercase tracking-widest flex items-center group-hover:text-amber-300">
                    Launch Tool <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* Tool 2 */}
              <Link href="/technical-resources" className="block bg-gradient-to-b from-navy-800/60 to-navy-900/60 backdrop-blur-md border border-navy-700/50 p-6 md:p-8 rounded-2xl hover:border-emerald-500/50 hover:bg-navy-800/80 transition-all duration-500 shadow-2xl shadow-navy-950 group transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-navy-700 group-hover:border-emerald-500/50 transition-colors">
                    <Wrench className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">Online Training</h3>
                  <p className="text-navy-300 text-[13px] mb-8 leading-relaxed font-light">Interactive courses for technicians on installation, maintenance, and diagnostics of brake systems.</p>
                  <div className="text-emerald-400 text-[11px] font-extrabold uppercase tracking-widest flex items-center group-hover:text-emerald-300">
                    View Courses <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* Tool 3 */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 md:p-8 rounded-2xl md:col-span-2 shadow-[0_20px_50px_-10px_rgba(245,158,11,0.3)] group relative overflow-hidden">
                {/* Shine effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[45deg] group-hover:animate-[shine_1.5s_ease-in-out]"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-extrabold text-navy-950 mb-2">Automated Warranty Portal</h3>
                    <p className="text-navy-900/90 text-[13px] max-w-md font-medium leading-relaxed">Submit warranty claims online. Tracks processing, expedites QA review, and generates automatic engineering reports.</p>
                  </div>
                  <Link href="/warranty" className="bg-navy-950 text-white px-8 py-4 rounded-xl font-extrabold text-[12px] uppercase tracking-widest hover:bg-navy-900 flex-shrink-0 whitespace-nowrap shadow-xl transform transition-transform hover:-translate-y-1">
                    Submit Claim
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. R&D and Innovation Highlight */}
      <section className="relative overflow-hidden bg-navy-950 min-h-[450px] sm:min-h-[550px] py-12 md:py-0 flex items-center border-t border-navy-800 group">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="Laboratory Testing" className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale group-hover:scale-105 transition-transform duration-[10s]" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-transparent"></div>
          {/* Accent gradient bar */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.6)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl bg-navy-950/80 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-navy-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transform transition-transform hover:-translate-y-1">
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-amber-500/20 to-transparent border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-widest">
              Innovation Spotlight
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">High Output Technology <span className="text-emerald-500">(HOT)</span></h2>
            <p className="text-base text-navy-200 mb-8 leading-relaxed font-light">
              Our patented HOT design drastically improves the output force of air disc brakes, compensating for internal friction and delivering unprecedented stopping power consistency across the entire vehicle lifecycle.
            </p>
            <Link href="/technical-resources" className="inline-flex w-full sm:w-auto justify-center items-center text-navy-950 bg-white font-extrabold px-6 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl text-[12px] uppercase tracking-widest transform hover:-translate-y-0.5 text-center">
              <span>Download Technical Specifications</span> <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Industry News & Technical Bulletins */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-14 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-widest">
                Updates & Releases
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-700 tracking-tight">Technical Bulletins</h2>
            </div>
            <Link href="/about" className="text-amber-600 font-extrabold uppercase tracking-widest text-[13px] flex items-center justify-center hover:text-amber-500 transition-colors bg-slate-50 px-5 py-2.5 rounded-lg border border-slate-100 hover:shadow-sm">
              View Archive <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} variants={fadeInUp} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Global Distribution & Direct Contact */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 p-6 md:p-14 overflow-hidden relative">

            {/* Prominent Rotating Brake Chamber Background */}
            <div className="absolute top-1/2 left-0 lg:left-[2%] -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] opacity-30 pointer-events-none animate-[spin_80s_linear_infinite] z-0">
              <img src="/products/spring-brake.jpg" alt="Brake Chamber Background" className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl" />
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy-50 border border-navy-100 text-navy-600 text-[11px] font-extrabold uppercase tracking-widest">
                  Global Network
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-navy-900 to-navy-700 mb-6 leading-tight">Global Scale. <br className="hidden md:block" />Local Support.</h2>
                <p className="text-slate-600 text-base md:text-lg mb-10 font-light leading-relaxed max-w-lg">
                  Shipping OEM and aftermarket brake components to over 30 countries worldwide. We handle LTL, FTL, and direct container shipping logistics internally.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-md">
                  <div className="bg-gradient-to-br from-slate-50 to-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">30+</div>
                    <div className="text-[11px] font-extrabold text-navy-900 uppercase tracking-widest">Countries Served</div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">1M+</div>
                    <div className="text-[11px] font-extrabold text-navy-900 uppercase tracking-widest">Units Annually</div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-3xl p-6 md:p-10 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden group">
                {/* Internal Card Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-amber-500/20 transition-colors duration-700"></div>

                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 relative z-10">Connect with Sales & Engineering</h3>
                <p className="text-navy-200 text-sm mb-8 md:mb-10 leading-relaxed font-light relative z-10">Ready to discuss bulk purchasing, OEM design specifications, or cross-reference support? Our dedicated team is standing by.</p>

                <div className="space-y-6 md:space-y-8 relative z-10">
                  <a href="tel:+12567366275" className="flex items-center gap-4 md:gap-6 group/link">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-gradient-to-br from-navy-800 to-navy-900 shadow-inner border border-navy-700 rounded-xl flex items-center justify-center group-hover/link:border-amber-500/50 transition-colors">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-amber-400 group-hover/link:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-[10px] md:text-[11px] text-amber-400 font-extrabold uppercase tracking-widest mb-1">Direct Line</div>
                      <div className="text-xl md:text-2xl font-bold group-hover/link:text-amber-300 transition-colors">1-256-736-6275</div>
                    </div>
                  </a>
                  <a href="mailto:sales@brakechambers.com" className="flex items-center gap-4 md:gap-6 group/link">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-gradient-to-br from-navy-800 to-navy-900 shadow-inner border border-navy-700 rounded-xl flex items-center justify-center group-hover/link:border-amber-500/50 transition-colors">
                      <Map className="w-5 h-5 md:w-6 md:h-6 text-amber-400 group-hover/link:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-[10px] md:text-[11px] text-amber-400 font-extrabold uppercase tracking-widest mb-1">Corporate HQ</div>
                      <div className="text-lg md:text-xl font-bold group-hover/link:text-amber-300 transition-colors">Cullman, Alabama, USA</div>
                    </div>
                  </a>
                </div>

                <Link href="/contact" className="mt-12 block w-full bg-gradient-to-r from-amber-400 to-amber-600 text-navy-950 font-extrabold text-center py-4 rounded-xl uppercase tracking-widest text-[13px] hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] relative z-10 transform hover:-translate-y-1">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

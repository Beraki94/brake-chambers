'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, HelpCircle, AlertTriangle } from 'lucide-react';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { APPLICATION_DATA } from '@/data/applicationsData';
import { notFound } from 'next/navigation';

export default function ApplicationDetailClient({ appSlug }: { appSlug: string }) {
  const data = APPLICATION_DATA[appSlug];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Premium Hero Section */}
      <section className="relative pt-6 md:pt-10 lg:pt-12 pb-16 lg:pb-24 overflow-hidden bg-navy-950">
        <AnimatedGridBackground />
        
        {/* Background image blending - increased opacity to be visible */}
        {data.heroImage && (
           <div className="absolute inset-0 z-0">
             <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
           </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* TOP LEFT BREADCRUMB - Standardized Position */}
          <nav aria-label="Breadcrumb" className="mb-12 md:mb-16 mt-2">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy-300 font-medium">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li><Link href="/applications" className="hover:text-amber-400 transition-colors">Applications</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-white" aria-current="page">{data.title}</li>
            </ol>
          </nav>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 mb-4 md:px-4 md:py-1.5 md:mb-6 rounded-full bg-gradient-to-r from-navy-800 to-navy-900 border border-navy-700 text-amber-400 text-[10px] md:text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-navy-950 whitespace-nowrap">
              Application Profile
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-4 md:mb-6 tracking-tight drop-shadow-2xl">
              {data.title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl font-light text-navy-100">
              {data.desc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section - Centered and High Impact */}
      <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        {/* Subtle red ambient glow to highlight the urgency of the challenge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-gradient-to-b from-red-500/10 to-transparent blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 border border-red-100 text-red-500 mb-6 shadow-sm">
              <AlertTriangle className="w-8 h-8" strokeWidth={1.5} />
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-8 tracking-tight">
              {data.challenge.title}
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="relative mb-14 max-w-4xl mx-auto px-8 md:px-12">
              <div className="absolute left-0 top-0 text-8xl text-red-500/15 font-serif leading-none -mt-4">"</div>
              <p className="text-slate-600 text-xl lg:text-2xl leading-relaxed italic relative z-10 font-medium">
                {data.challenge.desc}
              </p>
              <div className="absolute right-0 bottom-0 text-8xl text-red-500/15 font-serif leading-none rotate-180 -mb-8">"</div>
            </motion.div>

            {/* Operating Parameters (SEO + Tech Specs) */}
            {data.specs && (
              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-slate-200 pt-10">
                {data.specs.map((spec: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-center min-h-[100px]">
                    <div className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest mb-2">{spec.label}</div>
                    <div className="text-navy-900 text-sm md:text-base font-bold leading-tight">{spec.value}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* The Solution / Technologies */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern to match home page premium feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <SectionHeader
              badge="Purpose-Built"
              title="Engineered Solutions"
              description="How BRC overcomes the unique demands of this application with purpose-built technology."
              align="center"
              accentColor="amber"
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className={`grid grid-cols-1 md:grid-cols-2 ${data.technologies?.length === 3 ? 'lg:grid-cols-3' : ''} gap-6 lg:gap-8 mt-4`}
          >
            {data.technologies.map((tech: any, idx: number) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group relative bg-white p-8 lg:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-amber-200 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 overflow-hidden"
              >
                {/* Accent border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-amber-50 shadow-inner border border-amber-100 text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-navy-900 transition-all duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">{tech.name}</h3>
                  <p className="relative z-10 text-slate-600 text-base leading-relaxed font-medium">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recommended Package - Call to Action */}
      <section className="py-20 lg:py-32 bg-navy-950 relative overflow-hidden">
        <AnimatedGridBackground />
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500 opacity-5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-950 z-0" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div className="lg:w-1/2">
                <SectionHeader
                  badge="Recommended"
                  title={data.recommendedTitle || "Upgrade Your Fleet"}
                  description={data.recommendedDesc || `The perfect brake chamber combination specifically recommended for ${data.title.toLowerCase()}.`}
                  align="left"
                  theme="dark"
                  accentColor="amber"
                  className="mb-6 md:mb-8"
                />
                <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase shadow-lg shadow-amber-900/20">
                  <CheckCircle2 className="w-4 h-4 mr-2" /> All recommended packages are IATF 16949 certified and 1M-cycle lab tested
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {data.recommendedPackage.map((pkg: any, idx: number) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Link href={pkg.link} className="block group h-full">
                    <div className="h-full bg-navy-900/40 backdrop-blur-sm border border-navy-700/50 rounded-2xl p-8 lg:p-10 hover:border-amber-500/50 hover:bg-navy-800/80 transition-all duration-500 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-[100px] transition-all duration-500 group-hover:bg-amber-500/10"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 group-hover:text-amber-400 transition-colors tracking-tight">{pkg.name}</h3>
                        <p className="text-slate-400 text-base lg:text-lg mb-8 leading-relaxed font-light">{pkg.desc}</p>
                      </div>
                      <div className="relative z-10 flex items-center text-amber-500 font-bold uppercase tracking-widest text-sm bg-navy-950/50 w-max px-6 py-3 rounded-xl border border-navy-700 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all">
                        View Product Details <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Support"
              title="Frequently Asked Questions"
              description="Common questions about this specific application."
              align="center"
              accentColor="slate"
            />

            <div className="mt-12">
              <GlobalFAQAccordion faqs={data.faqs} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application-Specific Bottom CTA */}
      <section className="py-24 lg:py-32 bg-navy-950 border-t border-navy-800 relative overflow-hidden">
        <AnimatedGridBackground opacity={0.08} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-amber-500 opacity-[0.03] blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <SectionHeader
              badge="Direct From The Source"
              title={data.cta?.heading ? <>{data.cta.heading}</> : <>Need a custom volume quote for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">{data.title}</span>?</>}
              description={data.cta?.subheading || "Connect directly with our engineering and wholesale team to get factory-direct container pricing and specifications tailored to your fleet."}
              align="center"
              theme="dark"
              accentColor="amber"
            />
            <motion.div variants={fadeInUp} className="mt-10">
              <Link href={data.cta?.link || "/quote"} className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-navy-950 font-black px-10 py-5 rounded-xl transition-all duration-300 text-[14px] uppercase tracking-widest shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transform hover:-translate-y-1">
                {data.cta?.buttonText || "Request a Quote"} <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText, Wrench, FileArchive, Shield, ArrowDownToLine, ArrowRight, Ruler,
  BookOpen, Settings, Eye, ChevronLeft, AlertOctagon, AlertTriangle, Info,
  CheckCircle2, Download, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import { TECHNICAL_RESOURCES_DATA } from '@/lib/technicalResourcesData';

export default function TechnicalResourcesClient() {
  const [activeResourceSlug, setActiveResourceSlug] = useState<string | null>(null);

  const handleResourceClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    setActiveResourceSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    {
      id: 'installation',
      title: 'Installation & Maintenance',
      icon: <Wrench className="w-7 h-7 text-amber-500" />,
      accent: 'amber',
      desc: 'Step-by-step OEM installation procedures and safe caging procedures. Ensure your BRC chambers are installed correctly and maintained for maximum lifespan.',
      items: [
        {
          title: 'Installation Guides',
          subtitle: 'Step-by-step mounting, pushrod cutting, and air line connection procedures',
          slug: 'installation',
          icon: <Wrench className="w-5 h-5" />,
        },
        {
          title: 'Safe Caging Procedures',
          subtitle: 'Critical safety procedures for manually caging spring brakes during maintenance',
          slug: 'caging',
          icon: <Shield className="w-5 h-5" />,
        },
      ],
    },
    {
      id: 'specifications',
      title: 'Specifications & Sizing',
      icon: <FileArchive className="w-7 h-7 text-navy-500" />,
      accent: 'navy',
      desc: 'Detailed size charts, stroke length guides, and thread specifications for precise component matching. Find the exact chamber for your truck, trailer, or bus application.',
      items: [
        {
          title: 'Size & Dimension Charts',
          subtitle: 'OD, mounting stud centers, pushrod threads, and weight for Type 12 through Type 36',
          slug: 'size-charts',
          icon: <Ruler className="w-5 h-5" />,
        },
        {
          title: 'Stroke Length Guide',
          subtitle: 'Standard vs. long-stroke limits and CVSA out-of-service readjustment criteria',
          slug: 'stroke-length',
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: 'Chamber Selection Guides',
          subtitle: 'Choose the correct chamber by vocation: linehaul, severe duty, transit, or heavy haul',
          slug: 'selection-guides',
          icon: <Settings className="w-5 h-5" />,
        },
        {
          title: 'Visual Identification Guide',
          subtitle: 'How to identify chamber sizes and stroke types without part numbers',
          slug: 'identification',
          icon: <Eye className="w-5 h-5" />,
        },
      ],
    },
  ];

  const activeData = activeResourceSlug ? TECHNICAL_RESOURCES_DATA[activeResourceSlug] : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-clip pb-16">
      <PageHeader
        badge="Engineering Support"
        title={activeData ? activeData.title : "Installation Guides, Specs, & Documentation"}
        description={activeData ? activeData.description : "Access our comprehensive technical library — installation procedures, sizing specifications, caging guides, and selection tools. Everything you need to install, maintain, and troubleshoot BRC brake chambers with confidence."}
        imageSrc={activeData ? activeData.imageSrc : "/products/brake_chambers_diagram.png"}
        breadcrumbs={activeData ? [
          { label: 'Home', href: '/' },
          { label: 'Technical Resources', href: '#' },
          { label: activeData.title }
        ] : [
          { label: 'Home', href: '/' },
          { label: 'Technical Resources' }
        ]}
      />

      <div className="relative z-20 -mt-6 md:-mt-10">
        {!activeData ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* SECTION 1: QUICK LINKS */}
            <section className="relative">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-6">
                    <div className="w-full">
                      <SectionHeader
                        title="Most Popular Resources"
                        description="Quick access to our most frequently viewed technical guides."
                        align="left"
                        theme="light"
                        accentColor="navy"
                        plainText={true}
                        className="!mb-0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-4">
                    {[
                      { title: "Size & Dimension Charts", desc: "Type 12–36 specs", icon: <Ruler className="w-5 h-5 text-amber-500" />, slug: "size-charts" },
                      { title: "Installation Guide", desc: "Step-by-step procedures", icon: <Wrench className="w-5 h-5 text-amber-500" />, slug: "installation" },
                      { title: "Chamber Selection Guide", desc: "Match by vocation", icon: <BookOpen className="w-5 h-5 text-navy-500" />, slug: "selection-guides" }
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.slug}`}
                        onClick={(e) => handleResourceClick(e, item.slug)}
                        className="flex items-center justify-between p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-navy-200 hover:shadow-md transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 w-full overflow-hidden mr-2">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <span className="font-bold text-navy-900 text-xs md:text-sm truncate block">{item.title}</span>
                            <span className="text-slate-400 text-[11px] md:text-xs truncate block">{item.desc}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-navy-900 transition-colors flex-shrink-0" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SECTION 2: VIDEO TRAINING BANNER */}
            <section className="py-16 md:py-24 relative">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
                <div id="video-training" className="scroll-mt-32 lg:scroll-mt-40 bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 rounded-[2rem] shadow-xl shadow-navy-900/10 relative overflow-hidden group flex flex-col lg:flex-row transform hover:-translate-y-2 transition-all duration-500 hover:border-amber-500/50">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  {/* Subtle Corner Graphic */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-navy-700/40 rounded-br-full -ml-10 -mt-10 transition-transform duration-500 group-hover:scale-110 z-0 pointer-events-none"></div>

                  <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative z-10">
                    <SectionHeader
                      badge="Video Training"
                      title={<>BRC <span className="text-amber-500">Video</span> Series</>}
                      description="For visual learners and technicians on the shop floor. Watch our lead engineers walk through safe caging procedures, pushrod cutting, and complete installation step-by-step."
                      align="left"
                      theme="dark"
                      accentColor="amber"
                      className="!mb-4"
                    />
                    <Link href="/contact?subject=Video+Training+Access" className="inline-flex items-center gap-3 text-amber-500 font-extrabold group-hover/btn:text-amber-400 transition-colors uppercase tracking-widest text-xs md:text-sm group/btn mt-4 md:mt-0 self-start">
                      Request Video Access <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2 relative min-h-[250px] md:min-h-[300px] lg:min-h-full overflow-hidden rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem] m-[2px]">
                    <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80" alt="BRC Brake Chamber Video Training - Installation and Caging Procedures" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner border border-amber-500/50 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                        <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-amber-500 border-b-[8px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: LIBRARY CATEGORIES */}
            <section className="py-16 md:py-24 relative bg-slate-50 border-t border-slate-200">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
                <div className="mb-10 lg:mb-16">
                  <SectionHeader
                    badge="Technical Library"
                    title="Browse by Topic"
                    description="Find the technical resource you need. Each guide contains detailed specifications, step-by-step procedures, and reference tables for technicians, engineers, and fleet managers."
                    align="left"
                    plainText={true}
                  />
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8 md:space-y-12"
                >
                  {categories.map((category) => (
                    <motion.div
                      key={category.id}
                      id={category.id}
                      variants={fadeInUp}
                      className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 lg:p-10 relative overflow-hidden group/section"
                    >
                      {/* Subtle background glow on section hover */}
                      <div className={`absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 blur-[80px] rounded-full opacity-0 group-hover/section:opacity-10 transition-opacity duration-700 pointer-events-none
                        ${category.accent === 'amber' ? 'bg-amber-500' : 'bg-navy-500'}
                      `}></div>

                      <div className="relative z-10">
                        {/* Category Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-8 md:mb-10">
                          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border flex-shrink-0 shadow-sm
                            ${category.accent === 'amber' ? 'bg-amber-50 border-amber-100' : 'bg-navy-50 border-navy-100'}
                          `}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-2">{category.title}</h3>
                            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">{category.desc}</p>
                          </div>
                        </div>

                        {/* Resource Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                          {category.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={`#${item.slug}`}
                              onClick={(e) => handleResourceClick(e, item.slug)}
                              className={`flex items-start gap-4 p-5 md:p-6 bg-slate-50/80 rounded-xl border border-slate-100 transition-all duration-300 group hover:shadow-lg hover:bg-white hover:-translate-y-0.5 cursor-pointer
                                ${category.accent === 'amber' ? 'hover:border-amber-300' : 'hover:border-navy-300'}
                              `}
                            >
                              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300
                                ${category.accent === 'amber'
                                  ? 'bg-white text-slate-400 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-500/20'
                                  : 'bg-white text-slate-400 group-hover:bg-navy-500 group-hover:text-white group-hover:shadow-navy-500/20'
                                }
                              `}>
                                {item.icon}
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="font-bold text-navy-900 text-sm md:text-[15px] group-hover:text-navy-700 transition-colors block mb-1">{item.title}</span>
                                <span className="text-slate-500 text-xs md:text-sm leading-relaxed block">{item.subtitle}</span>
                              </div>
                              <ArrowRight className={`w-5 h-5 flex-shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-1
                                ${category.accent === 'amber' ? 'text-slate-300 group-hover:text-amber-500' : 'text-slate-300 group-hover:text-navy-500'}
                              `} aria-hidden="true" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Engineering Support CTA */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
                <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                  {/* Internal Card Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

                  <div className="max-w-xl relative z-10 w-full">
                    <SectionHeader
                      title="Need Custom Engineering Support?"
                      description="If you require specific pushrod calculations, unique bracket alignments, or modified stroke limits, our engineering team is ready to assist."
                      align="left"
                      theme="dark"
                      accentColor="amber"
                      className="!mb-0"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
                    <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-nowrap">
                      Contact BRC Engineering
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 lg:px-8 max-w-[1920px]"
          >
            <div className="mb-6">
              <button
                onClick={() => {
                  setActiveResourceSlug(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-navy-600 font-bold hover:text-amber-600 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 hover:shadow-md"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Technical Library
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Main Content Area */}
              <div className="flex-grow space-y-10">

                {/* Main Content Card */}
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden">

                  {/* Optional Alert Box */}
                  {activeData.alert && (
                    <div className={`mb-10 p-6 rounded-2xl border flex gap-4 
                      ${activeData.alert.type === 'danger' ? 'bg-red-50 border-red-200' : ''}
                      ${activeData.alert.type === 'warning' ? 'bg-amber-50 border-amber-200' : ''}
                      ${activeData.alert.type === 'info' ? 'bg-blue-50 border-blue-200' : ''}
                    `}>
                      <div className={`shrink-0 mt-1
                        ${activeData.alert.type === 'danger' ? 'text-red-600' : ''}
                        ${activeData.alert.type === 'warning' ? 'text-amber-600' : ''}
                        ${activeData.alert.type === 'info' ? 'text-blue-600' : ''}
                      `}>
                        {activeData.alert.type === 'danger' && <AlertOctagon className="w-8 h-8" aria-hidden="true" />}
                        {activeData.alert.type === 'warning' && <AlertTriangle className="w-8 h-8" aria-hidden="true" />}
                        {activeData.alert.type === 'info' && <Info className="w-8 h-8" aria-hidden="true" />}
                      </div>
                      <div>
                        <h4 className={`text-lg font-black tracking-tight mb-2 uppercase
                          ${activeData.alert.type === 'danger' ? 'text-red-900' : ''}
                          ${activeData.alert.type === 'warning' ? 'text-amber-900' : ''}
                          ${activeData.alert.type === 'info' ? 'text-blue-900' : ''}
                        `}>{activeData.alert.title}</h4>
                        <p className={`font-medium leading-relaxed
                          ${activeData.alert.type === 'danger' ? 'text-red-800' : ''}
                          ${activeData.alert.type === 'warning' ? 'text-amber-800' : ''}
                          ${activeData.alert.type === 'info' ? 'text-blue-800' : ''}
                        `}>{activeData.alert.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Sections */}
                  <div className="space-y-12">
                    {activeData.sections.map((section: any, sIdx: number) => (
                      <div key={sIdx}>
                        <h2 className="text-2xl font-bold text-navy-900 mb-6 font-heading tracking-tight">{section.title}</h2>

                        {section.content && (
                          <p className="text-slate-600 text-lg leading-relaxed mb-6">{section.content}</p>
                        )}

                        {/* Render Bullets */}
                        {section.bullets && (
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {section.bullets.map((bullet: string, bIdx: number) => (
                              <li key={bIdx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="text-slate-700 leading-relaxed font-medium">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Render Numbered Steps */}
                        {section.steps && (
                          <div className="space-y-6 mt-8">
                            {section.steps.map((step: any, stepIdx: number) => (
                              <div key={stepIdx} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-navy-200 transition-colors">
                                <div className="absolute top-0 left-0 w-2 h-full bg-navy-100 group-hover:bg-amber-500 transition-colors"></div>
                                <div className="w-12 h-12 shrink-0 bg-navy-900 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
                                  {stepIdx + 1}
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Render Tables */}
                        {section.table && (
                          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse">
                                <thead>
                                  <tr className="bg-navy-900 text-white">
                                    {section.table.headers.map((header: string, hIdx: number) => (
                                      <th key={hIdx} className="p-4 font-bold text-sm tracking-wide">{header}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                  {section.table.rows.map((row: string[], rIdx: number) => (
                                    <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                                      {row.map((cell: string, cIdx: number) => (
                                        <td key={cIdx} className={`p-4 text-sm ${cIdx === 0 ? 'font-bold text-navy-900' : 'text-slate-600'}`}>
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Render FAQs */}
                        {section.faqs && (
                          <div className="mt-8">
                            <GlobalFAQAccordion
                              faqs={section.faqs.map((f: any) => ({ q: f.question, a: f.answer }))}
                              theme="light"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Download CTA */}
                {activeData.download && (
                  <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-[2rem] p-8 lg:p-10 shadow-xl border border-navy-800 text-white flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>
                    <div className="relative z-10 text-center sm:text-left">
                      <h3 className="text-2xl font-bold mb-2">Download Offline Copy</h3>
                      <p className="text-navy-200 text-lg">{activeData.download.name} ({activeData.download.size})</p>
                    </div>
                    <button className="relative z-10 shrink-0 bg-amber-500 hover:bg-amber-400 text-navy-900 font-black px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 hover:-translate-y-1 shadow-lg shadow-amber-500/20 uppercase tracking-widest text-sm">
                      <Download className="w-5 h-5" aria-hidden="true" /> Download PDF
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-[320px] shrink-0 space-y-6">

                {/* Related Topics Sidebar */}
                {(() => {
                  const relatedItems = Object.entries(TECHNICAL_RESOURCES_DATA)
                    .filter(([slug, item]) => item.category === activeData.category && slug !== activeResourceSlug)
                    .map(([slug, item]) => ({ slug, ...item }));

                  if (relatedItems.length === 0) return null;

                  return (
                    <div className="bg-white rounded-3xl p-6 shadow-md shadow-slate-200/50 border border-slate-100 lg:sticky lg:top-24">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                        <div className="p-2 bg-navy-50 text-navy-500 rounded-lg">
                          {activeData.icon}
                        </div>
                        <h3 className="text-base font-black text-navy-900 uppercase tracking-widest">
                          More in Category
                        </h3>
                      </div>

                      <div className="space-y-2">
                        {relatedItems.map((item) => (
                          <button
                            key={item.slug}
                            onClick={(e) => handleResourceClick(e as any, item.slug)}
                            className="w-full text-left group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                          >
                            <span className="text-[15px] font-bold text-slate-600 group-hover:text-amber-600 transition-colors">
                              {item.title}
                            </span>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                          </button>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-navy-900 text-white font-bold px-4 py-3 rounded-xl hover:bg-navy-800 transition-all hover:shadow-md uppercase tracking-wider text-xs">
                          Contact Engineering <ChevronRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  );
                })()}

              </div>

            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}


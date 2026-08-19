"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Wrench, FileArchive, Shield, ArrowDownToLine, ChevronRight, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TechnicalResourcesClient() {
  const [activeCategory, setActiveCategory] = useState('installation');

  const categories = [
    {
      id: 'installation',
      title: 'Installation & Maint.',
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      accent: 'amber',
      desc: 'Step-by-step OEM installation procedures, maintenance schedules, and safe caging procedures.',
      items: [
        { title: 'Installation Guides', type: 'PDF', link: '#' },
        { title: 'Maint. Schedules', type: 'PDF', link: '#' },
        { title: 'Troubleshooting', type: 'PDF', link: '#' },
        { title: 'Caging Procedures', type: 'PDF', link: '#' },
      ]
    },
    {
      id: 'specifications',
      title: 'Specifications & Sizing',
      icon: <FileArchive className="w-6 h-6 text-navy-500" />,
      accent: 'navy',
      desc: 'Detailed size charts, stroke length guides, and thread specifications for precise component matching.',
      items: [
        { title: 'Dimension Charts', type: 'PDF', link: '#' },
        { title: 'Stroke Guides', type: 'PDF', link: '#' },
        { title: 'Pushrod Calc.', type: 'PDF', link: '#' },
        { title: 'Port Thread Sizes', type: 'PDF', link: '#' },
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Compliance',
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      accent: 'emerald',
      desc: 'Essential compliance documents including CVSA criteria, FMVSS 121 standards, and safety warnings.',
      items: [
        { title: 'CVSA Criteria', type: 'PDF', link: '#' },
        { title: 'FMVSS 121 Standards', type: 'PDF', link: '#' },
        { title: 'Safety Warnings', type: 'PDF', link: '#' },
        { title: 'Warranty Info', type: 'PDF / Form', link: '#' },
      ]
    },
    {
      id: 'engineering',
      title: 'Engineering & Training',
      icon: <FileText className="w-6 h-6 text-slate-500" />,
      accent: 'slate',
      desc: 'Advanced technical resources including CAD models, material specifications, and engineering whitepapers.',
      items: [
        { title: 'CAD & 3D Models', type: 'CAD / STEP', link: '#' },
        { title: 'Material Specs', type: 'PDF', link: '#' },
        { title: 'Video Training', type: 'Video', link: '#' },
        { title: 'Whitepapers', type: 'PDF', link: '#' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-clip">
      <PageHeader
        badge="Engineering Support"
        title="Technical Resources"
        description="Access our comprehensive technical library. Download engineering specifications, installation procedures, and safety compliance manuals."
        imageSrc="/products/brake_chambers_diagram.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Technical Resources' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-20 relative z-20">

        {/* Essential Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 mb-8 md:mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-navy-900 font-heading">Most Downloaded Resources</h3>
              <p className="text-slate-500 text-sm">Quick access to our most frequently requested documents.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { title: "2024 Product Catalog", icon: <FileArchive className="w-5 h-5 text-amber-500" />, type: "PDF", link: "#" },
              { title: "Safety & Install Guide", icon: <Shield className="w-5 h-5 text-amber-500" />, type: "PDF", link: "#" },
              { title: "Warranty Form", icon: <FileText className="w-5 h-5 text-navy-500" />, type: "PDF", link: "#" }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="flex items-center justify-between p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-navy-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 w-full overflow-hidden mr-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-navy-900 text-xs md:text-sm truncate">{item.title}</span>
                </div>
                <ArrowDownToLine className="w-4 h-4 text-slate-400 group-hover:text-navy-900 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Video Training Highlight */}
        <section id="video-training" className="scroll-mt-32 lg:scroll-mt-40 mb-8 md:mb-16">
          <div className="bg-navy-950 rounded-2xl shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-10 md:-mr-20 -mt-10 md:-mt-20 pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <SectionHeader
                  badge="New Resource"
                  title={<>BRC <span className="text-amber-500">Video Training</span> Series</>}
                  description="For visual learners and technicians on the shop floor. Watch our lead engineers walk through safe caging procedures, pushrod cutting, and complete installation step-by-step."
                  theme="dark"
                  align="left"
                />
                <Link href="/training" className="inline-flex items-center gap-3 text-amber-500 font-extrabold hover:text-amber-400 transition-colors uppercase tracking-widest text-xs md:text-sm group mt-4 md:mt-0">
                  Access Video Library <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="w-full lg:w-1/2 relative min-h-[250px] md:min-h-[300px] lg:min-h-full">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80" alt="Video Training" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                    <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">

          {/* Animated Sticky Sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 mb-8 md:mb-0">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 md:mb-6 px-2">Library Categories</h3>
                <ul className="space-y-2 md:space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl font-bold transition-all duration-300 group
                        ${activeCategory === category.id
                            ? 'bg-navy-900 text-white shadow-md'
                            : 'hover:bg-slate-50 text-navy-900 hover:shadow-sm border border-transparent hover:border-slate-100'}
                      `}
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className={`p-2 rounded-xl transition-colors
                          ${activeCategory === category.id ? 'bg-white/10' : 'bg-slate-100 group-hover:bg-white'}
                        `}>
                            {React.cloneElement(category.icon, {
                              className: `w-5 h-5 transition-colors ${activeCategory === category.id ? 'text-amber-400' : category.icon.props.className
                                }`
                            })}
                          </div>
                          <span className="text-sm md:text-[15px]">{category.title}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-all
                        ${activeCategory === category.id ? 'text-white' : 'text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1'}
                      `} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Staggered Content Area */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-2/3"
          >
            <div className="space-y-8 md:space-y-12">
              {categories.map((category, catIdx) => (
                <motion.div
                  key={category.id}
                  id={category.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 lg:p-10 scroll-mt-24 md:scroll-mt-32 relative overflow-hidden group/section"
                >
                  {/* Subtle background glow on section hover */}
                  <div className={`absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 blur-[80px] rounded-full opacity-0 group-hover/section:opacity-10 transition-opacity duration-700 pointer-events-none
                    ${category.accent === 'amber' ? 'bg-amber-500' : ''}
                    ${category.accent === 'navy' ? 'bg-navy-500' : ''}
                    ${category.accent === 'red' ? 'bg-red-600' : ''}
                    ${category.accent === 'emerald' ? 'bg-emerald-600' : ''}
                    ${category.accent === 'slate' ? 'bg-slate-500' : ''}
                  `}></div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border flex-shrink-0 shadow-sm
                        ${category.accent === 'amber' ? 'bg-amber-50 border-amber-100' : ''}
                        ${category.accent === 'navy' ? 'bg-navy-50 border-navy-100' : ''}
                        ${category.accent === 'red' ? 'bg-red-50 border-red-100' : ''}
                        ${category.accent === 'emerald' ? 'bg-emerald-50 border-emerald-100' : ''}
                        ${category.accent === 'slate' ? 'bg-slate-50 border-slate-100' : ''}
                      `}>
                        {React.cloneElement(category.icon, { className: 'w-7 h-7 md:w-8 md:h-8' })}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-2">{category.title}</h2>
                        <p className="text-slate-600 font-light text-base md:text-lg lg:text-xl leading-relaxed">{category.desc}</p>
                      </div>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      {category.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          className={`flex flex-row items-center justify-between p-4 md:p-5 bg-slate-50/80 rounded-xl border border-slate-100 transition-all duration-300 group hover:shadow-md hover:bg-white
                            ${category.accent === 'amber' ? 'hover:border-amber-300' : ''}
                            ${category.accent === 'navy' ? 'hover:border-navy-300' : ''}
                            ${category.accent === 'red' ? 'hover:border-red-300' : ''}
                            ${category.accent === 'emerald' ? 'hover:border-emerald-300' : ''}
                            ${category.accent === 'slate' ? 'hover:border-slate-300' : ''}
                          `}
                        >
                          <div className="flex items-center gap-3 md:gap-4 w-[65%] sm:w-auto">
                            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-slate-400 group-hover:text-navy-900 transition-colors" />
                            </div>
                            <span className="font-bold text-navy-900 text-sm md:text-[15px] group-hover:translate-x-1 transition-transform truncate">{item.title}</span>
                          </div>

                          <div className="flex items-center gap-3 md:gap-6 ml-auto flex-shrink-0">
                            <span className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest hidden sm:inline-block">{item.type}</span>
                            <span className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1
                              ${category.accent === 'amber' ? 'text-slate-400 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-500/20' : ''}
                              ${category.accent === 'navy' ? 'text-slate-400 group-hover:bg-navy-500 group-hover:text-white group-hover:shadow-navy-500/20' : ''}
                              ${category.accent === 'red' ? 'text-slate-400 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-red-600/20' : ''}
                              ${category.accent === 'emerald' ? 'text-slate-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-emerald-600/20' : ''}
                              ${category.accent === 'slate' ? 'text-slate-400 group-hover:bg-slate-500 group-hover:text-white group-hover:shadow-slate-500/20' : ''}
                            `}>
                              <ArrowDownToLine className="w-5 h-5" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Engineering Support CTA */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] border-t border-slate-200 relative overflow-hidden mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Need Custom Engineering Support?</h3>
              <p className="text-navy-200 text-base md:text-lg font-light leading-relaxed">If you require specific pushrod calculations, unique bracket alignments, or modified stroke limits, our engineering team is ready to assist.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-nowrap">
                Contact BRC Engineering
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Lightbulb, PenTool, TrendingUp, Cpu, FlaskConical, Layers, Zap, CheckCircle2, ShieldCheck, Microscope, Factory, Cog, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import Card from '@/components/ui/Card';
import IconBox from '@/components/ui/IconBox';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';

export default function BrakeRandDClient() {

  const capabilities = [
    {
      icon: <PenTool className="w-7 h-7 text-amber-500" />,
      title: '3D CAD Modeling & Design',
      description: 'Every new brake chamber begins as a precision 3D CAD model. Our engineers build parametric designs that can be rapidly iterated — adjusting housing wall thickness, diaphragm geometry, push rod stroke lengths, and port locations before any metal is cut.',
      highlights: ['SolidWorks & NX parametric design', 'Full assembly interference checks', 'Design-for-Manufacturing (DFM) reviews'],
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-navy-500" />,
      title: 'Finite Element Analysis (FEA)',
      description: 'We digitally simulate extreme operating conditions — 120 PSI pneumatic bursts, torsional vibration from rough roads, and -40°F thermal shocks — to identify microscopic stress concentrations before a single prototype is built.',
      highlights: ['Burst pressure simulation up to 200 PSI', 'Thermal cycling & fatigue analysis', 'Aluminum die-cast geometry optimization'],
    },
    {
      icon: <Microscope className="w-7 h-7 text-amber-500" />,
      title: 'Rapid Prototyping',
      description: 'Once the digital design passes FEA validation, we produce physical prototypes using 3D printing and low-volume CNC machining. Prototypes undergo real-world bench testing within 2 weeks, accelerating the development cycle dramatically.',
      highlights: ['Functional metal prototypes in 14 days', 'In-house CNC machining center', 'Iterative design-test-refine loops'],
    },
    {
      icon: <FlaskConical className="w-7 h-7 text-navy-500" />,
      title: 'Metallurgical & Elastomer Lab',
      description: 'Our in-house materials lab tests raw steel tensile strength, rubber compound ozone resistance, and zinc plating adhesion. We control material quality at the molecular level to ensure every component meets or exceeds OEM specifications.',
      highlights: ['Tensile & hardness testing equipment', 'Salt spray corrosion chambers', 'Rubber aging & UV resistance tests'],
    },
  ];

  const roadmapItems = [
    {
      icon: <Cpu />,
      title: 'Smart Sensor Integration',
      detail: 'Embedded stroke and temperature sensors enabling real-time telematics for fleet predictive maintenance — detecting wear before failure occurs.',
      status: 'In Development',
    },
    {
      icon: <FlaskConical />,
      title: 'Next-Gen Elastomer Compounds',
      detail: 'Advanced synthetic rubber formulations engineered for extreme heat and UV resistance — targeting a continuous 200°F operating rating without compromising flex life.',
      status: 'Testing Phase',
    },
    {
      icon: <Layers />,
      title: 'Electric Vehicle Actuators',
      detail: 'Redesigned spring brake architectures purpose-built for electric semi-trucks, featuring regenerative braking integration and reduced parasitic air consumption.',
      status: 'Prototype',
    },
    {
      icon: <Zap />,
      title: 'Lightweight Composite Housings',
      detail: 'Carbon-fiber reinforced polymer (CFRP) housing prototypes delivering 30% weight reduction at equivalent burst strength — critical for next-gen fuel-efficiency mandates.',
      status: 'Research',
    },
  ];

  const stats = [
    { value: '50+', label: 'Engineers & Technicians', icon: Cog },
    { value: '14', label: 'Days to First Prototype', icon: Lightbulb },
    { value: '200+', label: 'Active SKU Designs', icon: Layers },
    { value: '100%', label: 'FEA-Validated Designs', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-clip">
      <PageHeader
        badge="Engineering Hub"
        title="Brake R&D"
        description="Inside BRC's dedicated research and development division — where advanced CAD design, FEA simulation, rapid prototyping, and metallurgical science converge to build the next generation of heavy-duty brake chambers."
        imageSrc="/images/engineering_blueprint.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manufacturing', href: '/manufacturing' },
          { label: 'Brake R&D' }
        ]}
      />

      {/* Section 1: R&D Philosophy Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <SectionHeader 
              title={<>We Don't Just <span className="text-amber-500">Build</span> Brake Chambers — <span className="text-amber-500">We Engineer Them</span></>}
            />
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-6">
              At BRC, research and development isn't a department — it's the foundation of everything we manufacture. 
              Every brake chamber we produce has been through hundreds of hours of digital simulation, physical testing, 
              and iterative refinement before it ever reaches an assembly line.
            </p>
            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Our R&D team works at the intersection of mechanical engineering, materials science, and 
              manufacturing technology. From designing lighter, stronger housings using advanced high-strength 
              steels to developing proprietary rubber compounds that survive extreme temperature swings — we 
              control every variable that determines whether a brake chamber performs reliably or fails on the road.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: By the Numbers */}
      <section className="py-16 md:py-20 bg-blue-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Card padding="md" hoverEffect="lift" className="text-center group h-full flex flex-col justify-center">
                  {/* The Top Right Circle Decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                  
                  <div className="relative z-10">
                    <IconBox icon={<stat.icon />} color="amber" size="lg" className="mx-auto mb-4 md:mb-6" />
                    <div className="text-3xl md:text-5xl font-black text-navy-900 mb-2 tracking-tight group-hover:text-amber-600 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Core R&D Capabilities — Alternating Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge="Core Capabilities"
            title="How We Develop Brake Chambers"
            accentColor="amber"
          />

          <div className="space-y-20 md:space-y-28 mt-16 md:mt-20">
            {capabilities.map((cap, idx) => {
              const isEven = idx % 2 === 0;
              const images = [
                '/images/engineering_blueprint.png',
                '/images/manufacturing_floor.png',
                '/images/commercial_trailer.png',
                '/images/heavy_duty_truck.png',
              ];

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 group`}
                >
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isEven ? 'bg-amber-50 border-amber-100/50' : 'bg-navy-50 border-navy-100/50'}`}>
                        {cap.icon}
                      </div>
                      <span className="text-slate-400 font-black text-5xl md:text-6xl tracking-tighter opacity-20">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className={`text-3xl md:text-4xl font-black text-navy-900 mb-4 tracking-tight transition-colors ${isEven ? 'group-hover:text-amber-600' : 'group-hover:text-navy-600'}`}>
                      {cap.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8">
                      {cap.description}
                    </p>
                    <div className="space-y-3">
                      {cap.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-navy-900 font-semibold text-sm md:text-base">{h}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative h-[280px] md:h-[380px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-500 group/img">
                      <Image
                        src={images[idx]}
                        alt={cap.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[8s] group-hover/img:scale-110 ease-out grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Digital Simulation Deep-Dive */}
      <section className="py-20 lg:py-32 bg-navy-950 relative overflow-hidden border-y border-navy-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity grayscale"></div>
        
        <AnimatedGridBackground opacity={0.08} />
        
        {/* Fade out masks to make the grid and image blend smoothly into the dark section */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <SectionHeader
            badge="Digital Prototyping"
            title="Simulating Millions of Cycles Before Production"
            description="Before a single ounce of steel is poured, our engineering team builds an exact digital twin in advanced 3D CAD software. Using Finite Element Analysis (FEA), we digitally simulate extreme pneumatic bursts, torsional vibration, and thermal shocks to identify stress fractures and optimize housing geometries before manufacturing begins."
            align="center"
            theme="dark"
            accentColor="amber"
            plainText={true}
            className="!mb-12"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center items-center gap-3 md:gap-6 mb-16"
          >
            {[
              { name: "Predictive Modeling", dot: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]", hoverBorder: "hover:border-amber-500/50", hoverText: "group-hover:text-amber-400" },
              { name: "Optimized Geometries", dot: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]", hoverBorder: "hover:border-emerald-500/50", hoverText: "group-hover:text-emerald-400" },
              { name: "Rapid Iterations", dot: "bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]", hoverBorder: "hover:border-sky-500/50", hoverText: "group-hover:text-sky-400" },
              { name: "Virtual Endurance", dot: "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]", hoverBorder: "hover:border-indigo-500/50", hoverText: "group-hover:text-indigo-400" }
            ].map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 px-6 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 min-w-[200px] group hover:bg-navy-800 transition-all duration-300 transform hover:-translate-y-1 ${feature.hoverBorder}`}
              >
                <div className={`w-2 h-2 rounded-full ${feature.dot} group-hover:scale-125 transition-transform duration-300`}></div>
                <span className={`text-white font-extrabold text-sm sm:text-base tracking-widest transition-colors drop-shadow-md ${feature.hoverText}`}>
                  {feature.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-navy-800 shadow-2xl group"
          >
            <Image src="/images/engineering_blueprint.png" alt="Brake Chamber FEA Simulation" fill className="object-cover group-hover:scale-105 transition-transform duration-[10s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-left">
              <div className="bg-navy-900/90 backdrop-blur-md p-5 md:p-8 rounded-2xl border border-navy-700 inline-block max-w-xl">
                <h4 className="text-amber-400 font-bold mb-2 uppercase tracking-widest text-xs md:text-sm">Active Simulation</h4>
                <p className="text-white font-light text-sm md:text-base leading-relaxed">Stress distribution mapped across a Type 30/30 housing under 150 PSI test load, ensuring zero micro-fractures under extreme braking events.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Innovation Roadmap */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Future Pipeline"
              title={<>What We're <span className="text-amber-500">Building Next</span></>}
              description="A glimpse into our active R&D roadmap. These programs are currently in prototype or early production-validation stages — positioning BRC at the forefront of heavy-duty braking innovation."
              align="center"
              theme="light"
              accentColor="slate"
              plainText={true}
              className="!mb-16"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadmapItems.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <Card padding="sm" hoverEffect="glow" glowColor={isEven ? 'amber' : 'navy'} className="flex flex-col gap-4 group h-full">
                      <div className="flex items-center justify-between">
                        <IconBox 
                          icon={item.icon} 
                          color="slate" 
                          size="md" 
                          className={isEven 
                            ? "group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100" 
                            : "group-hover:bg-navy-50 group-hover:text-navy-600 group-hover:border-navy-100"
                          } 
                        />
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${isEven ? 'text-amber-600 bg-amber-50 border-amber-100' : 'text-navy-600 bg-navy-50 border-navy-100'}`}>
                          {item.status}
                        </span>
                      </div>
                      <div>
                        <h4 className={`font-bold text-navy-900 text-sm md:text-base mb-2 transition-colors ${isEven ? 'group-hover:text-amber-600' : 'group-hover:text-navy-600'}`}>
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] pb-16 md:pb-24 mt-16 md:mt-24">
        <div className="bg-[#F1EFE8] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200">
          <SectionHeader 
            title="See Our Engineering Put to the Test" 
            description="Every design our R&D team creates must survive our brutal quality assurance lab — salt spray chambers, burst pressure rigs, and million-cycle endurance testers. See how we validate our work."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 text-navy-950 font-extrabold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Request Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/manufacturing/quality-assurance" className="inline-flex items-center justify-center bg-white border border-slate-200 text-navy-900 font-extrabold px-8 py-4 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm uppercase tracking-widest text-[12px] md:text-[13px] transform hover:-translate-y-1 w-full sm:w-auto">
              Quality Assurance Lab
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

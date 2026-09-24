"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, ArrowRight, CheckCircle2, Globe2, Users, Cog, Factory, Target, MapPin, ShieldCheck, Handshake, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground';

export default function CompanyClient() {
  return (
    <article className="min-h-screen bg-slate-50 font-sans overflow-x-clip">
      {/* SECTION 1: PAGE HERO */}
      <PageHeader
        badge="Chinese Manufacturer"
        badgeIcon={Building2}
        title="Chinese Manufacturer of OEM-Quality Brake Chambers"
        description="BRC Brake Chambers is a Zhejiang-based manufacturer of OEM-quality aftermarket brake chambers. Founded on deep engineering, vertically integrated production, and a single mission: give fleets in North America, Australia, Europe, and the Middle East a factory-direct alternative to overpriced OEM parts."
        imageSrc="/images/engineering_blueprint.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Story' }
        ]}
      />

      {/* SECTION 2: OUR STORY */}
      <section className="pb-16 md:pb-24 relative bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Overlapping Card Container */}
          <div className="bg-white rounded-[2rem] shadow-2xl shadow-navy-900/5 border border-slate-100 p-8 sm:p-12 lg:p-16 -mt-12 sm:-mt-24 relative z-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <SectionHeader
                  badge="Our Story"
                  title="How BRC Brake Chambers Began"
                  align="left"
                  plainText={true}
                  theme="light"
                  accentColor="amber"
                  className="!mb-6"
                />
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                  <p>
                    Zhejiang GAP Auto Parts Co., Ltd. (operating globally as BRC Brake Chambers) was founded to solve one problem: international fleets were paying OEM prices for aftermarket brake chambers, or buying cheap aftermarket parts that failed early.
                  </p>
                  <p>
                    We started with a single production line focused on Type 30 and Type 30/30D brake chambers for North American heavy-duty trucks. That focus built our reputation: two decades of producing only what we could prove.
                  </p>
                  <p>
                    Today, BRC operates a vertically integrated manufacturing facility in Zhejiang, China, exporting brake chambers to distributors across North America, Australia, Europe, and the Middle East, serving 30+ countries in total. But the founding principle has not changed: every chamber we ship is engineered to perform identically to the OEM part it replaces, at factory-direct pricing.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative h-[400px] sm:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image src="/images/brc1.jpg" alt="BRC Manufacturing Floor" fill className="object-cover transition-all duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-navy-900/10 mix-blend-overlay"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent h-48"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <div className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-xl border border-white relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600"></div>
                      <h3 className="text-navy-900 font-extrabold text-lg sm:text-xl mb-2">Built by Engineers. Trusted by Fleets.</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Precision engineering ensures every brake chamber delivers uncompromising safety on global freight routes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="hidden lg:block absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="hidden lg:block absolute -bottom-6 -left-6 w-40 h-40 bg-navy-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR TEAM */}
      <section className="py-16 md:py-24 bg-blue-50 relative border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            badge="Our Team"
            title="The People Behind BRC Brake Chambers"
            description="BRC employs over 250 manufacturing specialists, quality engineers, and export professionals across our Zhejiang facility. The team combines decades of automotive manufacturing experience with a shared focus: producing brake chambers that perform as well as the OEM parts they replace."
            align="center"
            plainText={true}
            theme="light"
            accentColor="amber"
          />
          <div className="space-y-20 mt-16">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                { icon: Users, stat: "250+", text: "Manufacturing Specialists" },
                { icon: Cog, stat: "50+", text: "Engineering & R&D Staff" },
                { icon: Globe2, stat: "Dedicated", text: "Export & Logistics Team" },
                { icon: Factory, stat: "In-House", text: "Quality Assurance Lab" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm text-center group hover:shadow-xl hover:border-amber-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-amber-100 border border-amber-200 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-amber-600 group-hover:scale-110 group-hover:bg-amber-200 transition-all duration-300 shadow-sm">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy-900 mb-1 sm:mb-2">{item.stat}</h3>
                  <p className="text-slate-600 font-medium text-[11px] sm:text-sm leading-tight">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Leadership Header */}
            <div className="text-center max-w-3xl mx-auto pt-10 border-t border-slate-200">
              <h3 className="text-3xl font-black text-navy-900 mb-4 tracking-tight">Leadership Team</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">Driven by experts in commercial vehicle braking systems, metallurgy, and lean manufacturing.</p>
            </div>

            {/* Leadership Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  name: 'James Chen',
                  role: 'Chief Executive Officer',
                  bio: 'James brings over 25 years of tier-1 automotive manufacturing experience. He spearheaded BRC\'s transition into automated robotics and expanded our global footprint.',
                  img: '51'
                },
                {
                  name: 'Sarah Jenkins',
                  role: 'VP of Engineering',
                  bio: 'With a Ph.D. in Mechanical Engineering, Sarah leads our R&D division, focusing on next-generation Air Disc Brake technologies and metallurgical advancements.',
                  img: '52'
                },
                {
                  name: 'Michael Torres',
                  role: 'Director of Global Supply Chain',
                  bio: 'Michael ensures our continuous flow assembly lines never stop. He manages our raw material sourcing, guaranteeing we only use premium 8-gauge steel.',
                  img: '53'
                }
              ].map((leader, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:border-amber-500 hover:-translate-y-1 text-center flex flex-col items-center group"
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto bg-slate-200 rounded-full mb-4 sm:mb-6 overflow-hidden relative shadow-inner">
                    <img src={`https://i.pravatar.cc/300?img=${leader.img}`} alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1">{leader.name}</h3>
                  <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">{leader.role}</p>
                  <div className="w-12 h-1 bg-slate-100 mx-auto mb-5"></div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-0 flex-grow font-light">
                    {leader.bio}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Group Photo Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative group border border-slate-200"
            >
              <img 
                src="/images/brc5.jpg" 
                alt="BRC Leadership Team on the manufacturing floor" 
                className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-[10s] group-hover:scale-110 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-white text-3xl md:text-4xl font-black mb-3 tracking-tight">United by Precision</h3>
                <p className="text-navy-100 max-w-2xl text-lg font-light leading-relaxed">
                  Our diverse executive board combines decades of tier-1 automotive manufacturing experience with forward-thinking engineering to redefine commercial vehicle safety.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MISSION & VALUES */}
      <section className="py-16 md:py-24 bg-white relative border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative order-2 lg:order-1"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image src="/images/brc2.jpg" alt="BRC Mission" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="w-24 h-24 text-white/80" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2"
            >
              <SectionHeader
                badge="What Drives Us"
                title="Our Mission as a Brake Chamber Manufacturer"
                description="BRC exists to give distributors and fleet operators across North America, Australia, Europe, and the Middle East an alternative to overpriced OEM brake chambers, without the quality compromises that define most low-cost aftermarket suppliers."
                align="left"
                plainText={true}
                theme="light"
                accentColor="amber"
                className="!mb-6"
              />
              
              <div className="space-y-6">
                {[
                  { icon: Target, title: "Precision Over Volume", desc: "Every chamber is engineered to fit, form, and function like the OEM part it replaces." },
                  { icon: Building2, title: "Factory-Direct Transparency", desc: "No middlemen, no hidden markups. Our customers buy from the factory floor." },
                  { icon: Handshake, title: "Long-Term Partnerships", desc: "We build relationships with distributors, not one-time transactions." },
                  { icon: CheckSquare, title: "Manufacturing Discipline", desc: "IATF 16949 quality systems govern every stage of production." }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:bg-amber-200 group-hover:scale-110 shadow-sm">
                      <value.icon className="w-6 h-6 text-amber-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-navy-900 mb-1">{value.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL REACH */}
      <section className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            badge="Global Reach"
            title="Brake Chambers Shipped to 30+ Countries"
            description="BRC exports brake chambers to distributors, importers, and fleet operators across four major regions."
            align="center"
            plainText={true}
            theme="light"
            accentColor="amber"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              { region: "North America", desc: "Serving distributors and fleet operators in the United States, Canada, and Mexico. FMVSS-121 compliant chambers for Class 7–8 trucks and trailers." },
              { region: "Australia & New Zealand", desc: "Brake chambers for road trains, prime movers, B-doubles, and dog trailers. ADR-compliant configurations available for Australian heavy vehicle fleets." },
              { region: "Europe", desc: "ECE R13 compliant brake chambers for HGVs and articulated trucks. Serving distributors across the UK, Germany, Netherlands, and wider EU markets." },
              { region: "Middle East", desc: "Heavy-duty brake chambers for desert, mining, and construction fleets. Serving importers and distributors in UAE, Saudi Arabia, Qatar, and Oman." }
            ].map((market, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-500 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-navy-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-125 z-0"></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-100 border border-amber-200 group-hover:bg-amber-200 flex items-center justify-center mb-4 sm:mb-6 relative z-10 transition-colors duration-300 shadow-sm">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 relative z-10">{market.region}</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed relative z-10">{market.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CERTIFICATIONS & COMPLIANCE */}
      <section className="py-16 md:py-24 bg-navy-950 relative overflow-hidden border-t border-navy-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 z-0"></div>
        <AnimatedGridBackground opacity={0.08} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeader
            badge="Certifications & Compliance"
            title="Manufacturing to Global Brake Chamber Standards"
            description="BRC operates under certified quality management systems and produces brake chambers tested to FMVSS-121 (North America), ECE R13 (Europe), and ADR (Australia) standards."
            align="center"
            theme="dark"
            accentColor="amber"
            plainText={true}
          />
          
          <div className="mt-12 mb-16">
            <div className="bg-navy-900/50 backdrop-blur-sm border border-navy-700/50 rounded-3xl p-6 sm:p-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-6 shadow-xl">
              {[
                "IATF 16949 Certified", 
                "FMVSS-121 Compliant", 
                "ECE R13 Compliant", 
                "ADR Compliant", 
                "SAE J1469 Compliant"
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/manufacturing/quality-assurance" className="inline-flex items-center justify-center bg-transparent border border-navy-600 text-white font-extrabold hover:text-amber-400 hover:border-amber-500 px-8 py-4 rounded-xl uppercase tracking-widest text-[13px] transition-all duration-300 shadow-md group">
              View Quality Assurance Lab <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: BOTTOM CTA */}
      <section className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>

            <div className="relative z-10 flex-1 max-w-2xl text-center md:text-left">
              <SectionHeader
                badge="Work With BRC"
                title={<>Ready to Source Brake Chambers <span className="text-amber-400">Direct From the Factory?</span></>}
                description="Whether you're looking for a supplier for your distribution business, a private label partner, or a custom OEM program, BRC is ready to quote."
                align="left"
                theme="dark"
                accentColor="amber"
                className="!mb-0"
                plainText={true}
              />
            </div>

            <div className="relative z-10 flex flex-col w-full md:w-auto gap-4 min-w-[240px] shrink-0 mt-8 md:mt-0">
              <Link 
                href="/contact" 
                className="bg-amber-500 text-navy-950 font-black py-4 px-8 rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 text-center uppercase tracking-widest text-[13px] transform hover:-translate-y-1"
              >
                Contact Sales Team <ArrowRight className="inline-block w-4 h-4 ml-2 -mt-1" />
              </Link>
              <Link 
                href="/quote" 
                className="bg-navy-800 text-white border border-navy-600 font-black py-4 px-8 rounded-xl hover:bg-navy-700 hover:border-navy-500 transition-all text-center uppercase tracking-widest text-[13px] transform hover:-translate-y-1"
              >
                Request Factory Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Microscope, Globe2, TestTube, Lightbulb, Mail, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CompanyClient() {
  const milestones = [
    { year: '1998', title: 'The Foundation', description: 'Founded as a specialized mechanical engineering firm focused on reverse-engineering commercial brake failure points.' },
    { year: '2005', title: 'First Production Facility', description: 'Opened our first dedicated manufacturing plant, bringing production fully in-house for absolute quality control.' },
    { year: '2012', title: 'Automotive Standards Certification', description: 'Achieved rigorous international quality management certification, standardizing our testing protocols.' },
    { year: '2018', title: 'Global Expansion', description: 'Expanded distribution to over 35 countries, becoming a tier-1 supplier for major international fleets.' },
    { year: '2024', title: 'Next-Gen Robotics', description: 'Fully integrated automated robotic welding and CNC machining into all heavy-duty assembly lines.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-clip">
      <PageHeader
        badge="About BRC"
        title="Built by Engineers. Trusted by Fleets."
        description="Deep engineering, vertically integrated manufacturing, and uncompromising quality control. Welcome to BRC Brake Chambers — where every chamber is designed, tested, and built in our own factory."
        imageSrc="/images/engineering_blueprint.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company' }
        ]}
      />

      {/* SECTION 1: THE STORY */}
      <section className="py-20 md:py-32 relative bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <SectionHeader
                badge={<span className="flex items-center gap-1.5"><Globe2 className="w-3.5 h-3.5 text-amber-500" /> Our Story</span>}
                title={<>Built on <span className="text-amber-500">Engineering Excellence</span></>}
                align="left"
              />
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light text-justify">
                <p>
                  Zhejiang GAP Auto Parts Co., Ltd. (operating globally as BRC Brake Chambers) is a specialized factory dedicated exclusively to manufacturing a complete range of air brake chambers for American and European heavy-duty trucks and trailers. 
                </p>
                <p>
                  We have deeply cultivated the North American market for nearly 20 years. Over two decades, we have refined highly mature production lines—particularly for our flagship T30 and T30/30DD assemblies. Our semi-automated manufacturing processes, combined with highly skilled operators and strict quality control management, allow us to consistently meet and exceed the stringent quality and delivery requirements of our mid-to-high-end global clientele.
                </p>
                <p>
                  Our commitment to precision engineering ensures that every single brake chamber that leaves our facility delivers uncompromising safety, whether operating on domestic highways or international freight routes.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/manufacturing_floor.png" alt="BRC Manufacturing Floor" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-navy-900/10 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 to-transparent h-48 opacity-80"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600"></div>
                    <h4 className="text-navy-900 font-extrabold text-xl mb-2">Our Leadership</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Led by our executive team and master engineers, we combine decades of experience in commercial vehicle braking systems, metallurgical science, and lean manufacturing to set the global standard.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-navy-100 rounded-full blur-3xl opacity-60 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: LEADERSHIP TEAM */}
      <section className="py-20 md:py-32 bg-white relative border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge={<span className="flex items-center gap-1.5 justify-center"><Users className="w-3.5 h-3.5 text-amber-500" /> Executive Team</span>}
            title="Leadership Team"
            description="Driven by experts in commercial vehicle braking systems, metallurgy, and lean manufacturing."
            align="center"
          />
          <div className="space-y-16 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
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
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
                >
                  <div className="w-40 h-40 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden relative">
                    <img src={`https://i.pravatar.cc/300?img=${leader.img}`} alt={leader.name} className="w-full h-full object-cover grayscale transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-1">{leader.name}</h3>
                  <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4">{leader.role}</p>
                  <div className="w-12 h-1 bg-slate-100 mx-auto mb-4 group-hover:bg-amber-400 transition-colors"></div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Group Photo Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative group mt-16"
            >
              <img 
                src="/leadership-group.jpg" 
                alt="BRC Leadership Team on the manufacturing floor" 
                className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-white text-3xl md:text-4xl font-black mb-2 tracking-tight">United by Precision</h3>
                <p className="text-navy-100 max-w-2xl text-lg">
                  Our diverse executive board combines decades of tier-1 automotive manufacturing experience with forward-thinking engineering to redefine commercial vehicle safety.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE BRC MANUFACTURING EDGE */}
      <section className="py-20 md:py-32 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge="Technical Superiority"
            title="Our Manufacturing Edge"
            description="Engineered with premium raw materials to guarantee zero air leakage and exact stroke lengths."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Heavy-Duty Internals</h3>
                <p className="text-slate-600 leading-relaxed font-light mb-6">
                  Unlike generic aftermarket substitutes, we utilize high-grade, large-diameter return springs available in <strong className="text-navy-900 font-bold">13mm, 13.2mm, and 13.5mm wire specifications</strong>. Combined with thickened pushrods and reinforced outer housings, our chambers guarantee the specified driving and parking force required for heavy loads.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-4">
                <span className="text-amber-600 font-bold text-[11px] uppercase tracking-widest block mb-1">Guaranteed Performance</span>
                <span className="text-navy-900 font-medium text-sm">Exact stroke lengths: 57mm, 64mm, and 75mm.</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Custom OEM Capabilities</h3>
                <p className="text-slate-600 leading-relaxed font-light mb-6">
                  Our standard production features premium <strong className="text-navy-900 font-bold">Black and Gold anti-corrosion coatings</strong>, but our mature production line allows for full customization based on client requirements. We package securely using custom cartons and export pallets for safe transit via ocean, rail, or air freight.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-4">
                <span className="text-amber-600 font-bold text-[11px] uppercase tracking-widest block mb-1">European ADB Expansion</span>
                <span className="text-navy-900 font-medium text-sm">Newly developed Air Disc Brakes matching HALDEX, KNORR & WABCO quality at factory-direct pricing.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE BRC STANDARD - Full Width Grid Layout */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <SectionHeader
            badge={<span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Quality Control</span>}
            title="Batch-by-Batch Transparency"
            description="We implement strict quality inspection protocols for every single batch of orders. We provide authentic, reliable Quality Inspection Reports with your shipment, proving our commitment to zero-defect manufacturing."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-extrabold text-navy-900 mb-4">Authentic Test Reports</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                We utilize advanced detection equipment to document the testing process. Real quality inspection reports are generated and provided with every batch.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TestTube className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-extrabold text-navy-900 mb-4">Material Verification</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                From the 13.5mm high-grade spring steel to the thickened housing materials, all incoming raw components are rigorously verified against OEM specifications.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-extrabold text-navy-900 mb-4">Pneumatic Leak Testing</h4>
              <p className="text-slate-600 font-light leading-relaxed">
                100% end-of-line pneumatic leak testing for every single chamber under specified air pressure conditions. If it isn't completely airtight, it is rejected.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CERTIFICATIONS & COMPLIANCE */}
      <section className="py-20 md:py-32 bg-navy-900 relative overflow-hidden border-t border-navy-800">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative z-10">
          <SectionHeader
            badge="Certifications & Compliance"
            title="Certified to Global Standards"
            description="We don't self-certify. Our entire manufacturing ecosystem is audited strictly under international quality management systems."
            align="center"
            theme="dark"
            accentColor="amber"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-6 mb-12">
            {[
              { title: "Automotive Standards", desc: "Quality Management Systems — Certified" },
              { title: "Automotive Standards", desc: "Automotive Quality Management — Certified" },
              { title: "FMVSS 121", desc: "Federal Motor Vehicle Safety Standards — Compliant" },
              { title: "SAE J1469", desc: "Air Brake Actuator Standards — Compliant" }
            ].map((badge, idx) => (
              <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:border-amber-500/50 transition-colors group">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-lg mb-2">{badge.title}</h4>
                <p className="text-navy-300 text-sm font-light">{badge.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/manufacturing/quality-assurance" className="inline-flex items-center bg-transparent border border-navy-600 text-white font-bold hover:text-amber-400 hover:border-amber-500 px-8 py-4 rounded-xl uppercase tracking-widest text-[13px] transition-all duration-300 shadow-md">
              View Quality Assurance Lab <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
                Ready to Partner?
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Partner With a Proven Manufacturer</h3>
              <p className="text-navy-200 text-base md:text-lg font-light">Whether you need a custom OEM solution, private labeling, or a container of replacement chambers for your distribution network, BRC delivers.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-10 py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Contact Sales Team
              </Link>
              <Link href="/manufacturing" className="inline-block w-full bg-navy-800/60 hover:bg-navy-800 border border-navy-600 hover:border-amber-500 text-white font-black text-center px-6 sm:px-10 py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Explore Manufacturing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


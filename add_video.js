const fs = require('fs');

const targetFile = 'src/features/technical-resources/components/TechnicalResourcesClient.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

const videoSection = `            {/* SECTION 2: VIDEO TRAINING BANNER */}
            <section className="py-16 md:py-24 relative">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
                <div id="video-training" className="scroll-mt-32 lg:scroll-mt-40 bg-gradient-to-b from-navy-800 to-navy-900 border border-navy-700 rounded-[2rem] shadow-xl shadow-navy-900/10 relative overflow-hidden group flex flex-col lg:flex-row transform hover:-translate-y-2 transition-all duration-500 hover:border-amber-500/50">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  {/* Subtle Corner Graphic */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-navy-700/40 rounded-br-full -ml-10 -mt-10 transition-transform duration-500 group-hover:scale-110 z-0 pointer-events-none"></div>

                  <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative z-10">
                    <SectionHeader
                      badge="Video Training Library"
                      title={<>Brake Chamber Installation & <span className="text-amber-500">Maintenance Videos</span></>}
                      description="Step-by-step video walkthroughs from our lead engineers. Covers safe caging procedures, push-rod cutting, torque specs, and complete installation - filmed on the shop floor."
                      align="left"
                      theme="dark"
                      accentColor="amber"
                      className="!mb-4"
                    />
                    <ul className="space-y-3 mb-8 text-slate-300 font-light text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Video Training Content Coming Soon</li>
                    </ul>
                    <Link href="/contact?subject=Video+Training+Access" className="inline-flex items-center gap-3 bg-amber-500 px-6 py-3 rounded-lg text-navy-950 font-extrabold hover:bg-amber-400 transition-colors uppercase tracking-widest text-xs md:text-sm group/btn mt-4 md:mt-0 self-start shadow-lg shadow-amber-500/20 transform hover:-translate-y-1">
                      Notify Me <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
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

            {/* SECTION 2: LIBRARY CATEGORIES */}
`;

content = content.replace(/\{\/\* SECTION 2: LIBRARY CATEGORIES \*\/\}/, videoSection);
fs.writeFileSync(targetFile, content);
console.log('Successfully added video section back with a single coming soon bullet.');

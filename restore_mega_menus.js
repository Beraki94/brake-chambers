const fs = require('fs');

const file = 'src/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

let start = -1;
let end = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('{/* Secondary Navigation (Desktop Only)')) {
    start = i;
  }
  if (start !== -1 && lines[i].includes('      </div>') && lines[i-1] && lines[i-1].includes('</nav>')) {
    end = i;
    break;
  }
}

if (start !== -1 && end !== -1) {
  const replacement = `      {/* Secondary Navigation (Desktop Only) - DYNAMIC MEGA MENUS */}
      <div className={\`hidden md:block relative z-40 transition-colors duration-300 \${isScrolled ? 'bg-navy-900 border-t border-navy-800 border-b-2 border-[#FFB000] shadow-md' : 'bg-slate-50 border-y border-navy-100 shadow-sm'}\`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <nav className={\`flex items-center gap-6 lg:gap-8 h-12 text-sm font-semibold transition-colors duration-300 \${isScrolled ? 'text-navy-100' : 'text-navy-700'}\`}>
            
            {/* Spring Brakes */}
            <div className="group h-full flex items-center">
              <Link href={\`/spring-brakes\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Spring Brakes
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
                  <div className="flex gap-12">
                    <div className="w-1/3">
                      <h3 className="text-navy-900 font-bold text-lg mb-4">Categories</h3>
                      <div className="border-b border-slate-200 mb-4"></div>
                      <ul className="space-y-3">
                        <li><Link href="/spring-brakes?type=Standard" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Standard Stroke</Link></li>
                        <li><Link href="/spring-brakes?type=LongStroke" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Long Stroke</Link></li>
                        <li><Link href="/spring-brakes?type=Welded" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Welded Clevis</Link></li>
                      </ul>
                      <Link href="/spring-brakes" className="inline-block mt-6 text-amber-500 font-bold hover:text-amber-600 transition-colors">
                        View All Spring Brakes &rarr;
                      </Link>
                    </div>
                    <div className="w-2/3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <h3 className="text-navy-900 font-bold text-lg mb-6">Most Popular</h3>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <Link href="/spring-brakes/type-3030-spring-brake-standard-1" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Type 30/30 Standard</h4>
                            <p className="text-slate-500 text-sm mt-1">Premium heavy-duty chamber</p>
                          </Link>
                        </div>
                        <div>
                          <Link href="/spring-brakes/type-3030-spring-brake-long-stroke-2" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Type 30/30 Long Stroke</h4>
                            <p className="text-slate-500 text-sm mt-1">Extra reserve stopping power</p>
                          </Link>
                        </div>
                        <div>
                          <Link href="/spring-brakes/type-2430-spring-brake-standard-3" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Type 24/30 Standard</h4>
                            <p className="text-slate-500 text-sm mt-1">Versatile application design</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Chambers */}
            <div className="group h-full flex items-center">
              <Link href={\`/service-chambers\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Service Chambers
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
                  <div className="flex gap-12">
                    <div className="w-1/3">
                      <h3 className="text-navy-900 font-bold text-lg mb-4">Categories</h3>
                      <div className="border-b border-slate-200 mb-4"></div>
                      <ul className="space-y-3">
                        <li><Link href="/service-chambers?size=30" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Type 30 Chambers</Link></li>
                        <li><Link href="/service-chambers?size=24" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Type 24 Chambers</Link></li>
                        <li><Link href="/service-chambers?size=20" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Type 20 Chambers</Link></li>
                      </ul>
                      <Link href="/service-chambers" className="inline-block mt-6 text-amber-500 font-bold hover:text-amber-600 transition-colors">
                        View All Service Chambers &rarr;
                      </Link>
                    </div>
                    <div className="w-2/3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <h3 className="text-navy-900 font-bold text-lg mb-6">Most Popular</h3>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <Link href="/service-chambers/type-30-service-chamber-6" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Type 30 Service Chamber</h4>
                            <p className="text-slate-500 text-sm mt-1">Standard drum brake service chamber</p>
                          </Link>
                        </div>
                        <div>
                          <Link href="/service-chambers/type-24-service-chamber-8" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Type 24 Service Chamber</h4>
                            <p className="text-slate-500 text-sm mt-1">Light duty service chamber</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Air Disc Actuators */}
            <div className="group h-full flex items-center">
              <Link href={\`/air-disc-actuators\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Air Disc Actuators
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
                  <div className="flex gap-12">
                    <div className="w-1/3">
                      <h3 className="text-navy-900 font-bold text-lg mb-4">Categories</h3>
                      <div className="border-b border-slate-200 mb-4"></div>
                      <ul className="space-y-3">
                        <li><Link href="/air-disc-actuators" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Standard ADB</Link></li>
                        <li><Link href="/air-disc-actuators" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Heavy Duty ADB</Link></li>
                      </ul>
                      <Link href="/air-disc-actuators" className="inline-block mt-6 text-amber-500 font-bold hover:text-amber-600 transition-colors">
                        View All Actuators &rarr;
                      </Link>
                    </div>
                    <div className="w-2/3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <h3 className="text-navy-900 font-bold text-lg mb-6">Features</h3>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-navy-900 font-bold text-base">Optimized for Disc</h4>
                          <p className="text-slate-500 text-sm mt-1">Built specifically for air disc systems</p>
                        </div>
                        <div>
                          <h4 className="text-navy-900 font-bold text-base">High Performance</h4>
                          <p className="text-slate-500 text-sm mt-1">Excellent stopping power</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chamber Parts & Kits */}
            <div className="group h-full flex items-center">
              <Link href={\`/chamber-parts-kits\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Parts & Kits
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
                  <div className="flex gap-12">
                    <div className="w-1/3">
                      <h3 className="text-navy-900 font-bold text-lg mb-4">Categories</h3>
                      <div className="border-b border-slate-200 mb-4"></div>
                      <ul className="space-y-3">
                        <li><Link href="/chamber-parts-kits" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Piggyback Kits</Link></li>
                        <li><Link href="/chamber-parts-kits" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Diaphragms</Link></li>
                        <li><Link href="/chamber-parts-kits" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Hardware & Clevises</Link></li>
                      </ul>
                      <Link href="/chamber-parts-kits" className="inline-block mt-6 text-amber-500 font-bold hover:text-amber-600 transition-colors">
                        View All Parts &rarr;
                      </Link>
                    </div>
                    <div className="w-2/3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <h3 className="text-navy-900 font-bold text-lg mb-6">Most Popular</h3>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <Link href="/chamber-parts-kits/type-30-rubber-diaphragm-a1" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Type 30 Diaphragm</h4>
                            <p className="text-slate-500 text-sm mt-1">High temp resistance</p>
                          </Link>
                        </div>
                        <div>
                          <Link href="/chamber-parts-kits/standard-caging-bolt-a3" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Standard Caging Bolt</h4>
                            <p className="text-slate-500 text-sm mt-1">Hardened Steel</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Applications */}
            <div className="group h-full flex items-center">
              <span className={\`cursor-pointer transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Applications
              </span>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
                  <div className="flex gap-12">
                    <div className="w-1/3">
                      <h3 className="text-navy-900 font-bold text-lg mb-4">Categories</h3>
                      <div className="border-b border-slate-200 mb-4"></div>
                      <ul className="space-y-3">
                        <li><Link href="/applications/s-cam-brakes" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">S-Cam Drum Brakes</Link></li>
                        <li><Link href="/applications/disc-brakes" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Air Disc Brakes</Link></li>
                        <li><Link href="/applications/specialty-brakes" className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-base">Specialty Brakes</Link></li>
                      </ul>
                      <Link href="/applications" className="inline-block mt-6 text-amber-500 font-bold hover:text-amber-600 transition-colors">
                        View All Applications &rarr;
                      </Link>
                    </div>
                    <div className="w-2/3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <h3 className="text-navy-900 font-bold text-lg mb-6">Featured Focus</h3>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <Link href="/applications/s-cam-brakes" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">S-Cam Drum Brakes</h4>
                            <p className="text-slate-500 text-sm mt-1">Heavy-duty commercial trailers and drive axles</p>
                          </Link>
                        </div>
                        <div>
                          <Link href="/applications/disc-brakes" className="group/item">
                            <h4 className="text-navy-900 font-bold text-base group-hover/item:text-amber-500 transition-colors">Air Disc Brakes (ADB)</h4>
                            <p className="text-slate-500 text-sm mt-1">High-performance ADB chambers</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1"></div>
            
            <div className="h-full flex items-center">
              <Link href="/oem-cross-reference" className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}\`}>
                OEM Cross-Reference
              </Link>
            </div>

            <div className="h-full flex items-center">
              <Link href="/technical-resources" className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}\`}>
                Technical Resources
              </Link>
            </div>
          </nav>
        </div>
      </div>`;

  lines.splice(start, end - start + 1, replacement);
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  console.log('Restored detailed mega menus');
} else {
  console.log('Failed to find bounds:', start, end);
}

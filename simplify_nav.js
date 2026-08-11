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
  const replacement = `      {/* Secondary Navigation (Desktop Only) - DYNAMIC (Option 3 at Top, Option 2 on Scroll) */}
      <div className={\`hidden md:block relative z-40 transition-colors duration-300 \${isScrolled ? 'bg-navy-900 border-t border-navy-800 border-b-2 border-[#FFB000] shadow-md' : 'bg-slate-50 border-y border-navy-100 shadow-sm'}\`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <nav className={\`flex items-center gap-8 h-12 text-sm font-semibold transition-colors duration-300 \${isScrolled ? 'text-navy-100' : 'text-navy-700'}\`}>
            
            {/* Spring Brakes */}
            <div className="group relative h-full flex items-center">
              <Link href={\`/spring-brakes\`} className={\`transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Spring Brakes
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/spring-brakes/type-3030-standard" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 30/30 Standard Stroke</Link>
                <Link href="/spring-brakes/type-3030-long-stroke" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 30/30 Long Stroke</Link>
                <Link href="/spring-brakes/heavy-duty-tandems" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 30/36 & Heavy Tandems</Link>
                <Link href="/spring-brakes/specialty-sizes" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 24/30 & Specialized</Link>
                <Link href="/spring-brakes/sealed-series" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">OEM Sealed Series</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/spring-brakes" className="block px-5 py-2.5 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">Browse All Spring Brakes &rarr;</Link>
              </div>
            </div>

            {/* Service Chambers */}
            <div className="group relative h-full flex items-center">
              <Link href={\`/service-chambers\`} className={\`transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Service Chambers
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/service-chambers/type-30" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 30 Universal</Link>
                <Link href="/service-chambers/type-24" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 24 Intermediate</Link>
                <Link href="/service-chambers/steer-axle-sizes" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 20 & 16 Steer Axle</Link>
                <Link href="/service-chambers/welded-clevis" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Pro-Fit Welded Clevis</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/service-chambers" className="block px-5 py-2.5 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">Browse All Service Chambers &rarr;</Link>
              </div>
            </div>

            {/* Air Disc Actuators */}
            <div className="group relative h-full flex items-center">
              <Link href={\`/air-disc-actuators\`} className={\`transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Air Disc Actuators
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/air-disc-actuators/type-18-24" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 18/24 ADB Combinations</Link>
                <Link href="/air-disc-actuators/type-20-24" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 20/24 High-Output</Link>
                <Link href="/air-disc-actuators/single-service" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Single-Service Steer ADB</Link>
                <Link href="/air-disc-actuators/caliper-compatibility" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Caliper Interchanges</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/air-disc-actuators" className="block px-5 py-2.5 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">Browse All ADB Actuators &rarr;</Link>
              </div>
            </div>

            {/* Chamber Parts & Kits */}
            <div className="group relative h-full flex items-center">
              <Link href={\`/chamber-parts-kits\`} className={\`transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Chamber Parts & Kits
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/chamber-parts-kits/piggyback-kits" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Piggyback Rebuild Assemblies</Link>
                <Link href="/chamber-parts-kits/diaphragms" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Premium Diaphragms</Link>
                <Link href="/chamber-parts-kits/hardware-clevises" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Clevises & Hardware</Link>
                <Link href="/chamber-parts-kits/tamper-resistant-clamps" className="block px-5 py-2.5 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Tamper-Resistant Clamps</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/chamber-parts-kits" className="block px-5 py-2.5 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">Browse All Parts & Kits &rarr;</Link>
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
  console.log('Replaced secondary navigation');
} else {
  console.log('Failed to find bounds:', start, end);
}

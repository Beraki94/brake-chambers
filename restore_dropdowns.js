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
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/spring-brakes/type-3030-standard" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 30/30 Standard</Link>
                <Link href="/spring-brakes/type-3030-long-stroke" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 30/30 Long Stroke</Link>
                <Link href="/spring-brakes/heavy-duty-tandems" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Heavy Duty Tandems</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/spring-brakes" className="block px-4 py-2 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">View All &rarr;</Link>
              </div>
            </div>

            {/* Service Chambers */}
            <div className="group relative h-full flex items-center">
              <Link href={\`/service-chambers\`} className={\`transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Service Chambers
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/service-chambers/type-30" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 30</Link>
                <Link href="/service-chambers/type-24" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 24</Link>
                <Link href="/service-chambers/steer-axle-sizes" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Steer Axle</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/service-chambers" className="block px-4 py-2 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">View All &rarr;</Link>
              </div>
            </div>

            {/* Air Disc Actuators */}
            <div className="group relative h-full flex items-center">
              <Link href={\`/air-disc-actuators\`} className={\`transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Air Disc Actuators
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/air-disc-actuators/type-18-24" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 18/24</Link>
                <Link href="/air-disc-actuators/type-20-24" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Type 20/24</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/air-disc-actuators" className="block px-4 py-2 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">View All &rarr;</Link>
              </div>
            </div>

            {/* Applications */}
            <div className="group relative h-full flex items-center">
              <span className={\`cursor-pointer transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Applications
              </span>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/applications/s-cam-brakes" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">S-Cam Drum Brakes</Link>
                <Link href="/applications/disc-brakes" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Air Disc Brakes (ADB)</Link>
                <Link href="/applications/specialty-brakes" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Specialty Brakes</Link>
              </div>
            </div>

            {/* Chamber Parts & Kits */}
            <div className="group relative h-full flex items-center">
              <Link href={\`/chamber-parts-kits\`} className={\`transition-colors py-3.5 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}\`}>
                Parts & Kits
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-slate-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 text-sm">
                <Link href="/chamber-parts-kits/piggyback-kits" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Piggyback Kits</Link>
                <Link href="/chamber-parts-kits/diaphragms" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Diaphragms</Link>
                <Link href="/chamber-parts-kits/hardware-clevises" className="block px-4 py-2 text-navy-800 hover:bg-slate-50 hover:text-amber-600 font-bold transition-colors">Hardware & Clevises</Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="/chamber-parts-kits" className="block px-4 py-2 text-amber-600 hover:bg-slate-50 hover:text-amber-700 font-bold transition-colors">View All &rarr;</Link>
              </div>
            </div>

            <div className="flex-1"></div>
            
            <div className="h-full flex items-center">
              <Link href="/oem-cross-reference" className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}\`}>
                OEM Cross-Reference
              </Link>
            </div>
          </nav>
        </div>
      </div>`;

  lines.splice(start, end - start + 1, replacement);
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  console.log('Restored simple dropdowns and Applications nav');
} else {
  console.log('Failed to find bounds:', start, end);
}

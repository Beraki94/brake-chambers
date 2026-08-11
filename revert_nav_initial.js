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
            <div className="h-full flex items-center">
              <Link href={\`/spring-brakes\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}\`}>
                Spring Brakes
              </Link>
            </div>

            {/* Service Chambers */}
            <div className="h-full flex items-center">
              <Link href={\`/service-chambers\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}\`}>
                Service Chambers
              </Link>
            </div>

            {/* Air Disc Actuators */}
            <div className="h-full flex items-center">
              <Link href={\`/air-disc-actuators\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}\`}>
                Air Disc Actuators
              </Link>
            </div>

            {/* Chamber Parts & Kits */}
            <div className="h-full flex items-center">
              <Link href={\`/chamber-parts-kits\`} className={\`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent \${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}\`}>
                Chamber Parts & Kits
              </Link>
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
  console.log('Reverted secondary navigation to initial standard links');
} else {
  console.log('Failed to find bounds:', start, end);
}

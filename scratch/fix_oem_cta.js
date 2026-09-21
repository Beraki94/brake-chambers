const fs = require('fs');

let content = fs.readFileSync('src/features/oem/components/OEMCrossReferenceClient.tsx', 'utf8');

const targetSection = `      {/* SECTION 9 — CUSTOM CROSS-REFERENCE CTA */}
      <div className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <SectionHeader
                badge="Engineering Support"
                title="Need a Custom Brake Chamber Cross-Reference?"
                description={<>If you have a specialized, discontinued, or legacy OEM part number not found in our database, our engineering team will reverse-engineer the match and return a BRC equivalent within 24 hours. Every custom match is backed by our Verified Match Guarantee.</>}
                align="left"
                theme="dark"
                accentColor="amber"
                className="!mb-0"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-6 sm:px-10 py-4 sm:py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Request a Custom Cross-Match
              </Link>
              <button onClick={() => { document.getElementById('search-tool')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-block w-full bg-navy-800/60 hover:bg-navy-800 border border-navy-600 hover:border-amber-500 text-white font-black text-center px-6 sm:px-10 py-4 sm:py-5 rounded-xl uppercase tracking-widest text-[13px] sm:text-[14px] transition-all duration-300 shadow-xl transform hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal">
                Search the Full Database
              </button>
            </div>
          </div>
        </div>
      </div>`;

const startMarker = "{/* SECTION 9 — CUSTOM CROSS-REFERENCE CTA */}";
const endMarker = "{/* SECTION 10 — RELATED RESOURCES */}";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex);
  content = before + targetSection + '\n\n      ' + after;
  fs.writeFileSync('src/features/oem/components/OEMCrossReferenceClient.tsx', content);
  console.log('Successfully reverted CTA layout in OEMCrossReferenceClient.tsx');
} else {
  console.log('Markers not found');
}

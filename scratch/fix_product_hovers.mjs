import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// ===== SPRING BRAKES (keep amber but add accent bar) =====
// Add accent bar after the opening Link tag
content = content.replace(
  /({\/\* Spring Brakes \*\/}\s*<Link href="\/spring-brakes" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-\[0_20px_40px_-10px_rgba\(245,158,11,0\.3\)\] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">\s*\n)/,
  `$1              {/* Hover accent bar */}\n              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-400 to-amber-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20"></div>\n`
);

// Fix the arrow circle for Spring Brakes
content = content.replace(
  /(Spring Brakes[\s\S]*?)group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">\s*<ArrowRight className="w-5 h-5 text-navy-900" \/>/,
  `$1group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/20 transform group-hover:scale-110">\n                    <ArrowRight className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" />`
);

// ===== SERVICE BRAKES (change to navy) =====
content = content.replace(
  /{\/\* Service Brakes \*\/}\s*<Link href="\/service-chambers" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-\[0_20px_40px_-10px_rgba\(245,158,11,0\.3\)\] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">/,
  `{/* Service Brakes — Navy (Precision Engineering) */}
            <Link href="/service-chambers" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.25)] transition-all duration-500 border border-slate-100 hover:border-navy-300 transform hover:-translate-y-1">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-navy-400 to-navy-700 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20"></div>`
);
// Service Brakes title hover
content = content.replace(
  /group-hover:text-amber-600 transition-colors">Service Brake Chambers \(Drum\)/,
  `group-hover:text-navy-600 transition-colors">Service Brake Chambers (Drum)`
);
// Service Brakes badge
content = content.replace(
  /text-amber-600 font-bold text-\[11px\] tracking-widest uppercase bg-amber-50 px-2\.5 py-1 inline-block rounded-md mt-1 border border-amber-100">Steer & Drive Axles/,
  `text-navy-600 font-bold text-[11px] tracking-widest uppercase bg-navy-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-navy-100">Steer & Drive Axles`
);
// Service Brakes arrow circle
content = content.replace(
  /(Service Brake[\s\S]*?)group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">\s*<ArrowRight className="w-5 h-5 text-navy-900" \/>/,
  `$1group-hover:from-navy-700 group-hover:to-navy-900 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-navy-500/20 transform group-hover:scale-110">\n                    <ArrowRight className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" />`
);

// ===== AIR DISC BRAKES (change to red) =====
content = content.replace(
  /{\/\* Air Disc Brakes \*\/}\s*<Link href="\/contact" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-\[0_20px_40px_-10px_rgba\(245,158,11,0\.3\)\] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">/,
  `{/* Air Disc Brakes — Red (Stopping Power) */}
            <Link href="/contact" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.25)] transition-all duration-500 border border-slate-100 hover:border-red-300 transform hover:-translate-y-1">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-400 to-red-700 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20"></div>`
);
// ADB title hover
content = content.replace(
  /group-hover:text-amber-600 transition-colors">Air Disc Brake \(ADB\) Chambers/,
  `group-hover:text-red-600 transition-colors">Air Disc Brake (ADB) Chambers`
);
// ADB badge
content = content.replace(
  /text-amber-600 font-bold text-\[11px\] tracking-widest uppercase bg-amber-50 px-2\.5 py-1 inline-block rounded-md mt-1 border border-amber-100">High Output Actuators/,
  `text-red-600 font-bold text-[11px] tracking-widest uppercase bg-red-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-red-100">High Output Actuators`
);
// ADB arrow circle
content = content.replace(
  /(Air Disc Brake[\s\S]*?)group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">\s*<ArrowRight className="w-5 h-5 text-navy-900" \/>/,
  `$1group-hover:from-red-500 group-hover:to-red-700 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-red-500/20 transform group-hover:scale-110">\n                    <ArrowRight className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" />`
);

// ===== PIGGYBACKS (change to emerald) =====
content = content.replace(
  /{\/\* Piggybacks & Accessories \*\/}\s*<Link href="\/chamber-parts-kits" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-\[0_20px_40px_-10px_rgba\(245,158,11,0\.3\)\] transition-all duration-500 border border-slate-100 hover:border-amber-300 transform hover:-translate-y-1">/,
  `{/* Piggybacks & Accessories — Emerald (Quality Parts) */}
            <Link href="/chamber-parts-kits" className="block group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.25)] transition-all duration-500 border border-slate-100 hover:border-emerald-300 transform hover:-translate-y-1">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20"></div>`
);
// Piggybacks title hover
content = content.replace(
  /group-hover:text-amber-600 transition-colors">Piggybacks & Replacement Parts/,
  `group-hover:text-emerald-600 transition-colors">Piggybacks & Replacement Parts`
);
// Piggybacks badge
content = content.replace(
  /text-amber-600 font-bold text-\[11px\] tracking-widest uppercase bg-amber-50 px-2\.5 py-1 inline-block rounded-md mt-1 border border-amber-100">Kits & Accessories/,
  `text-emerald-600 font-bold text-[11px] tracking-widest uppercase bg-emerald-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-emerald-100">Kits & Accessories`
);
// Piggybacks arrow circle
content = content.replace(
  /(Piggybacks[\s\S]*?)group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:rotate-45">\s*<ArrowRight className="w-5 h-5 text-navy-900" \/>/,
  `$1group-hover:from-emerald-400 group-hover:to-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-500/20 transform group-hover:scale-110">\n                    <ArrowRight className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors" />`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Product cards hover effects differentiated successfully!');

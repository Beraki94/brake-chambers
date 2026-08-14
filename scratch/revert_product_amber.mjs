import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// ===== SERVICE BRAKES: Revert navy -> amber =====
// Comment
content = content.replace(
  '{/* Service Brakes — Navy (Precision Engineering) */}',
  '{/* Service Brakes */}'
);
// Shadow on Link
content = content.replace(
  'hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.25)] transition-all duration-500 border border-slate-100 hover:border-navy-300',
  'hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 border border-slate-100 hover:border-amber-300'
);
// Accent bar
content = content.replace(
  'from-navy-400 to-navy-700 scale-y-0',
  'from-amber-400 to-amber-600 scale-y-0'
);
// Title hover
content = content.replace(
  'group-hover:text-navy-600 transition-colors">Service Brake Chambers (Drum)',
  'group-hover:text-amber-600 transition-colors">Service Brake Chambers (Drum)'
);
// Badge
content = content.replace(
  'text-navy-600 font-bold text-[11px] tracking-widest uppercase bg-navy-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-navy-100">Steer & Drive Axles',
  'text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">Steer & Drive Axles'
);
// Arrow circle
content = content.replace(
  'group-hover:from-navy-700 group-hover:to-navy-900 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-navy-500/20',
  'group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/20'
);

// ===== AIR DISC BRAKES: Revert red -> amber =====
content = content.replace(
  '{/* Air Disc Brakes — Red (Stopping Power) */}',
  '{/* Air Disc Brakes */}'
);
content = content.replace(
  'hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.25)] transition-all duration-500 border border-slate-100 hover:border-red-300',
  'hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 border border-slate-100 hover:border-amber-300'
);
content = content.replace(
  'from-red-400 to-red-700 scale-y-0',
  'from-amber-400 to-amber-600 scale-y-0'
);
content = content.replace(
  'group-hover:text-red-600 transition-colors">Air Disc Brake (ADB) Chambers',
  'group-hover:text-amber-600 transition-colors">Air Disc Brake (ADB) Chambers'
);
content = content.replace(
  'text-red-600 font-bold text-[11px] tracking-widest uppercase bg-red-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-red-100">High Output Actuators',
  'text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">High Output Actuators'
);
content = content.replace(
  'group-hover:from-red-500 group-hover:to-red-700 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-red-500/20',
  'group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/20'
);

// ===== PIGGYBACKS: Revert emerald -> amber =====
content = content.replace(
  '{/* Piggybacks & Accessories — Emerald (Quality Parts) */}',
  '{/* Piggybacks & Accessories */}'
);
content = content.replace(
  'hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.25)] transition-all duration-500 border border-slate-100 hover:border-emerald-300',
  'hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 border border-slate-100 hover:border-amber-300'
);
content = content.replace(
  'from-emerald-400 to-emerald-600 scale-y-0',
  'from-amber-400 to-amber-600 scale-y-0'
);
content = content.replace(
  'group-hover:text-emerald-600 transition-colors">Piggybacks & Replacement Parts',
  'group-hover:text-amber-600 transition-colors">Piggybacks & Replacement Parts'
);
content = content.replace(
  'text-emerald-600 font-bold text-[11px] tracking-widest uppercase bg-emerald-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-emerald-100">Kits & Accessories',
  'text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">Kits & Accessories'
);
content = content.replace(
  'group-hover:from-emerald-400 group-hover:to-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-500/20',
  'group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/20'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('All product cards reverted to unified amber with animated accent bars!');

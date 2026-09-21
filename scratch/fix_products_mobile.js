const fs = require('fs');

let content = fs.readFileSync('src/features/products/components/ProductsClient.tsx', 'utf8');

// 1. Fix H2 size on category cards (Line 184)
content = content.replace(
  /className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight/g,
  'className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight'
);

// 2. Fix the Cross-Reference Button (Line 410)
content = content.replace(
  /className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3\.5 md:py-4 rounded-xl text-\[13px\] uppercase tracking-widest transition-all shadow-md transform hover:-translate-y-0\.5 whitespace-nowrap border border-navy-700"/g,
  'className="flex w-full sm:w-auto items-center justify-center text-center bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 md:py-4 rounded-xl text-[12px] sm:text-[13px] uppercase tracking-widest transition-all shadow-md transform hover:-translate-y-0.5 whitespace-normal sm:whitespace-nowrap border border-navy-700"'
);

fs.writeFileSync('src/features/products/components/ProductsClient.tsx', content);
console.log('Mobile responsiveness applied to ProductsClient.tsx');

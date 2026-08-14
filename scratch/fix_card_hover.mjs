import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove the heavy amber shadow and use slate border on hover for all 4 product cards
// Target: hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] ... hover:border-amber-300
content = content.replace(
  /hover:shadow-\[0_20px_40px_-10px_rgba\(245,158,11,0\.3\)\] transition-all duration-500 border border-slate-100 hover:border-amber-300/g,
  'hover:shadow-lg transition-all duration-500 border border-slate-100 hover:border-slate-300'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Product cards: removed heavy shadow, changed hover border to slate.');

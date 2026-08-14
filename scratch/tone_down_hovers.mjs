import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Product card titles: Remove the sharp amber hover on h3 titles
// "group-hover:text-amber-600 transition-colors">Combination Spring Brakes"
// Change to just a subtle darkening instead of color change
content = content.replace(
  /group-hover:text-amber-600 transition-colors">(Combination Spring Brakes \(Drum\))/,
  'group-hover:text-navy-700 transition-colors">$1'
);
content = content.replace(
  /group-hover:text-amber-600 transition-colors">(Service Brake Chambers \(Drum\))/,
  'group-hover:text-navy-700 transition-colors">$1'
);
content = content.replace(
  /group-hover:text-amber-600 transition-colors">(Air Disc Brake \(ADB\) Chambers)/,
  'group-hover:text-navy-700 transition-colors">$1'
);
content = content.replace(
  /group-hover:text-amber-600 transition-colors">(Piggybacks & Replacement Parts)/,
  'group-hover:text-navy-700 transition-colors">$1'
);

// 2. Product card arrow circles: Tone down the flashy amber fill + glow
// Replace the big amber fill with a subtle navy darkening
content = content.replace(
  /group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500\/20 transform group-hover:scale-110/g,
  'group-hover:from-navy-100 group-hover:to-navy-200 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:translate-x-1'
);
// Arrow icon: keep navy instead of flashing white
content = content.replace(
  /text-navy-900 group-hover:text-white transition-colors" \/>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<div className="w-full sm:w-48/g,
  'text-navy-900 group-hover:text-navy-700 transition-colors" />\n                  </div>\n                </div>\n                <div className="w-full sm:w-48'
);

// 3. News article titles: Remove sharp amber hover 
content = content.replace(
  /group-hover:text-amber-600 transition-colors leading-tight">(Launch of the UltraLife\+ VCT Series)/,
  'group-hover:text-navy-700 transition-colors leading-tight">$1'
);
content = content.replace(
  /group-hover:text-amber-600 transition-colors leading-tight">(Expanded EMEA Distribution Network)/,
  'group-hover:text-navy-700 transition-colors leading-tight">$1'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Toned down all sharp hover color effects!');

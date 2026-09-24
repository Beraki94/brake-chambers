const fs = require('fs');

const targetFile = 'src/features/technical-resources/components/TechnicalResourcesClient.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

// 1. Update section background
content = content.replace(
  '<section className="py-16 md:py-24 relative bg-slate-50 border-t border-slate-200">',
  '<section className="py-16 md:py-24 relative bg-slate-900 border-t border-slate-800">'
);

// 2. Add theme="dark" to SectionHeader
content = content.replace(
  'plainText={true}',
  'plainText={true}\n                    theme="dark"'
);

// 3. Update Category Card container
content = content.replace(
  'className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 lg:p-10 relative overflow-hidden group/section"',
  'className="bg-slate-800/80 rounded-2xl shadow-xl shadow-black/20 border border-slate-700 p-6 md:p-8 lg:p-10 relative overflow-hidden group/section"'
);

// 4. Update Category Title and Desc
content = content.replace(
  /className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-900/g,
  'className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white'
);
content = content.replace(
  /className="text-slate-600 font-light text-base md:text-lg leading-relaxed"/g,
  'className="text-slate-300 font-light text-base md:text-lg leading-relaxed"'
);

// 5. Update Link Cards
content = content.replace(
  /className=\{`flex items-start gap-4 p-5 md:p-6 bg-slate-50\/80 rounded-xl border border-slate-100 transition-all duration-300 group hover:shadow-lg hover:bg-white hover:-translate-y-0\.5 cursor-pointer/g,
  'className={`flex items-start gap-4 p-5 md:p-6 bg-slate-900/50 rounded-xl border border-slate-700 transition-all duration-300 group hover:shadow-lg hover:bg-slate-700 hover:-translate-y-0.5 cursor-pointer'
);

// 6. Update Link Card Text
content = content.replace(
  /className="font-bold text-navy-900 text-sm md:text-\[15px\] group-hover:text-navy-700 transition-colors block mb-1"/g,
  'className="font-bold text-white text-sm md:text-[15px] group-hover:text-white transition-colors block mb-1"'
);
content = content.replace(
  /className="text-slate-500 text-xs md:text-sm leading-relaxed block"/g,
  'className="text-slate-400 text-xs md:text-sm leading-relaxed block"'
);

fs.writeFileSync(targetFile, content);
console.log('Updated backgrounds and text colors to dark theme.');

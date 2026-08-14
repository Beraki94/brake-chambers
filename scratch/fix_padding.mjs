import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Reduce padding on the white container around the contact box
content = content.replace(
  'bg-white rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 p-6 md:p-14 overflow-hidden relative',
  'bg-white rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden relative'
);

// Reduce gap between text side and contact box side
content = content.replace(
  'flex flex-col lg:flex-row gap-10 lg:gap-16 items-center',
  'flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'
);

// Optionally, slightly reduce the padding inside the navy box itself if needed, but it looked okay. Let's keep it to the outer white container first.

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Padding adjusted successfully.');

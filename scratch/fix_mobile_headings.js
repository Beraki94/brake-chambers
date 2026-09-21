const fs = require('fs');

// 1. Update SectionHeader.tsx
let sectionHeaderContent = fs.readFileSync('src/components/ui/SectionHeader.tsx', 'utf8');
sectionHeaderContent = sectionHeaderContent.replace(
  /className=\{`text-3xl md:text-4xl lg:text-5xl/g,
  'className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
);
sectionHeaderContent = sectionHeaderContent.replace(
  /className=\{`text-3xl sm:text-4xl md:text-5xl lg:text-6xl/g,
  'className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl' // Already good
);
fs.writeFileSync('src/components/ui/SectionHeader.tsx', sectionHeaderContent);

// 2. Update HomeClient.tsx
let homeContent = fs.readFileSync('src/features/home/components/HomeClient.tsx', 'utf8');
// Fix H1 Hero
homeContent = homeContent.replace(
  /className="text-\[32px\] leading-tight min-\[400px\]:text-4xl md:text-5xl lg:text-7xl/g,
  'className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
);
// Fix all H3s from text-2xl to text-xl sm:text-2xl
homeContent = homeContent.replace(
  /className="text-2xl font-extrabold/g,
  'className="text-xl sm:text-2xl font-extrabold'
);

fs.writeFileSync('src/features/home/components/HomeClient.tsx', homeContent);
console.log('Mobile headings updated successfully.');

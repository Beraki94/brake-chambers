const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/components/page-clients/HomeClient.tsx',
  'src/components/page-clients/ProductsClient.tsx',
  'src/components/page-clients/ManufacturingClient.tsx',
  'src/components/page-clients/OEMCrossReferenceClient.tsx',
  'src/components/page-clients/TechnicalResourcesClient.tsx'
];

targetFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  // Add overflow-x-hidden to the root div if it has min-h-screen
  content = content.replace(/className="((?:bg-[^"]+ )?min-h-screen[^"]*)"/g, (match, classes) => {
    if (classes.includes('overflow-x-hidden')) return match;
    return `className="${classes} overflow-x-hidden"`;
  });
  
  content = content.replace(/className="(min-h-screen[^"]*)"/g, (match, classes) => {
    if (classes.includes('overflow-x-hidden')) return match;
    return `className="${classes} overflow-x-hidden"`;
  });

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Added overflow-x-hidden to: ${relPath}`);
  }
});

const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/components/layout/Navbar.tsx',
  'src/components/page-clients/HomeClient.tsx',
  'src/components/page-clients/ProductsClient.tsx',
  'src/components/page-clients/ManufacturingClient.tsx',
  'src/components/page-clients/OEMCrossReferenceClient.tsx',
  'src/components/page-clients/TechnicalResourcesClient.tsx',
  'src/components/page-clients/ApplicationsClient.tsx'
];

targetFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  // Standardize container padding:
  // "container mx-auto px-4 lg:px-8" -> "container mx-auto px-4 sm:px-6 lg:px-8"
  content = content.replace(/container mx-auto px-4 lg:px-8/g, 'container mx-auto px-4 sm:px-6 lg:px-8');
  
  // Standardize vertical padding (reduce slightly on mobile):
  // py-20 -> py-16 md:py-20
  // py-16 -> py-12 md:py-16
  // py-24 -> py-16 md:py-24
  content = content.replace(/\bpy-24\b/g, 'py-16 md:py-24');
  content = content.replace(/\bpy-20\b/g, 'py-16 md:py-20');
  
  // Fix typography scaling for H1s if they use fixed large sizes:
  // text-5xl md:text-6xl -> text-4xl sm:text-5xl md:text-6xl
  content = content.replace(/text-5xl md:text-6xl lg:text-7xl/g, 'text-4xl sm:text-5xl lg:text-7xl');

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated spacing in: ${relPath}`);
  }
});

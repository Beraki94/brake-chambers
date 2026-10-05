const fs = require('fs');

const filesToFix = [
  'src/app/[slug]/page.tsx',
  'src/app/spring-brake-chambers/[slug]/page.tsx',
  'src/app/service-brake-chambers/[slug]/page.tsx',
  'src/app/air-disc-brake-actuators/[slug]/page.tsx',
  'src/app/oem-cross-reference/[brandSlug]/page.tsx',
  'src/app/oem-cross-reference/[brandSlug]/[partNumber]/page.tsx'
];

filesToFix.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('export async function generateMetadata')) {
    content = content.replace(/(export async function generateMetadata\s*\([^)]*\)\s*(?::\s*Promise<Metadata>\s*)?{(?:\s*))(?!const BRAKE_CHAMBERS = await getProducts\(\);)/, '$1const BRAKE_CHAMBERS = await getProducts();\n  ');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});

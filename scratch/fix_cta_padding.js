const fs = require('fs');

const filesToFix = [
  'src/features/products/components/ProductsClient.tsx',
  'src/features/oem/components/OEMCrossReferenceClient.tsx',
  'src/features/applications/components/ApplicationsClient.tsx',
  'src/features/manufacturing/components/ManufacturingClient.tsx',
  'src/features/company/components/CompanyClient.tsx',
  'src/features/contact/components/ContactClient.tsx',
  'src/features/warranty/components/WarrantyClient.tsx',
  'src/features/technical-resources/components/TechnicalResourcesClient.tsx'
];

filesToFix.forEach(relPath => {
  const file = 'c:/Users/HP/Desktop/brake chambers/' + relPath;
  if (!fs.existsSync(file)) {
      console.log('Not found: ' + file);
      return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Change py-16 md:py-24 to pt-16 md:pt-24 on the section wrapping the CTA
  // Change py-12 md:py-20 to pt-12 md:pt-20 (ProductsClient)
  content = content.replace(/className="py-16 md:py-24 (bg-\[#F1EFE8\]|bg-white)/g, 'className="pt-16 md:pt-24 $1');
  content = content.replace(/className="py-12 md:py-20 (bg-\[#F1EFE8\]|bg-white)/g, 'className="pt-12 md:pt-20 $1');

  if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Removed bottom padding in ' + relPath);
  }
});

const fs = require('fs');

const filesToFix = [
  'src/features/products/components/ProductsClient.tsx',
  'src/features/oem/components/OEMCrossReferenceClient.tsx',
  'src/features/applications/components/ApplicationsClient.tsx',
  'src/features/company/components/CompanyClient.tsx',
  'src/features/warranty/components/WarrantyClient.tsx',
  'src/features/technical-resources/components/TechnicalResourcesClient.tsx'
];

filesToFix.forEach(relPath => {
  const file = 'c:/Users/HP/Desktop/brake chambers/' + relPath;
  if (!fs.existsSync(file)) {
      return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/className="pt-16 md:pt-24 (bg-\[#F1EFE8\]|bg-white)/g, 'className="py-16 md:py-24 $1');
  content = content.replace(/className="pt-12 md:pt-20 (bg-\[#F1EFE8\]|bg-white)/g, 'className="py-12 md:py-20 $1');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Restored padding in ' + relPath);
});

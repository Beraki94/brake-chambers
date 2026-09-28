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

  // Since we ran git restore, the files are in their original state.
  // The CTA wrapper looks like: container mx-auto px-4 sm:px-6 lg:px-8
  // followed by a bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950
  
  content = content.replace(/(container mx-auto px-)4(\s+sm:px-6[^\>]*\>[\s\n]*\<div[^\>]*bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950[^\>]*\>)/g, (match, p1, p2) => {
      let innerDiv = p2;
      
      // Fix rounded corners on the inner div
      // Change `rounded-[2rem]` or `rounded-[2.5rem]` or `rounded-2xl` to `rounded-none sm:rounded-[2rem]` (or 2.5rem depending on original)
      // Since it's a direct replacement, we can just find `rounded-[something]` that isn't `sm:rounded`
      innerDiv = innerDiv.replace(/\brounded-\[[^\]]+\]/g, (m) => {
          if (m.startsWith('rounded-none')) return m;
          return 'rounded-none sm:' + m;
      });
      innerDiv = innerDiv.replace(/\brounded-2xl\b/g, 'rounded-none sm:rounded-2xl');
      
      // Fix borders
      innerDiv = innerDiv.replace(/\bborder border-navy-700/g, 'border-y sm:border border-navy-700');
      
      return p1 + "0" + innerDiv;
  });

  if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Cleaned ' + relPath);
  } else {
      console.log('No matching CTA found in ' + relPath);
  }
});

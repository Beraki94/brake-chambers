const fs = require('fs');

const filesToFix = [
  'src/features/products/components/ProductsClient.tsx',
  'src/features/oem/components/OEMCrossReferenceClient.tsx',
  'src/features/applications/components/ApplicationsClient.tsx',
  'src/features/manufacturing/components/ManufacturingClient.tsx',
  'src/features/company/components/CompanyClient.tsx',
  'src/features/contact/components/ContactClient.tsx'
];

filesToFix.forEach(relPath => {
  const file = 'c:/Users/HP/Desktop/brake chambers/' + relPath;
  if (!fs.existsSync(file)) {
      console.log('Not found: ' + file);
      return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Fix the container padding: container mx-auto px-... sm:px-... etc
  // We want to replace any px-4 or px-0 sm:px-0 sm:px-6 with exactly px-0 sm:px-6
  content = content.replace(/container mx-auto px-[\w\-\s:]+ lg:px-8/g, 'container mx-auto px-0 sm:px-6 lg:px-8');

  // 2. Fix the inner CTA div
  // The CTA starts with bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950
  content = content.replace(/(bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950[^>]*")/g, (match) => {
      let innerDiv = match;
      
      // Clean up rounded classes
      // Remove all rounded classes first
      innerDiv = innerDiv.replace(/\s*rounded-[^\s"]+/g, '');
      // Add the correct ones back right after the gradient classes
      innerDiv = innerDiv.replace('to-navy-950', 'to-navy-950 rounded-none sm:rounded-[2rem] md:rounded-[2.5rem]');
      
      // Clean up border classes
      innerDiv = innerDiv.replace(/\s*border-y/g, '');
      innerDiv = innerDiv.replace(/\s*sm:border\b/g, '');
      innerDiv = innerDiv.replace(/\s*border\b/g, '');
      // Add them back before border-navy-700
      innerDiv = innerDiv.replace('border-navy-700', 'border-y sm:border border-navy-700');
      
      return innerDiv;
  });

  if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Cleaned ' + relPath);
  } else {
      console.log('No changes needed for ' + relPath);
  }
});

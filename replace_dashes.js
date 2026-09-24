const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/features/contact/components/ContactClient.tsx',
  'src/app/contact/page.tsx',
  'src/features/warranty/components/WarrantyClient.tsx',
  'src/app/warranty/page.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // Replace em-dash (—) and en-dash (–) with standard hyphen (-)
    let newContent = content.replace(/—/g, '-').replace(/–/g, '-');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No dashes to update in ${file}`);
    }
  } else {
    console.error(`File not found: ${file}`);
  }
});

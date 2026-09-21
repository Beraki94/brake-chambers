const fs = require('fs');

const updates = [
  { file: 'src/features/products/components/ProductsClient.tsx', icon: 'Package' },
  { file: 'src/features/applications/components/ApplicationsClient.tsx', icon: 'Truck' },
  { file: 'src/app/service-brake-chambers/page.tsx', icon: 'ShieldCheck' },
  { file: 'src/app/spring-brake-chambers/page.tsx', icon: 'Settings' },
  { file: 'src/app/air-disc-brake-actuators/page.tsx', icon: 'Disc' },
  { file: 'src/app/parts-and-kits/page.tsx', icon: 'Wrench' },
  { file: 'src/features/manufacturing/components/ManufacturingClient.tsx', icon: 'Factory' },
  { file: 'src/features/oem/components/OEMCrossReferenceClient.tsx', icon: 'ArrowRightLeft' },
  { file: 'src/features/technical-resources/components/TechnicalResourcesClient.tsx', icon: 'BookOpen' },
  { file: 'src/app/shipping/page.tsx', icon: 'Ship' },
  { file: 'src/app/quote/page.tsx', icon: 'Calculator' },
  { file: 'src/features/distributors/components/DistributorsClient.tsx', icon: 'Globe' },
  { file: 'src/features/blog/components/BlogClient.tsx', icon: 'Newspaper' },
  { file: 'src/features/contact/components/ContactClient.tsx', icon: 'PhoneCall' },
  { file: 'src/features/company/components/CompanyClient.tsx', icon: 'Building2' }
];

for (const update of updates) {
  if (fs.existsSync(update.file)) {
    let content = fs.readFileSync(update.file, 'utf8');

    // 1. Add import
    // Check if lucide-react is already imported
    if (content.includes('lucide-react')) {
      // It has an import. Check if the icon is already imported
      if (!content.includes(update.icon)) {
        // We need to inject the icon into the import { ... } from 'lucide-react';
        content = content.replace(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];?/, (match, group1) => {
          return `import { ${update.icon}, ${group1.trim()} } from 'lucide-react';`;
        });
      }
    } else {
      // Add new import after the last import
      const importLine = `import { ${update.icon} } from 'lucide-react';\n`;
      // Find the last import statement
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const nextNewline = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, nextNewline + 1) + importLine + content.slice(nextNewline + 1);
      } else {
        content = importLine + content;
      }
    }

    // 2. Add badgeIcon prop
    if (!content.includes('badgeIcon=')) {
      // We look for badge="..." and add badgeIcon={Icon} right after it
      content = content.replace(/(badge="[^"]*")/, `$1\n        badgeIcon={${update.icon}}`);
    }

    fs.writeFileSync(update.file, content, 'utf8');
    console.log('Fixed ' + update.file);
  }
}

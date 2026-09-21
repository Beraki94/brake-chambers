const fs = require('fs');
const files = [
  'src/features/products/components/ProductsClient.tsx',
  'src/features/applications/components/ApplicationsClient.tsx',
  'src/app/service-brake-chambers/page.tsx',
  'src/app/spring-brake-chambers/page.tsx',
  'src/app/air-disc-brake-actuators/page.tsx',
  'src/app/parts-and-kits/page.tsx',
  'src/features/manufacturing/components/ManufacturingClient.tsx',
  'src/features/oem/components/OEMCrossReferenceClient.tsx',
  'src/features/technical-resources/components/TechnicalResourcesClient.tsx',
  'src/app/shipping/page.tsx',
  'src/app/quote/page.tsx',
  'src/features/distributors/components/DistributorsClient.tsx',
  'src/features/blog/components/BlogClient.tsx',
  'src/features/contact/components/ContactClient.tsx',
  'src/features/company/components/CompanyClient.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  const regex = /(<(?:PageHeader|ProductListingLayout))([\s\S]*?)(\/>)/;
  const match = content.match(regex);
  
  if (match) {
    let props = match[2];
    
    let lastBadge = '';
    let lastTitle = '';
    let lastDesc = '';
    
    const badgeMatches = [...props.matchAll(/\s+badge=({[\s\S]*?}|["'][\s\S]*?["'])/g)];
    const titleMatches = [...props.matchAll(/\s+title=({[\s\S]*?}|["'][\s\S]*?["'])/g)];
    const descMatches = [...props.matchAll(/\s+description=({[\s\S]*?}|["'][\s\S]*?["'])/g)];
    
    if (badgeMatches.length > 0) lastBadge = badgeMatches[badgeMatches.length - 1][0];
    if (titleMatches.length > 0) lastTitle = titleMatches[titleMatches.length - 1][0];
    if (descMatches.length > 0) lastDesc = descMatches[descMatches.length - 1][0];
    
    props = props.replace(/\s+badge=({[\s\S]*?}|["'][\s\S]*?["'])/g, '');
    props = props.replace(/\s+title=({[\s\S]*?}|["'][\s\S]*?["'])/g, '');
    props = props.replace(/\s+description=({[\s\S]*?}|["'][\s\S]*?["'])/g, '');
    
    // some props might be empty if they didn't exist, though we appended them all in the last script
    const propsToAdd = [lastBadge, lastTitle, lastDesc].filter(Boolean).map(p => p.trim());
    
    const newProps = '\n      ' + propsToAdd.join('\n      ') + props;
    
    content = content.replace(regex, `$1${newProps}$3`);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed ' + file);
  }
}

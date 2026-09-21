const fs = require('fs');

const fixes = [
  {
    file: 'src/features/products/components/ProductsClient.tsx',
    desc: `Browse BRC's full range of OEM-grade brake chambers and replacement parts for trucks, trailers, and commercial fleets. Spring brakes, service chambers, air disc actuators, piggyback kits, and hardware — all with technical specs and direct OEM cross-reference.`
  },
  {
    file: 'src/features/technical-resources/components/TechnicalResourcesClient.tsx',
    desc: `Access BRC's technical library — installation procedures, sizing specifications, caging guides, torque specs, and chamber selection tools. Everything engineers, technicians, and fleet managers need to spec and install BRC brake chambers correctly.`
  },
  {
    file: 'src/features/distributors/components/DistributorsClient.tsx',
    desc: `Join BRC's global network of authorized brake chamber distributors. Access wholesale pricing, private-label programs, marketing support, and priority factory logistics. Apply to become a distributor or log in to the partner portal.`
  }
];

for (const fix of fixes) {
  let content = fs.readFileSync(fix.file, 'utf8');
  
  // Replace the broken description
  // The broken description is `description="... BRC'` or something similar.
  // We can just match `description="[^"]*"` or `description=".*?BRC'`
  // Actually, since it's broken, it might be `description="... BRC'\n`
  // Let's use regex to find `description="` followed by anything up to the next prop or tag.
  
  // A safer way is to just replace the broken description line.
  // In `ProductsClient.tsx`: `description="Browse BRC'`
  // In `TechnicalResourcesClient.tsx`: `description="Access BRC'`
  // In `DistributorsClient.tsx`: `description="Join BRC'`
  
  content = content.replace(/description="Browse BRC'[\s\S]*?(?=\s+breadcrumbs|\s+align|\s+theme|\s+accentColor|\s+\/>)/, \`description="\${fix.desc}"\`);
  content = content.replace(/description="Access BRC'[\s\S]*?(?=\s+breadcrumbs|\s+align|\s+theme|\s+accentColor|\s+imageSrc|\s+\/>)/, \`description="\${fix.desc}"\`);
  content = content.replace(/description="Join BRC'[\s\S]*?(?=\s+breadcrumbs|\s+align|\s+theme|\s+accentColor|\s+\/>)/, \`description="\${fix.desc}"\`);
  
  fs.writeFileSync(fix.file, content, 'utf8');
  console.log('Fixed ' + fix.file);
}

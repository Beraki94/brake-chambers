const fs = require('fs');

let content = fs.readFileSync('src/features/home/components/HomeClient.tsx', 'utf8');

// Replace dashes in titles with colons
content = content.replace(
  'title="Commercial Brake Chamber Types — Spring, Service, ADB & Parts"',
  'title="Commercial Brake Chamber Types: Spring, Service, ADB & Parts"'
);
content = content.replace(
  'title="Cross-Reference, Training & Warranty — All Online"',
  'title="Cross-Reference, Training & Warranty: All Online"'
);
content = content.replace(
  'BRC operates a vertically integrated brake chamber factory in Zhejiang, China — operating to IATF 16949 standards.',
  'BRC operates a vertically integrated brake chamber factory in Zhejiang, China, operating to IATF 16949 standards.'
);
content = content.replace(
  'Swapping to BRC doesn\\'t mean swapping your specs — it means sourcing the same performance at factory-direct pricing.',
  'Swapping to BRC doesn\\'t mean swapping your specs. It means sourcing the same performance at factory-direct pricing.'
);
content = content.replace(
  'pricing — so you know exactly',
  'pricing, so you know exactly'
);
content = content.replace(
  'approve. Zero technical risk before committing to volume.',
  'approve. You have zero technical risk before committing to volume.' // Fixed a fragment
);

fs.writeFileSync('src/features/home/components/HomeClient.tsx', content);
console.log('Punctuation replaced in HomeClient.tsx');

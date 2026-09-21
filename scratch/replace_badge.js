const fs = require('fs');

let content = fs.readFileSync('src/features/home/components/HomeClient.tsx', 'utf8');

// Replace all navy accentColors with amber to fix grey badges
content = content.replace(/accentColor="navy"/g, 'accentColor="amber"');

fs.writeFileSync('src/features/home/components/HomeClient.tsx', content);
console.log('Badge colors fixed in HomeClient.tsx');

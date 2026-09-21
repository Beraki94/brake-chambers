const fs = require('fs');
const content = fs.readFileSync('src/features/products/components/ProductsClient.tsx', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<Link') || line.includes('<h3') || line.includes('<h2')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
}

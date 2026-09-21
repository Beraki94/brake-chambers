const fs = require('fs');

const content = fs.readFileSync('src/features/home/components/HomeClient.tsx', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<h1') || line.includes('<h2') || line.includes('<h3') || line.includes('<h4') || line.includes('<h5') || line.includes('<h6') || line.includes('<SectionHeader')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
}

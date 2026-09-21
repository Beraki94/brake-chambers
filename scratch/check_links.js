const fs = require('fs');
const content = fs.readFileSync('src/features/home/components/HomeClient.tsx', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<Link')) {
    // print the next 2 lines as well to see the button text
    console.log(`Line ${i + 1}: ${line.trim()}`);
    if (lines[i+1]) console.log(`       ${lines[i+1].trim()}`);
    if (lines[i+2]) console.log(`       ${lines[i+2].trim()}`);
  }
}

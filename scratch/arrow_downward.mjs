import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the rightward translation with a downward translation
content = content.replace(/group-hover:translate-x-1/g, 'group-hover:translate-y-1');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Arrow button translation changed to downward!');

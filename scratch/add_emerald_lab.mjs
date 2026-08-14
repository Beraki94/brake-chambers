import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/TestingLaboratoryClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace red with emerald
content = content.replace(/red-500/g, 'emerald-400');
content = content.replace(/red-600/g, 'emerald-500');
content = content.replace(/red-700/g, 'emerald-600');
content = content.replace(/red/g, 'emerald');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('TestingLaboratoryClient.tsx emerald added.');

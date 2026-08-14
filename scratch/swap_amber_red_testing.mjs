import fs from 'fs';
import path from 'path';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/TestingLaboratoryClient.tsx';

let content = fs.readFileSync(filePath, 'utf-8');

const regex1 = /(text|bg|border|from|to|via|shadow|ring|fill|stroke)-amber/g;
const regex2 = /accentColor=(['"])amber\1/g;
const regex3 = /accent:\s*(['"])amber\1/g;

content = content.replace(regex1, '$1-red');
content = content.replace(regex2, 'accentColor=$1red$1');
content = content.replace(regex3, 'accent: $1red$1');
content = content.replace(/amber-500/g, 'red-600'); 
content = content.replace(/amber-600/g, 'red-700'); 
content = content.replace(/amber-400/g, 'red-500'); 

fs.writeFileSync(filePath, content, 'utf-8');
console.log('TestingLaboratoryClient.tsx updated.');

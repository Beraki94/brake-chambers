import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const colorMap = {
    blue: 'navy',
    emerald: 'amber',
    purple: 'slate'
};

const regex1 = /(text|bg|border|from|to|via|shadow|ring|fill|stroke)-(blue|emerald|purple)/g;
const regex2 = /accentColor=(['"])(blue|emerald|purple)\1/g;
const regex3 = /accent:\s*(['"])(blue|emerald|purple)\1/g;

let totalChanges = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    let original = content;
    
    content = content.replace(regex1, (match, p1, p2) => {
        return `${p1}-${colorMap[p2]}`;
    });
    
    content = content.replace(regex2, (match, p1, p2) => {
        return `accentColor=${p1}${colorMap[p2]}${p1}`;
    });
    
    content = content.replace(regex3, (match, p1, p2) => {
        return `accent: ${p1}${colorMap[p2]}${p1}`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${file}`);
        totalChanges++;
    }
}

console.log(`Updated ${totalChanges} files.`);

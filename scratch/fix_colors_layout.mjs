import fs from 'fs';
import path from 'path';

const dirs = [
    'c:/Users/HP/Desktop/brake chambers/src/components/layout',
    'c:/Users/HP/Desktop/brake chambers/src/components/ui'
];

const colorMap = {
    blue: 'navy',
    emerald: 'amber',
    purple: 'slate'
};

const regex1 = /(text|bg|border|from|to|via|shadow|ring|fill|stroke)-(blue|emerald|purple)/g;

let totalChanges = 0;

for (const dir of dirs) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
    for (const file of files) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        
        let original = content;
        
        content = content.replace(regex1, (match, p1, p2) => {
            return `${p1}-${colorMap[p2]}`;
        });
        
        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${file}`);
            totalChanges++;
        }
    }
}

console.log(`Updated ${totalChanges} files in layout/ui.`);

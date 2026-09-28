const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('c:/Users/HP/Desktop/brake chambers/src');
let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // We have a problem where my previous regex changed things like `md:rounded-[2.5rem]` 
    // to `md:rounded-none sm:rounded-[2.5rem]`.
    // So we need to find `md:rounded-none sm:rounded-[something]` and replace it with `md:rounded-[something]`.
    
    // Replace md:rounded-none sm:rounded-[something] -> md:rounded-[something]
    content = content.replace(/md:rounded-none\s+sm:rounded-(\[[^\]]+\])/g, 'md:rounded-$1');
    content = content.replace(/md:rounded-none\s+sm:rounded-(2xl)/g, 'md:rounded-$1');

    // Just in case lg: got messed up too
    content = content.replace(/lg:rounded-none\s+sm:rounded-(\[[^\]]+\])/g, 'lg:rounded-$1');
    content = content.replace(/lg:rounded-none\s+sm:rounded-(2xl)/g, 'lg:rounded-$1');

    // Also fix any duplicate sm: classes
    content = content.replace(/sm:rounded-none\s+sm:rounded-(\[[^\]]+\])/g, 'sm:rounded-$1');
    
    // Fix `rounded-none sm:rounded-none sm:` -> `rounded-none sm:`
    content = content.replace(/rounded-none\s+sm:rounded-none\s+sm:/g, 'rounded-none sm:');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed corners in ' + file);
        count++;
    }
});
console.log('Fixed ' + count + ' files.');

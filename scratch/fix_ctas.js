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
let totalUpdated = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // We want to find containers that wrap the specific navy-900 gradient CTA
    // They usually look like: <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
    // followed by the CTA element.
    
    const parts = content.split('bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950');
    
    if (parts.length > 1) {
        // Find the container before it and change px-4 to px-0 if it's wrapping this CTA
        // We can do a simpler replace:
        // Replace all instances of `px-4 sm:px-6 lg:px-8` that are physically close to the CTA
        // Or just do a regex replace on the entire file that matches the container and the div
        
        content = content.replace(/(container mx-auto px-)4(\s+sm:px-6[^\>]*\>[\s\n]*\<div[^\>]*bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950[^\>]*\>)/g, (match, p1, p2) => {
            let innerDiv = p2;
            
            // Fix rounded corners
            if (!innerDiv.includes('rounded-none sm:rounded')) {
                innerDiv = innerDiv.replace(/rounded-\[[^\]]+\]/g, 'rounded-none sm:$&');
                innerDiv = innerDiv.replace(/rounded-2xl/g, 'rounded-none sm:rounded-2xl');
            }
            // If they have multiple rounded-none, clean it up
            innerDiv = innerDiv.replace(/rounded-none sm:rounded-none/g, 'rounded-none');
            
            // Fix border
            if (!innerDiv.includes('border-y sm:border')) {
                innerDiv = innerDiv.replace(/border border-navy-700/g, 'border-y sm:border border-navy-700');
            }
            
            return p1 + "0" + innerDiv;
        });
        
        // Also fix SubCategoryWholesaleCTA.tsx which has `<section className="bg-gradient...` without the container
        // actually SubCategoryWholesaleCTA is wrapped in a container where it's used? No, the section itself is the CTA.
        // Let's just fix `HomeClient` style ones first.
        
        if (content !== original) {
            fs.writeFileSync(file, content, 'utf8');
            console.log('Updated ' + file);
            totalUpdated++;
        }
    }
});

console.log('Total files updated: ' + totalUpdated);

const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const results = [];
const searchDirs = ['src/app', 'src/features'];

searchDirs.forEach(dir => {
  walkDir(dir, function(filePath) {
    if (filePath.endsWith('.tsx') && !filePath.includes('[slug]') && !filePath.includes('[appSlug]') && !filePath.includes('[brandSlug]') && !filePath.includes('[partNumber]') && !filePath.includes('[resourceSlug]')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const headerMatch = content.match(/<PageHeader([\s\S]*?)\/>/);
      if (headerMatch) {
        const propsStr = headerMatch[1];
        
        let badge = '';
        let title = '';
        let desc = '';
        
        const bM = propsStr.match(/badge=[\"'\`]?([^\"'\`]+)[\"'\`]?/);
        if(bM) badge = bM[1];
        else {
           const bM2 = propsStr.match(/badge=\{[\"'\`]([^\"'\`]+)[\"'\`]\}/);
           if(bM2) badge = bM2[1];
        }
        
        const tM = propsStr.match(/title=[\"']([^\"']+)[\"']/);
        if(tM) title = tM[1];
        else {
          const tM2 = propsStr.match(/title=\{([\s\S]*?)\}/);
          if(tM2) {
             title = tM2[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
          }
        }
        
        const dM = propsStr.match(/description=[\"']([^\"']+)[\"']/);
        if(dM) desc = dM[1];
        else {
          const dM2 = propsStr.match(/description=\{([\s\S]*?)\}/);
          if(dM2) desc = dM2[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        }
        
        results.push(`File: ${filePath}\nBadge: ${badge}\nTitle: ${title}\nDescription: ${desc}\n`);
      }
    }
  });
});

console.log(results.join('\n'));

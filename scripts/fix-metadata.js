const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk('src/app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('generateMetadata')) return;
  if (!content.includes('getProducts')) return;

  let modified = false;

  // Add await getProducts() to generateMetadata if missing
  if (content.includes('generateMetadata') && !content.includes('const BRAKE_CHAMBERS = await getProducts();') || (content.match(/const BRAKE_CHAMBERS = await getProducts\(\);/g) || []).length < (content.match(/export async function generate[^{]+{/g) || []).length) {
    
    // We need to specifically target generateMetadata
    if (content.match(/export async function generateMetadata\s*\([^)]*\)[^{]*{(?:\s*)/)) {
      const regex = /(export async function generateMetadata\s*\([^)]*\)[^{]*{(?:\s*))(?!const BRAKE_CHAMBERS = await getProducts\(\);)/;
      if (regex.test(content)) {
        content = content.replace(regex, '$1const BRAKE_CHAMBERS = await getProducts();\n  ');
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated generateMetadata in ${file}`);
  }
});

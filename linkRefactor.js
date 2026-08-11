const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content
        .replace(/\/service-brakes\/category\//g, '/service-chambers/')
        .replace(/\/accessories\/category\//g, '/chamber-parts-kits/')
        .replace(/\/spring-brakes\/category\//g, '/spring-brakes/')
        .replace(/\/service-brakes/g, '/service-chambers')
        .replace(/\/accessories/g, '/chamber-parts-kits')
        .replace(/service-brakes/g, 'service-chambers') // Also replace plain strings like baseCategory="service-brakes"
        .replace(/"accessories"/g, '"chamber-parts-kits"') // Specifically target exact string
        .replace(/'accessories'/g, "'chamber-parts-kits'"); // Specifically target exact string

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));

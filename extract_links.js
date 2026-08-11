const fs = require('fs');
const content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
const regex = /href=(["'])(.*?)\1/g;
const links = [];
let match;
while ((match = regex.exec(content)) !== null) {
  links.push(match[2]);
}
console.log([...new Set(links)]);

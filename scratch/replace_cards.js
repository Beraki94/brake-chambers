const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // This matches the div up to its specific closing tag sequence
  const regex = /<div className="hidden lg:flex flex-col items-center justify-center p-6 bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800 rounded-2xl text-center mt-6 shadow-xl shadow-navy-900\/10 relative overflow-hidden sticky top-\[30vh\]">[\s\S]*?<\/Link>\s*<\/div>/;
  
  if (regex.test(content) && content.includes('Bulk OEM Orders')) {
    console.log('Replacing in', filePath);
    let newContent = content.replace(regex, '<BulkOemCard />');
    
    if (!newContent.includes("import BulkOemCard from '@/components/ui/BulkOemCard'")) {
      newContent = newContent.replace(
        "import Link from 'next/link';",
        "import Link from 'next/link';\nimport BulkOemCard from '@/components/ui/BulkOemCard';"
      );
    }
    
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : 
      (dirPath.endsWith('.tsx') && callback(path.join(dirPath)));
  });
}

walkDir(path.join(__dirname, '../src/app'), replaceInFile);
walkDir(path.join(__dirname, '../src/features/products'), replaceInFile);

console.log('Done');

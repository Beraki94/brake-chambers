const fs = require('fs');
const path = require('path');

function findFiles(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const targetDir = path.join(__dirname, 'src', 'app');
const tsxFiles = findFiles(targetDir, /page\.tsx$/);

let updatedCount = 0;

for (const file of tsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<FacetedSidebar') && !content.includes('OEM CTA Banner')) {
    // Find the sidebar block
    const blockRegex = /<div className="w-full lg:w-64 flex-shrink-0">\s*<div className="sticky top-24">\s*<FacetedSidebar baseCategory="([^"]+)" \/>\s*<\/div>\s*<\/div>/;
    
    if (blockRegex.test(content)) {
      const newSidebar = `<div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4">
           <FacetedSidebar baseCategory="$1" />
           
          {/* OEM CTA Banner */}
          <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800 rounded-2xl text-center mt-6 shadow-xl shadow-navy-900/10 relative overflow-hidden sticky top-[30vh]">
             <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             
             <div className="bg-navy-800/80 p-2.5 rounded-full mb-3 border border-navy-700">
               <Truck size={20} className="text-amber-400" />
             </div>
             
             <h4 className="font-extrabold text-white text-sm mb-2 uppercase tracking-wide">Bulk OEM Orders</h4>
             <p className="text-xs mb-5 text-navy-200 leading-relaxed">
               Custom paint, private labeling, and ISO 9001 certified manufacturing for large fleets.
             </p>
             
             <Link href="/quote" className="w-full bg-amber-500 text-navy-900 text-xs font-extrabold px-4 py-2.5 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5">
               Get a Custom Quote
             </Link>
          </div>
        </div>`;
      
      const newContent = content.replace(blockRegex, newSidebar);
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated ${file}`);
      updatedCount++;
    }
  }
}

console.log(`Finished updating ${updatedCount} files.`);

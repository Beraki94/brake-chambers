const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/features/manufacturing/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Match `container` div with any inner classes
  const regex = /<div className="container [^"]*">\s*(?:{\/\*.*?\*\/}\s*)?<div className="bg-\[#F1EFE8\] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200[^"]*">([\s\S]*?)<\/div>\s*<\/div>/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, (match, innerContent) => {
      return `<section className="bg-[#F1EFE8] py-16 md:py-24 border-y border-slate-200 mt-12 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
${innerContent}        </div>
      </section>`;
    });
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
    totalFixed++;
  } else {
    // Maybe the comment is OUTSIDE the container div?
    const regex2 = /(?:{\/\*.*?\*\/}\s*)?<div className="container [^"]*">\s*<div className="bg-\[#F1EFE8\] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200[^"]*">([\s\S]*?)<\/div>\s*<\/div>/g;
    if (regex2.test(content)) {
      content = content.replace(regex2, (match, innerContent) => {
        return `<section className="bg-[#F1EFE8] py-16 md:py-24 border-y border-slate-200 mt-12 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
${innerContent}        </div>
      </section>`;
      });
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${file} (Regex 2)`);
      totalFixed++;
    }
  }
}

console.log(`Total fixed: ${totalFixed}`);

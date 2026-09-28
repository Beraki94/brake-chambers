const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/features/manufacturing/components');
const files = [
  'CustomOemClient.tsx',
  'HighVolumeOrdersClient.tsx',
  'PrivateLabelClient.tsx',
  'ProductionProcessClient.tsx',
  'TestingLaboratoryClient.tsx'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace opening tags
  const openRegex = /<div className="container mx-auto [^>]*">\s*(?:{\/\* Bottom CTA \*\/}\s*)?<div className="bg-\[#F1EFE8\] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200[^"]*">/g;
  const openRegex2 = /(?:{\/\* Bottom CTA \*\/}\s*)?<div className="container mx-auto [^>]*">\s*<div className="bg-\[#F1EFE8\] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-200[^"]*">/g;

  let replaced = false;

  if (openRegex.test(content)) {
    content = content.replace(openRegex, `{/* Bottom CTA */}
      <section className="bg-[#F1EFE8] py-16 md:py-24 border-y border-slate-200 mt-12 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">`);
    replaced = true;
  } else if (openRegex2.test(content)) {
    content = content.replace(openRegex2, `{/* Bottom CTA */}
      <section className="bg-[#F1EFE8] py-16 md:py-24 border-y border-slate-200 mt-12 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">`);
    replaced = true;
  }

  if (replaced) {
    // Replace closing tags at the very end (before </article> or </CompanyPageLayout>)
    // Find `</div>\n      </div>\n    </article>` or similar
    const closeRegex = /<\/div>\s*<\/div>\s*<\/(?:article|CompanyPageLayout)>/;
    if (closeRegex.test(content)) {
      content = content.replace(closeRegex, (match) => {
        return match.replace(/<\/div>(\s*)<\/div>/, '</div>$1</section>');
      });
    } else {
      console.log(`Failed to find close tags in ${file}`);
    }
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  } else {
    console.log(`No match in ${file}`);
  }
}

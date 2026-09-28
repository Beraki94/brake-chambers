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
  
  // Replace `</div>\n      </section>` with `</div>\n        </div>\n      </section>`
  // Or more robustly, find `<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">`
  // and see where `</section>` is.
  content = content.replace(/(\s*<\/div>)\s*<\/section>/g, '$1\n        </div>\n      </section>');
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
}

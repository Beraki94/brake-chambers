const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

walk('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Replace various forms of "IATF certified"
    content = content.replace(/IATF 16949-certified/g, 'operating to IATF 16949 standards');
    content = content.replace(/IATF 16949 certified/g, 'operating to IATF 16949 standards');
    content = content.replace(/IATF-certified/g, 'operating to IATF 16949 standards');
    content = content.replace(/IATF Certifications/g, 'IATF Compliance');

    // 2. Fix specific broken/awkward phrases
    content = content.replace(/audited, certified facility/g, 'audited facility operating to global standards');
    content = content.replace(/Certified to Global Standards/g, 'Operating to Global Standards');
    content = content.replace(/Quality Management Systems — Certified/g, 'Quality Management Systems — Compliant');
    content = content.replace(/Automotive Quality Management — Certified/g, 'Automotive Quality Management — Compliant');
    content = content.replace(/FMVSS 121 certified/g, 'FMVSS 121 compliant');
    
    // Fix the grammar mess in service-brake-chambers: "Our Manufactured to IATF 16949 standards manufacturing process"
    content = content.replace(/Our Manufactured to IATF 16949 standards manufacturing process/g, 'Our manufacturing process, operating to IATF 16949 standards,');

    // Fix the broken meta description in manufacturing/page.tsx
    // The broken line: description: 'Tour our 50,000 sqm brake chamber factory in Zhejiang, China. See how we cast, machine, assemble & stress-test every chamber to IATF 16949 standards. Export-ready.'s vertically integrated manufacturing process, custom OEM actuator solutions, private labeling, and high-volume wholesale distribution.',
    content = content.replace(/Export-ready\.'s vertically integrated manufacturing process, custom OEM actuator solutions, private labeling, and high-volume wholesale distribution\.',/g, "Export-ready.',");

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed ' + filePath);
    }
  }
});

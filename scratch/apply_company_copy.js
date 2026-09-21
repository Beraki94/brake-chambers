const fs = require('fs');

const mfgFile = 'src/features/manufacturing/components/ManufacturingClient.tsx';
if (fs.existsSync(mfgFile)) {
  let content = fs.readFileSync(mfgFile, 'utf8');
  content = content.replace(/badge="[^"]*"/, `badge="Inside the Factory"`);
  content = content.replace(/title="[^"]*"/, `title="Brake Chamber Manufacturing: Inside Our Factory"`);
  content = content.replace(/description="[^"]*"/, `description="Take a virtual tour of our 50,000 sqm brake chamber production floor in Zhejiang, China. See how we cast, machine, assemble, and stress-test every chamber to IATF 16949 standards. Export-ready and OEM-grade."`);
  fs.writeFileSync(mfgFile, content, 'utf8');
}

const companyFile = 'src/features/company/components/CompanyClient.tsx';
if (fs.existsSync(companyFile)) {
  let content = fs.readFileSync(companyFile, 'utf8');
  content = content.replace(/badge="[^"]*"/, `badge="About BRC"`);
  content = content.replace(/title="[^"]*"/, `title="Built by Engineers. Trusted by Fleets."`);
  content = content.replace(/description="[^"]*"/, `description="BRC Brake Chambers is a Chinese manufacturer of OEM-quality aftermarket brake chambers. Founded on deep engineering, vertically integrated production, and a single mission: give fleets worldwide a factory-direct alternative to overpriced OEM parts."`);
  fs.writeFileSync(companyFile, content, 'utf8');
}

const mfgMeta = 'src/app/manufacturing/page.tsx';
if (fs.existsSync(mfgMeta)) {
  let content = fs.readFileSync(mfgMeta, 'utf8');
  content = content.replace(/title:\s*['"][^'"]*['"]/, `title: 'Brake Chamber Manufacturing: Inside Our Factory | BRC'`);
  content = content.replace(/description:\s*['"][^'"]*['"]/, `description: 'Tour our 50,000 sqm brake chamber factory in Zhejiang, China. See how we cast, machine, assemble & stress-test every chamber to IATF 16949 standards. Export-ready.'`);
  fs.writeFileSync(mfgMeta, content, 'utf8');
}

const companyMeta = 'src/app/our-story/page.tsx';
if (fs.existsSync(companyMeta)) {
  let content = fs.readFileSync(companyMeta, 'utf8');
  content = content.replace(/title:\s*['"][^'"]*['"]/, `title: 'About BRC Brake Chambers | Chinese OEM Brake Chamber Manufacturer'`);
  content = content.replace(/description:\s*['"][^'"]*['"]/, `description: 'BRC is a Chinese manufacturer of OEM-quality aftermarket brake chambers. Vertically integrated production, operating to IATF 16949 standards, serving distributors in 30+ countries.'`);
  fs.writeFileSync(companyMeta, content, 'utf8');
}

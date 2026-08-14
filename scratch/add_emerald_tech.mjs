import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/TechnicalResourcesClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace safety category accent
content = content.replace(
    /id: 'safety',[\s\S]*?accent: 'red',/,
    `id: 'safety',
      title: 'Safety & Compliance',
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      accent: 'emerald',`
);

// Add emerald back to the template logic where red is used
content = content.replace(/\${category\.accent === 'red'\s*\?\s*'([^']+)'\s*:\s*''}/g, (match, p1) => {
    // We also need to map red utility classes to emerald utility classes for the emerald case
    const emeraldP1 = p1.replace(/red/g, 'emerald');
    return `${match}\n                            \${category.accent === 'emerald' ? '${emeraldP1}' : ''}`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('TechnicalResourcesClient.tsx emerald added.');

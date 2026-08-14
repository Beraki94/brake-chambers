import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/TechnicalResourcesClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace safety category accent
content = content.replace(
    /id: 'safety',[\s\S]*?accent: 'amber',/,
    `id: 'safety',
      title: 'Safety & Compliance',
      icon: <Shield className="w-6 h-6 text-red-600" />,
      accent: 'red',`
);

// Replace emerald template strings with red
content = content.replace(/\${category\.accent === 'emerald'\s*\?\s*'bg-amber-500'\s*:\s*''}/g, "${category.accent === 'red' ? 'bg-red-600' : ''}");
content = content.replace(/\${category\.accent === 'emerald'\s*\?\s*'bg-amber-50 border-amber-100'\s*:\s*''}/g, "${category.accent === 'red' ? 'bg-red-50 border-red-100' : ''}");
content = content.replace(/\${category\.accent === 'emerald'\s*\?\s*'hover:border-amber-300'\s*:\s*''}/g, "${category.accent === 'red' ? 'hover:border-red-300' : ''}");
content = content.replace(/\${category\.accent === 'emerald'\s*\?\s*'text-slate-400 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-500\/20'\s*:\s*''}/g, "${category.accent === 'red' ? 'text-slate-400 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-red-600/20' : ''}");

// Also clean up purple -> slate since we missed it
content = content.replace(/\${category\.accent === 'purple'\s*\?\s*'([^']+)'\s*:\s*''}/g, (match, p1) => {
    return `\${category.accent === 'slate' ? '${p1}' : ''}`;
});
// Also clean up blue -> navy
content = content.replace(/\${category\.accent === 'blue'\s*\?\s*'([^']+)'\s*:\s*''}/g, (match, p1) => {
    return `\${category.accent === 'navy' ? '${p1}' : ''}`;
});


fs.writeFileSync(filePath, content, 'utf-8');
console.log('TechnicalResourcesClient.tsx fixed.');

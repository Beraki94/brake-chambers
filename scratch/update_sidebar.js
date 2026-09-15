const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/products/components/FacetedSidebar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace link classes
content = content.replace(/className=\{\`block px-4 py-2 text-sm \$\{pathname\.includes\('([^']+)'\) \? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'\}\`/g, 
  "className={`block px-4 py-2 text-sm border-l-4 transition-colors ${pathname.includes('$1') ? 'text-navy-900 font-extrabold bg-amber-50 border-amber-500' : 'text-navy-600 border-transparent hover:bg-slate-50 hover:text-navy-900'}`");

// Also replace the checkbox label styles to be bold when checked.
// Checkboxes look like:
// <label key={brand} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-50 p-1 -mx-1 rounded transition-colors">
// To make them bold when checked, we'd need to add dynamic classes based on `isChecked`.
// So we replace:
// className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-50 p-1 -mx-1 rounded transition-colors"
// With:
// className={`flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-50 p-1 -mx-1 rounded transition-colors ${isChecked('brand', brand) ? 'font-bold text-navy-900 bg-slate-50' : 'text-gray-700'}`}

// Let's do it for brand, filter, model, application, strokeInch, pushRodLength, categoryFilter
const checkboxes = [
  { varName: 'brand', param: 'brand' },
  { varName: 'type', param: 'filter' },
  { varName: 'model', param: 'model' },
  { varName: 'app', param: 'application' },
  { varName: 'stroke', param: 'strokeInch' },
  { varName: 'length', param: 'pushRodLength' },
  { varName: 'type', param: 'categoryFilter' },
];

checkboxes.forEach(({ varName, param }) => {
  const searchStr = `className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-50 p-1 -mx-1 rounded transition-colors"`;
  const replaceStr = `className={\`flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-50 p-1 -mx-1 rounded transition-colors \${isChecked('${param}', ${varName}) ? 'font-bold text-navy-900 bg-slate-50' : 'text-gray-700'}\`}`;
  
  // Actually, we can just use regex for all labels that have checkboxes
  // Wait, let's just do a generic replacement for the label class. 
  // It's safer to just replace all instances of that specific string and add a generic dynamic class.
});

// Generic regex replacement for checkbox labels
// We need to capture the variable name passed to `isChecked` to make the class dynamic.
// Wait, the `label` tag wraps the `input`. So if we can't easily parse it with Regex, we can just replace the specific string.
// Let's just do it with a custom regex:
content = content.replace(/<label key=\{([^}]+)\} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer([^"]*)"/g, 
  (match, p1, p2) => {
    // p1 is the variable name (e.g. brand, type, model, app, stroke, length)
    // we need to know the param name. But we can't easily know it here.
    // Instead of doing it dynamically on the label, let's just do it on the checkbox text!
    return match; // cancel this approach
  });

// Instead, I'll just change the label class to not hardcode text-gray-700 if we want it dynamic. 
// But wait, it's easier to just use standard React replacements. I will replace it directly where I know the mappings.

content = content.replace(/className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-50 p-1 -mx-1 rounded transition-colors">(\s*)<input(\s*)type="checkbox"(\s*)className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"(\s*)checked=\{isChecked\('([^']+)', ([^)]+)\)\}/g,
  "className={`flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-50 p-1.5 -mx-1.5 rounded transition-colors ${isChecked('$5', $6) ? 'font-bold text-navy-900 bg-slate-100' : 'text-gray-700'}`}>$1<input$2type=\"checkbox\"$3className=\"rounded border-gray-300 text-amber-500 focus:ring-amber-500\"$4checked={isChecked('$5', $6)}"
);


fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete');

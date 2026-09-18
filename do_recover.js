const fs = require('fs');
let text = fs.readFileSync('C:/Users/HP/Desktop/brake chambers/recover.txt', 'utf8');
const lines = text.split('\n');
let codeLines = [];
let capture = false;
for (const line of lines) {
  if (line.indexOf('1: "use client";') !== -1) capture = true;
  if (capture && /^[0-9]+: /.test(line)) {
    codeLines.push(line.replace(/^[0-9]+: /, ''));
  }
}
let code = codeLines.join('\n').trim();
code = code.replace(/\r/g, '');
code += '\n                  </div>\n                </Link>\n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    );\n}\n';
fs.mkdirSync('C:/Users/HP/Desktop/brake chambers/src/features/home/components', { recursive: true });
fs.writeFileSync('C:/Users/HP/Desktop/brake chambers/src/features/home/components/HomeClient.tsx', code);
console.log('RECOVERED FILE WRITTEN. Length: ' + code.length);

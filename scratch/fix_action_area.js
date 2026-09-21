const fs = require('fs');

let content = fs.readFileSync('src/features/products/components/ProductsClient.tsx', 'utf8');

const targetActionArea = `            {/* Action Area (Fake Input + Button) */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:shrink-0 relative z-10">
              <div className="relative w-full sm:w-[340px]">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter OEM part number (e.g. 5009011)"
                  className="w-full pl-11 pr-4 py-3.5 md:py-4 bg-white border border-slate-200 rounded-xl text-[13px] md:text-sm font-medium text-slate-700 focus:outline-none hover:border-amber-400 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all shadow-inner cursor-pointer"
                  onClick={() => window.location.href = '/oem-cross-reference'}
                  readOnly
                />
              </div>
              <Link href="/oem-cross-reference" className="flex w-full sm:w-auto items-center justify-center text-center bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 md:py-4 rounded-xl text-[12px] sm:text-[13px] uppercase tracking-widest transition-all shadow-md transform hover:-translate-y-0.5 whitespace-normal sm:whitespace-nowrap border border-navy-700 leading-snug">
                <span>Search Brake Chamber Database</span>
                <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </Link>
            </div>`;

// We'll replace lines 399-416 approximately. Let's just use regex to replace everything from "Action Area" to the end of the div.
const startMarker = "{/* Action Area (Fake Input + Button) */}";
const endMarker = "</Link>\n            </div>";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex + endMarker.length);
  content = before + targetActionArea + after;
  fs.writeFileSync('src/features/products/components/ProductsClient.tsx', content);
  console.log('Fixed Action Area in ProductsClient');
} else {
  console.log('Could not find markers');
}

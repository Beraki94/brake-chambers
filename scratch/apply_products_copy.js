const fs = require('fs');

// --- 1. UPDATE META TAGS ---
const pageFile = 'src/app/products/page.tsx';
if (fs.existsSync(pageFile)) {
  let pageContent = fs.readFileSync(pageFile, 'utf8');
  pageContent = pageContent.replace(/title: ['"`].*?['"`],/g, "title: 'Commercial Brake Chamber Catalog — Spring, Service & ADB | BRC',");
  pageContent = pageContent.replace(/description: ['"`].*?['"`],/g, "description: \"Browse BRC's full range of OEM-grade brake chambers: spring brakes, service chambers, air disc actuators, and replacement parts. IATF 16949 standard manufacturing.\",");
  fs.writeFileSync(pageFile, pageContent);
  console.log('Updated src/app/products/page.tsx');
}

// --- 2. UPDATE PRODUCTS CLIENT ---
let content = fs.readFileSync('src/features/products/components/ProductsClient.tsx', 'utf8');

// Section 2: Spring Brakes
content = content.replace(/title: 'Spring Brakes',/g, "title: 'Spring Brake Chambers',");
content = content.replace(/desc: 'High-durability spring brakes for heavy-duty trucks and trailers\. Available in standard stroke, long stroke, and welded clevis configurations\.',/g, "desc: 'Heavy-duty combination spring brake chambers for trucks and trailers. Double diaphragm design manages both service and parking brake functions. Available in standard long-stroke and welded clevis configurations. Direct replacement for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO.',");

// Section 3: Service Chambers
content = content.replace(/desc: 'Reliable single-diaphragm service chambers engineered for immediate response, extended service life, and consistent braking performance\.',/g, "desc: 'Single-diaphragm service brake chambers engineered for immediate pneumatic response, extended service life, and consistent braking performance. Available for steer axle, drive axle, and trailer applications. Direct replacement for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO.',");

// Section 4: Air Disc Actuators
content = content.replace(/desc: 'Advanced ADB actuators for modern fleets requiring superior stopping power, reduced brake fade, and consistent performance under extreme heat and heavy loads\.',/g, "desc: 'Next-generation air disc brake actuators for modern commercial fleets. HOT Technology delivers superior clamping force, reduced brake fade, and consistent performance under extreme heat and heavy loads. Direct replacement for Bendix, Haldex, Meritor, and WABCO.',");

// Section 5: Parts & Kits
content = content.replace(/desc: 'Genuine replacement components for field servicing and maintenance\. Includes rebuild kits, diaphragms, caging bolts, clevis pins, and hardware\.',/g, "desc: 'OEM-spec replacement components for field servicing and maintenance of commercial brake chambers. Includes rebuild kits, rubber diaphragms, caging bolts, clevis pins, and mounting hardware. In-stock and ready to ship worldwide.',");

// Section 6: Trust Bar
content = content.replace(/description="From sub-zero Arctic logging routes to blistering desert mining operations, our brake chambers are the chosen aftermarket replacement for the world's most demanding fleets\."/g, 'description="From sub-zero Arctic logging routes to blistering desert mining operations, BRC brake chambers are the chosen aftermarket replacement for the world\'s most demanding fleets. Every chamber is manufactured to IATF 16949 standards and pressure-tested before shipment."');
content = content.replace(/35\+/g, "30+");

// Section 7: Applications
content = content.replace(/title="Not sure which brake chamber you need\?"/g, 'title="Brake Chambers by Vehicle Type"');
content = content.replace(/description="Select your vehicle type to see the recommended products for your operating environment\."/g, 'description="Select your vehicle type to see the recommended brake chambers for your operating environment. Each application page includes product recommendations, OEM cross-reference data, and installation specs."');
content = content.replace(/Explore All Applications/g, 'Explore All Brake Chamber Applications');

// Section 8: Cross-Reference Tool
content = content.replace(/title="Already have an OEM part number\?"/g, 'title="Already Have an OEM Brake Chamber Part Number?"');
content = content.replace(/description="Enter your Bendix, Knorr-Bremse, ZF\/WABCO, Haldex, SORL, or MGM part number to instantly find the matching BRC equivalent\."/g, 'description="Enter your Bendix, Knorr-Bremse, ZF/WABCO, Haldex, SORL, or MGM part number and instantly find the matching BRC brake chamber equivalent. Every cross-reference is verified for fit, form, and function. Live database updated weekly."');
content = content.replace(/placeholder="e\.g\. 5061011\.\.\."/g, 'placeholder="Enter OEM part number (e.g. 5009011)"');
content = content.replace(/Search Database/g, 'Search Brake Chamber Database');

// Section 9: Volume Pricing
content = content.replace(/badge="Factory Direct"/g, 'badge="Factory-Direct Pricing"');
content = content.replace(/description=\{<>Distributors and large fleets get direct factory pricing, tiered discounts, and reliable container shipping from our manufacturing hub factory in China\. <strong className="text-white font-bold">No middlemen\. No compromises\.<\/strong><\/>\}/g, 'description={<>Distributors and large fleets get direct factory pricing, tiered discounts, and reliable container shipping from our IATF 16949 factory in Zhejiang, China. <strong className="text-white font-bold">No middlemen. No hidden markups.</strong></>}');

fs.writeFileSync('src/features/products/components/ProductsClient.tsx', content);
console.log('Updated src/features/products/components/ProductsClient.tsx');

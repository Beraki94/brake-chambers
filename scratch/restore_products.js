const { execSync } = require('child_process');
const fs = require('fs');

// 1. Restore the file from git to undo the corrupted replace_file_content
execSync('git checkout src/features/products/components/ProductsClient.tsx');
console.log("Restored ProductsClient.tsx from git.");

// 2. Read the clean file
let content = fs.readFileSync('src/features/products/components/ProductsClient.tsx', 'utf8');

// 3. Re-apply the image fixes
content = content.replace(/'\/images\/heavy_duty_truck\.png'/g, "'/images/home/spring-brakes-bg.jpg'");
content = content.replace(/'\/images\/commercial_trailer\.png'/g, "'/images/home/service-brakes-bg.jpg'");
content = content.replace(/'\/images\/transit_bus\.png'/g, "'/images/home/air-disc-brakes-bg.jpg'");
content = content.replace(/'\/images\/products\/brc-brake-chamber-replacement-parts-kits\.jpg'/g, "'/images/home/piggybacks-bg.jpg'");

// Remove Grayscale from Category Group Image
content = content.replace(
  /className="object-cover transition-transform duration-\[10s\] group-hover:scale-110 ease-out grayscale mix-blend-luminosity opacity-80"/g,
  'className="object-cover transition-transform duration-[10s] group-hover:scale-110 ease-out"'
);

// Lighten the Gradient Overlay for Category Group so image is visible
content = content.replace(
  /className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900\/90 to-navy-900\/40 opacity-90 transition-opacity duration-500 group-hover:opacity-100"/g,
  'className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"'
);

// Remove Grayscale from Vehicle Application Teaser
content = content.replace(
  /className="object-cover transition-transform duration-\[10s\] group-hover:scale-110 grayscale mix-blend-luminosity opacity-80"/g,
  'className="object-cover transition-transform duration-[10s] group-hover:scale-110"'
);

// Remove Grayscale from Trusted By Global Fleets
content = content.replace(
  /className="rounded-2xl lg:rounded-3xl shadow-xl shadow-navy-950\/50 w-full h-48 sm:h-56 lg:h-64 object-cover object-center grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"/g,
  'className="rounded-2xl lg:rounded-3xl shadow-xl shadow-navy-950/50 w-full h-48 sm:h-56 lg:h-64 object-cover object-center transition-all duration-500 hover:opacity-90"'
);
content = content.replace(
  /className="rounded-2xl lg:rounded-3xl shadow-xl shadow-navy-950\/50 w-full h-60 sm:h-72 lg:h-80 object-cover object-center mt-6 sm:mt-8 lg:mt-12 grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"/g,
  'className="rounded-2xl lg:rounded-3xl shadow-xl shadow-navy-950/50 w-full h-60 sm:h-72 lg:h-80 object-cover object-center mt-6 sm:mt-8 lg:mt-12 transition-all duration-500 hover:opacity-90"'
);

// Remove Grayscale from background image in Trusted by Global Fleets section
content = content.replace(
  /className="absolute inset-0 bg-\[url\('https:\/\/images.unsplash.com\/photo-1581091226825-a6a2a5aee158\?auto=format&fit=crop&w=2000&q=80'\)\] bg-cover bg-center opacity-5 mix-blend-luminosity grayscale"/g,
  'className="absolute inset-0 bg-[url(\'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80\')] bg-cover bg-center opacity-5 mix-blend-luminosity"'
);

// 4. Apply the NEW description the user requested for PageHeader
content = content.replace(
  /description="Browse BRC's full range of OEM-grade brake chambers and replacement parts for trucks, trailers, and commercial fleets\. Spring brakes, service chambers, air disc actuators, piggyback kits, and hardware\. All include technical specs and direct OEM cross-reference\."/g,
  'description="Browse BRC\'s full range of OEM-grade brake chambers and replacement parts for trucks, trailers, and commercial fleets. Spring brakes, service chambers, air disc actuators, piggyback kits, and hardware. Every product includes technical specs and direct OEM cross-reference."'
);

// Write changes
fs.writeFileSync('src/features/products/components/ProductsClient.tsx', content);
console.log("Successfully fixed ProductsClient.tsx!");

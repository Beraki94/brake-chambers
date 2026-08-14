import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// The exact string to replace (using indexOf to be safe)
const startText = `          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >`;

// We know the end is `</motion.div>` but there are inner ones.
// Let's replace by slicing the exact text we got from view_file.

const fullBlockToReplace = `          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* News 1 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <div className="h-56 rounded-2xl mb-6 overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80" alt="ISO Certification" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-luminosity" />
                <div className="absolute bottom-5 left-5 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-emerald-500 text-white text-[11px] font-bold px-3 py-1.5 rounded border border-emerald-400">Read Article</span>
                </div>
              </div>
              <div className="text-emerald-600 text-[11px] font-extrabold uppercase tracking-widest mb-3">Certification Update</div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">ISO 9001:2015 Recertification Completed</h3>
              <p className="text-slate-600 text-[13px] mb-4 line-clamp-2 leading-relaxed">Our main manufacturing facility has successfully completed its annual ISO 9001:2015 audit with zero non-conformances.</p>
              <span className="text-emerald-500 text-[11px] font-bold uppercase tracking-widest flex items-center"><CheckCircle className="w-3 h-3 mr-1.5" /> August 12, 2026</span>
            </motion.div>

            {/* News 2 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <div className="h-56 rounded-2xl mb-6 overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=600&q=80" alt="Engineering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-luminosity" />
                <div className="absolute bottom-5 left-5 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-amber-500 text-navy-950 text-[11px] font-bold px-3 py-1.5 rounded border border-amber-400">Read Article</span>
                </div>
              </div>
              <div className="text-amber-500 text-[11px] font-extrabold uppercase tracking-widest mb-3">Product Release</div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-tight">Launch of the UltraLife+ VCT Series</h3>
              <p className="text-slate-600 text-[13px] mb-4 line-clamp-2 leading-relaxed">Introducing the new standard in variable clocking chambers, offering fleet managers 40% reduction in installation time.</p>
              <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center"><Settings className="w-3 h-3 mr-1.5" /> July 28, 2026</span>
            </motion.div>

            {/* News 3 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <div className="h-56 rounded-2xl mb-6 overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" alt="Logistics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-luminosity" />
                <div className="absolute bottom-5 left-5 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-amber-500 text-navy-950 text-[11px] font-bold px-3 py-1.5 rounded border border-amber-400">Read Article</span>
                </div>
              </div>
              <div className="text-amber-500 text-[11px] font-extrabold uppercase tracking-widest mb-3">Logistics Notice</div>
              <h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-tight">Expanded EMEA Distribution Network</h3>
              <p className="text-slate-600 text-[13px] mb-4 line-clamp-2 leading-relaxed">To better serve our European partners, we have opened a new automated fulfillment center in Germany.</p>
              <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center"><Globe2 className="w-3 h-3 mr-1.5" /> July 05, 2026</span>
            </motion.div>
          </motion.div>`;

const replacement = `          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} variants={fadeInUp} />
            ))}
          </motion.div>`;

if (content.includes(fullBlockToReplace)) {
  content = content.replace(fullBlockToReplace, replacement);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully replaced exact text!');
} else {
  console.log('Could not find the exact text in the file. Normalizing line endings and trying again...');
  
  // Try with normalized line endings
  const normContent = content.replace(/\\r\\n/g, '\\n');
  const normBlock = fullBlockToReplace.replace(/\\r\\n/g, '\\n');
  
  if (normContent.includes(normBlock)) {
    content = normContent.replace(normBlock, replacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully replaced exact text after normalizing!');
  } else {
    console.log('STILL failed to find exact text.');
  }
}

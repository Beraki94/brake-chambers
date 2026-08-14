import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add imports at the top
if (!content.includes("import { blogPosts }")) {
  content = content.replace(
    /import Link from 'next\/link';/,
    `import Link from 'next/link';\nimport { blogPosts } from '@/data/blogPosts';\nimport BlogCard from '@/components/ui/BlogCard';`
  );
}

// 2. Replace the static news block
const startMarker = '<motion.div\n            variants={staggerContainer}\n            initial="hidden"\n            whileInView="visible"\n            viewport={{ once: true, margin: "-100px" }}\n            className="grid grid-cols-1 md:grid-cols-3 gap-8"\n          >';
const endMarker = '          </motion.div>\n        </div>\n      </section>\n\n      {/* 7. Global Distribution & Direct Contact */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newBlock = `${startMarker}
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} variants={fadeInUp} />
            ))}
`;
  content = content.substring(0, startIndex) + newBlock + content.substring(endIndex);
}

// 3. Change "View Archive" link to point to /blog instead of /about
content = content.replace(/<Link href="\/about" className="text-amber-600 font-extrabold uppercase tracking-widest text-\[13px\] flex items-center justify-center hover:text-amber-500 transition-colors bg-slate-50 px-5 py-2\.5 rounded-lg border border-slate-100 hover:shadow-sm">\s*View Archive <ChevronRight className="w-4 h-4 ml-1" \/>\s*<\/Link>/, 
`<Link href="/blog" className="text-amber-600 font-extrabold uppercase tracking-widest text-[13px] flex items-center justify-center hover:text-amber-500 transition-colors bg-slate-50 px-5 py-2.5 rounded-lg border border-slate-100 hover:shadow-sm">
              View All Articles <ChevronRight className="w-4 h-4 ml-1" />
            </Link>`);

// 4. Change section title from Technical Bulletins to Industry Insights (optional, but requested professional blog)
content = content.replace(
  /<h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-700 tracking-tight">Technical Bulletins<\/h2>/,
  '<h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-700 tracking-tight">Industry Insights & News</h2>'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('HomeClient.tsx updated to use dynamic BlogCard!');

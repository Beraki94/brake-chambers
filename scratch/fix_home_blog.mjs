import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// Update imports
let importAdded = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("import Link from 'next/link';")) {
    lines[i] = "import Link from 'next/link';\nimport { blogPosts } from '@/data/blogPosts';\nimport BlogCard from '@/components/ui/BlogCard';";
    importAdded = true;
    break;
  }
}

let finalContent = lines.join('\n');
const lines2 = finalContent.split('\n');

// Replace the block
let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines2.length; i++) {
  if (lines2[i].includes('Industry Insights & News') || lines2[i].includes('Technical Bulletins')) {
    // Also rename the title
    lines2[i] = lines2[i].replace('Technical Bulletins', 'Industry Insights & News');
  }
  
  if (lines2[i].includes('<Link href="/about"') && lines2[i].includes('View Archive')) {
    lines2[i] = lines2[i].replace('/about', '/blog').replace('View Archive', 'View All Articles');
  }
  
  if (lines2[i].includes('<motion.div') && lines2[i+1] && lines2[i+1].includes('variants={staggerContainer}')) {
    // Found the start of the motion div
    if (startIdx === -1) startIdx = i;
  }
  
  if (startIdx !== -1 && i > startIdx && lines2[i].includes('</motion.div>')) {
    // End of the motion div
    endIdx = i;
    break;
  }
}

if (startIdx !== -1 && endIdx !== -1) {
  const newLines = [
    ...lines2.slice(0, startIdx),
    '          <motion.div',
    '            variants={staggerContainer}',
    '            initial="hidden"',
    '            whileInView="visible"',
    '            viewport={{ once: true, margin: "-100px" }}',
    '            className="grid grid-cols-1 md:grid-cols-3 gap-8"',
    '          >',
    '            {blogPosts.slice(0, 3).map((post) => (',
    '              <BlogCard key={post.id} post={post} variants={fadeInUp} />',
    '            ))}',
    '          </motion.div>',
    ...lines2.slice(endIdx + 1)
  ];
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
  console.log('Successfully replaced static blog section with dynamic one!');
} else {
  console.log('Failed to find start or end index.', startIdx, endIdx);
}

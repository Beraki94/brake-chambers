import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// Lines are 0-indexed in array.
// Line 512 is index 511
// Line 563 is index 562

// Let's verify line 512 says "{/* News 1 */}" and line 563 says "</motion.div>" (with 10 spaces)
if (lines[511].includes('{/* News 1 */}') && lines[562].includes('</motion.div>')) {
  lines.splice(511, 562 - 511 + 1, 
    '            {blogPosts.slice(0, 3).map((post) => (',
    '              <BlogCard key={post.id} post={post} variants={fadeInUp} />',
    '            ))}'
  );
  
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log('Successfully spliced the exact lines!');
} else {
  console.log('Line numbers do not match expected text.');
  console.log('Line 512:', lines[511]);
  console.log('Line 563:', lines[562]);
}

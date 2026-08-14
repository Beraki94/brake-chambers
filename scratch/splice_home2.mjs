import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// 555 - 511 = 44 items to delete (index 511 to 555 inclusive is 45 items)
lines.splice(511, 555 - 511 + 1, 
  '            {blogPosts.slice(0, 3).map((post) => (',
  '              <BlogCard key={post.id} post={post} variants={fadeInUp} />',
  '            ))}'
);

fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
console.log('Successfully replaced static blog block!');

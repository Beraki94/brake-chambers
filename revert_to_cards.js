const fs = require('fs');
const path = require('path');

const dirs = ['spring-brakes', 'service-chambers'];

dirs.forEach(dir => {
  const indexPage = path.join('src', 'app', dir, 'page.tsx');
  const slugPage = path.join('src', 'app', dir, '[slug]', 'page.tsx');

  const files = [indexPage, slugPage];

  files.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Replace import
      content = content.replace(
        /import B2BProductTable from '@\/components\/B2BProductTable';/g,
        "import ProductListCard from '@/components/ProductListCard';"
      );

      // Replace B2BProductTable with ProductListCard
      const searchStr = `<B2BProductTable products={paginatedProducts} categoryPath="${dir}" />`;
      const replaceStr = `<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            {paginatedProducts.map(product => (
              <ProductListCard 
                key={product.slug} 
                product={product} 
                categoryPath="${dir}" 
              />
            ))}
          </div>`;

      if (content.includes(searchStr)) {
        content = content.replace(searchStr, replaceStr);
        fs.writeFileSync(file, content, 'utf8');
        console.log('Reverted:', file);
      } else {
        // sometimes there's whitespace differences, let's try regex
        const regexStr = new RegExp(`<B2BProductTable\\s+products=\\{paginatedProducts\\}\\s+categoryPath="${dir}"\\s*/>`, 'g');
        if (regexStr.test(content)) {
          content = content.replace(regexStr, replaceStr);
          fs.writeFileSync(file, content, 'utf8');
          console.log('Reverted (regex):', file);
        } else {
          console.log('Could not find table in:', file);
        }
      }
    }
  });
});

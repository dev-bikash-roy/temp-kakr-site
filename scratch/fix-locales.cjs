const fs = require('fs');
const path = require('path');

function mergeDeep(t, s) {
  for (const k of Object.keys(s)) {
    if (s[k] && typeof s[k] === 'object' && !Array.isArray(s[k])) {
       if (!t[k]) t[k] = {};
       mergeDeep(t[k], s[k]);
    } else {
       t[k] = s[k];
    }
  }
  return t;
}

const localesDir = path.join('h:', 'kakr-labs-inc-website', 'locales');
const files = fs.readdirSync(localesDir).filter(f => f.endsWith('.json'));

let fixes = 0;
for (const file of files) {
  const filePath = path.join(localesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let matchArray = [...content.matchAll(/"products"\s*:\s*\{/g)];
  console.log(file, "has", matchArray.length, "occurrences of 'products'");

  if (matchArray.length > 1) {
    let index = matchArray[1].index;
    content = content.substring(0, index) + '"products_2": {' + content.substring(index + matchArray[1][0].length);
    
    let data;
    try {
      data = JSON.parse(content);
    } catch(e) {
      console.error("Parse error after regex replace in " + file, e.message);
      continue;
    }

    if (data.products && data.products_2) {
      mergeDeep(data.products, data.products_2);
      delete data.products_2;
      
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log('Fixed', file);
      fixes++;
    }
  }
}
console.log('Total fixed:', fixes);

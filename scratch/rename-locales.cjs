const fs = require('fs');
const path = require('path');

const localesDir = path.join('h:', 'kakr-labs-inc-website', 'locales');
const files = fs.readdirSync(localesDir).filter(f => f.endsWith('.json'));

let fixes = 0;
for (const file of files) {
  const filePath = path.join(localesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(content);
  } catch(e) {
    console.error("Parse error in", file);
    continue;
  }

  if (data.products) {
    // only move if platform doesn't exist
    if (!data.platform) {
        data.platform = data.products;
        delete data.products;
    } else {
        // if platform already exists, merge it
        Object.assign(data.platform, data.products);
        delete data.products;
    }
    
    // Also change navheader and header if they have 'products' ? 
    // The user's header navigation already had 'products': 'Products'
    // I will leave 'navheader' and 'header' alone since they are just labels, wait!
    // But if they want to update it to Platform in the visual text too!
    if (data.navheader && data.navheader.products) {
       data.navheader.platform = "Platform";
       delete data.navheader.products;
    }
    if (data.header && data.header.products) {
       data.header.platform = "Platform";
       delete data.header.products;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    fixes++;
  }
}
console.log('Renamed products to platform in', fixes, 'locales');

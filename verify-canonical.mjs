
import http from 'http';

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, text: () => Promise.resolve(data) }));
        }).on('error', reject);
    });
}

async function verifyCanonical(path, expectedCanonical) {
    try {
        console.log(`Checking ${path}...`);
        const res = await fetchUrl(`http://localhost:3000${path}`);
        const html = await res.text();

        // Normalize html: remove newlines/extra spaces for easier regex
        const cleanHtml = html.replace(/\s+/g, ' ');

        // Regex for canonical link
        // <link rel="canonical" href="..."> or <link href="..." rel="canonical">
        // Simple regex
        const match = html.match(/<link\s+(?:[^>]*?\s+)?rel=["']canonical["']\s+(?:[^>]*?\s+)?href=["'](.*?)["']/i) ||
            html.match(/<link\s+(?:[^>]*?\s+)?href=["'](.*?)["']\s+(?:[^>]*?\s+)?rel=["']canonical["']/i);

        if (match) {
            const foundCanonical = match[1];
            console.log(`Found Canonical: ${foundCanonical}`);
            if (foundCanonical === expectedCanonical) {
                console.log('PASS');
            } else {
                console.log(`FAIL - Expected ${expectedCanonical}`);
            }
        } else {
            console.log('FAIL - No canonical link found.');
            // console.log('Snippet:', html.substring(0, 1000));
        }

    } catch (err) {
        console.error(`Error checking ${path}:`, err);
    }
}

async function run() {
    await verifyCanonical('/authentication', 'https://www.kakr.ai/authentication');
    // await verifyCanonical('/contact', 'https://www.kakr.ai/contact');
}

run();

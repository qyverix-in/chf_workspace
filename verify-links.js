const fs = require('fs');
const path = require('path');

const uiDir = __dirname;
const modulesPath = path.join(uiDir, 'MODULES.md');
const modulesContent = fs.readFileSync(modulesPath, 'utf8');

// 1. Extract all HTML page targets from MODULES.md
const mdMatches = [...modulesContent.matchAll(/\[`([^`]+\.html)`\]/g)].map(m => m[1]);
const uniqueMdPages = [...new Set(mdMatches)];

console.log('Unique pages referenced in MODULES.md:', uniqueMdPages.length);

let missingFromModules = [];
uniqueMdPages.forEach(p => {
  if (!fs.existsSync(path.join(uiDir, p))) {
    missingFromModules.push(p);
  }
});

console.log('Missing files from MODULES.md:', missingFromModules.length === 0 ? 'None (100% Found)' : missingFromModules);

// 2. Scan all HTML files for hrefs and srcs
const allHtmlFiles = fs.readdirSync(uiDir).filter(f => f.endsWith('.html'));
console.log('Total HTML files in UI directory:', allHtmlFiles.length);

let brokenLinks = [];
let totalLinks = 0;

allHtmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(uiDir, file), 'utf8');
  // Match href="..." and src="..."
  const linkRegex = /(?:href|src)=["']([^"'#:]+)["']/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const link = match[1].trim();
    if (!link) continue;
    if (link.startsWith('http') || link.startsWith('javascript') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('data:')) {
      continue;
    }
    totalLinks++;
    const targetFile = link.split('?')[0].split('#')[0];
    const targetPath = path.join(uiDir, targetFile);
    if (!fs.existsSync(targetPath)) {
      brokenLinks.push({ source: file, target: link });
    }
  }
});

console.log('Total local links evaluated:', totalLinks);
if (brokenLinks.length === 0) {
  console.log('Broken links: 0 (100% Link Resolution)');
} else {
  console.log('Broken links found (' + brokenLinks.length + '):', brokenLinks);
}

// 3. Scan app.js for registered commands / links
const appJsPath = path.join(uiDir, 'app.js');
if (fs.existsSync(appJsPath)) {
  const appJsContent = fs.readFileSync(appJsPath, 'utf8');
  const appLinks = [...appJsContent.matchAll(/url:\s*['"]([^'"]+\.html)['"]/g)].map(m => m[1]);
  console.log('Total URLs indexed in app.js command palette:', appLinks.length);
  let brokenInAppJs = [];
  appLinks.forEach(u => {
    if (!fs.existsSync(path.join(uiDir, u))) {
      brokenInAppJs.push(u);
    }
  });
  console.log('Broken URLs in app.js:', brokenInAppJs.length === 0 ? 'None (100% Found)' : brokenInAppJs);
}

// 4. Verify Brand Assets (Favicon & Logo) on every HTML page
let pagesMissingFavicon = [];
let pagesMissingLogo = [];

allHtmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(uiDir, file), 'utf8');
  if (!content.includes('assets/brand/favicon.svg')) {
    pagesMissingFavicon.push(file);
  }
  // All workspace pages and login page must contain the logo
  if (!content.includes('assets/brand/coheart-logo.png') && file !== 'click-comparison.html') {
    pagesMissingLogo.push(file);
  }
});

console.log('Brand Favicon coverage: ' + (allHtmlFiles.length - pagesMissingFavicon.length) + '/' + allHtmlFiles.length + ' pages (' + (pagesMissingFavicon.length === 0 ? '100% Present' : pagesMissingFavicon) + ')');
console.log('Brand Logo coverage: ' + (allHtmlFiles.length - pagesMissingLogo.length) + '/' + allHtmlFiles.length + ' pages verified.');


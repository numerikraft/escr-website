import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import express from 'express';
import { parseStringPromise } from 'xml2js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml'); // We use the one in public since it's the source of truth

if (!fs.existsSync(DIST_DIR)) {
  console.error('dist/ directory not found. Please run "npm run build" first.');
  process.exit(1);
}

// 1. Start a local express server serving 'dist'
const app = express();
app.use(express.static(DIST_DIR));

// Fallback to index.html for React Router
app.use((req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

const PORT = 3005;
const server = app.listen(PORT, async () => {
  console.log(`\n🚀 Prerendering started on http://localhost:${PORT}`);
  
  try {
    // 2. Parse sitemap to get routes
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const sitemapData = await parseStringPromise(sitemapContent);
    const urls = sitemapData.urlset.url.map(entry => {
      const fullUrl = entry.loc[0];
      return new URL(fullUrl).pathname;
    });

    console.log(`Found ${urls.length} routes to prerender.\n`);

    // 3. Launch Puppeteer
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Prevent some heavy scripts like analytics from running if they existed
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const resourceType = req.resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
        req.abort(); // We only care about HTML for prerendering SEO tags, wait, we need React JS to run.
      } else {
        req.continue();
      }
    });

    // We only block images and fonts, but we MUST load JS (script) and Fetch (xhr) for React to render.
    // However, tailwind css might be needed if there are JS calculations based on layout, but let's assume it's fine.
    // Wait, Vite injects CSS via `<style>` or external CSS. It's better not to block CSS just in case.
    
    // 4. Prerender each route
    for (const route of urls) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      
      // Wait for React to render the app (e.g. #root should not be empty or loading)
      await page.waitForFunction(() => {
        const root = document.getElementById('root');
        return root && root.innerHTML.length > 200; // Arbitrary length ensuring it's not empty
      }, { timeout: 10000 }).catch(() => console.log(`Timeout waiting for #root on ${route}`));
      
      // Give it an extra second for any animations or state updates to settle
      await new Promise(r => setTimeout(r, 1000));
      
      // Extract the HTML
      const html = await page.evaluate(() => {
        // Optionally remove some script tags you don't want in the prerendered HTML?
        // No, hydration needs the scripts.
        return '<!doctype html>\n' + document.documentElement.outerHTML;
      });

      // 5. Save the HTML file
      // If route is /about, save to dist/about/index.html
      // If route is /, save to dist/index.html
      let filePath = path.join(DIST_DIR, route);
      
      if (route === '/') {
        filePath = path.join(DIST_DIR, 'index.html');
      } else {
        // Ensure directory exists
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        filePath = path.join(filePath, 'index.html');
      }

      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`✅ Saved ${filePath}`);
    }

    await browser.close();
    server.close();
    console.log(`\n🎉 Prerendering complete!`);
    
  } catch (err) {
    console.error('Error during prerendering:', err);
    server.close();
    process.exit(1);
  }
});

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '../public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      // Exclude apple-touch-icon.png if we generate it, though compressing it is fine.
      // We also might skip og images if they need to be exact format, but webp is generally supported?
      // Actually, Twitter/FB prefer PNG/JPG for OpenGraph tags. Let's keep the OG image as PNG.
      if (file === 'escr-og.png') continue;
      
      // Let's also keep apple-touch-icon.png if it exists
      if (file === 'apple-touch-icon.png') continue;

      const ext = path.extname(file);
      const newFileName = file.replace(new RegExp(`${ext}$`), '.webp');
      const newPath = path.join(dir, newFileName);
      
      console.log(`Optimizing: ${file} -> ${newFileName}`);
      
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();
        
        // If image is very wide, maybe downscale it to max 1920px width
        if (metadata.width && metadata.width > 1920) {
          image.resize({ width: 1920, withoutEnlargement: true });
        }

        await image.webp({ quality: 85, effort: 6 }).toFile(newPath);
        
        // Delete original file to save space
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`Failed to process ${file}:`, err);
      }
    }
  }
}

async function run() {
  console.log('Starting image optimization...');
  await processDirectory(PUBLIC_DIR);
  console.log('Image optimization complete.');
}

run();

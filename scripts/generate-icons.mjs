import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '../public');

async function generateIcons() {
  const svgPath = path.join(PUBLIC_DIR, 'favicon.svg');
  if (!fs.existsSync(svgPath)) {
    console.error('favicon.svg not found in public directory.');
    return;
  }

  try {
    console.log('Generating apple-touch-icon.png (180x180)...');
    await sharp(svgPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

    console.log('Generating icon-192.png...');
    await sharp(svgPath)
      .resize(192, 192)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'icon-192.png'));

    console.log('Generating icon-512.png...');
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'icon-512.png'));

    console.log('Icons generated successfully.');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();

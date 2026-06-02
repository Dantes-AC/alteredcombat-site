import sharp from 'sharp';
import { readFileSync } from 'fs';

const CANVAS = 512;
const LOGO_SIZE = 480;
const OFFSET = (CANVAS - LOGO_SIZE) / 2;
const GLOW_COLOR = { r: 0, g: 212, b: 255 };

// Resize logo to 480x480 (preserving transparency)
const logoResized = await sharp('public/images/logo.png')
  .resize(LOGO_SIZE, LOGO_SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// Create cyan-tinted glow layer: colorize logo with cyan, then blur
const glowLayer = await sharp(logoResized)
  .tint(GLOW_COLOR)
  .blur(8)
  .png()
  .toBuffer();

// Dark background
const background = await sharp({
  create: { width: CANVAS, height: CANVAS, channels: 4, background: { r: 10, g: 10, b: 15, alpha: 255 } }
})
  .png()
  .toBuffer();

// Composite: background → glow (behind logo) → logo
await sharp(background)
  .composite([
    { input: glowLayer, top: OFFSET, left: OFFSET, blend: 'over' },
    { input: logoResized, top: OFFSET, left: OFFSET, blend: 'over' },
  ])
  .png()
  .toFile('src/app/icon.png');

console.log('icon.png generated at src/app/icon.png');

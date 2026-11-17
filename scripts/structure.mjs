// Regenerates the "structure" views (blueprint outlines traced from the final screens)
// used by the drag-to-compare block in each case study's Layout section.
// Runs automatically before `npm run build` and `npm run dev`, so replacing a source
// image (e.g. pluto-a.png) keeps its structure view aligned with no manual step.
import { existsSync } from 'node:fs';
import sharp from 'sharp';

const DIR = 'public/images/projects';
const EXT = ['png', 'jpg', 'jpeg', 'webp'];
// Which image each project's Layout comparison uses.
const SOURCES = {
  library: 'a', learning: 'a', pluto: 'a', recycle: 'a', crm: 'a', pulse: 'a',
  streaming: 'b', placement: 'b', events: 'b',
};
const BG = { r: 13, g: 17, b: 23 };
const GRID = '#141b24';
const LINE = { r: 150, g: 190, b: 255 };

async function build(key, crop) {
  const src = EXT.map((e) => `${DIR}/${key}-${crop}.${e}`).find((p) => existsSync(p));
  if (!src) return console.warn(`structure: no source for ${key}-${crop}`);
  const meta = await sharp(src).metadata();
  const width = Math.min(1600, meta.width);
  const height = Math.round((meta.height * width) / meta.width);

  // Greyscale pixels, then a 3x3 Laplacian edge filter, threshold and 1px dilation in plain JS.
  const { data, info } = await sharp(src)
    .resize(width, height)
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  const g = (x, y) => data[(y * width + x) * ch];
  const edge = new Uint8Array(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const v =
        8 * g(x, y) -
        g(x - 1, y - 1) - g(x, y - 1) - g(x + 1, y - 1) -
        g(x - 1, y) - g(x + 1, y) -
        g(x - 1, y + 1) - g(x, y + 1) - g(x + 1, y + 1);
      edge[y * width + x] = v > 28 ? 1 : 0;
    }
  }
  const mask = Buffer.alloc(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = y * width + x;
      if (edge[i] || edge[i - 1] || edge[i + 1] || edge[i - width] || edge[i + width] ||
          edge[i - width - 1] || edge[i - width + 1] || edge[i + width - 1] || edge[i + width + 1]) mask[i] = 217;
    }
  }
  const raw = { raw: { width, height, channels: 1 } };

  const lines = await sharp({ create: { width, height, channels: 3, background: LINE } })
    .joinChannel(mask, raw)
    .png()
    .toBuffer();

  const grid = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
      `<defs><pattern id="g" width="32" height="32" patternUnits="userSpaceOnUse">` +
      `<path d="M32 0H0V32" fill="none" stroke="${GRID}" stroke-width="1"/></pattern></defs>` +
      `<rect width="100%" height="100%" fill="url(#g)"/></svg>`,
  );

  await sharp({ create: { width, height, channels: 3, background: BG } })
    .composite([{ input: grid }, { input: lines }])
    .webp({ quality: 78 })
    .toFile(`${DIR}/${key}-structure.webp`);
}

await Promise.all(Object.entries(SOURCES).map(([key, crop]) => build(key, crop)));
console.log('structure views ready');

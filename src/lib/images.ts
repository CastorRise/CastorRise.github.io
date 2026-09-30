import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const imageRoot = join(process.cwd(), 'public', 'images');
const extensions = ['jpg', 'jpeg', 'webp', 'avif', 'png'];
const imageSources = import.meta.glob<ImageMetadata>('/public/images/**/*.{jpg,jpeg,webp,avif,png,JPG,JPEG,WEBP,AVIF,PNG}', { eager: true, import: 'default' });

export interface LocalImage {
  src: string;
  srcset: string;
  width: number;
  height: number;
  aspectRatio: number;
  name: string;
}

// Match the existing layout widths; keep originals and avoid upscaling small images.
export const coverSizes = '(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 64px), (max-width: 1544px) calc(100vw - 104px), 1440px';
export const gallerySizes = '(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc(48vw - 32px), (max-width: 1544px) calc(48vw - 52px), 688px';
export const projectSizes = '(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc(60vw - 38px), (max-width: 1544px) calc(66vw - 69px), 952px';

export async function createPreview(image: ImageMetadata, filename: string): Promise<LocalImage> {
  const width = Math.min(image.width, 1920);
  const widths = [...new Set([480, 800, 1200, 1600, width].filter((size) => size <= width))].sort((a, b) => a - b);
  const variants = await Promise.all(widths.map(async (size) => {
    const optimized = await getImage({ src: image, width: size, format: 'webp', quality: 78 });
    return { src: optimized.src, width: size };
  }));
  return {
    src: variants[variants.length - 1].src,
    srcset: variants.map((variant) => `${variant.src} ${variant.width}w`).join(', '),
    width,
    height: Math.round(width * image.height / image.width),
    aspectRatio: image.width / image.height,
    name: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
  };
}

async function describeImage(folder: string, filename: string): Promise<LocalImage> {
  return createPreview(imageSources[`/public/images/${folder}/${filename}`], filename);
}

export async function findImage(folder: string, stem: string): Promise<LocalImage | null> {
  let filenames: string[];
  try {
    filenames = await readdir(join(imageRoot, folder));
  } catch {
    return null;
  }
  const filename = extensions.map((extension) => `${stem}.${extension}`).find((name) => filenames.includes(name));
  return filename ? describeImage(folder, filename) : null;
}

export async function getGalleryImages(folder: string): Promise<LocalImage[]> {
  let filenames: string[];
  try {
    filenames = await readdir(join(imageRoot, folder));
  } catch {
    return [];
  }
  const imageFiles = filenames.filter((name) => /\.(jpe?g|webp|avif|png)$/i.test(name));
  return Promise.all(imageFiles.sort((a, b) => a.localeCompare(b, 'en', { numeric: true })).map((name) => describeImage(folder, name)));
}

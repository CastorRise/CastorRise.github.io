import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const imageRoot = join(process.cwd(), 'public', 'images');
const extensions = ['jpg', 'jpeg', 'webp', 'avif', 'png'];
const imageSources = import.meta.glob<ImageMetadata>('/public/images/**/*.{jpg,jpeg,webp,avif,png,JPG,JPEG,WEBP,AVIF,PNG}', { eager: true, import: 'default' });

export interface LocalImage {
  src: string;
  width: number;
  height: number;
  name: string;
}

async function describeImage(folder: string, filename: string): Promise<LocalImage> {
  const image = imageSources[`/public/images/${folder}/${filename}`];
  const width = Math.min(image.width, 2400);
  const height = Math.round(width * image.height / image.width);
  const optimized = await getImage({ src: image, width, height, format: 'webp', quality: 85 });
  return {
    src: optimized.src,
    width,
    height,
    name: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
  };
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

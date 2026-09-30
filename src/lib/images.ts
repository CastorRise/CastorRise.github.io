import { imageMetadata } from 'astro/assets/utils';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const imageRoot = join(process.cwd(), 'public', 'images');
const extensions = ['jpg', 'jpeg', 'webp', 'avif', 'png'];

export interface LocalImage {
  src: string;
  width: number;
  height: number;
  name: string;
}

async function describeImage(folder: string, filename: string): Promise<LocalImage> {
  const path = join(imageRoot, folder, filename);
  const bytes = new Uint8Array(await readFile(path));
  const metadata = await imageMetadata(bytes, filename);
  return {
    src: `/images/${folder}/${filename}`,
    width: metadata.width,
    height: metadata.height,
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

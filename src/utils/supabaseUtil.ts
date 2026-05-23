import { createClient } from '@supabase/supabase-js';
import type { StorageImage, StoryEntry } from '../types/SupabaseTypes';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabasePrivate = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_SECRET_KEY);

// export let bannerImgUrl: string | undefined = undefined;

// getImageURL('proposal/DSC07877.jpg').then((url) => {
//   if (url) {
//     bannerImgUrl = url;
//     console.log(bannerImgUrl);
//   }
// });

export async function listStorageFiles(folder = ''): Promise<string[]> {
  const filePaths: string[] = [];
  let offset = 0;
  const pageSize = 100;

  while (true) {
    const { data, error } = await supabasePrivate.storage.from('images').list(folder, {
      limit: pageSize,
      offset,
      // sortBy: { column: 'name', order: 'asc' },
    });

    if (error) {
      console.error('Error listing storage files:', error);
      return filePaths;
    }

    if (!data || data.length === 0) {
      break;
    }

    for (const item of data) {
      if ('metadata' in item && item.metadata) {
        filePaths.push(item.name);
      } else {
        const folderPath = item.name;
        const isFolder = !folderPath.includes('.') || folderPath.endsWith('/');
        if (isFolder) {
          const entries = await listStorageFiles(folderPath);
          filePaths.push(...entries);
        }
      }
    }

    if (data.length < pageSize) {
      break;
    }

    offset += pageSize;
  }

  return filePaths;
}

// TODO: Set up to cache
export async function getImages(): Promise<StorageImage[]> {
  const filePaths = await listStorageFiles('proposal');

  console.log(filePaths);

  const images = await Promise.all(
    filePaths.map(async (filePath) => {
      const { data, error } = await supabasePrivate.storage
        .from('images')
        .createSignedUrl(`proposal/${filePath}`, 3600);
      if (error || !data?.signedUrl) {
        console.error('Error creating signed URL for', `proposal/${filePath}`, error);
        return null;
      }

      const name = `proposal/${filePath}`.split('/').pop() ?? `proposal/${filePath}`;
      return {
        name,
        path: `proposal/${filePath}`,
        src: data.signedUrl,
        alt: name.replace(/[-_]/g, ' '),
      };
    })
  );

  return images.filter((image): image is StorageImage => image !== null);
}

export async function getImagesAll(): Promise<void> {
  const { data, error } = await supabase.storage.from('images').listV2();

  console.log(data);
  if (error) {
    console.error('Error listing storage files:', error);
    return;
  }
}
export async function getImageURL(imgName: string) {
  const { data, error } = await supabase.storage.from(`images`).createSignedUrl(imgName, 3600);

  console.log(data);
  if (error) {
    console.error('Error creating signed URL:', error);
    return null;
  }

  return data.signedUrl;
}

export async function getStoryEntries(): Promise<StoryEntry[]> {
  const { data, error } = await supabase
    .from('story_entries')
    .select('*')
    .order('id', { ascending: true });

  {
    console.log(
      'StorySection images:',
      data?.map((entry) => entry.story_images)
    );
  }

  if (error) {
    console.error('Error fetching story entries:', error);
    return [];
  }

  return data ?? [];
}

// export function getImage(imgName: string) {
//   const imgData = supabase.storage.from(`images`).get(imgName);
//   return imgData;
// }

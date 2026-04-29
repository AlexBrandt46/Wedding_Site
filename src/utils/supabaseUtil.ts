import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SECRET_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// export let bannerImgUrl: string | undefined = undefined;

// getImageURL('proposal/DSC07877.jpg').then((url) => {
//   if (url) {
//     bannerImgUrl = url;
//     console.log(bannerImgUrl);
//   }
// });

// TODO: Set up to cache
export function getImages() {}

export async function getImageURL(imgName: string) {
  const { data, error } = await supabase.storage.from(`images`).createSignedUrl(imgName, 3600);

  console.log(data);
  if (error) {
    console.error('Error creating signed URL:', error);
    return null;
  }

  return data.signedUrl;
}

// export function getImage(imgName: string) {
//   const imgData = supabase.storage.from(`images`).get(imgName);
//   return imgData;
// }

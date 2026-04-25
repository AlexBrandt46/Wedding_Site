import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SECRET_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase)

const data = await supabase
  .storage
  .from('images').list('', {
    limit: 200,
    search: 'DSC08334 (1).jpg'
  });
console.log(data);

await supabase.storage.from('images').remove(['% (1).jpg'])

// TODO: Set up to cache
export function getImages() {

}
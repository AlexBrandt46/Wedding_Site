import { createClient } from '@supabase/supabase-js';
import type { StoryEntry } from '../types/SupabaseTypes';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabasePrivate = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_SECRET_KEY);

export async function getStoryEntries(): Promise<StoryEntry[]> {
  const { data, error } = await supabase
    .from('story_entries')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching story entries:', error);
    return [];
  }

  return data ?? [];
}

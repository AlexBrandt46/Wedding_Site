import { createClient } from '@supabase/supabase-js';
import type { Guest } from '../types/Guest';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);

export function getDietFormat(guest: Guest) {
  
}

import { createClient } from '@supabase/supabase-js';
import type { StoryEntry } from '../types/SupabaseTypes';
import type { ResendTemplateVar } from '../types/ResendTemplateVar';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabasePrivate = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_SECRET_KEY);

const emailRoutes = {
  confirmation: 'send-confirmation-email',
};

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

export async function sendEmail(topic: string, vars: ResendTemplateVar): Promise<void> {
  const emailFunction: string = emailRoutes[topic as keyof typeof emailRoutes];

  // TODO: Handle SSRF for this function, as it is currently vulnerable to SSRF attacks. We should validate the `to` parameter to ensure it is a valid email address and does not allow for arbitrary URL access.
  // TODO: Handle the case where the `topic` parameter does not match any of the defined routes in `emailRoutes`. We should return an error or throw an exception if the topic is invalid..
  const { error } = await supabase.functions.invoke(emailFunction, {
    body: vars,
  });

  if (error) {
    console.error('Error sending email:', error);
  }
}

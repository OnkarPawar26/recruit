import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// This is the default supabase client (optional, unauthenticated)
export const supabase = createClient(supabaseUrl, supabaseKey);

// This function creates a Supabase client with Clerk JWT attached
export const createClerkSupabaseClient = (supabaseAccessToken) => {
  return createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });
};

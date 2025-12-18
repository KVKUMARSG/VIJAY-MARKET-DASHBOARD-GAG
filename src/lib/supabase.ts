import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Only create the client if the environment variables are defined
// This prevents crashing during build or if env vars are missing
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const fetchUserSettings = async (userId: string) => {
    if (!supabase) return null;

    const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (error) {
        console.error('Error fetching user settings:', error);
        return null;
    }
    return data;
};

export const upsertUserSettings = async (settings: any) => {
    if (!supabase) return null;

    const { data, error } = await supabase
        .from('user_settings')
        .upsert(settings)
        .select()
        .single();

    if (error) {
        console.error('Error updating user settings:', error);
        throw error;
    }
    return data;
};

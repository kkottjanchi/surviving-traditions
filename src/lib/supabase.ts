import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Post = {
  id: string;
  created_at: string;
  author_email: string;
  author_name: string;
  title: string;
  body: string;
  lang: "ko" | "en" | "ja" | "zh";
  translations?: {
    en?: { title: string; body: string };
    ja?: { title: string; body: string };
    zh?: { title: string; body: string };
  };
};

export type Contact = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
};

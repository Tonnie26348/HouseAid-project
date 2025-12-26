import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://imobeejfwdjkdnfszebv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltb2JlZWpmd2Rqa2RuZnN6ZWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNjc4MzAsImV4cCI6MjA3OTg0MzgzMH0.40jdoD0JKslOr7dJIVlEMCEaxJ-zAThIIXszQwLNvk4";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and anon key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

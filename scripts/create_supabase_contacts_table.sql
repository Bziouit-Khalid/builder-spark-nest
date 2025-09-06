-- Run this SQL in your Supabase SQL editor to create the contacts table

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Optional: grant insert/select to anon (if you want client-side inserts via anon key)
-- grant insert on public.contacts to anon;

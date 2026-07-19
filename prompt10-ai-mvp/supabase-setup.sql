create table if not exists public.prompt10_generations (
  id uuid primary key,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.prompt10_generations enable row level security;

insert into storage.buckets (id, name, public)
values ('prompt10-media', 'prompt10-media', true)
on conflict (id) do update set public = excluded.public;

create index if not exists prompt10_generations_created_at_idx
on public.prompt10_generations (created_at desc);

comment on table public.prompt10_generations is
'Histórico persistente do PROMPT10 AI. O acesso é feito apenas no servidor com a Service Role Key.';

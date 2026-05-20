create type lead_stage as enum (
  'new_inquiry',
  'initial_contact',
  'discovery_scheduled',
  'discovery_complete',
  'proposal_sent',
  'proposal_accepted',
  'contract_sent',
  'contract_signed',
  'ready_to_start',
  'closed'
);

create type service_type as enum (
  'obm',
  'va',
  'consulting',
  'project',
  'other'
);

create type rate_type as enum (
  'retainer',
  'hourly',
  'project',
  'one_time'
);

create table leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  stage lead_stage not null default 'new_inquiry',
  full_name text not null,
  company text,
  email text,
  phone text,
  website text,
  lead_source text,
  service_interest text,
  inquiry_details text,
  discovery_notes text,
  general_notes text,
  next_steps text,
  next_follow_up_date date,
  proposal_url text,
  contract_url text
);

create table clients (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null,
  company text,
  email text,
  website text,
  service_purchased service_type not null default 'other',
  service_notes text,
  rate_type rate_type not null default 'retainer',
  rate_amount numeric(10,2),
  hours_per_month text,
  signed_proposal_url text,
  service_agreement_url text,
  start_date date,
  end_date date,
  renewal_reminder_date date generated always as (end_date - 40) stored,
  notes text
);

create table client_questionnaires (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  created_at timestamptz not null default now(),
  submitted_at timestamptz,
  responses jsonb not null default '{}'::jsonb
);

create table onboarding_tasks (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  created_at timestamptz not null default now(),
  label text not null,
  due_date date,
  completed_at timestamptz,
  sort_order integer not null default 0
);

create table notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,
  client_id uuid references clients(id) on delete cascade,
  created_at timestamptz not null default now(),
  body text not null,
  constraint notes_owner_check check (
    (lead_id is not null and client_id is null)
    or (lead_id is null and client_id is not null)
  )
);

create index leads_stage_idx on leads(stage);
create index leads_follow_up_idx on leads(next_follow_up_date);
create index clients_end_date_idx on clients(end_date);
create index onboarding_client_idx on onboarding_tasks(client_id, sort_order);

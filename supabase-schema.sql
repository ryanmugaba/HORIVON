-- HORIVON Supabase schema

create table if not exists macro_port (
  id bigserial primary key,
  recorded_at timestamptz not null,
  avg_wait_time numeric,
  source text,
  created_at timestamptz default now()
);

create table if not exists macro_rba (
  id bigserial primary key,
  recorded_at date not null,
  cash_rate numeric,
  created_at timestamptz default now()
);

create table if not exists macro_flights (
  id bigserial primary key,
  recorded_at date not null,
  airport text,
  arrivals int,
  departures int,
  created_at timestamptz default now()
);

create table if not exists macro_employment (
  id bigserial primary key,
  recorded_at date not null,
  unemployment_rate numeric,
  created_at timestamptz default now()
);

create table if not exists user_bank_connections (
  id bigserial primary key,
  user_id uuid not null,
  basiq_user_id text,
  created_at timestamptz default now()
);

create table if not exists transactions (
  id bigserial primary key,
  user_id uuid not null,
  transaction_date date not null,
  description text,
  amount numeric,
  category text,
  created_at timestamptz default now()
);

create table if not exists cashflow_forecasts (
  id bigserial primary key,
  user_id uuid not null,
  forecast_date date not null,
  projected_balance numeric,
  lowest_balance numeric,
  created_at timestamptz default now()
);

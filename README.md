# Emerald Maven Business Hub

A lightweight private portal for Emerald Maven Business Solutions to manage leads, client details, onboarding, and renewal reminders without paying for a larger CRM.

## First Version

- Dashboard with lead, proposal, client, and renewal snapshots
- Lead pipeline stages from new inquiry through ready to start
- Lead detail model for source, inquiry details, discovery notes, general notes, and next steps
- Client model for service purchased, rate type, hours, signed files, questionnaire responses, onboarding tasks, start dates, end dates, and renewal reminders
- Supabase starter schema in `supabase/schema.sql`

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

If local development hits a file-watcher limit on your Mac, use the production-style preview:

```bash
npm run preview
```

## Supabase Setup

1. Create a new Supabase project.
2. Run the SQL in `supabase/schema.sql` inside the Supabase SQL editor.
3. Copy `.env.example` to `.env.local`.
4. Add your Supabase project URL and anon key.

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Suggested GitHub/Vercel Flow

1. Create a new GitHub repo named `emerald-maven-hub`.
2. Push this folder as the repo.
3. Import the repo into Vercel.
4. Add the Supabase environment variables in Vercel.
5. Deploy.

import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileSignature,
  FolderOpen,
  Handshake,
  Inbox,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  PanelLeft,
  Search,
  Sparkles,
  UserRoundPlus,
} from "lucide-react";

const leadStages = [
  { name: "New Inquiry", count: 2 },
  { name: "Initial Contact", count: 1 },
  { name: "Discovery Scheduled", count: 1 },
  { name: "Proposal Sent", count: 1 },
  { name: "Contract Sent", count: 0 },
  { name: "Ready to Start", count: 0 },
];

const leads = [
  {
    name: "Maya Chen",
    company: "Bloom & Beam Studio",
    source: "Website inquiry",
    service: "OBM support",
    stage: "Discovery Scheduled",
    nextStep: "Send prep questions before Thursday call",
    followUp: "May 23",
  },
  {
    name: "Janelle Brooks",
    company: "Rooted Wellness Co.",
    source: "OBM Directory",
    service: "Launch project",
    stage: "Proposal Sent",
    nextStep: "Follow up on proposal and scope questions",
    followUp: "May 24",
  },
  {
    name: "Priya Shah",
    company: "Northstar Admin",
    source: "Facebook",
    service: "VA systems setup",
    stage: "Initial Contact",
    nextStep: "Reply with discovery call link",
    followUp: "Today",
  },
];

const clients = [
  {
    name: "Sample Client",
    company: "Anchor & Ivy",
    service: "OBM retainer",
    rate: "Monthly retainer",
    hours: "20 hrs/month",
    start: "Jun 3",
    end: "Sep 30",
    renewal: "Aug 21",
    onboarding: 7,
    totalTasks: 10,
  },
];

const onboarding = [
  "Send welcome email",
  "Send invoice or Stripe payment link",
  "Share in-depth questionnaire",
  "Create client folder",
  "Collect brand assets and access",
  "Schedule kickoff call",
  "Confirm communication rhythm",
  "Map first 30-day priorities",
  "Review service agreement",
  "Set renewal reminder",
];

const stats = [
  { label: "Open leads", value: "5", icon: Inbox },
  { label: "Proposals out", value: "1", icon: FileSignature },
  { label: "Active clients", value: "1", icon: Handshake },
  { label: "Renewals due", value: "1", icon: CalendarClock },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#17231f]">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-[#d9d5c8] bg-[#fdfcf8] px-5 py-6 lg:block">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-md bg-[#0f5c4a] text-white">
              <Sparkles size={21} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#62736b]">Emerald Maven</p>
              <h1 className="text-lg font-semibold">Business Hub</h1>
            </div>
          </div>

          <nav className="mt-10 space-y-1">
            {[
              ["Dashboard", LayoutDashboard],
              ["Leads", UserRoundPlus],
              ["Clients", FolderOpen],
              ["Messages", Mail],
              ["Questionnaires", MessageSquareText],
            ].map(([item, Icon]) => (
              <a
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-[#31433c] hover:bg-[#eef3ec]"
                href="#"
                key={item as string}
              >
                <Icon size={18} />
                {item as string}
              </a>
            ))}
          </nav>

          <div className="mt-10 rounded-md border border-[#d9d5c8] bg-[#f4f1e7] p-4">
            <p className="text-sm font-semibold">Solo-operator mode</p>
            <p className="mt-2 text-sm leading-6 text-[#62736b]">
              Built for a few thoughtful projects at a time: fewer fields,
              clearer follow-ups, and no bloated CRM chores.
            </p>
          </div>
        </aside>

        <section className="flex-1">
          <header className="border-b border-[#d9d5c8] bg-[#fdfcf8]/90 px-4 py-4 backdrop-blur md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="flex size-10 items-center justify-center rounded-md border border-[#d9d5c8] bg-white text-[#31433c] lg:hidden"
                  type="button"
                  aria-label="Open navigation"
                >
                  <PanelLeft size={19} />
                </button>
                <div>
                  <p className="text-sm font-medium text-[#62736b]">
                    Tuesday, May 19, 2026
                  </p>
                  <h2 className="text-2xl font-semibold tracking-normal">
                    Keep the pipeline warm and the client handoff tidy.
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-[#d9d5c8] bg-white px-3 text-sm text-[#62736b] md:w-72">
                  <Search size={17} />
                  <span>Search leads or clients</span>
                </label>
                <button className="flex h-10 items-center gap-2 rounded-md bg-[#0f5c4a] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0b4d3e]">
                  <UserRoundPlus size={17} />
                  Add lead
                </button>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 md:px-8">
            <section className="grid gap-3 md:grid-cols-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  className="rounded-md border border-[#d9d5c8] bg-white p-4"
                  key={label}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#62736b]">{label}</p>
                    <Icon className="text-[#0f5c4a]" size={18} />
                  </div>
                  <p className="mt-3 text-3xl font-semibold">{value}</p>
                </div>
              ))}
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
              <div className="space-y-6">
                <div className="rounded-md border border-[#d9d5c8] bg-white">
                  <div className="flex flex-col gap-3 border-b border-[#e5e0d2] p-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#0f5c4a]">
                        Leads
                      </p>
                      <h3 className="text-xl font-semibold">Pipeline board</h3>
                    </div>
                    <button className="flex h-9 items-center gap-2 rounded-md border border-[#d9d5c8] px-3 text-sm font-semibold text-[#31433c] hover:bg-[#f4f1e7]">
                      View all
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  <div className="grid gap-3 p-4 md:grid-cols-3 xl:grid-cols-6">
                    {leadStages.map((stage) => (
                      <div
                        className="min-h-28 rounded-md bg-[#f7f6f1] p-3"
                        key={stage.name}
                      >
                        <p className="text-sm font-semibold">{stage.name}</p>
                        <p className="mt-5 text-2xl font-semibold">
                          {stage.count}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#e5e0d2]">
                    {leads.map((lead) => (
                      <article
                        className="grid gap-4 border-b border-[#eee9dc] p-4 last:border-b-0 md:grid-cols-[1.2fr_0.8fr_1fr_auto]"
                        key={`${lead.name}-${lead.company}`}
                      >
                        <div>
                          <p className="font-semibold">{lead.name}</p>
                          <p className="text-sm text-[#62736b]">
                            {lead.company}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{lead.service}</p>
                          <p className="text-sm text-[#62736b]">{lead.source}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{lead.nextStep}</p>
                          <p className="text-sm text-[#62736b]">
                            Follow up: {lead.followUp}
                          </p>
                        </div>
                        <span className="h-fit rounded-md bg-[#dceadf] px-2.5 py-1 text-sm font-semibold text-[#0f5c4a]">
                          {lead.stage}
                        </span>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-[#d9d5c8] bg-white p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#0f5c4a]">
                        Clients
                      </p>
                      <h3 className="text-xl font-semibold">Active work</h3>
                    </div>
                    <CircleDollarSign className="text-[#0f5c4a]" size={22} />
                  </div>

                  {clients.map((client) => (
                    <article
                      className="mt-4 grid gap-4 rounded-md bg-[#f7f6f1] p-4 md:grid-cols-[1fr_1fr_1fr]"
                      key={client.company}
                    >
                      <div>
                        <p className="font-semibold">{client.company}</p>
                        <p className="text-sm text-[#62736b]">{client.name}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{client.service}</p>
                        <p className="text-sm text-[#62736b]">
                          {client.rate} · {client.hours}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          {client.start} - {client.end}
                        </p>
                        <p className="text-sm text-[#62736b]">
                          Renewal reminder: {client.renewal}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-md border border-[#d9d5c8] bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#0f5c4a]">
                        Onboarding
                      </p>
                      <h3 className="text-xl font-semibold">30-day template</h3>
                    </div>
                    <ClipboardCheck className="text-[#0f5c4a]" size={22} />
                  </div>

                  <div className="mt-4 space-y-2">
                    {onboarding.map((task, index) => (
                      <div
                        className="flex items-center gap-3 rounded-md bg-[#f7f6f1] px-3 py-2.5"
                        key={task}
                      >
                        <CheckCircle2
                          className={
                            index < 4 ? "text-[#0f5c4a]" : "text-[#a9b2ac]"
                          }
                          size={18}
                        />
                        <span className="text-sm font-medium">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-[#d9d5c8] bg-[#103f35] p-4 text-white">
                  <p className="text-sm font-semibold text-[#b9dfca]">
                    Recommended first build
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Start with leads, then convert to clients.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#dceadf]">
                    The first database pass should support lead intake, manual
                    entries, notes, next steps, proposal status, and a one-click
                    conversion path into a client profile.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

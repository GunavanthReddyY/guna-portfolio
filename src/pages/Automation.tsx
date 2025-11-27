import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

// Hero chips for AI page
const heroChips = [
  'Python automation',
  'RPA & low-code (UiPath · Power Automate · n8n)',
  'AI research & report assistants',
  'Job & career workflows',
  'Event operations helpers',
];

// "What I automate" content
const whatIAutomate = {
  knowledge: [
    'Summarising cybersecurity and technical readings into structured notes.',
    'Designing AI assistants to help outline reports and lab write-ups that I then refine.',
    'Using tools like Perplexity and NotebookLM to keep a small knowledge base updated with my own work.',
  ],
  operations: [
    'Job-search flows such as monitoring roles and sending filtered alerts/notifications.',
    'Small RPA flows for emails, spreadsheets and reminders so routine work is not fully manual.',
    'Helpers for event operations: attendee lists, basic labels or templates and simple follow-up steps.',
  ],
};

// Stacks & tools grouped by layer
const stackProgramming = ['Python (automation scripts, bots, small tools)'];

const stackRpa = ['UiPath', 'Power Automate', 'n8n'];

const stackLlms = [
  'ChatGPT (GPT-4,GPT-5.1) – prompting, agents, coding and writing support',
  'Gemini – research and vision-style use',
  'Copilot – coding and Office integration',
  'Perplexity – web research & quick overviews',
  'NotebookLM – structured notes & long-term references',
];

const stackInfra = ['AWS S3 / EC2', 'Telegram bots', 'APIs & webhooks'];

// Example workflows
const workflows = [
  {
    title: 'Job-search alert workflow',
    summary:
      'Python automation plus notifications to reduce manual job-hunting. The idea is to track roles that match my profile and surface them in a calm way.',
    details: [
      'Monitor job listings according to filters (role, location, keywords).',
      'Send alerts or digests through a messaging channel such as Telegram.',
      'Optionally summarise long descriptions in simple language using LLMs.',
    ],
    stackTags: ['Python', 'Telegram / notifications', 'LLMs (optional summarisation)'],
  },
  {
    title: 'Cyber coursework & research assistant',
    summary:
      'Multi-step prompting and research tools to organise reading, plan reports and draft initial structures for cyber and academic work.',
    details: [
      'Use Perplexity / search tools for up-to-date context and references.',
      'Store key notes and sources in tools like NotebookLM.',
      'Use ChatGPT-style models to generate report outlines and sections that I then edit.',
    ],
    stackTags: ['Perplexity / search', 'NotebookLM', 'ChatGPT / LLM prompts'],
  },
  {
    title: 'Event operations helper',
    summary:
      'Lightweight automations to support open days and events – especially around lists, simple documents and reminders.',
    details: [
      'Create and update attendee or task lists with simple flows.',
      'Generate basic templates or labels from structured data.',
      'Use reminders and checklists so on-the-day operations stay calm.',
    ],
    stackTags: ['Power Automate / n8n', 'Spreadsheets & docs', 'Checklists & reminders'],
  },
];

// Principles for AI workflow design
const principles = [
  'Security-first – minimise sensitive data sent to AI tools and summarise/anonymise where possible.',
  'Human-in-the-loop – AI suggests and drafts; I review, edit and own the final output.',
  'Observable – prefer workflows with clear steps and logs so I can see what happened and why.',
  'Tool-agnostic – choose the right model or tool based on the job, not on hype.',
  'Maintainable – simple prompts and named steps instead of one fragile mega-prompt.',
];

// Where AI fits in the bigger profile
const whereAI = [
  'In cybersecurity, I use AI to speed up reporting, summaries and learning – not to replace core analysis.',
  'In events and operations, I use small automations to reduce repetitive preparation work and avoid mistakes.',
  'For my own career, I use AI to manage research, applications and planning in a structured way.',
];

export default function Automation() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-16">
      {/* Hero section */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-start">
        {/* Left: text */}
        <div className="space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-200 guna-ai-hero-badge">
            <span>🤖</span>
            <span>AI &amp; automation profile</span>
          </div>

          {/* Title + intro */}
          <div className="space-y-3">
            {/* Hero title – we keep your wording */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              <span className="block">
                Automation that cuts the Busywork,
              </span>
              <span className="mt-1 inline-block rounded-xl px-1.5 -mx-1 bg-gradient-to-r from-sky-500/15 via-fuchsia-500/10 to-emerald-500/15">
                <span className="guna-ai-hero-line2">
                  Not the people we Love.
                </span>
              </span>
            </h1>

            {/* Intro copy – slightly stronger cyber / workflow angle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              I&apos;m an early-career{' '}
              <span className="font-medium">AI &amp; automation engineer</span> and{' '}
              <span className="font-medium">MSc Cybersecurity Management</span> student.
              I&apos;ve worked on <span className="font-medium">machine learning projects at Zoho</span>,
              built <span className="font-medium">Python automations and Telegram-style notification flows</span>,
              and use tools like <span className="font-medium">UiPath, Power Automate, n8n and LLMs</span> to
              turn repetitive tasks into calm, reliable workflows.
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              My rule is simple: <span className="font-medium">humans stay in the loop</span>.
              Automation should make systems faster and calmer{' '}
              <span className="font-medium">without replacing the people doing the work</span>.
              
            </p>
          </div>

          {/* Hero chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {heroChips.map((chip) => (
              <span key={chip} className="guna-hero-chip">
                {chip}
              </span>
            ))}
          </div>

          {/* Tiny “typical workflows” line */}
          

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-4 text-sm">
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-cyan-400 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-300 transition"
            >
              View automation projects
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition"
            >
              Contact about AI roles
            </Link>
          </div>

          {/* Quick info row */}
          <dl className="mt-3 grid gap-4 text-xs sm:text-sm text-slate-300 sm:grid-cols-3">
            <div>
              <dt className="uppercase tracking-[0.18em] text-slate-400 text-[11px]">
                Base
              </dt>
              <dd className="mt-1">{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.18em] text-slate-400 text-[11px]">
                Current
              </dt>
              <dd className="mt-1">
                MSc Cybersecurity Management · Student Ambassador
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.18em] text-slate-400 text-[11px]">
                AI focus
              </dt>
              <dd className="mt-1">
                Workflows · RPA · LLM-based assistants
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: AI workflow snapshot card */}
        <aside className="relative">
          {/* animated glow behind card */}
          <div className="guna-ai-glow absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-cyan-500/25 via-sky-500/18 to-violet-500/22 pointer-events-none" />
          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/85 px-5 py-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] space-y-4 text-sm text-slate-200">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                AI workflow snapshot
              </p>
              <p className="mt-1 text-slate-100">
                A quick view of how I think about AI-powered automation.
              </p>
              <p className="mt-1 text-[11px] text-cyan-300/85">
                Human-in-the-loop first: AI suggests, I review and ship.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                What I automate
              </h3>
              <ul className="space-y-1 text-slate-300">
                <li>• Research, reports and coursework support.</li>
                <li>• Job-search flows and small personal systems.</li>
                <li>• Event and operations helpers around lists and reminders.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Tools I combine
              </h3>
              <p className="text-slate-300">
                Python · UiPath · Power Automate · n8n · ChatGPT · Gemini · Copilot · APIs &amp; webhooks.
              </p>
            </div>

            {/* pipeline mini-visual */}
            <div className="space-y-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Typical flow
              </h3>
              <p className="text-xs text-slate-400">
                Input → Process → AI / RPA → Human review → Output
              </p>
              <div className="guna-ai-pipeline mt-2">
                <div className="guna-ai-pipeline-track" />
                <div className="guna-ai-pipeline-dot" />
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* What I automate */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-100">
          What I automate
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          I look for tasks that are repeatable, structured and slightly painful – then design workflows so they become
          calmer and more reliable.
        </p>
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-100">
              Knowledge, research &amp; reports
            </h3>
            <ul className="space-y-1">
              {whatIAutomate.knowledge.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-100">
              Operations, jobs &amp; events
            </h3>
            <ul className="space-y-1">
              {whatIAutomate.operations.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stacks & tools */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-100">
          Stacks &amp; tools I use
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          I treat AI and automation as layers that can be combined, not as single magic tools.
        </p>
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
          <div className="space-y-2">
            <h3 className="font-semibold">Programming &amp; scripting</h3>
            <ul className="space-y-1">
              {stackProgramming.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">RPA &amp; low-code</h3>
            <ul className="space-y-1">
              {stackRpa.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">LLMs &amp; AI platforms</h3>
            <ul className="space-y-1">
              {stackLlms.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Integrations &amp; infra</h3>
            <ul className="space-y-1">
              {stackInfra.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Example workflows */}
      <section id="workflows" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-100">
          Example AI &amp; automation workflows
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          A few examples of how I combine tools to support real tasks.
        </p>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-300">
          {workflows.map((flow) => (
            <div
              key={flow.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 shadow-[0_0_24px_rgba(15,23,42,0.85)]"
            >
              <h3 className="font-semibold text-slate-100">{flow.title}</h3>
              <p className="mt-2 text-xs text-slate-400">{flow.summary}</p>
              <ul className="mt-2 space-y-1">
                {flow.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                {flow.stackTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How I design AI workflows */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-100">
          How I design AI workflows
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          The goal is not just to make something &quot;work once&quot;, but to build workflows that can be trusted and
          improved over time.
        </p>
        <ul className="space-y-1 text-sm text-slate-300">
          {principles.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </section>

      {/* Where AI fits in my overall work */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-100">
          Where AI fits in my overall work
        </h2>
        <ul className="space-y-1 text-sm text-slate-300">
          {whereAI.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <Link
            to="/cyber"
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 hover:border-sky-400 hover:text-sky-200 transition"
          >
            View my Cybersecurity profile →
          </Link>
          <Link
            to="/events"
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 hover:border-emerald-400 hover:text-emerald-200 transition"
          >
            View my Events &amp; community profile →
          </Link>
        </div>
      </section>
    </div>
  );
}

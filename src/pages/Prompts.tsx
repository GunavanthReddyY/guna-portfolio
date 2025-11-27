import { Link } from 'react-router-dom';

// Hero chips under the main heading
const heroChips = [
  'Cybersecurity reports & lab write-ups',
  'Research & coursework assistants',
  'Job & career workflows',
  'Events & operations helpers',
  'Knowledge-bank & documentation flows',
];

// Roles / hats you wear around prompts
const roles = [
  {
    title: 'Prompt Engineer',
    description: 'Designs the actual prompts, structures and guardrails for each workflow.',
  },
  {
    title: 'AI Workflow Designer',
    description: 'Connects multiple steps, tools and checks into one coherent flow.',
  },
  {
    title: 'AI Research Assistant',
    description: 'Builds flows that help with reading, summarising and planning academic or cyber work.',
  },
  {
    title: 'AI Content Systems Designer',
    description: 'Creates multi-step flows for CVs, reports, emails and event communications.',
  },
  {
    title: 'AI Solutions Engineer',
    description: 'Combines APIs, RPA tools and LLMs into end-to-end solutions that real people can use.',
  },
];

// How you use each model/tool family
const modelUsage = [
  {
    heading: 'ChatGPT / OpenAI (GPT-4-class models)',
    body:
      'For multi-step workflows, coding help, cyber reports, academic structure and job/CV workflows. ' +
      'I use role-based prompts, chain-of-thought, self-critique and assistants/tools for structured tasks.',
  },
  {
    heading: 'Claude (Anthropic)',
    body:
      'For long documents, structured analysis and safety-sensitive tasks. I rely on larger context windows ' +
      'and careful guardrail/policy prompts when I need more cautious reasoning.',
  },
  {
    heading: 'Gemini / Google AI',
    body:
      'For web-connected research and working with images or screenshots. Useful for understanding pages, diagrams ' +
      'and cross-checking information from other models.',
  },
  {
    heading: 'Perplexity',
    body:
      'For up-to-date web research and source-linked answers. I use it for quick literature scans, references and ' +
      'fact checks before drafting larger reports.',
  },
  {
    heading: 'NotebookLM',
    body:
      'For knowledge banks – keeping notes, PDFs and my own work together. I upload readings and notes, then use AI ' +
      'to ask questions, build outlines and keep concepts consistent across projects.',
  },
  {
    heading: 'Copilot & office-integrated tools',
    body:
      'For code snippets, spreadsheets and documents. It speeds up drafts and formulas in environments like Office ' +
      'and VS Code, which I then edit manually.',
  },
  {
    heading: 'RPA & glue tools (UiPath · Power Automate · n8n · APIs)',
    body:
      'For connecting LLMs to real workflows – notifications, document generation and updates to sheets or systems. ' +
      'I design flows with a human approval step for important actions.',
  },
];

// Example AI systems / assistants
const assistants = [
  {
    title: 'Cyber lab report & coursework assistant',
    problem:
      'Cyber labs and coursework often require long reports with structure, references and clear risk reasoning. Starting from a blank page wastes time.',
    does: [
      'Turns lab notes, screenshots and requirements into structured report outlines.',
      'Suggests risk, impact and mitigation sections based on the scenario.',
      'Helps draft text that I then edit, correct and reference manually.',
    ],
    how: [
      'Multi-step prompts: brief → outline → section drafting → self-critique.',
      'Use Perplexity or similar for up-to-date context and references, then check and add them myself.',
      'Guardrails around no fake citations or incidents, always say if unsure.',
    ],
  },
  {
    title: 'Interactive research assistant for academics & students',
    problem:
      'Long PDFs and academic papers are hard to digest quickly when you also have deadlines.',
    does: [
      'Creates structured summaries: research question, methods, key findings, limitations.',
      'Helps generate comparison-style views across multiple papers.',
      'Suggests possible angles for coursework or reports based on the reading.',
    ],
    how: [
      'Upload PDFs into tools like NotebookLM or similar, then use structured prompts to pull out the same fields each time.',
      'A second prompt compares and contrasts papers on specific criteria.',
      'Important claims are cross-checked with original PDFs or web research tools.',
    ],
  },
  {
    title: 'AI career-agent for job search',
    problem:
      'Manually checking jobs, tailoring CVs and tracking applications across multiple sites is slow and error-prone.',
    does: [
      'Scans job descriptions and extracts key skills and keywords.',
      'Suggests CV bullet changes and cover-letter structure for a specific role.',
      'Summarises new matching roles into short, readable briefings.',
    ],
    how: [
      'Python or automation to collect job postings, then LLM prompts to extract skills and compare against my CV.',
      'Prompts focused on honest representation – no invented experience.',
      'Helps me track opportunities in a calmer, more structured way.',
    ],
  },
  {
    title: 'Event operations & communication helper',
    problem:
      'Events like open days or graduations involve repeated emails, checklists and information updates.',
    does: [
      'Drafts standard messages (confirmations, directions, reminders) in a consistent tone.',
      'Helps design checklists and run-of-day schedules for roles like registration or wayfinding.',
      'Supports simple label or asset text generation that I then format.',
    ],
    how: [
      'Prompt templates with audience, purpose, constraints and local context (venue, timings).',
      'RPA tools such as Power Automate or n8n when connecting to emails or docs.',
      'Humans (me and the team) always review messages before they go out.',
    ],
  },
];

// Safety / behaviour rules
const safetyDo = [
  'Use AI to organise information, draft structures and suggest wording.',
  'Design guardrails, checks and self-critique steps into my prompts.',
  'Treat outputs as drafts that I verify, edit and take responsibility for.',
  'Use tools like Perplexity and NotebookLM to keep sources visible where possible.',
];

const safetyDont = [
  'Upload highly sensitive data into random tools.',
  'Rely on AI to make final security decisions.',
  'Invent experience, skills or citations for CVs or reports.',
  'Hide AI use – I treat it as part of the workflow, not a secret.',
];

// Core safety & security principles around prompts
const securityPrinciples = [
  'Data minimisation – only send the data the model actually needs, prefer summaries or anonymised content for sensitive material.',
  'Prompt injection awareness – be careful with untrusted inputs and keep system instructions separate where possible.',
  'Access & logging – prefer workflows where I can see what was sent, what came back and why.',
  'Verification over trust – check important facts, numbers and citations with external sources or original documents.',
];

// How you debug / improve prompts
const debugSteps = [
  'Reproduce the issue with a small test input so I can see exactly where it breaks.',
  'Check whether the goal, constraints, examples or model choice are unclear.',
  'Tighten guardrails (for example: “if unsure, ask a question instead of guessing”).',
  'Add a self-critique step where the model checks its own output against a simple checklist.',
  'Try a different model if the task needs longer context, safer behaviour or better reasoning.',
  'Keep a small log of prompt changes so I know which version actually works better.',
];

export default function Prompts() {
  return (
  <div className="prompts-page mx-auto max-w-5xl px-4 py-10 space-y-16">

      {/* Hero section */}
      <section className="guna-prompts-hero">
        {/* soft background glow */}
        <div className="guna-prompts-hero-glow" />
        <div className="guna-prompts-hero-inner grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-start">
          {/* Left: main hero content */}
          <div className="space-y-5">
            {/* Tag / badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              <span>🧠</span>
              <span>Prompt engineering &amp; AI systems</span>
            </div>

            {/* Title + subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                <span className="block">Prompt engineering for</span>
                <span className="block guna-prompts-hero-highlight">
                  security, research and real workflows.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                I design multi-step prompts and AI systems to support{' '}
                <span className="font-medium">
                  cybersecurity work, academic research, job search and live events
                </span>{' '}
                – always with a human in the loop and a focus on security and reliability.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                This page is for people who want to see how I think about prompts and AI systems,
                not just which tools I use.
              </p>
            </div>

            {/* Focus chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="guna-hero-chip inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-100 hover:border-sky-400 hover:text-sky-100 transition"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: small snapshot card */}
          <aside className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-500/25 via-purple-500/15 to-emerald-400/20 opacity-60 blur-2xl pointer-events-none" />
            <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/85 px-5 py-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] space-y-4 text-sm text-slate-200">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-sky-300">
                  Prompt snapshot
                </p>
                <p className="mt-1 text-slate-100">
                  For me, prompt engineering is closer to systems design than “magic words”.
                </p>
              </div>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Define goals, constraints and data before writing prompts.</li>
                <li>• Use multiple steps, tools and models where it makes sense.</li>
                <li>• Keep humans in the loop for judgement and sign-off.</li>
                <li>• Log and refine prompts as the system evolves.</li>
              </ul>
              <p className="pt-1 text-[11px] text-slate-400">
                Used across: cyber reports · research · careers · events &amp; operations.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* What this looks like in practice */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          What this looks like in practice
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Over the last few years I&apos;ve used prompt engineering and AI systems to support my
          studies, work and community roles.
        </p>
        <ul className="space-y-1 text-sm text-slate-300 max-w-3xl">
          <li>
            • Designed and refined multi-step prompt workflows for{' '}
            <span className="font-medium">
              cybersecurity reports, coursework and research
            </span>
            .
          </li>
          <li>
            • Built and tested job-search and CV flows that cut manual checking time from{' '}
            <span className="font-medium">
              &quot;every day in browser tabs&quot; to a single summary
            </span>
            .
          </li>
          <li>
            • Used AI systems to support events (open days, graduations) with{' '}
            <span className="font-medium">clearer messages, checklists and templates</span>, while
            keeping final control with humans.
          </li>
          <li>
            • Developed a small library of prompt patterns (guardrails, self-critique,
            red-team/blue-team) that I <span className="font-medium">reuse and adapt</span> across
            projects.
          </li>
        </ul>
      </section>

      {/* How I think about prompt engineering */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          How I think about prompt engineering
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          I don&apos;t see prompts as one-off tricks. I treat them as part of a{' '}
          <span className="font-medium">system</span>: define the goal, set constraints, choose the
          right model, then design prompts, checks and hand-offs so the system is reliable and safe.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          {roles.map((role) => (
            <div
              key={role.title}
                  className="prompts-card rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 shadow-[0_0_24px_rgba(15,23,42,0.9)]"

            >
              <h3 className="font-semibold text-slate-100">{role.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How I use different models and tools */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          How I use different models and tools
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          I use multiple models because each one is good at different things. I care less about the
          brand and more about <span className="font-medium">fit for purpose, safety and speed</span>
          .
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          {modelUsage.map((m) => (
            <div
              key={m.heading}
                  className="prompts-card rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 shadow-[0_0_24px_rgba(15,23,42,0.9)]"

            >
              <h3 className="font-semibold text-slate-100">{m.heading}</h3>
              <p className="mt-1 text-sm text-slate-300">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt engineering patterns */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Prompt engineering patterns I use
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Over time I&apos;ve collected a small set of patterns I reuse across cyber, research,
          careers and events.
        </p>
        <ul className="space-y-1 text-sm text-slate-300 max-w-3xl">
          <li>
            • <span className="font-medium">Guardrail-first prompting</span> – start with what must
            not happen (privacy, hallucinations, tone, scope), define role, allowed data and what to
            do when the model is unsure.
          </li>
          <li>
            • <span className="font-medium">STOP → Structure → Steps</span> – break big tasks into
            small stages (understand → structure → draft → refine) so the workflow is explainable
            and debuggable.
          </li>
          <li>
            • <span className="font-medium">Knowledge bank + context windows</span> – use tools like
            NotebookLM or Perplexity as sources of truth, and prompt models to refer back to those
            sources instead of guessing.
          </li>
          <li>
            • <span className="font-medium">Red-team / blue-team prompts</span> – one prompt attacks
            the answer for weaknesses; another defends and fixes it, especially for cyber and
            safety-related work.
          </li>
          <li>
            • <span className="font-medium">Self-critique &amp; revision loops</span> – first prompt
            drafts, second critiques against a checklist or rubric, third rewrites based on that
            critique.
          </li>
          <li>
            • <span className="font-medium">Multi-tool chain pattern</span> – Model A (research) →
            Model B (drafting) → human review → final edits, instead of one fragile mega-prompt.
          </li>
        </ul>
      </section>

      {/* Before / after example */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          A simple before / after example
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Task: <span className="font-medium">Help me write a cybersecurity coursework report.</span>
        </p>
        <div className="grid gap-5 md:grid-cols-2 text-sm text-slate-300 max-w-4xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
            <h3 className="font-semibold text-slate-100">Before – one-shot prompt</h3>
            <p className="mt-2 text-xs sm:text-sm">
              &quot;Write my full report about this cyber case study.&quot;
            </p>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• No structure, no control, no idea which sources it&apos;s using.</li>
              <li>• High risk of hallucinations and wrong assumptions.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
            <h3 className="font-semibold text-slate-100">After – multi-step workflow</h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>1. Summarise the brief and constraints from my notes.</li>
              <li>
                2. Suggest a structured outline with sections for risk, impact, mitigation and
                reflection.
              </li>
              <li>
                3. Draft only the &quot;Risk &amp; Impact&quot; section with a neutral academic tone.
              </li>
              <li>4. Critique the draft against the rubric and list weaknesses.</li>
              <li>
                5. Rewrite the section, fixing weaknesses and highlighting anything needing manual
                checks.
              </li>
            </ul>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              My role: I design these steps, choose the model, and manually check and edit the final
              output before submitting anything.
            </p>
          </div>
        </div>
      </section>

      {/* Small prompt template example */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          A lightweight system prompt template I use
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Many workflows start from a simple, reusable structure like this:
        </p>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-300 max-w-3xl">
          <p>
            <span className="font-semibold">Role:</span> &quot;You are a careful assistant helping
            a cybersecurity student. You care about accuracy, clarity and safety.&quot;
          </p>
          <p className="mt-2">
            <span className="font-semibold">Context:</span> &quot;You will get: (1) a task/brief,
            (2) my notes, and sometimes (3) reference extracts from tools like Perplexity or
            NotebookLM.&quot;
          </p>
          <p className="mt-2">
            <span className="font-semibold">Rules:</span> &quot;If you are not sure, say you are not
            sure and ask a clarifying question. Do not invent citations, URLs, laws or CV experience.
            Prefer concise bullet points over long paragraphs unless I ask otherwise. Flag any
            security, privacy or ethical concerns you notice.&quot;
          </p>
          <p className="mt-2">
            <span className="font-semibold">Goal:</span> &quot;Your job is to help me structure,
            draft and critique my work, not to make final decisions.&quot;
          </p>
        </div>
      </section>

      {/* Example assistants / systems */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Example AI systems and assistants I&apos;ve worked on
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          A few examples of how I combine prompt engineering with tools, models and human review.
        </p>
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
          {assistants.map((a) => (
            <div
              key={a.title}
                  className="prompts-card flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 shadow-[0_0_24px_rgba(15,23,42,0.85)]"
     >
              <h3 className="font-semibold text-slate-100">{a.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                <span className="font-semibold text-slate-200">Problem:</span> {a.problem}
              </p>
              <div className="mt-2 space-y-1">
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  What the assistant does:
                </p>
                <ul className="text-xs sm:text-sm space-y-1">
                  {a.does.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  How I built it:
                </p>
                <ul className="text-xs sm:text-sm space-y-1">
                  {a.how.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security, safety and data in prompts */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Security, safety and data in my prompts
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Because of my cybersecurity background, I treat prompt engineering as part of a wider{' '}
          <span className="font-medium">risk surface</span>, not just a UX task.
        </p>
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-100">What I do</h3>
            <ul className="space-y-1">
              {safetyDo.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-100">What I don&apos;t do</h3>
            <ul className="space-y-1">
              {safetyDont.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="space-y-1 text-sm text-slate-300 max-w-3xl">
          {securityPrinciples.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </section>

      {/* How I debug and improve prompts */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          How I debug and improve prompts
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          When a prompt or workflow doesn&apos;t behave well, I treat it like a small debugging
          problem.
        </p>
        <ul className="space-y-1 text-sm text-slate-300 max-w-3xl">
          {debugSteps.map((step) => (
            <li key={step}>• {step}</li>
          ))}
        </ul>
      </section>

      {/* Where prompt engineering fits overall */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Where prompt engineering fits in my overall work
        </h2>
        <ul className="space-y-1 text-sm text-slate-300 max-w-3xl">
          <li>
            • <span className="font-medium">In cybersecurity:</span> I use prompt engineering to
            speed up reports, risk explanations and learning – not to replace analysis, blue-team
            thinking or real tools.
          </li>
          <li>
            • <span className="font-medium">In AI &amp; automation:</span> prompts are the logic
            layer that connects scripts, RPA tools and APIs into workflows that normal people can
            actually use.
          </li>
          <li>
            • <span className="font-medium">In events &amp; community work:</span> prompted systems
            support communication, planning and documentation, so volunteers and staff can focus on
            people, not templates.
          </li>
        </ul>
        <p className="text-sm text-slate-300 max-w-3xl">
          Prompt engineering is the bridge between my cybersecurity, automation and events work: it
          helps me turn scattered tools and tasks into systems that real people can trust and use.
        </p>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <Link
            to="/cyber"
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 hover:border-sky-400 hover:text-sky-200 transition"
          >
            View my Cybersecurity profile →
          </Link>
          <Link
            to="/automation"
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 hover:border-cyan-400 hover:text-cyan-200 transition"
          >
            View my AI &amp; Automation profile →
          </Link>
          <Link
            to="/events"
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 hover:border-emerald-400 hover:text-emerald-200 transition"
          >
            View my Events &amp; Community profile →
          </Link>
        </div>
      </section>
    </div>
  );
}

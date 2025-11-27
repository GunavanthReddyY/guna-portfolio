import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import gunaProfile from '../assets/guna-profile.jpg';

// Roles for the rotating badge
const roles = [
  'Cybersecurity analyst',
  'AI automation engineer',
  'Event manager',
  'Student ambassador',
  'Ethical hacker',
];

// Tech stack chips
const techChips = [
  {
    label: 'Python',
    gradient: 'from-sky-400/80 via-cyan-300/80 to-emerald-300/80',
  },
  {
    label: 'Ansible',
    gradient: 'from-emerald-400/80 via-lime-300/80 to-sky-300/80',
  },
  {
    label: 'Microsoft Defender EDR',
    gradient: 'from-sky-400/80 via-indigo-400/80 to-violet-400/80',
  },
  {
    label: 'AWS S3 / EC2',
    gradient: 'from-amber-400/80 via-orange-400/80 to-yellow-300/80',
  },
  {
    label: 'UiPath',
    gradient: 'from-emerald-400/80 via-teal-300/80 to-sky-300/80',
  },
  {
    label: 'Power Automate',
    gradient: 'from-sky-400/80 via-blue-400/80 to-indigo-400/80',
  },
  {
    label: 'n8n',
    gradient: 'from-pink-400/80 via-fuchsia-400/80 to-sky-300/80',
  },
  {
    label: 'ChatGPT / OpenAI',
    gradient: 'from-emerald-400/80 via-teal-300/80 to-cyan-300/80',
  },
  {
    label: 'Gemini / Google AI',
    gradient: 'from-sky-400/80 via-cyan-300/80 to-indigo-400/80',
  },
  {
    label: 'Perplexity & research tools',
    gradient: 'from-violet-400/80 via-fuchsia-400/80 to-sky-300/80',
  },
];

export default function About() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Rotate roles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-16">
      {/* Local nav for this page */}
      

      {/* Hero: title + intro + photo */}
      <section
        id="overview"
        className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-start"
      >
        {/* Text side */}
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-sky-400/90">About</p>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="guna-name-gradient block">
                {siteConfig.name}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              I&apos;m <span className="font-medium">{siteConfig.fullname}</span> (&quot;Guna&quot;),
              a <span className="font-medium">MSc Cybersecurity Management</span> student and
              Student Ambassador at Ravensbourne University London. I work at the intersection
              of <span className="font-medium">cybersecurity, AI automation and real-world events</span>,   
              helping teams keep systems secure, remove repetitive work and still communicate
              clearly with non-technical people.
            </p>
          </div>

          {/* Rotating roles badge */}
          <div className="mt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/60 bg-slate-950/80 px-3 py-1 pr-4 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Roles
              </span>
              <div className="relative h-4 overflow-hidden text-xs text-sky-100 min-w-[11rem]">
                <span
                  key={currentRoleIndex}
                  className="guna-role-fade inline-block"
                >
                  {roles[currentRoleIndex]}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <p>
              Recently I&apos;ve worked with <span className="font-medium">Nokia</span> as an intern and
              graduate apprentice, and with <span className="font-medium">Zoho</span> on machine learning
              projects. Alongside this, I support large open days, graduations and student
              events, handling registration, wayfinding and operations.
            </p>
            <p>
              This page is a quick overview of how I think, how I work and where I&apos;m heading next.
            </p>
          </div>

          {/* Quick info row */}
          <dl className="mt-4 grid gap-4 text-xs sm:text-sm text-slate-300 sm:grid-cols-3">
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
                Focus
              </dt>
              <dd className="mt-1">
                Cyber defence · AI workflows · Events &amp; ops
              </dd>
            </div>
          </dl>
        </div>

        {/* Photo / visual side */}
        <div className="flex justify-center md:justify-end">
          <div className="group relative w-76 sm:w-74">
            <div className="relative rounded-[0.75rem] border border-slate-950/95 bg-slate-950/80 backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(15,23,42,0.9)] transition transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_55px_rgba(56,189,248,0.55)]">
              {/* subtle gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-violet-500/8 to-emerald-500/12" />
              {/* profile image */}
              <img
                src={gunaProfile}
                alt="Portrait of Gunavanth Reddy"
                className="relative z-10 h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where I am now / how I work */}
      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
            Where I am now
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• MSc Cybersecurity Management student at Ravensbourne University London.</li>
            <li>• Experience with Nokia (intern & graduate apprentice) on software and security-related work.</li>
            <li>• Machine learning with Python internship at Zoho, plus AI and automation projects.</li>
            <li>• Student Ambassador, supporting open days, campus tours and prospective students.</li>
            <li>• Active in events and community roles through Rotaract and NSS volunteering.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
            How I like to work
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• <span className="font-medium">Security-first</span> – prefer strong foundations over shortcuts.</li>
            <li>• <span className="font-medium">Systems over tricks</span> – I care about how pieces fit, not just single tools.</li>
            <li>• <span className="font-medium">Calm under pressure</span> – useful in incidents, events and live deadlines.</li>
            <li>• <span className="font-medium">Automation mindset</span> – if a task repeats, I look for ways to reduce manual work.</li>
            <li>• <span className="font-medium">Human communication</span> – I enjoy explaining technical work in simple language.</li>
          </ul>
        </div>
      </section>

      {/* Skills overview + tech chips */}
      <section id="skills" className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Skills overview
        </h2>
        <div className="grid gap-5 md:grid-cols-2 text-sm text-slate-300">
          <div className="space-y-2">
            <h3 className="font-semibold">Security & infrastructure</h3>
            <ul className="space-y-1">
              <li>• Endpoint security and EDR (Microsoft Defender).</li>
              <li>• OS hardening, logging and basic blue-team practices.</li>
              <li>• Automation with Ansible for deployment and configuration.</li>
              <li>• Risk and impact thinking from academic cyber projects.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">AI, ML & automation</h3>
            <ul className="space-y-1">
              <li>• Machine learning with Python foundations.</li>
              <li>• RPA tools (UiPath, Power Automate, n8n) and scripting small automations.</li>
              <li>• Using generative AI tools and AI agents to support research and workflows.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Prompt engineering & AI workflows</h3>
            <ul className="space-y-1">
              <li>• Designing multi-step prompts for cyber reports and academic work.</li>
              <li>• Building AI workflows for CVs, job descriptions and research.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Events, community & leadership</h3>
            <ul className="space-y-1">
              <li>• Registration desks, queue management and wayfinding.</li>
              <li>• Supporting graduation ceremonies, open days and cultural events.</li>
              <li>• Rotaract leadership roles and NSS Best Volunteer recognition.</li>
            </ul>
          </div>
        </div>

        {/* Tech stack chips */}
        <div className="pt-2 space-y-2">
          <h3 className="text-sm font-semibold text-slate-100">
            Tools &amp; tech I use
          </h3>
          <div className="flex flex-wrap gap-2">
            {techChips.map((chip) => (
              <span
                key={chip.label}
                className="relative inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/90 px-3 py-1 text-[11px] text-slate-100 overflow-hidden shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(56,189,248,0.6)] cursor-default"
              >
                <span
                  className={`absolute inset-0 -z-10 rounded-full opacity-75 blur-sm bg-gradient-to-r ${chip.gradient}`}
                  aria-hidden="true"
                />
                <span className="relative">{chip.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education timeline + CV */}
      <section id="education" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
              Education
            </h2>
            <p className="text-sm text-slate-300">
              A quick timeline of my formal education so far.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
            >
              Download full CV (PDF)
            </a>
          </div>
        </div>

        <div className="border-l border-slate-800/80 pl-5 space-y-5 text-sm text-slate-300">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              2025 – Present
            </p>
            <p className="mt-1 font-semibold">MSc Cybersecurity Management</p>
            <p className="text-slate-400">Ravensbourne University London</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              2020 – 2024
            </p>
            <p className="mt-1 font-semibold">
              B.Tech Electronics and Communication Engineering
            </p>
            <p className="text-slate-400">
              Hindustan Institute of Technology and Science (Hindustan University)
            </p>
            <p className="text-xs text-slate-500 mt-1">CGPA 8.13 / 10</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              2018 – 2020
            </p>
            <p className="mt-1 font-semibold">Intermediate (MPC)</p>
            <p className="text-slate-400">Narayana Junior College</p>
            <p className="text-xs text-slate-500 mt-1">Score 8.2 / 10</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              2018
            </p>
            <p className="mt-1 font-semibold">SSC</p>
            <p className="text-slate-400">Narayana E-Techno School</p>
            <p className="text-xs text-slate-500 mt-1">Score 9.8 / 10</p>
          </div>
        </div>
      </section>

      {/* What I'm looking for next */}
      <section id="next" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          What I&apos;m looking for next
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          I&apos;m interested in opportunities that connect <span className="font-medium">security, AI and real-world operations</span>:
          early-career roles or internships in cybersecurity, AI automation, security-focused AI work or
          event operations for technology and education environments. I&apos;m happy to share more detail
          on any project in this portfolio.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
          >
            Contact me
          </Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-4 py-2 hover:border-sky-500 hover:text-sky-300 transition"
          >
            <span>View LinkedIn</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

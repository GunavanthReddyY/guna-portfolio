import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const heroTags = [
  'Blue team',
  'Defender EDR',
  'Security automation',
  'Nokia experience',
  'Playbook mindset'
  
];


const coreTools = [
  'Microsoft Defender EDR',
  'OS hardening & logging',
  'Ansible automation',
  'Windows & Nokia OS',
  'AWS (S3 / EC2)',
  'VMware homelab',
];

const activities = [
  'Single-person ownership for EDR rollout and monitoring at Nokia.',
  'Writing and running Ansible playbooks for security deployment.',
  'Investigating automation failures (network / ping issues) and fixing root causes.',
  'Supporting incident-style work while staying calm under pressure.',
];

const labsAndPractice = [
  'Bug bounty practice on platforms like Bugcrowd.',
  'TryHackMe labs and CTF-style learning.',
  'Homelab experiments using VMware and cloud services.',
  'University cyber projects and risk assessments.',
];

const learning = [
  'MSc Cybersecurity Management at Ravensbourne University London.',
  'Studying for CEH and ISC2 Certified in Cybersecurity (CC).',
  'Strengthening blue-team fundamentals (logging, SLM, detection).',
];

const metrics = [
  {
    label: 'Environment',
    value: 'Multi-endpoint Nokia setup with EDR and hardening work.',
  },
  {
    label: 'Automation',
    value: 'Several Ansible playbooks used and maintained for security tasks.',
  },
  {
    label: 'Practice',
    value: 'Active use of Bugcrowd and TryHackMe for continuous learning.',
  },
];

const aiForSecurityPoints = [
  'Using GPT-style models to draft incident summaries and reports from my own notes.',
  'Turning checklists and runbooks into structured prompts for faster response.',
  'Using AI tools to explore attacker/defender scenarios and practise explanations.',
];

export default function CyberSecurity() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-16">
      {/* Hero section */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-start">
        {/* Text side */}
        <div className="space-y-5">
          {/* Badge-style label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.45)]">
            <span>🛡️</span>
            <span>Cybersecurity profile</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
              Defensive security, powered by automation
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Early-career cyber analyst and{' '}
              <span className="font-medium">MSc Cybersecurity Management</span>{' '}
              student, with Nokia experience in{' '}
              <span className="font-medium">Microsoft Defender EDR</span>, OS
              hardening and{' '}
              <span className="font-medium">Ansible-based security automation</span>.
            </p>
            <p className="text-sm text-slate-400 max-w-xl">
              I focus on blue-team work: keeping endpoints protected, hardening
              systems, improving logging and turning repeat security tasks into
              reliable playbooks.
            </p>
          </div>

          {/* Hero tags */}
          {/* Hero tags with animated glow row */}
{/* Hero tags – individual glowing chips */}
<div className="pointer-events-none absolute inset-x-0 -inset-y-3 rounded-full guna-pill-row-glow blur-2 opacity-80" />

<div className="flex flex-wrap gap-2 pt-3">
  {heroTags.map((tag) => (
    <span key={tag} className="guna-hero-chip">
      {tag}
    </span>
  ))}
</div>



          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
            >
              Download cyber CV (PDF)
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-500 hover:text-sky-300 transition"
            >
              Contact about cyber roles
            </Link>
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
                Cyber defence · EDR · Security automation
              </dd>
            </div>
          </dl>
        </div>

        {/* Focus card on the right */}
        <aside className="relative">
          <div className="guna-focus-glow absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-emerald-400/10 pointer-events-none" />
          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/80 px-5 py-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <div className="space-y-4 text-sm text-slate-200">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Cyber Snapshot
                </p>
                <ul className="mt-2 space-y-1 text-slate-200">
                  <li>• Blue-team operations & endpoint defence</li>
                  <li>• OS hardening, logging and SLM</li>
                  <li>• Security automation with Ansible</li>
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Core tools
                </p>
                <ul className="mt-2 space-y-1 text-slate-200">
                  {coreTools.map((tool) => (
                    <li key={tool}>• {tool}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Base
                </p>
                <p className="mt-1 text-slate-200">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Skills & tools section */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Security skills & tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
          <div className="space-y-2">
            <h3 className="font-semibold">Endpoint & detection</h3>
            <ul className="space-y-1">
              <li>• Microsoft Defender EDR configuration and monitoring.</li>
              <li>• Handling alerts, triage and escalation with a calm mindset.</li>
              <li>• Basic investigation for suspicious activity on endpoints.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Hardening & logging</h3>
            <ul className="space-y-1">
              <li>• OS hardening and policy configuration for Windows / Nokia OS.</li>
              <li>• Logging / SLM configuration to support blue-team visibility.</li>
              <li>• Thinking in terms of risk, impact and likelihood.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Automation & infrastructure</h3>
            <ul className="space-y-1">
              <li>• Writing and maintaining Ansible playbooks for security tasks.</li>
              <li>• Experience with AWS (S3 / EC2) in student projects.</li>
              <li>• VMware homelab work for testing and learning.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Hands-on practice</h3>
            <ul className="space-y-1">
              <li>• TryHackMe labs and platform-based training.</li>
              <li>• Bug bounty exploration with platforms like Bugcrowd.</li>
              <li>• Supporting academic cyber projects and reports.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nokia experience */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Nokia experience – cyber angle
        </h2>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-5 text-sm text-slate-300 shadow-[0_0_30px_rgba(15,23,42,0.8)]">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Aug 2024 – May 2025 · Intern & Graduate Apprentice
          </p>
          <p className="mt-1 font-semibold text-slate-100">
            Cybersecurity-focused work at Nokia (EDR, automation & hardening)
          </p>
          <ul className="mt-3 space-y-1">
            {activities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-3 text-slate-400">
            This role gave me experience acting as the main person responsible
            for security tasks, including responding when automation failed and
            communicating status to my manager.
          </p>
        </div>

        {/* Mini incident story card */}
        <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 px-5 py-4 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Example incident: EDR automation failure
          </p>
          <p className="mt-2 text-slate-200">
            During an Ansible-driven Defender EDR rollout, some endpoints stopped
            reporting correctly due to network and ping issues.
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Checked connectivity and host reachability for affected machines.</li>
            <li>• Reviewed Ansible playbook logs and variables to find where the run broke.</li>
            <li>• Updated configuration and re-ran playbooks until all endpoints were healthy.</li>
          </ul>
          <p className="mt-2 text-slate-400">
            Result: automation was restored, endpoints reported correctly again,
            and the issue was closed with positive feedback from my manager.
          </p>
        </div>
      </section>

      {/* Labs, projects, practice */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Labs, projects & practice
        </h2>
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
          <div className="space-y-2">
            <h3 className="font-semibold">Self-driven practice</h3>
            <ul className="space-y-1">
              {labsAndPractice.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">University & portfolio work</h3>
            <ul className="space-y-1">
              <li>• Coursework on financial risk and ransomware impact.</li>
              <li>• Group projects looking at security controls and trade-offs.</li>
              <li>• Ongoing portfolio work combining security with AI and events.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How I use AI in security work */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          How I use AI in security work
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          I treat AI tools as assistants for thinking, documentation and practice –
          not as a replacement for core security skills.
        </p>
        <ul className="space-y-1 text-sm text-slate-300">
          {aiForSecurityPoints.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 text-sm pt-1">
          <Link
            to="/automation"
            className="inline-flex items-center rounded-full border border-sky-500/70 px-4 py-2 hover:bg-slate-900/80 hover:text-sky-200 transition"
          >
            <span>View my AI &amp; automation profile</span>
            <span className="ml-1">→</span>
          </Link>
        </div>
      </section>

      {/* Snapshot metrics */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Snapshot metrics
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 text-sm text-slate-300">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-slate-100">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning & certifications */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          Learning & certifications
        </h2>
        <ul className="space-y-1 text-sm text-slate-300">
          {learning.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

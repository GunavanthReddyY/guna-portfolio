import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-20">
      {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">

          <p className="text-sm uppercase tracking-[0.2em] text-sky-400/80">
            Portfolio
          </p>
              <h1 className="space-y-2">
      <span className="block text-sm sm:text-base font-medium text-sky-300">
        Cybersecurity, AI automation &amp; Real-world events
      </span>

      {/* BIG colourful animated name */}
      <span className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight guna-name-gradient">
        {siteConfig.fullname}
      </span>

      <span className="block text-lg sm:text-xl text-sky-100 font-bold tracking-tight guna-name-gradient">
        One Engineer. One Portfolio.
      </span>
    </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            I&apos;m <span className="font-medium">{siteConfig.fullname} (&quot;Guna&quot;)</span>, a Student Ambassador and{' '}
            <span className="font-medium">MSc Cybersecurity Management</span> student at Ravensbourne University London 🎓.
            I&apos;ve worked with <span className="font-medium">Nokia</span> and <span className="font-medium">Zoho</span> on software and ML projects, using
            generative AI tools, RPA and AI agents in real environments, and I help run large
            university and community events. This portfolio shows how I approach security,
            automation, prompt systems and operations across different contexts.
          </p>
                    <div className="flex flex-wrap gap-3">
            <a
              href="#profiles"
              className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
            >
              View profiles
            </a>
            <Link
              to="/cyber"
              className="inline-flex items-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-sky-500 hover:text-sky-300 transition"
            >
              View work
            </Link>
          </div>

          {/* Worked-with chips + CV link */}
                    {/* Worked-with chips + CV link */}
          <div className="space-y-2 text-xs sm:text-sm">
            
            <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Worked with
            </p>
            <div className="flex flex-wrap gap-2">
              
              {[
                { name: 'Nokia', icon: '📶' },
                { name: 'Zoho', icon: '⚙️' },
                { name: 'Hindustan University', icon: '🎓' },
                { name: 'Ravensbourne University London', icon: '🎓' },
              ].map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/90 px-3 py-1 text-[11px] text-slate-200 shadow-[0_0_8px_rgba(15,23,42,0.9)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(56,189,248,0.7)]"
      >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
            <div>
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-sky-300 hover:text-sky-200"
              >
                <span>View full CV</span>
                <span>→</span>
              </a>
            </div>
          </div>


        </div>

        {/* Simple visual / info card */}
                {/* Focus / profile card */}
        <div className="relative">
          {/* soft animated glow behind the card */}
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-violet-500/20 to-emerald-500/30 blur-3xl opacity-60 guna-focus-glow"
            aria-hidden="true"
          />

          {/* main card */}
          <div className="relative rounded-[1.75rem] border border-slate-800/80 bg-slate-950/80 backdrop-blur-xl px-5 py-5 flex flex-col gap-5 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            {/* Focus pills */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: '🛡️', label: 'Cyber defence' },
                  { icon: '🤖', label: 'AI workflows' },
                  { icon: '🎪', label: 'Live events' },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-100"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* separator line */}
            <div className="h-px bg-gradient-to-r from-sky-500/40 via-violet-500/40 to-emerald-500/40" />

            {/* Current + Base */}
            <div className="space-y-3 text-xs text-slate-200">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Current
                </p>
                <p className="mt-1 leading-relaxed">
                  MSc Cybersecurity Management student &amp; Student Ambassador at
                  Ravensbourne University London.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Base
                </p>
                <p className="mt-1">London, UK</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Profiles section */}
      <section id="profiles" className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Four profiles, one engineer</h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
          I don&apos;t see these as separate lives. Cybersecurity, AI automation, prompt systems
          and events are all different ways of working with systems and people.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: 'Cybersecurity',
              body:
                'Blue-team focused, learning ethical hacking. EDR, Ansible, OS hardening and practical risk analysis.',
              to: '/cyber',
            },
            {
              title: 'AI & Automation',
              body:
                'Small bots, ML foundations and RPA tools to remove repetitive work and support secure workflows.',
              to: '/automation',
            },
            {
              title: 'Prompt Engineering',
              body:
                'Multi-step prompt systems for cyber reports, research and ATS-aware applications.',
              to: '/prompt',
            },
            {
              title: 'Events',
              body:
                'Open days, graduations and cultural fests where I keep registrations, queues and guests under control.',
              to: '/events',
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-sky-500/60 hover:bg-slate-900/80 transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-sky-300">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300">{card.body}</p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs text-sky-300">
                View {card.title}
                <span className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured highlights */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">A few examples</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Stabilising EDR automation at Nokia',
              body:
                'Traced failing Ansible-based Microsoft Defender EDR rollouts to network issues and verified fixed endpoints.',
              to: '/cyber',
            },
            {
              title: 'Ransomware impact for decision-makers',
              body:
                'Mapped a MediSecure-style ransomware scenario into clear technical, operational and financial risk.',
              to: '/cyber',
            },
            {
              title: 'Prompt workflow for cyber reports',
              body:
                'Built a multi-step AI workflow for research, risk tables and writing that follows academic rubrics.',
              to: '/prompt',
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-sky-500/60 hover:bg-slate-900/80 transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold group-hover:text-sky-300">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300">{item.body}</p>
              </div>
              <span className="mt-4 inline-flex items-center text-[11px] text-sky-300">
                See more
                <span className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Snapshot</h2>
        <div className="grid gap-5 md:grid-cols-3 text-sm text-slate-300">
          <div>
            <h3 className="font-semibold mb-2">Security & AI</h3>
            <ul className="space-y-1">
              <li>• Nokia intern & graduate apprentice</li>
              <li>• Zoho ML intern</li>
              <li>• MSc Cyber Security Management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Automation & tools</h3>
            <ul className="space-y-1">
              <li>• Python, ML with Python</li>
              <li>• UiPath, Power Automate, n8n</li>
              <li>• AWS S3/EC2, bots & notifications</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Community & events</h3>
            <ul className="space-y-1">
              <li>• Student Ambassador</li>
              <li>• Rotaract Vice President</li>
              <li>• NSS Best Volunteer, cultural fests</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="border border-slate-800 rounded-3xl bg-slate-900/60 p-6 space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Let&apos;s talk</h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
          If you&apos;d like to discuss security work, AI workflows or event operations, I&apos;m happy
          to share more detail or walk through specific projects.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1 hover:text-sky-300"
          >
            📧 {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1 hover:text-sky-300"
          >
            📱 {siteConfig.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-4 py-2 hover:border-sky-500 hover:text-sky-300 transition"
          >
            Go to contact page →
          </Link>
        </div>
      </section>
    </div>
  );
}

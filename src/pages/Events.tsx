import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const heroChips = [
  'Blood donation & medical camps',
  'NSS & Swachh Bharat internships',
  'Campus fests & convocations',
  'Beach clean-ups & awareness runs',
  'London student ambassador events',
];

const awardHighlights = [
  {
    title: 'International Coastal Cleanup 6K Run finisher',
    place: 'Chennai – Besant Nagar beach',
    year: '2022',
    detail:
      'Completed a 6K awareness run and joined coastal cleanup activities supporting marine conservation.',
  },
  {
    title: 'Multiple Certificates of Appreciation – Blood Donation',
    place: 'Madras Voluntary Blood Bureau & TN State Blood Transfusion Council',
    year: '2022–2023',
    detail:
      'Recognised for organising and donating in 5–6 blood donation camps at Hindustan University over ~3 years.',
  },
  {
    title: 'Swachh Bharat Summer Internship & Special Camp',
    place: 'Hindustan Institute of Technology & Science',
    year: '2022-2024',
    detail:
      'Field work and village-level cleanliness drives under Swachh Bharat – including awareness, surveys and clean-up activities.',
  },
  {
    title: 'NSS / Rotaract volunteering recognition',
    place: 'Hindustan University',
    year: '2022–2024',
    detail:
      'Appreciation for consistent support across rallies, walkathons, medical camps and campus drives.',
  },
];

const eventStories = [
  {
    title: 'Blood donation camps – organiser & donor',
    tag: 'Health • Leadership',
    summary:
      'Coordinated and volunteered at 5–6 blood donation camps on campus over roughly three years, working with Rotaract, NSS and external blood banks.',
    bullets: [
      'Handled pre-event awareness, registrations and basic crowd flow.',
      'Worked with medical teams on smooth donor movement and post-donation care.',
      'Helped with certificate distribution and post-event reporting.',
    ],
  },
  {
    title: 'Swachh Bharat internships & NSS village camps',
    tag: 'NSS • Swachh Bharat',
    summary:
      'Completed Swachh Bharat Summer Internship and NSS special camps focused on sanitation, awareness and village engagement.',
    bullets: [
      'Participated in village-level cleanliness drives and door-to-door awareness.',
      'Supported competitions and activities under Swachh Bharat campaigns.',
      'Helped coordinate logistics for multi-day camps as an NSS volunteer.',
    ],
  },
  {
    title: 'International Coastal Cleanup 6K Run & beach drive',
    tag: 'Environment • Coastal cleanup',
    summary:
      'Joined the International Coastal Cleanup Day 6K Run in Chennai and supported the associated beach cleaning drive.',
    bullets: [
      'Participated in a public 6K run to raise awareness on marine pollution.',
      'Joined post-run beach cleaning alongside volunteers and organisers.',
    ],
  },
  {
    title: 'Convocation & Yaarona cultural fest operations',
    tag: 'Convocation • Fest operations',
    summary:
      'Volunteered at the 12th Convocation and supported Hindustan University’s “Yaarona” cultural fests (2023 & 2024) as an event coordinator.',
    bullets: [
      'Helped with registration, guest handling and student flow during convocation.',
      'Coordinated segments during college fests, supporting stage and crowd management.',
      'Worked closely with faculty and organising committees under time pressure.',
    ],
  },
  {
    title: 'First-aid & CPR training series',
    tag: 'Health • Training',
    summary:
      'Supported and helped coordinate first-aid and CPR training sessions for students over multiple days.',
    bullets: [
      'Coordinated 3-day first-aid training for students on campus.',
      'Joined CPR step-by-step awareness sessions to encourage emergency readiness.',
      'Helped manage batches, room changes and communication with participants.',
    ],
  },
  {
    title: 'Awareness rallies & campus drives',
    tag: 'Awareness • Rallies',
    summary:
      'Supported multiple awareness rallies and campus drives focused on safety, health and national campaigns.',
    bullets: [
      'Joined traffic and drug awareness rallies and End Polio formation/drives.',
      'Supported walkathons, Har Ghar Tiranga and campus cleaning drives.',
      'Helped with placards, crowd guidance and keeping energy positive during long events.',
    ],
  },
];

const timeline = [
  {
    period: '2025 – Present',
    title: 'Student Ambassador, Ravensbourne University London',
    location: 'London, UK',
    detail:
      'Support open days, campus tours and prospective student events – representing MSc Cybersecurity Management and helping visitors feel welcome.',
    current: true,
  },
  {
    period: '2023 – 2024',
    title: 'Vice President, Rotaract Club of Hindustan University',
    location: 'Chennai, India',
    detail:
      'Led club activities across blood donation, community outreach and awareness rallies; supported coordination with Rotary and university teams.',
  },
  {
    period: '2021 – 2023',
    title: 'NSS Volunteer & Swachh Bharat Intern',
    location: 'Hindustan Institute of Technology & Science',
    detail:
      'Participated in and organised NSS camps, Swachh Bharat internships, campus cleaning drives and public awareness rallies.',
  },
  {
    period: '2021 – 2024',
    title: 'Event Volunteer – Rotaract & campus programmes',
    location: 'Chennai, India',
    detail:
      'Helped run medical camps, Diwali Kondattam, traffic & drug awareness rallies, walkathons, Har Ghar Tiranga, Moonbound India: Chandrayaan-3 outreach and other drives.',
  },
];

const motoLines = [
  'People first – certificates and photos are secondary.',
  'Calm on the ground – especially when crowds, guests or timing get stressful.',
  'Clear roles and checklists so volunteers know exactly what to do.',
  'Respect for partner organisations, from blood banks to local authorities.',
];

const impactStats = [
  {
    label: 'Blood donation & medical camps',
    value: '5–6',
    note: 'Volunteer and coordinator roles across ~3 years',
  },
  {
    label: 'Awareness events & rallies',
    value: '10+',
    note: 'Traffic, drug awareness, End Polio, Har Ghar Tiranga, walkathons',
  },
  {
    label: 'Camps & internships',
    value: '3+',
    note: 'NSS special camps and Swachh Bharat internships',
  },
  {
    label: 'Fests & ceremonies',
    value: '6+',
    note: 'Convocation, Yaarona college fests, Diwali Kondattam & more',
  },
];

export default function Events() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-16">
      {/* Hero section */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-start">
        {/* Left – main text */}
        <div className="space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-slate-950/85 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-200 guna-events-hero-badge">
            <span>🎪</span>
            <span>Events &amp; community profile</span>
          </div>

          {/* Title + subline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Community work that&apos;s real on the ground,
              <span className="block md:inline"> not just in photos.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              3+ years of <span className="font-medium">NSS, Rotaract and community volunteering</span> – from blood
              donation camps and Swachh Bharat internships to convocation operations, college fests and coastal
              clean-ups.
            </p>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Currently a <span className="font-medium">Student Ambassador at Ravensbourne University London</span>,
              supporting open days, campus tours and prospective students while I study MSc Cybersecurity Management.
            </p>
          </div>

          {/* Hero chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {heroChips.map((chip) => (
              <span key={chip} className="guna-hero-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right – highlight card */}
        <aside className="relative">
          <div className="guna-events-glow absolute -inset-4 rounded-[2.2rem] pointer-events-none" />
          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/90 px-5 py-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] text-sm text-slate-200 space-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                Volunteering snapshot
              </p>
              <p className="mt-1 text-slate-100">
                A quick view of how I show up in community and campus work.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-3 text-xs sm:text-sm">
              <div>
                <dt className="text-slate-400 uppercase tracking-[0.14em] text-[10px]">
                  Blood donation
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-50">5–6</dd>
                <dd className="text-[11px] text-slate-400">Camps organised &amp; volunteered</dd>
              </div>
              <div>
                <dt className="text-slate-400 uppercase tracking-[0.14em] text-[10px]">
                  Swachh Bharat / NSS
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-50">3+</dd>
                <dd className="text-[11px] text-slate-400">Internships &amp; special camps</dd>
              </div>
              <div>
                <dt className="text-slate-400 uppercase tracking-[0.14em] text-[10px]">
                  Events &amp; Services
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-50">30+</dd>
                <dd className="text-[11px] text-slate-400">Rallies, drives, &amp; campus events,Fests</dd>
              </div>
            </dl>
            <p className="text-[12px] text-slate-400">
              Focus: <span className="font-medium text-slate-200">health, cleanliness, awareness and student
              experience</span> – with clear roles, checklists and calm operations.
            </p>
          </div>
        </aside>
      </section>

      {/* Impact strip – quick numbers bar */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-emerald-100">
          Impact at a glance
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Rough numbers, but they show the kind of work I keep showing up for.
        </p>
        <div className="guna-impact-strip">
          {impactStats.map((item) => (
            <div key={item.label} className="guna-impact-pill">
              <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                {item.label}
              </p>
              <p className="text-xl font-semibold text-slate-50 mt-1">
                {item.value}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Where I show up */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          Where I show up
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Most of my work sits at the intersection of <span className="font-medium">health, cleanliness,
          awareness and student life</span>.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 guna-section-fade">
            <h3 className="font-semibold text-slate-100">Health &amp; blood donation</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              <li>• Blood donation camps – organiser &amp; donor.</li>
              <li>• Medical camps, Wellcare outreach and basic wellness drives.</li>
              <li>• First-aid and CPR awareness sessions.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 guna-section-fade">
            <h3 className="font-semibold text-slate-100">Cleanliness &amp; environment</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              <li>• Swachh Bharat internships and NSS village camps.</li>
              <li>• Campus and beach cleaning drives.</li>
              <li>• Competitions and awareness activities.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 guna-section-fade">
            <h3 className="font-semibold text-slate-100">Events, rallies &amp; fests</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              <li>• Convocations, cultural fests and Diwali Kondattam.</li>
              <li>• Traffic, drug awareness and polio rallies.</li>
              <li>• Walkathons and Har Ghar Tiranga campaigns.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards & headline achievements */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          Awards &amp; headline achievements
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          A few snapshots from certificates and appreciation letters linked to my community work.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          {awardHighlights.map((award) => (
            <div
              key={award.title}
              className="rounded-2xl border border-emerald-500/40 bg-slate-950/85 px-4 py-4 shadow-[0_0_28px_rgba(16,185,129,0.35)] guna-award-card"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                {award.year}
              </p>
              <h3 className="mt-1 font-semibold text-slate-50">{award.title}</h3>
              <p className="text-xs text-slate-400">{award.place}</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected event stories */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          Selected event stories
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          A few examples of where I&apos;ve had responsibility on the ground.
        </p>
        <div className="grid gap-5 md:grid-cols-2 text-sm text-slate-300">
          {eventStories.map((story) => (
            <div
              key={story.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/85 px-4 py-4 shadow-[0_0_24px_rgba(15,23,42,0.85)] guna-section-fade"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-100">{story.title}</h3>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-200">
                  {story.tag}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">{story.summary}</p>
              <ul className="mt-2 space-y-1 text-xs sm:text-sm">
                {story.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline of roles */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          Timeline of roles &amp; responsibility
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          How my community work has grown from individual volunteering to leadership roles.
        </p>

        {/* Quick roles summary strip */}
        <div className="mt-3 rounded-2xl border border-emerald-500/40 bg-slate-950/80 px-4 py-3 text-xs sm:text-sm text-slate-200 guna-section-fade">
          <p className="font-medium text-emerald-100">
            Quick roles summary
          </p>
          <p className="mt-1">
            <span className="font-semibold">Current:</span>{' '}
            Student Ambassador – Ravensbourne University London (2025 – present)
          </p>
          <p className="mt-0.5">
            <span className="font-semibold">Previous:</span>{' '}
            Vice President – Rotaract Club of Hindustan University (2023 – 2024)
          </p>
          <p className="mt-0.5">
            <span className="font-semibold">Foundation:</span>{' '}
            NSS volunteer &amp; Swachh Bharat internships (2021 – 2023).
          </p>
        </div>

        <div className="relative pl-5 text-sm text-slate-300">
          <div className="guna-timeline-line" />
          <div className="space-y-5">
            {timeline.map((item) => (
              <div key={item.period} className="relative pl-4">
                <div className="guna-timeline-dot" />
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                  {item.period}{' '}
                  {item.current && (
                    <span className="ml-1 text-[10px] text-emerald-200">(current)</span>
                  )}
                </p>
                <h3 className="mt-1 font-semibold text-slate-50">{item.title}</h3>
                <p className="text-xs text-slate-400">{item.location}</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* London Student Ambassador highlight */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          Student Ambassador (current)
        </h2>
        <div className="rounded-2xl border border-sky-500/50 bg-slate-950/85 px-4 py-4 shadow-[0_0_30px_rgba(56,189,248,0.45)] guna-section-fade text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-300">
            Ravensbourne University London · MSc Cybersecurity Management
          </p>
          <p className="mt-2">
            As a <span className="font-medium">Student Ambassador</span>, I help with open days, campus tours,
            applicant events and online sessions – welcoming prospective students, answering questions and sharing
            honest experiences of studying and living in London.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            I treat it like an events role: clear run-of-day plans, calm communication and making sure visitors leave
            with fewer doubts than when they arrived.
          </p>
        </div>
      </section>

      {/* How I like to run events */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          How I like to run events
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          My approach to events is similar to my approach to cybersecurity and automation –{' '}
          <span className="font-medium">systems over chaos, people over ego</span>.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
            <h3 className="font-semibold text-slate-100">My moto / principles</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              {motoLines.map((line) => (
                <li key={line}>• {line}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
            <h3 className="font-semibold text-slate-100">On-the-day style</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              <li>• Arrive early, walk the route, test signage and flows.</li>
              <li>• Keep a simple checklist for myself and volunteers.</li>
              <li>• Stay calm with guests and delegates, even when timings slip.</li>
              <li>• Capture small lessons after each event for next time.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How this connects to my tech & security work */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          How this connects to my tech &amp; security work
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          My events and community work is not separate from my cybersecurity and AI profile – it&apos;s where I
          actually practise calm operations, communication and systems thinking with real people.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
            <h3 className="font-semibold text-slate-100">For cybersecurity</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              <li>• Staying calm when things go wrong or timings slip.</li>
              <li>• Following procedures and checklists under pressure.</li>
              <li>• Explaining things clearly to non-technical people.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
            <h3 className="font-semibold text-slate-100">For AI &amp; automation</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              <li>• Seeing which tasks are repeatable and can be turned into flows.</li>
              <li>• Designing simple systems for registrations, reminders and follow-ups.</li>
              <li>• Using AI carefully to draft messages and documents, not replace humans.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
            <h3 className="font-semibold text-slate-100">For who I am as a person</h3>
            <ul className="mt-1 space-y-1 text-xs sm:text-sm">
              <li>• Showing up consistently for community over several years.</li>
              <li>• Balancing studies, tech work and service without dropping quality.</li>
              <li>• Keeping people-first values at the centre of my career.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I'm looking for next */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-100">
          What I&apos;m looking for next
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          I&apos;m interested in opportunities that connect{' '}
          <span className="font-medium">events, community work and technology</span> – from university events and
          outreach roles to conferences and tech community programmes.
        </p>
        <div className="flex flex-wrap gap-3 text-sm pt-1">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-emerald-400 px-4 py-2 font-medium text-slate-950 hover:bg-emerald-300 transition"
          >
            Contact me about events &amp; community roles
          </Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 hover:border-emerald-400 hover:text-emerald-200 transition"
          >
            View more on LinkedIn →
          </a>
        </div>
      </section>
    </div>
  );
}

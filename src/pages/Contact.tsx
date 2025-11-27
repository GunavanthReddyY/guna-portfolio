// src/pages/Contact.tsx

import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

// 🔹 1) Put your real Formspree endpoint here
// Example: 'https://formspree.io/f/mabcdxyz'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqaobdob';

const helpChips = [
  'Cybersecurity role / project',
  'AI & automation workflow',
  'Prompt engineering / AI systems',
  'Events & community work',
  'Something else that fits',
];

const contactTopics = [
  {
    title: 'Cybersecurity roles & projects',
    body: [
      'Internships or analyst roles with a blue-team / defence focus.',
      'Security-focused AI or automation ideas.',
      'Student projects, lab work or research that needs structure.',
    ],
  },
  {
    title: 'AI, automation & prompt engineering',
    body: [
      'Workflows or assistants for reports, research or operations.',
      'Using LLMs with Python, RPA or low-code tools.',
      'Prompt-heavy work that needs guardrails, safety and structure.',
    ],
  },
  {
    title: 'Events & community work',
    body: [
      'University events, open days, graduations or cultural fests.',
      'Community initiatives around health, cleanliness or awareness.',
      'Roles where calm operations and clear checklists matter.',
    ],
  },
  {
    title: 'Something else that connects people & systems',
    body: [
      'Collaborations that mix security, AI and community.',
      'Speaking, mentoring or student-level support.',
      'Anything where my mix of cyber, AI and events might help.',
    ],
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 🔹 2) Small helper so we can disable button while sending
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔹 3) REAL submit: send to Formspree via fetch
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-16">
      {/* Hero section */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-start">
        {/* Left – text side */}
        <div className="space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-slate-950/85 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-sky-200 guna-contact-badge shadow-[0_0_22px_rgba(56,189,248,0.5)]">
            <span>📬</span>
            <span>Contact · Let&apos;s talk</span>
          </div>

          {/* Title + intro */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              <span className="block">
                From cyber defence to AI workflows
              </span>
              <span className="block">
                and live events —{' '}
                <span className="guna-ai-hero-line2">let&apos;s talk.</span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              I&apos;m open to conversations about{' '}
              <span className="font-medium">
                early-career cybersecurity roles, AI &amp; automation projects,
                prompt engineering work, and events or student/community programmes.
              </span>{' '}
              A short message with who you are, what you&apos;re working on, and how I
              can help is perfect.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Based in <span className="font-medium">{siteConfig.location}</span>. I
              usually reply within a few days, depending on studies and time zones.
            </p>
          </div>

          {/* “How I can help” chips */}
          <div className="pt-1 space-y-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              How I can help
            </p>
            <div className="flex flex-wrap gap-2">
              {helpChips.map((chip) => (
                <span key={chip} className="guna-hero-chip">
                  {chip}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 max-w-md">
              Tip: in your message, mention which of these fits you best – cyber, AI,
              events, or something else.
            </p>
          </div>
        </div>

        {/* Right – contact form */}
        <aside className="relative">
          {/* glow behind card */}
          <div className="guna-contact-glow absolute -inset-4 rounded-[2.2rem] pointer-events-none" />
          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/90 px-5 py-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] text-sm text-slate-200">
            <div className="mb-3 space-y-1">
              <p className="text-[11px] uppercase tracking-[0.18em] text-sky-300">
                Send a message
              </p>
              <p className="text-xs text-slate-400">
                I&apos;ll reply from{' '}
                <span className="font-mono text-slate-200">{siteConfig.email}</span>{' '}
                as soon as I can.
              </p>
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div className="mb-3 rounded-xl border border-emerald-500/60 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100 guna-contact-success">
                ✅ Message sent. Thanks for reaching out — I&apos;ll get back to you
                as soon as I can.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-3 rounded-xl border border-rose-500/60 bg-rose-500/10 px-3 py-2 text-xs text-rose-100">
                ⚠️ Please fill in your name, email and message. If it keeps failing,
                you can email me directly at {siteConfig.email}.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.16em] text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.16em] text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.16em] text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 resize-none"
                  placeholder="Tell me who you are, what you're working on, and how I can help…"
                />
                <p className="text-[11px] text-slate-500">
                  If it&apos;s about a role or project, links to job descriptions or briefs
                  are helpful.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={[
                  'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition',
                  isSubmitting
                    ? 'bg-sky-500/70 text-slate-900 cursor-wait'
                    : 'bg-sky-400 text-slate-950 hover:bg-sky-300',
                ].join(' ')}
              >
                {isSubmitting ? 'Sending…' : 'Say hi 👋'}
              </button>
            </form>
          </div>
        </aside>
      </section>

      {/* Other ways to reach me */}
      <section className="space-y-2">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-100">
          Prefer direct contact?
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          You can also reach me directly on email, phone or social.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="guna-contact-link"
          >
            📧 {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="guna-contact-link"
          >
            📱 {siteConfig.phone}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="guna-contact-link"
          >
            💼 LinkedIn
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="guna-contact-link"
          >
            📸 Instagram
          </a>
        </div>
      </section>

      {/* What you can contact me about */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-100">
          What you can contact me about
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          A few examples of messages that are a good fit.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          {contactTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 shadow-[0_0_22px_rgba(15,23,42,0.9)] guna-section-fade"
            >
              <h3 className="font-semibold text-slate-100">{topic.title}</h3>
              <ul className="mt-1 space-y-1 text-xs sm:text-sm">
                {topic.body.map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Small guidance for different audiences */}
      <section className="space-y-3 text-sm text-slate-300 max-w-3xl">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-100">
          A quick note for different people
        </h2>
        <p>
          <span className="font-medium">If you&apos;re a recruiter or hiring manager:</span>{' '}
          links to a job description, your company site and timeline help me respond better.
        </p>
        <p>
          <span className="font-medium">If you&apos;re a student or early-career:</span>{' '}
          you can ask about approach, workflows, prompt engineering and studying abroad –
          I may not reply instantly, but I do read these.
        </p>
        <p>
          <span className="font-medium">If you&apos;re an organiser (events / community / academic):</span>{' '}
          briefly share what the event is, audience size, date and what you&apos;d like from
          me (volunteering, support, ideas, etc.).
        </p>
      </section>

      {/* Response & privacy note */}
      <section className="space-y-2 text-xs sm:text-sm text-slate-400 max-w-3xl pb-4">
        <h2 className="text-sm sm:text-base font-semibold text-slate-200">
          Response &amp; privacy
        </h2>
        <p>
          I try to respond within a few days, depending on study and work. Please don&apos;t
          send passwords, confidential client data or very sensitive personal information in
          this form – high-level context is enough to start.
        </p>
      </section>
    </div>
  );
}

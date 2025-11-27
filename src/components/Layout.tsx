import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header / Nav */}
      <header className="border-b border-slate-800 sticky top-0 backdrop-blur bg-slate-950/80 z-50">
  <div className="mx-auto max-w-5xl px-4 py-3">
    {/* Centered group: logo + nav */}
    <div className="flex items-center justify-start gap-6 md:justify-center">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <div className="relative h-12 w-20 rounded-2xl border border-sky-500/60 bg-slate-900/90 shadow-[0_0_60px_rgba(57,189,248,0.5)] overflow-hidden">
          {/* inner dark base */}
          <div className="absolute inset-[9px] rounded-2xl bg-slate-900" />
          {/* subtle gradient wash */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/40 via-violet-500/40 to-emerald-400/40 opacity-80" />
          {/* initials */}
          <span className="relative flex h-full w-full items-center justify-center text-[18px] font-semibold tracking-[0.50em] guna-logo-gradient">
            YGR
          </span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-3 text-sm">
        {siteConfig.navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [
                'px-3 py-1 rounded-full transition',
                isActive
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/60'
                  : 'text-slate-300 hover:text-sky-200 hover:bg-slate-900/70',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </div>
</header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-8">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-400 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-sky-300 inline-flex items-center gap-1"
            >
              📧 {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="hover:text-sky-300 inline-flex items-center gap-1"
            >
              📱 {siteConfig.phone}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-300 inline-flex items-center gap-1"
            >
              💼 LinkedIn
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-300 inline-flex items-center gap-1"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

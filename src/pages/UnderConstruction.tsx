import { Link, useLocation } from 'react-router-dom';

export default function UnderConstruction() {
  const location = useLocation();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-4">
        Page under construction
      </h1>
      <p className="text-slate-300 mb-6">
        The page <span className="font-mono">{location.pathname}</span> isn&apos;t ready yet.
        I&apos;m building it step by step.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-sky-500 hover:text-sky-300 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

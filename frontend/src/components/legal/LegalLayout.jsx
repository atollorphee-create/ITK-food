import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { INFO } from "../../data/menu";

export default function LegalLayout({ title, num, lead, children }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header bar */}
      <header className="sticky top-0 z-40 glass border-b border-[#161616]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <Link
            to="/"
            data-testid="legal-back-home"
            className="flex items-center gap-3"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/5eg7p8in_logo.png"
              alt="ITK FOOD"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display tracking-wider text-sm">ITK FOOD</span>
          </Link>
          <Link
            to="/"
            className="btn-ghost px-4 py-2 rounded-full text-xs font-display tracking-wider flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Retour
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-10">
        <div className="absolute -top-10 -right-20 h-80 w-80 rounded-full bg-[#FF7A00]/10 blur-[120px] pointer-events-none" />
        <p className="num-tag mb-3 relative">[ {num} / Pages légales ]</p>
        <h1 className="font-display text-5xl sm:text-7xl leading-[0.9] relative">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-white/60 text-base sm:text-lg leading-relaxed relative">
            {lead}
          </p>
        )}
      </section>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
        <article className="rounded-3xl border border-[#1a1a1a] bg-[#0a0a0a] p-6 sm:p-10 lg:p-14 leading-relaxed text-white/75 space-y-8">
          {children}
        </article>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <p>Dernière mise à jour : décembre 2026 · Démo ITK FOOD.</p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/mentions-legales" className="hover:text-[#FF7A00]">Mentions légales</Link>
            <span>·</span>
            <Link to="/confidentialite" className="hover:text-[#FF7A00]">Confidentialité</Link>
            <span>·</span>
            <Link to="/cgv" className="hover:text-[#FF7A00]">CGV</Link>
          </div>
        </div>
      </main>

      {/* Mini-footer */}
      <footer className="border-t border-[#161616] py-8">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-xs text-white/40 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} ITK FOOD — {INFO.address}.</p>
          <Link to="/" className="hover:text-[#FF7A00] uppercase tracking-[0.22em]">
            Retour à l&apos;accueil →
          </Link>
        </div>
      </footer>
    </div>
  );
}

export function Section({ title, children }) {
  return (
    <section>
      <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-sm sm:text-[15px] text-white/70">
        {children}
      </div>
    </section>
  );
}

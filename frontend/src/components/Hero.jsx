import { ArrowRight, MapPin, Star } from "lucide-react";
import { INFO } from "../data/menu";

export default function Hero({ onOrder }) {
  const goMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/b30kgkfr_ChatGPT%20Image%2028%20avr.%202026%2C%2022_08_24.png"
          alt="ITK Food bacon cheese burger"
          className="absolute inset-0 w-full h-full object-cover object-right opacity-90"
        />
        {/* Strong gradient on the left for text readability, transparent on the right to keep the burger visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-[#FF7A00]/20 blur-[140px]" />
        <div className="absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-[#FF7A00]/12 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pt-28 pb-20">
        {/* Top tag */}
        <div className="reveal flex items-center gap-3 mb-7">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A00] pulse-dot" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-white/70">
            Florange · Ouvert aujourd&apos;hui
          </span>
        </div>

        {/* Massive title */}
        <h1
          data-testid="hero-title"
          className="reveal font-display leading-[0.85] text-[16vw] sm:text-[12vw] lg:text-[10rem] xl:text-[12rem]"
        >
          ITK
          <br />
          <span className="hero-stroke">FOOD</span>
        </h1>

        {/* Tagline */}
        {/* Tagline */}
        <p
          data-testid="hero-tagline"
          className="reveal mt-6 sm:mt-8 max-w-2xl font-display text-2xl sm:text-3xl lg:text-4xl text-[#FF7A00] glow-orange-text"
          style={{ transitionDelay: "120ms" }}
        >
          Le snack du peuple,
          <br />
          fait par le peuple.
        </p>

        <p
          className="reveal mt-5 max-w-xl text-white/65 text-base sm:text-lg leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          Burgers smashés, tacos personnalisés, poutines canadiennes et sandwichs
          gratinés gourmands. Fait minute, à Florange.
        </p>

        {/* CTAs */}
        <div
          className="reveal mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          style={{ transitionDelay: "280ms" }}
        >
          <button
            onClick={onOrder}
            data-testid="hero-order-btn"
            className="btn-orange px-7 py-4 rounded-full font-display tracking-wider text-sm sm:text-base flex items-center gap-2"
          >
            Commander maintenant
            <ArrowRight size={18} />
          </button>
          <button
            onClick={goMenu}
            data-testid="hero-menu-btn"
            className="btn-ghost px-7 py-4 rounded-full font-display tracking-wider text-sm sm:text-base"
          >
            Voir le menu
          </button>
        </div>

        {/* Bottom strip */}
        <div
          className="reveal absolute bottom-8 left-5 right-5 sm:left-8 sm:right-8 flex flex-wrap items-center justify-between gap-4 text-xs"
          style={{ transitionDelay: "360ms" }}
        >
          <div className="flex items-center gap-5 text-white/60">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#FF7A00]" />
              {INFO.address}
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <Star size={14} className="text-[#FF7A00] fill-[#FF7A00]" />
              4.8 — Snackeurs Florangeois
            </span>
          </div>
          <span className="hidden sm:block text-white/40 tracking-[0.3em] uppercase">
            Scroll ↓
          </span>
        </div>
      </div>
    </section>
  );
}

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
          className="hero-image-anim absolute inset-0 w-full h-full object-cover object-right opacity-90 will-change-transform"
        />
        {/* Strong gradient on the left for text readability, transparent on the right to keep the burger visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-25" />

        {/* Drifting light layers + light sweep — bien visibles */}
        <div className="hero-light-1 absolute -bottom-20 -left-20 h-[600px] w-[600px] rounded-full bg-[#FF7A00]/55 blur-[100px] will-change-transform" />
        <div className="hero-light-2 absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-[#FF7A00]/40 blur-[100px] will-change-transform" />
        <div className="hero-pulse absolute top-1/3 right-1/2 h-[340px] w-[340px] rounded-full bg-[#FF7A00]/35 blur-[80px] will-change-transform" />

        {/* Sweep de lumière diagonal */}
        <div className="hero-sweep absolute top-0 -left-1/2 w-[40%] h-full bg-gradient-to-r from-transparent via-[#FF7A00]/25 to-transparent blur-2xl" />

        {/* Steam wisps — bien visibles au-dessus du burger */}
        <div className="hidden sm:block">
          <span
            className="vapor"
            style={{ right: "30%", animation: "vapor-rise 4s ease-in-out infinite", animationDelay: "0s" }}
          />
          <span
            className="vapor"
            style={{ right: "24%", animation: "vapor-rise 4.6s ease-in-out infinite", animationDelay: "1.2s" }}
          />
          <span
            className="vapor"
            style={{ right: "36%", animation: "vapor-rise 5.2s ease-in-out infinite", animationDelay: "2.4s" }}
          />
          <span
            className="vapor"
            style={{ right: "20%", animation: "vapor-rise 4.4s ease-in-out infinite", animationDelay: "3.6s" }}
          />
        </div>

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
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

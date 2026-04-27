import { Star, Quote } from "lucide-react";
import { REVIEWS, RATING } from "../data/reviews";

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < n
              ? "fill-[#FF7A00] text-[#FF7A00]"
              : "text-white/20"
          }
        />
      ))}
    </div>
  );
}

function Avatar({ src, name }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="h-11 w-11 rounded-full object-cover bg-[#161616] border border-[#222]"
      />
    );
  }
  // Fallback avatar with first letter on orange bg
  return (
    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF9A40] grid place-items-center font-display text-black text-lg shrink-0">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function ReviewCard({ r }) {
  return (
    <article
      className="shrink-0 w-[320px] sm:w-[360px] mx-2.5 p-6 rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#FF7A00]/40 transition relative"
      data-testid={`review-card-${r.name.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <Quote
        size={28}
        className="absolute top-5 right-5 text-[#FF7A00]/30"
      />
      <div className="flex items-center gap-3 mb-4">
        <Avatar src={r.avatar} name={r.name} />
        <div className="min-w-0 flex-1">
          <p className="font-display text-base text-white leading-none">
            {r.name}
          </p>
          <p className="text-[11px] text-white/45 mt-1.5 truncate">{r.sub}</p>
        </div>
      </div>
      <Stars n={r.rating} />
      <p className="mt-4 text-sm text-white/70 leading-relaxed line-clamp-5">
        {r.text}
      </p>
      <p className="mt-5 text-[11px] text-white/35 uppercase tracking-[0.18em]">
        {r.when}
      </p>
    </article>
  );
}

// Google "G" SVG (multi-color)
function GoogleG({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export default function Reviews() {
  // Split reviews in two rows for opposite-direction marquee
  const half = Math.ceil(REVIEWS.length / 2);
  const row1 = REVIEWS.slice(0, half);
  const row2 = REVIEWS.slice(half);

  return (
    <section
      id="avis"
      data-testid="reviews-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="reveal">
            <p className="num-tag mb-3">[ 03 / Social proof ]</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
              Ils nous ont
              <br />
              <span className="text-[#FF7A00] glow-orange-text">déjà validés.</span>
            </h2>
          </div>

          {/* Google rating block */}
          <a
            href={RATING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex items-center gap-4 px-5 py-4 rounded-2xl border border-[#1f1f1f] bg-[#0e0e0e] hover:border-[#FF7A00]/40 transition"
            data-testid="reviews-rating-pill"
          >
            <GoogleG size={26} />
            <div className="leading-tight">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-white">
                  {RATING.score}
                </span>
                <span className="text-white/45 text-sm">/5</span>
                <Stars n={5} />
              </div>
              <p className="text-[11px] text-white/55 mt-1 uppercase tracking-[0.18em]">
                {RATING.count} avis · {RATING.source}
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Marquee row 1 — left */}
      <div className="reveal relative" style={{ transitionDelay: "120ms" }}>
        <div
          className="flex animate-marquee will-change-transform py-2"
          style={{ animationDuration: "22s" }}
        >
          {[...row1, ...row1].map((r, i) => (
            <ReviewCard key={`r1-${i}`} r={r} />
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
      </div>

      {/* Marquee row 2 — right (opposite direction) */}
      <div className="reveal relative mt-3" style={{ transitionDelay: "200ms" }}>
        <div
          className="flex animate-marquee will-change-transform py-2"
          style={{ animationDirection: "reverse", animationDuration: "24s" }}
        >
          {[...row2, ...row2].map((r, i) => (
            <ReviewCard key={`r2-${i}`} r={r} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
      </div>

      <p className="text-center text-xs text-white/40 mt-10 tracking-[0.22em] uppercase">
        Source · Avis Google · Florange
      </p>
    </section>
  );
}

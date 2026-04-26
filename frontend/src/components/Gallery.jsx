import { Camera } from "lucide-react";

const PHOTOS = [
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/kd1rx5po_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/ddl9xz1n_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/xj53gt4g_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/oqc817xk_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/d5tzunvl_image.png",
];

export default function Gallery() {
  return (
    <section
      id="galerie"
      data-testid="gallery-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div className="reveal">
          <p className="num-tag mb-3">[ 04 / Galerie ]</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Sortis tout droit
            <br />
            <span className="text-[#FF7A00] glow-orange-text">de la cuisine.</span>
          </h2>
        </div>
        <p
          className="reveal max-w-sm text-white/55 text-sm flex items-center gap-2"
          style={{ transitionDelay: "120ms" }}
        >
          <Camera size={16} className="text-[#FF7A00] shrink-0" />
          Photos réelles. Aucun filtre. Juste le grill et la sauce.
        </p>
      </div>

      {/* Asymmetric grid — 5 photos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[240px]">
        {/* Photo 1 — large left */}
        <div
          className="reveal relative col-span-2 row-span-2 overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] group"
          data-testid="gallery-item-0"
        >
          <img
            src={PHOTOS[0]}
            alt="ITK FOOD plat 1"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          <span className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.22em] text-white/85">
            Le best-seller
          </span>
        </div>

        {/* Photo 2 — top right */}
        <div
          className="reveal relative col-span-2 sm:col-span-1 row-span-1 overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] group"
          data-testid="gallery-item-1"
          style={{ transitionDelay: "80ms" }}
        >
          <img
            src={PHOTOS[1]}
            alt="ITK FOOD plat 2"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Photo 3 — top right next */}
        <div
          className="reveal relative col-span-2 sm:col-span-1 row-span-1 overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] group"
          data-testid="gallery-item-2"
          style={{ transitionDelay: "160ms" }}
        >
          <img
            src={PHOTOS[2]}
            alt="ITK FOOD plat 3"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Photo 4 — bottom right wide */}
        <div
          className="reveal relative col-span-2 row-span-1 overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] group"
          data-testid="gallery-item-3"
          style={{ transitionDelay: "240ms" }}
        >
          <img
            src={PHOTOS[3]}
            alt="ITK FOOD plat 4"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Photo 5 — full bottom */}
        <div
          className="reveal relative col-span-2 sm:col-span-4 row-span-1 sm:row-span-2 overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] group"
          data-testid="gallery-item-4"
          style={{ transitionDelay: "320ms" }}
        >
          <img
            src={PHOTOS[4]}
            alt="ITK FOOD plat 5"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-md">
            <p className="num-tag mb-2">[ Maison · Fait minute ]</p>
            <p className="font-display text-3xl sm:text-4xl leading-tight">
              Le goût d&apos;abord.
              <br />
              <span className="text-[#FF7A00] glow-orange-text">Le reste suit.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

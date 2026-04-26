import { Camera } from "lucide-react";

const PHOTOS = [
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/kd1rx5po_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/ddl9xz1n_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/xj53gt4g_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/oqc817xk_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/d5tzunvl_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/d8ldtpd3_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/ikr8ej0e_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/v233oocx_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/u0ro3tja_image.png",
  "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/7e4ulbs7_image.png",
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

      {/* Uniform grid — image entière (object-contain) sur fond noir */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {PHOTOS.map((src, i) => (
          <div
            key={src}
            className="reveal relative aspect-square overflow-hidden rounded-2xl border border-[#1a1a1a] bg-black group"
            data-testid={`gallery-item-${i}`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <img
              src={src}
              alt={`ITK FOOD photo ${i + 1}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain p-2 sm:p-3 transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 ring-0 ring-[#FF7A00]/0 group-hover:ring-2 group-hover:ring-[#FF7A00]/40 rounded-2xl transition" />
          </div>
        ))}
      </div>

      {/* Bottom signature strip */}
      <div className="reveal mt-10 sm:mt-12 p-8 sm:p-10 rounded-3xl border border-[#1a1a1a] bg-[#0a0a0a] flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="num-tag mb-3">[ Maison · Fait minute ]</p>
          <p className="font-display text-3xl sm:text-4xl leading-tight">
            Le goût d&apos;abord.{" "}
            <span className="text-[#FF7A00] glow-orange-text">Le reste suit.</span>
          </p>
        </div>
        <p className="text-xs text-white/40 uppercase tracking-[0.22em]">
          {PHOTOS.length} clichés · Florange
        </p>
      </div>
    </section>
  );
}

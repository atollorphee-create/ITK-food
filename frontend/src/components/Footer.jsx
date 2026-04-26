import { Ghost, Instagram, Phone, MapPin } from "lucide-react";
import { INFO } from "../data/menu";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-[#161616] mt-12"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/5eg7p8in_logo.png"
                alt="ITK FOOD"
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="sr-only">ITK FOOD</span>
            </div>
            <p className="font-display text-3xl sm:text-4xl leading-tight max-w-md">
              Le snack du peuple,
              <br />
              <span className="text-[#FF7A00]">fait par le peuple.</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/55">
            <a href={`tel:${INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-[#FF7A00]">
              <Phone size={14} /> {INFO.phone}
            </a>
            <a href={INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FF7A00]">
              <MapPin size={14} /> {INFO.address}
            </a>
            <div className="flex gap-2 mt-2">
              <a
                href={INFO.snapchatUrl}
                aria-label="Snapchat"
                className="h-10 w-10 grid place-items-center rounded-full border border-[#1f1f1f] hover:border-[#FF7A00] hover:text-[#FF7A00]"
              >
                <Ghost size={16} />
              </a>
              <a
                href={INFO.instagramUrl}
                aria-label="Instagram"
                className="h-10 w-10 grid place-items-center rounded-full border border-[#1f1f1f] hover:border-[#FF7A00] hover:text-[#FF7A00]"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Massive type signature */}
        <div className="overflow-hidden">
          <p className="font-display leading-none text-[18vw] sm:text-[16vw] lg:text-[12rem] text-white/[0.04] select-none">
            ITK FOOD
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#161616] text-xs text-white/40">
          <p>© {new Date().getFullYear()} ITK FOOD — Florange. Tous droits réservés.</p>
          <p className="tracking-[0.22em] uppercase">Demo design · v1.0</p>
        </div>
      </div>
    </footer>
  );
}

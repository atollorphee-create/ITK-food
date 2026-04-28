import {
  Ghost,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Truck,
  CreditCard,
  Banknote,
  Wallet,
  ExternalLink,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { INFO } from "../data/menu";

const DELIVERY_ZONES = [
  "Florange",
  "Hayange",
  "Sérémange",
  "Uckange",
  "Algrange",
  "Thionville",
  "Knutange",
  "Fameck",
];

const PAYMENT_METHODS = [
  { label: "Carte bancaire", Icon: CreditCard },
  { label: "Espèces", Icon: Banknote },
  { label: "Tickets resto", Icon: Wallet },
];

// Horaires simplifiés condensés
const HOURS_COMPACT = [
  { d: "Lun – Mer", h: "11h30 – 14h · 17h30 – 23h" },
  { d: "Jeudi", h: "Fermé", off: true },
  { d: "Ven – Sam", h: "17h30 – 00h" },
  { d: "Dimanche", h: "11h – 14h · 17h30 – 23h" },
];

// Iframe Google Maps stylé
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=6+rue+de+Verdun+57190+Florange&output=embed";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-[#161616] mt-12"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        {/* Top : 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand + slogan */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/5eg7p8in_logo.png"
                alt="ITK FOOD"
                className="h-14 w-14 rounded-full object-cover"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/ny6qfhq1_ChatGPT%20Image%2026%20avr.%202026%2C%2022_31_58.png"
                alt="Le snack du peuple, fait par le peuple !"
                className="h-12 sm:h-14 w-auto select-none"
                draggable="false"
              />
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-6 max-w-sm">
              Burgers smashés, tacos personnalisés et poutines généreuses. Fait
              minute, à Florange — pour le peuple, par le peuple.
            </p>

            {/* Mini-slogan badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/8">
              <Heart size={13} className="text-[#FF7A00] fill-[#FF7A00]" />
              <span className="text-xs uppercase tracking-[0.18em] text-white/80">
                Fait avec amour, à Florange.
              </span>
            </div>

            {/* Contact */}
            <div className="mt-7 space-y-2.5 text-sm text-white/55">
              <a
                href={`tel:${INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#FF7A00] transition"
              >
                <Phone size={14} /> {INFO.phone}
              </a>
              <a
                href={INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FF7A00] transition"
              >
                <MapPin size={14} /> {INFO.address}
              </a>
              <div className="flex gap-2 pt-2">
                <a
                  href={INFO.snapchatUrl}
                  aria-label="Snapchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-full border border-[#1f1f1f] hover:border-[#FF7A00] hover:text-[#FF7A00] transition"
                >
                  <Ghost size={16} />
                </a>
                <a
                  href={INFO.instagramUrl}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-full border border-[#1f1f1f] hover:border-[#FF7A00] hover:text-[#FF7A00] transition"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="lg:col-span-3">
            <p className="num-tag mb-4 flex items-center gap-2">
              <Clock size={12} className="text-[#FF7A00]" />
              [ Horaires ]
            </p>
            <ul className="space-y-3">
              {HOURS_COMPACT.map((h) => (
                <li key={h.d}>
                  <p
                    className={`font-display text-sm ${
                      h.off ? "text-white/45 line-through" : "text-white"
                    }`}
                  >
                    {h.d}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      h.off ? "text-red-400/80" : "text-white/55"
                    }`}
                  >
                    {h.h}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Livraison + Paiement */}
          <div className="lg:col-span-2">
            <p className="num-tag mb-4 flex items-center gap-2">
              <Truck size={12} className="text-[#FF7A00]" />
              [ Livraison ]
            </p>
            <ul className="flex flex-wrap gap-1.5 mb-7">
              {DELIVERY_ZONES.map((z) => (
                <li
                  key={z}
                  className="px-2.5 py-1 rounded-full bg-[#0e0e0e] border border-[#1f1f1f] text-[11px] text-white/70"
                >
                  {z}
                </li>
              ))}
            </ul>

            <p className="num-tag mb-3 flex items-center gap-2">
              <CreditCard size={12} className="text-[#FF7A00]" />
              [ Paiement ]
            </p>
            <ul className="space-y-2">
              {PAYMENT_METHODS.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-white/70"
                >
                  <Icon size={14} className="text-[#FF7A00]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Maps embed */}
          <div className="lg:col-span-3">
            <p className="num-tag mb-4 flex items-center gap-2">
              <MapPin size={12} className="text-[#FF7A00]" />
              [ Nous trouver ]
            </p>
            <a
              href={INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-maps"
              className="group block relative rounded-2xl overflow-hidden border border-[#1f1f1f] hover:border-[#FF7A00]/40 transition"
            >
              <div className="relative aspect-[4/3] w-full bg-[#0e0e0e]">
                <iframe
                  title="ITK FOOD Florange — Google Maps"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[1.05] saturate-[0.7] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition"
                  style={{ filter: "invert(0.92) hue-rotate(180deg)" }}
                />
                {/* Overlay pour intégration thème dark */}
                <div className="absolute inset-0 bg-[#FF7A00]/0 group-hover:bg-[#FF7A00]/5 transition pointer-events-none" />
              </div>
              <div className="flex items-center justify-between p-3 border-t border-[#1f1f1f] bg-[#0a0a0a]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    ITK FOOD
                  </p>
                  <p className="text-xs text-white/80">{INFO.address}</p>
                </div>
                <ExternalLink size={14} className="text-[#FF7A00] shrink-0" />
              </div>
            </a>
          </div>
        </div>

        {/* Massive type signature */}
        <div className="overflow-hidden mt-16">
          <p className="font-display leading-none text-[18vw] sm:text-[16vw] lg:text-[12rem] text-white/[0.04] select-none">
            ITK FOOD
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#161616] text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} ITK FOOD — Florange. Tous droits
            réservés.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link
              to="/mentions-legales"
              data-testid="footer-legal"
              className="hover:text-[#FF7A00] transition"
            >
              Mentions légales
            </Link>
            <span>·</span>
            <Link
              to="/confidentialite"
              data-testid="footer-privacy"
              className="hover:text-[#FF7A00] transition"
            >
              Confidentialité
            </Link>
            <span>·</span>
            <Link
              to="/cgv"
              data-testid="footer-terms"
              className="hover:text-[#FF7A00] transition"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

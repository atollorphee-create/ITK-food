import { MapPin, Phone, Clock, Truck, Store, ShoppingBag } from "lucide-react";
import { INFO } from "../data/menu";

const SERVICE_ICONS = {
  "Sur place": Store,
  "À emporter": ShoppingBag,
  "Livraison": Truck,
};

export default function Info() {
  return (
    <section
      id="infos"
      data-testid="info-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 reveal">
          <p className="num-tag mb-3">[ 05 / Trouver ITK ]</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Toujours
            <br />
            <span className="text-[#FF7A00] glow-orange-text">prêts.</span>
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed max-w-md">
            On t&apos;attend au cœur de Florange. Sur place, à emporter, ou
            livré — choisis ton format, on assure le reste.
          </p>

          {/* Services */}
          <div className="mt-8 flex flex-wrap gap-2">
            {INFO.services.map((s) => {
              const Icon = SERVICE_ICONS[s];
              return (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1f1f1f] bg-[#0e0e0e] text-sm"
                  data-testid={`service-${s}`}
                >
                  {Icon && <Icon size={14} className="text-[#FF7A00]" />}
                  {s}
                </span>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {/* Address */}
          <a
            href={INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal p-6 sm:p-7 rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#FF7A00]/60 hover:bg-[#161616] transition group"
            data-testid="info-address"
          >
            <MapPin size={22} className="text-[#FF7A00] mb-5" />
            <p className="text-xs uppercase tracking-[0.22em] text-white/45 mb-2">
              Adresse
            </p>
            <p className="font-display text-xl sm:text-2xl leading-tight">
              {INFO.address}
            </p>
            <span className="mt-4 inline-block text-xs text-white/55 group-hover:text-[#FF7A00] transition">
              Ouvrir Google Maps →
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${INFO.phoneRaw}`}
            className="reveal p-6 sm:p-7 rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#FF7A00]/60 hover:bg-[#161616] transition group"
            style={{ transitionDelay: "80ms" }}
            data-testid="info-phone"
          >
            <Phone size={22} className="text-[#FF7A00] mb-5" />
            <p className="text-xs uppercase tracking-[0.22em] text-white/45 mb-2">
              Téléphone
            </p>
            <p className="font-display text-xl sm:text-2xl">{INFO.phone}</p>
            <span className="mt-4 inline-block text-xs text-white/55 group-hover:text-[#FF7A00] transition">
              Appeler maintenant →
            </span>
          </a>

          {/* Hours */}
          <div
            className="reveal sm:col-span-2 p-6 sm:p-7 rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e]"
            data-testid="info-hours"
            style={{ transitionDelay: "160ms" }}
          >
            <Clock size={22} className="text-[#FF7A00] mb-5" />
            <p className="text-xs uppercase tracking-[0.22em] text-white/45 mb-4">
              Horaires
            </p>
            <ul className="grid sm:grid-cols-3 gap-y-3 gap-x-6">
              {INFO.hours.map((h) => (
                <li key={h.d} className="flex flex-col">
                  <span className="font-display text-base text-white">{h.d}</span>
                  <span className="text-xs text-white/55 mt-1">{h.h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

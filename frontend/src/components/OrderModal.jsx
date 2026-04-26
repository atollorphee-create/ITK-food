import { useEffect } from "react";
import { Phone, MapPin, Ghost, Instagram, X } from "lucide-react";
import { INFO } from "../data/menu";

export default function OrderModal({ open, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const actions = [
    {
      id: "call",
      label: "Appeler",
      sub: INFO.phone,
      icon: Phone,
      href: `tel:${INFO.phoneRaw}`,
      accent: true,
      testid: "modal-action-call",
    },
    {
      id: "map",
      label: "Itinéraire",
      sub: INFO.address,
      icon: MapPin,
      href: INFO.mapsUrl,
      target: "_blank",
      testid: "modal-action-map",
    },
    {
      id: "snap",
      label: "Snapchat",
      sub: "@itkfood",
      icon: Ghost,
      href: INFO.snapchatUrl,
      target: "_blank",
      testid: "modal-action-snap",
    },
    {
      id: "insta",
      label: "Instagram",
      sub: "@itk_food",
      icon: Instagram,
      href: INFO.instagramUrl,
      target: "_blank",
      testid: "modal-action-insta",
    },
  ];

  return (
    <div
      data-testid="order-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 glass" />
      <div
        className="relative pop-in w-full sm:max-w-lg mx-2 sm:mx-4 mb-2 sm:mb-0 rounded-t-3xl sm:rounded-3xl border border-[#1f1f1f] bg-[#0a0a0a] p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* glow accent */}
        <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-[#FF7A00]/30 blur-3xl" />

        <div className="flex items-start justify-between mb-6 relative">
          <div>
            <p className="num-tag mb-2">[ Étape suivante ]</p>
            <h3 className="font-display text-3xl sm:text-4xl leading-none">
              Commander chez{" "}
              <span className="text-[#FF7A00] glow-orange-text">ITK</span>
            </h3>
            <p className="text-sm text-white/60 mt-2">
              Choisis ton canal préféré. On gère le reste.
            </p>
          </div>
          <button
            data-testid="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer"
            className="ml-3 h-10 w-10 grid place-items-center rounded-full border border-[#222] hover:border-[#FF7A00] hover:bg-[#FF7A00]/10 transition"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <a
                key={a.id}
                href={a.href}
                target={a.target}
                rel={a.target === "_blank" ? "noopener noreferrer" : undefined}
                data-testid={a.testid}
                className={`group flex items-center gap-4 p-4 rounded-2xl border transition ${
                  a.accent
                    ? "border-[#FF7A00] bg-[#FF7A00] text-black hover:bg-[#ff8c1a] glow-soft"
                    : "border-[#1f1f1f] bg-[#0f0f0f] hover:border-[#FF7A00] hover:bg-[#161616]"
                }`}
              >
                <div
                  className={`h-11 w-11 rounded-xl grid place-items-center shrink-0 ${
                    a.accent ? "bg-black/15" : "bg-[#161616] group-hover:bg-[#FF7A00]/15"
                  }`}
                >
                  <Icon size={20} className={a.accent ? "text-black" : "text-[#FF7A00]"} />
                </div>
                <div className="min-w-0">
                  <p className={`font-display text-lg leading-none ${a.accent ? "text-black" : "text-white"}`}>
                    {a.label}
                  </p>
                  <p className={`text-xs mt-1 truncate ${a.accent ? "text-black/70" : "text-white/55"}`}>
                    {a.sub}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <p className="text-[11px] text-white/40 mt-6 text-center tracking-wider uppercase">
          Sur place · À emporter · Livraison
        </p>
      </div>
    </div>
  );
}

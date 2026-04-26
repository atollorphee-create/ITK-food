import { Phone, MapPin, Ghost, Instagram } from "lucide-react";
import { INFO } from "../data/menu";

export default function OrderSection({ onOrder }) {
  const tiles = [
    {
      label: "Appeler",
      sub: INFO.phone,
      Icon: Phone,
      href: `tel:${INFO.phoneRaw}`,
      testid: "order-call",
    },
    {
      label: "Itinéraire",
      sub: INFO.address.split(",")[0],
      Icon: MapPin,
      href: INFO.mapsUrl,
      target: "_blank",
      testid: "order-map",
    },
    {
      label: "Snapchat",
      sub: "@itkfood",
      Icon: Ghost,
      href: INFO.snapchatUrl,
      target: "_blank",
      testid: "order-snap",
    },
    {
      label: "Instagram",
      sub: "@itk_food",
      Icon: Instagram,
      href: INFO.instagramUrl,
      target: "_blank",
      testid: "order-insta",
    },
  ];

  return (
    <section
      id="commander"
      data-testid="order-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="num-tag mb-3">[ 04 / On gère, t&apos;arrives ]</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Commander
            <br />
            chez{" "}
            <span className="text-[#FF7A00] glow-orange-text">ITK FOOD.</span>
          </h2>
          <p className="mt-5 text-white/60 max-w-md leading-relaxed">
            Pas d&apos;app, pas de friction. Un appel, un itinéraire, une story Snap —
            ton repas est prêt en quelques minutes.
          </p>
          <button
            onClick={onOrder}
            data-testid="ordersection-cta"
            className="btn-orange mt-7 px-7 py-4 rounded-full font-display tracking-wider text-sm"
          >
            Ouvrir les options
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
          {tiles.map((t) => {
            const Icon = t.Icon;
            return (
              <a
                key={t.label}
                href={t.href}
                target={t.target}
                rel={t.target === "_blank" ? "noopener noreferrer" : undefined}
                data-testid={t.testid}
                className="reveal group relative overflow-hidden p-6 sm:p-7 rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#FF7A00]/60 hover:bg-[#161616] transition"
              >
                <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[#FF7A00]/0 group-hover:bg-[#FF7A00]/10 blur-2xl transition" />
                <div className="relative flex flex-col gap-6 sm:gap-8 h-full justify-between min-h-[140px]">
                  <Icon size={26} className="text-[#FF7A00]" />
                  <div>
                    <p className="font-display text-2xl sm:text-3xl leading-none">
                      {t.label}
                    </p>
                    <p className="text-xs text-white/45 mt-2 truncate">{t.sub}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Phone, MapPin, Ghost, Instagram, ShoppingBag } from "lucide-react";
import { INFO } from "../data/menu";
import { useCart } from "../context/CartContext";

export default function OrderSection({ onOrder }) {
  const { openDrawer, count } = useCart();

  const tiles = [
    {
      label: count > 0 ? `Panier (${count})` : "Site web",
      sub: "Commander en ligne",
      Icon: ShoppingBag,
      onClick: openDrawer,
      testid: "order-cart",
      accent: true,
    },
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
      sub: "@itk-food",
      Icon: Ghost,
      href: INFO.snapchatUrl,
      target: "_blank",
      testid: "order-snap",
    },
    {
      label: "Instagram",
      sub: "@itk.food57",
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
            Site web, téléphone, Snap ou Insta — choisis ton canal préféré, on
            gère le reste.
          </p>
          <button
            onClick={openDrawer}
            data-testid="ordersection-cta"
            className="btn-orange mt-7 px-7 py-4 rounded-full font-display tracking-wider text-sm inline-flex items-center gap-2.5"
          >
            <ShoppingBag size={16} strokeWidth={2.4} />
            Commander via le site
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {tiles.map((t) => {
            const Icon = t.Icon;
            const isAccent = !!t.accent;
            const Tag = t.href ? "a" : "button";
            const tagProps = t.href
              ? {
                  href: t.href,
                  target: t.target,
                  rel: t.target === "_blank" ? "noopener noreferrer" : undefined,
                }
              : { type: "button", onClick: t.onClick };
            return (
              <Tag
                key={t.label}
                {...tagProps}
                data-testid={t.testid}
                className={`reveal group relative overflow-hidden p-6 sm:p-7 rounded-3xl text-left border transition ${
                  isAccent
                    ? "border-[#FF7A00] bg-[#FF7A00]/12 hover:bg-[#FF7A00]/20"
                    : "border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#FF7A00]/60 hover:bg-[#161616]"
                }`}
              >
                <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[#FF7A00]/0 group-hover:bg-[#FF7A00]/10 blur-2xl transition" />
                <div className="relative flex flex-col gap-6 sm:gap-8 h-full justify-between min-h-[140px]">
                  <Icon
                    size={26}
                    className={isAccent ? "text-[#FF7A00]" : "text-[#FF7A00]"}
                  />
                  <div>
                    <p className="font-display text-2xl sm:text-3xl leading-none">
                      {t.label}
                    </p>
                    <p className="text-xs text-white/55 mt-2 truncate">{t.sub}</p>
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

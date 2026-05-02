import { useState } from "react";
import {
  Beef,
  Sandwich,
  UtensilsCrossed,
  Soup,
  Sparkles,
  Plus,
  Cookie,
  Baby,
  Drumstick,
  Flame,
} from "lucide-react";
import { CATEGORIES } from "../data/menu";
import AddButton from "./cart/AddButton";

const ICONS = {
  beef: Beef,
  sandwich: Sandwich,
  tacos: UtensilsCrossed,
  soup: Soup,
  sparkles: Sparkles,
  fries: Drumstick,
  cake: Cookie,
  child: Baby,
};

const HEADINGS = {
  "petite-faim": "Une petite faim ?",
  desserts: "Les desserts",
  "menu-enfant": "Menu enfant",
  canadiennes: "Canadiennes",
  tacos: "Tacos",
  burgers: "Smash Burgers",
  sandwichs: "Sandwichs",
  divers: "Les Classiques",
};

function FeaturedPanel({ item, catId }) {
  if (!item) return null;
  const hasImg = !!item.img;

  return (
    <div className="animate-[pop-in_0.5s_ease-out_forwards]">
      <div className="relative overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e]">
        {/* Image — clean, infos déjà gravées dessus */}
        <div className="relative w-full aspect-[3/4] bg-black">
          {hasImg ? (
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <Flame size={80} className="text-[#FF7A00]/20" />
            </div>
          )}
        </div>

        {/* Bouton ajouter au panier */}
        <div className="p-5 sm:p-6 border-t border-[#1a1a1a] flex justify-end">
          <AddButton
            product={{ id: item.name, name: item.name, price: item.price, desc: item.desc }}
            catId={catId}
            label="Ajouter au panier"
            className="text-sm px-5 py-2.5"
          />
        </div>
      </div>
    </div>
  );
}

function ItemRow({ item, catId }) {
  return (
    <div
      data-testid={`menu-row-${item.name.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
      className="group flex items-start gap-4 py-4 px-4 rounded-2xl border border-transparent hover:border-[#1f1f1f] hover:bg-[#0e0e0e] transition"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-display text-base sm:text-lg leading-tight truncate text-white group-hover:text-[#FF7A00] transition-colors">
            {item.name}
          </h4>
          <span className="font-display text-sm sm:text-base shrink-0 text-[#FF7A00]">
            {item.price}
          </span>
        </div>
        {item.desc && (
          <p className="mt-1 text-xs sm:text-[13px] text-white/55 leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>
      <AddButton
        product={{ id: item.name, name: item.name, price: item.price, desc: item.desc }}
        catId={catId}
        label=""
        className="!px-2.5 !py-2 self-center shrink-0"
      />
    </div>
  );
}

function PoutineBuilder({ poutine }) {
  return (
    <div className="grid grid-cols-1 gap-3 animate-[pop-in_0.4s_ease-out_forwards]">
      <div className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-5">
        <p className="num-tag mb-3">[ Composition ]</p>
        <ul className="space-y-2">
          {poutine.composition.map((c, i) => (
            <li key={c} className="flex items-center gap-3 text-sm">
              <span className="h-6 w-6 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/40 grid place-items-center text-[10px] font-display text-[#FF7A00]">
                {i + 1}
              </span>
              <span className="text-white/85">{c}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-5">
        <p className="num-tag mb-3">[ Au choix · Viandes ]</p>
        <div className="flex flex-wrap gap-1.5">
          {poutine.viandes.map((v) => (
            <span
              key={v}
              className="px-2.5 py-1 rounded-full bg-[#161616] border border-[#1f1f1f] text-[11px] text-white/80"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TacosBuilder({ builder }) {
  return (
    <div className="grid grid-cols-1 gap-3 animate-[pop-in_0.4s_ease-out_forwards]">
      {[
        { title: "Viandes", items: builder.viandes, kind: "list" },
        { title: "Sauces", items: builder.sauces, kind: "list" },
        { title: "Suppléments", items: builder.supplements, kind: "supp" },
      ].map((block) => (
        <div key={block.title} className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-5">
          <p className="num-tag mb-3">[ Au choix · {block.title} ]</p>
          <div className="flex flex-wrap gap-1.5">
            {block.items.map((it, i) =>
              block.kind === "supp" ? (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#161616] border border-[#1f1f1f] text-[11px]"
                >
                  <Plus size={10} className="text-[#FF7A00]" />
                  <span className="text-white/85">{it.label}</span>
                  <span className="text-[#FF7A00] font-display">{it.price}</span>
                </span>
              ) : (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full bg-[#161616] border border-[#1f1f1f] text-[11px] text-white/80"
                >
                  {it}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function KidsMenu({ kids }) {
  const product = {
    id: "menu-enfant",
    name: "Menu Enfant",
    price: kids.price,
    desc: `Au choix : ${kids.choices.join(" ou ")}. Inclus : ${kids.includes.join(", ")}.`,
  };
  return (
    <div className="rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] overflow-hidden animate-[pop-in_0.5s_ease-out_forwards]">
      <img
        src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/8dvgcbm7_ChatGPT%20Image%202%20mai%202026%2C%2001_19_59.png"
        alt="Menu Enfant ITK — Mini Cheese ou 5 Nuggets, frites, Capri-Sun, compote — 5€"
        className="block w-full h-auto"
        loading="lazy"
      />
      <div className="p-6 sm:p-8 border-t border-[#1a1a1a] flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-white/55 uppercase tracking-[0.22em]">
          Bon appétit petit champion !
        </p>
        <AddButton product={product} catId="menu-enfant" label="Ajouter le menu" />
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active);
  const Icon = ICONS[cat.icon] || Sparkles;
  const heading = HEADINGS[active] || cat.label;

  // Une seule image par section : le best-seller (featured)
  const featuredItem =
    cat.items?.find((i) => i.featured) ||
    cat.items?.find((i) => i.img) ||
    cat.items?.[0];

  const isKids = cat.isKids;
  const isImageOnly = !!cat.imageOnly;
  const showSplit = !isKids && !isImageOnly && cat.items && cat.items.length > 0;

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <div className="reveal">
          <p className="num-tag mb-3">[ 03 / La carte ]</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Le menu
            <br />
            <span className="text-[#FF7A00] glow-orange-text">complet.</span>
          </h2>
        </div>
        <p className="reveal max-w-sm text-white/55 text-sm" style={{ transitionDelay: "120ms" }}>
          Prix indicatifs. Préparé à la commande.
        </p>
      </div>

      {/* Tabs */}
      <div className="reveal flex gap-2 overflow-x-auto no-scrollbar pb-3 -mx-1 px-1">
        {CATEGORIES.map((c) => {
          const TabIcon = ICONS[c.icon] || Sparkles;
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              data-testid={`menu-tab-${c.id}`}
              data-active={isActive}
              onClick={() => setActive(c.id)}
              className="menu-tab whitespace-nowrap shrink-0 px-5 py-2.5 rounded-full border border-[#1f1f1f] text-sm font-display tracking-wider uppercase text-white/70 hover:text-white hover:border-[#FF7A00]/60 hover:shadow-[0_0_24px_-6px_rgba(255,122,0,0.6)] flex items-center gap-2"
            >
              <TabIcon size={15} className={isActive ? "text-black" : "text-[#FF7A00]"} />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Category header */}
      <div className="mt-10 flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-[#FF7A00]/12 border border-[#FF7A00]/30 grid place-items-center">
          <Icon size={22} className="text-[#FF7A00]" />
        </div>
        <h3 className="font-display text-3xl sm:text-4xl leading-none">{heading}</h3>
      </div>

      {/* Kids menu standalone */}
      {isKids && cat.kids && <KidsMenu kids={cat.kids} />}

      {/* Image-only category (e.g., Petite Faim) */}
      {isImageOnly && (
        <div
          data-testid={`menu-imageonly-${active}`}
          className="relative rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e] overflow-hidden animate-[pop-in_0.5s_ease-out_forwards]"
        >
          <img
            src={cat.imageOnly}
            alt={cat.label}
            className="block w-full h-auto select-none"
            loading="lazy"
            draggable={false}
          />
          {/* Hotspots cliquables pour ajouter au panier */}
          {cat.hotspots?.map((h) => (
            <div
              key={h.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              {/* Halo pulsant pour signaler les hotspots */}
              <span className="absolute inset-0 rounded-full bg-[#FF7A00]/40 animate-ping pointer-events-none" />
              <AddButton
                product={{ id: h.name, name: h.name, price: h.price }}
                catId={cat.id}
                label=""
                className="relative !h-10 !w-10 !p-0 !rounded-full grid place-items-center shadow-[0_8px_30px_-6px_rgba(255,122,0,0.95)] ring-2 ring-black/50 hover:scale-110"
              />
              {/* Tooltip nom du produit au hover */}
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/85 backdrop-blur-sm border border-[#FF7A00]/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                + {h.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Split layout */}
      {showSplit && (
        <div className="grid lg:grid-cols-12 gap-6" data-testid={`menu-split-${active}`}>
          {/* Left — featured visual (best-seller fixe de la section) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <FeaturedPanel item={featuredItem} catId={cat.id} />
          </div>

          {/* Right — full list */}
          <div className="lg:col-span-7 space-y-1.5">
            {cat.items.map((it) => (
              <ItemRow key={it.name} item={it} catId={cat.id} />
            ))}

            {/* Builders: tacos + poutine */}
            {cat.isTacos && cat.builder && (
              <div className="mt-5">
                <TacosBuilder builder={cat.builder} />
              </div>
            )}
            {cat.isPoutine && cat.poutine && (
              <div className="mt-5">
                <PoutineBuilder poutine={cat.poutine} />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

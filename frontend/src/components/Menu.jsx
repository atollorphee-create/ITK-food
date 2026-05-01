import { useState, useEffect } from "react";
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
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((k) => k + 1);
  }, [item?.name]);

  if (!item) return null;
  const hasImg = !!item.img;

  return (
    <div key={key} className="animate-[pop-in_0.5s_ease-out_forwards]">
      <div className="relative overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e]">
        {/* Image 3:4 ratio */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

          {/* Badge */}
          {item.badge && (
            <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF7A00] text-black text-[11px] font-display tracking-wider uppercase glow-soft">
              <Flame size={12} strokeWidth={2.5} /> {item.badge}
            </span>
          )}

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="flex items-end justify-between gap-4 mb-3">
              <h3 className="font-display text-3xl sm:text-4xl leading-none">
                {item.name}
              </h3>
              <span className="font-display text-2xl sm:text-3xl text-[#FF7A00] shrink-0">
                {item.price}
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              {item.desc}
            </p>
            <div className="mt-4">
              <AddButton
                product={{ id: item.name, name: item.name, price: item.price, desc: item.desc }}
                catId={catId}
                label="Ajouter au panier"
                className="text-sm px-5 py-2.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemRow({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      data-testid={`menu-row-${item.name.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
      className={`group w-full flex items-start gap-4 py-4 px-4 rounded-2xl text-left border transition ${
        active
          ? "bg-[#FF7A00]/10 border-[#FF7A00]/50"
          : "bg-transparent border-transparent hover:border-[#1f1f1f] hover:bg-[#0e0e0e]"
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h4
            className={`font-display text-base sm:text-lg leading-tight truncate ${
              active ? "text-[#FF7A00]" : "text-white group-hover:text-[#FF7A00]"
            }`}
          >
            {item.name}
          </h4>
          <span
            className={`font-display text-sm sm:text-base shrink-0 ${
              active ? "text-[#FF7A00]" : "text-[#FF7A00]"
            }`}
          >
            {item.price}
          </span>
        </div>
        {item.desc && (
          <p className="mt-1 text-xs sm:text-[13px] text-white/55 leading-relaxed line-clamp-2">
            {item.desc}
          </p>
        )}
      </div>
    </button>
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
    <div className="rounded-3xl border border-[#FF7A00]/40 bg-gradient-to-br from-[#FF7A00]/15 to-[#0e0e0e] p-7 sm:p-10 relative overflow-hidden animate-[pop-in_0.5s_ease-out_forwards]">
      <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-[#FF7A00]/20 blur-3xl" />
      <p className="num-tag relative mb-3">[ Pour les petits ]</p>
      <p className="font-display text-7xl text-[#FF7A00] glow-orange-text leading-none">
        {kids.price}
      </p>
      <p className="mt-2 text-xs text-white/65 uppercase tracking-[0.22em] mb-6">
        Le menu complet
      </p>
      <div className="relative grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-[11px] text-white/45 uppercase tracking-[0.22em] mb-2">Au choix</p>
          <ul className="space-y-1.5 text-sm text-white/85">
            {kids.choices.map((c) => <li key={c}>· {c}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-[11px] text-white/45 uppercase tracking-[0.22em] mb-2">Inclus</p>
          <ul className="space-y-1.5 text-sm text-white/85">
            {kids.includes.map((c) => <li key={c}>· {c}</li>)}
          </ul>
        </div>
      </div>
      <AddButton product={product} catId="menu-enfant" label="Ajouter le menu" />
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active);
  const Icon = ICONS[cat.icon] || Sparkles;
  const heading = HEADINGS[active] || cat.label;

  // Featured = first item marked featured, otherwise first with image, otherwise first
  const pickFeatured = (c) => {
    if (!c.items?.length) return null;
    return (
      c.items.find((i) => i.featured) ||
      c.items.find((i) => i.img) ||
      c.items[0]
    );
  };

  const [activeItem, setActiveItem] = useState(() => pickFeatured(CATEGORIES[0]));

  // Update active item when category changes
  useEffect(() => {
    setActiveItem(pickFeatured(cat));
  }, [active, cat]);

  const isKids = cat.isKids;
  const showSplit = !isKids && cat.items && cat.items.length > 0;

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

      {/* Split layout */}
      {showSplit && (
        <div className="grid lg:grid-cols-12 gap-6" data-testid={`menu-split-${active}`}>
          {/* Left — featured visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <FeaturedPanel item={activeItem} catId={cat.id} />
          </div>

          {/* Right — full list */}
          <div className="lg:col-span-7 space-y-1.5">
            {cat.items.map((it) => (
              <ItemRow
                key={it.name}
                item={it}
                active={activeItem?.name === it.name}
                onClick={() => setActiveItem(it)}
              />
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

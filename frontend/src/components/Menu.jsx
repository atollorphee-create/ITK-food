import { useState } from "react";
import {
  Beef,
  Sandwich,
  UtensilsCrossed,
  Soup,
  Sparkles,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { CATEGORIES } from "../data/menu";

const ICONS = {
  beef: Beef,
  sandwich: Sandwich,
  tacos: UtensilsCrossed,
  soup: Soup,
  sparkles: Sparkles,
};

function ItemCard({ name, price, desc, i }) {
  return (
    <article
      className="product-card group relative p-5 sm:p-6 rounded-[20px] border border-[#1a1a1a] bg-[#0e0e0e] opacity-0 animate-[pop-in_0.4s_ease-out_forwards]"
      style={{ animationDelay: `${i * 50}ms` }}
      data-testid={`menu-item-${name.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl sm:text-2xl leading-tight group-hover:text-[#FF7A00] transition-colors">
          {name}
        </h3>
        <span className="font-display text-xl sm:text-2xl text-[#FF7A00] shrink-0">
          {price}
        </span>
      </div>
      {desc && (
        <p className="mt-3 text-sm text-white/55 leading-relaxed">{desc}</p>
      )}
      <ArrowUpRight
        size={16}
        className="absolute bottom-5 right-5 text-white/20 group-hover:text-[#FF7A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
      />
    </article>
  );
}

function TacosBuilder({ builder }) {
  const Block = ({ title, items, kind = "list" }) => (
    <div className="rounded-[20px] border border-[#1a1a1a] bg-[#0e0e0e] p-5 sm:p-6">
      <p className="num-tag mb-4">[ {title} ]</p>
      <div className="flex flex-wrap gap-2">
        {items.map((it, i) =>
          kind === "supp" ? (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161616] border border-[#1f1f1f] text-xs"
            >
              <Plus size={11} className="text-[#FF7A00]" />
              <span className="text-white/85">{it.label}</span>
              <span className="text-[#FF7A00] font-display">{it.price}</span>
            </span>
          ) : (
            <span
              key={i}
              className="px-3 py-1.5 rounded-full bg-[#161616] border border-[#1f1f1f] text-xs text-white/80 hover:border-[#FF7A00]/40 hover:text-white transition"
            >
              {it}
            </span>
          )
        )}
      </div>
    </div>
  );

  return (
    <div className="mt-6 grid lg:grid-cols-3 gap-3 sm:gap-4 opacity-0 animate-[pop-in_0.4s_ease-out_forwards]">
      <Block title="Au choix · Viandes" items={builder.viandes} />
      <Block title="Au choix · Sauces" items={builder.sauces} />
      <Block title="Suppléments" items={builder.supplements} kind="supp" />
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active);
  const Icon = ICONS[cat.icon] || Sparkles;

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <div className="reveal">
          <p className="num-tag mb-3">[ 03 / La carte ]</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Le menu
            <br />
            <span className="text-[#FF7A00] glow-orange-text">complet.</span>
          </h2>
        </div>
        <p
          className="reveal max-w-sm text-white/55 text-sm"
          style={{ transitionDelay: "120ms" }}
        >
          Prix indicatifs. Préparé à la commande.
        </p>
      </div>

      {/* Tabs with icons */}
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

      {/* Active category header */}
      <div
        key={`${active}-head`}
        className="mt-10 flex items-center gap-3 mb-6"
      >
        <div className="h-12 w-12 rounded-2xl bg-[#FF7A00]/12 border border-[#FF7A00]/30 grid place-items-center">
          <Icon size={22} className="text-[#FF7A00]" />
        </div>
        <h3 className="font-display text-3xl sm:text-4xl leading-none">
          {cat.label}
        </h3>
      </div>

      {/* Items grid */}
      <div
        key={active}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        data-testid={`menu-list-${active}`}
      >
        {cat.items.map((it, i) => (
          <ItemCard key={it.name} {...it} i={i} />
        ))}
      </div>

      {/* Tacos builder */}
      {cat.isTacos && cat.builder && <TacosBuilder builder={cat.builder} />}
    </section>
  );
}

import { useState } from "react";
import { CATEGORIES } from "../data/menu";

export default function Menu() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active);

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
        <p className="reveal max-w-sm text-white/55 text-sm" style={{ transitionDelay: "120ms" }}>
          Prix indicatifs. La carte évolue selon les arrivages et l&apos;humeur du
          chef.
        </p>
      </div>

      {/* Tabs */}
      <div className="reveal flex gap-2 overflow-x-auto no-scrollbar pb-3 -mx-1 px-1">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            data-testid={`menu-tab-${c.id}`}
            data-active={active === c.id}
            onClick={() => setActive(c.id)}
            className="menu-tab whitespace-nowrap shrink-0 px-5 py-2.5 rounded-full border border-[#1f1f1f] text-sm font-display tracking-wider uppercase text-white/70 hover:text-white hover:border-[#FF7A00]/60"
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Items */}
      <div
        key={active}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"
        data-testid={`menu-list-${active}`}
      >
        {cat.items.map((it, i) => (
          <div
            key={it.name}
            className="reveal group flex items-baseline gap-4 py-5 border-b border-[#161616] hover:border-[#FF7A00]/40 transition-colors"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-[#FF7A00] transition-colors">
              {it.name}
            </h3>
            <div className="flex-1 border-b border-dotted border-[#2a2a2a] mb-2" />
            <span className="font-display text-lg sm:text-xl text-[#FF7A00]">
              {it.price}
            </span>
            {it.desc && (
              <p className="basis-full pt-1 text-xs sm:text-sm text-white/50">
                {it.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { FEATURED } from "../data/menu";
import AddButton from "./cart/AddButton";

export default function Featured({ onOrder }) {
  return (
    <section
      id="produits"
      data-testid="featured-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div className="reveal">
          <p className="num-tag mb-3">[ 01 / Les 5 classiques ]</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Le top 5,
            <br />
            <span className="text-[#FF7A00] glow-orange-text">choisi par vous.</span>
          </h2>
        </div>
        <p className="reveal max-w-sm text-white/60 text-sm leading-relaxed" style={{ transitionDelay: "120ms" }}>
          Les produits les plus commandés, les plus rentables et les plus
          compréhensibles. Direct, sans détour.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURED.map((p, i) => (
          <article
            key={p.id}
            data-testid={`featured-card-${p.id}`}
            className="product-card reveal relative overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#0e0e0e]"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="img-wrap relative h-56 sm:h-64 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-black/60 border border-[#FF7A00]/40 text-[#FF7A00]">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-display text-2xl sm:text-3xl leading-none">{p.name}</h3>
                <span className="text-[#FF7A00] font-display text-lg shrink-0 mt-1">
                  {p.price}
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>

              <button
                onClick={onOrder}
                data-testid={`featured-order-${p.id}`}
                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-[#FF7A00] transition group"
              >
                Voir options
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <div className="mt-4">
                <AddButton product={p} catId={p.catId} label="Ajouter au panier" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

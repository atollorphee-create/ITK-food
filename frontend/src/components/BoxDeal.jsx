import { Flame, ArrowRight } from "lucide-react";

export default function BoxDeal({ onOrder }) {
  const items = [
    "2 mini cheese",
    "Frites cheddar",
    "Oignons frits",
    "Tenders ou Wings",
  ];

  return (
    <section
      id="box"
      data-testid="box-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <div className="box-itk-deal relative overflow-hidden rounded-[36px] border border-[#1a1a1a] grain">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left content */}
          <div className="relative p-8 sm:p-12 lg:p-16">
            <p className="reveal num-tag mb-4">[ 02 / Deal du moment ]</p>

            <h2 className="reveal font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.85]" style={{ transitionDelay: "80ms" }}>
              La{" "}
              <span className="text-[#FF7A00] glow-orange-text">BOX ITK</span>
              <br />à{" "}
              <span className="relative inline-block">
                <span className="text-[#FF7A00]">10€</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[#FF7A00]/40 rounded-full" />
              </span>
            </h2>

            <p className="reveal mt-6 max-w-md text-white/65 text-base leading-relaxed" style={{ transitionDelay: "160ms" }}>
              Le combo ultime pour les vrais affamés. Sans compromis, sans
              rallonge sur l&apos;addition.
            </p>

            <ul className="reveal mt-7 space-y-3" style={{ transitionDelay: "240ms" }}>
              {items.map((it, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="h-7 w-7 rounded-full bg-[#FF7A00] text-black grid place-items-center text-xs font-display">
                    {i + 1}
                  </span>
                  <span className="text-white/85">{it}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-9 flex flex-wrap gap-3" style={{ transitionDelay: "320ms" }}>
              <button
                onClick={onOrder}
                data-testid="box-order-btn"
                className="btn-orange px-7 py-4 rounded-full font-display tracking-wider text-sm flex items-center gap-2"
              >
                Je veux la BOX
                <ArrowRight size={16} />
              </button>
              <span className="px-5 py-4 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/5 text-[#FF7A00] font-display text-sm tracking-wider flex items-center gap-2">
                <Flame size={14} /> Best-seller
              </span>
            </div>
          </div>

          {/* Right image — visuel officiel ITK */}
          <div className="relative min-h-[360px] lg:min-h-[600px] bg-black flex items-center justify-center p-4">
            <img
              src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/z6m7zzok_box%2010e.png"
              alt="Box ITK 10€"
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

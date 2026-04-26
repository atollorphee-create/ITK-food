import { Flame } from "lucide-react";

export default function Marquee() {
  const items = [
    "Smash Burgers",
    "Tacos Custom",
    "Poutine Canadienne",
    "Sandwichs Gratinés",
    "Box ITK 10€",
    "Wings & Tenders",
    "Frites Cheddar",
    "Fait Minute",
  ];
  const list = [...items, ...items];

  return (
    <section className="relative border-y border-[#161616] bg-[#080808] py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {list.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 font-display text-2xl sm:text-3xl uppercase tracking-wider"
          >
            <span className={i % 2 === 0 ? "text-white" : "text-[#FF7A00]"}>
              {t}
            </span>
            <Flame size={18} className="text-[#FF7A00]" />
          </span>
        ))}
      </div>
    </section>
  );
}

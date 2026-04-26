import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function StickyOrder({ onOrder }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={onOrder}
      data-testid="sticky-order-btn"
      aria-label="Commander"
      className={`md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 btn-orange px-7 py-4 rounded-full font-display text-sm tracking-wider flex items-center gap-2 glow-soft transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <ShoppingBag size={16} />
      Commander
    </button>
  );
}

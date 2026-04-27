import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/cart";

export default function CartButton() {
  const { count, total, openDrawer } = useCart();

  if (count === 0) return null;

  return (
    <button
      onClick={openDrawer}
      data-testid="cart-btn"
      aria-label={`Panier — ${count} articles`}
      className="fixed z-40 bottom-5 right-5 sm:bottom-6 sm:right-6 group flex items-center gap-3 px-5 sm:px-6 py-3.5 rounded-full btn-orange glow-soft shadow-[0_18px_40px_-10px_rgba(255,122,0,0.6)]"
    >
      <span className="relative">
        <ShoppingBag size={18} strokeWidth={2.4} />
        <span className="absolute -top-2 -right-2.5 h-5 min-w-[20px] px-1 grid place-items-center rounded-full bg-black text-[#FF7A00] text-[10px] font-display border border-[#FF7A00]">
          {count}
        </span>
      </span>
      <span className="font-display tracking-wider text-sm">
        {formatPrice(total)}
      </span>
    </button>
  );
}

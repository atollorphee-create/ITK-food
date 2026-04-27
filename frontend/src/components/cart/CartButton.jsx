import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/cart";

// Bouton panier inline (utilisable dans la navbar). Visible même si le panier est vide.
export default function CartButton({ className = "", showTotal = true }) {
  const { count, total, openDrawer } = useCart();
  const hasItems = count > 0;

  return (
    <button
      onClick={openDrawer}
      data-testid="cart-btn"
      aria-label={hasItems ? `Panier — ${count} articles` : "Panier vide"}
      className={`group flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border transition ${
        hasItems
          ? "border-[#FF7A00] bg-[#FF7A00]/10 hover:bg-[#FF7A00]/20"
          : "border-[#1f1f1f] bg-[#0e0e0e] hover:border-[#FF7A00]/60 hover:bg-[#FF7A00]/10"
      } text-white ${className}`}
    >
      <span className="relative">
        <ShoppingBag size={16} strokeWidth={2.4} className="text-[#FF7A00]" />
        {hasItems && (
          <span className="absolute -top-2 -right-2.5 h-4 min-w-[16px] px-1 grid place-items-center rounded-full bg-[#FF7A00] text-black text-[9px] font-display">
            {count}
          </span>
        )}
      </span>
      {showTotal && (
        <span className="font-display tracking-wider text-[11px] sm:text-xs hidden sm:inline">
          {hasItems ? formatPrice(total) : "Panier"}
        </span>
      )}
    </button>
  );
}

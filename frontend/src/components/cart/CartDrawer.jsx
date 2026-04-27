import { useState } from "react";
import { X, Plus, Minus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/cart";
import CheckoutForm from "./CheckoutForm";
import { ORDER_DISCLAIMER } from "../../data/options";

function ItemDetails({ item }) {
  const { config, kind } = item;
  if (!config) return null;
  const lines = [];
  if (kind === "tacos") {
    if (config.meats?.length) lines.push(`Viandes : ${config.meats.join(", ")}`);
    if (config.sauces?.length) lines.push(`Sauces : ${config.sauces.join(", ")}`);
  }
  if (kind === "poutine") {
    if (config.meat) lines.push(`Viande : ${config.meat}`);
    if (config.extraMeat) lines.push(`+ Viande supp. (+1,50€)`);
  }
  if (kind === "box" && config.choice) lines.push(`Au choix : ${config.choice}`);
  if (kind === "kids" && config.choice) lines.push(`Au choix : ${config.choice}`);
  if (config.removed?.length) lines.push(`Sans : ${config.removed.join(", ")}`);
  if (config.supplements?.length)
    lines.push(`Suppléments : ${config.supplements.map((s) => s.label).join(", ")}`);
  if (config.note) lines.push(`Note : ${config.note}`);

  if (!lines.length) return null;
  return (
    <ul className="mt-1.5 space-y-0.5">
      {lines.map((l, i) => (
        <li key={i} className="text-xs text-white/55">
          {l}
        </li>
      ))}
    </ul>
  );
}

export default function CartDrawer() {
  const {
    drawerOpen,
    closeDrawer,
    items,
    total,
    setQty,
    removeItem,
    clear,
  } = useCart();

  const [step, setStep] = useState("cart"); // cart | checkout

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[80]" data-testid="cart-drawer">
      <div
        className="absolute inset-0 bg-black/80 glass"
        onClick={closeDrawer}
      />
      <aside
        className="absolute right-0 top-0 h-full w-full sm:w-[460px] bg-[#0a0a0a] border-l border-[#161616] flex flex-col pop-in"
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 sm:px-6 h-16 border-b border-[#161616]">
          <div className="flex items-center gap-3">
            {step === "checkout" && (
              <button
                onClick={() => setStep("cart")}
                className="h-9 w-9 grid place-items-center rounded-full border border-[#222] hover:border-[#FF7A00]"
                aria-label="Retour"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            <h2 className="font-display text-xl">
              {step === "cart" ? "Mon panier" : "Validation"}
            </h2>
          </div>
          <button
            onClick={() => {
              setStep("cart");
              closeDrawer();
            }}
            data-testid="cart-close"
            aria-label="Fermer"
            className="h-9 w-9 grid place-items-center rounded-full border border-[#222] hover:border-[#FF7A00] hover:bg-[#FF7A00]/10"
          >
            <X size={16} />
          </button>
        </div>

        {step === "cart" ? (
          <>
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-white/55 py-16">
                  <ShoppingBag size={36} className="text-[#FF7A00]/60 mb-4" />
                  <p className="font-display text-xl mb-2">Panier vide</p>
                  <p className="text-sm">Ajoute un produit pour commencer.</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.cartId}
                      className="p-4 rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e]"
                      data-testid={`cart-item-${item.cartId}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-display text-base text-white">
                            {item.name}
                          </p>
                          <ItemDetails item={item} />
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          aria-label="Retirer"
                          className="text-white/40 hover:text-red-400 transition"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setQty(item.cartId, item.qty - 1)}
                            className="h-7 w-7 grid place-items-center rounded-full border border-[#222] hover:border-[#FF7A00]"
                            aria-label="Moins"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-display text-sm w-5 text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => setQty(item.cartId, item.qty + 1)}
                            className="h-7 w-7 grid place-items-center rounded-full border border-[#222] hover:border-[#FF7A00]"
                            aria-label="Plus"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-display text-base text-[#FF7A00]">
                          {formatPrice(item.unitPrice * item.qty)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* footer */}
            <div className="border-t border-[#161616] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-white/45">
                  Total estimé
                </span>
                <span className="font-display text-2xl text-[#FF7A00]">
                  {formatPrice(total)}
                </span>
              </div>
              <button
                onClick={() => setStep("checkout")}
                disabled={items.length === 0}
                data-testid="cart-checkout-btn"
                className={`w-full px-5 py-3.5 rounded-full font-display tracking-wider text-sm transition ${
                  items.length === 0
                    ? "bg-[#1a1a1a] border border-[#222] text-white/40 cursor-not-allowed"
                    : "btn-orange"
                }`}
              >
                Valider ma commande
              </button>
              {items.length > 0 && (
                <button
                  onClick={clear}
                  className="w-full text-xs text-white/40 hover:text-red-400 transition"
                >
                  Vider le panier
                </button>
              )}
              <p className="text-[10px] text-white/35 text-center">
                {ORDER_DISCLAIMER}
              </p>
            </div>
          </>
        ) : (
          <CheckoutForm
            onClose={() => {
              setStep("cart");
              closeDrawer();
            }}
            onBack={() => setStep("cart")}
          />
        )}
      </aside>
    </div>
  );
}

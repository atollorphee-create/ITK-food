import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../../context/CartContext";
import { detectCustomKind, parsePrice, formatPrice } from "../../utils/cart";

// Bouton "Ajouter" générique. Ouvre un modal de personnalisation
// si le produit est customizable, sinon ajoute directement.
export default function AddButton({ product, catId, label = "Ajouter", className = "" }) {
  const { addItem, openOptions } = useCart();

  const handleClick = (e) => {
    e?.stopPropagation();
    const kind = detectCustomKind(catId, product.id);

    if (kind === "simple") {
      addItem({
        productId: product.id || product.name,
        name: product.name,
        basePrice: parsePrice(product.price),
        unitPrice: parsePrice(product.price),
        qty: 1,
        kind: "simple",
        config: {},
      });
      toast.success(`${product.name} ajouté à la commande`, {
        description: formatPrice(parsePrice(product.price)),
        duration: 1800,
      });
      return;
    }

    openOptions({ product, kind, catId });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      data-testid={`add-btn-${(product.id || product.name).toString().toLowerCase().replace(/\s+/g, "-")}`}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FF7A00] text-black font-display text-xs tracking-wider hover:bg-[#ff8c1a] hover:shadow-[0_8px_24px_-8px_rgba(255,122,0,0.7)] transition ${className}`}
    >
      <Plus size={14} strokeWidth={2.6} />
      {label}
    </button>
  );
}

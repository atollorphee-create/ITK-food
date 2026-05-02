import { useState } from "react";
import { Phone, MapPin, MessageCircle, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/cart";
import { INFO } from "../../data/menu";
import { ORDER_DISCLAIMER } from "../../data/options";

function buildOrderMessage({ items, total, form }) {
  const lines = [];
  lines.push(`Bonjour ITK FOOD, je souhaite commander :`);
  lines.push("");
  items.forEach((item) => {
    lines.push(
      `${item.qty}× ${item.name} — ${formatPrice(item.unitPrice * item.qty)}`
    );
    const c = item.config || {};
    if (c.choice) lines.push(`   Au choix : ${c.choice}`);
    if (c.meat) lines.push(`   Viande : ${c.meat}`);
    if (c.extraMeat) lines.push(`   + Viande supplémentaire (+1,50€)`);
    if (c.meats?.length) lines.push(`   Viandes : ${c.meats.join(", ")}`);
    if (c.sauces?.length) lines.push(`   Sauces : ${c.sauces.join(", ")}`);
    if (c.sauce) lines.push(`   Sauce : ${c.sauce}`);
    if (c.menu)
      lines.push(`   Menu : frites + ${c.menu.drink} (+${c.menu.upgradePrice.toString().replace(".", ",")}€)`);
    if (c.removed?.length) lines.push(`   Sans : ${c.removed.join(", ")}`);
    if (c.supplements?.length)
      lines.push(
        `   Suppléments : ${c.supplements
          .map((s) => `${s.label} +${formatPrice(s.price)}`)
          .join(", ")}`
      );
    if (c.note) lines.push(`   Note : ${c.note}`);
    lines.push("");
  });
  lines.push(`Total estimé : ${formatPrice(total)}`);
  lines.push("");
  lines.push(`Nom : ${form.firstname}`);
  lines.push(`Téléphone : ${form.phone}`);
  lines.push(
    `Mode : ${form.mode === "delivery" ? "Livraison" : "À emporter"}`
  );
  if (form.mode === "delivery" && form.address)
    lines.push(`Adresse : ${form.address}`);
  if (form.note) lines.push(`Remarque : ${form.note}`);
  lines.push("");
  lines.push("— Envoyé via le site ITK FOOD.");
  return lines.join("\n");
}

export default function CheckoutForm({ onClose }) {
  const { items, total, clear } = useCart();
  const [step, setStep] = useState("form"); // form | summary
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    phone: "",
    mode: "pickup",
    address: "",
    note: "",
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validForm =
    form.firstname.trim().length >= 2 &&
    form.phone.replace(/\D/g, "").length >= 8 &&
    (form.mode !== "delivery" || form.address.trim().length >= 5);

  const message = buildOrderMessage({ items, total, form });
  const waUrl = `https://wa.me/${INFO.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validForm) setStep("summary");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Commande copiée");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Copie impossible — sélectionne le texte manuellement.");
    }
  };

  if (step === "summary") {
    return (
      <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 flex flex-col">
        <p className="num-tag mb-3">[ Récap commande ]</p>
        <h3 className="font-display text-2xl mb-5">Prêt à envoyer.</h3>

        <pre
          data-testid="order-message"
          className="flex-1 mb-5 p-4 rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] text-xs text-white/80 leading-relaxed whitespace-pre-wrap font-[Manrope] overflow-auto max-h-[44svh]"
        >
          {message}
        </pre>

        <div className="space-y-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="send-whatsapp"
            onClick={() => {
              setTimeout(() => {
                clear();
                onClose();
              }, 600);
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] text-black font-display tracking-wider text-sm hover:opacity-90 transition"
          >
            <MessageCircle size={16} strokeWidth={2.4} />
            Envoyer par WhatsApp
          </a>

          <button
            onClick={handleCopy}
            data-testid="copy-order"
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#222] hover:border-[#FF7A00] hover:bg-[#FF7A00]/10 text-white font-display tracking-wider text-sm transition"
          >
            {copied ? <Check size={16} className="text-[#FF7A00]" /> : <Copy size={16} />}
            {copied ? "Copié !" : "Copier la commande"}
          </button>

          <a
            href={`tel:${INFO.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#1a1a1a] hover:border-[#FF7A00]/40 text-white/80 hover:text-white text-xs transition"
          >
            <Phone size={13} /> Ou appeler le {INFO.phone}
          </a>
        </div>

        <p className="text-[10px] text-white/35 text-center mt-4">
          {ORDER_DISCLAIMER}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col"
      data-testid="checkout-form"
    >
      <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
        <div>
          <label className="block text-xs uppercase tracking-[0.22em] text-white/45 mb-2">
            Prénom *
          </label>
          <input
            value={form.firstname}
            onChange={(e) => update("firstname", e.target.value)}
            required
            data-testid="form-firstname"
            placeholder="Enzo"
            className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#FF7A00]/50"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.22em] text-white/45 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
            data-testid="form-phone"
            placeholder="06 12 34 56 78"
            className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#FF7A00]/50"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.22em] text-white/45 mb-2">
            Mode de retrait
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "pickup", label: "À emporter", Icon: MapPin },
              { id: "delivery", label: "Livraison", Icon: MessageCircle },
            ].map((m) => {
              const Icon = m.Icon;
              const active = form.mode === m.id;
              return (
                <button
                  type="button"
                  key={m.id}
                  data-testid={`form-mode-${m.id}`}
                  onClick={() => update("mode", m.id)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-display tracking-wider transition ${
                    active
                      ? "border-[#FF7A00] bg-[#FF7A00] text-black"
                      : "border-[#1f1f1f] bg-[#0e0e0e] text-white/75 hover:border-[#FF7A00]/50"
                  }`}
                >
                  <Icon size={14} />
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>

        {form.mode === "delivery" && (
          <div>
            <label className="block text-xs uppercase tracking-[0.22em] text-white/45 mb-2">
              Adresse de livraison *
            </label>
            <input
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              required
              data-testid="form-address"
              placeholder="Rue, code postal, ville"
              className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#FF7A00]/50"
            />
          </div>
        )}

        <div>
          <label className="block text-xs uppercase tracking-[0.22em] text-white/45 mb-2">
            Note supplémentaire
          </label>
          <textarea
            value={form.note}
            onChange={(e) => update("note", e.target.value)}
            placeholder="Allergies, étage, code…"
            rows={2}
            maxLength={200}
            className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#FF7A00]/50 resize-none"
          />
        </div>

        <div className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">{items.length} article(s)</span>
            <span className="font-display text-lg text-[#FF7A00]">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#161616] p-5">
        <button
          type="submit"
          disabled={!validForm}
          data-testid="form-submit"
          className={`w-full px-5 py-3.5 rounded-full font-display tracking-wider text-sm transition ${
            validForm ? "btn-orange" : "bg-[#1a1a1a] border border-[#222] text-white/40 cursor-not-allowed"
          }`}
        >
          Voir le récap
        </button>
      </div>
    </form>
  );
}

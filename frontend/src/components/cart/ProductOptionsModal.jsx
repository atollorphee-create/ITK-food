import { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../../context/CartContext";
import {
  SHARED_SUPPLEMENTS,
  MEATS,
  SAUCES,
  BURGER_SAUCES,
  BOX_CHOICES,
  KIDS_CHOICES,
  DRINKS,
  MENU_UPGRADE_PRICE,
} from "../../data/options";
import { parsePrice, parseIngredients, formatPrice } from "../../utils/cart";

// Renvoie le prix selon la taille du tacos
const TACOS_PRICES = { 1: 6.5, 2: 8.5, 3: 10.5 };

function Chip({ active, onClick, children, mini }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 ${mini ? "py-1.5" : "py-2"} rounded-full text-xs sm:text-sm border transition ${
        active
          ? "bg-[#FF7A00] border-[#FF7A00] text-black font-display"
          : "bg-[#161616] border-[#1f1f1f] text-white/80 hover:border-[#FF7A00]/50"
      }`}
    >
      {children}
    </button>
  );
}

function Section({ title, hint, children }) {
  return (
    <div className="border-t border-[#161616] pt-5">
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <p className="num-tag">[ {title} ]</p>
        {hint && <span className="text-[10px] text-white/40 uppercase tracking-[0.18em]">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

export default function ProductOptionsModal() {
  const { optionsModal, closeOptions, addItem, openDrawer } = useCart();

  // local config state
  const [size, setSize] = useState(1);
  const [meats, setMeats] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [supps, setSupps] = useState([]);
  const [removed, setRemoved] = useState([]);
  const [meat, setMeat] = useState(null);
  const [extraMeat, setExtraMeat] = useState(false);
  const [burgerSauce, setBurgerSauce] = useState(null);
  // Box ITK : forcer un choix de tenders uniquement (wings retirée — la box a 2 tenders par défaut)
  const [boxChoice] = useState("2 Tenders");
  const [kidsChoice, setKidsChoice] = useState(KIDS_CHOICES[0]);
  const [makeMenu, setMakeMenu] = useState(false);
  const [drink, setDrink] = useState(DRINKS[0]);
  const [note, setNote] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    // reset on open
    if (optionsModal) {
      setSize(1);
      setMeats([]);
      setSauces([]);
      setSupps([]);
      setRemoved([]);
      setMeat(null);
      setExtraMeat(false);
      setBurgerSauce(null);
      setKidsChoice(KIDS_CHOICES[0]);
      setMakeMenu(false);
      setDrink(DRINKS[0]);
      setNote("");
      setQty(1);
    }
  }, [optionsModal]);

  if (!optionsModal) return null;
  const { product, kind } = optionsModal;
  const ingredients = parseIngredients(product.desc || "");
  const basePrice = parsePrice(product.price);
  // Sauce required only when description mentions "sauce au choix"
  const sauceRequired =
    kind === "burger" && /sauce\s+au\s+choix/i.test(product.desc || "");

  const toggle = (arr, setArr, value, max = Infinity) => {
    if (arr.includes(value)) {
      setArr(arr.filter((v) => v !== value));
    } else if (arr.length < max) {
      setArr([...arr, value]);
    }
  };

  const toggleSupp = (s) => {
    const exists = supps.find((x) => x.label === s.label);
    if (exists) setSupps(supps.filter((x) => x.label !== s.label));
    else setSupps([...supps, s]);
  };

  // unit price calculation
  let unitPrice = basePrice;
  if (kind === "tacos") unitPrice = TACOS_PRICES[size];
  if (kind === "poutine" && extraMeat) unitPrice = basePrice + 1.5;
  unitPrice += supps.reduce((acc, s) => acc + s.price, 0);
  // "Faire un menu" : frites + boisson +3,50€ (uniquement burgers/sandwichs/classiques)
  const menuAvailable = kind === "burger";
  if (menuAvailable && makeMenu) unitPrice += MENU_UPGRADE_PRICE;

  // Validation
  const valid = (() => {
    if (kind === "tacos") {
      return meats.length === size && sauces.length >= 1;
    }
    if (kind === "poutine") return !!meat;
    if (sauceRequired) return !!burgerSauce;
    return true;
  })();

  const handleAdd = () => {
    let name = product.name;
    if (kind === "tacos") name = `Tacos ${size} viande${size > 1 ? "s" : ""}`;

    const config = {
      ...(kind === "tacos" && { size, meats, sauces }),
      ...(kind === "poutine" && { meat, extraMeat }),
      ...(kind === "box" && { choice: boxChoice }),
      ...(kind === "kids" && { choice: kidsChoice }),
      ...(kind === "burger" &&
        removed.length > 0 && { removed }),
      ...(sauceRequired && burgerSauce && { sauce: burgerSauce }),
      ...(menuAvailable && makeMenu && {
        menu: { drink, upgradePrice: MENU_UPGRADE_PRICE },
      }),
      ...(supps.length > 0 && { supplements: supps }),
      ...(note.trim() && { note: note.trim() }),
    };

    addItem({
      productId: product.id || product.name,
      name,
      basePrice: kind === "tacos" ? TACOS_PRICES[size] : basePrice,
      unitPrice,
      qty,
      config,
      kind,
    });

    toast.success(`${name} ajouté à la commande`, {
      description: `${qty}× · ${formatPrice(unitPrice * qty)}`,
      duration: 2200,
    });
    closeOptions();
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center"
      onClick={closeOptions}
      data-testid="options-modal"
    >
      <div className="absolute inset-0 bg-black/85 glass" />
      <div
        className="relative pop-in w-full sm:max-w-xl mx-0 sm:mx-4 max-h-[92svh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-[#1f1f1f] bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* sticky header */}
        <div className="sticky top-0 z-10 flex items-start justify-between p-5 sm:p-6 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#161616]">
          <div className="min-w-0">
            <p className="num-tag mb-1.5">[ Personnalise ]</p>
            <h3 className="font-display text-2xl sm:text-3xl leading-none truncate">
              {product.name}
            </h3>
          </div>
          <button
            data-testid="close-options"
            onClick={closeOptions}
            aria-label="Fermer"
            className="ml-3 h-9 w-9 grid place-items-center rounded-full border border-[#222] hover:border-[#FF7A00] hover:bg-[#FF7A00]/10 transition shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5">
          {/* TACOS */}
          {kind === "tacos" && (
            <>
              <Section title="Taille">
                <div className="flex gap-2">
                  {[1, 2, 3].map((n) => (
                    <Chip
                      key={n}
                      active={size === n}
                      onClick={() => {
                        setSize(n);
                        setMeats([]);
                      }}
                    >
                      {n} viande{n > 1 ? "s" : ""} · {formatPrice(TACOS_PRICES[n])}
                    </Chip>
                  ))}
                </div>
              </Section>

              <Section title={`Viandes`} hint={`${meats.length}/${size}`}>
                <div className="flex flex-wrap gap-2">
                  {MEATS.map((m) => (
                    <Chip
                      key={m}
                      mini
                      active={meats.includes(m)}
                      onClick={() => toggle(meats, setMeats, m, size)}
                    >
                      {m}
                    </Chip>
                  ))}
                </div>
              </Section>

              <Section title="Sauces" hint="1 ou plus">
                <div className="flex flex-wrap gap-2">
                  {SAUCES.map((s) => (
                    <Chip
                      key={s}
                      mini
                      active={sauces.includes(s)}
                      onClick={() => toggle(sauces, setSauces, s)}
                    >
                      {s}
                    </Chip>
                  ))}
                </div>
              </Section>
            </>
          )}

          {/* POUTINE */}
          {kind === "poutine" && (
            <>
              <Section title="Choix de viande" hint="obligatoire">
                <div className="flex flex-wrap gap-2">
                  {MEATS.map((m) => (
                    <Chip
                      key={m}
                      mini
                      active={meat === m}
                      onClick={() => setMeat(m)}
                    >
                      {m}
                    </Chip>
                  ))}
                </div>
              </Section>

              <Section title="Option">
                <Chip
                  active={extraMeat}
                  onClick={() => setExtraMeat(!extraMeat)}
                >
                  + Viande supplémentaire (+1,50€)
                </Chip>
              </Section>
            </>
          )}

          {/* BOX */}
          {kind === "box" && (
            <Section title="Au choix">
              <div className="flex flex-wrap gap-2">
                {BOX_CHOICES.map((c) => (
                  <Chip
                    key={c}
                    active={boxChoice === c}
                    onClick={() => setBoxChoice(c)}
                  >
                    {c}
                  </Chip>
                ))}
              </div>
            </Section>
          )}

          {/* KIDS */}
          {kind === "kids" && (
            <Section title="Au choix">
              <div className="flex flex-wrap gap-2">
                {KIDS_CHOICES.map((c) => (
                  <Chip
                    key={c}
                    active={kidsChoice === c}
                    onClick={() => setKidsChoice(c)}
                  >
                    {c}
                  </Chip>
                ))}
              </div>
            </Section>
          )}

          {/* BURGER / SANDWICH — retirer ingrédients */}
          {kind === "burger" && ingredients.length > 0 && (
            <Section title="Retirer un ingrédient" hint="optionnel">
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ing) => {
                  const isRemoved = removed.includes(ing);
                  return (
                    <button
                      key={ing}
                      type="button"
                      onClick={() => toggle(removed, setRemoved, ing)}
                      className={`px-3 py-2 rounded-full text-xs sm:text-sm border transition ${
                        isRemoved
                          ? "bg-red-500/15 border-red-500/40 text-red-300 line-through"
                          : "bg-[#161616] border-[#1f1f1f] text-white/80 hover:border-[#FF7A00]/50"
                      }`}
                    >
                      {ing}
                    </button>
                  );
                })}
              </div>
            </Section>
          )}

          {/* BURGER / SANDWICH / CLASSIQUES — Choix sauce */}
          {sauceRequired && (
            <Section title="Choisis ta sauce" hint="obligatoire">
              <div className="flex flex-wrap gap-2">
                {BURGER_SAUCES.map((s) => (
                  <Chip
                    key={s}
                    mini
                    active={burgerSauce === s}
                    onClick={() => setBurgerSauce(s)}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </Section>
          )}

          {/* Suppléments — pour tous les customizable sauf kids/box */}
          {kind !== "kids" && kind !== "box" && (
            <Section title="Suppléments" hint="optionnel">
              <div className="flex flex-wrap gap-2">
                {SHARED_SUPPLEMENTS.map((s) => {
                  const active = !!supps.find((x) => x.label === s.label);
                  return (
                    <Chip key={s.label} mini active={active} onClick={() => toggleSupp(s)}>
                      <span className="flex items-center gap-1.5">
                        <Plus size={11} /> {s.label} <span className="opacity-70">+{formatPrice(s.price)}</span>
                      </span>
                    </Chip>
                  );
                })}
              </div>
            </Section>
          )}

          {/* Faire un menu (frites + boisson) — burgers / sandwichs / classiques */}
          {menuAvailable && (
            <Section title="Faire un menu" hint={`+${formatPrice(MENU_UPGRADE_PRICE)}`}>
              <button
                type="button"
                onClick={() => setMakeMenu(!makeMenu)}
                className={`w-full flex items-center justify-between gap-3 p-4 rounded-2xl border transition ${
                  makeMenu
                    ? "border-[#FF7A00] bg-[#FF7A00]/10"
                    : "border-[#1f1f1f] bg-[#0e0e0e] hover:border-[#FF7A00]/50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-5 w-5 rounded-md border-2 grid place-items-center transition ${
                      makeMenu ? "border-[#FF7A00] bg-[#FF7A00]" : "border-[#2a2a2a]"
                    }`}
                  >
                    {makeMenu && <Plus size={12} className="text-black rotate-45" strokeWidth={3} />}
                  </span>
                  <span className="text-left">
                    <span className="block font-display text-base">Frites + Boisson</span>
                    <span className="block text-[11px] text-white/50">Ajoute frites maison & 1 boisson 33cl</span>
                  </span>
                </span>
                <span className="font-display text-base text-[#FF7A00]">
                  +{formatPrice(MENU_UPGRADE_PRICE)}
                </span>
              </button>

              {makeMenu && (
                <div className="mt-3">
                  <p className="text-[11px] text-white/45 uppercase tracking-[0.18em] mb-2">
                    Boisson au choix
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {DRINKS.map((d) => (
                      <Chip key={d} mini active={drink === d} onClick={() => setDrink(d)}>
                        {d}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}
            </Section>
          )}

          {/* Note */}
          <Section title="Note pour la cuisine" hint="optionnel">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={140}
              placeholder="ex : sans oignon, bien cuit…"
              className="w-full bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-3 text-sm text-white/90 focus:outline-none focus:border-[#FF7A00]/50 resize-none"
              rows={2}
            />
          </Section>

          {/* Quantity */}
          <div className="border-t border-[#161616] pt-5 flex items-center justify-between gap-3">
            <p className="num-tag">[ Quantité ]</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="h-9 w-9 grid place-items-center rounded-full border border-[#1f1f1f] hover:border-[#FF7A00]/50"
                aria-label="Moins"
              >
                <Minus size={14} />
              </button>
              <span className="font-display text-xl w-6 text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="h-9 w-9 grid place-items-center rounded-full border border-[#1f1f1f] hover:border-[#FF7A00]/50"
                aria-label="Plus"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* sticky footer CTA */}
        <div className="sticky bottom-0 z-10 p-5 bg-[#0a0a0a]/95 backdrop-blur border-t border-[#161616] flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Total</p>
            <p className="font-display text-2xl text-[#FF7A00]">
              {formatPrice(unitPrice * qty)}
            </p>
          </div>
          <button
            data-testid="add-to-cart-btn"
            disabled={!valid}
            onClick={handleAdd}
            className={`flex-1 sm:flex-none px-7 py-3.5 rounded-full font-display tracking-wider text-sm transition ${
              valid
                ? "btn-orange"
                : "bg-[#1a1a1a] border border-[#222] text-white/40 cursor-not-allowed"
            }`}
          >
            Ajouter à la commande
          </button>
        </div>
      </div>
    </div>
  );
}

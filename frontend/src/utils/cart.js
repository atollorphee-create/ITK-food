// Utils panier : parsing prix, formatage, IDs

export function parsePrice(str) {
  if (typeof str === "number") return str;
  if (!str) return 0;
  const m = String(str).match(/(\d+[,.]?\d*)/);
  if (!m) return 0;
  return parseFloat(m[1].replace(",", "."));
}

export function formatPrice(n) {
  if (!Number.isFinite(n)) return "0,00€";
  return `${n.toFixed(2).replace(".", ",")}€`;
}

export function slug(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function uid() {
  return Math.random().toString(36).slice(2, 9);
}

// Détecte le type de personnalisation à partir de la category id
export function detectCustomKind(catId, productId) {
  if (catId === "tacos") return "tacos";
  if (catId === "canadiennes") return "poutine";
  if (productId === "box-itk") return "box";
  if (catId === "menu-enfant") return "kids";
  if (catId === "burgers" || catId === "sandwichs" || catId === "divers")
    return "burger";
  return "simple"; // petite-faim, desserts, etc.
}

// Parse les ingrédients depuis la description (séparés par virgule)
// → renvoie tableau d'ingrédients dont l'utilisateur peut décider de retirer
export function parseIngredients(desc) {
  if (!desc) return [];
  // ne garde que la première phrase (avant le point)
  const first = desc.split(".")[0];
  return first
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

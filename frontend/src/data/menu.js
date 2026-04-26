// ITK FOOD — données démo (prix indicatifs street-food)
// Remplaçables facilement par la carte officielle du client.

export const FEATURED = [
  {
    id: "smash",
    name: "Smash Burgers",
    price: "à partir de 8€",
    desc: "Steak smashé, double cheddar, sauce ITK maison.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    tag: "Best-seller",
  },
  {
    id: "tacos",
    name: "Tacos Personnalisés",
    price: "à partir de 7€",
    desc: "Galette grillée, viande au choix, sauce fromagère.",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    tag: "Custom",
  },
  {
    id: "poutine",
    name: "Poutine Canadienne",
    price: "à partir de 9€",
    desc: "Frites maison, sauce brune, fromage fondu.",
    img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=80",
    tag: "Signature",
  },
  {
    id: "gratines",
    name: "Sandwichs Gratinés",
    price: "à partir de 7€",
    desc: "Pain moelleux, viande chaude, gratiné cheddar.",
    img: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=80",
    tag: "Gourmand",
  },
  {
    id: "box-itk",
    name: "Box ITK",
    price: "10€",
    desc: "2 mini cheese + frites cheddar oignons + tenders/wings.",
    img: "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/z6m7zzok_box%2010e.png",
    tag: "Deal du moment",
  },
];

export const CATEGORIES = [
  {
    id: "burgers",
    label: "Smash Burgers",
    icon: "beef",
    items: [
      { name: "Le Tenders", price: "4,90€", desc: "Pains potato buns, tenders, cheddar, salade, sauce au choix." },
      { name: "Le Burger", price: "5,90€", desc: "2 steaks, cheddar, ketchup/moutarde, cornichons, oignons frits." },
      { name: "L'Original", price: "6,90€", desc: "2 steaks, sauce smash, double cheddar, oignons confits." },
      { name: "Le Smoky", price: "8,50€", desc: "2 steaks, bacon, raclette, sauce smoky, rosty." },
    ],
  },
  {
    id: "sandwichs",
    label: "Sandwichs",
    icon: "sandwich",
    items: [
      { name: "Red Chicken", price: "6,50€", desc: "Poulet tandoori, crudités, gratinage cheddar." },
      { name: "Le Dz", price: "8,50€", desc: "Viande hachée, fefla magique, mozzarella." },
      { name: "Le Boursin", price: "8,50€", desc: "Poulet, crème boursin, mozzarella." },
      { name: "L'Hiver Vient", price: "8,50€", desc: "Steak, bacon, rosty, raclette." },
      { name: "Le Complet", price: "7,50€", desc: "Steak, sauce fromagère, œuf, mozzarella." },
    ],
  },
  {
    id: "tacos",
    label: "Tacos",
    icon: "tacos",
    isTacos: true,
    items: [
      { name: "Tacos 1 Viande", price: "6,50€", desc: "Galette grillée, frites, sauce fromagère, 1 viande au choix." },
      { name: "Tacos 2 Viandes", price: "8,50€", desc: "Galette grillée, frites, sauce fromagère, 2 viandes au choix." },
      { name: "Tacos 3 Viandes", price: "10,50€", desc: "Galette grillée, frites, sauce fromagère, 3 viandes au choix." },
    ],
    builder: {
      viandes: [
        "Poulet mariné", "Tandoori", "Viande hachée",
        "Cordon bleu", "Nuggets", "Escalope", "Tenders",
      ],
      sauces: [
        "Cheddar", "Mayo", "Blanche (maison)", "Samouraï",
        "Algérienne", "BBQ", "Ketchup", "Curry",
      ],
      supplements: [
        { label: "Cheddar", price: "+0,70€" },
        { label: "Boursin", price: "+1€" },
        { label: "Œuf", price: "+1€" },
        { label: "Raclette", price: "+1€" },
        { label: "Bacon", price: "+1,50€" },
        { label: "Fefla magique", price: "+1,50€" },
      ],
    },
  },
  {
    id: "canadiennes",
    label: "Canadiennes",
    icon: "soup",
    items: [
      { name: "Poutine", price: "6,90€", desc: "Frites, viande, cheddar, oignons frits, sauce fromagère, mozzarella." },
      { name: "Supplément viande", price: "+1,50€", desc: "Ajoute une portion de viande supplémentaire." },
    ],
  },
  {
    id: "divers",
    label: "Divers",
    icon: "sparkles",
    items: [
      { name: "Le Cheese", price: "5,50€", desc: "Le classique fondant." },
      { name: "Le Chicken", price: "4,90€", desc: "Poulet croustillant, sauce maison." },
      { name: "Le Chèvre Miel", price: "6,50€", desc: "Chèvre fondant, miel, salade." },
      { name: "Le Tenders", price: "5,90€", desc: "Tenders, cheddar, sauce au choix." },
      { name: "Le Bacon", price: "6,50€", desc: "Bacon grillé, cheddar, sauce smoky." },
      { name: "Le Rosty", price: "6,50€", desc: "Rosty, fromage, sauce signature." },
      { name: "Le Métisse", price: "6,50€", desc: "Mix viande, fromage fondu, crudités." },
      { name: "Le Winter", price: "8,50€", desc: "Recette d'hiver complète, gratinée." },
    ],
  },
];

export const INFO = {
  brand: "ITK FOOD",
  tagline: "Le snack du peuple, fait par le peuple.",
  address: "6 rue de Verdun, 57190 Florange",
  phone: "09 54 53 37 57",
  phoneRaw: "+33954533757",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=6+rue+de+Verdun+57190+Florange",
  snapchatUrl: "#",
  instagramUrl: "#",
  hours: [
    { d: "Lun – Jeu", h: "11h30 – 14h30 · 18h – 22h30" },
    { d: "Ven – Sam", h: "11h30 – 14h30 · 18h – 23h30" },
    { d: "Dimanche", h: "18h – 22h30" },
  ],
  services: ["Sur place", "À emporter", "Livraison"],
};

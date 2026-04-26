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
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80",
    tag: "Deal du moment",
  },
];

export const CATEGORIES = [
  {
    id: "burgers",
    label: "Burgers",
    items: [
      { name: "Smash Classic", price: "8€", desc: "Steak smashé, cheddar, oignon, sauce ITK." },
      { name: "Double Smash", price: "11€", desc: "Double steak, double cheddar, bacon, sauce maison." },
      { name: "Big ITK", price: "12€", desc: "Triple smash, cheddar fondu, sauce signature." },
      { name: "Chicken Crispy", price: "9€", desc: "Poulet pané croustillant, salade, sauce burger." },
      { name: "Veggie", price: "8€", desc: "Steak végétal, fromage, légumes grillés." },
    ],
  },
  {
    id: "tacos",
    label: "Tacos",
    items: [
      { name: "Tacos M (1 viande)", price: "7€", desc: "Frites + sauce fromagère, viande au choix." },
      { name: "Tacos L (2 viandes)", price: "9€", desc: "Frites + sauce fromagère, 2 viandes au choix." },
      { name: "Tacos XL (3 viandes)", price: "11€", desc: "Frites + sauce fromagère, 3 viandes au choix." },
      { name: "Tacos Géant (4 viandes)", price: "14€", desc: "Pour les gros appétits." },
    ],
  },
  {
    id: "sandwichs",
    label: "Sandwichs",
    items: [
      { name: "Kebab", price: "7€", desc: "Pain libanais, viande grillée, crudités, sauces." },
      { name: "Galette Grillée", price: "7€", desc: "Galette chaude, viande, fromage, crudités." },
      { name: "Panini Gratiné", price: "7€", desc: "Pain panini, fromage fondu, viande au choix." },
      { name: "Bagnat ITK", price: "8€", desc: "Pain spécial, garniture chaude gratinée." },
    ],
  },
  {
    id: "canadiennes",
    label: "Canadiennes",
    items: [
      { name: "Poutine Classique", price: "9€", desc: "Frites maison, fromage, sauce brune." },
      { name: "Poutine Cheddar", price: "10€", desc: "Frites + cheddar fondu + oignons frits." },
      { name: "Poutine Smash", price: "12€", desc: "Frites, smash haché, cheddar, sauce signature." },
      { name: "Poutine Chicken", price: "11€", desc: "Frites, poulet crispy, cheddar, sauce." },
    ],
  },
  {
    id: "petites-faims",
    label: "Petites Faims",
    items: [
      { name: "Frites Maison", price: "3,5€", desc: "Frites fraîches, sel marin." },
      { name: "Frites Cheddar Oignons", price: "5€", desc: "Cheddar fondu + oignons frits." },
      { name: "Tenders (4)", price: "5€", desc: "Tenders de poulet panés croustillants." },
      { name: "Wings (6)", price: "5,5€", desc: "Ailes de poulet épicées ou bbq." },
      { name: "Mozza Sticks", price: "4,5€", desc: "Bâtonnets de mozzarella panés." },
      { name: "Onion Rings", price: "4€", desc: "Anneaux d’oignons croustillants." },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Brownie Chocolat", price: "3€", desc: "Tiède, fondant, irrésistible." },
      { name: "Cookie XXL", price: "3€", desc: "Pépites de chocolat, cuit minute." },
      { name: "Donuts (x3)", price: "4€", desc: "Sucre glace ou chocolat." },
      { name: "Milkshake", price: "5€", desc: "Vanille, fraise, oreo, chocolat." },
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

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { INFO } from "../data/menu";

export default function Navbar({ onOrder }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "produits", label: "Produits" },
    { id: "box", label: "Box ITK" },
    { id: "menu", label: "Menu" },
    { id: "galerie", label: "Galerie" },
    { id: "avis", label: "Avis" },
    { id: "infos", label: "Infos" },
  ];

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[#161616]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          data-testid="logo-btn"
          className="flex items-center gap-2.5"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/5eg7p8in_logo.png"
            alt="ITK FOOD"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover"
          />
          <span className="sr-only">ITK FOOD</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className="text-[13px] uppercase tracking-[0.18em] text-white/70 hover:text-[#FF7A00] transition"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${INFO.phoneRaw}`}
            className="text-xs text-white/60 hover:text-white transition flex items-center gap-2"
            data-testid="navbar-phone"
          >
            <Phone size={14} /> {INFO.phone}
          </a>
          <button
            onClick={onOrder}
            data-testid="navbar-order-btn"
            className="btn-orange px-5 py-2.5 rounded-full text-sm font-display tracking-wider"
          >
            Commander
          </button>
        </div>

        <button
          className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-[#1f1f1f]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t border-[#161616] glass"
          data-testid="mobile-menu"
        >
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-${l.id}`}
                onClick={() => go(l.id)}
                className="text-left py-2 text-sm uppercase tracking-[0.18em] text-white/80 hover:text-[#FF7A00]"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOrder();
              }}
              className="btn-orange mt-2 px-5 py-3 rounded-full text-sm font-display tracking-wider"
              data-testid="mobile-order-btn"
            >
              Commander maintenant
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

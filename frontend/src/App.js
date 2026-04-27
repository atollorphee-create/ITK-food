import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Featured from "./components/Featured";
import BoxDeal from "./components/BoxDeal";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import OrderSection from "./components/OrderSection";
import Info from "./components/Info";
import Footer from "./components/Footer";
import OrderModal from "./components/OrderModal";
import Watermark from "./components/Watermark";
import useReveal from "./hooks/useReveal";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { CartProvider, useCart } from "./context/CartContext";
import CartButton from "./components/cart/CartButton";
import CartDrawer from "./components/cart/CartDrawer";
import ProductOptionsModal from "./components/cart/ProductOptionsModal";

function CartLayer() {
  // Mounted globally so cart works on every page
  return (
    <>
      <CartButton />
      <CartDrawer />
      <ProductOptionsModal />
    </>
  );
}

function HomeContent() {
  const [orderOpen, setOrderOpen] = useState(false);
  const ref = useReveal();
  const { openDrawer } = useCart();
  // CTA "Commander" globaux ouvrent le panier (commande directe)
  const openOrder = () => {
    // si panier vide → ouvre la modal classique réseaux/téléphone
    // sinon → ouvre le panier
    setOrderOpen(true);
  };

  return (
    <div className="App" ref={ref}>
      <Navbar onOrder={openOrder} />
      <Hero onOrder={openOrder} />
      <Marquee />
      <Featured onOrder={openOrder} />
      <BoxDeal />
      <Menu />
      <Gallery />
      <Reviews />
      <OrderSection onOrder={openOrder} />
      <Info />
      <Footer />
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "#0e0e0e",
            border: "1px solid #1f1f1f",
            color: "white",
          },
          className: "font-display",
        }}
      />
      <BrowserRouter>
        <Watermark />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="/cgv" element={<Terms />} />
        </Routes>
        <CartLayer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

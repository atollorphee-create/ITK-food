import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import StickyOrder from "./components/StickyOrder";
import useReveal from "./hooks/useReveal";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function Home() {
  const [orderOpen, setOrderOpen] = useState(false);
  const ref = useReveal();
  const openOrder = () => setOrderOpen(true);
  const closeOrder = () => setOrderOpen(false);

  return (
    <div className="App" ref={ref}>
      <Navbar onOrder={openOrder} />
      <Hero onOrder={openOrder} />
      <Marquee />
      <Featured onOrder={openOrder} />
      <BoxDeal onOrder={openOrder} />
      <Menu />
      <Gallery />
      <Reviews />
      <OrderSection onOrder={openOrder} />
      <Info />
      <Footer />
      <OrderModal open={orderOpen} onClose={closeOrder} />
      <StickyOrder onOrder={openOrder} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<Legal />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="/cgv" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

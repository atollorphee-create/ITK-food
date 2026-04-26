import { useState } from "react";
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
import useReveal from "./hooks/useReveal";

function App() {
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
    </div>
  );
}

export default App;

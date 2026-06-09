import { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import ProductIntro from "./components/ProductIntro/ProductIntro";
import ShopAndCart from "./components/ShopAndCart/ShopAndCart";

function App() {
  const navLinksPromise = async () => {
    const linksPromise = await fetch("/NavBar.json");
    return linksPromise.json();
  };
  const navPromise = navLinksPromise();


const [cart, setCart] = useState([])



  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-120">
            <span className="loading loading-spinner text-neutral"></span>
          </div>
        }
      >
        <NavBar cart={cart} navPromise={navPromise} />
      </Suspense>
        <Hero />
        <Stats />
        <ProductIntro />
        <ShopAndCart cart={cart} setCart={setCart} />
    </>
  );
}

export default App;

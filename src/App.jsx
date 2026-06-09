import { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import ProductIntro from "./components/ProductIntro/ProductIntro";
import ShopAndCart from "./components/ShopAndCart/ShopAndCart";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  const navLinksPromise = async () => {
    const linksPromise = await fetch("/NavBar.json");
    return linksPromise.json();
  };
  const navPromise = navLinksPromise();


const [cart, setCart] = useState([])

const [amount, setAmount] = useState(0)
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
      <ShopAndCart 
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;

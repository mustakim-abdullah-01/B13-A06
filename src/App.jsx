import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/NavBar/Hero/Hero";

function App() {
  const navLinksPromise = async () => {
    const linksPromise = await fetch("/NavBar.json");
    return linksPromise.json();
  };
  const navPromise = navLinksPromise();

  return (
    <>

      {/* NavBar */}

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-30">
            <span className="loading loading-spinner text-neutral"></span>
          </div>
        }
      >
        <NavBar navPromise={navPromise} />
        <Hero />
      </Suspense>


    </>
  );
}

export default App;

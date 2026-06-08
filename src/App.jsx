import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const navLinksPromise = async () => {
    const linksPromise = await fetch("/public/NavBar.json");
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
      </Suspense>

      <div className="flex flex-col justify-center items-center gap-4 h-dvh">
        <p className="text-8xl font-black">Hello</p>

        <button className="btn btn-lg btn-accent text-3xl font-extrabold">
          Click me
        </button>
      </div>
      
    </>
  );
}

export default App;

import { Suspense, useState } from "react";
import Shop from "./Shop";
import Cart from "./Cart";

const ShopAndCart = ({ cart, setCart }) => {
  const [shopActive, setShopActive] = useState(true);

  const productsPromise = async () => {
    const productPromise = await fetch("/ProductsData.Json");
    return productPromise.json();
  };

  const productPromise = productsPromise();

  return (
    <>
      <div>
        <div className="container mx-auto flex justify-center mb-11">
          <div className="p-1 border border-[#00000031] shadow-md rounded-full">
            <button
              className={`btn ${shopActive ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""}   text-[16px] rounded-full transition-colors duration-500`}
              onClick={() => setShopActive(true)}
            >
              Products
            </button>

            <button
              className={`btn ${!shopActive ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""} text-[16px] rounded-full transition-colors duration-500`}
              onClick={() => setShopActive(false)}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>
        {shopActive ? (
          <Suspense
            fallback={
              <div className="h-96 flex justify-center items-center">
                <span className="loading loading-spinner text-info"></span>
              </div>
            }
          >
            <Shop
              cart={cart}
              setCart={setCart}
              productPromise={productPromise}
            />
          </Suspense>
        ) : (
          <Cart cart={cart} setCart={setCart} />
        )}
      </div>
    </>
  );
};

export default ShopAndCart;

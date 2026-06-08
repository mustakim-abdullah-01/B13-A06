import { useState } from "react";
import Shop from "./Shop";
import Cart from "./Cart";

const ShopAndCart = () => {
  const [shopActive, setShopActive] = useState(true);

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
              Cart (2)
            </button>
          </div>
        </div>
          {shopActive ? <Shop /> : <Cart />}
      </div>
    </>
  );
};

export default ShopAndCart;

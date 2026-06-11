import { use } from "react";
import ProductCard from "./ShopCard/ProductCard";

const Shop = ({ productPromise, cart, setCart, amount, setAmount }) => {
  const productsData = use(productPromise);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-md:mb-16 mb-32">
        {productsData.map((product, index) => {
          return (
            <ProductCard
              cart={cart}
              setCart={setCart}
              key={index}
              product={product}
              amount={amount}
              setAmount={setAmount}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;

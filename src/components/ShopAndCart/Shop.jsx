import { use } from "react";
import ProductCard from "./ShopCard/ProductCard";

const Shop = ({ productPromise, cart, setCart, amount, setAmount }) => {
  const productsData = use(productPromise);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {productsData.map((product) => {
          return (
            <ProductCard
              cart={cart}
              setCart={setCart}
              key={product.id}
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
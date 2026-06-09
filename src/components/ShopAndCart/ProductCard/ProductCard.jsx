import { Check } from "lucide-react";

const ProductCard = ({ product, cart, setCart }) => {


  const { name, badge, description, price, billing_cycle, icon, features } =
    product;


const onClickHandler = () =>{

  const oldArray = cart

  const newArray = [... oldArray, product]

  setCart(newArray)

}


  return (
    <>
      <div className="bg-white md:w-96 mx-auto shadow-lg rounded-2xl p-6">

        <div className="top-badge relative h-9">
          <div
            className={`badge shadow badge-soft rounded-full px-3 py-4 absolute right-0 top-0  text-[14px] font-medium
              ${
                badge === "Best Seller"
                  ? "badge-warning"
                  : badge === "Popular"
                    ? "badge-primary"
                    : badge === "New"
                      ? "badge-success"
                      : ""
              }
              `}
          >
            {badge}
          </div>
        </div>

        <div className="icon flex justify-start mb-4">
          <div className="flex justify-center items-center rounded-full py-3.5 h-14 w-14">
            <img src={icon} alt="" />
          </div>
        </div>

        <div className="content space-y-4 mb-4">
          <h2 className="text-2xl text-[#101727] font-bold">{name}</h2>

          <p className="text-[#627382] text-[16px]">{description}</p>

          <h3>
            <span className="text-[#101727] font-bold text-2xl">${price}</span>/
            <span className="text-[#627382]">{billing_cycle}</span>
          </h3>

          <ul>
            {features.map((feature, index) => (
              <li
                className="flex gap-2.25 text-[#627382] font-semibold"
                key={index}
              >
                <span className="text-[#30b868]">
                  <Check />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onClickHandler}
          className="btn w-full text-white text-[16px] font-bold rounded-full transition-colors duration-500 bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:bg-linear-to-r hover:from-[#9514fa] hover:to-[#4f39f6]"
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductCard;
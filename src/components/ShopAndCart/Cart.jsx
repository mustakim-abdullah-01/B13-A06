import { BsCartPlus } from "react-icons/bs";
import { Slide, toast } from "react-toastify";

const Cart = ({ cart, setCart, amount, setAmount }) => {
  const onClickRemoveHandler = (product) => {
    const newCart = cart.filter((cartItem) => {
      return product !== cartItem;
    });

    setAmount(amount - product.price);
    setCart(newCart);
    toast.warn(`Removed ${product.name} from cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  const checkoutHandler = () => {
    setCart([]);
    setAmount(amount - amount);

    toast.success("Checkout Successful", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <>
      <div
        className="
          container
          p-10 mx-auto
        "
      >
        <h2
          className="
            mb-6
            text-[#101727] text-2xl font-bold
          "
        >
          Your Cart
        </h2>

        <div
          className="
            flex flex-col
            mb-6
            gap-4
          "
        >
          {cart.length === 0 ? (
            <div>
              <div
                className="
                flex flex-col justify-center items-center
                py-32 shadow-md
                text-[#627382]
                gap-8
                border border-[#627382]/30 rounded-2xl
              "
              >
                <div
                  className="
                  text-5xl
                "
                >
                  <BsCartPlus />
                </div>
                <div
                  className="
                  text-2xl text-center font-semibold
                "
                >
                  No Product Selected.
                </div>
              </div>
              <div className="divider"></div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col mb-7 gap-4">
                {cart.map((product, index) => {
                  const { icon, name, price } = product;

                  return (
                    <div
                      key={index}
                      className="flex max-sm:flex-col justify-between items-center p-5 rounded-2xl gap-4 hover:-translate-y-2.5 duration-500 border-t-2 border-t-transparent transition-all hover:shadow-md hover:shadow-[#4f39f6] hover hover:zoom-100 hover: hover:border-t-[#4f39f6] mt-2.5"
                    >
                      <div
                        className="
                        flex justify-center items-center
                        gap-4
                      "
                      >
                        <img src={icon} className="h-15 w-15 p-3.5" />

                        <div
                          className="
                          flex flex-col
                          gap-2
                        "
                        >
                          <h2
                            className="
                            text-[#101727] text-xl font-semibold
                          "
                          >
                            {name}
                          </h2>
                          <p
                            className="
                            text-[#627382] text-[16px]
                          "
                          >
                            ${price}
                          </p>
                        </div>
                      </div>

                      <button
                        className="
                        text-[16px] font-bold
                        rounded-full
                        btn btn-error btn-outline
                      "
                        onClick={() => onClickRemoveHandler(product)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>

              <div
                className="
              flex justify-between
            "
              >
                <p
                  className="
                text-[#627382] text-[16px]
              "
                >
                  Total :
                </p>
                <p
                  className="
                text-[#101727] text-2xl font-bold
              "
                >
                  ${amount}
                </p>
              </div>

              <button
                className="
              h-13
              font-semibold text-white text-[16px]
              bg-linear-to-r hover:bg-linear-to-r
              from-[#4f39f6] hover:from-[#9514fa]
              to-[#9514fa] hover:to-[#4f39f6]
              rounded-full
              transition-colors duration-500
              btn
            "
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

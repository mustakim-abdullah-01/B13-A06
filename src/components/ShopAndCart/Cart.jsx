import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart, amount, setAmount }) => {

  const onClickRemoveHandler = (product) => {
    const newCart = cart.filter((cartItem) => {
      return product !== cartItem;
    });

    setAmount(amount - product.price)
    setCart(newCart);
    toast(`Removed ${product.name} from cart`)
  };




  return (
    <>
      <div className="p-10 container mx-auto">
        <h2 className="text-[#101727] text-2xl font-bold mb-6">Your Cart</h2>

        <div className="flex flex-col gap-4 mb-6">

          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-12 text-[#627382] gap-8">
              <div className=" text-8xl">
                <BsCartPlus />
              </div>
              <div className="text-2xl font-semibold">No Product Selected.</div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 mb-7">
              {cart.map((product) => {
                const { icon, name, price } = product;

                return (
                  <div
                    key={product.id}
                    className="rounded-2xl p-5 shadow-lg flex justify-between items-center gap-4"
                  >

                    <div className="flex justify-center items-center gap-4">

                      <img src={icon} className="h-15 w-15 p-3.5" alt="" />

                      <div className="flex flex-col gap-2">

                        <h2 className="text-[#101727] text-xl font-semibold">{name}</h2>
                        <p className="text-[#627382] text-[16px]">${price}</p>

                      </div>

                    </div>

                    <button
                      onClick={() => onClickRemoveHandler(product)}
                      className="text-[16px] btn btn-error btn-soft font-bold rounded-full"
                    >
                      Remove
                    </button>

                  </div>
                );
              })}
            </div>
          )}

          <div className="flex justify-between">
            <p className="text-[#627382] text-[16px]">Total :</p>
            <p className="text-[#101727] text-2xl font-bold">${amount}</p>
          </div>

          <button className="h-13 btn font-semibold transition-colors duration-500 text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]  rounded-full text-[16px]  hover:bg-linear-to-r hover:from-[#9514fa] hover:to-[#4f39f6]" onClick={()=>{setCart([]);setAmount(amount - amount); toast("Checkout Successful")}}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

import { ShoppingCart } from "lucide-react";
import { use, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import CommonButton from "../CommonButton";

const NavBar = ({ navPromise }) => {
  const links = use(navPromise);

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="flex justify-between shadow-sm items-center py-4 px-1 container mx-auto">
        <div className="logo">
          <h2 className="text-4xl font-extrabold h-11 text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text">
            <a href="">DigiTools</a>
          </h2>
        </div>

        <div className="links-large-navbar max-lg:hidden">
          <ul className="flex gap-8 text-[16px] text-[#101727] font-semibold">
            {links.map((link, index) => (
              <li key={index}>
                <a href="">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="button-group flex items-center gap-1 md:gap-4">


          <div className="shopping-cart relative btn btn-sm btn-ghost h-12 rounded-full">
            <ShoppingCart />
            <div className="h-5 w-5 flex text-white font-bold text-md absolute left-2 bottom-1 justify-center items-center bg-red-500 rounded-full">{0}</div>
          </div>

          <div className="login-button text-[16px] font-semibold">
            <a href="">Login</a>
          </div>

          <div className="get-started-button max-md:hidden">
            <CommonButton text="Get Started" />
          </div>

          <div className="links-small-navbar lg:hidden relative">
            <div
              className={`
                text-black btn ${menuOpen ? "btn-active" : ""}
                `}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaAlignRight />
            </div>

            <div>
              <ul
                className={`
                shadow-5xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-4 rounded-tl-xl rounded-b-xl absolute duration-700 ${menuOpen ? "top-15" : "-top-150"} right-0 flex flex-col text-[16px] text-[#ffffff] font-semibold
                `}
              >
                {links.map((link, index) => (
                  <li className="border-b border-b-white/10 py-2" key={index}>
                    <a href="">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

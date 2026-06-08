import { ShoppingCart } from "lucide-react";
import { use, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import CommonButton from "./CommonButton";

const NavBar = ({ navPromise }) => {
  const links = use(navPromise);

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>


      <div className="flex justify-between shadow-sm items-center py-4 container mx-auto">


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


          <div className="shopping-cart btn btn-sm btn-ghost h-12 rounded-full">
            <ShoppingCart />
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
                border border-t-none border-black/20 bg-black/5 p-4 rounded-tl-xl rounded-b-xl absolute duration-700 ${menuOpen ? "top-15" : "-top-150"} right-0 flex flex-col gap-4 text-[16px] text-[#101727] font-semibold
                `}
              >
                {links.map((link, index) => (
                  <li key={index}>
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

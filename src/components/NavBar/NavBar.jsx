import { ShoppingCart } from "lucide-react";
import { use, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import CommonButton from "../CommonButton";

const NavBar = ({ navPromise, cart }) => {
  const links = use(navPromise);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="max-w-400 top-0 flex justify-between items-center z-20
          w-full
          md:py-4 py-2 px-1 mx-auto
          bg-base-200
          shadow-sm
        "
      >
        <div
          className="
            logo
          "
        >
          <h2
            className="
              h-11
              text-4xl text-transparent font-extrabold
              bg-linear-to-r bg-clip-text from-[#4f39f6] to-[#9514fa]
            "
          >
            <a href="">DigiTools</a>
          </h2>
        </div>

        <div
          className="
            links-large-navbar max-lg:hidden
          "
        >
          <ul
            className="
              flex
              text-[16px] text-[#101727] font-semibold
              gap-8
            "
          >
            {links.map((link, index) => (
              <li key={index}>
                <a href="">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="
            flex items-center
            button-group gap-1 md:gap-4
          "
        >
          <div
            className="
              relative
              h-12
              rounded-full
              shopping-cart btn btn-sm btn-ghost
            "
          >
            <ShoppingCart />
            <div
              className="
                flex absolute left-2 bottom-1 justify-center items-center
                h-5 w-5
                text-white text-md font-bold
                bg-red-500
                rounded-full
              "
            >
              {cart.length}
            </div>
          </div>

          <div
            className="
              text-[16px] font-semibold
              login-button
            "
          >
            <a href="">Login</a>
          </div>

          <div
            className="
              get-started-button max-md:hidden
            "
          >
            <CommonButton text="Get Started" />
          </div>

          <div
            className="
              lg:hidden relative
              links-small-navbar
            "
          >
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
                  <li
                    className="
                      py-2
                      border-b border-b-white/10
                    "
                    key={index}
                  >
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

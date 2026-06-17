import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="max-w-400 mx-auto pt-34 pb-8 bg-[#101727] text-white flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-between items-center gap-28 px-8 mb-20">
          <div>
            <h2 className="text-5xl font-semibold mb-4">DigiTools</h2>
            <p className="text-[16px]">
              Premium digital tools for creators, <br />
              professionals, and businesses. Work smarter <br />
              with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-xl">Product</h3>
            <ul className="gap-4 flex-col flex">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Templates</a>
              </li>
              <li>
                <a href="">Integrations</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-xl">Company</h3>
            <ul className="gap-4 flex-col flex">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-xl">Resources</h3>
            <ul className="gap-4 flex-col flex">
              <li>
                <a href="">Documentation</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-xl mb-4">Social Links</h4>

            <div className="flex gap-3">
              <div className="rounded-full flex justify-center items-center bg-white p-2.5 w-10 h-10">
                <a href="" className="text-2xl text-[#101727]">
                  <RiInstagramFill />
                </a>
              </div>
              <div className="rounded-full flex justify-center items-center bg-white p-2.5 w-10 h-10">
                <a href="" className="text-2xl text-[#101727]">
                  <FaFacebookSquare />
                </a>
              </div>
              <div className="rounded-full flex justify-center items-center bg-white p-2.5 w-10 h-10">
                <a href="" className="text-2xl text-[#101727]">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <div class="divider"></div>
        </div>

        <div className="w-full mt-3 px-17 text-[#fafafa] text-[16px] flex flex-wrap justify-between items-center gap-6">
          <div>
            <p className="w-full text-center">
              © 2026 Digitools. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap gap-6 md:gap-10 justify-center">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

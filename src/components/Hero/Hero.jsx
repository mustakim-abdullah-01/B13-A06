import { Play } from "lucide-react";
import banner from "../../assets/banner.png";
import CommonButton from "../CommonButton";

const Hero = () => {
  return (
    <>
      <div className="hero-div container mx-auto md:mb-24 max-md:py-16 flex max-md:gap-8 max-md:flex-col-reverse justify-between items-center">
        <div className="left-div px-1.5 flex justify-center max-md:items-center flex-col gap-9">
          <div className="content-div flex flex-col gap-4">
            <div className="badge-div shadow-lg bg-[#e1e7ff] px-4 py-2 w-73.5 rounded-full flex justify-center items-center gap-1">
              <div className="badge-icon relative">
                <div className="p-2 opacity-30 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full"></div>

                <div className="p-1 opacity-70 absolute bottom-1 left-1 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full"></div>
              </div>

              <div
                className="badge-text font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]
              
              "
              >
                New: AI-Powered Tools Available
              </div>
            </div>

            <div className="slogan-div">
              <h1 className="font-extrabold text-5xl md:text-7xl text-[#101727]">
                Supercharge Your <br />
                Digital Workflow
              </h1>
            </div>

            <div className="paragraphs-div flex flex-col gap-2 text-[18px] text-[#627382]">
              <p>
                Access premium AI tools, design assets, templates, and
                productivity
              </p>
              <p>software—all in one place. Start creating faster today.</p>
              <p>Explore Products</p>
            </div>
          </div>

          <div className="button-div flex flex-wrap max-md:justify-center gap-2 md:gap-4">
            <CommonButton text="Explore Products" />

            <button className="btn btn-outline h-13 btn-primary px-4 py-3 flex justify-center items-center gap-1 hover:bg-[#4f39f6] duration-700 rounded-full hover:text-[#ffff] font-Extrabold text-[16px] ">
              <Play />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="right-div banner">
          <img className="w-full" src={banner} />
        </div>
      </div>
    </>
  );
};

export default Hero;

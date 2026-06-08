import banner from "../../../assets/banner.png";
import CommonButton from "../CommonButton";

const Hero = () => {
  return (
    <>
      <div className="hero-div container mx-auto py-16 flex flex-wrap justify-between items-center">
        <div className="left-div flex flex-col gap-9">
          <div className="content-div flex flex-col gap-4">
            <div className="bg-[#e1e7ff] px-4 py-2 w-73.5 rounded-full flex justify-center items-center gap-1">
              <div className="p-1 bg-[#4f39f6]/50 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9514fa"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-dot-icon lucide-circle-dot"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>

              <button className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                New: AI-Powered Tools Available
              </button>
            </div>

            <div className="slogan-div">
              <h1 className="font-extrabold text-7xl leading-21">
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

          <div className="button-div flex gap-4">
            <CommonButton text="Explore Products" />

            <button
              href=""
              className="h-13 btn btn-outline btn-primary px-4 py-3 flex justify-center items-center gap-1 rounded-full hover:text-[#4f39f6] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4f39f6"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-play-icon lucide-play"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>

              <span className="flex justify-center font-Extrabold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                Watch Demo
              </span>

            </button>
          </div>
        </div>

        <div className="right-div banner">
          <img src={banner} />
        </div>
      </div>
    </>
  );
};

export default Hero;

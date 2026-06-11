import user from "../../assets/user.png";
import box from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const StepsCard = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 gap-8">
        <div className="p-6 rounded-2xl border-2 border-[#f1f1f1] transition-all shadow-md hover:-translate-y-2.5 duration-700 hover:shadow-[#4f39f6]">
          <div className="flex justify-end mb-7.5">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              <p className="font-bold text-white text-[14px]">01</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="px-7 py-6.5">
              <img src={user} alt="" />
            </div>
          </div>

          <div className="gap-y-4 text-center mb-24">
            <h3 className="text-[#101727] text-2xl font-bold">
              Create Account
            </h3>

            <p className="text-[#627382] text-[16px]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl border-2 border-[#f1f1f1]  shadow-md hover:-translate-y-2.5 duration-700 hover:shadow-[#4f39f6]">
          <div className="flex justify-end mb-7.5">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              <p className="font-bold text-white text-[14px]">02</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="px-7 py-6.5">
              <img src={box} alt="" />
            </div>
          </div>

          <div className="gap-y-4 text-center mb-24">
            <h3 className="text-[#101727] text-2xl font-bold">
              Choose Products
            </h3>

            <p className="text-[#627382] text-[16px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl border-2 border-[#f1f1f1] transition-all shadow-md hover:-translate-y-2.5 duration-700 hover:shadow-[#4f39f6]">
          <div className="flex justify-end mb-7.5">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              <p className="font-bold text-white text-[14px]">02</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="px-7 py-6.5">
              <img src={rocket} alt="" />
            </div>
          </div>

          <div className="gap-y-4 text-center mb-24">
            <h3 className="text-[#101727] text-2xl font-bold">
              Start Creating
            </h3>

            <p className="text-[#627382] text-[16px]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsCard;

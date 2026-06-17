const GradientSection = () => {
  return (
    <>
      <div className="max-md:px-4 text-center mt-8 py-30 flex flex-col max-w-400 mx-auto justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
        <h1 className=" text-white mb-4 text-[40px] font-extrabold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-center text-white text-[16px] mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <button className="btn h-13 w-42 rounded-full border-none bg-white">
            <span className="text-[16px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              Explore Products
            </span>
          </button>
          <button className="btn btn-outline h-13 w-42 rounded-full text-[16px] font-semibold text-white hover:text-[#4f39f6] duration-700 transition-colors ">
            View Pricing
          </button>
        </div>
        <p className="text-center text-white text-[16px]">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </>
  );
};

export default GradientSection;

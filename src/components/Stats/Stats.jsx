const Stats = () => {
  return (
    <>
      <div className="

      gap-8 lg:gap-32 mb-32 max-md:mt-16 py-8 md:py-16 md:px-52 bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex max-md:flex-col justify-center items-center
      
      ">


        <div className="user-div flex flex-col gap-3">
          <h2 className="font-extrabold text-6xl text-white">50K+</h2>
          <p className="text-2xl font-medium text-white">Active Users</p>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="tools-div flex flex-col gap-3">
          <h2 className="font-extrabold text-6xl text-white">200+</h2>
          <p className="text-[22px] font-medium text-white">Premium Tools</p>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="rating-div flex flex-col gap-3">
          <h2 className="font-extrabold text-6xl text-white">4.9</h2>
          <p className="text-2xl font-medium text-white">Rating</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
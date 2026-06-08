const CommonButton = ({text}) => {
  return (
    <button
      href=""
      className="h-13 btn font-semibold transition-colors duration-500 text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]  rounded-full text-[16px]  hover:bg-linear-to-r hover:from-[#9514fa] hover:to-[#4f39f6]"
    >
      {text}
    </button>
  );
};

export default CommonButton;

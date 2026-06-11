const CommonButton = ({ text }) => {
  return (
    <button
      className="
        h-13
        font-semibold text-white text-[16px]
        bg-linear-to-r hover:bg-linear-to-r from-[#4f39f6] hover:from-[#9514fa]
        to-[#9514fa] hover:to-[#4f39f6]
        rounded-full border-none
        transition-all duration-500 hover:duration-500
        hover:shadow-fuchsia-200 hover:shadow-lg
        hover:-translate-px btn
      "
    >
      {text}
    </button>
  );
};

export default CommonButton;

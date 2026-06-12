const CommonButton = ({ text, w }) => {
  return (
    <button
      className={`h-13 font-bold text-white text-[16px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full border-none btn w-[${w}]`}
    >
      {text}
    </button>
  );
};

export default CommonButton;

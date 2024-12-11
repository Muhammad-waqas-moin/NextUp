/* eslint-disable @typescript-eslint/no-explicit-any */
const PrimaryBtn = ({ onClick, BtnText, style }: any) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center  bg-gradient-to-r from-[#CF4C39] to-[#2D119F] text-white w-fit cursor-pointer hover:shadow-lg active:opacity-90 shadow-lg ease-in-out duration-200 gap-4  rounded-full ${style}`}
    >
      <p className="font-semibold">{BtnText}</p>
    </div>
  );
};

export default PrimaryBtn;

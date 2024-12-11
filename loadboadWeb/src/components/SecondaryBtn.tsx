/* eslint-disable @typescript-eslint/no-explicit-any */
const SecondaryBtn = ({ onClick, BtnText, style }: any) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center  justify-center border-2 border-red-400 rounded-full w-fit cursor-pointer hover:shadow-lg active:opacity-90 shadow-lg ease-in-out duration-200 ${style}`}
    >
        <p className="bg-gradient-to-r from-primgradient to-secgradient text-transparent bg-clip-text font-semibold">
          {BtnText}
        </p>
      </div>
  );
};

export default SecondaryBtn;

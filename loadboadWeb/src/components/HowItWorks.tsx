import works from "../assets/howitwork.png";

const HowItWorks = () => {
  return (
    <div className="relative h-96 md:h-screen w-full  bg-red-200">
      <div className="absolute top-0 left-0  w-full">
        <img src={works} className="w-[100%] h-96  md:h-screen" />
      </div>
      <h1 className="absolute top-0 w-full left-0 pt-12 text-3xl text-white font-semibold text-center">
        How it Works
      </h1>
    </div>
  );
};

export default HowItWorks;

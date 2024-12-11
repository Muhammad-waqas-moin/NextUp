
import "../components/NoSignalScreen.css";
import PrimaryBtn from "../components/PrimaryBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Heroimg1 from "../assets/heroImg.jpg";
import Heroimg2 from "../assets/heroImg2.jpg";
import Heroimg3 from "../assets/heroImg3.avif";
import Heroimg4 from "../assets/heroImg4.webp";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 3000,
    width: "100%",
    
  };
  return (
    <>
      <div  className="  relative  text-secondary  h-screen ">
        <div className="z-10  p-8 md:px-20  absolute top-0 left-0 w-full flex  justify-center h-screen   items-center ">
          <div className="   text-white">
            <div className=" w-[100%]  mx-auto flex flex-col text-center justify-start gap-9">
              {/* <h1 className=" text-3xl md:text-5xl  font-semibold capitalize font-jakarta tracking-wider leading-normal md:leading-[60px] ">
              Revolutionize Your Freight Management - Seamlessly <br />Match Loads with Carriers.
              </h1> */}
              <h1 className=" text-2xl md:text-5xl  font-semibold capitalize font-jakarta tracking-wider leading-normal md:leading-[60px] ">
            <ReactTyped
              fadeOut={true}
              stopped={false}
              loopCount={1}
              typeSpeed={40}
              loop={true}
              strings={["Revolutionize Your Freight Management - Seamlessly <br />Match Loads with Carriers."]}
            />
          </h1>
              <p className=" text-primary text-xs md:text-base  tracking-wider font-thin">
              Streamline your logistics with the ultimate load board. Find loads, connect with carriers, and access real-time insights - all in one place. Your journey to smarter freight starts here
              </p>
              <div className="w-full flex justify-center">
          <PrimaryBtn BtnText="Get Started" style={"text-md px-8 py-3"} />
        </div>
            </div>
          </div>

        </div>
        <Slider className="w-full   md:h-screen overflow-hidden" {...settings}>
       {[Heroimg1,Heroimg2,Heroimg3, Heroimg4 ].map((item ,ind)=> {
        return(
        <div key={ind} className="  w-full h-screen  ">
         <div className="relative">
  <img className="object-cover w-full h-screen" src={item} alt="item"/>
  {/* <div className="absolute inset-0 bg-black opacity-70 "> </div> */}
</div>
        </div>
       )})}      
      </Slider>
      </div>
    </>
  );
};

export default Hero;

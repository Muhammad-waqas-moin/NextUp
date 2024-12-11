/* eslint-disable react-hooks/exhaustive-deps */

// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./screens/Hero";
import AnimatedCursor from "react-animated-cursor"
import Services from "./screens/Services";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import PricingSection from "./screens/PricingSection";
import ContactUsPage from "./ContactUsPage";
import HowItWorks from "./components/HowItWorks";
import OfferServices from "./screens/OfferServices";
import { Toaster } from "react-hot-toast";
function App() {
  
 

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.1; // Trigger after scrolling 10% of viewport height
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="font-sans bg-secondary">
      <Navbar />
<div className=" bg-secondary ">
<Hero />

<Services />
<HowItWorks />
<OfferServices />
<div  className="bg-gradient-to-r px-8 md:px-20 flex text-center flex-col gap-4 justify-center items-center from-[#CF4C39] to-[#2D119F] text-white w-full  py-20 md:py-0 h-fit md:h-[50vh] my-24">
 <h1 data-aos="zoom-in" className="text-3xl font-semibold  ">
 Why Wait? Let's Move Your Freight Smarter!
 </h1>
 <p data-aos="zoom-in" className="text-lg font-medium">
 Register yourself now to unlock powerful tools, unparalleled support, and an ecosystem that drives results for carriers, shippers, and brokers.
 </p>
 <div
      className={`relative inline-flex items-center  justify-center border-2 bg-white px-8 py-3 border-red-400 rounded-full w-fit cursor-pointer hover:shadow-lg active:opacity-90 shadow-lg ease-in-out duration-200 `}
    >
        <p className="bg-gradient-to-r bg-white from-primgradient to-secgradient text-transparent text-base md:text-2xl bg-clip-text font-semibold">
          Get Started 
        </p>
      </div>
</div>


<PricingSection />
<ContactUsPage />

</div>
<Footer />
<div
      className={`${scrolled ? "scale-100  " : "scale-0"} transform transition-transform duration-500 ease-out w-12 h-12 flex justify-center items-center rounded-full bg-secondary shadow-2xl shadow-onPrimary border-primary border-[1px] fixed right-10 bottom-20`}
    >
      <a href="#" className=" animate-bounce">
      <i className="fa-solid fa-arrow-up text-lg text-primary"></i>
        
        </a>
    </div>
<AnimatedCursor
trailingSpeed={10}
      innerSize={16}
      outerSize={22}
      color='236, 236, 236'
      outerAlpha={0.2}
      innerScale={0.6}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Toaster/>
    </div>

  );
}
export default App;

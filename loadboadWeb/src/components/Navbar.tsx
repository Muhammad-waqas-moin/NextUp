import { useEffect, useState } from "react";
import LBLogo from "../assets/loadboardlogo.svg";
import PrimaryBtn from "./PrimaryBtn";
import RegistrationModal from "./RegistrationModal";
const Navbar = () => {
  const NavLinks = [
    {
      title: "Features",
      link: "#features",
    },
    {
        title: "Services",
        link: "#services",
      },
    {
      title: "Pricing",
      link: "#pricing",
    },
    
    {
      title: "Contact Us",
      link: "#contact",
    },
    
  ];


  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRegOpen , setIsRegOpen] = useState(false);
  
  const handleFormOpen =()=>{
    setIsRegOpen(true)
    console.log("clicked",isRegOpen)
  }
  const onClose = () => {
    setIsRegOpen(false)
  }
  const handleMenuOpen = () => {
    console.log('click')
    setIsOpen(!isOpen);
  };

  console.log(isOpen , "ckiiii")
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5; // 10% of the viewport height
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav>
      <div className={`${scrolled ? 'dark:bg-darkPrimary bg-secondary backdrop-blur-md' : 'bg-transparent'} px-4 md:px-20   duration-300 ease-in transition-all fixed top-0 left-0 z-50 flex justify-between items-center w-full  py-6`}>
        <div className=" ">
          {

          <img src={LBLogo } alt="  Vlogo object-contain" className="h-9 md:w-48 w-32" />
          }
      {/* <Vlogolight color={'red'}/> */}
          
          
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex justify-center items-center gap-8 h-full">
            {NavLinks.map((link, index) => (
              <a
                href={link.link}
                key={index}
                className="text-white  text-base font-semibold hover:scale-110 duration-300 "
              >
                {link.title}
              </a>
            ))}
          </div>
        <div className=" flex items-center gap-3">
                <div className="flex md:hidden ">
                <i  onClick={handleMenuOpen} className={`text-2xl  ${isOpen ? "text-white" : " text-white"}  cursor-pointer fa-solid fa-bars`}></i>
                </div>
          <PrimaryBtn  onClick={handleFormOpen} BtnText="Pre Register" style={" animate-pulse py-2 px-3 hidden md:flex text-sm px-6"} />
          {/* <SecondaryBtn  BtnText="Register" style={"py-2 px-3 hidden md:flex text-sm px-6 "} /> */}
        </div>
        </div>

      </div>

      {/* // web nav end */}
      {
          <div
            className={`${
              isOpen ? " top-0 " : "top-[-4000px]"
            } fixed w-full flex flex-col  justify-center  z-30 h-screen duration-300 dark:bg-darkSecondary bg-secondary text-primary dark:text-darkOnPrimary`}
          >
          
            <div className="flex flex-col gap-8 mt-20 px-8">
              {NavLinks.map((tab, ind) => {
                return (
                  <a
                    key={ind}
                    href={tab?.link}
                    onClick={handleMenuOpen}
                    className="hover:scale-110 duration-300 border-b-2 border-darkSecondary dark:border-white hover:border-black "
                  >
                    {tab?.title}
                  </a>
                );
              })}
            <PrimaryBtn onClick={handleFormOpen}  BtnText="Pre Register" style={"w-full py-2  flex text-sm px-4"} />
            </div>

           
          </div>
        }
        <RegistrationModal isRegOpen={isRegOpen} onClose={onClose}/>
    </nav>
  );
};

export default Navbar;

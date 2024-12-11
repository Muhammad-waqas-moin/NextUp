import LBLogo from "../assets/loadboardlogo.svg";
import applestore from "../assets/applestore.svg";
import google from "../assets/googlestore.svg";

const NavLinks = [
  { title: "Products", link: "#" },
  { title: "Pricing", link: "#" },
  { title: "Contact Us", link: "#" },
];
const ServiceLinks = ["Carriers", "Brokers", "Shippers"];
const LawfulLinks = ["Terms & Conditions", "Privacy Policy"];
const SocialTabs = [
  { icon: "fa-brands fa-facebook", link: "https://www.facebook.com/Verior.inc" },
  { icon: "fa-brands fa-twitter", link: "#" },
  { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/company/veriorofficial" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#CF4C391A] to-[#2D119F1A]  text-gray-300 text-sm py-10 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and App Store Buttons */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <img  src={LBLogo} alt="Loadboard Logo" className="animate-pulse h-fit w-[200px] md:w-[300px]" />
          <div className="flex gap-3">
            <img src={google} alt="Google Play" className="h-8 md:h-10 w-auto" />
            <img src={applestore} alt="Apple Store" className="h-8 md:h-10 w-auto" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold">Company</h3>
            {NavLinks.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold">Services</h3>
            {ServiceLinks.map((item, index) => (
              <p key={index} className="hover:text-white transition-colors">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold">Lawful</h3>
          {LawfulLinks.map((item, index) => (
            <p key={index} className="hover:text-white transition-colors">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-between   items-center mt-8">
        <div></div>
        <div className="flex gap-3">
          {SocialTabs.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full  hover:bg-gray-500 transition-colors"
            >
              <i className={`${item.icon} text-xl text-white`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

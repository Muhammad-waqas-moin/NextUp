/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from 'react';
import offerServiceImg from '../assets/offerServiceImg.svg';
import PrimaryBtn from '../components/PrimaryBtn';
type ServiceType = 'brokers' | 'carriers' | 'shippers';

const OfferServices = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>('brokers');

  const services = {
    brokers: {
      title: "Brokers",
      description: "Our load board is designed to empower freight brokers with cutting-edge tools and unmatched visibility. Effortlessly post loads, find reliable carriers, and negotiate competitive rates with real-time market insights. Maximize efficiency and build lasting relationships with carriers through our trusted platform, designed to streamline your brokerage operations.",
      price: "Monthly $60.00"
    },
    carriers: {
      title: "Carriers",
      description: "Access thousands of verified loads from trusted shippers and brokers. Our platform provides real-time load matching, automated booking, and instant payment processing to keep your trucks moving. Maximize efficiency and build lasting relationships with carriers through our trusted platform, designed to streamline your brokerage operations.",
      price: "Monthly $45.00"
    },
    shippers: {
      title: "Shippers",
      description: "Connect directly with qualified carriers and brokers to move your freight efficiently. Get instant quotes, real-time tracking, and detailed analytics to optimize your shipping operations.",
      price: "Monthly $75.00"
    }
  };

  return (
    <div id='services' className="w-full container  p-8 md:px-0 py-20 mx-auto  ">
      <h1 className=" text-2xl text-center md:text-left md:text-3xl font-bold text-white mb-8">Services We Offer</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="   lg:w-1/3 bg-gradient-to-br  from-[#D54F36]/30 to-[#2D11A2]/30 rounded-lg p-6">
          <div 
           className="flex flex-col gap-4 ">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                onClick={() => setActiveTab(service as ServiceType)}
                className={`text-left text-xl font-semibold p-3 w-full transition-all duration-300 ${
                  activeTab === service
                    ? 'bg-gradient-to-r  from-[#D54F36] to-[#2D11A2] text-primary'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {service.charAt(0).toUpperCase() + service.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="mt-6">
            <img
              src={offerServiceImg}
              alt="Service illustration"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="lg:w-2/3 bg-[#FFFFFF1A] rounded-lg p-4 md:p-8">
          <div className="h-full ">
            <div className="transform  flex py-5 flex-col h-full justify-between transition-all duration-500 ease-in-out">
              <div data-aos="zoom-out-up">

              <h2 className="text-xl md:text-3xl font-bold text-white mb-4">
                {services[activeTab].title}
              </h2>
              <p className="text-gray-300 text-xs md:text-lg mb-8">
                {services[activeTab].description}
              </p>
              </div>

              <div className="flex items-center   justify-center gap-2 ">
                <span className="text-white text-xl md:text-2xl font-bold">
                  {services[activeTab].price}
                </span>
                <div className='w-full'>

          <PrimaryBtn  BtnText="Get Access" style={" md:py-1 py-3 px-1 px-4   text-xs md:text-lg px-6"} />
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferServices;
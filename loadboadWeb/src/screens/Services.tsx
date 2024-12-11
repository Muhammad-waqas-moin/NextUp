/* eslint-disable @typescript-eslint/no-explicit-any */
import graph from "../assets/graph.svg";
import power from "../assets/power.svg";
import insite from "../assets/insite.svg";
import { useEffect } from "react";
import AOS from "aos";


const FeatureCard = ({ title, description, icon }: any) => {
  return (
    <div 
    data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"

    className="flex flex-col items-center justify-center p-8 hover:from-secondary  duration-100 hover:scale-105 hover:to-secgradient  bg-gradient-to-r from-[#CF4C39] to-[#2D119F] rounded-lg ">
      {/* Inner card with gradient border */}
        {/* Icon placeholder */}
        <img src={icon} alt="Feature Icon" className="h-12 w-12 mb-4" />

        {/* Title */}
        <h3 className="text-lg font-semibold text-white text-center">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-400 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const features = [
    {
      title: "Powerful Load Matching",
      description:
        "Instantly connect with shippers and carriers tailored to your needs.",
      icon: power,
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay ahead with live updates on load availability and rates.",
      icon: insite,
    },
    {
      title: "Comprehensive Insights",
      description:
        "Access analytics to make smarter decisions for your logistics.",
      icon: graph,
    },
    {
      title: "Powerful Load Matching",
      description:
        "Instantly connect with shippers and carriers tailored to your needs.",
      icon: power,
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay ahead with live updates on load availability and rates.",
      icon: insite,
    },
    {
      title: "Comprehensive Insights",
      description:
        "Access analytics to make smarter decisions for your logistics.",
      icon: graph,
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);
  return (
    <section
      id="features"
      className=" p-8 md:px-0 py-20 h-fit  container mx-auto flex flex-col items-center justify-center gap-16 "
    >
      <h1 className="md:text-4xl text-2xl font-bold text-primary">
        Key Features
      </h1>
      <div  className="grid gap-6 md:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {servicesTabs.map((service, ind) => {
          return (
            <div
              key={ind}
              className="group dark:bg-darkServices capitalize hover:shadow-2xl min-h-[282px]  h-fit md:max-h-[282px] overflow-hidden flex flex-col gap-4 shadow-sm rounded-lg p-4 hover:scale-105 duration-300 transition-all ease-in-out"
            >
              <div>
                <img
                  src={service?.image}
                  className="w-12 md:w-16 h-12 md:h-16 object-contain"
                />
              </div>
              <h1 className="text-lg md:text-xl font-bold dark:text-darkOnPrimary text-onPrimary ">
                {service?.title}
              </h1>
              <p className="text-xs  max-h-24 overflow-hidden font-medium w-[90%] md:w-[80%] text-OnSecondary leading-6 ">
                {service?.description}
              </p>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Services;

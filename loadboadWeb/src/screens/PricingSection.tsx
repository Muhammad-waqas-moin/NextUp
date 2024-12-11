/* eslint-disable @typescript-eslint/no-explicit-any */
import PrimaryBtn from "../components/PrimaryBtn";

const PricingCard = ({ title, price, headerText, features }: any) => {
    return (
      <div data-aos="flip-left"  className=" flex flex-col items-center hover:scale-105 duration-300 justify-center gap-8 bg-gradient-to-t from-primgradient to-secgradient rounded-xl p-2 shadow-lg py-12 h-full">
        {/* Card Header */}
        <div className="w-[60%] bg-secondary rounded-lg ">
            <h3 className="text-white text-lg font-semibold text-center py-2">{title}</h3>
        </div>
        
        {/* Header Text */}
        <div className="w-fit  text-center px-4 md:truncate font-medium italic">
            {headerText}
        </div>
        
        {/* Price */}
        <div className="text-white text-4xl font-semibold py-2 text-center">{price}</div>
        
        {/* Features */}
        <ul className="text-white text-sm space-y-2 px-6 h-[40vh] overflow-y-auto">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <span className="text-green-400 mr-2">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Button */}
        <div className="w-[60%]">
           <PrimaryBtn BtnText="Get Access Now" style="py-2 px-4 w-full rounded-lg" />
        </div>
        <p className="font-semibold text-sm text-primary">
            One-time payment for 1 month access
        </p>
      </div>
    );
  };
  
  const PricingSection = () => {
    const pricingPlans = [
      {
        title: "For Carriers",
        headerText: "Everything You Need to Find the Right Loads!",
        price: "$69",
        features: [
          "Access to Thousands of Load Listings: Search and book loads instantly across multiple lanes and industries.",
          "Custom Load Alerts: Get notified when loads match your preferred routes and equipment.",
          "Market Rate Insights: View competitive rates on popular lanes to maximize your earnings.",
          "Direct Communication with Brokers: Negotiate and book loads easily through our integrated chat system.",
          "Driver Management Tools: Manage dispatching for multiple drivers with real-time tracking.",
          "Priority Support: Dedicated support for quick resolutions and inquiries."
        ]
      },
      {
        title: "For Brokers",
        headerText: "Simplify Your Freight Management!",
        price: "$69",
        features: [
          "Post Unlimited Loads: Quickly post loads and get matched with qualified carriers.",
          "Carrier Verification: Access to a network of verified carriers for safer and faster shipping.",
          "Freight Tracking Tools: Real-time tracking to ensure on-time deliveries.",
          "Integrated Rate Calculator: Determine market-competitive rates for your loads.",
          "Document Storage: Upload and share BOLs, contracts, and invoices easily.",
          "Load History and Insights: Analyze past loads to improve future logistics strategies."
        ]
      },
      {
        title: "For Shippers",
        headerText: "Effortless Shipping for Your Business!",
        price: "$69",
        features: [
          "Instant Quotes: Get competitive shipping quotes instantly for any lane.",
          "Vetted Carrier Network: Ship with confidence using a network of verified carriers.",
          "Freight Booking Dashboard: Manage shipments and track progress in real time.",
          "Document Management: Easily upload, access, and share shipping documents.",
          "Flexible Payment Options: Pay securely with multiple payment methods, including escrow services.",
          "Dedicated Support: Receive assistance from our team 24/7 for any shipping concerns."
        ]
      }
    ];
  
    return (
      <div  id="pricing" className="container mx-auto h-fit bg-secondary pb-32 px-8 flex flex-col gap-8">
        <div className="my-10" >
          <h2 className="text-white text-2xl md:text-4xl text-center font-bold mb-12">
            Pricing
          </h2>
          <h3 className="text-primary text-lg md:text-3xl leading-snug tracking-wider font-semibold text-center">
            Choose a plan that fits your business and scale effortlessly. No hidden <br/> fees, just straightforward pricing for better logistics.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              headerText={plan.headerText}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PricingSection;
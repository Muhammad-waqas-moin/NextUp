import GTG  from "./assets/gtg.svg" 
import PrimaryBtn from "./components/PrimaryBtn";
const ContactUsPage = () => {
  return (
    <div id="contact" className="container mx-auto min-h-screen text-white flex flex-col    p-8 md:px-0 py-20">
      {/* Header Section */}
      <div className="  mb-16 flex flex-col gap-8">
        <h1 className="text-4xl font-normal ">
Let's Build<br />Something  
        </h1>
        <img  src={GTG} alt="GTG" className="w-96 h-fit" />
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-12">
        {/* Left Side: Form */}
        <div className="flex-1 space-y-6">
          <div>
            <label htmlFor="full-name" className="block text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
            data-aos="flip-left"
              id="full-name"
              type="text"
              placeholder="Your Full Name"
              className="w-full p-4 bg-[#FFFFFF1A] outline-none  border-gray-600 rounded-md text-white "
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email Address
            </label>
            <input
            data-aos="flip-left"
              id="email"
              type="email"
              placeholder="Your Email Address"
              className="w-full p-4  bg-[#FFFFFF1A] outline-none  border-gray-600 rounded-md text-white "
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
            data-aos="flip-left"
              id="message"
              placeholder="Write your message..."
              rows={5}
              className="w-full p-4 bg-[#FFFFFF1A] outline-none  border-gray-600 rounded-md text-white "
            />
          </div>

          <div className="mt-4">
            <PrimaryBtn BtnText="Send Message" style="w-full py-3" />
          </div>
        </div>

        {/* Right Side: Contact Information */}
        <div className="flex-1 mt-4 ml-4 space-y-6">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4 ">Contact Information</h3>
          <p className="text-base md:text-lg">
            You can also reach us directly using <br/>the information below.
          </p>

          <div className="space-y-2 text-xs">
            <p className="flex items-center">
              <span className="mr-3 text-purple-600"></span> (+1) 23412345678
            </p>
            <p className="flex items-center">
              <span className="mr-3 text-purple-600">✉️</span> loadboard@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

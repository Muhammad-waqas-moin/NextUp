/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import StaggeredDropDown from "./StaggeredDropDown";
import { toast } from "react-hot-toast";
import {  z } from "zod";

type FormData = {
  email: string;
  companyName: string;
  mcNumber: string;
  location: string;
  cargoType: string;
  fleetSize: string;
  preferredRoutes: string;
  equipmentType: string;
  shippingFrequency: string;
  pickupLocations: string;
};

const baseSchema = z.object({
  email: z.string().email("Invalid email format"),
  companyName: z.string().min(3, "Company name must be at least 3 characters"),
});

const brokerSchema = baseSchema.extend({
  mcNumber: z.string().min(4, "MC Number must be at least 4 characters"),
  location: z.string().min(3, "Location is required"),
  cargoType: z.string().min(3, "Cargo type is required"),
});

const carrierSchema = baseSchema.extend({
  mcNumber: z.string().min(4, "MC/DOT Number must be at least 4 characters"),
  fleetSize: z.string().min(1, "Fleet size is required"),
  preferredRoutes: z.string().min(3, "Preferred routes are required"),
  equipmentType: z.string().min(3, "Equipment type is required"),
});

const shipperSchema = baseSchema.extend({
  shippingFrequency: z.string().min(3, "Shipping frequency is required"),
  cargoType: z.string().min(3, "Cargo type is required"),
  pickupLocations: z.string().min(3, "Pickup locations are required"),
});

const RegistrationModal = ({ isRegOpen, onClose }: any) => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  
  const validateField = (name: keyof FormData, value: string) => {
    let validationSchema;
    switch (selectedOption) {
      case "Broker":
        validationSchema = brokerSchema;
        break;
      case "Carrier":
        validationSchema = carrierSchema;
        break;
      case "Shipper":
        validationSchema = shipperSchema;
        break;
      default:
        return;
    }

    try {
      const fieldSchema = (validationSchema as z.ZodObject<any>).shape[name];
      if (fieldSchema) {
        fieldSchema.parse(value);
        setErrors(prev => ({ ...prev, [name]: "" }));
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({
          ...prev,
          [name]: error.errors[0]?.message || "Invalid input"
        }));
      }
    }
  };

  const handleSubmit = async () => {
    try {
      let validationSchema;
      switch (selectedOption) {
        case "Broker":
          validationSchema = brokerSchema;
          break;
        case "Carrier":
          validationSchema = carrierSchema;
          break;
        case "Shipper":
          validationSchema = shipperSchema;
          break;
        default:
          toast.error("Please select a service type");
          return;
      }
  
      const result = validationSchema.safeParse(formData);
      
      if (!result.success) {
        const newErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
        // Mark all fields as touched on submit
        const allTouched = Object.keys(formData).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {} as Record<string, boolean>);
        setTouchedFields(allTouched);
        toast.error("Please fix the validation errors");
        return;
      }
  
      setErrors({});
      console.log(result,'sdsadsadsadas')
      toast.success("Pre Registration successful!😍💕");
      onClose();
      setFormData({
        email: "",
        companyName: "",
        mcNumber: "",
        location: "",
        cargoType: "",
        fleetSize: "",
        preferredRoutes: "",
        equipmentType: "",
        shippingFrequency: "",
        pickupLocations: "",
      });
      setShowFields(false);
      setTouchedFields({});
      setSelectedOption("Get Started");
    } catch (error) {
      console.error('Validation error:', error);
      toast.error("An error occurred during validation");
    }
  };
  
  const [selectedOption, setSelectedOption] = useState("Get Started");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    companyName: "",
    mcNumber: "",
    location: "",
    cargoType: "",
    fleetSize: "",
    preferredRoutes: "",
    equipmentType: "",
    shippingFrequency: "",
    pickupLocations: "",
  });
  const [showFields, setShowFields] = useState(false);
  
  if (!isRegOpen) return null;

  const handleServiceSelect = (option: string) => {
    setSelectedOption(option);
    setShowFields(true);
    setErrors({});
    setTouchedFields({});
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touchedFields[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (name: keyof FormData) => {
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const renderAdditionalFields = () => {
    switch (selectedOption) {
      case "Broker":
        return (
          <>
            <InputField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={(value) => handleInputChange("companyName", value)}
              onBlur={() => handleBlur("companyName")}
              placeholder="Enter your company name"
              error={touchedFields.companyName ? errors.companyName : undefined}
            />
            <InputField
              label="MC Number"
              name="mcNumber"
              value={formData.mcNumber}
              onChange={(value) => handleInputChange("mcNumber", value)}
              onBlur={() => handleBlur("mcNumber")}
              placeholder="Enter your MC number"
              error={touchedFields.mcNumber ? errors.mcNumber : undefined}
            />
            <InputField
              label="Location (City/State)"
              name="location"
              value={formData.location}
              onChange={(value) => handleInputChange("location", value)}
              onBlur={() => handleBlur("location")}
              placeholder="Enter your location"
              error={touchedFields.location ? errors.location : undefined}
            />
            <InputField
              label="Preferred Cargo Type"
              name="cargoType"
              value={formData.cargoType}
              onChange={(value) => handleInputChange("cargoType", value)}
              onBlur={() => handleBlur("cargoType")}
              placeholder="E.g., dry van, flatbed, refrigerated"
              error={touchedFields.cargoType ? errors.cargoType : undefined}
            />
          </>
        );
      case "Carrier":
        return (
          <>
            <InputField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={(value) => handleInputChange("companyName", value)}
              onBlur={() => handleBlur("companyName")}
              placeholder="Enter your company name"
              error={touchedFields.companyName ? errors.companyName : undefined}
            />
            <InputField
              label="MC/DOT Number"
              name="mcNumber"
              value={formData.mcNumber}
              onChange={(value) => handleInputChange("mcNumber", value)}
              onBlur={() => handleBlur("mcNumber")}
              placeholder="Enter your MC/DOT number"
              error={touchedFields.mcNumber ? errors.mcNumber : undefined}
            />
            <InputField
              label="Fleet Size"
              name="fleetSize"
              value={formData.fleetSize}
              onChange={(value) => handleInputChange("fleetSize", value)}
              onBlur={() => handleBlur("fleetSize")}
              placeholder="Enter your fleet size"
              error={touchedFields.fleetSize ? errors.fleetSize : undefined}
            />
            <InputField
              label="Preferred Lanes or Routes"
              name="preferredRoutes"
              value={formData.preferredRoutes}
              onChange={(value) => handleInputChange("preferredRoutes", value)}
              onBlur={() => handleBlur("preferredRoutes")}
              placeholder="Enter your preferred lanes or routes"
              error={touchedFields.preferredRoutes ? errors.preferredRoutes : undefined}
            />
            <InputField
              label="Equipment Type"
              name="equipmentType"
              value={formData.equipmentType}
              onChange={(value) => handleInputChange("equipmentType", value)}
              onBlur={() => handleBlur("equipmentType")}
              placeholder="E.g., dry van, reefer, flatbed"
              error={touchedFields.equipmentType ? errors.equipmentType : undefined}
            />
          </>
        );
      case "Shipper":
        return (
          <>
            <InputField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={(value) => handleInputChange("companyName", value)}
              onBlur={() => handleBlur("companyName")}
              placeholder="Enter your company name"
              error={touchedFields.companyName ? errors.companyName : undefined}
            />
            <InputField
              label="Shipping Frequency"
              name="shippingFrequency"
              value={formData.shippingFrequency}
              onChange={(value) => handleInputChange("shippingFrequency", value)}
              onBlur={() => handleBlur("shippingFrequency")}
              placeholder="E.g., daily, weekly, monthly"
              error={touchedFields.shippingFrequency ? errors.shippingFrequency : undefined}
            />
            <InputField
              label="Preferred Cargo Type"
              name="cargoType"
              value={formData.cargoType}
              onChange={(value) => handleInputChange("cargoType", value)}
              onBlur={() => handleBlur("cargoType")}
              placeholder="E.g., dry van, refrigerated"
              error={touchedFields.cargoType ? errors.cargoType : undefined}
            />
            <InputField
              label="Pickup/Delivery Locations"
              name="pickupLocations"
              value={formData.pickupLocations}
              onChange={(value) => handleInputChange("pickupLocations", value)}
              onBlur={() => handleBlur("pickupLocations")}
              placeholder="Enter pickup/delivery locations"
              error={touchedFields.pickupLocations ? errors.pickupLocations : undefined}
            />
          </>
        );
      default:
        return null;
    }
  };
  const handleClose = () => {
    setFormData({
      email: "",
      companyName: "",
      mcNumber: "",
      location: "",
      cargoType: "",
      fleetSize: "",
      preferredRoutes: "",
      equipmentType: "",
      shippingFrequency: "",
      pickupLocations: "",
    });
    setShowFields(false);
    setTouchedFields({});
    setSelectedOption("Get Started");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div className={`relative ${open ? 'min-h-[50vh] max-h-[80vh] overflow-y-auto' : 'h-fit'} duration-700 transition-all overflow-y-auto w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl m-4`}>
        <div className="flex items-center justify-between mb-5">
          {showFields && 
            <span className="cursor-pointer" onClick={() => {
              setOpen(false);
              setShowFields(false);
              setSelectedOption("Get Started");
              setErrors({});
              setTouchedFields({});
            }}>
              <i className="text-gray-400 hover:text-white transition-colors fa-solid fa-chevron-left"></i>
            </span>
          }
          <h2 className="text-xl font-semibold text-white"> {selectedOption == "Get Started" ? "Pre Registration" : selectedOption}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {!showFields && (
          <StaggeredDropDown 
            open={open}
            setOpen={setOpen}
            selectedOption={selectedOption}
            setSelectedOption={handleServiceSelect}
          />
        )}

        {showFields && (
          <div className="flex flex-col gap-4 mt-4 animate-slide-in-left">
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
              onBlur={() => handleBlur("email")}
              placeholder="Enter your email address"
              error={touchedFields.email ? errors.email : undefined}
            />

            {renderAdditionalFields()}

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-[#CF4C39] to-[#2D119F] text-white 
                       rounded-full font-semibold hover:opacity-90 transition-opacity focus:ring-2 
                       focus:ring-[#CF4C39] focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

type InputFieldProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder: string;
  error?: string;
  name: keyof FormData;
};

const InputField = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  onBlur,
  placeholder, 
  error,
  name 
}: InputFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full px-4 py-2.5 outline-none hover:animate-pulse focus:shadow-lg focus:shadow-primgradient 
                   bg-gray-800 rounded-full text-white placeholder-gray-400 focus:border-primgradient focus:ring-2 
                   focus:ring-primborder-primgradient focus:ring-opacity-50 transition-all 
                   hover:border-primgradient hover:rounded-full hover:shadow-primgradient shadow-lg 
                   duration-300 ease-in-out pr-10 ${error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
        required
      />
      {value && value.length > 0 && !error && (
        <i className="fa-solid fa-circle-check text-green-400 absolute right-4 top-1/2 -translate-y-1/2" />
      )}
      
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// Add the following CSS to your stylesheet

export default RegistrationModal;
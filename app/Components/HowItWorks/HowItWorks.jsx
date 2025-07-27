import React from "react";
import {
  FaMoneyBillWave,
  FaHome,
  FaShoppingCart,
  FaGift,
} from "react-icons/fa"; // Using appropriate icons
import HowItWorksCard from "./HowItWorksCard";

const steps = [
  {
    icon: <FaMoneyBillWave className="text-4xl text-green-600" />,
    title: "Report the issue with details and a photo",
  },
  {
    icon: <FaHome className="text-4xl text-green-600" />,
    title: "Authorities review and assign it",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-green-600" />,
    title: "Track status updates in your dashboard",
  },
  {
    icon: <FaGift className="text-4xl text-green-600" />,
    title: "Get notified when resolved",
  },
];

const HowItWorks = () => {
  return (
    <div className="pb-10 py-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          How it works
        </h1>
      </div>

      {/* Steps Container */}
      <div className="flex justify-center">
        <div className="relative grid grid-cols-2 gap-8">
          {/* Vertical Line */}
          <div className="absolute  left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 rounded-full"></div>

          {/* Mapping */}
          {steps.map((step, index) => (
            <HowItWorksCard
              step={step}
              index={index}
              key={index}
            ></HowItWorksCard>
          ))}
        </div>
      </div>

      {/* Know More Button */}
      <div className="text-center mt-12">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out">
          Know more
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;

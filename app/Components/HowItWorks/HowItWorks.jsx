import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import {
  FaCamera,
  FaUserCheck,
  FaChartLine,
  FaCheckCircle,
  FaArrowDown,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCamera className="text-4xl text-green-600" />,
    title: "Report the issue with details and a photo",
  },
  {
    icon: <FaUserCheck className="text-4xl text-green-600" />,
    title: "Authorities review and assign it",
  },
  {
    icon: <FaChartLine className="text-4xl text-green-600" />,
    title: "Track status updates in your dashboard",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-green-600" />,
    title: "Get notified when resolved",
  },
];

const HowItWorks = () => {
  return (
    <div className="mb-30">
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
          <div className="absolute  left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 rounded-full">
            <FaArrowDown className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-green-500 text-xl" />
          </div>

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
    </div>
  );
};

export default HowItWorks;

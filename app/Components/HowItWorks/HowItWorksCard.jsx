import React from "react";

const HowItWorksCard = ({ step, index }) => {
  return (
    <div>
      <div className="relative flex flex-col">
        {/* Step Content */}
        <div
          className={`flex mb-2 ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <span
            className={`bg-green-500 self-start inline-block px-6 rounded text-white ${
              index % 2 === 0 ? "mt-0" : "mt-20"
            }`}
          >
            Step {index + 1}
          </span>
        </div>

        <div className="flex-1 bg-white p-6 rounded border border-gray-200">
          <div className="flex items-center space-x-4">
            {/* Icon for the step */}
            <div className="flex-shrink-0">{step.icon}</div>
            <p className="text-gray-700 text-lg">{step.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;

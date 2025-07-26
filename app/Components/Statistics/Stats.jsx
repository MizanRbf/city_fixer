import React from "react";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaListAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-4">
      <div className="border border-primary rounded-sm p-4 flex items-center gap-4">
        <FaExclamationTriangle className="text-3xl text-red-600" />
        <h2 className="text-lg font-semibold">Total Issues Reported</h2>
      </div>

      <div className="border border-primary rounded-sm p-4 flex items-center gap-4">
        <FaCheckCircle className="text-3xl text-green-600" />
        <h2 className="text-lg font-semibold">Issues Resolved</h2>
      </div>
      <div className="border border-primary rounded-sm p-4 flex items-center gap-4">
        <FaCheckCircle className="text-3xl text-green-600" />
        <h2 className="text-lg font-semibold">Issues In Progress</h2>
      </div>
      <div className="border border-primary rounded-sm p-4 flex items-center gap-4">
        <FaCheckCircle className="text-3xl text-green-600" />
        <h2 className="text-lg font-semibold">Pending Issues</h2>
      </div>

      <div className="border border-primary rounded-sm p-4 flex items-center gap-4">
        <FaListAlt className="text-3xl text-blue-500" />
        <h2 className="text-lg font-semibold">Top Categories</h2>
      </div>

      <div className="border border-primary rounded-sm p-4 flex items-center gap-4">
        <FaMapMarkerAlt className="text-3xl text-purple-600" />
        <h2 className="text-lg font-semibold">Active Wards/Areas</h2>
      </div>
    </div>
  );
};

export default Stats;

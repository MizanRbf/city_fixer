import React from "react";
const stats = [
  {
    title: "Total Issues Reported",
    value: 1289,
    change: "+8.2%",
    icon: "📍",
    color: "bg-blue-100 text-blue-800",
    progressColor: "bg-blue-500",
  },
  {
    title: "Issues Resolved",
    value: 1045,
    change: "+6.4%",
    icon: "✅",
    color: "bg-green-100 text-green-800",
    progressColor: "bg-green-500",
  },
  {
    title: "Pending Issues",
    value: 244,
    change: "-2.3%",
    icon: "⏳",
    color: "bg-yellow-100 text-yellow-800",
    progressColor: "bg-yellow-500",
  },
  {
    title: "Top Category: Road",
    value: 642,
    change: "+11.1%",
    icon: "🛣️",
    color: "bg-purple-100 text-purple-800",
    progressColor: "bg-purple-500",
  },
  {
    title: "Active Areas",
    value: 37,
    change: "+3.5%",
    icon: "🌐",
    color: "bg-cyan-100 text-cyan-800",
    progressColor: "bg-cyan-500",
  },
  {
    title: "Feedback Received",
    value: 782,
    change: "+9.6%",
    icon: "💬",
    color: "bg-pink-100 text-pink-800",
    progressColor: "bg-pink-500",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-30 pt-20">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-[#ffffff] to-[#535353] shadow-md rounded-xl p-6 "
        >
          <div className="flex justify-between items-center mb-3">
            <div className={`text-xl p-2 rounded-full ${stat.color}`}>
              {stat.icon}
            </div>
            <span
              className={`text-sm ${
                stat.change.includes("-") ? "text-[#ff1111]" : "text-[#36ff2f]"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-700">{stat.title}</h3>
          <div className="text-2xl font-semibold text-white">{stat.value}+</div>
          <div className="w-full h-2 mt-3 bg-gray-200 rounded-full">
            <div
              className={`${stat.progressColor} h-2 rounded-full`}
              style={{ width: `${Math.min((stat.value / 1500) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

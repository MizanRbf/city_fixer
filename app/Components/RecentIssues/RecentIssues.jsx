"use client";

import React from "react";
import Link from "next/link";

const fakeIssues = [
  {
    id: 1,
    title: "Broken Streetlight in Sector 5",
    status: "Pending",
    image: "/assets/RecentIssues/brokenLight.jpg",
    category: "Electricity",
  },
  {
    id: 2,
    title: "Overflowing Trash Bin at Main Market",
    status: "In Progress",
    image: "/assets/RecentIssues/trash.jpg",
    category: "Sanitation",
  },
  {
    id: 3,
    title: "Pothole on College Road",
    status: "Resolved",
    image: "/assets/RecentIssues/hole.jpg",
    category: "Roads",
  },
  {
    id: 4,
    title: "Water Leakage in Ward 4",
    status: "Pending",
    image: "/assets/RecentIssues/waterLeak.jpg",
    category: "Plumbing",
  },
  {
    id: 5,
    title: "Noisy Construction Late Night",
    status: "In Progress",
    image: "/assets/RecentIssues/construction.jpg",
    category: "Noise",
  },
  {
    id: 6,
    title: "Illegal Parking Blocking Road",
    status: "Resolved",
    image: "/assets/RecentIssues/parking.jpg",
    category: "Traffic",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "In Progress":
      return "bg-blue-100 text-blue-700";
    case "Resolved":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const RecentIssues = () => {
  return (
    <section className="mb-30">
      <div className="">
        {/* Title */}
        <div className="text-center  mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 border-4 border-t-0 border-r-0 inline-block p-6">
            Recent Issues
          </h1>
        </div>

        {/* Card */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fakeIssues.map((issue) => (
            <div key={issue.id} className="bg-[#0000005d] rounded-lg ">
              <img
                src={issue.image}
                alt={issue.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    {issue.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${getStatusColor(
                      issue.status
                    )}`}
                  >
                    {issue.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-200">
                  {issue.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/issues">
            <button className="bg-secondary hover:bg-[#2c6877] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out cursor-pointer">
              View All Issues
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentIssues;

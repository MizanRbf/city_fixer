import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#0a2122]">
      <nav className="max-w-[1800px] mx-auto px-4 py-4 flex justify-between  items-center">
        <h1 className="text-white">CityFixer</h1>
        <ul className="flex gap-4 *:font-semibold text-white">
          <li>Home</li>
          <li>Report</li>
          <li>Issues</li>
        </ul>
        <button className="button">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;

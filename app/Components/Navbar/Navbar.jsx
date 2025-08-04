import React from "react";
import LargeMenu from "./LargeMenu";

const Navbar = () => {
  return (
    <div className="bg-[#0a2122] fixed right-0 left-0 top-0">
      <nav className="max-w-[1800px] mx-auto px-4 py-4 flex justify-between  items-center">
        <h1 className="text-white">CityFixer</h1>
        <LargeMenu></LargeMenu>
        <button className="button">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;

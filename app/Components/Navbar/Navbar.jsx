import React from "react";
import LargeMenu from "./LargeMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#0a2122] fixed right-0 left-0 top-0 z-10">
      <nav className="max-w-[1800px] mx-auto px-4 py-4 flex justify-between  items-center">
        <h1 className="text-white">CityFixer</h1>
        <LargeMenu></LargeMenu>
        <Link href={"/login"}>
          <button className="button">Login</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

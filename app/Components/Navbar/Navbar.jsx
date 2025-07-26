import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-10 items-center bg-secondary">
      <h1 className="text-white">CityFixer</h1>
      <ul className="flex gap-4 *:font-semibold text-white">
        <li>Home</li>
        <li>About</li>
        <li>Dashboard</li>
      </ul>
      <button className="button">Login</button>
    </nav>
  );
};

export default Navbar;

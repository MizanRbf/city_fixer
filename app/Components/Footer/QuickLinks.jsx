import React from "react";

const QuickLinks = () => {
  return (
    <div className="col-span-6 text-center md:text-left md:col-span-3">
      <p className="pb-1 text-lg font-medium">Quick Links</p>
      <ul>
        <li>
          <a rel="noopener noreferrer" href="#" className="hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="#" className="hover:text-primary">
            About
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="#" className="hover:text-primary">
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;

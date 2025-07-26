import React from "react";

import SocialIcon from "./SocialIcon";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <div className="bg-secondary border-t-2 border-primary">
      <footer className="py-6 text-white">
        <div className="container px-6 mx-auto space-y-6  md:space-y-12">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <h1>CityFixer</h1>
              </a>
            </div>
            {/* Quick Links */}
            <QuickLinks></QuickLinks>
          </div>
          <hr className="" />

          <div className="flex justify-between">
            {/* All rights reserved */}
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2025 All rights reserved</span>
              <a rel="noopener noreferrer" href="#">
                <span>Privacy policy</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>Terms of service</span>
              </a>
            </div>

            {/* Social Icons */}
            <SocialIcon></SocialIcon>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

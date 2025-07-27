import Image from "next/image";
import React from "react";
import bannerImage from "@/public/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-[#006366] to-[#000] ">
      <section className="max-w-[1500px] mx-auto px-4 py-4 flex flex-col md:flex-row gap-8 items-center">
        {/* Left Side - Text */}
        <div className="flex justify-center md:justify-start w-full">
          <div className="space-y-4">
            <h1 className="text-[#39f8ff]">
              Fix Your City, One Report <br className="hidden md:block" /> at a
              Time
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Report problems. Track solutions. Build a better community
              together.
            </p>
            <div>
              <button className="bg-secondary text-white rounded-full px-4 py-1">
                Report an Issue
              </button>
              <button className="bg-white rounded-full px-4 py-1 ml-2">
                View Public Issues
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Collage */}
        <div className="grid grid-cols-3 gap-4 my-10 mr-10">
          {/* First column */}
          <div className="space-y-4 md:mt-45">
            <Image src={bannerImage} alt="Banner" className="" />
            <Image src={bannerImage} alt="Banner" className="md:hidden" />
            <Image src={bannerImage} alt="Banner" className="md:hidden" />
          </div>

          {/* Second column */}
          <div className="space-y-4 md:mt-25">
            <Image src={bannerImage} alt="Banner" className="" />
            <Image src={bannerImage} alt="Banner" className="" />
            <Image src={bannerImage} alt="Banner" className="md:hidden" />
          </div>

          {/* third column */}
          <div className="space-y-4">
            <Image src={bannerImage} alt="Banner" className="" />
            <Image src={bannerImage} alt="Banner" className="" />
            <Image src={bannerImage} alt="Banner" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

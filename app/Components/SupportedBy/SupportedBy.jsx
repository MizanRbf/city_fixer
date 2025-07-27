import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SupportedBy = () => {
  return (
    <div className="pb-30 px-4 ">
      {/* Title */}
      <div className="text-center  mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 border-4 border-t-0 border-l-0 inline-block p-6">
          Supported By
        </h1>
      </div>

      {/* Supporter logo */}

      <Marquee
        pauseOnHover="true"
        className="bg-gradient-to-br from-[#ffffff] to-[#070707] border border-gray-200 shadow-xl"
      >
        <Image
          src="/Marquee/marquee1.png"
          alt="Partner 1"
          width={120}
          height={60}
          className="mr-30"
        />
        <Image
          src="/Marquee/marquee2.png"
          alt="Partner 2"
          width={120}
          height={60}
          className="mr-30"
        />
        <Image
          src="/Marquee/marquee3.png"
          alt="Partner 3"
          width={120}
          height={60}
          className="mr-30"
        />
        <Image
          src="/Marquee/marquee4.png"
          alt="Partner 4"
          width={120}
          height={60}
          className="mr-30"
        />
        <Image
          src="/Marquee/marquee5.png"
          alt="Partner 5"
          width={120}
          height={60}
          className="mr-30"
        />
        <Image
          src="/Marquee/marquee6.png"
          alt="Partner 6"
          width={120}
          height={60}
          className="mr-30"
        />
        <Image
          src="/Marquee/marquee7.png"
          alt="Partner 7"
          width={120}
          height={60}
          className="mr-30"
        />
      </Marquee>
    </div>
  );
};

export default SupportedBy;

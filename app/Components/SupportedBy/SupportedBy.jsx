import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SupportedBy = () => {
  return (
    <div className="mb-10 px-4 ">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Supported By
        </h1>
      </div>

      {/* Supporter logo */}

      <Marquee
        pauseOnHover="true"
        className="bg-[#d4d4d427] border border-gray-200 shadow-xl"
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

import React from "react";
import bannerImage from "@/public/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <banner>
      <Image src={bannerImage} alt="Banner" className="w-full" />
    </banner>
  );
};

export default Banner;

import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const page = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      <div className="max-w-[1500px] mx-auto px-4 min-h-[calc(100vh-274px)]">
        {/* Title */}
        <div className="text-center  mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 mt-20 border-4 border-t-0 border-x-0 inline-block p-2">
            Report
          </h1>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default page;

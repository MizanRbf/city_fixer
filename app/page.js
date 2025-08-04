import React from "react";
import Stats from "./Components/Statistics/Stats";
import RecentIssues from "./Components/RecentIssues/RecentIssues";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import SupportedBy from "./Components/SupportedBy/SupportedBy";
import ImpactHighlights from "./Components/ImpactHighlights/ImpactHighlights";
import Banner from "./Components/Banner/Banner";

const HomePage = () => {
  return (
    <div className="">
      {/* Banner */}
      <Banner></Banner>
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Stats */}
        <Stats></Stats>
        {/* Recent Issues */}
        <RecentIssues></RecentIssues>
        {/* Impact Preview */}
        <ImpactHighlights></ImpactHighlights>
        {/* How It Works */}
        <HowItWorks></HowItWorks>
        {/* Supported By  */}
        <SupportedBy></SupportedBy>
      </div>
    </div>
  );
};

export default HomePage;

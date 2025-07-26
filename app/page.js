import React from "react";
import Stats from "./Components/Statistics/Stats";
import RecentIssues from "./Components/RecentIssues/RecentIssues";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import SupportedBy from "./Components/SupportedBy/SupportedBy";
import ImpactHighlights from "./Components/ImpactHighlights/ImpactHighlights";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Stats */}
      <Stats></Stats>
      {/* Recent Issues */}
      <RecentIssues></RecentIssues>
      {/* Impact Preview */}
      <ImpactHighlights></ImpactHighlights>
      {/* Supported By  */}
      <SupportedBy></SupportedBy>
      {/* How It Works */}
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default HomePage;

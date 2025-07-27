import React from "react";
import Card from "./Card";
const successStories = [
  {
    id: 1,
    title: "Fixed Broken Street Light",
    quote: "Our street is bright again thanks to your fast response!",
    beforeImg: "/assets/RecentIssues/trash.jpg",
    afterImg: "/assets/RecentIssues/trash.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Cleared Flooded Road",
    quote: "Life is easier now. Appreciate the quick fix!",
    beforeImg: "/assets/RecentIssues/trash.jpg",
    afterImg: "/assets/RecentIssues/trash.jpg",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Repaired Playground Equipment",
    quote: "Kids can safely play again. Great job!",
    beforeImg: "/assets/RecentIssues/trash.jpg",
    afterImg: "/assets/RecentIssues/trash.jpg",
    isFeatured: false,
  },
];

const ImpactHighlights = () => {
  return (
    <div className="mb-30">
      <div className="text-center  mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 border-4 border-t-0 border-l-0 inline-block p-6">
          Impact Highlights
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {successStories.map((story) => (
          <Card story={story} key={story.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default ImpactHighlights;

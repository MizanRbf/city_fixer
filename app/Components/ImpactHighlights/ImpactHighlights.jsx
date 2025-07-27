import React from "react";
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
    <div className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Impact Highlights
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {successStories.map((story) => (
          <div
            key={story.id}
            className={`rounded-xl shadow-md p-5 border ${
              story.isFeatured ? "border-green-600" : "border-gray-200"
            }`}
          >
            {story.isFeatured && (
              <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                🌟 Success Story of the Month
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {story.title}
            </h3>
            <p className="italic text-gray-600 mb-4">"{story.quote}"</p>

            <div className="flex gap-4">
              <div className="w-1/2">
                <img
                  src={story.beforeImg}
                  alt="Before"
                  className="rounded-md w-full h-40 object-cover"
                />
                <p className="text-sm text-center mt-1 text-gray-500">Before</p>
              </div>
              <div className="w-1/2">
                <img
                  src={story.afterImg}
                  alt="After"
                  className="rounded-md w-full h-40 object-cover"
                />
                <p className="text-sm text-center mt-1 text-gray-500">After</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactHighlights;

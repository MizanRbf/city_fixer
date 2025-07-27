import React from "react";

const Card = ({ story }) => {
  return (
    <div
      className={`rounded-xl shadow-md p-5 border bg-[#00000050] ${
        story.isFeatured ? "border-green-600" : "border-gray-200"
      }`}
    >
      {story.isFeatured && (
        <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
          🌟 Success Story of the Month
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2 text-primary">{story.title}</h3>
      <p className="italic text-gray-200 mb-4">"{story.quote}"</p>

      <div className="flex gap-4">
        {/* Before Image */}
        <div className="w-1/2">
          <img
            src={story.beforeImg}
            alt="Before"
            className="rounded-md w-full h-40 object-cover"
          />
          <p className="text-sm text-center mt-1 text-gray-200">Before</p>
        </div>
        {/* After Image */}
        <div className="w-1/2">
          <img
            src={story.afterImg}
            alt="After"
            className="rounded-md w-full h-40 object-cover"
          />
          <p className="text-sm text-center mt-1 text-gray-200">After</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

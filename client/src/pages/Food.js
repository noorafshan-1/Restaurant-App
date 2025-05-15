import React from "react";

const Food = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">
        Welcome to Order Foods!
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {[
          "Rice",
          "Dosa",
          "South Indian",
          "North Indian",
          "Chinese",
          "Snacks",
          "Desserts",
        ].map((dish, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg text-center font-semibold text-gray-700 hover:scale-105 transition duration-300"
          >
            {dish}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;

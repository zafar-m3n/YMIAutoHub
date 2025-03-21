import React, { useState } from "react";
import parts from "@/data/parts";
import PartCard from "./components/PartCard";

const getUniqueCategories = (parts) => {
  const categories = parts.map((p) => p.category);
  return ["All", ...new Set(categories)];
};

const Parts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredParts = selectedCategory === "All" ? parts : parts.filter((part) => part.category === selectedCategory);

  const categories = getUniqueCategories(parts);

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">Browse Available Parts</h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md border transition font-medium ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Parts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredParts.map((part, index) => (
          <PartCard key={index} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;

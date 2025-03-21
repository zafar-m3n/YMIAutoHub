import React from "react";
import { useNavigate } from "react-router-dom";
import images from "@/assets/images";

const categories = [
  { name: "Belts", key: "belts", image: images.belts },
  { name: "Bonnet Hinges", key: "bonnet-hinges", image: images.bodyParts },
  { name: "Front Bumper Brackets", key: "front-bumper-brackets", image: images.bodyParts },
  { name: "Inner Guards", key: "inner-guards", image: images.bodyParts },
  { name: "Lower Grills", key: "lower-grills", image: images.bodyParts },
  { name: "Rear Bumper Brackets", key: "rear-bumper-brackets", image: images.bodyParts },
  { name: "Wiper Ends", key: "wiper-ends", image: images.wiperParts },
  { name: "Other", key: "other", image: images.bodyParts }, // "Other" category
];

const FeaturedCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Popular Categories</h2>
        <p className="text-lg text-gray-600 mt-2">Browse through our most requested car part categories.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <div
              key={category.key}
              className="bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/parts?category=${category.name}`)}
            >
              <img src={category.image} alt={category.name} className="w-full h-32 object-contain rounded-t-md" />
              <h3 className="text-lg font-semibold text-gray-800 mt-3 pb-4">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

import React from "react";
import Badge from "@/components/ui/Badge";
import images from "@/assets/images";

const PartCard = ({ part }) => {
  const getStockBadge = () => {
    if (part.number_in_stock === 0) return <Badge text="Out of Stock" color="red" size="sm" />;
    if (part.number_in_stock < 5) return <Badge text="Almost Out" color="yellow" size="sm" />;
    return <Badge text="In Stock" color="green" size="sm" />;
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      {/* Badge */}
      <div className="absolute top-2 right-2 z-10">{getStockBadge()}</div>

      {/* Image */}
      {/* <img src={`/parts/${part.image}`} alt={part.name} className="w-full h-48 object-cover" /> */}
      <img src={`${images.part}`} alt={part.name} className="w-full h-48 object-cover" />

      {/* Details */}
      <div className="flex-1 p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-1">{part.name}</h3>
        <p className="text-sm text-gray-600 mb-4">Made in {part.country_of_manufacture}</p>
      </div>

      <button
        disabled
        className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 disabled:opacity-60 cursor-not-allowed"
      >
        Inquire Prices
      </button>
    </div>
  );
};

export default PartCard;

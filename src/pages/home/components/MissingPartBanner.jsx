import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import images from "@/assets/images";

const MissingPartBanner = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-8"
      style={{ backgroundImage: `url(${images.parts})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Can’t Find the Part You Need?</h2>
        <p className="mt-3 text-lg md:text-xl text-gray-200">
          Let us know what you’re looking for — and we’ll help source it for you quickly.
        </p>
        <div className="mt-6">
          <Button size="md" color="primary" onClick={() => navigate("/contact")}>
            Request a Part
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissingPartBanner;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-8"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          High-Quality Car Parts. Trusted by Drivers Across Sri Lanka.
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-200">
          Specializing in Suzuki Wagon R 44 and 55 — including FX, FZ, and Stingray models — with a growing inventory
          for other popular vehicles. Can’t find your part? Send us a request.
        </p>

        <div className="flex gap-4 mt-6 justify-center">
          <Button size="md" color="primary" onClick={() => navigate("/parts")}>
            Browse Parts
          </Button>
          <Button size="md" color="light" onClick={() => navigate("/contact")}>
            Request a Part
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

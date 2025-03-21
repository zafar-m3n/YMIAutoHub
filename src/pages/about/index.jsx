import React from "react";
import images from "@/assets/images";

const About = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About YMIAutoHub</h1>
      <p className="text-lg text-gray-600 mb-6">Genuine car parts. Local expertise. Reliable service.</p>

      {/* Image */}
      <div className="w-full mb-12">
        <img
          src={images.about}
          alt="YMIAutoHub overview"
          className="w-full max-h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="text-left space-y-6 text-gray-700 text-base md:text-lg">
        <p>
          <strong>YMIAutoHub is a specialized platform for sourcing high-quality car parts in Sri Lanka.</strong>
          We focus primarily on Suzuki Wagon R models — WR44 and WR55 variants including FX, FZ, and Stingray — while
          also supporting a growing inventory of parts for other popular vehicles.
        </p>

        <p>
          <strong>
            Our goal is to simplify the parts sourcing process for everyday vehicle owners, garages, and service
            providers.
          </strong>
          Every part we supply is brand new and imported directly from trusted manufacturers based in Taiwan, China, and
          Japan.
        </p>

        <p>
          <strong>We believe in transparency, responsiveness, and delivering real value.</strong>
          Whether you're looking for a single item or need parts in bulk, YMIAutoHub is here to fulfill your requests
          efficiently and reliably.
        </p>
      </div>
    </div>
  );
};

export default About;

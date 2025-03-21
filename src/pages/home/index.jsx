import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedCategories from "./components/FeaturedCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerTestimonials from "./components/CustomerTestimonials";
import MissingPartBanner from "./components/MissingPartBanner";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <WhyChooseUs />
      <CustomerTestimonials />
      <MissingPartBanner />
    </div>
  );
};

export default HomePage;

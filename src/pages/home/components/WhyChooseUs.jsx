import React from "react";
import Icon from "@/components/ui/Icon";

const benefits = [
  {
    title: "Genuine & High-Quality Parts",
    description: "We source only the best parts for your vehicle.",
    icon: "fluent:shield-checkmark-24-filled",
  },
  {
    title: "Fast & Reliable Service",
    description: "Quick response times and efficient delivery.",
    icon: "solar:clock-circle-bold-duotone",
  },
  {
    title: "Competitive Pricing",
    description: "Affordable rates without compromising quality.",
    icon: "tabler:currency-dollar",
  },
  {
    title: "Wide Range of Inventory",
    description: "Specializing in Suzuki Wagon R, but with options for other vehicles too.",
    icon: "ph:car-duotone",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose YMIAutoHub?</h2>
        <p className="text-lg text-gray-600 mt-2">Here’s why customers trust us for their car parts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-6 bg-white shadow-md rounded-lg">
              <div className="text-blue-600 text-5xl">
                <Icon icon={benefit.icon} width="48" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

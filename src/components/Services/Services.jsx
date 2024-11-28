import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaDollarSign className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We offer the best prices on authentic auto parts imported directly from Japan, ensuring unbeatable value for quality parts.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <FaShippingFast className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Our reliable shipping and handling processes ensure that your auto parts arrive quickly and safely, no matter where you are.",
    aosDelay: "500",
  },
  {
    name: "Experienced Suppliers",
    icon: (
      <FaUserFriends className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "We work with trusted suppliers and have years of experience in sourcing high-quality auto parts to meet your needs.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-[#f0f5f9] dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

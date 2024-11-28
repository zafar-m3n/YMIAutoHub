import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Parts",
    link: "/#about",
  },
  {
    title: "About",
    link: "/#contact",
  },
  {
    title: "Contact",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
          <div className="space-y-6 col-span-1 md:col-span-2">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify flex items-center gap-3 font-serif">
              YMI Auto Hub (Pvt) Ltd.
            </h1>
            <p className="text-sm">
              We specialize in providing high-quality auto parts sourced
              directly from trusted suppliers worldwide. Our goal is to ensure
              customers receive authentic, reliable, and long-lasting parts for
              their vehicles.
            </p>
            <div className="flex items-center gap-3">
              <p>&copy; Copyright 2024. All Rights Reserved.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left mb-3">
              Important Links
            </h1>
            <ul className="flex flex-col gap-3 text-gray-500 dark:text-gray-200">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1"
                >
                  <a href={link.link}>&#11162; {link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+94 77 359 7545</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>ymi.autohub@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>30/32D De Silva Cross Road, Kalubowila, Sri Lanka</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a
                href="https://wa.me/94773597545"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-3xl hover:text-primary duration-300" />
              </a>
              <a
                href="mailto:ymi.autohub@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

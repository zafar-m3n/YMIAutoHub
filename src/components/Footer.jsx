import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <img src="/logo.png" alt="YMIAutoHub" className="w-40 mx-auto md:mx-0" />
            <p className="text-sm text-gray-600 text-center md:text-left">
              Your trusted hub for high-quality car parts, quotes, and inquiries.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-800">Contact</h4>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Icon icon="mdi:phone" width="18" className="mt-0.5 text-gray-700" />
              <span>+94 77 359 7545</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Icon icon="mdi:map-marker" width="18" className="mt-0.5 text-gray-700" />
              <span>
                30/32D De Silva Cross Road,
                <br />
                Kalubowila, Dehiwala,
                <br />
                Sri Lanka
              </span>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Icon icon="mdi:email" width="18" className="mt-0.5 text-gray-700" />
              <span>irshard@ymiautohub.com</span>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-800">Quick Links</h4>
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link to="/parts" className="hover:text-blue-500">
                Parts
              </Link>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
              <Link to="/faq" className="hover:text-blue-500">
                FAQ
              </Link>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YMIAutoHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

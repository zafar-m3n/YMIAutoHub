import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@/components/ui/Button";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Parts", path: "/parts" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="w-full border-b border-gray-300 bg-white">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <img src="/logo.png" alt="YMIAutoHub" className="h-8 md:h-10 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm md:text-base font-medium ${
                isActive(link.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Button size="sm" color="primary" onClick={() => (window.location.href = "/contact")}>
            Contact Us
          </Button>
        </nav>

        {/* Mobile: Contact + Hamburger */}
        <div className="flex items-center md:hidden gap-2">
          <Button size="sm" color="primary" onClick={() => (window.location.href = "/contact")}>
            Contact Us
          </Button>

          <button
            className="relative w-8 h-6 flex flex-col justify-between items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-1 bg-gray-800 transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`block w-full h-1 bg-gray-800 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-full h-1 bg-gray-800 transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 py-4 space-y-2 border-t border-gray-400" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block text-sm font-medium ${
              isActive(link.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

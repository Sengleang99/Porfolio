import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll to add background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 text-black transition-all duration-300 md:px-16 lg:px-24 ${
        isScrolled || isMobileMenuOpen
          ? "bg-slate-50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-pink-500 bg-clip-text">
          SengLeang
        </div>

        {/* Navigation Links */}
        <div className="hidden space-x-6 md:flex">
          <a
            href="/"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            About Me
          </a>
          <a
            href="#portfolio"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>

        {/* 'Connect Me' Button */}
        <button
          className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-t from-green-400 to-blue-500 md:inline hover:scale-105"
          onClick={handleLinkClick}
        >
          Connect Me
        </button>

        {/* Mobile Menu Button */}
        <div onClick={toggleMobileMenu} className="block md:hidden">
          {!isMobileMenuOpen ? (
            <HiMenuAlt3 className="text-2xl text-gray-700" />
          ) : (
            <HiX className="text-2xl text-gray-700" />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 left-0 z-50 w-4/5 h-full bg-white shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <div className="px-8 py-4 space-y-4">
          <a
            href="/"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            About Me
          </a>
          <a
            href="#portfolio"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block font-medium text-gray-500 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

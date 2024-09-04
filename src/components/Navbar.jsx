import React, { useState, useEffect } from "react";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 text-black transition-all duration-300 md:px-16 lg:px-24 ${
        isScrolled ? " bg-slate-50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold ">SengLeang</div>

        {/* Navigation Links */}
        <div
          className={`space-x-6 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <a href="#home" className="block transition hover:text-blue-700">
            Home
          </a>
          <a href="#about" className="block transition hover:text-blue-700">
            About Me
          </a>
          <a href="#services" className="block transition hover:text-blue-700">
            Services
          </a>
          <a href="#projects" className="block transition hover:text-blue-700">
            Projects
          </a>
          <a href="#contact" className="block transition hover:text-blue-700">
            Contact
          </a>
        </div>

        {/* 'Connect Me' Button */}
        <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-t from-green-400 to-blue-500 md:inline hover:scale-105">
          Connect Me
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="block md:hidden">
          <div className="px-8 py-4 space-y-4 bg-white">
            <a href="#home" className="block transition hover:text-blue-700">
              Home
            </a>
            <a href="#about" className="block transition hover:text-blue-700">
              About Me
            </a>
            <a href="#services" className="block transition hover:text-blue-700">
              Services
            </a>
            <a href="#projects" className="block transition hover:text-blue-700">
              Projects
            </a>
            <a href="#contact" className="block transition hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

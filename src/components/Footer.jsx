import React from "react";
import { FaFacebook, FaInstagram , FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-8 text-black bg-slate-50">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Footer Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="mb-4 text-xl font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h2 className="mb-4 text-xl font-bold">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram  className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Sengleang. All rights reserved.</p>
          <p className="mt-2">Email: <a href="sengleangyan@gmail.com" className="hover:underline">sengleangyan@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

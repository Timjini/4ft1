import React, { useState } from 'react';
import { BUCKET_URL } from './common';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={`${BUCKET_URL}/4F1T-Logo.png`}
              alt="Logo"
              className="w-auto h-12 md:h-18"
            />
          </a>
        </div>

        {/* Menu items (centered on large screens) */}
        <div className="hidden md:flex justify-center space-x-8 flex-grow">
          <a href="/" className="text-gray-900 hover:text-gray-400 uppercase">
            Home
          </a>
          <a href="/about" className="text-gray-900 hover:text-gray-400 uppercase">
            About
          </a>
          <a href="/services" className="text-gray-900 hover:text-gray-400 uppercase">
            Services
          </a>
          <a href="/contact" className="text-gray-900 hover:text-gray-400 uppercase">
            Contact
          </a>
        </div>

        {/* Burger menu (visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 text-gray-900 flex flex-col items-center space-y-4 py-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

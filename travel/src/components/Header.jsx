import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper"; // Assuming this is a reusable layout component
import logo from '../assets/logo.png'; // Update the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* Logo and Brand Name */}
          <a href="/" className="flex items-center z-40 font-semibold">
            <img src={logo} alt="TravelNest Logo" className="w-32 h-12" />
          </a>

          {/* Hamburger / Cross Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {isOpen ? (
                // Cross icon when menu is open
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger icon when menu is closed
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
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="/bookTicket"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Book Online
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out`}
        >
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="/bookTicket"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition"
          >
            Book Online
          </a>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
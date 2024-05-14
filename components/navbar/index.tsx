"use client"
import React, { useState } from 'react';
import Logo from './logo';
import Links from './navLinks';
import CTAs from './navCta';

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-8 relative">
      {/* Logo */}
      <Logo />
      
      {/* Mobile dropdown menu */}
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center w-8 h-8 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                dropdownOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16m-7 6h7'
              }
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border border-gray-200 shadow-lg py-2 z-10">
            <Links />
            <CTAs />
          </div>
        )}
      </div>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center" style={{ gap: '45rem' }}>
          <Links />
          <CTAs />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

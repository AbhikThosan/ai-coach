import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[239px] pt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-[72px]">
            <Logo />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[33px] text-[#020407] font-semibold">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/about" className="">
              About
            </Link>
            <Link to="/consulting" className="">
              Consulting
            </Link>
            <Link to="/aicoach" className="">
              AI Coach
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block px-[35px] py-[13px] bg-transparent border border-[#010205] rounded-[50px] text-[#010205] font-bold leading-[140%]">
            Get started
          </button>
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-[#010205] transform transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-[#010205] transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-[#010205] transform transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-[#020407] font-semibold py-4">
          <Link
            to="/"
            className="py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/consulting"
            className="py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Consulting
          </Link>
          <Link
            to="/aicoach"
            className="py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            AI Coach
          </Link>
          <button className="w-full px-[35px] py-[13px] bg-transparent border border-[#010205] rounded-[50px] text-[#010205] font-bold leading-[140%] transition-all duration-300 hover:bg-[#010205] hover:text-white">
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

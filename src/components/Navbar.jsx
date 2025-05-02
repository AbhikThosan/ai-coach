import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/Logo";

const Navbar = () => {
  return (
    <nav className="my-[30px] px-[239px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-[72px]">
            <Logo />
          </div>
          <div className="flex items-center gap-[33px] text-[#020407] font-semibold">
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
        <button className="px-[35px] py-[13px] bg-transparent border border-[#010205] rounded-[50px] text-[#010205] font-bold leading-[140%]">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import FooterBG from "../assets/images/background/FooterBG.png";
import DemoLogo from "../assets/images/logo/DemoLogo";
import Facebook from "../assets/images/icons/Facebook";
import Twitter from "../assets/images/icons/Twitter";
import Linkedin from "../assets/images/icons/Linkedin";
import Instagram from "../assets/images/icons/Instagram";
import Phone from "../assets/images/icons/Phone";
import Email from "../assets/images/icons/Email";
import Location from "../assets/images/icons/Location";

const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      <div className="pb-[80px]">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[239px] pt-[32px] border-b border-[#B4B4B4]">
          <div className="bg-[linear-gradient(90deg,_#103570_0%,_#004FCE_100%)] flex flex-col items-center justify-center gap-[48px] py-[80px] rounded-[24px]">
            <div className="flex flex-col gap-[12px] items-center">
              <h3 className="text-[#FFF] text-[28px] sm:text-[32px] md:text-[38px] font-semibold leading-[130%] text-center">
                Ready to Hire Smarter?
              </h3>
              <p className="text-[#B9BDC7] text-[14px] sm:text-[16px] font-normal leading-[160%] text-center">
                Unlock Exclusive Insights Subscribe to Our Newsletter
              </p>
            </div>
            <button className="text-[#00245F] text-[16px] font-medium leading-[160%] bg-[#FCE38A] rounded-[50px] px-[36px] py-[16px]">
              Join Now
            </button>
          </div>

          <div className="flex flex-col xl:flex-row xl:flex-nowrap items-start justify-between mt-[80px] sm:mt-[100px] lg:mt-[144px] pb-[40px] gap-8 lg:gap-4">
            <div className="w-full xl:w-auto flex flex-col gap-[30px]">
              <div className="flex items-center gap-[12.36px]">
                <DemoLogo />
                <h2 className="text-[#020407] text-[37.091px] font-bold leading-[24px]">
                  Logo
                </h2>
              </div>
              <p className="text-[#335386] text-[14px] font-normal leading-[24px]">
                SalesRank.AI offers a comprehensive suite of AI-powered
                solutions to help you find expert sales professionals who can
                elevate every aspect of your business. From performance rankings
                and skill verification to industry benchmarking and real-time
                analytics, we provide the insights and tools to optimize your
                sales strategy and drive growth.
              </p>
              <div className="flex items-center gap-[12px]">
                <button className="cursor-pointer flex items-center justify-center bg-[#FFF] rounded-full w-[34px] h-[34px]">
                  <Facebook />
                </button>
                <button className="cursor-pointer flex items-center justify-center bg-[#FFF] rounded-full w-[34px] h-[34px]">
                  <Twitter />
                </button>
                <button className="cursor-pointer flex items-center justify-center bg-[#FFF] rounded-full w-[34px] h-[34px]">
                  <Linkedin />
                </button>
                <button className="cursor-pointer flex items-center justify-center bg-[#FFF] rounded-full w-[34px] h-[34px]">
                  <Instagram />
                </button>
              </div>
            </div>

            <div className="w-full xl:w-auto flex flex-col xl:flex-row gap-8 sm:gap-16 lg:gap-4 xl:gap-[115px]">
              <div className="flex flex-col">
                <h4 className="text-[#001C4A] text-[18px] font-semibold mb-[36px]">
                  Navigation
                </h4>
                <div className="flex flex-col gap-[30px] text-[#335386] text-[14px] font-normal">
                  <a href="#">Service</a>
                  <a href="#">Agency</a>
                  <a href="#">Case Study</a>
                  <a href="#">Resource</a>
                  <a href="#">Contact</a>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[#001C4A] text-[18px] font-semibold mb-[36px]">
                  Licence
                </h4>
                <div className="flex flex-col gap-[30px] text-[#335386] text-[14px] font-normal">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Copyright</a>
                  <a href="#">Email Address</a>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[#001C4A] text-[18px] font-semibold mb-[36px]">
                  Contact
                </h4>
                <div className="flex flex-col gap-[30px] text-[#335386] text-[14px] font-normal">
                  <div className="flex items-center gap-[8px]">
                    <Phone />
                    <a href="#">(406) 555-0120</a>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Email />
                    <a href="#">Hey@boostim.com</a>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Location />
                    <a href="#">
                      2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

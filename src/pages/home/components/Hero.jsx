import React from "react";
import robot1 from "../../../assets/images/hero/airobo2.png";
import robot2 from "../../../assets/images/hero/airobo1.png";
import BackupTable from "../../../assets/images/icons/BackupTable";
import Dots from "../../../assets/images/icons/Dots";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col 2xl:flex-row items-center justify-between my-[50px] lg:my-[100px] px-4 sm:px-6 md:px-8 ">
        <div className="left-section w-full 2xl:w-auto mb-12 2xl:mb-0">
          <h1 className="w-full lg:w-[516px] text-[40px] sm:text-[60px] lg:text-[80px] font-medium text-[#111] mb-[26px]">
            Your AI-Powered Sales Coach
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-[30px] sm:gap-[68px] mb-[50px] lg:mb-[91.11px]">
            <img src={robot1} className="w-[150px] sm:w-[204px] h-auto" />
            <p className="w-full sm:w-[326px] text-[18px] sm:text-[20px] font-medium text-[#05131db3] leading-[163%]">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-[30px] sm:gap-[55px]">
            <div className="flex items-center gap-[34px]">
              <div className="w-[70px] sm:w-[89px] h-[70px] sm:h-[86.775px] rounded-[15.575px] bg-white shadow-[15.575px_16.688px_20.47px_#00000012] flex items-center justify-center">
                <BackupTable />
              </div>
              <div>
                <p className="text-[#05131D] text-[30px] sm:text-[40px] font-semibold leading-[110%]">
                  2000+
                </p>
                <p className="text-[#05131db3] text-[16px] sm:text-[20px] font-medium leading-[163%]">
                  Your protection
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[34px]">
              <div className="w-[70px] sm:w-[89px] h-[70px] sm:h-[86.775px] rounded-[15.575px] bg-white shadow-[15.575px_16.688px_20.47px_#00000012] flex items-center justify-center">
                <Dots />
              </div>
              <div>
                <p className="text-[#05131D] text-[30px] sm:text-[40px] font-semibold leading-[110%]">
                  7001+
                </p>
                <p className="text-[#05131db3] text-[16px] sm:text-[20px] font-medium leading-[163%]">
                  Provide tailored
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative right-section w-full 2xl:w-auto">
          <img src={robot2} className="w-full max-w-[500px] mx-auto lg:max-w-none" />
          <div className="absolute bottom-[-55px] left-[-10%]  transform -translate-x-1/2 lg:translate-x-0 w-[90%] sm:w-[467px] md:w-[500px] lg:w-[500px] h-auto min-h-[359px] rounded-[27px] shadow-[-9px_11px_38.1px_#0000000d] bg-[#FFF] p-6 sm:pl-[28.62px] sm:pr-[31.38px] sm:py-[50px]">
            <div className="flex items-center justify-between font-semibold text-[30px] sm:text-[50px] text-[#00245F] mb-[23px]">
              <p>721+</p>
              <p>1000+</p>
            </div>
            <p className="font-semibold text-[20px] sm:text-[27.984px] text-[#05131D] mb-[39px]">
              Growth is our priority.
            </p>
            <p className="font-poppins font-medium text-[15px] sm:text-[17px] leading-[163%] text-[#05131db3]">
              As a full-service business agency, we specialize in helping
              companies of all sizes optimize their operations
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import robot1 from "../../../assets/images/hero/airobo2.png";
import robot2 from "../../../assets/images/hero/airobo1.png";
import BackupTable from "../../../assets/images/icons/BackupTable";
import Dots from "../../../assets/images/icons/Dots";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between my-[100px] px-[239px]">
        <div>
          <h1 className="w-[516px] text-[80px] font-medium text-[#111] mb-[26px]">
            Your AI-Powered Sales Coach
          </h1>
          <div className="flex items-center gap-[68px] mb-[91.11px]">
            <img src={robot1} className="w-[204px] h-[198px]" />
            <p className="w-[326px] text-[20px] font-medium text-[#05131db3] leading-[163%]">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>
          <div className="flex items-center gap-[55px]">
            <div className="flex items-center gap-[34px]">
              <div className="w-[89px] h-[86.775px] rounded-[15.575px] bg-white shadow-[15.575px_16.688px_20.47px_#00000012] flex items-center justify-center">
                <BackupTable />
              </div>
              <div>
                <p className="text-[#05131D] text-[40px] font-semibold leading-[110%]">
                  2000+
                </p>
                <p className="text-[#05131db3] text-[20px] font-medium leading-[163%]">
                  Your protection
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[34px]">
              <div className="w-[89px] h-[86.775px] rounded-[15.575px] bg-white shadow-[15.575px_16.688px_20.47px_#00000012] flex items-center justify-center">
                <Dots />
              </div>
              <div>
                <p className="text-[#05131D] text-[40px] font-semibold leading-[110%]">
                  7001+
                </p>
                <p className="text-[#05131db3] text-[20px] font-medium leading-[163%]">
                  Provide tailored
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={robot2} />
          <div className="absolute bottom-[-55px] left-[-160px] w-[467px] h-[359px] rounded-[27px] shadow-[-9px_11px_38.1px_#0000000d] bg-[#FFF] pl-[28.62px] pr-[31.38px] py-[50px]">
            <div className="flex items-center justify-between font-semibold text-[50px] text-[#00245F] mb-[23px]">
              <p>721+</p>
              <p>1000+</p>
            </div>
            <p className=" font-semibold text-[27.984px] text-[#05131D] mb-[39px]">
              Growth is our priority.
            </p>
            <p className="font-poppins font-medium text-[17px] leading-[163%] text-[#05131db3] ">
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

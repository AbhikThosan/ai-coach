import React from "react";

const CarouselItem = ({ speech, name, designation }) => {
  return (
    <div className="w-full flex flex-col gap-[40px] sm:gap-[50px] md:gap-[74px] px-4">
      <p className="text-[24px] sm:text-[28px] md:text-[36px] text-[#010205] font-semibold leading-[140%] sm:leading-[150%] md:leading-[160%] max-w-[1280px]">
        {speech}
      </p>
      <div className="flex items-center gap-[16px] sm:gap-[20px] md:gap-[24px]">
        <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] bg-[#00000033] border-[2px] border-[#ffffff80] rounded-full" />
        <div className="flex flex-col">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#010205] font-bold leading-[140%] sm:leading-[160%] md:leading-[180%]">
            {name}
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[140%] sm:leading-[160%] md:leading-[180%] text-[#878C91]">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;

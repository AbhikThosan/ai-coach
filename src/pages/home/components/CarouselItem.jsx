import React from "react";

const CarouselItem = ({ speech, name, designation }) => {
  return (
    <div className="w-full flex flex-col gap-[74px] px-4">
      <p className="text-[36px] text-[#010205] font-semibold leading-[160%] max-w-[1280px]">
        {speech}
      </p>
      <div className="flex items-center gap-[24px]">
        <div className="w-[70px] h-[70px] bg-[#00000033] border-[2px] border-[#ffffff80] rounded-full" />
        <div className="flex flex-col">
          <p className="text-[20px] text-[#010205] font-bold leading-[180%]">
            {name}
          </p>
          <p className="text-[16px] font-medium leading-[180%] text-[#878C91]">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;

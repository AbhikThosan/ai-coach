import React from "react";
import Script from "../../../assets/images/icons/Script";
import Message from "../../../assets/images/icons/Message";

const QuickActions = () => {
  return (
    <div className="flex flex-col gap-[20px] rounded-[20px] bg-[#EFEFEF] p-[30px] mt-4">
      <h3 className="text-[#323232] text-[32px] font-bold ">Quick Actions</h3>
      <div className="flex items-center gap-[20px]">
        <div className="w-[213px] bg-[#FFF] rounded-[12px] p-[16px] border border-[#E7E7E7]">
          <Script />
          <p className="text-[#171D25] text-[18px] font-semibold leading-[132%] mt-[8px]">
            Generate Script
          </p>
        </div>
        <div className="w-[213px] bg-[#FFF] rounded-[12px] p-[16px] border border-[#E7E7E7]">
          <Message />
          <p className="text-[#171D25] text-[18px] font-semibold leading-[132%] mt-[8px]">
            Practice Pitch
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;

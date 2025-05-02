import React from "react";
import Tick from "../../../assets/images/icons/Tick";
import Graph from "../../../assets/images/icons/Graph";
const percentage = 60;

const RealTimeAnalysis = () => {
  return (
    <div className="flex flex-col gap-[20px] rounded-[20px] bg-[#EFEFEF] p-[30px]">
      <h3 className="text-[#323232] text-[32px] font-bold ">
        Real-time Analysis
      </h3>

      <div className="w-[460px] flex flex-col gap-[12px] p-[16px] bg-[#FFF] rounded-[12px] border border-[#E7E7E7]">
        <div className="flex items-center">
          <Tick />
          <p className="text-[#171D25] text-[18px] font-semibold leading-[132%]">
            Confidence Level
          </p>
        </div>
        <div className="flex items-center gap-[8.62px]">
          <div className="relative h-[8px] w-full bg-[#DFDFDF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#44D618] rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <span className="text-[#6D6D6D] text-[12px] font-inter font-normal leading-[16px]">
            {percentage}%
          </span>
        </div>
      </div>

      <div className="w-[460px] flex flex-col gap-[12px] p-[16px] bg-[#FFF] rounded-[12px] border border-[#E7E7E7]">
        <div className="flex items-center">
          <Graph />
          <p className="text-[#171D25] text-[18px] font-semibold leading-[132%]">
            Confidence Level
          </p>
        </div>
        <p className="text-[#909090] text-[18px] font-lato font-normal leading-[32px]">
          85% improvement in objection handling
        </p>
      </div>
    </div>
  );
};

export default RealTimeAnalysis;

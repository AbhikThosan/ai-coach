import React from "react";
import Chat from "./Chat";
import ChatActions from "./ChatActions";
import RealTimeAnalysis from "./RealTimeAnalysis";
import QuickActions from "./QuickActions";

const LiveAiCoach = () => {
  return (
    <>
      <div className="bg-[linear-gradient(90deg,_#103570_0%,_#004FCE_100%)] px-4 sm:px-6 md:px-8 lg:px-12  pb-[60px]">
        <h2 className="font-questrial font-normal text-[20px] sm:text-[22px] md:text-[24px] text-[#FCE38A] py-[20px]">
          Live Ai Couach
        </h2>
        <h3 className="font-questrial font-normal text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#FFF] leading-[120%] pb-[60px]">
          Take a Suggestion Coaching{" "}
        </h3>
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-6">
          <div className="w-full left-section">
            <Chat />
          </div>
          <div className=" flex flex-col gap-[40px] rounded-[57px] bg-[#F2F3F3] border border-[#4e4e4e1a] px-[24px] py-[24px] middle-section transform rotate-[270deg] 2xl:rotate-0 origin-center mt-[-130px] mb-[-130px]">
            <ChatActions />
          </div>
          <div className="w-full 2xl:w-1/3 flex flex-col justify-between right-section">
            <RealTimeAnalysis />
            <QuickActions />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveAiCoach;

import React from "react";
import Chat from "./Chat";
import ChatActions from "./ChatActions";
import RealTimeAnalysis from "./RealTimeAnalysis";
import QuickActions from "./QuickActions";

const LiveAiCoach = () => {
  return (
    <>
      <div className="bg-[linear-gradient(90deg,_#103570_0%,_#004FCE_100%)] px-[239px] pb-[60px]">
        <h2 className="font-questrial font-normal text-[24px] text-[#FCE38A] py-[20px]">
          Live Ai Couach
        </h2>
        <h3 className="font-questrial font-normal text-[60px] text-[#FFF] leading-[120%] pb-[60px]">
          Take a Suggestion Coaching{" "}
        </h3>
        <div className="flex items-center justify-between">
          <Chat />
          <div className="flex flex-col gap-[40px] rounded-[57px] bg-[#F2F3F3] border border-[#4e4e4e1a] px-[24px] py-[24px]">
            <ChatActions />
          </div>
          <div className="flex flex-col justify-between h-[579px]">
            <RealTimeAnalysis />
            <QuickActions />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveAiCoach;

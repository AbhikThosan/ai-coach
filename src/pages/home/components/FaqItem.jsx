import React, { useState } from "react";
import Minus from "../../../assets/images/icons/Minus";
import Plus from "../../../assets/images/icons/Plus";

const FaqItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-300 py-[40px] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-[40px]">
          <span className="text-[#8B7D4C] font-questrial font-normal text-[32px]">
            {number}
          </span>
          <div>
            <h3 className="text-[40px] font-questrial font-normal text-[#111]">
              {question}
            </h3>
            <div
              className={`transition-all duration-500 overflow-hidden mt-[12px] ${
                isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p className="font-inter font-light leading-[140%] text-[#636363] text-[16px]">
                {answer}
              </p>
            </div>
          </div>
        </div>
        <div className=" my-auto">{isOpen ? <Minus /> : <Plus />}</div>
      </div>
    </div>
  );
};

export default FaqItem;

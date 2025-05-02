import React, { useState, useRef, useEffect } from "react";
import ArrowUp from "../../../assets/images/icons/ArrowUp";

const suggestedQuestions = [
  "How do I handle objections?",
  "Give me a cold email template",
  "Closing techniques",
  "Negotiation tips",
];

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
  };

  const handleSuggestedClick = (text) => {
    setInput(text);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-[787px] h-[577px] border border-[#CDCDCD] rounded-[12px] overflow-hidden bg-[#F2F3F3] flex flex-col">
      <h2 className=" font-bold text-[18px] text-[#1B1B1B] leading-[120%] bg-[#FFF] pl-[32px] pt-[16px] pb-[24px]">
        AI Sales Coach
      </h2>

      <div className="flex-1 gap-[24px] px-[19.81px] py-[24px] overflow-y-auto font-lato font-normal text-[18px] leading-[32px]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-[12px] mb-[16px] ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.from === "bot" && (
              <div className="w-[40px] h-[40px] rounded-full bg-[#D9D9D9] shrink-0"></div>
            )}
            <div
              className={`px-[24px] py-[8px] rounded-[8px] w-fit max-w-[80%] ${
                msg.from === "bot"
                  ? "bg-[#FFF] text-[#181818]"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-[#FFF] px-[34px] pt-[16px] pb-[24px]">
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestedClick(q)}
              className="text-[14px] text-[#002868] font-geist font-normal leading-[100%] bg-[#00286814]  rounded-[36px] px-[17px] py-[12px] tracking-[-0.56px] hover:bg-gray-200 transition"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="flex items-center px-[7.23px] gap-[12px] mt-[16px]">
          <input
            type="text"
            placeholder="Ask anything you need"
            className="flex-1 px-[23px] py-[17px] border border-[#E5E7EB] rounded-[4px] text-[14px] text-[#9A9A9A] font-normal leading-[100%] "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="flex items-center gap-[12px] bg-[#002868] hover:bg-blue-700 text-[#FFF] p-[14px] rounded-[8px] text-[17.092px] font-medium leading-[100%] tracking-[-0.684px]"
          >
            <span>Send</span>
            <ArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

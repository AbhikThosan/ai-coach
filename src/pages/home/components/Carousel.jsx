import React, { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import ArrowLeft from "../../../assets/images/icons/ArrowLeft";
import ArrowRight from "../../../assets/images/icons/ArrowRight";

const carouselItems = [
  {
    number: "01",
    speech:
      "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques..”",
    name: "Michael Kaizer",
    designation: "CEO of Basecamp Corp",
  },
  {
    number: "02",
    speech:
      "“ Working with their team has been a game-changer. They brought fresh ideas and a data-driven approach that drastically improved our marketing ROI. Highly professional and easy to collaborate with.”",
    name: "Sarah Thompson",
    designation: "Marketing Director at NovaTech",
  },
  {
    number: "03",
    speech:
      "“ Their strategic planning and attention to detail are unmatched. We've seen measurable improvements in brand visibility and customer engagement since partnering with them.”",
    name: "Daniel Kim",
    designation: "Founder of Orion Solutions",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const timeoutRef = useRef(null);

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDirection("next");
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
  };

  const handleNext = () => {
    console.log("Next button clicked");
    setDirection("next");
    setCurrent((prev) => (prev + 1) % carouselItems.length);
    resetTimer();
  };

  const handlePrev = () => {
    console.log("Prev button clicked");
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
    resetTimer();
  };

  useEffect(() => {
    console.log("Setting up initial timer");
    resetTimer();
    return () => {
      console.log("Cleaning up timer");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log("Current slide changed to:", current);
  }, [current]);

  return (
    <div className="relative w-full max-w-[1280px] mx-auto overflow-hidden h-[344px] mt-[115px] mb-[84px]">
      <div className="relative w-full h-full">
        {carouselItems.map((item, index) => {
          let position = "translate-x-full opacity-0";
          if (index === current) {
            position = "translate-x-0 opacity-100 z-10";
          } else if (
            (index ===
              (current - 1 + carouselItems.length) % carouselItems.length &&
              direction === "next") ||
            (index === (current + 1) % carouselItems.length &&
              direction === "prev")
          ) {
            position =
              direction === "next"
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0";
          }

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${position} ${
                index === current
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
            >
              <CarouselItem {...item} />
            </div>
          );
        })}

        <div className="absolute bottom-10 right-[-100px] -translate-x-1/2 flex items-center gap-[38px] z-20">
          <button
            type="button"
            onClick={handlePrev}
            className="cursor-pointer px-[32px] py-[16px] border border-[#00245F] rounded-[70px] hover:bg-gray-200 transition focus:outline-none"
          >
            <ArrowLeft />
          </button>
          <div className="text-[20px] font-semibold leading-[180%] text-[#00245F]">
            <span className="underline">{carouselItems[current].number}</span>
            <span className="text-[#01020566]">/</span>
            <span className="text-[#01020566]">
              {carouselItems.length.toString().padStart(2, "0")}
            </span>
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="cursor-pointer px-[32px] py-[16px] bg-[#00245F] text-white rounded-[70px] hover:bg-gray-700 transition focus:outline-none"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

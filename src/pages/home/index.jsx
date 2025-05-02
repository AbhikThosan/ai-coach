import React from "react";
import Hero from "./components/Hero";
import LiveAiCoach from "./components/LiveAiCoach";
import OurCourses from "./components/OurCourses";
import FAQs from "./components/FAQs";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[239px]">
      <Hero />
      <LiveAiCoach />
      <OurCourses />
      <FAQs />
      <Carousel />
    </div>
  );
};

export default Home;

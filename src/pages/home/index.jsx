import React from "react";
import Hero from "./components/Hero";
import LiveAiCoach from "./components/LiveAiCoach";
import OurCourses from "./components/OurCourses";
import FAQs from "./components/FAQs";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <>
      <Hero />
      <LiveAiCoach />
      <OurCourses />
      <FAQs />
      <Carousel />
    </>
  );
};

export default Home;

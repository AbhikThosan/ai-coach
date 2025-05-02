import React from "react";
import CourseCard from "./CourseCard";
import Course1 from "../../../assets/images/courses/Course1.png";
import Course2 from "../../../assets/images/courses/Course2.png";

const courses = [
  {
    image: Course1,
    duration: "4 week",
    level: "Beginner",
    instructor: "John Smith",
    courseTitle: "Web Design Fundamentals",
    courseDescription:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    image: Course2,
    duration: "4 week",
    level: "Beginner",
    instructor: "John Smith",
    courseTitle: "Web Design Fundamentals",
    courseDescription:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
];

const OurCourses = () => {
  return (
    <div className="px-[239px] pt-[48px] mb-[30px]">
      <h2 className="text-[#262626] text-[48px] font-semibold leading-[150%]">
        Our Courses
      </h2>
      <div className="flex items-center justify-between pb-[48px]">
        <p className="max-w-[1030px] text-[#59595A] text-[18px] font-normal leading-[150%]">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className="cursor-pointer px-[24px] py-[18px] text-[#FFF] text-[18px] font-medium leading-[150%] bg-[#002868] rounded-[8px]">
          View All
        </button>
      </div>
      <div className="flex items-baseline-last flex-wrap justify-between">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;

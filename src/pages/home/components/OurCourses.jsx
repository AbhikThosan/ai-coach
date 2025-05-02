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
    <div className="pt-[48px] mb-[30px]">
      <h2 className="text-[#262626] text-[48px] font-semibold leading-[150%]">
        Our Courses
      </h2>
      <div className="flex flex-col 2xl:flex-row 2xl:items-center justify-between pb-[48px] gap-6">
        <p className="text-[#59595A] text-[18px] font-normal leading-[150%] course-description w-full 2xl:w-auto">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. <br /> Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="flex justify-center w-full 2xl:w-auto">
          <button className="cursor-pointer px-[24px] py-[18px] text-[#FFF] text-[18px] font-medium leading-[150%] bg-[#002868] rounded-[8px] view-all-course">
            View All
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;

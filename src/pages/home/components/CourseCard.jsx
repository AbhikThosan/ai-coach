import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="w-[690px] flex flex-col gap-[30px] bg-[#F0F0F0] p-[50px] rounded-[15px] border border-[#F1F1F3]">
      <img src={course.image} alt="course image" />
      <div className="flex items-center justify-between">
        <div className="flex gap-[10px]">
          <p className="px-[16px] py-[10px] text-[#4C4C4D] text-[18px] font-medium rounded-[8px] border border-[#F1F1F3] bg-[#FFF]">
            {course.duration}
          </p>
          <p className="px-[16px] py-[10px] text-[#4C4C4D] text-[18px] font-medium rounded-[8px] border border-[#F1F1F3] bg-[#FFF]">
            {course.level}
          </p>
        </div>
        <p className="text-[#262626] text-[20px] font-medium">
          By {course.instructor}
        </p>
      </div>
      <div>
        <h2 className="text-[#262626] text-[24px] font-semibold leading-[150%]">
          {course.courseTitle}
        </h2>
        <p className="text-[#4C4C4D] text-[18px] font-normal leading-[150%] mt-[14px]">
          {course.courseDescription}
        </p>
      </div>
      <button className="w-full m-auto bg-[#002868] rounded-[8px] border border-[#F1F1F3] py-[18px] text-center  cursor-pointer text-[#FFF] text-[18px] font-medium font-vietnam leading-[150%]">
        Get it Now
      </button>
    </div>
  );
};

export default CourseCard;

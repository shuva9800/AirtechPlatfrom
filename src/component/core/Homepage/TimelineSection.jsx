import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    description: "Fully Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Leadership",
    description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
];

export default function TimelineSection() {
  return (
    <div>
      <div className="flex flex-row gap-15 items-center">
        <div className="w-[45%] flex flex-col gap-5">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-6 "
            >
              <div className="h-[50px] w-[50px] bg-white  rounded-full relative">
                <img src={item.Logo} alt="timeline-logo"className=" h-[24px] w-[24px] object-contain absolute top-[25%] left-[27%]"  />
              </div>
              <div className="flex flex-col items-start ">
                <p className="font-semibold text-[18px] text-richblack-800">
                  {item.heading}
                </p>
                <p className="text-base text-richblack-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative shadow-blue-200 ">
          <img src={timelineImage} alt="Timeline-main" className="shadow-white object-cover h-fit"/>

          <div className="bg-caribbeangreen-700 py-7 flex flex-row gap-7 uppercase absolute left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-row gap-5 items-center justify-center border-r border-caribbeangreen-400 px-7 ">
                <div className="font-bold text-white text-3xl">10</div>
                <div className="font-medium text-caribbeangreen-300 text-sm">years experience</div>
            </div>
             <div className="flex flex-row gap-5 items-center justify-center px-7  ">
                <div className="font-bold text-white text-3xl">250</div>
                <div className="font-medium text-caribbeangreen-300 text-sm">types of courses</div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

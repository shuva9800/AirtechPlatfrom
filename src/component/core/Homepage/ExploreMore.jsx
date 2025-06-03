import React, { useEffect, useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabItems = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

export default function ExploreMore() {
  const [currentTab, setCurrentTab] = useState(tabItems[0]);
  const [carddetails, setcardDetails] = useState(HomePageExplore[0].courses);
  const [crrentCard, setCurrentCard] = useState(carddetails[0]);

  function tabCangeHandler(value) {
    // rsult
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setcardDetails(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  }
  // useEffect(()=>{
  //   tabCangeHandler()
  // },[])

  return (
    <div>
      <div className="flex flex-col items-center mx-auto">
        <div className="text-4xl font-semibold text-white">
          Unlock the
          <HighlightText text={"Power of Code"} />
        </div>
        <p className="text-richblack-300 text-sm z mt-3 ">
          Learn to Build Anything You Can Imagine
        </p>
        {/* card section */}
        <div className="flex fleex-row gap-6 px-5 rounded-full bg-richblack-700 mt-5 py-2 text-[16px]  ">
          {tabItems.map((item, index) => (
            <div
              key={index}
              onClick={() => tabCangeHandler(item)}
              className={`${
                currentTab === item
                  ? "bg-richblack-900 text-richblack-5 font-medium "
                  : " text-richblack-200"
              } cursor-pointer rounded-full px-2.5 py-1 transition-all duration-200 hover:bg-richblack-200 hover:text-richblack-5 `}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-7 items-center "></div>
        <div className="md:h-[150px]"></div>
        <div className="lg:absolute gap-10 justify-center lg:gap-1 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
          {carddetails.map((value, index) => (
            <CourseCard
              key={index}
              cardData={value}
              currentCard={crrentCard}
              setCurrentCard={setCurrentCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

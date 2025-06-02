import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

export default function CourseCard({
  cardData,
  currentCard,
  setCurrentCard,
}) {
  return (
    <div
      className={`${
        currentCard === cardData.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      } max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 `}
      onClick={() => setCurrentCard(cardData.heading)}
    >
      <a href="#">
        <h5
          className={` ${
            currentCard === cardData.heading ? "text-richblack-800":"text-white"
          } font-semibold text-[20px] mb-2 text-2xl tracking-tight`}
        >
          {cardData.heading}
        </h5>
      </a>
      <p className={` ${ currentCard === cardData.heading ?"text-blue-300":"text-richblack-300"} mb-3 font-normal text-gray-700 dark:text-gray-400`}>
        {cardData.description}
      </p>
      <hr className=" border-t border-dotted border-gray-400 mx-auto mb-4" />
      <div className={`flex flex-row items-center justify-between ${currentCard === cardData.heading ?"text-richblack-800":"text-white"}`}>
        <div className="flex gap-2 flex-row items-center">
          <HiUsers />
          <p>{cardData.level}</p>
        </div>
        <div className="flex gap-2 flex-row items-center">
          <ImTree />
          <p>{cardData.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
}

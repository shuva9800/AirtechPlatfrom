import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../component/core/Homepage/HighlightText";

export default function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="mx-auto flex flex-col w-11/12 items-center justify-between relative text-white ">
        <Link to="/Signup">
          <div className="group bg-richblack-800 rounded-full mt-16 p-1 transition-all duration-200 hover:scale-95 font-bold w-fit border">
            <div className="flex items-center justify-center gap-2 mx-auto px-4 py-1 transition-all duration-200 group-hover:bg-richblack-900 rounded-full">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="font-semibold text-[44px] mt-9 ">
          Empower Your Future With
          <HighlightText text={"Coding Skill"} />
        </div>
        <div className="mt-4">
          <p className="text-[24px] font-medium">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>
      </div>

      {/* section 2 */}
      {/* section 3 */}
      {/* section 4 */}
      {/* section 5*/}
    </div>
  );
}

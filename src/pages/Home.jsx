import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../component/core/Homepage/HighlightText";
import CTAbutton from "../component/core/Homepage/Button";
import frontvideo from "../assets/Images/banner.mp4"
import CodeBlocks from "../component/core/Homepage/Codeblocks";
export default function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="mx-auto flex flex-col w-11/12 items-center justify-between relative text-white max-w-maxContent ">
        <Link to={"/Signup"} className="mt-16">
          <div className="group bg-richblack-800 rounded-full  p-1 transition-all duration-200 hover:scale-95 font-bold w-fit border">
            <div className="flex items-center justify-center gap-2 mx-auto px-4 py-1 transition-all duration-200 group-hover:bg-richblack-900 rounded-full">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="font-semibold text-4xl mt-9 text-center">
          Empower Your Future With
          <HighlightText text={"Coding Skill"} />
        </div>
        <div className="mt-4 text-[24px] font-medium text-center text-richblack-300">
        
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          
        </div>
        <div className="flex flex-row gap-6 mt-8 justify-center ">
          <CTAbutton active={true} linkto={"/Signup"}>Learn More</CTAbutton>
          <CTAbutton active={false} linkto={"/Login"}>Book a Demo</CTAbutton>
        </div>
        <div className="shadow-blue-200 mt-11 max-w-5xl ">
          <video
          muted
          autoPlay
          loop>
            <source src={frontvideo}/>
          </video>
        </div>
        {/* Code Blocks */}
        <div >
          <CodeBlocks
            position={" flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
            }
            subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          ctabtn1={
            {
              btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
            }
          }
          ctabtn2={
            {
              btnText: "Learn more",
                        linkto: "/login",
                        active: false,
            }
          }
          codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
          codeColor={"text-yellow-25"}
          />
        </div>
      </div>

      {/* section 2 */}
      {/* section 3 */}
      {/* section 4 */}
      {/* section 5*/}
    </div>
  );
}

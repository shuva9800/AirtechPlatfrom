import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../component/core/Homepage/HighlightText";
import CTAbutton from "../component/core/Homepage/Button";
import frontvideo from "../assets/Images/banner.mp4";
import CodeBlocks from "../component/core/Homepage/Codeblocks";
import TimelineSection from "../component/core/Homepage/TimelineSection";
import Footer from "../component/common/Footer";
import LearningLanguageSection from "../component/core/Homepage/LearningLanguageSection";
import InstrctorSection from "../component/core/Homepage/InstrctorSection";
import ExploreMore from "../component/core/Homepage/ExploreMore";
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
          <CTAbutton active={true} linkto={"/Signup"}>
            Learn More
          </CTAbutton>
          <CTAbutton active={false} linkto={"/Login"}>
            Book a Demo
          </CTAbutton>
        </div>
        <div className="shadow-blue-200 mt-11 max-w-5xl  ">
          <video muted autoPlay loop>
            <source src={frontvideo} />
          </video>
        </div>
        {/* Code section 1 */}
        <div>
          <CodeBlocks
            position={" sm:flex-row flex-col "}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        {/* Code section 2 */}
        <div>
          <CodeBlocks
            position={" sm:flex-row-reverse flex-col"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        {/* card section */}
        <ExploreMore/>
      </div>

      {/* section 2 */}

      <div className="bg-pure-greys-5 text-richblack-800  mx-auto ">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white ">
              <CTAbutton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAbutton>
              <CTAbutton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAbutton>
            </div>
          </div>
        </div>
        <div className="mt-6 w-11/12  flex justify-between gap-2 ">
          <div className="w-[45%] text-3xl px-4 font-semibold ">
            Get the skills you need for a
            <HighlightText text={"job that is in demand"}></HighlightText>.
          </div>
          <div className="flex flex-col w-[40%] items-start gap-8">
            <p className="text-[16px]">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </p>
            <CTAbutton
              active={true}
              linkto={"/signup"}
              className="max-w-[24px]"
            >
              <div> Learn More</div>
            </CTAbutton>
          </div>
        </div>
        {/* Section2 middle content */}
        <div className="w-11/12 mt-10 mx-auto">
          <TimelineSection />
          <LearningLanguageSection/>
        </div>
      </div>
      {/* section 3 */}

      <div className="w-11/12 mt-9 mx-auto max-w-maxContent text-white flex flex-col items-center gap-8 justify-between">
            <InstrctorSection/>
            <h2 className="mt-8 text-4xl font-semibold text-center">Review from other Learner</h2>
            {/* Review slider to be created */}
      </div>
      {/* section 4 */}
      {/* section 5*/}
      <Footer/>
    </div>
  );
}

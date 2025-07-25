import React from "react";
import HighlightText from "../component/core/Homepage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../component/core/AboutPage/Quote";
import FundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from "../component/core/AboutPage/StatsComponent";
import LearningGrid from "../component/core/AboutPage/LearningGrid"
import ContactFormSection from "../component/core/AboutPage/ContactFormSection";
import Footer from "../component/common/Footer";

export default function About() {
  return (
    <div>
      {/* Section1 */}
      <section className="bg-richblack-700">
        <div className="w-11/12 relative mx-auto mt-5 max-w-maxContent flex flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a{" "}
            <HighlightText text={"Brighter Future"} />
          </header>
          <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </p>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[-50%] grid w-[100%] translate-x-[50%] translate-y-[45%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="borer-b border-richblack-700 mt-3">
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <sectio >
        <div className="w-11/12 mx-auto flex flex-col  justify-between gap-10 max-w-maxContent text-richblack-500">
          {/* Founding story div */}
          <div className="flex gap-10 flex-col items-center lg:flex-row justify-between">
            {/* Foundng story left box */}
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">Our Founding Story </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* Foundng story right box*/}
            <div >
              <img src={FundingStory} alt="Founding_story" className="shadow-[0_0_20px_0] shadow-[#FC6767]" />
            </div>
          </div>

          {/* div of vision and mission */}
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            {/* Left box */}
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] "> Our Vision</h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* Right box */}
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">Our Miission</h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[70%]">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </sectio>

      {/* Section 4 */}
      <StatsComponent/>


      {/* Section 5 */}
        <section className="w-11/12 mx-auto mt-20 flex max-w-maxContent flex-col justify-between gap-10 text-white ">
          <LearningGrid/>
        </section>
        {/* Section 4  Contact us Form*/}
        
{/* ??? */}
        <section className= " mx-auto w-11/12 mt-20 flex flex-col items-center justify-between gap-8 bg-richblack-900 max-w-maxContent text-white" >
          <ContactFormSection/>
        </section>

        {/* Section 5 for Review section pending*/}
        <div className= "relative mx-auto w-11/12 my-20 flex flex-col items-center justify-between gap-8 bg-richblack-900 max-w-maxContent text-white ">
          <h1 className="font-semibold text-4xl text-center mt-8">Reviews from other learners</h1>
        </div>

        {/* footer section */}
        <Footer/>
      
    </div>
  );
}

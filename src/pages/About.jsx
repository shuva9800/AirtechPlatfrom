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

export default function About() {
  return (
    <div>
      {/* Section1 */}
      <section>
        <div className="w-11/12 mx-auto mt-5">
          <header>
            Driving Innovation in Online Education for a{" "}
            <HighlightText text={"Brighter Future"} />
          </header>
          <p>
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </p>
          <div className="flex gap-3">
            <img src={BannerImage1} />
            <img src={BannerImage2} />
            <img src={BannerImage3} />
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section>
        <div>
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <sectio >
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center">
          {/* Founding story div */}
          <div className="flex gap-4">
            {/* Foundng story left box */}
            <div className="w-[45%]">
              <h1 className="text-richblack-200">Our Founding Story </h1>
              <p>
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p>
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
            <div>
              <img src={FundingStory} alt="Founding_story" />
            </div>
          </div>

          {/* div of vision and mission */}
          <div className="flex pt-12">
            {/* Left box */}
            <div>
              <h1> Our Vision</h1>
              <p>
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* Right box */}
            <div>
              <h1>Our Miission</h1>
              <p>
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
        <section className="w-11/12 mx-auto ">
          <LearningGrid/>
        </section>
        {/* Section 4  Contact us Form*/}

        <section className= "mb-[150px] " >
          <ContactFormSection/>
        </section>
      


    </div>
  );
}

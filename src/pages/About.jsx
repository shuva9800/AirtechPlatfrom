import React from "react";
import HighlightText from "../component/core/Homepage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../component/core/AboutPage/Quote";

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
            <Quote/>

            
        </div>
      </section>

    </div>
  );
}

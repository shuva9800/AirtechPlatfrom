import React from "react";
import HighlightText from "./HighlightText";
import learningIname1 from "../../../assets/Images/Know_your_progress.svg"
import learningIname2 from "../../../assets/Images/Compare_with_others.svg"
import learningIname3 from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from "./Button"

export default function LearningLanguageSection() {
  return (
    <div className="flex flex-col items-center mt-20 gap-5 ">
      <div className="flex justify-center items-center flex-col">
        <div className="font-semibold text-richblack-900 text-4xl">
          Your swiss knife for
          <HighlightText text={"learning any language"} />
        </div>
        <div className="font-medium text-richblack-600 w-[70%] text-center pt-3">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,progress tracking, custom schedule and more.</div>
      </div>
      <div className=" flex flex-row mt-12 items-center">
            <div className="sm:ml-7  ">
                <img src={learningIname1} alt="learningImage1"  className="object-contain"/>
            </div>
            <div className=" h-auto relative left-[-9%]">
                <img src={learningIname2} alt="learningImage2"  className="object-contain"/>
            </div>
            <div className=" relative right-[19%]">
                <img src={learningIname3} alt="learningImage3"  className="object-contain "/>
            </div>
      </div>
      <div className="mt-8 ">
        <CTAButton linkto={"/signup"} active={true} >Learn More</CTAButton>
      </div>
    </div>
  );
}

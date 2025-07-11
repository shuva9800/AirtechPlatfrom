import React from "react";
import { useSelector } from "react-redux";
import { FaRegCircleCheck } from "react-icons/fa6";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <>
      <div>
        {steps.map((item, index) => (
          <>
            <div>
              <div
                className={`${
                  step === item.id
                    ? "bg-yellow-900 border-yellow-50 text-yellow-50"
                    : "border-richblack-100 bg-richblue-800 text-richblack-300"
                }`}
              >
                {step > item.id ? <FaRegCircleCheck /> : item.id}
              </div>
            </div>
            {/* add code for dashes between the steps */}
            {/* {
                        item.id != steps.length
                       } */}
            {/* title */}
          </>
        ))}
      </div>
      <div>
        {steps.map((item) => (
          <div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm/>}
      {/* {step === 3 && <PublishCourse />} */}
    </>
  );
}

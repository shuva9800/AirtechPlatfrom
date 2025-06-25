import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/operations/courseDetailsAPI";

export default function CourseInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCatagories, setCourseCatagories] = useState([]);

  useEffect(() => {
    const getCatagories = async () => {
      setLoading(true);
      const catagories = await fetchCourseCategories();
      if (catagories.length > 0) {
        setCourseCatagories(catagories);
      }
      setLoading(false);
    };
    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }

    getCatagories();
  });
  const onSubmit = async (data) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border-richblack-700 bg-richblue-800 p-6 spage-y-6"
    >
      <div>
        <lebel>
          Course Title <sup className="text-pink-200">*</sup></lebel>
          <input
            type="text"
            id="courseTitle"
            placeholder="Enter Course Title"
            {...register("courseTitle", {required:true})}
            className="w-full"
          />
          {errors.courseTitle && (
            <span>Course Title is required**</span>
          )}
      </div>
    </form>
  );
}

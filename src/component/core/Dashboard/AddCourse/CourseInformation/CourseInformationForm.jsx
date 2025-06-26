import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/operations/courseDetailsAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RequirementFild from "./RequirementFild";

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
  console.log("CourseCatagories are :-", courseCatagories)

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
  },[]);
  const onSubmit = async (data) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border-richblack-700 bg-richblue-800 p-6 spage-y-6"
    >
      <div>
        <lebel htmlFor="courseTitle">
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
      <div>
        <label htmlFor="courseShortDesc">Course Short Description<sup className="text-pink-200">*</sup></label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", {required:true})}
          className="min-h-[130px] w-full"
        />
        {errors.courseShortDesc && (<span>Course Description is required**</span>)}
      </div>

      <div className="relative">
        <lebel htmlFor="coursePrice">
          Course Title <sup className="text-pink-200">*</sup></lebel>
          <input
            type="text"
            id="coursePrice"
            placeholder="Enter Price"
            {...register("coursePrice", {required:true , valueAsNumber: true})}
            className="w-full bg-richblack-700 "
          />
             <span className="bg-transparent absolute top-7 left-[10px]"><HiOutlineCurrencyRupee /></span>
          {errors.courseTitle && (
            <span>Course Price is required**</span>
          )}
      </div>
      <div>
      <label htmlFor="courseCategory">Catagory<sup className="text-pink-200">*</sup></label>
        
            <select
            id="courseCategory"
            defaultValue=""
            {...register("courseCategory", {required:true})}
            
            className="bg-richblue-600">
            <option value="" disabled>Chose a Catagory</option>
              {
               !loading && courseCatagories.map((catagory , index)=>(
                  <option key={index} value={catagory?._id} >{catagory?.name}</option>
                ))
              }
            </select>

             {errors.courseCategory && (
            <span>Course Catagory is Required**</span>
          )}
      </div>
      {/* ///create  a custom component for handlaing tags input */}
      {/* <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter tags and press enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      /> */}

      {/*Create a component for  Thumbnil Upload */}
      {/* <Upload
        name
        label
        register
        setValue
        errors
      /> */}

        {/* Benifites of the course */}
        <div>
          <label>Benefits of the course <sup className="text-pink-200">*</sup></label>
          <textarea
            id="courseBenefits"
            placeholder="Enter Benefits of the course"
            
            {...register("courseBenefits",{required:true})}
            className="min-h-[130px] w-full"

          />
           {errors.courseBenefits && (
            <span> Benefits of the Course are Required**</span>
          )}
        </div>

        <RequirementFild
          name="courseRequirements"
          label="Requirements/Instructions"
          register={register}
          errors={errors}

          setValue={setValue}
          getValues={getValues}

        />
    </form>
  );
}

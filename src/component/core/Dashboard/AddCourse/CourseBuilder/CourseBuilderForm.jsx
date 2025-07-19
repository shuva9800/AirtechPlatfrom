import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconBtn from "../../../../common/IconBtn";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../app/slicess/courseSlice";
import toast from "react-hot-toast";
import {
  createSection,
  updateSection,
} from "../../../../../services/operations/courseDetailsAPI";
import NestedViewv from "./NestedViewv";

export default function CourseBuilderForm() {
  const [editSectionName, setEditSectionName] = useState(null);
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  console.log("current course is",course)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  //form submit function
  const sectionHandler = async (data) => {
    setLoading(true);
    let result;
    //if Editing the section name
    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      );
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      );
    }
    //update values
    if (result) {
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName", "");
    }
    //loading false
    setLoading(false);
  };

  //cancel button acction
  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };
  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  };

  //back button action
  const goToNext = () => {
    if (course.courseContent.length === 0) {
      toast.error("Please add atlast one Section");
      return;
    }
    if (
      course.courseContent.some((section) => section.subsection.length === 0)
    ) {
      toast.error("Please add atlast one lecture in each section");
      return;
    }
    dispatch(setStep(3));
  };

  //nestedview passing function
  const handelChangeSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      cancelEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  };

  return (
    <div  className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">Course Builder</p>
      <form onSubmit={handleSubmit(sectionHandler)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="sectionName">
            Section Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="sectionName"
            placeholder="Add Section Name"
            {...register("sectionName", { required: true })}
            className="w-full bg-richblack-600 form-style"
          />
          {errors.sectionName && <span>Section Name is Required</span>}
        </div>
        <div className="flex gap-2 mt-10">
          <IconBtn
            type="Submit"
            text={editSectionName ? "Edit Section" : "Create Section"}
            outline={true}
            customClasses={"border border-richblack-600 text-black "}
          >
            <MdOutlineAddCircleOutline className="text-richblack-400"/>
          </IconBtn>

          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-richblack-300 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* nested view */}
      {course.courseContent.length > 0 && (
        <NestedViewv handelChangeSectionName={handelChangeSectionName} />
      )}
      <div className="flex justify-end gap-1">
        <button
          onClick={goBack}
          className="rounded-md text-center cursor-pointer"
        >
          Back
        </button>
        <IconBtn disabled={loading} text="Next" onClick={goToNext}>
          <GrLinkNext />
        </IconBtn>
      </div>
    </div>
  );
}

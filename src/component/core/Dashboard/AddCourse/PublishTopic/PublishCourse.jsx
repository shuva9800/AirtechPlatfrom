import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../../common/IconBtn";
import { resetCourseState, setEditCourse, setStep } from "../../../../../app/slicess/courseSlice";
import { COURSE_STATUS } from "../../../../../utils/constants";
import { editCourseDetails } from "../../../../../services/operations/courseDetailsAPI";
import { useNavigate } from "react-router-dom";


export default function PublishCourse() {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue("public", true);
    }
  }, []);

  const goBack = () => {
    dispatch(setStep(2));
    dispatch(setEditCourse(true));
  };
  const goToCourses = ()=>{
    console.log("gotoCourses function hit")
    dispatch(resetCourseState);
    
    navigate("/dashboard/my-courses")
  }

  const handelCoursePublish = async () => {
    if (
      (course?.status === COURSE_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (course.status === COURSE_STATUS.DRAFT && getValues("public") === false)
    ) {
      //no update occure in form
      //no need to make api call
      goToCourses();
      return;
    }
    //if form update
    const formData = new FormData();
    formData.append("courseId", course._id);
    const courseStatus = getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT
    formData.append("status", courseStatus);

    setLoading(true);
    const result = await editCourseDetails(formData,token);
    if(result){
      goToCourses()
    }
    setLoading(false)
  };

  const onSubmit = (event) => {
    handelCoursePublish();
  };

  return (
    <div className="rounded-md border-[1px] bg-richblack-800 border-richblack-700">
      <p>Publish Course</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="rounded h-4 w-4"
            />
            <span className="ml-3"> Make this Course as Public</span>
          </label>
        </div>
        <div className="flex justify-end gap-x-3 ">
          <button
            disabled={loading}
            type="button"
            className="flex items-center rounded-md bg-richblack-300 p-2"
            onClick={goBack}
          >
            Back
          </button>
          <IconBtn disabled={loading} text="Save Changes" />
        </div>
      </form>
    </div>
  );
}

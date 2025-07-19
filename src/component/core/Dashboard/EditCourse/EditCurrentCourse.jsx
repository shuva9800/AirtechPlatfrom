import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RenderSteps from "../AddCourse/RenderSteps";
import Loader from "../../../common/Loader";
import { getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { setCourse, setEditCourse } from "../../../../app/slicess/courseSlice";

export default function EditCurrentCourse() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { course } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const poputateCourseDetails = async () => {
      setLoading(true);
      const result = await getFullDetailsOfCourse(courseId, token);
      if (result) {
        dispatch(setEditCourse(true));
        dispatch(setCourse(result));
      }
      setLoading(false);
    };
    poputateCourseDetails();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <h1>Edit Course now</h1>
      <div>{course ? <RenderSteps /> : <p>Course Not Found</p>}</div>
    </div>
  );
}

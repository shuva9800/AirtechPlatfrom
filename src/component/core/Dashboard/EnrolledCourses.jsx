import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileApi";
import Loader from "../../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token);
      setEnrolledCourses(response);
      console.log("Enrolled Courses are", enrolledCourses);
    } catch (error) {
      console.log("Unable to fetch Enrolled Courses");
    }
  };
  useEffect(() => {
    getEnrolledCourses();
  }, []);
  return (
    <div>
      <div>Enrolled Courses</div>
      {!enrolledCourses ? (
        <div>
          <Loader />
        </div>
      ) : !enrolledCourses.length ? (
        <p>You have not enrolled any Course yet</p>
      ) : (
        <div>
          <div>
            <p>Course Name</p>
            <p>Durations</p>
            <p>Progress</p>
          </div>
          {/* now card section started */}
          {enrolledCourses.map((course, index) => (
            <div>
              <div>
                <img src={course.thumbnil} />
                <div>
                  <p>{course.courseName}</p>
                  <p>{course.courseDescription} </p>
                </div>
              </div>
              <div>{course?.totalDuration}</div>
              <div>
                <p>Progress:{course.progressPercentage || 0}%</p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

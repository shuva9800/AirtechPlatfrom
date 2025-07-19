import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { COURSE_STATUS } from "../../../../utils/constants";
import ConfirmationModal from "../../../common/ConfirmationModal";
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../app/slicess/courseSlice";
import { useNavigate } from "react-router-dom";
export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const handelCourseDelete = async (courseId) => {
    console.log("delete course hit")
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      //slice purpose
      // dispatch(setCourses(result));
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };

  return (
    <div className="w-full">
      <Table>
        <Thead>
          <Tr className="flex gap-x-16 border justify-around border-richblack-800  w-full">
            <Th>Courses</Th>
            <Th>Duration</Th>
            <Th>Price</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses.length === 0 ? (
            <Tr>
              <Td>No Courses Found</Td>
            </Tr>
          ) : (
            courses.map((course) => (
              <Tr
                key={course._id}
                className="flex gap-x-20 border border-richblack-800  w-full"
              >
                <Td className="flex gap-x-4">
                  <img
                    src={course.thumbnil}
                    className="h-[150px] w-[220px] rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <p>{course.courseName}</p>
                    <p>{course.courseDescription}</p>
                    <p>Created:</p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <p className="text-pink-100">DRAFTED</p>
                    ) : (
                      <p className="text-yellow-50">PUBLISHED</p>
                    )}
                  </div>
                </Td>
                <Td>
                  2hr 30min
                  {/* {course.duration} */}
                </Td>
                <Td>${course.price}</Td>
                <Td className="flex gap-x-5">
                  <button
                    disabled={loading}
                    onClick={()=>{
                        navigate(`/dashboard/edit-course/${course._id}`)
                    }}
                  >
                    EDIT
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this course",
                        text2:
                          "All the data releted to this course will be deleted",
                        btn1Text: "Delete",
                        btn2Text: "Cancel",
                        // btn1Handler: () => handelCourseDelete(course._id),
                        btn1Handler: () => handelCourseDelete(course._id),
                        btn2Handler:() => setConfirmationModal(null)
                          
                      });
                    }}
                  >Delete</button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
}

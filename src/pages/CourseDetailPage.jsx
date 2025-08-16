import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../services/operations/studentFeaturesAPI";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import GetAvgRating from "../utils/avgRating";
import Loader from "../component/common/Loader";
import Error from "./Error";
import ConfirmationModal from "../component/common/ConfirmationModal";
import RatingStars from "../component/common/RatingStars";
import { formatDate } from "../services/formatDate";
import CourseDetailsCard from "../component/core/Course/CourseDetailsCard";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { user, loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetch clicked course details
  const [courseData, setCourseData] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null);
  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseId);
        setCourseData(result);
      } catch (error) {
        console.log("Could not fetch course details");
      }
    };
    getCourseDetails();
  }, [courseId]);

  //avg rating
  const [avgReviewCount, setAverageReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(
      courseData?.data?.getCourseDetails.ratingandreview
    );
    setAverageReviewCount(count);
  }, [courseData]);

  //total lecture
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    let lectures = 0;
    courseData?.CourseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [courseData]);

  //Collaps all section
  const [isActive ,setIsActive] = useState(Array(0));
  const handelActive = (id)=>{
    setIsActive(
      !isActive.includes(id)?
      isActive.concat(id)
      :isActive.filter((item)=> item !== id)
    )
  }

  //buy course
  const handelBuyCourse = (courseId) => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "You are not Logged in",
      text2: "Please Login to purchase trhe course",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (loading || !courseData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (!courseData) {
    return (
      <div>
        <Error />
      </div>
    );
  }
  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingandreview,
    instructor,
    studentEnroll,
    createdAt,
  } = courseData;

  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col justify-start p-8">
        <p>{courseName}</p>
        <p>{courseDescription}</p>
        <div className="flex gap-x-1">
          <span>{avgReviewCount}</span>
          <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
          <span>{`(${ratingandreview.length} reviews)`}</span>
          <span>{`(${studentEnroll.length} student enrolled)`}</span>
        </div>

        <div>{/* <p>Created By {`${instructor.firstName}`}</p> */}</div>
        <div className="flex gap-x-3">
          <p>Created At {formatDate(createdAt)}</p>
          <p> English</p>
        </div>
      </div>

      <div>
        <CourseDetailsCard
          course={courseData}
          setConfirmationModal={setConfirmationModal}
          handelBuyCourse={handelBuyCourse}
        />
      </div>

      {/* What you will learn section */}
      <div>
        <p>What Yopu Will Learn</p>
        <div>{whatYouWillLearn}</div>
      </div>
      {/* Course Content Page */}
      <div>
        <div>
          <p>Course Content</p>
        </div>
        <div className="flex gap-x-1 justify-between">
          <div>
            <span>{courseContent.length} Sectio(s)</span>

            <span> {totalNoOfLectures} lectures</span>
            <span>{courseData.data?.totalDuration}</span>
          </div>
          <div>
            <button 
            onClick={()=> setIsActive([])}>
              Collaps all sections
            </button>
          </div>
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
}

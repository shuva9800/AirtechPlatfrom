import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../services/operations/studentFeaturesAPI";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import GetAvgRating from "../utils/avgRating";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetch clicked course details
  const [courseData, setCourseData] = useState(null);
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
  const [avgReviewCount , setAverageReviewCount]= useState(0);
  useEffect(()=>{
    const count = GetAvgRating(courseData?.data?.getCourseDetails.ratingandreview)
      setAverageReviewCount(count)
 
  },[courseData])


  const handelBuyCourse = (courseId) => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
    }
  };
  return (
    <div>
      <p>Wellcome guys</p>
      <div>
        Your course id is :-<span>{courseId}</span>
      </div>
      <button
        className="bg-yellow-50 p-6 mt-10"
        onClick={() => handelBuyCourse(courseId)}
      >
        Buy Now
      </button>
    </div>
  );
}

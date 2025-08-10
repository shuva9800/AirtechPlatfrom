import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../services/operations/studentFeaturesAPI";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import GetAvgRating from "../utils/avgRating";
import Loader from "../component/common/Loader"
import Error from "./Error"
import ConfirmationModal from "../component/common/ConfirmationModal";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { user,loading } = useSelector((state) => state.profile);
  const {paymentLoading}= useSelector((state)=> state.course)
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
  const [avgReviewCount , setAverageReviewCount]= useState(0);
  useEffect(()=>{
    const count = GetAvgRating(courseData?.data?.getCourseDetails.ratingandreview)
      setAverageReviewCount(count)
 
  },[courseData])


  //total lecture
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(()=>{
    let lectures =0;
    response?.data?.CourseDetails?.courseContent?.forEach((sec)=>{
      lectures += sec.subSection.length || 0
    })
    setTotalNoOfLectures(lectures)
  },[courseData])

  //buy course
  const handelBuyCourse = (courseId) => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal(
      {
        text1:"You are not Logged in",
        text2:"Please Login to purchase trhe course",
        btn1Text:"Login",
        btn2Text:"Cancel",
        btn1Handler:()=>navigate("/login"),
        btn2Handler:()=>setConfirmationModal(null)

      }
    )

  };


if(loading || !courseData){
  return(
    <div>
      <Loader/>
    </div>
  )
}
if(!courseData.success){
  return(
    <div>
      <Error/>
    </div>
  )
}

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



      {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  );
}

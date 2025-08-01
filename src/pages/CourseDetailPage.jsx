import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { buyCourse } from '../services/operations/studentFeaturesAPI';

export default function CourseDetailPage() {
    const {courseId} = useParams();
    const {token} = useSelector((state)=> state.auth)
    console.log("course id is", courseId);
    const handelBuyCourse = (courseId)=>{
      if(token){
        buyCourse();
      }
    }
  return (
    <div>
        <p>Wellcome guys</p>
        <div>Your course id is :-<span>{courseId}</span></div>
        <button calssName="bg-yellow-50 p-6 mt-10"
        onClick={()=> handelBuyCourse(courseId)}
        >
          Buy Now
        </button>
    </div>
  )
}

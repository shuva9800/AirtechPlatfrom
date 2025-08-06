import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { buyCourse } from '../services/operations/studentFeaturesAPI';

export default function CourseDetailPage() {
    const {courseId} = useParams();
    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=> state.profile)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // console.log("course id is", courseId);


    const handelBuyCourse = (courseId)=>{
      if(token){
        buyCourse(token,[courseId],user,navigate,dispatch);
      }
    }
  return (
    <div>
        <p>Wellcome guys</p>
        <div>Your course id is :-<span>{courseId}</span></div>
        <button className="bg-yellow-50 p-6 mt-10"
        onClick={()=> handelBuyCourse(courseId)}
        >
          Buy Now
        </button>
    </div>
  )
}

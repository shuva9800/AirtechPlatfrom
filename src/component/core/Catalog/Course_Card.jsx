import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RatingStars from "../../common/RatingStars"
import GetAvgRating from '../../../utils/avgRating';

export default function Course_Card({course,Height}) {

const [avgReviewCount , setAvgReviewCount] = useState(0);
useEffect(()=>{
  const count = GetAvgRating(course.ratingAndReview);
  setAvgReviewCount(count)
},[course])



  return (
    <div>
      <Link to={`/courses/${course._id}`}>
        <div>
          <div>
            <img src={course.thumbnil} alt='courseThumbnil' className={`${Height} rounded-xl object-cover w-full`}/>
          </div>
          <div>
            <p>{course?.courseName}</p>
            <p>{course?.instractor?.firstName} {" "} {course?.instractor?.lastName} </p>
            <div className='flex gap-x-3'>
              <span>{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount}/>
              <span>{course?.ratingAndReview?.length} Rating</span>
            </div>
          </div>
          <p>{course?.price}</p>
        </div>
      </Link>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetailPage() {
    const {courseId} = useParams();
    console.log("course id is", courseId)
  return (
    <div>
        <p>Wellcome guys</p>
        <div>Your course id is :-<span>{courseId}</span></div>
        
    </div>
  )
}

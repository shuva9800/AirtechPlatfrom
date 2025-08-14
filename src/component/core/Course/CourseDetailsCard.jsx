import React from 'react'

export default function CourseDetailsCard(course, setConfirmationModal,handelBuyCourse) {
  return (
    <div className='flex flex-col'>
        <img src={course.thumbnil} alt='Thumbnil'
            className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl object-contain'
        />
        <div>
            Rs.{course.price}
        </div>
        <div>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}






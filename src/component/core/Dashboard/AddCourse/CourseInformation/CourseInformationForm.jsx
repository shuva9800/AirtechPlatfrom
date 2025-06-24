import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function CourseInformationForm() {

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const {course, editCourse} = useSelector((state)=>state.course)
  const [loading , setLoading] = useState(false);
  const [courseCatagories , setCourseCatagories ] = useState([])
  
  
  return (
    <div>
        
    </div>
  )
}

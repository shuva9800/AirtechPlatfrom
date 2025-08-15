import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../app/slicess/cartSlice';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
import { ACCOUNT_TYPE } from '../../../utils/constants';
export default function CourseDetailsCard(course, setConfirmationModal,handelBuyCourse) {

const {user} = useSelector((state)=> state.profile);
const {token}= useSelector((state)=> state.auth);
const navigate = useNavigate();
const dispatch = useDispatch();
console.log("$$$$",course)

const handelAddToCart =()=>{
  if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
    toast.error("You are an Instractor , you cant buy a course")
  }
  if(token){
    dispatch(addToCart(course.course._id))
  }
  setConfirmationModal({
    
  })
}

const handelShare = ()=>{
  copy(window.location.href);
  toast.success("Link Copied")
}

    

  return (
    <div className='flex flex-col'>
        <img src={course.course.thumbnil} alt='Thumbnil'
            className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl object-contain'
        />
        <div>
            Rs.{course.course.price}
        </div>
        <div className='flex flex-col gap-y-6 '>
            {/* <button>
              {
                  user && course.course?.studentEnroll.includes(user._id)?"Go to Course" :"Bye Now"
              }
            </button> */}
            <button
            className='bg-yellow-50 p-2 rounded-md w-fit text-richblack-900' 
            onClick={
              user && user.courses.includes(course.course._id)
              ? ()=> navigate("/dashboard/enrolled-courses")
              : handelBuyCourse
            }>
              {
                user && user.courses.includes(course.course._id)? "Go To Course" :" Buy Now"
              }
            </button>
           {
            (!user.courses.includes(course.course._id)) && (
              <button 
              className='bg-yellow-50 p-x-2 p-y-2 rounded-md w-fit' 
              onClick={handelAddToCart}
              >
                Add To Cart
              </button>
            )
           }
        </div>
        <div>
          <p>
            30-Day Money-Back Guarantee
          </p>
          <p>
            This Course Includes:
          </p>
          <div className='flex flex-col gap-y'>
           {
            course.course.instructions.map((item)=>(
              <p>{item}</p>
            ))
           }
          </div>
        </div>
        <div>
          <button 
          className="mx-auto flex items-center gap-2 p-6 text-yellow-50"
          onClick={handelShare}
          >
            Share
          </button>
        </div>
    </div>
  )
}






import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../app/slicess/cartSlice';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
import { ACCOUNT_TYPE } from '../../../utils/constants';
import { FaRegShareSquare } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
export default function CourseDetailsCard({course, setConfirmationModal,handelBuyCourse}) {

const {user} = useSelector((state)=> state.profile);
const {token}= useSelector((state)=> state.auth);
const navigate = useNavigate();
const dispatch = useDispatch();
console.log("$$$$",course)
const {
  whatYouWillLearn,
  price,
  thumbnil
}= course

const handelAddToCart =()=>{
  if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
    toast.error("You are an Instractor , you cant buy a course")
  }
  if(token){
    dispatch(addToCart(course));
    return;
  }
  setConfirmationModal({
    text1:"you are not logged in",
    text2: "Please Login at first tenuse Add to cart",
    btn1Text:"login",
    btn2Text:"Cancel",
    btn1Handler: ()=> navigate("/login"),
    btn2Handler: ()=> setConfirmationModal(null),
    
  })
}

const handelShare = ()=>{
  copy(window.location.href);
  toast.success("Link Copied")
}

    

  return (
    <div className='flex flex-col'>
        <img src={thumbnil} alt='Thumbnil'
            className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl object-contain'
        />
        <div>
            Rs.{price}
        </div>
        <div className='flex flex-col gap-y-6 '>
            {/* <button>
              {
                  user && course?.studentEnroll.includes(user._id)?"Go to Course" :"Bye Now"
              }
            </button> */}
            <button
            className='bg-yellow-50 p-2 rounded-md w-fit text-richblack-900' 
            onClick={
              user && user.courses.includes(course._id)
              ? ()=> navigate("/dashboard/enrolled-courses")
              : handelBuyCourse
            }>
              {
                user && user.courses.includes(course._id)? "Go To Course" :" Buy Now"
              }
            </button>
           {
            (!user.courses.includes(course._id)) && (
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
            course.instructions.map((item, index)=>(
              <p key={index} className='flex gap-x-2 items-center text-caribbeangreen-400'>
              <CiPlay1 />
                <span>{item}</span>
              </p>
            ))
           }
          </div>
        </div>
        <div>
          <button 
          className="mx-auto flex items-center gap-2 p-6 text-yellow-50"
          onClick={handelShare}
          >
          <FaRegShareSquare />
            <span>Share</span>
          </button>
        </div>

    </div>
  )
}






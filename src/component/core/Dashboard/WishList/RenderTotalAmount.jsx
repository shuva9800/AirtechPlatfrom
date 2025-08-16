import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn'
import { useNavigate } from 'react-router-dom';
import {buyCourse} from '../../../../services/operations/studentFeaturesAPI'

export default function RenderTotalAmount() {
    const {total,cart} = useSelector((state)=>state.cart);
    const{user} = useSelector((state)=> state.profile);
    const {token}= useSelector((state)=> state.auth);
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const handelBuycourse =()=>{
        const courses = cart.map((course)=> course._id);
        console.log("first")
        //Due Todo API : intregate -> payment getway page 
        buyCourse(token, courses,user, navigate, dispatch)
    }
  return (
    <div className='flex flex-col w-[200px] gap-3'>
       <p>Total:</p> 
       <p className='text-yellow-50 font-semibold '>Rs {total}</p>

       <IconBtn
        text= "Buy Now"
        onClick={handelBuycourse}
        customClasses={"w-full justify-center bg-yellow-50 p-2 rounded-lg text-richblack-700"}
       />
    </div>
  )
}

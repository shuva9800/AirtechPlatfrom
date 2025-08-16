import React from 'react'
import { useSelector } from 'react-redux'
import { RenderCartCourses } from './RenderCartCourses'
import RenderTotalAmount from './RenderTotalAmount'

export default function Cart() {
    const {total,totalItems} =useSelector((state)=>state.cart)
  return (
    <div className=' '>
        <h1 className='text-richblack-5 font-medium text-[26px] '>My Wishlist </h1>
        <p className='font-semibold text-richblack-400'>{totalItems} Courses in Wishlist</p>
        {
            total >0 
            ? (
                <div className='flex  justify-between'>
                    <RenderCartCourses/>
                    <RenderTotalAmount/>
                </div>
            )
            : (<p>Your Cart is Empty</p>)
        }
    </div>
  )
}

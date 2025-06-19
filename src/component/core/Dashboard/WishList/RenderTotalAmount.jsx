import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from "../../../common/iconBtn"

export default function RenderTotalAmount() {
    const {total,cart} = useSelector((state)=>state.cart)
    const handelBuycourse =()=>{
        const courses = cart.map((course)=> course._id)
        console.log("Buying these courses", courses);
        //Due Todo API : intregate -> payment getway page 
    }
  return (
    <div>
       <p>Total:</p> 
       <p>Rs {total}</p>

       <IconBtn
        text= "Bye Now"
        onclick={handelBuycourse}
        customClasses={"w-full justify-center"}
       />
    </div>
  )
}

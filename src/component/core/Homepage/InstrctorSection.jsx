import React from 'react'
import InstractorImg from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from './Button'
import {FaArrowRight} from "react-icons/fa"

export default function InstrctorSection() {
  return (
    <div className='flex flex-row gap-6 items-center'>
        <div className='w-[50%] border-l-8 border-t-8 border-white'>
            <img src={InstractorImg} alt='Instractor' className='object-contain shadow-white'/>
        </div>

        <div className='flex flex-col gap-8 w-[45%]'>

        <div className='text-4xl font-semibold w-[50%]'>
           Become an
            <HighlightText text={"instractor"}/>
        </div>
        <p className='text-[16px] font-medium w-[90%] text-richblack-300'>Instractor from around the world teach millions o students on SyudyNotion. We provide the tools and skills to teach what you love.</p>
        <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"} >
                <div className='flex flex-row items-center gap-3'>
                    <p>Start Teaching Today</p>
                    <FaArrowRight/>
                </div>
            </CTAButton>
        </div>
        </div>
    </div>
  )
}

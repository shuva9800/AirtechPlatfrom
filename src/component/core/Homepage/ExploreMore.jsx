import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText'

const tagItems =[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

export default function ExploreMore() {
    const [currentTab, setcurrentTab]= useState(tagItems[0]);
    const [carddetails, setcardDetails]= useState(HomePageExplore[0].courses);
    console.log(carddetails)
   function tabCangeHandler(index){
    setcurrentTab(tagItems[index]);
    setcardDetails(HomePageExplore[index].courses)
   }

  return (
    <div>
        <div className='flex flex-col items-center mx-auto'>
            <div className='text-4xl font-semibold text-white'>
                    Unlock the 
                    <HighlightText text={"Power of Code"}/> 
            </div>
            <p className='text-richblack-500 '>Learn to Build Anything You Can Imagine</p>
            {/* card section */}
            <div className='flex flex-col gap-7 items-center '>
            <div className='flex fleex-roe gap-6 px-5 rounded-lg bg-richblack-700 mt-5 py-3 '>
                {
                    tagItems.map((item,index)=>(
                        <div key={index} onClick={()=>tabCangeHandler(index)}>{item}</div>
                    )
                    )
                }
            </div>

            <div className='flex flex-row gap-5 items-center justify-center '>
                {
                    carddetails.map((value, index)=>(
                        <div className='px-5 w-fit'>
                            <h2 className='text-2xl text-richblack-200'>{value.heading}</h2>
                            <p className='text-richblack-500 font-thin w-[70%] '>{value.description}</p>
                            <div className='flex justify-between'>
                                <div>{value.level}</div>
                                <div>{value.lessionNumber}</div>
                            </div>
                        </div>
                    )
                    )

                }
            </div>

            </div>
        </div>
    </div>
  )
}

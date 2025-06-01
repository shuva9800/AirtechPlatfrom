import React from 'react'
import { IoPeople } from "react-icons/io5";
import { MdNaturePeople } from "react-icons/md";

 


export default function CourseCard({key,cardData,currentCard,setCurrentCard}) {
  return (
     

<div className="max-w-sm p-6 bg-richblack-700 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className={`mb-2 text-2xl font-bold tracking-tight text-richblack-900`}>{cardData.heading}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardData.description}</p>
     <hr className=" border-t border-dotted border-gray-400 mx-auto mb-4" />
    <div className='flex flex-row items-center justify-between '>
        <div className='flex gap-2 flex-row items-center'>
            <IoPeople />
            <p>{cardData.level}</p>
             
        </div>
        <div className='flex gap-2 flex-row items-center'>
            <MdNaturePeople />
            <p>{cardData.lessionNumber}</p>
             
        </div>
    </div>
</div>

  )
}

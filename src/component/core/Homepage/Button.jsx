import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children,linkto,active}) {
  return (
    <Link to={linkto}>
        <div className={`mt-6 py-3 px-6 rounded-lg font-medium text-base transition-all duration-200 hover:scale-95 
            ${active? "bg-yellow-50 text-black" :"bg-richblack-800"}
            shadow-[0_35px_35px_rgba(0,0,0,0.25)
        `}>
            {children}
        </div>
    </Link>
  )
}

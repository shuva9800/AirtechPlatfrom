import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import {NavbarLinks} from "../../data/navbar-links"


export default function Navbar() {

  const location =useLocation()

  const matchRoute =(route)=>{
    return matchPath({path:route}, location.pathname);
  }
  return (
    // fixed lg:left-[50%] lg:translate-x-[-50%]  lg:translate-y-[50%] 
    <div className=" h-14 border-b-[1px] border-b-richblack-700 top-[-17px] z-10 rounded-lg">
      <div className=" w-11/12 max-w-maxContent flex flex-row justify-between items-center mx-auto px-4 py-2 font-medium text-richblack-25 text-[20px] ">
      <Link to={"/"}>
           <img src={logo} className="object-contain w-[160px] h-[32px]" />
      </Link>
       
        <div>
          <ul className="flex flex-row gap-x-6">
          {
            NavbarLinks.map((link,index)=>(
             <li key={index}>
                {
                  link.title === "Catalog" ?(<div></div>) : (
                    <Link to={link?.path}>
                      <p className={`${matchRoute(link?.path)?"text-yellow-25":"text-richblack-25"}`}>{link.title}</p>
                    </Link>
                  )
                }
             </li>
            )
            )
          }
            {/* <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/"}>
              <li className="flex gap-1 items-center">
                <p>Catalog</p>
                <RiArrowDropDownLine />
              </li>
            </Link>
            <Link to={"/"}>
              <li>About Us</li>
            </Link>

            <Link to={"/"}>
              <li>Contact Us</li>
            </Link> */}
          </ul>
        </div>
        <div className="flex flex-row gap-3  items-center text-[15px]">
        

          <Link to={"/signup"}>
            <div className="p-1.5 rounded-lg bg-richblack-600 border">Sign up</div>
          </Link>
          <Link to={"/login"}>
            <div className="p-1.5 rounded-lg bg-richblack-600 border">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

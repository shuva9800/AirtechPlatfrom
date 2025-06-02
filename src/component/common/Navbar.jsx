import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="w-11/12 fixed top-1 z-10 bg-richblack-800 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] rounded-lg">
      <div className="flex flex-row justify-between items-center px-4 py-2 font-medium text-richblack-25 text-[20px] ">
        <img src={logo} className="object-contain" />
        <div>
          <ul className="flex flex-row gap-3">
            <Link to={"/"}>
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
            </Link>
          </ul>
        </div>
        <div className="flex flex-row gap-2 items-center text-[15px]">
          <CiSearch />

          <IoCartOutline />

          <Link to={"/signup"}>
            <div className="p-1.5 rounded-full bg-richblack-600">Sign up</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

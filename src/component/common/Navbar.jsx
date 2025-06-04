import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import profileDropDown from "../core/Auth/profileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { catagories } from "../../services/api";
import axios from "axios";

export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  //catagory list fetching start
  const [subLinks, setsubLinks] = useState([]);
  console.log(subLinks);

  const fetchSublinks = async () => {
    try {
      // const result=  await apiConnector("GET", catagories.CATAGORIES_API)
      const result = await axios.get(
        "http://localhost:4000/api/v1/course/showAllCatagory"
      );
      console.log("printing sublinks result :-", result);
      setsubLinks(result.data.allCatagory);
    } catch (error) {
      console.log("Could not fetch the catagory list");
    }
  };
  useEffect(() => {
    fetchSublinks();
  }, []);
  //catagory list fetching end

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    // css property for set navbar on the top fixed lg:left-[50%] lg:translate-x-[-50%]  lg:translate-y-[50%]
    <div className=" h-14 border-b-[1px] border-b-richblack-700 top-[-17px] z-10 ">
      <div className=" w-11/12 max-w-maxContent flex flex-row justify-between items-center mx-auto px-4 py-2 font-medium text-richblack-25 text-[20px] ">
        <Link to={"/"}>
          <img src={logo} className="object-contain w-[160px] h-[32px]" />
        </Link>

        <div>
          <ul className="flex flex-row gap-x-6">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="flex flex-row items-center gap-[2px] cursor-pointer group relative">
                    <p>{link.title}</p>
                    <RiArrowDropDownLine />
                    <div className="invisible absolute left-[50%] top-[50%] translate-x-[-40%] translate-y-[15%] rounded-md flex flex-col bg-richblack-5 p-4 gap-1 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]">
                      {subLinks.map((item, index) => (
                        <p key={index}>{item.name}</p>
                      ))}
                    </div>
                    <div className="h-6 w-6 bg-richblack-5 rounded-md rotate-45 absolute top-[26px] left-[55%] translate-x-[80%] translet-y-[60%] invisible opacity-0 group-hover:visible group-hover:opacity-100"></div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Login && Signup Dashboard*/}
        <div className="flex flex-row gap-3  items-center text-[15px]">
          {user && user?.accountType != "Instractor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <IoCartOutline />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <button className="p-1.5 rounded-md bg-richblack-800 border border-richblack-500">
                Log in
              </button>
            </Link>
          )}

          {token === null && (
            <Link to={"/signup"}>
              <button className="p-1.5 rounded-md bg-richblack-800 border border-richblack-500">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && <profileDropDown />}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import Loader from "../component/common/Loader";
import { BiArrowBack } from "react-icons/bi"

export default function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

    const handelOnSubmit =(e)=>{
        e.preventDefault();
        getPasswordResetToken(email, setEmailSent,dispatch)

    }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div><Loader/></div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8 ">
          <h1 className="font-semibold text-[30px] text-richblack-5 leading-[2.375rem]">{!emailSent ? "Reset Your Password" : "Check Your Email"}</h1>
          <p className="text-richblack-100 text-[18px] my-3 leading-[1.625rem] ">
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handelOnSubmit} >
            {!emailSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address <sup className="text-pink-200">*</sup></p>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="form-style w-full border border-richblack-700 bg-richblack-800 text-richblack-5 rounded-md py-2 px-2"
                />
              </label>
            )}
            <button type="submit" className="mt-[26px] py-[12px] w-full bg-yellow-50 text-richblue-900 rounded-md text-center text-[16px] font-medium">{!emailSent ? "Reset Password" : "Resend email"}</button>
          </form>
          <div className="mt-2">
            <Link to={"/login"}>
           <div className="flex items-center gap-1">
             <BiArrowBack />
                <p>Back to Login</p>  
           </div> 
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

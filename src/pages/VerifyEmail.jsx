import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/common/Loader";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function VerifyEmail() {
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  },[]);

  const handelOnSubmit = (e) => {
    
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="w-11/12 max-w-[508px] mx-auto mt-6 ">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[508px] flex flex-col gap-3 justify-center items-center">
          <h1 className="font-semibold text-[26px] text-richblack-5">Verify Email</h1>
          <p className="text-richblack-100 ">A verification code has been sent to you. Enter the code below</p>
          <form onSubmit={handelOnSubmit}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
               renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} 
                className="bg-richblack-600 text-richblack-5"
              />}
            />
            <button type='submit' className="text-richblack-900 pt-3 bg-yellow-50" >Verify Email</button>
          </form>
          <div className="flex justify-between">
            <Link to={"/login"} className="flex items-center">
            <IoIosArrowRoundBack />
              <p>Back to Login</p>
            </Link>
            <button
            onClick={()=> dispatch(sendOtp(signupData.email,navigate ))}
            >Resent it</button>
          </div>
        </div>
      )}
    </div>
  );
}

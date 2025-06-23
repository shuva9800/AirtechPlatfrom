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
  }, []);

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
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[508px] p-4 lg:p-8">
          <h1 className="font-semibold text-[26px] text-richblack-5">
            Verify Email
          </h1>
          <p className="text-richblack-100 text-[15px] w-[85%] mt-2">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handelOnSubmit}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-md text-richblack-5 aspect-square text-center  focus:border-0 focus:outline-2 focus:outline-yellow-50 "
                />
              )}
            />
            <button
              type="submit"
              className="text-richblack-900 py-2 bg-yellow-50 w-full text-center mt-5 border border-richblack-700 rounded-md"
            >
              Verify Email
            </button>
          </form>
          <div className="flex justify-between mt-3">
            <Link to={"/login"} className="flex items-center">
              <IoIosArrowRoundBack />
              <p>Back to Login</p>
            </Link>
            <button
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
            >
              Resent it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

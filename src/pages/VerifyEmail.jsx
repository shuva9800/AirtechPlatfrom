import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/common/Loader";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authAPI";

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
    <div >
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>verify Email</h1>
          <p>A verification code has been sent to you. Enter the code below</p>
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
            <button type='submit'>Verify Email</button>
          </form>
          <div>
            <Link to={"/login"}>
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

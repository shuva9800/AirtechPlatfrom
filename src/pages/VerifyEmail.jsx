import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/common/Loader";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { sendOtp } from "../services/operations/authAPI";

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
      Signup(
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
              renderInput={(props) => <input {...props} />}
            />
            <button type="submit">Verify Email</button>
          </form>
          <div>
            <Link to={"/login"}>
              <p>Back to Login</p>
            </Link>
            <button
            onClick={()=> dispatch(sendOtp(signupData.email))}
            >Resent it</button>
          </div>
        </div>
      )}
    </div>
  );
}

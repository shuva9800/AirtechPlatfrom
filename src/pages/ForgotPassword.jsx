import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import Loader from "../component/common/Loader";

export default function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

    const handelOnSubmit =(e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))

    }

  return (
    <div className="max-w-[508px] flex justify-center items-center w-[100%] mx-auto">
      {loading ? (
        <div><Loader/></div>
      ) : (
        <div>
          <h1>{!emailSent ? "Reset Your Password" : "Check Your Email"}</h1>
          <p>
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handelOnSubmit}>
            {!emailSent && (
              <label>
                <p>Eenail Address </p>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                />
              </label>
            )}
            <button type="submit">{!emailSent ? "Reset Password" : "Resend email"}</button>
          </form>
          <div>
            <Link to={"/login"}>
                <p>Back to Login</p>   
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

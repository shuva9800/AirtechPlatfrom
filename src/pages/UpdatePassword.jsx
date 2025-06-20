import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/common/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { resetPassword } from "../services/operations/authAPI";
import { IoIosArrowRoundBack } from "react-icons/io";
export default function UpdatePassword() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const { password, confirmPassword } = formData;
  const navigate = useNavigate();

  function handelOnChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };
  return (
    <div className="w-11/12 mx-auto">
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="max-w-[500px] w-fit flex flex-col gap-6 items-center justify-center">
          <h1 className="font-semibold text-[35px] text-richblack-5 ">
            Chose New Password
          </h1>
          <p className="text-richblack-100">
            Almost done. Enter your new password and youre all set.
          </p>
          <form onSubmit={handelOnSubmit}>
            <label>
              <p>New Password</p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={handelOnChange}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>

            <label>
              <p>Confirm New Password</p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handelOnChange}
              />
              <span
                onClick={() => setshowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <button type="submit">Reset Password</button>
          </form>
          <div >
            <Link to={"/login"} className="flex items-center">
            <IoIosArrowRoundBack />
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export default function UpdatePassword() {
  const [currentpassword, setCurrentPassword] = useState(false);
  const [changepassword, setChangePassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({});
  const handelOnChange = (event) => {
    setFormdata({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const { recentpassword, changerecentpassword } = formData;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(recentpassword, changerecentpassword);
  };

  return (
    <div>
      <div>
        <div>Password</div>

        <form onSubmit={submitHandler}>
          <lable>
            <p>
              Current Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={currentpassword ? "text" : "password"}
              name="recentpassword"
              id="recentpassword"
              value={recentpassword}
              placeholder="Enter Current Password"
              onChange={handelOnChange}
            />
            <span onClick={() => setCurrentPassword(!currentpassword)}>
              {currentpassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </lable>
          <lable>
            <p>
              Change Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={changepassword ? "text" : "password"}
              name="changerecentpassword"
              id="changerecentpassword"
              value={changerecentpassword}
              placeholder="Enter Change Password"
              onChange={handelOnChange}
            />
            <span onClick={() => setChangePassword(!changepassword)}>
              {changepassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </lable>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                navigate("/dashboard/my-profile");
              }}
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
            >
              Cancel
            </button>
            <button type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

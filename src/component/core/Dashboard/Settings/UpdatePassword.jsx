import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { changePassword } from "../../../../services/operations/SettingsApi";
import { useSelector } from "react-redux";

export default function UpdatePassword() {
  const [currentpassword, setCurrentPassword] = useState(false);
  const [changepassword, setChangePassword] = useState(false);
  const {token} = useSelector((state)=>state.auth)
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({});
  const handelOnChange = (event) => {
    setFormdata({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const { recentpassword, changerecentpassword } = formData;

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(recentpassword, changerecentpassword);
    const result = await changePassword(token ,formData);
    if(result){
      setFormdata({})
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">Password</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <lable htmlFor="oldPassword" className="lable-style">
                <p>
                  Current Password <sup className="text-pink-200">*</sup>
                </p>
              </lable>
              <input
                required
                type={currentpassword ? "text" : "password"}
                name="recentpassword"
                id="recentpassword"
                value={recentpassword}
                placeholder="Enter Current Password"
                onChange={handelOnChange}
                className="form-style"
              />
              <span
                onClick={() => setCurrentPassword(!currentpassword)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {currentpassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <lable htmlFor="changerecentpassword" className="lable-style">
                <p>
                  Change Password <sup className="text-pink-200">*</sup>
                </p>
              </lable>
              <input
                required
                type={changepassword ? "text" : "password"}
                name="changerecentpassword"
                id="changerecentpassword"
                value={changerecentpassword}
                placeholder="Enter Change Password"
                onChange={handelOnChange}
                className="form-style"
              />
              <span
                onClick={() => setChangePassword(!changepassword)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {changepassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile");
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Change
          </button>
        </div>
      </form>
    </div>
  );
}

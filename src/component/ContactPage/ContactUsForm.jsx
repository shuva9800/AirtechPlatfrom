import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../data/countrycode.json";
import { contactusEndpoint } from "../../services/api";
import { apiConnector } from "../../services/apiconnector";
import { useSelector } from "react-redux";

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data", data);
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data,
        {
          Authorization
: `Bearer ${token}`,
        }
      );
      console.log("Logging response", response);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastName: "",
        message: "",
        phoneNumber: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className="flex  gap-7">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          {/* firstName */}
          <div className="flex flex-col w-fit">
            <lable htmlFor="firstName" className="lable-style">First Name</lable>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
             className="form-style"
              {...register("firstName", { required: true })}
            />
            {errors.firstname && (
              <span className="mt-1 text-[12px] text-yellow-100">
               Please enter your name.
              </span>
            )}
          </div>

          {/* lastName */}
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <lable htmlFor="lastName" className="lable-style">Last Name</lable>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              className="form-style"
              {...register("lastName")}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col w-fit gap-2">
          <lable htmlFor="email" className="lable-style">Email Address</lable>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Address"
            className="form-style"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-yellow-100">Enter Your Email Address</span>
          )}
        </div>

        {/* phoneNumber */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="label-style">Phone Number</label>

          <div className="flex flex-row gap-2">
            {/* dropdown */}

            <select
              name="dropdown"
              id="dropdown"
              className="bg-yellow-50 w-[80px]"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((element, index) => {
                return (
                  <option key={index} value={element.code}>
                    {element.code} -{element.country}
                  </option>
                );
              })}
            </select>

            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="12345 67890"
              className="text-black  w-[calc(100%-90px)] form-style"
              {...register("phoneNumber", {
                required: { value: true, message: "Please enter Phone Number" },
                maxLength: { value: 10, message: "Invalid Phone Number" },
                minLength: { value: 8, message: "Invalid Phone Number" },
              })}
            />
          </div>
          {errors.phoneNumber && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>

        {/* message */}
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            className="form-style"
            rows="7"
            placeholder="Enter Your message here"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              PLease enter your message.
            </span>
          )}
        </div>

        <button
          type="submit"
          className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] mb-4 font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../data/countrycode.json"
import { contactusEndpoint } from "../../services/api";
import { apiConnector } from "../../services/apiconnector";
import { useSelector } from "react-redux";

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const {token} = useSelector((state)=> state.auth)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
 
 const submitContactForm = async(data) => {
        console.log("Logging Data" , data);
        try{
            setLoading(true);
            const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data, 
               {
        Authorisation: `Bearer ${token}`,
      }
            );
            // const response = {status:"OK"};
            console.log("Logging response", response);
            setLoading(false);
        }
        catch(error) {
            console.log("Error:" , error.message);
            setLoading(false);
        }
    }




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
    <form onSubmit={handleSubmit(submitContactForm)}>
     <div className='flex flex-col gap-14'>
         <div className="flex gap-5">
        {/* firstName */}
        <div className="flex flex-col w-fit">
          <lable htmlFor="firstName">First Name</lable>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            className="text-black"
            {...register("firstName", { required: true })}
          />
          {errors.firstname && <span className="text-red-500">Enter Your First Name</span>}
        </div>

        {/* lastName */}
        <div className="flex flex-col w-fit">
          <lable htmlFor="lastName">Last Name</lable>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
             className="text-black"
            {...register("lastName")}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col w-fit">
        <lable htmlFor="email">Email Address</lable>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email Address"
            className='text-black'
          {...register("email", { required: true })}
        />
        {errors.email && <span className="text-red-500">Enter Your Email Address</span>}
      </div>

        {/* phoneNo */}
            <div className='flex flex-col'>

                <label htmlFor='phoneNumber'>Phone Number</label>

                <div className='flex flex-row gap-1'>
                    {/* dropdown */}
                   
                        <select
                            name='dropdown'
                            id="dropdown"
                            className='bg-yellow-50 w-[80px]'
                            {...register("countrycode", {required:true})}
                        >
                            {
                                CountryCode.map( (element , index) => {
                                    return (
                                        <option key={index} value={element.code}>
                                            {element.code} -{element.country}
                                        </option>
                                    )
                                } )
                            }
                        </select>
                        
                        <input
                            type='number'
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='12345 67890'
                            className='text-black  w-[calc(100%-90px)]'
                            {...register("phoneNo",  
                            {
                                required:{value:true, message:"Please enter Phone Number"},
                                maxLength: {value:10, message:"Invalid Phone Number"},
                                minLength:{value:8, message:"Invalid Phone Number"} })}
                        />
                  
                </div>
                {
                    errors.phoneNo && (
                        <span>
                            {errors.phoneNo.message}
                        </span>
                    )
                }

            </div>


      {/* message */}
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          className="text-black"
          rows="7"
          placeholder="Enter Your message here"
          {...register("message", { required: true })}
        />
        {errors.message && <span>PLease enter your message.</span>}
      </div>

      <button
        type="submit"
        className="rounded-md bg-yellow-50 text-center px-6 text-[16px] font-bold text-black"
      >
        Send Message
      </button>
     </div>
    </form>
  );
}

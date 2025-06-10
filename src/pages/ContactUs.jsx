import React from "react";
import { TiMessages } from "react-icons/ti";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import ContactUsForm from "../component/ContactPage/ContactUsForm";
import Footer from "../component/common/Footer";



// review section slider pending
export default function ContactUs() {
  return (
    <div className="mt-[55px]">
      <div className="w-11/12 mx-auto">
        {/* first section */}

        <div className="flex gap-11 justify-center ">

          <div className="flex flex-col gap-4 px-[24px]  py-6 bg-richblack-800 rounded-md h-fit">
            <div  className="flex  gap-2 items-start">
              <div className="mt-2">
                <TiMessages />
              </div>
              <div className="text-richblack-200">
                <div className="font-semibold text-[20px] text-richblack-5">
                  Chat on us
                </div>
                <p>Our friendly team is here to help.</p>
                <p>@mail address</p>
              </div>
            </div>
            {/* Visit us */}
            <div  className="flex  gap-4 items-start">
              <div className="mt-2">
               <BsGlobeAmericas />
              </div>
              <div className="text-richblack-200">
                <div className="font-semibold text-[240x] text-richblack-5">
                 Visit us
                </div>
                <p>Come and say hello at our office HQ.</p>
                <p>Here is the location/ address</p>
              </div>
            </div>
            {/* Call us */}
             <div className="flex  gap-2 items-start">
              <div className="mt-2">
               <MdCall />
              </div>
              <div className="text-richblack-200">
                <div className="font-semibold text-[20px] text-richblack-5">
                 Call us
                </div>
                <p>Mon - Fri From 8am to 5pm</p>
                <p>+123 456 7890</p>
              </div>
            </div>
          </div>

          {/* Message section */}
          <div className=" flex flex-col gap-2 px-12 border border-richblack-400 rounded-md">
           <div>
             <h1 className="mt-2 font-semibold text-[27px]">
                Got a Idea? We’ve got the skills.
            </h1>
            <h2 className="font-semibold text-[27px]"> Let’s team up</h2>
           </div>
            <p>Tall us more about yourself and what you’re got in mind.</p>
            <div >
                <ContactUsForm/>
            </div>
          </div>
        </div>

        {/* Review section */}
        <div>
            <h1>
                Reviews from other learners
            </h1>
            {/* Slider pending */}
        </div>
      </div>
      {/* Footer */}

      <div>
        <Footer/>
      </div>
    </div>
  );
}

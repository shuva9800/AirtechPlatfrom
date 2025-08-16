import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeFromCart } from "../../../../app/slicess/cartSlice";

// import reacticon ?????

export const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      {cart.map((course, index) => (
        <div className="flex flex-row gap-x-4 w-[100%]">
          <div className="flex ">
            <img src={course?.thumbnil} alt="thumbnil"/>
            <div className="flex flex-col gap-y-2">
              <p> {course?.courseName}</p>
              <p>{course?.catagory?.name} </p>
              <div>
                {/* //get avg rating to add */}
                <span>4.5</span>
                <ReactStars
                  count={5}
                  size={20}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <span>{course?.ratingAndReviews?.length} Ratings </span>
              </div>
            </div>
          </div>
          {/* button and price cart */}
          <div className="flex flex-col gap-y-4 ">
            {/* removeFromCart function to be written and import */}
            <button onClick={() => dispatch(removeFromCart(course._id))}
            className="flex gap-2 items-center bg-richblack-800 rounded-sm"
            >
              <RiDeleteBin5Line className="text-pink-200" />
              <span className="text-pink-200 text-md">Remove</span>
            </button>
            <p className="text-yellow-50 font-semibold text-[32px]">
              Rs
              {course.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

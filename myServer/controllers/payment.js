const { instance } = require("../config/razorpay");
const User = require("../models/user");
const Course = require("../models/courses");
const { default: mongoose } = require("mongoose");
const mailSender = require("../utility/mailSender");
const {
  courseEnrollmentEmail,
} = require("../mail/templates/courseEnrollmentEmail");
const crypto = require("crypto");

//order creation for payment -->when we click in the buy button

exports.capturePayment = async (req, res) => {
  const { courses } = req.body;
  const userId = req.findPerson.id;
  if (courses.length === 0) {
    return res.status(200).json({
      success: false,
      message: "please provide Course id",
    });
  }
  let totalAmount = 0;
  for (const course_id of courses) {
    let course;
    try {
      course = await Course.findById(course_id);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: "course not found",
        });
      }
      //if user already bye this course
      const uid = new mongoose.Types.ObjectId(userId);
      if (course.studentEnroll.includes(uid)) {
        return res.status(200).json({
          success: false,
          message: "Already you are enroll of this course",
        });
      }
      totalAmount += course.price;
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: error.message,
        message: "occure error while user and course details fetching",
      });
    }
  }
  //Order create
  const options = {
    amount: totalAmount * 100,
    currency: "INR",
    receipt: Math.random(Date.now()).toString(),
  };
  try {
    //initiate the payment using razorpay
   const paymentResponse = await instance.orders.create(options);
    console.log("Payment response", paymentResponse);
    //return response
    return res.status(200).json({
      success: true,
      message: "order initiate successfully",
      data: paymentResponse,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: error.message,
      message: "could not initiate order",
    });
  }
};

//verify signature
//Payment verification
exports.verifySignature = async (req, res) => {
  const razorpay_order_id = req.body?.razorpay_order_id;
  const razorpay_payment_id = req.body?.razorpay_payment_id;
  const razorpay_signature = req.body?.razorpay_signature;
  const courses = req.body?.courses;
  const userId = req.findPerson.id;
  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature ||
    !courses ||
    !userId
  ) {
    return res.status(200).json({
      success: false,
      message: "Payment Failed",
    });
  }
  let body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    //enroll karwao student ko
    await enrollStudents(courses, userId, res);
    //return res
    return res.status(200).json({ success: true, message: "Payment Verified" });
  }
  return res.status(200).json({ success: "false", message: "Payment Failed" });
};

const enrollStudents = async (courses, userId, res) => {
  if (!courses || !userId) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Please Provide data for Courses or UserId",
      });
  }

  for (const courseId of courses) {
    try {
      //find the course and enroll the student in it
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { studentsEnrolled: userId } },
        { new: true }
      );

      if (!enrolledCourse) {
        return res
          .status(500)
          .json({ success: false, message: "Course not Found" });
      }

      //find the student and add the course to their list of enrolledCOurses
      const enrolledStudent = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            courses: courseId,
          },
        },
        { new: true }
      );

      ///bachhe ko mail send kardo
      const emailResponse = await mailSender(
        enrollStudents.email,
        `Successfully Enrolled into ${enrolledCourse.courseName}`,
        courseEnrollmentEmail(
          enrolledCourse.courseName,
          `${enrolledStudent.firstName}`
        )
      );
      // console.log("Email Sent Successfully", emailResponse.response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};

exports.sendPaymentSuccessEmail = async (req, res) => {
  const { orderId, paymentId, amount } = req.body;

  const userId = req.findPerson.id;
  console.log("sendpaymentSuccessful", userId)

  if (!orderId || !paymentId || !amount || !userId) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }

  try {
    //student ko dhundo
    const enrolledStudent = await User.findById(userId);
    await mailSender(
      enrolledStudent.email,
      `Payment Recieved`,
      paymentSuccessEmail(
        `${enrolledStudent.firstName}`,
        amount / 100,
        orderId,
        paymentId
      )
    );
  } catch (error) {
    console.log("error in sending mail", error);
    return res
      .status(500)
      .json({ success: false, message: "Could not send email" });
  }
};

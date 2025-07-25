const express = require("express");
const router = express.Router();

const { checkAuthentication, student } = require("../middleware/authorize");

//profile handler function import
const {
  updateProfile,
  deleteAccount,
  getAllDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  updatePassword,
} = require("../controllers/profilehandler");

//map handler function with path
router.put("/updateProfile", checkAuthentication, updateProfile);
router.delete("/deleteAccount", checkAuthentication, student, deleteAccount);
router.put("/changepassword", checkAuthentication, updatePassword);
router.get("/getAllDetails", checkAuthentication, getAllDetails);
//enroll courses 
router.get("/getEnrolledCourses",checkAuthentication,getEnrolledCourses);
router.put("/updateDisplayPicture", checkAuthentication, updateDisplayPicture);

//exports route
module.exports = router;

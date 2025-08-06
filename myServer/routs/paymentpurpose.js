const express = require("express")
const router = express.Router();

//import capturepayment & verifySignature

const {capturePayment,verifySignature, sendPaymentSuccessEmail} = require("../controllers/payment");

const {checkAuthentication,student } = require("../middleware/authorize");

//map handler function with route
router.post("/capturepayment",checkAuthentication,student, capturePayment );
router.post("/verifysignature",checkAuthentication,student, verifySignature);
router.post("/sendPaymentSuccessEmail",checkAuthentication, student, sendPaymentSuccessEmail)

//exports route
module.exports = router;
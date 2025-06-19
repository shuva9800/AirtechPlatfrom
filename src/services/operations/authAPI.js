import { toast } from "react-hot-toast";

import { setLoading, setToken,signInFalior } from "../../app/slicess/authSlice";
import { resetCart } from "../../app/slicess/cartSlice";
import { setUser } from "../../app/slicess/profileSlice";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../api";


const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

//Login function 
export const login = async (email, password, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await apiConnector("POST", LOGIN_API, {
      email,
      password,
    });
    

    console.log("LOGIN API RESPONSE............", response.data);
    if (!response.data.success) {
      dispatch(signInFalior(response.data.message));
      return
    }
    toast.success("Login Successful");
    dispatch(setToken(response.data.token));
    const userImage = response.data?.data?.image
      ? response.data.data.image
      : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`;
      
    dispatch(setUser({ ...response.data.data, image: userImage }));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.data));
    navigate("/dashboard/my-profile")
  } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
      const message = error.response?.data?.message || "Login failed. Try again."
       dispatch(signInFalior(message));
  }
  dispatch(setLoading(false));
};

// codehelp login function
// export function login(email, password, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));
//     try {
//       const response = await apiConnector("POST", LOGIN_API, {
//         email,
//         password,
//       });

//       console.log("LOGIN API RESPONSE............", response);

//       if (!response.data.success) {
//         // throw new Error(response.data.message);
        
//          dispatch(signInFalior(response.data.message));
//          return;
//       }

//       toast.success("Login Successful");
//       dispatch(setToken(response.data.token));
//       const userImage = response.data?.user?.image
//         ? response.data.user.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`;
//       dispatch(setUser({ ...response.data.user, image: userImage }));
//       localStorage.setItem("token", JSON.stringify(response.data.token));
//       navigate("/dashboard/my-profile");
//     } catch (error) {
//       console.log("LOGIN API ERROR............", error);
//        dispatch(signInFalior(error));
//       toast.error("Login Failed");
      
//     }
//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// }



export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });

      console.log("RESETPASSTOKEN RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error);
      toast.error("Failed To Send Reset Email");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function resetPassword(
  newPassword,
  confirmnewPassword,
  token,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        newPassword,
        confirmnewPassword,
        token,
      });

      console.log("RESETPASSWORD RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password Reset Successfully");
      navigate("/login");
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error);
      toast.error("Failed To Reset Password");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}

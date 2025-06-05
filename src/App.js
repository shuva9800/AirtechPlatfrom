import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./component/common/Navbar";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter text-white ">
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
    </Routes>
   </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter text-white ">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
   </div>
  );
}

export default App;

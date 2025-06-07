import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../component/common/Loader'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { resetPassword } from '../services/operations/authAPI';


export default function UpdatePassword() {
    const {loading} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();
    const location = useLocation()
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setshowConfirmPassword] = useState(false);
    const [formData , setFormData] = useState({ });
    const {password ,confirmPassword} =formData;
    const navigate = useNavigate();


    function handelOnChange(event){
        setFormData(
            {
                ...formData,
                [event.target.id] :event.target.value,
            }
        )
      
        
    }

    const handelOnSubmit = (e)=>{
             e.preventDefault();
             const token = location.pathname.split('/').at(-1);
             dispatch(resetPassword(password,confirmPassword,token,navigate))
    }
  return (
    
    <div>
        {
            loading ? (<div><Loader/></div>)
            :(
                <div>
                    <h1>Chose New Password</h1>
                    <p>Almost done. Enter your new password and youre all set.</p>
                    <form onSubmit={handelOnSubmit}>
                        <label>
                            <p>New Password</p>
                            <input
                                required
                                type={showPassword? 'text': 'password'}
                                name='password'
                                id='password'
                                value={password}
                                placeholder='Password'
                                onChange={handelOnChange}
                            />
                            <span onClick={()=> setShowPassword(!showPassword)}>
                                 {showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                      ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                      )}
                            </span>
                        </label>

                         <label>
                            <p>Confirm New Password</p>
                            <input
                                required
                                type={showConfirmPassword? 'text': 'password'}
                                name='confirmPassword'
                                id='confirmPassword'
                                value={confirmPassword}
                                placeholder='Confirm Password'
                                onChange={handelOnChange}
                            />
                            <span onClick={()=> setshowConfirmPassword(!showConfirmPassword)}>
                                 {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                      ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                      )}
                            </span>
                        </label>
                        <button type='submit'>
                            Reset Password
                        </button>
                    </form>
                    <div>
                                <Link to={"/login"}>
                                    <p>Back to Login</p>   
                                </Link>
                              </div>
                </div>
                
            )
        }
    </div>
  )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../component/common/Loader'
import { useLocation } from 'react-router-dom';

export default function UpdatePassword() {
    const {loading} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();
    const location = useLocation()
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setshowConfirmPassword] = useState(false);
    const [formData , setFormData] = useState({
        password:"",
        confirmPassword:"",
    });


    function handelOnChange(event){
   
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name ]: event.target.value,
            }
        )
           
        )
    }

    const handelOnSubmit = (e)=>{
             e.preventDefault();
             const token = location.pathname.split('/').at(-1);
             dispatch(resetPassword(formData,token))
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
                                onChange={handelOnChange}
                            />
                        </label>
                    </form>
                </div>
                
            )
        }
    </div>
  )
}

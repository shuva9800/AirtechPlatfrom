import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from "../../common/iconBtn"

export default function MyProfile() {
    const {user} = useSelector((state)=> state.profile);
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-white'>My Profile</h1>
        <div>
            <div>
                <img src={user?.image} 
                alt={`profile ${user?.firstName}`}
                    className='aspect-square w-[78px] rounded-full object-cover '
                />
                <div>
                    <p>{user?.firstName + " " + user?.lastName}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
            <IconBtn
                text="Edit"
                onclick={()=>{
                    navigate("/dashboard/settings")
                }}
                // addIcon
            />
        </div>
    </div>
  )
}

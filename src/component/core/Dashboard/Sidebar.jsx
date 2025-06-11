import React from 'react'
import {sidebarLinks} from "../../../data/dashboard-links"
import {logout} from "../../../services/operations/authAPI"
import { useSelector } from 'react-redux'

export default function Sidebar() {
    const {use , loading:profileLoading} = useSelector((state)=> state.profile);
    
  return (
    <div>

    </div>
  )
}

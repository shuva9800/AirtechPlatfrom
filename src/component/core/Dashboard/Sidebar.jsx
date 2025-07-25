import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { VscSignOut } from "react-icons/vsc";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import ConfirmatioModal from "../../common/ConfirmationModal"
import Loader from "../../common/Loader";

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmationModal ,setConfirmationModal] = useState(null);

  if (authLoading || profileLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <Loader />
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex h-[100vh] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10  ">
        <div className="flex flex-col">
            {
              sidebarLinks.map((link)=> {
                if(link.type && user.accountType !== link.type) return null;
                return(
                  <SidebarLink key={link.id} link={link} iconName={link.icon}/>
                )
            })
            }
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700"></div>
          
          <div className="flex flex-col">
            <SidebarLink
              link={{name:"setting", path:"dashboard/settings"}}
            
              iconName="VscSettingsGear"
            />
            <button
              onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }

            className="text-sm font-medium text-richblack-300">
           
           <div className="flex items-center gap-x-2 px-8 mt-2">
              <VscSignOut className="text-lg"/>
              <span>Logout</span>
           </div>
           </button>
          </div>
      </div>
      
        {confirmationModal && <ConfirmatioModal modalData={confirmationModal}/>}
     
    </div>
  );
}



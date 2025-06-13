import React from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useSelector } from "react-redux";

import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (authLoading || profileLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex min-w-[222px] flex-col border border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10">
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
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>
          
          <div className="flex flex-col">
            <SidebarLink
              link={{name:"setting", path:"dashboard/settings"}}
            
              iconName="VscSettingsGear"
            />
            <button
            onClick={}
          </div>
      </div>
    </div>
  );
}

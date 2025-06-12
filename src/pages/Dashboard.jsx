import React from "react";
import { useSelector } from "react-redux";
import Loader from "../component/common/Loader";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/core/Dashboard/Sidebar";

export default function Dashboard() {
  const { loding: authLoading } = useSelector((state) => state.auth);
  const { loding: profileLoading } = useSelector((state) => state.profile);

  if (authLoading || profileLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative flex  min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className=" h-[calc(100vh - 3.5rem)] overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

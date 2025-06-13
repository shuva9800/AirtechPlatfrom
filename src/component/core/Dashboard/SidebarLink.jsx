import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

export default function SidebarLink({ Link, iconName }) {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchRoute({ path: route }, location.pathname);
  };

  return (
    <NavLink
      to={Link.path}
      className={`relative px-8 py-2 font-medium ${
        matchRoute(Link.path) ? " bg-yellow-800" : "bg-opacity-0"
      }`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${
          matchRoute(Link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="fles items-center gap-x-2">
        <Icon className="text-lg" />
        <span>{Link.name}</span>
      </div>
    </NavLink>
  );
}

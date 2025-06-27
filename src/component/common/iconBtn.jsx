import React from "react";

export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button disabled={disabled} onClick={onclick} type={type} className="border border-richblack-600 px-3 rounded-sm py-1">
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
}

import React from "react";
import HighlightText from "../Homepage/HighlightText";

export default function Quote() {
  return (
    <div>
    <span>"</span>
      We are passionate about revolutionizing the way we learn. Our innovative
      platform {" "}
      <HighlightText text={" combines technology"} />
      <span className="text-brown-400"> ("") experties</span>
      , and community to create an 
      <span className="text-brown-500">{" "}unparalleled educational experience.</span>
      <span>"</span>
    </div>
  );
}

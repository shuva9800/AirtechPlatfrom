import React from "react";
import HighlightText from "../Homepage/HighlightText";

export default function Quote() {
  return (
    <div>
      We are passionate about revolutionizing the way we learn. Our innovative
      platform
      <HighlightText text={" combines technology"} />
      <span className="text-red"> ("") experties</span>
      , and community to create an 
      <span className="text-blue-400">unparalleled educational experience.</span>
    </div>
  );
}

import React from 'react'
import {CSSProperties } from "react";
import { ClimbingBoxLoader } from "react-spinners";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

export default function Loader() {
  return (
    <div className='w-11/12 mx-auto mt-7'>
           <ClimbingBoxLoader 
        // color={color}
        // loading={loading}
        // cssOverride={override}
        // size={150}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />
    </div>
  )
}

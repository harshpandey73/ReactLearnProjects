import React from "react";
import SearchBasic from "./SearchBasic";

export default function Example() {
  return (
    <>
      <div className="w-screen h-fit flex items-center justify-around text-black">
        <div className="flex gap-8 flex-shrink-0 items-center my-4">
          <img
            className="h-8 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/627px-Google_Maps_icon_%282020%29.svg.png?20200218211225"
            alt="Maps Logo"
          />

        <div className="text-[#1E4BCE] text-3xl font-semibold  text-center uppercase" >
          Travel Guide
        </div>
        </div>
        <div className="flex justify-center items-center my-4">
        <SearchBasic />
        </div>
      </div>
    </>
  );


  // bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-300 to-blue-500
}

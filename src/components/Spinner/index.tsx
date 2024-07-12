"use client";

import React from "react";


const Spinner = () => {
  return (
    <div className="z-40 flex h-screen w-full items-center justify-center rounded-xl shadow-md">
      <div className="h-12 w-12 rounded-full bg-[rgb(197,23,209)]">
        <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(37,146,217)]">
          <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(197,23,209)]">
            <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(37,146,217)]">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner;

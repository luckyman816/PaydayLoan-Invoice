"use client";
import React from "react";
import Image from "next/image";
import Profile from "@/../public/images/user.png";
const Home = () => {
  return (
    <div className="flex-grow flex justify-center items-center gap-5 ">
      <div
        className="flex flex-col bg-[black] px-20 pt-10 pb-20 rounded-[10px] gap-5"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(255, 140, 0, 0.4), 0 6px 20px 0 rgba(255, 140, 0, 0.4)",
        }}
      >
        <div className="flex gap-3 justify-start items-center border-b border-[grey] p-3">
          <Image src={Profile} width={50} height={50} alt={"profile"} />
          <h2 className="text-white">Add User</h2>
        </div>
        <div className="flex gap-9 ">
          <div className="flex flex-col gap-4 w-[22vw]">
            <div className="flex gap-10 w-[22vw]">
              <div className="flex flex-col gap-1 w-[10vw]">
                <label className="text-[white]">First Name *</label>
                <input
                  type="text"
                  className="bg-[#1F1F1F] rounded-[8px] text-[white]"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="flex flex-col gap-1 w-[10vw]">
                <label className="text-[white]">Last Name *</label>
                <input
                  type="text"
                  className="bg-[#1F1F1F] rounded-[8px] text-[white]"
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-[22vw]">
              <label className="text-[white]">Email *</label>
              <input
                type="text"
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex flex-col gap-1 w-[22vw]">
              <label className="text-[white]">Password *</label>
              <input
                type="text"
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex flex-col gap-1 w-[22vw]">
              <label className="text-[white]">Company *</label>
              <input
                type="text"
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
                placeholder="Enter Company"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 w-[22vw]">
              <label className="text-[white]">Role *</label>
              <input
                type="text"
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
                placeholder="Enter Role"
              />
            </div>
            <div className="flex flex-col gap-1 w-[22vw]">
              <label className="text-[white]">Agent Email *</label>
              <input
                type="text"
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
                placeholder="Enter Agent Email"
              />
            </div>
            <div className="flex flex-col gap-1 w-[22vw]">
              <label className="text-[white]">Service Fee</label>
              <div className="bg-[#1F1F1F] rounded-[8px] p-4 flex flex-col justify-center items-center">
                <p className="text-white">
                  The percentage that the user receive from each transaction
                </p>
                <h1 className="text-3xl text-white">1%</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
          className="bg-[#202020] w-40 h-10 rounded-[8px] text-white"
            type="button"
            style={{
              margin: "10px",
            }}
          >
            Cancel
          </button>
          <button
          className="bg-[#1689B2] w-40 h-10 rounded-[8px] text-white"
            type="button"
            style={{
              margin: "10px",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

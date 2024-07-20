/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const companyData = [
  "Tesla","Apple", "Microsoft","Google","Facebook","Amazon","Netflix","Airbnb","Paypal","Cruise","Spotify","Slack","Dropbox","Coinbase","Payoneer"
]

const Manage = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("Google");
  const [email, setEmail] = useState("John@set.com");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  return (
    <div className="flex-grow flex justify-center w-full items-center gap-8 ">
      <div className="border border-[#e2e2e2] dark:border-[#1c1c1c] rounded-2xl py-10 px-12 flex flex-col justify-start items-start gap-7 mt-24 w-[600px] md:w-[50%]">
        <h1 className="text-3xl text-white">Employer Management</h1>
        <div className="flex flex-col justify-between gap-4 w-full">
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
          />
          <input
            type="Email"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Official Email Address"
          />

          <div className="flex flex-col justify-between gap-4">
            <input
              type="Password"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <button className="bg-gradient-to-r from-[#5238e8] to-[#200072] rounded-[10px] text-[white] w-[100%] h-[5vh]  hover:bg-[#0F977E]">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default Manage;

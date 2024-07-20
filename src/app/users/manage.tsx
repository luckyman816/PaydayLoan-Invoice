/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import React from "react";

const companyData = [
  "Tesla", "Apple", "Microsoft", "Google", "Facebook", "Amazon", "Netflix", "Airbnb", "Paypal", "Cruise", "Spotify", "Slack", "Dropbox", "Coinbase", "Payoneer"
]

const Manage = () => {

  const [companyName, setCompanyName] = useState("Google");
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("John@set.com");
  const [address, setAddress] = useState("196 Main Street, New York");
  const [empStatus, setEmpStatus] = useState("196 Main Street, New York");
  const [salary, setSalary] = useState("$30000");
  const [dur, setDur] = useState("3 months");
  const [IdNumber, setIdNumber] = useState("123456789");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  return (
    <div className="flex-grow flex justify-center w-full items-center gap-8 ">
      <div className="border border-[#e2e2e2] dark:border-[#1c1c1c] rounded-2xl py-10 px-12 flex flex-col justify-start items-start gap-7 mt-12 w-[600px] md:w-[50%]">
        <h1 className="text-3xl text-white">User Management</h1>
        <div className="flex flex-col justify-between gap-4 w-full">
          <div className="flex flex-row justify-between gap-4 w-full">
            <select className="bg-transparent rounded-[8px] text-[white] w-full outline-none" onChange={(e) => setCompanyName(e.target.value)} value={companyName}>
              {companyData.map((company, id) => (
                <option value={company} className=" bg-black p-2" key={id}>
                  {company}
                </option>
              ))}
              <option value="any other.." className=" bg-black">
                any other ..
              </option>
            </select>
            <input
              type="text"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="flex flex-row justify-between gap-4 w-full">
            <input
              type="Email"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Official Email Address"
            />
            <input
              type="text"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Official Address"
            />
          </div>
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            value={empStatus}
            onChange={(e) => setEmpStatus(e.target.value)}
            placeholder="Employment Status"
          />
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Monthly Net Salary"
          />
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            value={dur}
            onChange={(e) => setDur(e.target.value)}
            placeholder="Duration of Contract"
          />
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            value={IdNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            placeholder="Employee ID/State Identification Number"
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

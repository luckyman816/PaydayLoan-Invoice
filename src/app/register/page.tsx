/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const companyData = [
  "Tesla","Apple", "Microsoft","Google","Facebook","Amazon","Netflix","Airbnb","Paypal","Cruise","Spotify","Slack","Dropbox","Coinbase","Payoneer"
]

const Register = () => {
  const router = useRouter();
  const [signType, setSignType] = useState("User");

  return (
    <div className="flex-grow flex justify-center w-[100vw] h-[80vh] items-center gap-8 ">
      <div className="border border-[#e2e2e2] dark:border-[#1c1c1c] rounded-2xl py-10 px-12 flex flex-col justify-start items-start gap-7 mt-48 w-[600px] md:w-[40%]">
        <h1 className="text-3xl text-white">Signup</h1>
        <select className="bg-transparent rounded-[8px] text-[white] w-full outline-none" onChange={(e) => setSignType(e.target.value)}>
          <option value="User" className=" bg-black p-2">
            User
          </option>
          <option value="Employer" className=" bg-black">
            Employer
          </option>
        </select>
        <div className={signType == "Employer" ? "flex flex-col justify-between gap-4 w-full" : "hidden"}>
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            placeholder="Company Name"
          />
          <input
            type="Email"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            placeholder="Official Email Address"
          />

          <div className="flex flex-col justify-between gap-4">
            <input
              type="Password"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              placeholder="Password"
            />
            <input
              type="password"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className={signType == "User" ? "flex flex-col justify-between gap-4 w-full" : "hidden"}>
          <div className="flex flex-row justify-between gap-4 w-full">
            <select className="bg-transparent rounded-[8px] text-[white] w-full outline-none">
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
              placeholder="Name"
            />
          </div>
          <div className="flex flex-row justify-between gap-4 w-full">
            <input
              type="Email"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              placeholder="Official Email Address"
            />
            <input
              type="Email"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              placeholder="Official Address"
            />
          </div>
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            placeholder="Employment Status"
          />
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            placeholder="Monthly Net Salary"
          />
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            placeholder="Duration of Contract"
          />
          <input
            type="text"
            className="bg-transparent rounded-[8px] text-[white] w-full"
            placeholder="Employee ID/State Identification Number"
          />
          <div className="flex flex-col justify-between gap-4">
            <input
              type="Password"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              placeholder="Password"
            />
            <input
              type="password"
              className="bg-transparent rounded-[8px] text-[white] w-full"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <button className="bg-gradient-to-r from-[#5238e8] to-[#200072] rounded-[10px] text-[white] w-[100%] h-[5vh]  hover:bg-[#0F977E]">
            Signup
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
          <div className="border-b border-[grey] w-[8vw]"></div>
          <div className="text-[grey]">Or</div>
          <div className="border-b border-[grey] w-[8vw]"></div>
        </div>
        <div
          className=" flex justify-center w-full cursor-pointer"
          onClick={() => {
            router.push("/login");
          }}
        >
          <span
            className=" right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text text-xl"
            style={{ fontFamily: "medium" }}
          >
            Sign In
          </span>
        </div>
        <div className="flex justify-center w-[100%]">
          <div className="flex flex-row justify-between w-[120px]">
            <img
              src="/images/third-party/devicon_google.png"
              alt="Google"
              className="w-[30px] h-[30px] hover:cursor-pointer hover:scale-[1.15] transition duration-100"
            />
            <img
              src="/images/third-party/logos_facebook.png"
              alt="Facebook"
              className="w-[30px] h-[30px] hover:cursor-pointer hover:scale-[1.15] transition duration-100"
            />
            <img
              src="/images/third-party/logos_twitter.png"
              alt="Google"
              className="w-[30px] h-[30px] hover:cursor-pointer hover:scale-[1.15] transition duration-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;

"use client";
import React, { ReactElement, useState, useEffect } from "react";
import Banner from "@/components/banner";
import Dashboard from "./Dashboard";
import Creator from "./Creator";
import Image from "next/image";
const Page = () => {
  const [page, setPageNum] = useState(1);
  return (
    <div className="flex flex-row mt-10 w-full">
      <div className="w-1/5 small-screen-sidebar xxsmall-screen-sidebar"> 
        <div className="relative dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl h-[80vh]">
          <img
              src={"/images/navbar/user.png"}
              
              alt={"logo"}
              className=' absolute bottom-[15%] left-[50%] translate-x-[-50%] w-[80%]'
            />
          <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full xxsmall-screen-padding-none">
            <div className="flex flex-row justify-start items-center small-screen-col text-white text-2xl xxsmall-screen-padding-none">
              <img
                src={"/images/navbar/user.png"}
                // width={25}
                // height={25}
                alt={"logo"}
                className="xxsmall-screen-margin-top w-[30px] "
              />
              <div className="small-screen-none">&nbsp;</div>
              <div className="small-screen-text xxsmall-screen-margin-bottom">Users</div>
            </div>
            <ul className="text-white text-md mt-5">
              <li className="m-[20px_5px]" onClick={() => setPageNum(1)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className={`bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start  small-screen-col xxsmall-screen-padding-none items-center gap-3 ${page==1?`border-b-2 border-[rgba(89,200,255,0.8)]`:``}`}>
                    <img
                      src={"/images/sidebar/dashboard.png"}
                      // width={25}
                      // height={25}
                      alt={"logo"}
                      className="w-[30px] h-[30px]"
                    />
                    <div className="small-screen-text">Dashboard</div>
                  </div>
                </div>
              </li>
              <li className="m-[20px_5px]" onClick={() => setPageNum(2)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className={`bg-white dark:bg-black rounded-2xl p-3 pl-5  w-full h-full  hover:opacity-80 flex justify-start items-center  small-screen-col xxsmall-screen-padding-none gap-3 ${page==2?`border-b-2 border-[rgba(89,200,255,0.8)]`:``}`}>
                    <img
                      src={"/images/sidebar/application.png"}
                      // width={25}
                      // height={25}
                      alt={"logo"}
                      className="w-[30px] h-[30px]"
                    />
                    <div className="small-screen-text text-center">Initiate Loan Request</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5 small-screen-context text-white">
        <div className="px-5 w-full">
          <Banner />
          {page === 1 ? <Dashboard /> : <Creator />}
        </div>
      </div>
    </div>
  );
};

export default Page;

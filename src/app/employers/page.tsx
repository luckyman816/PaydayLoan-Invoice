/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";
import DynamicTable from "@/components/DynamicTable";

import Report from "./Report";

const Employers = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="flex justify-between w-full gap-7 mt-10">
      <div className="w-1/5 small-screen-sidebar xxsmall-screen-sidebar">
        <div className="relative dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl h-[80vh]">
        <img
              src={"/images/navbar/employment.png"}
              
              alt={"logo"}
              className=' absolute bottom-[15%] left-[50%] translate-x-[-50%] w-[80%]'
            />
          <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full xxsmall-screen-padding-none">
          <div className="flex flex-row justify-start  small-screen-col items-center text-white text-2xl xxsmall-screen-padding-none">
              <img
                src={"/images/navbar/employment.png"}
                // width={25}
                // height={25}
                className="xxsmall-screen-margin-top w-[30px]"
                alt={"logo"}
              />
              <div className="small-screen-none">&nbsp;</div>
              <div className="small-screen-text xxsmall-screen-margin-bottom">Employers</div>
            </div>
            <ul className="text-white text-base mt-5">
              <li className="m-[20px_5px]" onClick={() => setPage(1)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className={`bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start small-screen-col xxsmall-screen-padding-none items-center gap-3 ${page==1?`border-b-2 border-[rgba(89,200,255,0.8)]`:``}`}>
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
              <li className="m-[20px_5px]" onClick={() => setPage(2)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className={`bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start small-screen-col xxsmall-screen-padding-none items-center gap-3 ${page==2?`border-b-2 border-[rgba(89,200,255,0.8)]`:``}`}>
                    <img
                      src={"/images/sidebar/application.png"}
                      // width={25}
                      // height={25}
                      alt={"logo"}
                      className="w-[30px] h-[30px]"
                    />
                    <div className="small-screen-text">Report</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        
        {page == 1 ? <DynamicTable /> : <Report />}
       
      </div>
    </div>
  );
};
export default Employers;

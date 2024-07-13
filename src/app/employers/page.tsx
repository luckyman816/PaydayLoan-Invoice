"use client";
import { useState } from "react";
import Image from "next/image";

import DynamicTable from "@/components/DynamicTable";
import Image from "next/image";

import Report from "./Report";

const Employers = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="flex justify-between w-full gap-7 mt-10">
      <div className="w-1/4">
        <div className="dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl h-[70vh]">
          <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full">
            <div className="flex flex-row justify-start items-center text-white text-2xl">
              Employers
            </div>
            <ul className="text-white text-md mt-5">
              <li className="" onClick={() => setPage(1)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className="bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start items-center gap-3">
                    <Image
                      src={"/images/sidebar/dashboard.png"}
                      width={25}
                      height={25}
                      alt={"logo"}
                    />
                    <div className="">Dashboard</div>
                  </div>
                </div>
              </li>
              <li className="" onClick={() => setPage(2)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className="bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start items-center gap-3">
                    <Image
                      src={"/images/sidebar/application.png"}
                      width={25}
                      height={25}
                      alt={"logo"}
                    />
                    <div className="">Report</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="bg-white dark:bg-black border-[#e2e2e2] dark:border-[#1c1c1c] border rounded-2xl p-4 px-8 h-[80vh] w-full"> */}
      
        {page &&
          (page == 1 ? (
            <DynamicTable />
          ) : (
            <Report/>
          ))}
      {/* </div> */}
    </div>
  );
};
export default Employers;

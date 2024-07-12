"use client";
import { useState } from "react";
import Image from "next/image";

import DynamicTable from "@/components/DynamicTable";

const Employers = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="flex justify-between w-[100vw] gap-7">
      <div className="w-full dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl md:w-[470px] ">
        <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full">
          <div className="text-left w-full text-white text-2xl">Employers</div>

          <ul className="text-white text-lg mt-7">
            <div
              onClick={() => setPage(1)}
              className={`mt-2 border-none p-[1px] border-[#DCE4EF] flex items-center justify-start  text-black dark:text-white dark:border-black my-1 dark:hover:bg-gradient-to-tr to-[#295e55] via-[#3c54cf] hover:scale-[1.05] hover:transition duration-100 rounded-xl cursor-pointer text-lg ${
                page === 1 &&
                "dark:bg-[#10152E] border-none bg-gradient-to-tr to-[#295e55] via-[#3c54cf] rounded-xl"
              }`}
            >
              <Image
                src={"/images/sidebar/dashboard.png"}
                width={25}
                height={25}
                alt={"logo"}
              />
              <div className="bg-white border-none dark:bg-black opacity-90 rounded-xl w-full h-full p-2">
                Dashboard
              </div>
            </div>
            <div
              onClick={() => setPage(2)}
              className={`mt-2 border-none p-[1px] border-[#DCE4EF] flex items-center justify-start  text-black dark:text-white dark:border-black my-1 dark:hover:bg-gradient-to-tr to-[#295e55] via-[#3c54cf] hover:scale-[1.05] hover:transition duration-100 rounded-xl cursor-pointer text-lg ${
                page === 2 &&
                "dark:bg-[#10152E] border-none bg-gradient-to-tr to-[#295e55] via-[#3c54cf] rounded-xl"
              }`}
            >
              <Image
                src={"/images/sidebar/application.png"}
                width={25}
                height={25}
                alt={"logo"}
              />
              <div className="bg-white border-none dark:bg-black opacity-90 rounded-xl w-full h-full p-2">
                Application
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-white dark:bg-black border-[#e2e2e2] dark:border-[#1c1c1c] border rounded-2xl p-4 px-8 h-[80vh] w-full">
        {page &&
          (page == 1 ? (
            <DynamicTable />
          ) : (
            <div className="mt-7 flex flex-col gap-5">
              <div className="text-white text-3xl hover:border-b-2 border-white cursor-pointer">
                Application
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Employers;

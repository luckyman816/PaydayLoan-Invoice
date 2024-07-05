import React from 'react';
const Loader = () => {
  return (
    <div className="dark:bg-gradient-to-tr flex min-h-[calc(100vh-130px)] dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl md:w-[310px] w-full">
      <div className="bg-white dark:bg-black rounded-2xl p-6 w-full">
        <div className="flex flex-col gap-2 animate-pulse">
          <div className="w-full h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
          <div className="w-2/3 h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
          <div className="w-full h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2 animate-pulse mt-10">
          <div className="w-full h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
          <div className="w-2/3 h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
          <div className="w-full h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2 animate-pulse mt-10">
          <div className="w-full h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
          <div className="w-2/3 h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
          <div className="w-full h-6 bg-gray-300 dark:bg-slate-900 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader;
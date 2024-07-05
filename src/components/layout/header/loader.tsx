import React from 'react';

const Loader = () => {
  return (
    <div className="bg-white flex items-center justify-between dark:bg-black border-[#e2e2e2] dark:border-[#1c1c1c] border rounded-2xl p-4 px-8 h-[87px]">
      <div className="w-20 h-12 bg-gray-300 dark:bg-slate-900 rounded-full animate-pulse"></div>
    </div>
  )
}

export default Loader;
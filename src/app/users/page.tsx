"use client"
import React, { ReactElement, useState, useEffect } from 'react';
import Banner from '@/components/banner';
import Dashboard from './Dashboard';
import Creator from './Creator';
const Page = () => {
    const [pageNum, setPageNum] = useState(0);
    return (
            <div className='flex flex-row mt-10 w-full'>
                <div className='w-1/5'>
                    <div className="dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl h-[70vh]">
                    <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full">
                        <div className='flex flex-row justify-center items-center text-white text-2xl'>
                            Users
                        </div>
                        <ul className="text-white text-md mt-5">
                            <li className='' onClick={() => setPageNum(0)}>
                                <div className='rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]'>
                                    <div className='bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80'>
                                        <div className=''>
                                        Dashboard
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='' onClick={() => setPageNum(1)}>
                                <div className='rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]'>
                                    <div className='bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80'>
                                        <div className=''>
                                        Creator
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='w-4/5 text-white'>
                    <div className='px-5 w-full'>
                        <Banner/>
                        {pageNum === 0 ? <Dashboard/> : <Creator/>}
                    </div>
                </div>
            </div>
    );
}

export default Page;

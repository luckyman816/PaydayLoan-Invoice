import React from 'react';
import Input from 'antd/es/input/Input';
const ManageLoanOffers = () => {
    return (
        <div className='mt-8 flex flex-col gap-3 w-full'>
            <div className="   right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl">
            Monitor Loan Distursements
            </div>
            <div className='flex flex-col mt-8 gap-5'>
                <div className='flex flex-row gap-5 text-slate-600 items-center'>
                    <div className=' text-right w-1/4'>
                        <label className='w-full'>Loan amount </label>
                    </div>
                    <div className=' w-2/4'>
                        <input className=' bg-transparent outline-none rounded-lg ring-0 focus:ring-0 transition-all text-[#DDD] w-full' type="number"/>
                    </div>
                    <div className='text-left w-1/4'>
                        <label className='w-full'>&nbsp;$</label>
                    </div>
                </div>
                <div className='flex flex-row gap-5  text-slate-600 items-center'>
                    <div className=' text-right w-1/4'>
                        <label className='w-full'>Interest Rate </label>
                    </div>
                    <div className=' w-2/4'>
                        <input className=' bg-transparent outline-none rounded-lg ring-0 focus:ring-0 transition-all text-[#DDD] w-full' type="number"/>
                    </div>
                    <div className='text-left w-1/4'>
                        <label className='w-full'>&nbsp;%</label>
                    </div>
                </div>
                <div className='flex flex-row gap-5  text-slate-600 items-center'>
                    <div className=' text-right w-1/4'>
                        <label className='w-full'>Repayment Period </label>
                    </div>
                    <div className=' w-2/4'>
                        <input className=' bg-transparent outline-none rounded-lg ring-0 focus:ring-0 transition-all text-[#DDD] w-full' type="number"/>
                    </div>
                    <div className='text-left w-1/4'>
                        <label className='w-full'>&nbsp;Day</label>
                    </div>
                </div>
                <div className='flex flex-row gap-5  text-slate-600 items-center'>
                    <div className=' text-right w-1/4'>
                        {/* <label className='w-full'>Repayment Period </label> */}
                    </div>
                    <div className=' w-2/4 flex flex-row justify-between items-center'>
                        <button className='w-[20%] dark:bg-gradient-to-tr  dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#6456b1] p-[1px] rounded-2xl'><div className='bg-white dark:bg-black transition-all hover:dark:bg-[#2a5bc413] text-white rounded-2xl px-6 p-3 w-full'>Apply</div></button>
                        <button className='w-[20%] dark:bg-gradient-to-tr  dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl'><div className='bg-white dark:bg-black hover:dark:bg-[#d4d4d41c] text-white rounded-2xl px-6 p-3 w-full'>Reset</div></button>
                    </div>
                    <div className='text-left w-1/4'>
                        {/* <label className='w-full'>&nbsp;Day</label> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageLoanOffers;

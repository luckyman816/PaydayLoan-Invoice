'use client'
import React from 'react';

const Report = () => {
    return (
        <div className='flex flex-col gap-5 mt-8 w-full'>
            <div className='flex flex-row gap-4 w-full'>
                <div className='flex w-1/2 flex-wrap flex-col gap-3 transition-all'>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(255,255,255,0.1)]'>
                        <legend className='text-white'>Loan Details</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-3'>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Loan Amount</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    <div className=''>
                                        <label className='text-white mr-2'> Interest rate</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                </div>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Repayment period</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(92,182,107,0.2)]'>
                        <legend className='text-white'>Employer Details</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-3'>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Name</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    <div className=''>
                                        <label className='text-white mr-2'>Official Email</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                </div>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Address</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    <div className=''>
                                        <label className='text-white mr-2'>Commitment Status</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className='flex w-1/2 flex-wrap flex-col gap-3 transition-all'>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(182,92,182,0.2)]'>
                        <legend className='text-white'>User Details</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-3'>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Name</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    <div className=''>
                                        <label className='text-white mr-2'>Employment status</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    <div className=''>
                                        <label className='text-white mr-2'>Monthly net salary</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                </div>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Address</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    <div className=''>
                                        <label className='text-white mr-2'>Duration of Dmployment Dontract</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(85,142,196,0.3)]'>
                        <legend className='text-white'>Repayment Schedule</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-3'>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Monthly installments</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    
                                </div>
                                <div className=' flex flex-col'>
                                    <div className=''>
                                        <label className='text-white mr-2'>Due dates</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none' placeholder='Loan' />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className=' flex flex-row justify-center items-center'>
                <button className='w-[20%] dark:bg-gradient-to-tr  dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl'><div className='bg-white dark:bg-black hover:dark:bg-red-950  rounded-2xl px-6 p-3 w-full text-white'>Apply</div></button>
            </div>
        </div>
    );
}

export default Report;

'use client'
import React from 'react';

const Creator = () => {
    return (
        <div className='flex flex-col gap-5 mt-8 w-full'  style={{ fontFamily:"medium"}}>
            <div className='flex small-screen-col gap-4 w-full'>
                <div className='flex flex-col gap-3 transition-all w-1/2 small-screen-full'>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(255,255,255,0.1)]'>
                        <legend className='text-white'>Loan Details</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row '>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Loan Amount</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='20K USD' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'> Interest rate</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='89%' />
                                    </div>
                                </div>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Repayment period</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='3 month' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(92,182,107,0.2)]'>
                        <legend className='text-white'>Employer Details</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row '>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Name</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='John Williams' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Official Email</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='brokei-8921@ves.ink' />
                                    </div>
                                </div>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Address</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='New York 145 Main St' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Commitment Status</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='Active' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className='flex flex-col gap-3 transition-all w-1/2 small-screen-full'>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(182,92,182,0.2)]'>
                        <legend className='text-white'>User Details</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row small-screen-col'>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Name</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='John Williams' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Employment status</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='InActive' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Monthly net salary</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='3,000 USD' />
                                    </div>
                                </div>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Address</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='New York 145 Main St' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Duration of Dmployment Dontract</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='6 month' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className=' border border-[#777] p-4 rounded-lg shadow-md bg-[rgba(85,142,196,0.3)]'>
                        <legend className='text-white'>Repayment Schedule</legend>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row'>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Monthly installments</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='Loan' />
                                    </div>
                                    
                                </div>
                                <div className=' flex flex-col small-screen-dir'>
                                    <div className='flex flex-col'>
                                        <label className=' mr-2'>Due dates</label>
                                        <input type='text' className=' outline-none rounded-md text-[#DDD] bg-transparent border-none w-full' placeholder='/10/18/2024' />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className=' flex flex-row justify-center items-center'>
                <button className='w-[200px] dark:bg-gradient-to-tr  dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl'><div className='bg-white dark:bg-black hover:dark:bg-red-950  rounded-2xl px-6 p-3 w-full'>Apply</div></button>
            </div>
        </div>
    );
}

export default Creator;

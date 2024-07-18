"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Home = () => {
  //get pools
  const router = useRouter();
  const handleStart = () => {
    router.push("/login");
  }
  const handleSignup = () => {
    router.push("/register");
  }
  return (
    <div className="flex-grow flex justify-center items-start w-[100vw] h-screen pt-[10%] mt-3">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center">
          Blockchain-Based Payday Loan Application{" "}
        </h1>
        <h1 className="text-white text-5xl text-center">
          With Employer-Validated Smart Contracts
        </h1>
        <p className="text-white w-[40%] text-center pt-10">
          The payday loan app built on blockchain technology ensures secure and
          efficient lending by releasing funds only after employer validation
          and committing to repay the loan at the end of the month.
        </p>
        <div className="flex gap-6 justify-center items-center pt-6">
          <button className="bg-[#1C64F1] rounded-[20px] text-white w-[150px] h-[4vh] border border-[white] hover:bg-[#0F977E]" onClick={handleStart}>
            Get Started
          </button>
          <button className="bg-[#8BA2F9] rounded-[20px] text-[white] w-[150px] h-[4vh] border border-[white] hover:bg-[#0F977E]" onClick={handleSignup}>
            Register
          </button>
        </div>
        <div className="flex justify-center items-center w-[100%] mt-14 text-zinc-400 text-xl">
            <div className="m-[0px_15px]">
            Communiy: 
            </div>
          <div className="flex flex-row justify-between gap-3">
            <img src="/images/community/facebook.png" alt="Facebook" className="w-[40px] h-[40px] hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
            <img src="/images/community/telegram.png" alt="Google" className="w-[40px] h-[40px] hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
            <img src="/images/community/twitter.png" alt="Google" className="w-[40px] h-[40px] hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
            <img src="/images/community/youtube.png" alt="Google" className="w-[40px] h-[40px] hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
            <img src="/images/community/discord.png" alt="Google" className="w-[40px] h-[40px] hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

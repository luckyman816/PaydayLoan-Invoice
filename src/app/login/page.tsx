/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { useRouter } from "next/navigation";


const Login = () => {
  
  const router = useRouter();
  
  return (
    <div className="flex-grow flex justify-center w-[100vw] h-[80vh] items-center gap-8 ">
      <div className="border border-[#e2e2e2] dark:border-[#1c1c1c] rounded-2xl py-10 px-12 flex flex-col justify-start items-start gap-7 w-[600px] md:w-[40%]">
        {/* <h1 className="text-3xl text-white">Login</h1> */}
        <h1 className="text-3xl text-white" style={{ fontFamily:"medium"}}>Login</h1>
        <input
          type="email"
          className="bg-transparent rounded-[8px] text-[white] w-full"
          style={{ fontFamily:"medium"}}
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          className="bg-transparent rounded-[8px] text-[white] w-full"
          style={{ fontFamily:"medium"}}
          placeholder="Enter Your Password"
        />
        <div className="flex justify-center items-center w-full">
          <button className="bg-gradient-to-r from-[#628EFF] to-[#580475] rounded-[10px] text-[white] w-[100%] h-[5vh]  hover:bg-[#0F977E]" style={{ fontFamily:"medium"}}>
            Login
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
            <div className="border-b border-[grey] w-[8vw]"></div>
            <div className="text-[grey]" style={{ fontFamily:"medium "}}>Or</div>
            <div className="border-b border-[grey] w-[8vw]"></div>
        </div>
        <div className=" flex justify-center w-full cursor-pointer" onClick={()=>{router.push('/register')}}>
              <span className=" right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text text-xl" style={{ fontFamily:"medium"}}>Sign Up</span>
        </div>
        <div className="flex justify-center w-[100%]">
          <div className="flex flex-row justify-between w-[120px]">
            <img src="/images/third-party/devicon_google.png" alt="Google" className="w-[30px] h-[30px]  hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
            <img src="/images/third-party/logos_facebook.png" alt="Facebook" className="w-[30px] h-[30px] hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
            <img src="/images/third-party/logos_twitter.png" alt="Google" className="w-[30px] h-[30px] hover:cursor-pointer hover:scale-[1.15] transition duration-100" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

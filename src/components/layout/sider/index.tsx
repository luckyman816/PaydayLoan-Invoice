"use client"
import Image from "next/image";
import React, { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import { useTheme } from "next-themes";
import { useAtom } from 'jotai';


const _socialLinks: { img: string, url: string }[] = [
  { img: "/images/twitter.svg", url: "" },
  { img: "/images/facebook.svg", url: "" },
  { img: "/images/instagram.svg", url: "" }
] 

import {
  stageAtomHome, currentModalTypeAtom
} from '@/store';

const Sider = () => {

  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [, setStage] = useAtom(stageAtomHome);
  const [, setCurrentModalType] = useAtom(currentModalTypeAtom);

  const handleNavigate = (url: string) => {
    if (url === "/") {
      setStage("home");
      setCurrentModalType("");
    } 
    router.push(url);
  }


  const _renderLinkItem = (_name: string, _icon: string, _url: string) => (
    <li onClick={() => handleNavigate(_url)} className={`border border-[#DCE4EF] flex items-center p-2 text-black dark:text-white gap-2 dark:border-black hover:border-[#F7F9FC] hover:bg-[#F7F9FC] my-1 dark:hover:bg-[#10152E] rounded-xl cursor-pointer text-sm ${ _url === pathname && 'dark:bg-[#10152E] border-none bg-[#F7F9FC]' }`}>
      <Image
        src={_icon}
        width={27}
        height={27}
        alt={"logo"}      
        priority={true}
      />
      { _name }
    </li>
  )


  return (
    <div className="dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl md:w-[310px] w-full">
      <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full">
        <ul className="text-white text-md mt-5">
          { _renderLinkItem("Home", "/images/home.png", "/") }
          { _renderLinkItem("Add User", "/images/add-user.png", "/addUser") }
          { _renderLinkItem("User Management", "/images/teamwork.png", "/userManagement") }
          { _renderLinkItem("Create Invoice", "/images/payment.png", "/createInvoice") }
          { _renderLinkItem("More", "/images/plus.png", "/more") }
        
        </ul>

        <div className="mt-6 border-[#DCE4EF] dark:border-[#1f2124] border w-full bg-[#F7F9FC] dark:bg-[#111214] rounded-3xl p-4 pt-5">
          <div className="text-black dark:text-white text-center text-md font-bold">Let&apos;s start!</div>
          <div className="text-black text-center dark:text-white text-sm pb-4 pt-1">Creating or adding new tasks<br/> couldn&apos;t be easier</div>
          <button className="w-full flex justify-center items-center gap-2 text-white p-3 text-sm bg-gradient-to-r from-[#ff6702e7] to-[#EE0E72] rounded-xl hover:from-[#FF6802] hover:to-[#ee0e73b7]">
            <Image
              src="/images/phone.svg"
              width={19}
              height={19}
              alt={"logo"}      
              priority={true}
            />
            Support
          </button>
        </div>
        <div className="mt-2 w-full bg-[#131822] text-white dark:bg-[#111214] dark:border-[#f5efeb2f] border dark:text-white rounded-xl p-3 flex items-center justify-center gap-3">
          <Image
            src="/images/group.svg"
            width={19}
            height={19}
            alt={"logo"}      
            priority={true}
          />
          Join The Dao
        </div>

        <div className="flex justify-center gap-5 mt-5">
          {
            _socialLinks.map(({url, img}: {url: string, img: string}, index: number) => 
              <Image
                key={img}
                className="cursor-pointer hover:opacity-50"
                src={img}
                width={40}
                height={40} 
                alt={"logo"}      
                priority={true}
              />
            )
          }
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center cursor-pointer hover:text-[#6f767ece] hover:underline text-[#6F767E] gap-3">
            <Image
              src="/images/help.svg"
              width={24}
              height={24}
              alt={"help"}      
              priority={true}
            />
            Help & getting started
          </div>
          <div className="bg-[#7288FA] aspect-square w-6 rounded-md flex justify-center items-center text-sm text-white">8</div>
        </div>

        <div className="relative flex bg-[#F7F9FC] dark:bg-[#111214] rounded-xl w-full p-2 mt-4">
          <div className={`absolute left-2 dark:left-[calc(50%-8px)] rounded-xl h-[calc(100%-16px)] w-[50%] z-0 bg-gradient-to-r from-[#FF6802] to-[#EE0E72] transition-[left] duration-200`}>
          </div>
          <div onClick={() => setTheme("dark")} className={`flex z-10 justify-center cursor-pointer items-center gap-2 dark:text-[#6F767E] text-white text-sm p-2 w-1/2`}>
            <Image
              src={ theme !== "dark" ? "/images/sun.svg" : "/images/sun-bright.svg" }
              width={24}
              height={24}
              alt={"sun"}      
              priority={true}
            />
            Light
          </div>
          <div onClick={() => setTheme("light")} className={`flex z-10 justify-center cursor-pointer items-center gap-2 text-[#6F767E] dark:text-white text-sm p-2 w-1/2`}>
            <Image
              src={ theme !== "dark" ? "/images/moon-bright.svg" : "/images/moon.svg" }
              width={24}
              height={24}
              alt={"sun"}      
              priority={true}
            />
            Dark
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;

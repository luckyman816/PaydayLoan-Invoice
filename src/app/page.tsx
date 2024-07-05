"use client"
import React from 'react';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
//components
const WalletConnect = dynamic(() => import("@/components/swap/walletConnect"));
const Dashboard = dynamic(() => import('@/components/dashboard/home'));
//atom
import {
  stageAtomHome,
} from '@/store';
//data
//utils

//types

const Home = () => {
  
  const [stage, setStage] = useAtom(stageAtomHome);

  //get pools
  
  return (
    <div className="flex-grow flex justify-center items-center">
      { stage === "home" && <Dashboard/> }
      { stage === "wallet" && <WalletConnect/> }
    </div>
  )
}

export default Home;
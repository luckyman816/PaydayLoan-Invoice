"use client"
import React from "react";
import { Spin } from "antd";
import Spinner from "@/components/Spinner";
import WalletConnect from "@/components/swap/walletConnect";
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">

      <WalletConnect/>
      {/* <Spin className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" tip="Loading..."></Spin> */}
    </div>
  );
};

export default Loading;

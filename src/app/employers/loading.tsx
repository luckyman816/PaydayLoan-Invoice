import React from "react";
import { Spin } from "antd";
import Spinner from "@/components/Spinner";
const Loading = () => {
  return (
    <div className="text-white fixed w-screen h-[screen] bg-[rgba(0,0,0,0.2)]">
      <Spinner/>
      {/* <Spin className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" tip="Loading..."></Spin> */}
    </div>
  );
};

export default Loading;

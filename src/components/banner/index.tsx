/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Banner: React.FC = () => (
  <Carousel autoplay>
    <div className=" relative">
      <img src="/images/banner/11.jpg" />
      <div className=" absolute  right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center text-2xl">
        Transparency, Security and Efficiency
      </div>
    </div>
    <div className=" relative">
      <img src="/images/banner/22.jpg " />
      <div className=" absolute  right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center text-2xl">
        Transparency, Security and Efficiency
      </div>
    </div>
    <div className=" relative ">
      <img src="/images/banner/33.jpg" />
      <div className=" absolute  right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center text-2xl">
        Transparency, Security and Efficiency
      </div>
    </div>
    <div className=" relative ">
      <img src="/images/banner/44.jpg" />
      <div className=" absolute  right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center text-2xl">
        Transparency, Security and Efficiency
      </div>
    </div>
  </Carousel>
);

export default Banner;

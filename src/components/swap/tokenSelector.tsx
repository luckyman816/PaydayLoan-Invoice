import React from 'react';
import Image from "next/image";
import { Icon } from '@iconify/react';
import { useAtom } from 'jotai';
//typs
import { IPool } from '@/types/maya'; 
//atoms
import {
  poolsAtom,
} from '@/store';

import {
  CHAIN_DATA
} from "@/utils/data";

type PropsType = {
  visible: Boolean,
  setVisible: React.Dispatch<React.SetStateAction<Boolean>>,
  setToken: React.Dispatch<React.SetStateAction<IPool | undefined>>
}

const TokenSelector = (props: PropsType) => {

  const [pools,] = useAtom(poolsAtom);
  
  const handleSelect = (token: IPool) => {
    props.setToken(token);
    props.setVisible(false);
  }

  return (
    <div className={`absolute top-full mt-2 z-10 left-0 w-full mb-10 ${!props.visible && 'hidden'}`}>
      <div
        className="fixed opacity-0 top-0 left-0 right-0 bottom-0"
        onClick={() => {
          props.setVisible(false);
        }}
      ></div>
      <div className="relative tokens overflow-y-auto bg-[#eee9e9] dark:bg-[#171A1F] h-[500px] rounded-md px-3 py-5 w-full !z-40">
        <div className="w-full border-b border-dashed border-white dark:border-[#ffffff25]"></div>
        {pools.map((pool: IPool, index: Number) =>
          <div onClick={() => handleSelect(pool)} key={index + ""} className="hover:dark:bg-[#12151a] rounded hover:bg-[#ffffff81] px-2 cursor-pointer w-full flex gap-3 py-4 items-center border-b border-dashed border-white dark:border-[#ffffff25]">
            <Image
              src={pool.image + ""}
              width={30}
              height={30}
              alt={pool.image + ""}
              priority={true}
              className={`rounded-full ${pool.ticker?.charAt(0) === "s" && 'border-white border-2'}`}
            />
            { pool.ticker } ({pool.chain})
          </div>
        )
        }
      </div>
    </div>
  )
}

export default TokenSelector;
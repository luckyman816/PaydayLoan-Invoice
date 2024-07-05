"use client"
import React from 'react';
import { XChainContext } from '@/contexts/XChainsProvider';

const useWallet = () => {
  const context = React.useContext(XChainContext);

  if (!context) {
    throw "can't read context";
  } else {
    return context;
  }
}

export default useWallet;
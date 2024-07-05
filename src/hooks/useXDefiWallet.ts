"use client"
import React from 'react';
import { XDefiContext } from '@/contexts/XDefiProvider';

const useWallet = () => {
  const context = React.useContext(XDefiContext);

  if (!context) {
    throw "can't read context";
  } else {
    return context;
  }
}

export default useWallet;
"use client"

import React from "react";
import { useAtom } from "jotai";
import { ethers } from 'ethers';
import axios from 'axios';
import { ETHERSCAN_API_KEY } from "@/config"; 


import {
  xClientsAtom, xClientLoadingAtom,
  isConnectingAtom,
  chainListAtom,
  xBalancesAtom,
  xDefiAddressesAtom
} from "@/store";

import { ChainType, XClients, XBalances, IBalance, IWallet } from "@/types/minis";
import { NATIVE_TOKENS } from "@/utils/data";

interface IXDefiContext {
  connectToXDefi: () => Promise<void>,
  getBalancesWithXDefi: () => Promise<void>
}

import { _getPrices } from "./XChainsProvider";
/**
 * XDefiContext
*/
export const XDefiContext = React.createContext<IXDefiContext | undefined>(undefined);

const XChainProvider = ({ children }: { children: React.ReactNode }) => {

  const [xClients, setXClients] = useAtom(xClientsAtom);
  const [xBalances, setXBalances] = useAtom(xBalancesAtom);
  const [xClientLoading, setXClientLoading] = useAtom(xClientLoadingAtom);
  const [chainList,] = useAtom(chainListAtom);
  const [isConnecting, setIsConnecting] = useAtom(isConnectingAtom);
  const [xDefiAddresses, setXDefiAddresses] = useAtom(xDefiAddressesAtom);
  //chains that is selected at this moment
  const chains = React.useMemo(() => chainList.filter((_chain: ChainType) => _chain.selected).map((_chain: ChainType) => _chain.label), [chainList]);

  const _getAccount = (chain: string) => new Promise((resolve, reject) => {

    const methods: Record<string, string> = {
      "THOR": "thorchain",
      "MAYA": "mayachain",
      "BTC": "bitcoin"
    }

    try {
      //@ts-ignore
      if (window.xfi && window.xfi.bitcoin) {
        //@ts-ignore
        window.xfi[methods[chain]].request(
          {method: 'request_accounts', params: []},
           //@ts-ignore
          (error, accounts) => {
            if (error) {
              resolve("");
            } else {
              resolve(accounts[0]);
            }
          }
        )
      }
    } catch (err) {
      resolve("");
    }
  });

  const _getKujiraAccount = async () => {
    //@ts-ignore
    if (!window.xfi?.keplr) {
      alert("Please install XDEFI extension");
    } else {
      const chainId = "kaiyo-1";
      //@ts-ignore
      const keplr = window.xfi.keplr;
      await keplr.enable(chainId);

      const offlineSigner = keplr.getOfflineSigner(chainId);

      const accounts = await offlineSigner.getAccounts();
      return accounts[0].address;
    }
  }

  const _getEVMAccount = async () => {
    //@ts-ignore
    const provider = window.xfi && window.xfi.ethereum && new ethers.providers.Web3Provider(window.xfi.ethereum);
    if(!provider) {
      return undefined;
    } else {
      //@ts-ignore
      const accounts = await provider.send("eth_requestAccounts", []);
      return accounts[0];
    }
  }
  //get btc balance
  const getBTCbalance = async (address: string, prices: Record<string, number>) => {

    const empty = {
      address,
      //@ts-ignore
      symbol: "BTC", chain: "BTC", ticker: "BTC", value: prices["BTC"],
      amount: 0,
    }

    try {
      const { data } = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`);
      const wallet: any = {
        address,
        balance: [{
          address: "",
          symbol: "BTC", chain: "BTC", ticker: "BTC", value: prices["BTC"],
          amount: data.balance
        }],
        walletType: "xDefi",
        chain: "BTC",
      }
      return wallet;
    } catch (err) {
      return {
        address,
        balance: [empty],
        walletType: "XDEFI",
        chain: "BTC",
      };
    }
  }
  //get MAYA balance
  const getMayaBalance = async (address:string, prices: Record<string, number>) => {
    const empty = {
      address,
      //@ts-ignore
      symbol: "CACAO", chain: "MAYA", ticker: "CACAO", value: prices["CACAO"],
      amount: 0,
    }
    try {
      const { data } = await axios.get(`https://midgard.mayachain.info/v2/balance/${address}`);
      if (data.coins.length === 0) throw [];
      const wallet: any = {
        address,
        balance: data.coins.map((coin: any) => ({
          address,
          symbol: coin.asset, chain: "MAYA", ticker: coin.asset, value: prices[coin.asset],
          amount: Number(coin.amount) / 10**10
        })),
        walletType: "xDefi",
        chain: "MAYA",
      }
      return wallet;
    } catch (err) {
      return {
        address,
        balance: [empty],
        walletType: "XDEFI",
        chain: "MAYA",
      };
    }
  }
  //get Kuji balance
  const getKujiraBalance = async (address:string, prices: Record<string, number>) => {
    const empty = {
      address,
      //@ts-ignore
      symbol: "KUJI", chain: "KUJI", ticker: "KUJI", value: prices["KUJI"],
      amount: 0,
    }
    try {
      const { data } = await axios.get(`https://lcd-kujira.whispernode.com/cosmos/bank/v1beta1/balances/${address}`);
      if (data.coins.length === 0) throw [];
      const wallet: any = {
        address,
        balance: data.balances.map((coin: any) => ({
          address,
          symbol: coin.asset, chain: "KUJI", ticker: "KUJI", value: prices["KUJI"],
          amount: coin.amount
        })),
        walletType: "xDefi",
        chain: "KUJI",
      }
      return wallet;
    } catch (err) {
      return {
        address,
        balance: [empty],
        walletType: "XDEFI",
        chain: "KUJI",
      };
    }
  }
  //get thor balance
  const getThorBalance = async (address:string, prices: Record<string, number>) => {
    const empty = {
      address,
      //@ts-ignore
      symbol: "RUNE", chain: "THOR", ticker: "RUNE", value: prices["RUNE"],
      amount: 0,
    }
    try {
      const { data } = await axios.get(`https://midgard.ninerealms.com/v2/balance/${address}`);
      if (data.coins.length === 0) throw [];
      const wallet: any = {
        address,
        balance: data.coins.map((coin: any) => ({
          address,
          symbol: coin.asset, chain: "THOR", ticker: coin.asset, value: prices[coin.asset],
          amount: coin.amount
        })),
        walletType: "xDefi",
        chain: "THOR",
      }
      return wallet;
    } catch (err) {
      return {
        address,
        balance: [empty],
        walletType: "XDEFI",
        chain: "THOR",
      };
    }
  }

  //get ETH balance
  const getEthBalance = async (address:string, prices: Record<string, number>) => {
    const empty = {
      address,
      //@ts-ignore
      symbol: "ETH", chain: "ETH", ticker: "ETH", value: prices["ETH"],
      amount: 0,
    }
    try {
      let { data } = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`);
      
      const balance = [{
        address,
        symbol: "ETH", chain: "ETH", ticker: "ETH", value: prices["ETH"],
        amount: Number(data.result) / 10**18
      }]
      const wallet: any = {
        address,
        balance: balance,
        walletType: "xDefi",
        chain: "ETH",
      }
      return wallet;
    } catch (err) {
      return {
        address,
        balance: [empty],
        walletType: "XDEFI",
        chain: "ETH",
      };
    }
  }




  const connectToXDefi = async () => {

    setIsConnecting(true);
    setXDefiAddresses ({});

    const btc = await _getAccount ("BTC");
    const maya = await _getAccount ("MAYA");
    const thor = await _getAccount ("THOR");
    const kujira = await _getKujiraAccount ();
    const ethereum = await _getEVMAccount ();

    const temp: Record<string, string> = {};
    chains.forEach(async(chain: String) => {
      switch (chain) {
        case "ETH": 
          temp.ETH =  await _getEVMAccount () as string;
          break;
        case "BTC":
          temp.BTC = await _getAccount ("BTC") as string;
          break;
        case "KUJI":
          temp.KUJI = await _getKujiraAccount();
          break;
        case "THOR":
          temp.THOR = await _getAccount ("THOR") as string;
          break;
        case "MAYA":
          temp.MAYA = await _getAccount ("MAYA") as string;
          break;
      }
    });
    setXDefiAddresses(temp);
  }


  const getBalancesWithXDefi = async () => {
    setXClientLoading({
      "BTC": true,
      "ETH": true,
      "DASH": true,
      "KUJI": true,
      "THOR": true,
      "MAYA": true
    });
    const prices = await _getPrices();
    const temp: XBalances = {};

    await Promise.all(Object.keys(xDefiAddresses).map(async(key: string) => {
      console.log(key)
      switch (key) {
        case "ETH": 
          temp.ETH =  await getEthBalance(xDefiAddresses[key], prices);
          return;
        case "BTC":
          temp.BTC = await getBTCbalance(xDefiAddresses[key], prices);
          return;
        case "KUJI":
          temp.KUJI = await getKujiraBalance(xDefiAddresses[key], prices);
          return;
        case "THOR":
          temp.THOR = await getThorBalance(xDefiAddresses[key], prices);
          return;
        case "MAYA":
          temp.MAYA = await getMayaBalance (xDefiAddresses[key], prices);
          return;
      }
    }));
    console.log(temp)
    setXBalances(temp);

    setIsConnecting(false);
    setXClientLoading({
      "BTC": false,
      "ETH": false,
      "DASH": false,
      "KUJI": false,
      "THOR": false,
      "MAYA": false
    });

  }

  return (
    <XDefiContext.Provider value={{ connectToXDefi, getBalancesWithXDefi }}>
      {children}
    </XDefiContext.Provider>
  )
}

export default XChainProvider;

function _getEVMAccount(): any {
  throw new Error("Function not implemented.");
}

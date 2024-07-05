"use client"
import React from "react";
import { useAtom } from "jotai";

//xchain utils
import { baseToAsset } from "@xchainjs/xchain-util";
import { Balance, Network, XChainClient } from "@xchainjs/xchain-client";
//This can be used for any xchain client
import { Client as BTCClient, defaultBTCParams } from "@xchainjs/xchain-bitcoin";
import { Client as ETHClient, defaultETHParams } from "@/xchains/ethereum";
import { Client as MayaClient } from '@xchainjs/xchain-mayachain';
import { Client as DashClient, defaultDashParams } from '@xchainjs/xchain-dash';
import { Client as KujiraClient, defaultKujiParams } from '@xchainjs/xchain-kujira';
import { Client as THORClient } from "@xchainjs/xchain-thorchain";
import axios from "axios";
// import { Client as BNBClient } from "@xchainjs/xchain-binance";
// import { Client as CosmosClient } from "@xchainjs/xchain-cosmos";
// import { Client as DogeClient, defaultDogeParams } from '@xchainjs/xchain-doge';
// import { Client as BCHClient, defaultBchParams } from '@xchainjs/xchain-bitcoincash';
// import { Client as LTCClient, defaultLtcParams } from '@xchainjs/xchain-litecoin';
// import { Client as BSCClient, defaultBscParams } from '@xchainjs/xchain-bsc';
// import { Client as AvaxClient, defaultAvaxParams } from "@xchainjs/xchain-avax";
//atom from store
import { 
  xClientsAtom, xClientLoadingAtom,
  isConnectingAtom,
  chainListAtom,
  xBalancesAtom
} from "@/store";
//public utils

//types
import { ChainType, XClients, XBalances, IBalance, IWallet } from "@/types/minis";
import { NATIVE_TOKENS, TOKEN_DATA } from "@/utils/data";

interface IXChainContext {
  connectKeyStoreWallet: (phrase: string) => Promise<void>,
  getBalances: () => Promise<void>
} 

/**
 * XChainContext
*/
export const XChainContext = React.createContext<IXChainContext | undefined>(undefined);

/**
   * get coin prices
   * @ prices {DASH: 2345}
   */
export const _getPrices = async() => {
  const { data } = await axios.get("https://mayanode.mayachain.info/mayachain/pools");
  
  const prices: Record<string, number> = {};

  const cacaoInfo = data.find((item: any) => item.asset === "ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48");
  const value = cacaoInfo.balance_asset / cacaoInfo.balance_cacao;
  prices.CACAO = value * 100;
  

  data.forEach((item: any) => {
    switch (item.asset) {
      case "ETH.ETH": 
        prices.ETH =  item.balance_cacao / item.balance_asset * value;
        break;
      case "BTC.BTC":
        prices.BTC = item.balance_cacao / item.balance_asset * value;
        break;
      case "KUJI.KUJI":
        prices.KUJI = item.balance_cacao / item.balance_asset * value;
        break;
      case "THOR.RUNE":
        prices.RUNE = item.balance_cacao / item.balance_asset * value;
        break;
      case "DASH.DASH":
        prices.DASH = item.balance_cacao / item.balance_asset * value;
        break;
      case "KUJI.USK":
        prices.USK = item.balance_cacao / item.balance_asset * value;
        break;
    }
  });
  return prices;
}

const XChainProvider = ({children}: {children: React.ReactNode}) => {
  
  const [xClients, setXClients] = useAtom(xClientsAtom);
  const [xBalances, setXBalances] = useAtom(xBalancesAtom);
  const [xClientLoading, setXClientLoading] = useAtom(xClientLoadingAtom);
  const [chainList,] = useAtom(chainListAtom);
  const [isConnecting, setIsConnecting] = useAtom(isConnectingAtom);
  //chains that is selected at this moment
  const chains = React.useMemo(() => chainList.filter((_chain: ChainType) => _chain.selected ).map((_chain: ChainType) => _chain.label), [chainList]);
  
  /**
   * connect to selected chains using keystore phrase
   * @param phrase 
  */
 const connectKeyStoreWallet = async (phrase: string) => {
   const settings = { network: Network.Mainnet, phrase }
   // UXTXO Clients
   const btcClient = new BTCClient({ ...defaultBTCParams, network: settings.network, phrase: settings.phrase }) // Bitcoin  
   // Cosmos based clients
   const mayaClient = new MayaClient(settings) // Maya
   // EVM Clients
   const ethClient = new ETHClient({...defaultETHParams, network: settings.network, phrase: settings.phrase }) // Ethereum
    //dash &
    const dashClient = new DashClient({ ...defaultDashParams, network: settings.network, phrase: settings.phrase });
    const kujiClient = new KujiraClient({ ...defaultKujiParams, network: settings.network, phrase: settings.phrase });
    const thorClient = new THORClient(settings);
    //clients
    const clients: XChainClient[] = [btcClient, mayaClient, ethClient, dashClient, kujiClient, thorClient];
    
    const _clients: XClients = {};
    clients.forEach((_client: XChainClient) => {
      //@ts-ignore
      if (chains.indexOf(_client.chain) !== -1) {
        //@ts-ignore
        _clients[_client.chain] = _client;
      }
    });
    setXClients(_clients);
  }
  
  /**
   * 
   */
  const getBalances = async() => {

    const prices = await _getPrices();
    try {
      setIsConnecting(true);
      setXClientLoading({
        "BTC": true,
        "ETH": true,
        "DASH": true,
        "KUJI": true,
        "THOR": true,
        "MAYA": true
      });
      
      const balances = await Promise.all(chains.map((chain: String) => _getWalletBalance(xClients[chain as string], prices)));
      console.log("balances ------------------>", balances);
      const temp: XBalances = {};
      balances.forEach((item: IWallet) => {
        temp[item.chain as string] = item;
      });
      setXBalances(temp);
    } catch (err) {
      
    } finally {
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
  }
  // XChainClient is the superclass to all client implementations.
  const _getWalletBalance = async (client: XChainClient, prices: Record<string, number>) => {
    try {
      //@ts-ignore
      let address = client.getAddress()
      //@ts-ignore
      const chain: string = client.chain;

      if (client.validateAddress(address) === false) {
        console.log(`Address: ${address} is invalid`);
        //@ts-ignore
        return null;
      }

        //@ts-ignore
        const balances: Balance[] = await client.getBalance(address).catch(err => {});
        console.log(chain + "------------------->", balances)
        
        //@ts-ignore
        const _balances: IBalance[] = (balances === undefined || balances.length === 0) ?
        [{
          address,
          //@ts-ignore
          symbol: NATIVE_TOKENS[chain], chain: chain, ticker: NATIVE_TOKENS[chain], value: prices[NATIVE_TOKENS[chain]],
          amount: 0,
        }] : 
        balances.map((item: any) => ({
          address,
          symbol: item.asset.symbol,
          chain: item.asset.chain,
          ticker: item.asset.ticker,
          value: prices[item.asset.ticker],
          amount: baseToAsset(item.amount).amount(),
        }));

        const wallet: any = {
          address,
          balance: _balances,
          walletType: "XDEFI",
          //@ts-ignore
          chain: client.chain,
        }
        //@ts-ignore
        return wallet;
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <XChainContext.Provider value={{ connectKeyStoreWallet, getBalances }}>
      { children }
    </XChainContext.Provider>
  )
}

export default XChainProvider;
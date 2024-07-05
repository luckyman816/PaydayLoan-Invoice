import { XChainClient } from '@xchainjs/xchain-client';
import BigNumber from 'bignumber.js';

export type WalletType = {
  name: String;
  image: String,
  supportedChains?: String[],
  focused?: Boolean,
  selected?: Boolean
};

export type ChainType = {
  name: String;
  label: String;
  image: String,
  selected?: Boolean,
  focused?: Boolean
};

export interface IBalance {
  bigIntValue?: string;
  address?: String,
  chain?: String,
  decimal?:Number,
  amount: BigNumber,
  decimalMultiplier?: String,
  symbol?: String,
  ticker?: String
  value?: Number,
};

export interface IWallet {
  address: String,
  balance: IBalance[], 
  walletType: String,
  chain?: String
};

export type XClients = Record<string, XChainClient>;
export type XBalances = Record<string, IWallet>
export type XClientLoading = Record<string, boolean>;
import { Network } from "@xchainjs/xchain-client"
import { ethers } from 'ethers';
import { ETHERSCAN_API_KEY } from "@/config";

// This can be used for any xchain client
import { defaultEthParams } from "@xchainjs/xchain-ethereum"
import { EtherscanProvider } from '@xchainjs/xchain-evm-providers';

const ETH_GAS_ASSET_DECIMAL = 18;
const ETHChain = 'ETH';
const AssetETH = {
  chain: ETHChain,
  symbol: 'ETH',
  ticker: 'ETH',
  synth: false,
};
// =====Ethers providers=====
const ETH_MAINNET_ETHERS_PROVIDER = new ethers.providers.EtherscanProvider('homestead', ETHERSCAN_API_KEY);
// as per https://docs.ethers.org/v5/api/providers/api-providers/#EtherscanProvider
const network = ethers.providers.getNetwork('sepolia');
const ETH_TESTNET_ETHERS_PROVIDER = new ethers.providers.EtherscanProvider(network, ETHERSCAN_API_KEY);
const ethersJSProviders = {
    [Network.Mainnet]: ETH_MAINNET_ETHERS_PROVIDER,
    [Network.Testnet]: ETH_TESTNET_ETHERS_PROVIDER,
    [Network.Stagenet]: ETH_MAINNET_ETHERS_PROVIDER,
};
// =====Ethers providers=====
// =====ONLINE providers=====
const ETH_ONLINE_PROVIDER_TESTNET = new EtherscanProvider(ETH_TESTNET_ETHERS_PROVIDER, 'https://api-sepolia.etherscan.io/', ETHERSCAN_API_KEY, ETHChain, AssetETH, ETH_GAS_ASSET_DECIMAL);
const ETH_ONLINE_PROVIDER_MAINNET = new EtherscanProvider(ETH_MAINNET_ETHERS_PROVIDER, 'https://api.etherscan.io/', ETHERSCAN_API_KEY, ETHChain, AssetETH, ETH_GAS_ASSET_DECIMAL);
const ethProviders = {
    [Network.Mainnet]: ETH_ONLINE_PROVIDER_MAINNET,
    [Network.Testnet]: ETH_ONLINE_PROVIDER_TESTNET,
    [Network.Stagenet]: ETH_ONLINE_PROVIDER_MAINNET,
};


export { Client } from "@xchainjs/xchain-ethereum";
export const defaultETHParams = {...defaultEthParams, providers:ethersJSProviders, dataProviders: [ethProviders] };


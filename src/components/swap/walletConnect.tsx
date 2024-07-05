/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import { useAtom } from 'jotai';
import Image from "next/image";
import { Icon } from '@iconify/react';
import dynamic from "next/dynamic";
//types
import { ChainType, WalletType } from "@/types/minis";
//tooltip
import { Tooltip } from 'flowbite-react';
import useNotification from "@/hooks/useNotification";
//atoms from store
import {
  stageAtomHome, currentModalTypeAtom, //keystore modal atom
  // isConnectedAtom, isFetchingBalancesAtom, 
  isConnectingAtom,
  walletListAtom, chainListAtom,
  xClientLoadingAtom,
  xClientsAtom,
  walletAtom
} from '@/store';
//utils
import { isXDefiInstalled, isMetamaskInstalled, isSupportedChain } from "@/utils/methods";
//router
import { useRouter } from 'next/navigation'
//hooks
import useXChain from '@/hooks/useXChain';
import useXDefi from '@/hooks/useXDefiWallet';
//keystore
const KeyStoreWallet = dynamic(() => import('@/components/swap/keyStore'));
const CreateKeyStore = dynamic(() => import("@/components/swap/createKeyStore"));
const ImportPhrase = dynamic(() => import("@/components/swap/importPhrase"));

const WalletConnect = () => {

  const router = useRouter();
  // const [isConnecting] = useAtom(isConnectingAtom);
  // const [isConnected] = useAtom(isConnectedAtom);
  // const [isFetchingBalances] = useAtom(isFetchingBalancesAtom);
  
  //wallet loading
  const [xClientLoading, setXClientLoading] = useAtom(xClientLoadingAtom);
  const [isConnecting, setIsConnecting] = useAtom(isConnectingAtom);
  const [xClients] = useAtom(xClientsAtom);
  
  const [stage, setStage] = useAtom(stageAtomHome);
  const [currentModalType, setCurrentModalType] = useAtom(currentModalTypeAtom);

  const { showNotification } = useNotification();

  const [walletList, setWalletList] = useAtom(walletListAtom);
  const [chainList, setChainList] = useAtom(chainListAtom);

  const [wallet, setWallet] = useAtom(walletAtom);

  //data from wallet context
  // const { connectKeyStoreWallet } = useWallet ();
  const { connectKeyStoreWallet } = useXChain ();
  const { connectToXDefi } = useXDefi();

  React.useEffect(() => {
    if (wallet) {
      const countSelectedChains = chainList.reduce((_count: number, _chain: ChainType) => _chain.selected && wallet.supportedChains?.find((item: String) => item === _chain.label) ? _count + 1 : _count, 0);
      if (countSelectedChains > 0) {
        setChainList(chainList.map((_chain: ChainType) => isSupportedChain(wallet, _chain) ? { ..._chain, focused: true } : { ..._chain, selected: false, focused: false }))
      } else {
        setChainList(chainList.map((_chain: ChainType) => isSupportedChain(wallet, _chain) ? { ..._chain, selected: true, focused: true } : { ..._chain, selected: false, focused: false }))
      }
      setWalletList(walletList.map((_wallet: WalletType) => ({ ..._wallet, focused: false })));
    }
  }, [wallet]);

  React.useEffect(() => {

    const countFocusedChains = chainList.reduce((_count: number, _chain: ChainType) => _chain.focused ? _count + 1 : _count, 0);
    const countSelectedChains = chainList.reduce((_count: number, _chain: ChainType) => _chain.selected ? _count + 1 : _count, 0);
    
    if (countSelectedChains === 0) {
      setWalletList(walletList.map((_wallet: WalletType) => ({ ..._wallet, focused: false, selected: false })));
    } else if (countFocusedChains === 0) {
      console.log("@dew1204/focused wallet count----------->", countFocusedChains);
      setWallet(null);
      setWalletList(walletList.map((_wallet: WalletType) => {
        let _selectedChains = chainList.filter(({ selected }: ChainType) => selected);
        for (let i = 0; i < _selectedChains.length; i++) {
          const element = _selectedChains[i];
          if (!_wallet.supportedChains?.find((item: String) => item === element.label)) {
            return { ..._wallet, focused: false };
          }
        }
        return { ..._wallet, focused: true }
      }))
    }
  }, [chainList]);

  const handleChainClick = (chain: ChainType) => {
    if (false) { //check if loading currently
      return;
    }
    if (!chain.focused) { //if unsupported chain is clicked @dew1204
      setChainList(chainList.map((_chain: ChainType) => {
        if (_chain.label === chain.label) {
          return { ..._chain, selected: !_chain.selected }
        } else if (_chain.focused) {
          return { ..._chain, focused: false, selected: false }
        } else return _chain;
      }));
    } else { //supported chain is clicked @dew1204
      let tempChainList = chainList;
      const _editIndex = tempChainList.map(({label}: ChainType) => label).indexOf(chain.label);//find selected chain idx or chainList.indexOf(chain)
      tempChainList[_editIndex].selected = !tempChainList[_editIndex].selected;
      setChainList([ ...tempChainList ]);
    }
  }

  const handleWalletClick = (_wallet: WalletType) => {
    if (isConnecting) { //check if loading currently
      return;
    }
    if (_wallet.name === "Create Keystore") {
      setWallet(null);
      setCurrentModalType("createKeyStore");
    } else if (_wallet.name === "Import Phrase") {
      setWallet(null);
      setCurrentModalType("importPhrase");
    } else if (_wallet.name === "XDEFI") {
      if (isXDefiInstalled()) {
        setWallet(_wallet);
      } else {
        window.open("https://www.xdefi.io/", '_blank');
      }
    } else if (_wallet.name === "Metamask") {
      if (isMetamaskInstalled()) {
        setWallet(_wallet);
      } else {
        window.open("https://www.metamask.io/", '_blank');
      }
    } else {
      setWallet(_wallet);
    } 
  }

  const handleConnectWallet = async () => {
    try {
      if (isConnecting) { //check if loading wallet...
        throw "Loading wallet...Please wait for a sec.";
      }
  
      if (wallet?.name === "Keystore") {
        setCurrentModalType("importKeyStore");
      } else if (wallet?.name === "XDEFI") {
        const _chains = chainList.filter((_chain: ChainType) => _chain.selected ).map((_chain: ChainType) => _chain.label);
        if (_chains.length === 0) {
          throw "Select chains for wallet";
        } else {
          // walletConnect (WalletOption.XDEFI);
          // connectKeyStoreWallet("fix hole garden staff input athlete bicycle account acquire patrol dilemma hamster", _chains);
          await connectToXDefi ();
          router.push("/my-wallet");
        }
      } else if (wallet?.name === "Metamask") {
        const _chains = chainList.filter((_chain: ChainType) => _chain.selected ).map((_chain: ChainType) => _chain.label);
        if (_chains.length === 0) {
          throw "Select chains for wallet";
        } else {
          // walletConnect (WalletOption.METAMASK, _chains);
        }
      } else {
        showNotification("Select wallet to connect", "warning");
      }
    } catch (err) {
      showNotification(err, "info");
    }
  }

  /**
   * render wallet list item
   * @returns 
   */
  const _renderWalletItem = (_wallet: WalletType) => (
    <div key={_wallet.name + ''} onClick={() => handleWalletClick(_wallet)} className={`bg-white flex relative items-center gap-3 dark:bg-[#0A0D13] hover:dark:bg-black hover:dark:border-[#5cc6ff6b] hover:dark:text-white hover:border-white hover:bg-[#E4EBF3] rounded-xl py-3 px-3 border border-[#DCE4EF] dark:border-[#222832] mt-2 cursor-pointer ${ (_wallet.focused || _wallet.name === wallet?.name) && 'dark:!bg-black dark:!border-[#5cc6ff6b] !bg-[#E4EBF3] border-white dark:text-white' }`}>
      {
        _wallet.image.substring(0, 16) === "/images/wallets/" ?
        <Image
          src={_wallet.image + ''}
          width={24}
          height={24}
          alt={"sun"}      
          priority={true}
        /> :
        <Icon icon={_wallet.image + ''} width={24} className="dark:text-white text-[#534428] opacity-80"/> 
      }
      { _wallet.name }
      { _wallet.name === wallet?.name && <Icon className="text-[#000000af] dark:text-white absolute -left-2 -top-2" width={20} icon="pepicons-print:chain-circle-filled" /> }
    </div>
  )

  /**
   * render chain list item
   * @returns 
   */
  const _renderChainItem = (_chain: ChainType) => (
    <div key={_chain.label + ""} onClick={() => handleChainClick(_chain)}  className="px-1 w-1/2">
        <div className={`relative bg-white flex text-sm items-center gap-3 w-full border dark:bg-[#181E25] hover:dark:bg-black dark:border-[#181E25] hover:dark:border-[#7a5a5aa9] hover:dark:text-white hover:bg-[#E4EBF3] rounded-xl py-2 px-3 mt-2 cursor-pointer ${ _chain.selected ? 'dark:!bg-black dark:!border-[#7a5a5aa9] !bg-[#E4EBF3] dark:text-white' : _chain.focused && 'dark:!bg-[#ffffff17] dark:!border-[#7a5a5aa9] !bg-[#E4EBF3] dark:text-white' }`}>
          <Tooltip content={_chain.name} style="dark">
            <Image
              src={_chain.image + ''}
              width={24}
              height={24}
              alt={_chain.label + ''}      
              priority={true}
            />
          </Tooltip>
            { _chain.label }
            { _chain.selected && <Icon className="text-[#000000af] dark:text-white absolute -right-2 -top-2" width={20} icon="pepicons-print:chain-circle-filled" /> }
        </div>

    </div>
  )

  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-tr from-[#ff6a0096] via-[#6d78b280] to-[#e02d6f86] mt-10 md:mt-0 w-full md:w-[calc(100vw-360px)] lg:w-[680px]">
      <div className="rounded-2xl p-3 pt-4 bg-white dark:bg-[#0A0C0F] dark:text-white">
        <h2 className="text-center">Connect Wallet</h2>
        <div className="flex mt-3 gap-2 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-3 dark:text-[#ffffffa1] dark:bg-[#030506] bg-[#F3F7FC] rounded-2xl">
            Select Wallet
            {
              walletList.map((wallet:WalletType) => (
                _renderWalletItem(wallet)
              ))
            }
          </div>
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0 px-2 py-3 dark:text-[#ffffffa1] dark:bg-[#030506] bg-[#F3F7FC] rounded-2xl">
            <div className="px-1">
              <h3 className="py-1">Get Started with Defi Wallet</h3>
              <input
                className="bg-[#E4EBF3] border outline-none dark:border-[#363C42] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-300 block w-full p-2 dark:bg-black dark:placeholder-[#6A84A0] dark:text-white dark:focus:border-[#a8b3bb] bg-[url('/images/search.png')] bg-no-repeat bg-[calc(100%-10px)]" 
                placeholder="Wallet type"
              />
            </div>
            <div className="flex flex-wrap">
              {
                chainList.map((chain: ChainType) => (
                  _renderChainItem(chain)
                ))
              }
            </div>
          </div>
        </div>

        <button onClick={handleConnectWallet} className="flex justify-center items-center gap-3 text-white mt-4 p-5 w-full rounded-xl bg-gradient-to-r from-[#FF6802] to-[#EE0E72] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
          {
            wallet &&
            <Image
              src={wallet.image + ''}
              width={32}
              height={32}
              alt={wallet.name + ''}      
              priority={true}
            />
          }
          {
            isConnecting ? 
            <div className="h-2 flex items-center"><Icon icon="eos-icons:three-dots-loading" width={70}/></div> 
            : wallet ? `Connect with ${wallet.name}` : "Connect"
          }
        </button>
      </div>

      { currentModalType === "importKeyStore" && <KeyStoreWallet/> }
      { currentModalType === "createKeyStore" && <CreateKeyStore/> }
      { currentModalType === "importPhrase" && <ImportPhrase/> }

    </div>
  );
};

export default WalletConnect;

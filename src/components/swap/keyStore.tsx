import React from 'react';

import { Icon } from '@iconify/react';
import { useAtom } from 'jotai';
import useNotification from '@/hooks/useNotification';
import { readDataFromFile } from '@/utils/methods';
import { validatePhrase, encryptToKeyStore, generatePhrase, decryptFromKeystore } from "@xchainjs/xchain-crypto";
import { useRouter } from 'next/navigation';

import {
  currentModalTypeAtom,
  stageAtom,
  chainListAtom
} from "@/store";

import { ChainType } from '@/types/minis';

import useXChain from '@/hooks/useXChain';

const KeyStore = () => {

  const router = useRouter();
  
  const { showNotification } = useNotification ();

  const [, setCurrentModalType] = useAtom(currentModalTypeAtom);
  const [, setStage] = useAtom(stageAtom);
  const [chains] = useAtom(chainListAtom);

  const handleClose = () => {
    // setStage("swap");
    setCurrentModalType("");
  }
  const keyFileRef = React.useRef(null);

  const [password, setPassword] = React.useState<String>("");
  const [key, setKey] = React.useState<any>();
  const [keyStoreFile, setKeyStoreFile] = React.useState<File|undefined>(undefined);

  const { connectKeyStoreWallet } = useXChain ();

  const handleReadKeyFile = async (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files?.length === 0) {
      //@ts-ignore
      keyFileRef.current.value = "";
      setKeyStoreFile(undefined);
      setKey(null);
      return;
    }

    const file: File | undefined = e.target.files?.[0];

    if (file?.type !== "application/json") {
      showNotification("Only json file is available for keyStore", "warning");
      setKeyStoreFile (undefined);
      setKey(null);
      //@ts-ignore
      keyFileRef.current.value = "";
      return;
    }

    try {
      const _key = await readDataFromFile (file);
      console.log("@dew1204/keystore file ---------->", _key);
      setKey(_key);
      setKeyStoreFile(file);
    } catch (err) {
      // console.log("@dew1204/err ---->", err);
      setKeyStoreFile(undefined);
      setKey(null);
      showNotification(err, "warning");
    } finally {
      //@ts-ignore
      keyFileRef.current.value = "";
    }
  }

  const handleUnlock = async () => {
    try {
      if (!key) {
        throw "Select keyStore file to use";
      } else if (!password) {
        throw "Input password for Keystore file";
      } else {
        const phrase: string = await decryptFromKeystore(key, password as string).catch((err: any) => {
          const _err = err.toString();
          if (_err.substring(7, _err.length) === "Invalid password") {
            throw "Invalid Pasword, Did you forget it?";
          } else {
            throw "Can't decrypt this keyStore file, Please use another one";
          }
        });

        if (chains.length === 0) {
          setCurrentModalType("");
          throw "Please select chains to connect";
        }
        connectKeyStoreWallet (phrase);
        setCurrentModalType("");

        router.push("/my-wallet");
      }
    } catch (err) {
      //@ts-ignore
      keyFileRef.current.value = "";
      showNotification (err, "warning");
      setKeyStoreFile(undefined);
      setKey(null);
      setPassword("");
    }
  }


  return (
    <div>
      <div onClick={handleClose} className="fixed top-0 left-0 right-0 bottom-0 bg-[#0000003d] z-10 backdrop-filter backdrop-blur-[10px]"></div>
      <div className="fixed w-full px-3 sm:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative dark:text-white px-10 py-6 text-center dark:bg-[#232E42] bg-white w-full rounded-2xl">
          <div className='text-left w-full mx-auto'>
            <p className='px-2'>Please Select Keystore File</p>
            <input
              className="hidden"
              aria-describedby="user_avatar_help"
              id="keyStore"
              type="file"
              ref={keyFileRef}
              accept="application/json"
              onChange={handleReadKeyFile}
            />
            <label
              className="border dark:border-[#54575a] m-auto mt-1 text-[#6A84A0] hover:text-black hover:dark:text-white  text-sm rounded-2xl block w-full px-4 py-2 bg-transparent cursor-pointer" 
              htmlFor="keyStore"
            >
              { keyStoreFile ? keyStoreFile.name : "Choose file to upload" }
            </label>
          </div>
          <div className='text-left w-full mt-6'>
            <div className='px-2'>
              Decryption Password 
              {/* <Tooltip placement="right" title="Password for recovery"><span className='cursor-pointer text-[8px] px-2'> ?</span></Tooltip> */}
            </div>
            <input
              className="border outline-none border-[#0000001e] dark:border-[#54575a] m-auto mt-1 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-300 block w-full px-4 py-2 bg-transparent dark:placeholder-[#6A84A0] dark:text-white dark:focus:border-[#a8b3bb]" 
              placeholder="Password"
              value={password as string}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              type='password'
            />
          </div>

          <div className='text-left w-full mt-6 flex justify-between gap-1 flex-col xs:gap-3 xs:flex-row'>
            <button
              onClick={handleUnlock}
              className="flex gap-2 justify-center items-center bg-[#3C829B] m-auto mt-1 text-white dark:text-[#6A84A0] hover:opacity-50 hover:dark:text-white dark:text-[#ffffff86]  text-sm rounded-2xl w-full px-4 py-2 cursor-pointer" 
            >
              Unlock <Icon icon="noto-v1:unlocked" width={20}/>
            </button>
            <button
              onClick={() => setCurrentModalType("createKeyStore")}
              className="flex gap-1 justify-center items-center border dark:border-[#54575a] m-auto mt-1 text-[#6A84A0] hover:text-black hover:dark:text-white  text-sm rounded-2xl w-full px-4 py-2 bg-transparent cursor-pointer" 
            >
              Create Wallet <Icon icon="fluent:wallet-credit-card-16-regular" width={20}/>
            </button>
          </div>
        </div>
        <div className='absolute -top-8 text-white flex w-full justify-between items-center px-2 pr-8'>
          <div className='flex items-center gap-2 cursor-pointer hover:opacity-50'>
            {/* <Icon icon="icon-park-solid:back" width={20}/> <span className='text-lg font-bold'>Connect Wallets</span> */}
            <Icon icon="fluent:wallet-credit-card-16-regular" width={20}/> <span className='text-lg font-bold'>Connect with Keystore</span>
          </div>
          <div onClick={handleClose}><Icon icon="ic:sharp-close" className='cursor-pointer hover:opacity-50' width={30}/></div>
        </div>
      </div>
    </div>
  )
}

export default KeyStore;
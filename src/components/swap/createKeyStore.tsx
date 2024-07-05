import React from 'react';

import { Icon } from '@iconify/react';
import { useAtom } from 'jotai';
import useNotification from '@/hooks/useNotification';
import downloadjs from 'downloadjs';

import {
  currentModalTypeAtom,
  stageAtom
} from "@/store";

// @ts-ignore
import { validatePhrase, encryptToKeyStore, generatePhrase, decryptFromKeystore } from "@xchainjs/xchain-crypto";
import { copyToClipboard } from '@/utils/methods';
// interface PropsType {
//   // setVisible: React.Dispatch<React.SetStateAction<Boolean>>
//   setCurrentModalType: React.Dispatch<React.SetStateAction<String>>
// }

const CreateKeyStore = () => {

  const { showNotification } = useNotification ();

  const [, setCurrentModalType] = useAtom(currentModalTypeAtom);
  const [, setStage] = useAtom(stageAtom);

  const [password, setPassword] = React.useState<String>("");
  const [confirm, setConfirm] = React.useState<String>("");

  const [phrase, setPhrase] = React.useState<String>("");
  const [isCopied, setIsCopied] = React.useState<Boolean>(false);

  const handleClose = () => {
    // setStage("swap");
    setCurrentModalType("");
  }

  //copy phrase string
  const copyPhrase = () => {
    if (!isCopied) {
      setIsCopied(true);
      copyToClipboard (phrase as string);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }

  const handleCreate = async () => {
    try {
      if (!password) throw "Input password.";
      if (password.length < 6) throw "Password must be at least 6 characters.";
      if (!confirm) throw "Input confirm password";
      if (confirm !== password) throw "Invalid confirm, Please retry.";

      const phrase = generatePhrase(12);
      if (!validatePhrase(phrase)) throw "Invalid phrase generated, Please retry.";
        
      const keystore = await encryptToKeyStore(phrase, password as string).catch((err: any) => {
        console.log("@dew1204/err in creating keystore from phrase ---------------->", err);
        throw "Failed to create keystore from phrase, Please retry.";
      });
      setPhrase(phrase);
      downloadjs(JSON.stringify(keystore, null, 4), "keystore-f7sx-turbo.json");
      showNotification("Successfully created new KeyStore.", "info");
    } catch (err) {
      showNotification (err, "warning");
      setPassword("");
      setConfirm("");
    }
  }
  
  return (
    <div>
      <div onClick={handleClose} className="fixed top-0 left-0 right-0 bottom-0 bg-[#0000003d] z-10 backdrop-filter backdrop-blur-[10px]"></div>
      <div className="fixed w-full px-3 sm:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative dark:text-white px-10 py-6 text-center dark:bg-[#232E42] bg-white w-full rounded-2xl">
          <div className='text-left w-full'>
            <div className='px-2'>
              Input Password 
              {/* <Tooltip placement="right" title="Password for recovery"><span className='cursor-pointer text-[8px] px-2'> ?</span></Tooltip> */}
            </div>
            <input
              className="border outline-none border-[#0000001e] dark:border-[#54575a] m-auto mt-1 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-300 block w-full px-4 py-2 bg-transparent dark:placeholder-[#6A84A0] dark:text-white dark:focus:border-[#a8b3bb]" 
              placeholder="Enter Password"
              value={password as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              type='password'
            />
          </div>
          <div className='text-left w-full mt-6'>
            <div className='px-2'>
              Confirm Password 
            </div>
            <input
              className="border outline-none border-[#0000001e] dark:border-[#54575a] m-auto mt-1 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-300 block w-full px-4 py-2 bg-transparent dark:placeholder-[#6A84A0] dark:text-white dark:focus:border-[#a8b3bb]" 
              placeholder="Confirm Password"
              value={confirm as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirm(e.target.value)}
              type='password'
            />
          </div>

          <div className={`relative flex w-full justify-between flex-wrap text-[13px] rounded-2xl bg-[#F3F7FC] dark:bg-[#1f2738] mt-4 p-2 pt-0 ${!phrase && 'hidden'}`}>
            {
              phrase.split(" ").map((_word: String, index: number) => <div key={index + "_phrase"} className='w-[32.5%] p-1 rounded-full bg-white dark:bg-[#232E42] mt-2'>{_word}</div>)
            }
            <div className='absolute right-2 bottom-2 text-sky-800 hover:opacity-50 cursor-pointer' onClick={copyPhrase}>
              <Icon icon={ !isCopied ? "solar:copy-outline" : "mingcute:check-fill" } width={20}/>
            </div>
          </div>

          <div className='text-left w-full mt-6 flex justify-between gap-1 flex-col xs:gap-3 xs:flex-row'>
            <button
              onClick={handleCreate}
              className="flex gap-1 justify-center items-center bg-[#3C829B] m-auto mt-1 text-white dark:text-[#6A84A0] hover:opacity-50 hover:dark:text-white dark:text-[#ffffff86]  text-sm rounded-2xl w-full px-4 py-2 cursor-pointer" 
            >
              Create <Icon icon="fxemoji:key" width={20}/>
            </button>
            <button
              onClick={() => setCurrentModalType("importKeyStore")}
              className="flex gap-1 justify-center items-center border dark:border-[#54575a] m-auto mt-1 text-[#6A84A0] hover:text-black hover:dark:text-white  text-sm rounded-2xl w-full px-4 py-2 bg-transparent cursor-pointer" 
            >
              Connect Wallet <Icon icon="fluent:wallet-credit-card-16-regular" width={20}/>
            </button>
          </div>
        </div>
        <div className='absolute -top-8 text-white flex w-full justify-between items-center px-2 pr-8'>
          <div className='flex items-center gap-2 cursor-pointer hover:opacity-50'>
            {/* <Icon icon="icon-park-solid:back" width={20}/> <span className='text-lg font-bold'>Connect Wallets</span> */}
            <Icon icon="fxemoji:key" width={20}/> <span className='text-lg font-bold'>Create Keystore</span>
          </div>
          <div onClick={handleClose}><Icon icon="ic:sharp-close" className='cursor-pointer hover:opacity-50' width={30}/></div>
        </div>
      </div>
    </div>
  )
}

export default CreateKeyStore;
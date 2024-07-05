import React, { InputHTMLAttributes } from 'react';

import { Icon } from '@iconify/react';
import { useAtom } from 'jotai';
import useNotification from '@/hooks/useNotification';
import downloadjs from 'downloadjs';
//@ts-ignore
import { validatePhrase, encryptToKeyStore, generatePhrase, decryptFromKeystore } from "@xchainjs/xchain-crypto";

import {
  currentModalTypeAtom,
  stageAtom
} from '@/store';

// interface PropsType {
//   // setVisible: React.Dispatch<React.SetStateAction<Boolean>>
//   setCurrentModalType: React.Dispatch<React.SetStateAction<String>>
// }

const ImportPhrase = () => {

  const [, setCurrentModalType] = useAtom(currentModalTypeAtom);
  const [, setStage] = useAtom(stageAtom);

  const [phrase, setPhrase] = React.useState<String>("");
  const [words, setWords] = React.useState<String[]>([]);
  const [password, setPassword] = React.useState<String>("");
  const { showNotification } = useNotification();

  const handleClose = () => {
    // setStage("swap");
    setCurrentModalType("");
  }

  const handlePhraseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _phrase = event.target.value;

    const _words: String[] = _phrase.trim().split(" ").filter((item) => /\S/.test(item)).map(item => item.trim());
    setWords(_words);

    setPhrase(_phrase);
  }

  const handleBackup = async () => {
    try {
      if (!phrase) throw "Input phrase to backup.";
      if (words.length !== 12) throw "Invalid phrase, must be 12 words.";
      if (!password) throw "Input password.";
      if (password.length < 6) throw "Password must be at least 6 characters.";

      if (!validatePhrase(phrase as string)) throw "Invalid phrase, Please retry.";

      const keystore = await encryptToKeyStore(phrase as string, password as string).catch((err: any) => {
        console.log("@dew1204/err in creating keystore from phrase ---------------->", err);
        throw "Failed to create keystore from phrase, Please retry.";
      });
      downloadjs(JSON.stringify(keystore, null, 4), "keystore-f7sx-turbo.json");
      showNotification("Successfully recovered KeyStore.", "info");

    } catch (err) {
      showNotification (err, "warning");
      setPassword("");
      // setWords([]);
      // setPhrase("");
    }
  }
  
  return (
    <div>
      <div onClick={handleClose} className="fixed top-0 left-0 right-0 bottom-0 bg-[#0000003d] z-10 backdrop-filter backdrop-blur-[10px]"></div>
      <div className="fixed w-full px-3 sm:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative dark:text-white px-10 py-6 text-center dark:bg-[#232E42] bg-white w-full rounded-2xl">
          <div className='text-left w-full'>
            <div className='px-2'>
              Please Enter Your Seed Phrase
              {/* <Tooltip placement="right" title="Password for recovery"><span className='cursor-pointer text-[8px] px-2'> ?</span></Tooltip> */}
            </div>
            <input
              className="border outline-none border-[#0000001e] dark:border-[#54575a] m-auto mt-1 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-300 block w-full px-4 py-2 bg-transparent dark:placeholder-[#6A84A0] dark:text-white dark:focus:border-[#a8b3bb]" 
              placeholder="Phrase"
              value={phrase as string}
              onChange={handlePhraseChange}
            />
            { words.length !== 12 && words.length !== 0 && <span className='text-red-900 dark:text-red-400 text-[12px] px-5'>Invalid phrase (must be 12 words)</span> }
          </div>
          <div className={`relative flex w-full flex-wrap text-[13px] rounded-2xl bg-[#F3F7FC] dark:bg-[#1f2738] mt-4 p-[6px] ${!phrase && 'hidden'}`}>
            {
              words.map((_word: String, index: number) => 
                <div  key={index + "_phrase"} className='w-1/3 p-[2px]'><div className='w-full p-1 break-words rounded-full bg-white dark:bg-[#232E42]'>{_word}</div></div>
              )
            } 
          </div>

          <div className='text-left w-full mt-6'>
            <div className='px-2'>
              Decrypt Password 
            </div>
            <input
              className="border outline-none border-[#0000001e] dark:border-[#54575a] m-auto mt-1 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-300 block w-full px-4 py-2 bg-transparent dark:placeholder-[#6A84A0] dark:text-white dark:focus:border-[#a8b3bb]" 
              placeholder="Password"
              type='password'
              value={password as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </div>

          <div className='text-left w-full mt-6 flex justify-between gap-3'>
            <button
              onClick={handleBackup}
              className="flex gap-1 justify-center items-center bg-stone-400  dark:bg-[#3C829B] m-auto mt-1 text-white dark:text-[#6A84A0] hover:text-black hover:dark:text-white dark:text-[#ffffff86]  text-sm rounded-2xl w-full px-4 py-2 cursor-pointer" 
            >
              Backup Keystore <Icon icon="fluent:cloud-backup-32-regular" width={20}/>
            </button>
          </div>
        </div>
        <div className='absolute -top-8 text-white flex w-full justify-between items-center px-2 pr-8'>
          <div className='flex items-center gap-2 cursor-pointer hover:opacity-50'>
            {/* <Icon icon="icon-park-solid:back" width={20}/> <span className='text-lg font-bold'>Connect Wallets</span> */}
            <Icon icon="fluent:cloud-backup-32-regular" width={20}/> <span className='text-lg font-bold'>Backup Keystore</span>
          </div>
          <div onClick={handleClose}><Icon icon="ic:sharp-close" className='cursor-pointer hover:opacity-50' width={30}/></div>
        </div>
      </div>
    </div>
  )
}

export default ImportPhrase;
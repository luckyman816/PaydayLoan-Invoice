"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { Dropdown } from "flowbite-react";
import DueDate from "@/../public/images/due-date.png";
//atom from store
import {
  stageAtomHome,
  currentModalTypeAtom,
  isConnectingAtom,
  xClientLoadingAtom,
  xBalancesAtom,
  chainListAtom,
} from "@/store";
//router
import { useRouter } from "next/navigation";
//types
import { ChainType, IWallet } from "@/types/minis";
//data
import { CHAIN_DATA } from "@/utils/data";
import { reduceAmount } from "@/utils/methods";

const Header = () => {
  const router = useRouter();

  const [chainList] = useAtom(chainListAtom);
  //chains that is selected at this moment
  const chains: ChainType[] = React.useMemo(
    () =>
      chainList
        .filter((_chain: ChainType) => _chain.selected)
        .map((_chain: ChainType) => _chain),
    [chainList]
  );

  const [isConnecting] = useAtom(isConnectingAtom);
  const [xBalances] = useAtom(xBalancesAtom);

  const [curBalance, setCurBalance] = React.useState<IWallet | undefined>();

  React.useEffect(() => {
    const keys = Object.keys(xBalances);
    if (keys.length > 0) {
      setCurBalance(xBalances[keys[0]]);
    } else {
      setCurBalance(undefined);
    }
  }, [xBalances]);

  const [visible, setVisible] = React.useState<Boolean>(false);
  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  const [, setStage] = useAtom(stageAtomHome);
  const [, setCurrentModalType] = useAtom(currentModalTypeAtom);

  const handleConnectWallet = () => {
    setStage("wallet");
    setCurrentModalType("");
    router.push("/");
  };

  const _profileButton = () => (
    <div className="cursor-pointer flex gap-2 items-center justify-center rounded-full px-5 py-2 text-4 w-full bg-white dark:bg-black dark:text-white text-black dark:hover:text-[#ccc] hover:text-[#ccc]">
      <div>Wallet:</div>
      <Image
        className="cursor-pointer rounded-full"
        src={
          CHAIN_DATA[curBalance?.chain as string]
            ? (CHAIN_DATA[curBalance?.chain as string].image as string)
            : ""
        }
        width={33}
        height={33}
        alt={"refresh"}
        priority={true}
      />
      <div>
        <div>{String(curBalance?.balance[0].amount).substr(0, 10)}</div>
        <div className="dark:text-[#8D98AF] text-[12px]">
          ${" "}
          {reduceAmount(
            Number(curBalance?.balance[0].amount) *
              Number(curBalance?.balance[0].value)
          )}{" "}
          USD
        </div>
      </div>
      <Icon icon="mdi:keyboard-arrow-down" width={20} />
    </div>
  );

  const _renderProfile = () => (
    <Dropdown label="" renderTrigger={_profileButton}>
      {Object.keys(xBalances).map((key: string, index: number) => (
        <Dropdown.Item
          onClick={() => setCurBalance(xBalances[key])}
          key={"chain_" + index}
          className="flex gap-3"
        >
          <Image
            className="cursor-pointer"
            src={CHAIN_DATA[xBalances[key].chain as string].image}
            width={22}
            height={22}
            alt={"refresh"}
            priority={true}
          />{" "}
          {CHAIN_DATA[xBalances[key].chain as string].name}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
      <Dropdown.Item>
        <Icon icon="tabler:logout" className="mr-2" width={26} />
        Disconnect
      </Dropdown.Item>
    </Dropdown>
  );
  const handleNavigate = (url: string) => {
    router.push(url);
  }
  const _renderLinkItem = (_name: string, _url: string) => (
    <div onClick={() => handleNavigate(_url)}>
      { _name }
    </div>
  )
  const { theme } = useTheme();
  return (
    <div className="bg-white dark:bg-black border-[#e2e2e2] dark:border-[#1c1c1c] border rounded-2xl p-4 px-8">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Image src={DueDate} width={50} height={50} alt={"logo"}/>
          <div className="text-white text-2xl">Payday Loan</div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="text-white text-xl hover:border-b-2 border-white cursor-pointer">{_renderLinkItem("Home", "/")}</div>
          <div className="text-white text-xl hover:border-b-2 border-white cursor-pointer">{_renderLinkItem("Employers", "/")}</div>
          <div className="text-white text-xl hover:border-b-2 border-white cursor-pointer">{_renderLinkItem("Users", "/")}</div>
          <div className="text-white text-xl hover:border-b-2 border-white cursor-pointer">{_renderLinkItem("Roadmap", "/")}</div>
          <div className="text-white text-xl hover:border-b-2 border-white cursor-pointer">{_renderLinkItem("Whitepaper", "/")}</div>
        </div>
        <div
          className="flex xs:hidden items-center justify-center cursor-pointer"
          onClick={handleToggle}
        >
          <Icon
            icon="ph:list"
            className="dark:text-white text-black"
            height={30}
          />
        </div>
        <div className={`items-center hidden xs:flex xs:w-auto`}>
          <div className="rounded-full p-[1px] bg-gradient-to-r w-full from-[#2B66F6] to-[#4CA7F8]">
            {!curBalance ? (
              <button
                onClick={handleConnectWallet}
                className="flex gap-2 items-center justify-center rounded-full px-5 py-2 text-4 w-full bg-white dark:bg-black dark:text-white text-black dark:hover:text-[#ccc] hover:text-[#ccc]"
              >
                {isConnecting ? (
                  <>
                    Connecting <Icon icon="eos-icons:bubble-loading" />
                  </>
                ) : (
                  "Connect Wallet"
                )}
              </button>
            ) : (
              _renderProfile()
            )}
          </div>
        </div>
      </div>
      <div
        className={`mt-5 w-full inline-block xs:hidden ${!visible && "hidden"}`}
      >
        <div className="rounded-full p-[1px] bg-gradient-to-r w-full from-[#2B66F6] to-[#4CA7F8]">
          {!curBalance ? (
            <button
              onClick={handleConnectWallet}
              className="flex gap-2 items-center justify-center rounded-full px-5 py-2 text-4 w-full bg-white dark:bg-black dark:text-white text-black dark:hover:text-[#ccc] hover:text-[#ccc]"
            >
              {isConnecting ? (
                <>
                  Connecting <Icon icon="eos-icons:bubble-loading" />
                </>
              ) : (
                "Connect Wallet"
              )}
            </button>
          ) : (
            _renderProfile()
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

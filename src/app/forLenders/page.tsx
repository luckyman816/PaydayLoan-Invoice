"use client";
import { useState } from "react";
import Image from "next/image";
import ManageLoanOffers from "./pages/manageLoanOffers";
import MonitorLoan from "./pages/monitorLoan";
import TrackRepayments from "./pages/trackRepayments";
enum Page {
  ManageLoanOffers = 1,
  MonitorLoan = 2,
  TrackRepayments = 3,
}
const Lenders = () => {
  const [page, setPage] = useState<Page>(Page.ManageLoanOffers);
  const showPage = () => {
    console.log(page);
    switch (page) {
      case Page.ManageLoanOffers:
        return <ManageLoanOffers />;
      case Page.MonitorLoan:
        return <MonitorLoan />;
      case Page.TrackRepayments:
        return <TrackRepayments />;
    }
  };
  return (
    <div className="flex flex-row mt-10 w-full gap-5">
      <div className="w-1/5 small-screen-sidebar xxsmall-screen-sidebar">
        <div className=" relative dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl h-[80vh]">
          <img
            src={"/images/navbar/debt.png"}
            alt={"logo"}
            className=" absolute bottom-[15%] left-[50%] translate-x-[-50%] w-[80%] small-screen-img"
          />
          <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full xxsmall-screen-padding-none">
            <div className="flex flex-row justify-start items-center small-screen-col text-white text-2xl xxsmall-screen-padding-none">
              <img
                src={"/images/navbar/debt.png"}
                // width={25}
                // height={25}
                alt={"logo"}
                className="xxsmall-screen-margin-top w-[30px]"
              />
              <div className="small-screen-none">&nbsp;</div>
              <div className="small-screen-text xxsmall-screen-margin-bottom text-center">For Lenders</div>
            </div>
            <ul className="text-white text-md mt-5">
              <li
                className="m-[20px_5px]"
                onClick={() => setPage(Page.ManageLoanOffers)}
              >
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div
                    className={`bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start small-screen-col xxsmall-screen-padding-none items-center gap-3 ${
                      page == Page.ManageLoanOffers
                        ? `border-b-2 border-[rgba(89,200,255,0.8)]`
                        : ``
                    }`}
                  >
                    <img
                      src={"/images/sidebar/loan-offer.png"}
                      // width={25}
                      // height={25}
                      alt={"logo"}
                      className="w-[30px] h-[30px]"
                    />
                    <div className="small-screen-text text-center">Manage Loan Offers</div>
                  </div>
                </div>
              </li>
              <li
                className="m-[20px_5px]"
                onClick={() => setPage(Page.MonitorLoan)}
              >
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div
                    className={`bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start small-screen-col xxsmall-screen-padding-none items-center gap-3 ${
                      page == Page.MonitorLoan
                        ? `border-b-2 border-[rgba(89,200,255,0.8)]`
                        : ``
                    }`}
                  >
                    <img
                      src={"/images/sidebar/monitor-loan.png"}
                      // width={25}
                      // height={25}
                      alt={"logo"}
                      className="w-[30px] h-[30px]"
                    />
                    <div className=" small-screen-text text-center">
                      Monitor Loan Distursements
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="m-[20px_5px]"
                onClick={() => setPage(Page.TrackRepayments)}
              >
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div
                    className={`bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start small-screen-col xxsmall-screen-padding-none items-center gap-3 ${
                      page == Page.TrackRepayments
                        ? `border-b-2 border-[rgba(89,200,255,0.8)]`
                        : ``
                    }`}
                  >
                    <img
                      src={"/images/sidebar/track-payment.png"}
                      // width={25}
                      // height={25}
                      alt={"logo"}
                      className="w-[30px] h-[30px]"
                    />
                    <div className="small-screen-text text-center">Track Repayments</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-black border-[#e2e2e2] dark:border-[#1c1c1c] border rounded-2xl p-4 px-8 min-h-[70vh] w-4/5">
        <div className="mt-7 flex flex-col gap-5">
          <div className="text-white border-white cursor-pointer">
            {showPage()}
          </div>
        </div>
      </div>
      {/* <div className="w-4/5 text-white">
        <div className="px-5 w-full">
          
        </div>
      </div> */}
    </div>
  );
};

export default Lenders;

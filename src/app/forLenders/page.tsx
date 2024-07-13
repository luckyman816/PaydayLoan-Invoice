'use client'
import { useState } from 'react'
import Image from "next/image";
import ManageLoanOffers from './pages/manageLoanOffers';
import MonitorLoan from './pages/monitorLoan';
import TrackRepayments from './pages/trackRepayments';
enum Page {
    ManageLoanOffers = 1,
    MonitorLoan = 2,
    TrackRepayments = 3,
}
const Lenders = () => {
    const [page, setPage] = useState<Page>(Page.ManageLoanOffers);
    const showPage = () => {
        console.log(page)
        switch (page) {
            case Page.ManageLoanOffers:
                return <ManageLoanOffers />;
            case Page.MonitorLoan:
                return <MonitorLoan />;
            case Page.TrackRepayments:
                return <TrackRepayments />;
        }
    }
    return (
        <div className="flex flex-row mt-10 w-full gap-5">
      <div className="w-1/5">
        <div className=" relative dark:bg-gradient-to-tr dark:from-[#FF6A00] dark:via-[#10152E] dark:to-[#F81969] p-[1px] rounded-2xl h-[70vh]">
            <Image
              src={"/images/navbar/debt.png"}
              width={200}
              height={200}
              alt={"logo"}
              className=' absolute bottom-[15%] left-[50%] translate-x-[-50%] max-w-[250px] max-h-[250px]'
            />
          <div className="bg-white dark:bg-black rounded-2xl p-6 w-full h-full">
            <div className="flex flex-row justify-start items-center text-white text-2xl">
              <Image
                      src={"/images/navbar/debt.png"}
                      width={25}
                      height={25}
                      alt={"logo"}
                    />
                    &nbsp; For Lenders
            </div>
            <ul className="text-white text-md mt-5">
              <li className="" onClick={() => setPage(Page.ManageLoanOffers)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className="bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start items-center gap-3">
                    <Image
                      src={"/images/sidebar/loan-offer.png"}
                      width={25}
                      height={25}
                      alt={"logo"}
                    />
                    <div className="">Manage Loan Offers</div>
                  </div>
                </div>
              </li>
              <li className="" onClick={() => setPage(Page.MonitorLoan)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className="bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start items-center gap-3">
                    <Image
                      src={"/images/sidebar/monitor-loan.png"}
                      width={25}
                      height={25}
                      alt={"logo"}
                    />
                    <div className=" ">Monitor Loan Distursements</div>
                  </div>
                </div>
              </li>
              <li className="" onClick={() => setPage(Page.TrackRepayments)}>
                <div className="rounded-2xl p-[1px] cursor-pointer transition-all hover:bg-gradient-to-tr hover:scale-[1.04]  hover:to-[#295e55] hover:via-[#3c54cf]">
                  <div className="bg-white dark:bg-black rounded-2xl p-3 pl-5 w-full h-full hover:opacity-80 flex justify-start items-center gap-3">
                    <Image
                      src={"/images/sidebar/track-payment.png"}
                      width={25}
                      height={25}
                      alt={"logo"}
                    />
                    <div className="">Track Repayments</div>
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
}

export default Lenders;

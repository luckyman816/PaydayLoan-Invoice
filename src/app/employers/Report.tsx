/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import reportData from "./report.json";
const Report = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    setCurrentPage(0); // Set the initial state
  }, []);
  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reportData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  return (
    <div className="bg-white dark:bg-black border-[#e2e2e2] dark:border-[#1c1c1c] border rounded-2xl p-4 px-8 min-h-[70vh] w-full">
      <div className="mt-7 flex flex-col gap-5">
        <div className="text-white border-white cursor-pointer pl-8 pr-5">
          <div className="mt-8 flex flex-col gap-3 w-full">
            <div className="   right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl" style={{ fontFamily:"medium"}} >
              Report
            </div>
            <div className="flex flex-row w-full justify-between items-center xxsmall-screen-col">
              <div>
                <select className="bg-transparent rounded-lg ring-0 outline-none focus:right-0">
                  <option value="1" className=" bg-black p-2">
                    1
                  </option>
                  <option value="2" className=" bg-black">
                    2
                  </option>
                  <option value="3" className=" bg-black">
                    3
                  </option>
                  <option value="4" className=" bg-black">
                    4
                  </option>
                </select>
              </div>
              <div className=" relative">
                <input
                  className=" outline-none transition-all focus:border-[#1C64F1] border border-[#777] bg-transparent p-3 rounded-lg"
                  placeholder="Search..."
                />
                <img
                  src="/images/icons/search.png"
                  alt=""
                  className="absolute h-1/2 right-0 top-[50%] translate-y-[-50%] translate-x-[-50%]"
                />
              </div>
            </div>
            <div className="w-full h-[50vh] overflow-y-auto">
              <table className=" w-full ">
                <thead className=" sticky top-0  w-full bg-black shadow-[0_0_2px_1px_rgba(89,200,255,0.8)]">
                  <tr className=" text-left " style={{ fontFamily:"medium", fontSize:"16px"}}>
                    <th className="p-3">User Name</th>
                    <th className="p-3">User Address</th>
                    <th className="p-3">Employer Name</th>
                    <th className="p-3">Employer Address</th>
                    <th className="p-3">Repayment Status</th>
                    <th className="p-3">Loan Amount</th>
                    <th className="p-3">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-[#4796d64f] transition-all ${
                        index % 2 === 0 ? "bg-[#0f0f0f4f]" : "bg-[#1f1f1f48]"
                      } `}
                    >
                      <td className="p-3">{item.UserName}</td>
                      <td className="p-3">{item.UserAddress}</td>
                      <td className="p-3">{item.EmployerName}</td>
                      <td className="p-3">{item.EmployerAddress}</td>
                      <td className="p-3">{item.RepaymentStatus}</td>
                      <td className="p-3">{item.LoanAmount}</td>
                      <td className="p-3">{item.DueDate}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className=" sticky bottom-[-5px]  bg-black shadow-[0_0_2px_1px_rgba(89,200,255,0.8)]">
                  <tr className="">
                    <td className="p-3" colSpan={6}>
                      asdf
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="flex justify-center items-center p-3">
              <ReactPaginate
                activeLinkClassName="active border border-[#1C64F1] text-white p-3 transition-all rounded-md"
                previousLinkClassName="borde border-[#1C64F1] transition-all"
                className="flex flex-row gap-5 p-3"
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={Math.ceil(14 / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousClassName="text-[#1C64F1]"
                nextClassName="text-[#1C64F1]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

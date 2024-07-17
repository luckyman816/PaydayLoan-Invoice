/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const FIELD = [
  "Employer name",
  "User name",
  "Loan amount",
  "Interest rate",
  "Repayment period",
  "Monthly net salary",
  "Monthly installments",
  "Total Amount",
];

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    setCurrentPage(0); // Set the initial state
  }, []);
  const handlePageClick = (data: any ) => {
    setCurrentPage(data.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="w-full px-5  relative">
      <div className="w-full  ">
        <div className="flex flex-row justify-between xxsmall-screen-col p-3">
          <div>
            <select className="text-white rounded-lg bg-transparent border border-[#777]">
              <option className="bg-[#030303] p-9">5</option>
            </select>
          </div>
          <div className=" relative">
            <input
              className=" outline-none border border-[#777] bg-transparent p-3 rounded-lg"
              placeholder="Search..."
            />
            <img
              src="/images/icons/search.png"
              alt=""
              className="absolute h-1/2 right-0 top-[50%] translate-y-[-50%] translate-x-[-50%]"
            />
          </div>
        </div>
       
        <div className="h-[490px] overflow-y-scroll">
          <table className="bg-[rgba(0,0,0,0.7)] w-full relative">
            <thead className="sticky top-0 w-full border-none bg-[#103028]">
              {FIELD.map((item, index) => (
              <th className="text-center p-3 text-[#DDD] bg-[#103028]" key={index}>
                {item}
              </th>
            ))}
            </thead>
            <tbody>
            {currentItems.map((item, index) => (
              <tr
                className={index % 2 ? "bg-[rgba(255,255,255,0.02)]" : ""}
                key={index}
              >
                <td className="text-center p-3 text-[#DDD]">{item}</td>
                <td className="text-center p-3 text-[#DDD]">{item}</td>
                <td className="text-center p-3 text-[#DDD]">{item}</td>
                <td className="text-center p-3 text-[#DDD]">{item}</td>
                <td className="text-center p-3 text-[#DDD]">{item}</td>
                <td className="text-center p-3 text-[#DDD]">{item}</td>
                <td className="text-center p-3 text-[#DDD]">{item}</td>
                <td className="text-center p-3 text-[#DDD]">{item}</td>
              </tr>
            ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <div className="flex justify-center items-center p-3">
          <ReactPaginate
            activeLinkClassName="active border border-[#1C64F1] text-white p-3"
            previousLinkClassName="borde border-[#1C64F1]"
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
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

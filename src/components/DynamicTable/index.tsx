import React, { useState } from "react";
import Modal from "./modal";
import tableData from "./data.json";


interface TableRow {
  id: number;
  Users_Name: string;
  employmentStatus: string;
  duration: string;
  monthly: string;
  address: string;
  loanAmount: string;
  commitmentStatus: string;
  notification: number;
}

const DynamicTable: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<TableRow>({
    id: 0,
    Users_Name: "",
    employmentStatus: "",
    duration: "",
    monthly: "",
    address: "",
    loanAmount: "",
    commitmentStatus: "",
    notification: 0,
  });

  return (
    <>
      <div className="bg-white dark:bg-black border-[#e2e2e2] dark:border-[#1c1c1c] border rounded-2xl p-4 px-8 h-[80vh] w-full">
        <div className="flex flex-col gap-3 h-full w-full pl-8 mt-14">
          <div className=" right-6 bottom-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl"  style={{ fontFamily:"poppins"}}>
            Dashboard
          </div>
          <div className=" w-full h-[80%] overflow-y-auto ">
            <table className="rounded-xl  border-none w-[95%]">
              <thead className="bg-black dark:bg-black sticky top-0 z-10 ">
                <tr style={{ fontFamily:"spicy", fontSize:"16px"}}>
                  <th className="px-6 py-6 text-left font-medium text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-6 text-left font-medium text-white uppercase tracking-wider">
                    User Name
                  </th>
                  <th className="px-6 py-6 text-left font-medium text-white uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-6 text-left font-medium text-white uppercase tracking-wider">
                    loan amount
                  </th>
                  <th className="px-6 py-6 text-left font-medium text-white uppercase tracking-wider">
                    Contract Duration
                  </th>
                  <th className="px-6 py-6 text-left font-medium text-white uppercase tracking-wider">
                    Commitment Status
                  </th>
                  <th className="px-6 py-6 text-left font-medium text-white uppercase tracking-wider max-w-2">
                    Loan Status
                  </th>
                </tr>
                <tr className=" absolute bottom-0 w-full z-50 border-[rgba(89,200,255,0.8)] border-[1px]"></tr>
              </thead>
              <tbody className="bg-black dark:bg-black divide-y divide-gray-200 border-none relative">
                {tableData.map((row) => (
                  <>
                    <tr
                      key={row.id}
                      // className="hover:bg-gray-700 dark:hover:bg-gray-700 border-none cursor-pointer"
                      className={`hover:bg-[#4796d64f] transition-all border-none cursor-pointer ${
                        row.id % 2 === 0 ? "bg-[#0f0f0f4f]" : "bg-[#1f1f1f48]"
                      } `}
                      onClick={() => {
                        setData(row);
                        setShowModal(true);
                      }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {row.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {row.Users_Name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {row.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {row.loanAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {row.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {row.commitmentStatus}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {row.notification ? (
                          row.notification == 1 ? (
                            <div className={`ml-5 text-xl`}>👍</div>
                          ) : (
                            <div className={`ml-5 text-xl`}>🚫</div>
                          )
                        ) : (
                          <div className={`ml-5 text-xl`}>⏳</div>
                        )}
                      </td>
                    </tr>
                  </>
                  // ✅💚🚫⏳👌👍
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} data={data} />
    </>
  );
};

export default DynamicTable;

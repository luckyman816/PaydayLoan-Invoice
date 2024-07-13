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
        <div className="mt-7 w-full h-[90%] overflow-y-auto ">
          <table className="rounded-xl  border-none w-[95%] ">
            <thead className="bg-black dark:bg-black sticky top-0 z-10 ">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  User's Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  loan amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Commitment Status
                </th>
              </tr>
              <tr className=" absolute bottom-0 w-full z-50 border-[white] border-[1px]"></tr>
            </thead>
            <tbody className="bg-black dark:bg-black divide-y divide-gray-200 border-none relative">
              {tableData.map((row) => (
                <>
                  <tr
                    key={row.id}
                    className="hover:bg-gray-700 dark:hover:bg-gray-700 border-none cursor-pointer"
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
                    <td className="px-6 py-4 whitespace-nowrap text-white flex">
                      <div className="flex justify-between w-[50%]">
                        {row.commitmentStatus}
                        {row.notification ? (
                          row.notification == 1 ? (
                            <div
                              className={`w-3 h-3 relative top-2 right-[-60px] `}
                            >
                              👍
                            </div>
                          ) : (
                            <div
                              className={`w-3 h-3 relative top-2 right-[-60px] `}
                            >
                              🚫
                            </div>
                          )
                        ) : (
                          <div
                            className={`w-3 h-3 relative top-2 right-[-60px] `}
                          >
                            ⏳
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                </>
                // ✅💚🚫⏳👌👍
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} data={data} />
    </>
  );
};

export default DynamicTable;

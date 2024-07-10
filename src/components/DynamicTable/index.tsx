import React from 'react';

interface TableRow {
    id: number;
    name: string;
    address: string;
    officialEmail: string;
    commitmentStatus: string;
    notification:boolean;
  }

const DynamicTable: React.FC = () => {



    const tableData: TableRow[] = [
        { id: 1, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:true },
        { id: 2, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        { id: 3, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 4, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        { id: 5, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 6, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        { id: 7, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 8, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        { id: 9, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 10, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:true },
        { id: 11, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 12, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        { id: 13, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 14, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        { id: 15, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 16, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:true },
        { id: 17, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 18, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        { id: 19, name: 'John Doe', address: '123 Main St', officialEmail: 'john.doe@example.com', commitmentStatus: 'Active', notification:false },
        { id: 20, name: 'Jane Smith', address: '456 Elm St', officialEmail: 'jane.smith@example.com', commitmentStatus: 'Inactive', notification:false },
        // Add more data as needed
    ];

  return (
    <div className="mt-7 w-full h-[90%] overflow-y-auto">
        <table className=" divide-y divide-gray-200 border-none w-[95%]">
          <thead className="bg-black dark:bg-black sticky top-0 border-b-2 border-white z-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Official Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Commitment Status</th>
            </tr>
          </thead>
          <tbody className="bg-black dark:bg-black divide-y divide-gray-200 border-none  ">
            {tableData.map((row) => (
              <>
                <tr key={row.id} className="hover:bg-gray-700 dark:hover:bg-gray-700 border-none cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap text-white">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-white">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-white">{row.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-white">{row.officialEmail}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-white flex">{row.commitmentStatus} <div className={`w-3 h-3 rounded-full ${row.notification?`bg-red-700`:``} border-none relative top-2 right-[-60px] `}></div></td>
                  
                </tr>
              </>
              
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default DynamicTable;
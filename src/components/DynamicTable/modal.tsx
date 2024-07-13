"use client"
import React, { useState, useEffect } from "react";
import tabledata from "./data.json";

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

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: TableRow;
}



const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, data }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(showModal);
  const [modalData, setModalData] = useState<TableRow>(
    {
        id: 0,
        Users_Name: "",
        employmentStatus:"",
        duration:"",
        monthly:"",
        address: "",
        loanAmount: "",
        commitmentStatus: "",
        notification: 0
      },
  );

  useEffect(() => {
    setModalVisible(showModal);
    // const data = tabledata.filter((item)=> item.id == dataId);
    // setModalData(data[0]);
    // console.log(modalData);
    
  }, [showModal]);

  const handleFunc = (type:number)=>{
    tabledata[data.id - 1].notification = type;
    closeModal();
  }

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setShowModal(false);
    }, 500); // Adjust the timing based on your transition duration
  };
  
    var modal = document.getElementById("dashModalContent");
    window.onclick= function(event) {
        if (event.target == modal) {
            closeModal(); // Adjust the timing based on your transition duration
        }
      }

  return (
    <div className={`transition-opacity duration-500 ${showModal ? 'fixed' : ' hidden'} ${modalVisible ? 'opacity-100' : ' opacity-0'} inset-0   z-20`} aria-labelledby="modal-title" role="dialog" aria-modal={modalVisible}>
      <div  className={`bg-opacity-75 transition-opacity duration-500 ${showModal ? 'fixed' : ' hidden'} ${modalVisible ? 'opacity-100' : ' opacity-0'} inset-0 bg-gray-500  z-20`} aria-hidden={!modalVisible}></div>
      <div  className={`transition-opacity duration-500 ${showModal ? 'fixed' : ' hidden'} ${modalVisible ? 'opacity-100' : ' opacity-0'} inset-0  w-screen overflow-y-auto  z-20`}>
        <div id="dashModalContent" className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 z-50">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                <div className="text-3xl text-center mt-5">Detail Datas</div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              
                <div className="flex flex-row w-full mt-3 mb-3 items-center  text-center sm:ml-4 sm:mt-0 sm:text-left ">
                        {/* <div className=""></div> */}
                        <h3 className="text-base font-semibold leading-6 text-gray-900 w-[65%]" id="modal-title">User's Name:</h3>
                        <p className="text-sm text-gray-500 ml-5">{data.Users_Name}</p>
                </div>
                <div className="flex flex-row w-full mt-3 mb-3 items-center  text-center sm:ml-4 sm:mt-0 sm:text-left ">
                        {/* <div className=""></div> */}
                        <h3 className="text-base font-semibold leading-6 text-gray-900 w-[65%]" id="modal-title">Employment Status:</h3>
                        <p className="text-sm text-gray-500 ml-5">{data.employmentStatus}</p>
                </div>
                <div className="flex flex-row w-full mt-3 mb-3 items-center text-center sm:ml-4 sm:mt-0 sm:text-left ">
                        {/* <div className=""></div> */}
                        <h3 className="text-base font-semibold leading-6 text-gray-900 w-[65%]" id="modal-title">Duration of employement contract:</h3>
                        <p className="text-sm text-gray-500 ml-5">{data.duration}</p>
                </div>
                <div className="flex flex-row w-full mt-3 mb-3 items-center  text-center sm:ml-4 sm:mt-0 sm:text-left ">
                        {/* <div className=""></div> */}
                        <h3 className="text-base font-semibold leading-6 text-gray-900 w-[65%]" id="modal-title">Monthly Net Salary:</h3>
                        <p className="text-sm text-gray-500 ml-5">{data.monthly}</p>
                </div>
                <div className="flex flex-row w-full mt-3 mb-3 items-center  text-center sm:ml-4 sm:mt-0 sm:text-left ">
                        {/* <div className=""></div> */}
                        <h3 className="text-base font-semibold leading-6 text-gray-900 w-[65%]" id="modal-title">The Requested loan amount:</h3>
                        <p className="text-sm text-gray-500 ml-5">{data.loanAmount}</p>
                </div>
              
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" onClick={()=>handleFunc(1)} className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Accept</button>
              <button type="button" onClick={()=>handleFunc(0)} className="inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto">Standby</button>
              <button type="button" onClick={()=>handleFunc(2)} className="inline-flex w-full justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Fail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
"use client"
import React, { useState, useEffect } from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  dataId: number;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, dataId }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(showModal);

  useEffect(() => {
    setModalVisible(showModal);
  }, [showModal]);

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setShowModal(false);
    }, 700); // Adjust the timing based on your transition duration
  };

  return (
    <div className={`transition-opacity duration-500 ${showModal ? 'fixed' : ' hidden'} ${modalVisible ? 'opacity-100' : ' opacity-0'} inset-0   z-20`} aria-labelledby="modal-title" role="dialog" aria-modal={modalVisible}>
      <div className={`bg-opacity-75 transition-opacity duration-500 ${showModal ? 'fixed' : ' hidden'} ${modalVisible ? 'opacity-100' : ' opacity-0'} inset-0 bg-gray-500  z-20`} aria-hidden={!modalVisible}></div>
      <div className={`transition-opacity duration-500 ${showModal ? 'fixed' : ' hidden'} ${modalVisible ? 'opacity-100' : ' opacity-0'} inset-0  w-screen overflow-y-auto  z-20`}>
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" onClick={closeModal} className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Accept</button>
              <button type="button" onClick={closeModal} className="inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto">Standby</button>
              <button type="button" onClick={closeModal} className="inline-flex w-full justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Fail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
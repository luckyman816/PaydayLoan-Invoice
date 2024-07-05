"use client";
import React from "react";

const Home = () => {
  return (
    <div className="flex-grow flex justify-center items-center gap-8">
      <div
        className="flex flex-col bg-[black] px-10 pt-5 pb-10 rounded-[10px] gap-5"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(255, 140, 0, 0.4), 0 6px 20px 0 rgba(255, 140, 0, 0.4)",
        }}
      >
        <div className="flex gap-3 justify-start items-center border-b border-[grey] p-3">
          <h2 className="text-white text-sm">Customer Information</h2>
        </div>
        <div className="flex gap-10 w-[30vw]">
          <div className="flex flex-col gap-1 w-[14vw]">
            <label className="text-[white] text-sm">
              Recipient full name *
            </label>
            <input
              type="text"
              className="bg-[#1F1F1F] rounded-[8px] text-[white] text-sm"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-1 w-[14vw]">
            <label className="text-[white] text-sm">Recipient email *</label>
            <input
              type="text"
              className="bg-[#1F1F1F] rounded-[8px] text-[white] text-sm"
              placeholder="receiver@email.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[30vw]">
          <label className="text-[white] text-sm">Address *</label>
          <select
            name="country"
            id=""
            className="rounded-[8px] bg-[#1F1F1F] text-white text-sm"
          >
            <option value="USA">United States</option>
            <option value="USA">United Kingdom</option>
            <option value="USA">Switzerland</option>
            <option value="USA">Norway</option>
            <option value="USA">Germany</option>
            <option value="USA">Finland</option>
            <option value="USA">France</option>
          </select>
          <input
            type="text"
            className="bg-[#1F1F1F] rounded-[8px] text-[white] text-sm"
            placeholder="Street, City"
          />
        </div>
        <div className="flex gap-2 w-[30vw]">
          <div className="flex flex-col gap-1 w-[10vw]">
            <label className="text-[white] text-sm">
              Recipient full name *
            </label>
            <input
              type="text"
              className="bg-[#1F1F1F] rounded-[8px] text-[white] text-sm"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-1 w-[9vw]">
            <label className="text-[white] text-sm">Company *</label>
            <input
              type="text"
              className="bg-[#1F1F1F] rounded-[8px] text-[white] text-sm"
              placeholder="company"
            />
          </div>
          <div className="flex flex-col gap-1 w-[10vw]">
            <label className="text-[white] text-sm">Recipient email *</label>
            <input
              type="text"
              className="bg-[#1F1F1F] rounded-[8px] text-[white] text-sm"
              placeholder="receiver@email.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-sm">Invoice Items</h3>
          <div className="flex gap-3">
            <div className="flex flex-col gap-1 w-[10vw]">
              <label className="text-[white] text-sm">Item *</label>
              <input
                type="text"
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
              />
            </div>
            <div className="flex flex-col gap-1 w-[6vw]">
              <label className="text-[white] text-sm">Price *</label>
              <input
                type="number"
                value={0}
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
              />
            </div>
            <div className="flex flex-col gap-1 w-[6vw]">
              <label className="text-[white] text-sm">Quantity *</label>
              <input
                type="number"
                value={1}
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
              />
            </div>
            <div className="flex flex-col gap-1 w-[6vw]">
              <label className="text-[white] text-sm">Total Price *</label>
              <input
                value={0}
                type="number"
                className="bg-[#1F1F1F] rounded-[8px] text-[white]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-white text-sm">Subtotal</h3>
          <h3 className="text-white text-sm">$0.00</h3>
        </div>
        <div className="flex justify-between items-center border-[grey] border-b">
          <h3 className="text-white text-sm">Value added tax</h3>
          <h3 className="text-white text-sm">$0.00</h3>
        </div>
        <div className="flex justify-between items-center text-sm">
          <h3 className="text-white text-sm">Total due</h3>
          <h3 className="text-white text-sm">$0.00</h3>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-sm">Note:</h3>
          <textarea
            name="note"
            id=""
            className="text-white bg-[#1F1F1F] text-sm rounded-[8px]"
            rows={3}
          ></textarea>
        </div>
      </div>
      <div
        className="flex flex-col bg-[#171717] px-10 pt-5 pb-10 rounded-[10px] gap-5"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 170, 255, 0.4), 0 6px 20px 0 rgba(0, 170, 255, 0.4)",
        }}
      >
        <div className="border-b border-[grey] flex flex-col justify-start">
          <h3 className="text-sm text-white">Invoice</h3>
        </div>
        <div className="bg-[black] w-[30vw] p-5">
          <div className="flex flex-col gap-5">
            <div className="flex justify-start">
              <div className="w-[50%]">
                <h2 className="text-white text-sm">Invoice From</h2>
              </div>
              <div className="w-[50%]">
                <h2 className="text-white text-sm">Invoice To</h2>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="w-[50%]">
                <h2 className="text-white text-sm">Dev Admin</h2>
                <h2 className="text-white text-sm">06273817</h2>
                <h2 className="text-white text-sm">devadmin@gmail.com</h2>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-6 p-2">
              <h2 className="text-white text-sm">Invoice Items</h2>
              <div className="flex flex-col">
                <div className="flex justify-start items-center w-[25vw] bg-[#202020] p-3">
                  <h2 className="text-white text-sm w-[60%]">Price</h2>
                  <h2 className="text-white text-sm w-[20%]">Qty</h2>
                  <h2 className="text-white text-sm w-[20%]">Total Price</h2>
                </div>
                <div className="flex justify-start items-center w-[25vw] p-3 border-[#202020] border">
                  <h2 className="text-white text-sm w-[60%]">$0.00</h2>
                  <h2 className="text-white text-sm w-[20%]">1</h2>
                  <h2 className="text-white text-sm w-[20%]">$0.00</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-b border-[grey] pb-1">
              <h2 className="text-white text-sm">Value Added Tax %</h2>
              <h2 className="text-white text-sm">$0.00</h2>
            </div>
            <div className="flex justify-between border-b border-[grey] pb-1">
              <h2 className="text-white text-sm">Invoice Amount</h2>
              <h2 className="text-white text-sm">$0.00</h2>
            </div>
            <div className="flex justify-between border-b border-[grey] pb-1">
              <h2 className="text-white text-sm">Total due</h2>
              <h2 className="text-white text-sm">$0.00</h2>
            </div>
            <button type="button" className="text-white bg-[#1689B2] h-10  rounded-[12px]">
              Pay the Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import allsummaryData from "./allsummaryData";
import Allsummaryprop from "./allsummaryProp";

export default function Allsummary() {
    const allsummary = allsummaryData.map(item => {
        return (
            <div>
                <Allsummaryprop
                    allsummaryImage={item.allsummaryImage}
                    allsummaryName={item.allsummaryName}
                    allsummaryNumber={item.allsummaryNumber}
                    allsummaryDate={item.allsummaryDate}
                    allsummaryPayment={item.allsummaryPayment}
                    allsummaryCharge={item.allsummaryCharge}
                    allsummaryStatus={item.allsummaryStatus}
                />
            </div>
        )
    })

    return (
        <div className="grid gap-10">
            <div className="flex justify-between">
                <div className="flex gap-5 mt-3">
                    <p className="font-bold">All Summary</p>
                    <button className="border rounded-sm h-7 w-24 text-[#06B496] bg-[#CEFDF5] border-[#06B496]">Delivered</button>
                    <button className="border rounded-sm h-7 w-24 text-[#D26709] bg-[#FDE4CE] border-[#D26709]">Pending</button>
                    <button className="border rounded-sm h-7 w-24 text-[#344ED1] bg-[#CFE2FC] border-[#344ED1]">Picked</button>
                    <button className="border rounded-sm h-7 w-24 text-[#ED1C24] bg-[#FBD0D1] border-[#ED1C24]">Canceled</button>
                </div>
                <input type="text" name="search" placeholder="Search..." className="rounded-xl w-56 p-3 border border-gray-300 outline-none"/>
            </div>
            <div className="grid gap-10 bg-white p-5 rounded-xl">
                <div className="flex justify-between">
                    <p className="font-bold w-1/5">Customer Name</p>
                    <p className="font-bold w-1/12">ID Number</p>
                    <p className="font-bold w-1/12">Date</p>
                    <p className="font-bold w-1/12">Payment</p>
                    <p className="font-bold w-1/12">Charge</p>
                    <p className="font-bold w-[10%]">Assign Status</p>
                </div>
                <div className="grid gap-10">
                    {allsummary}
                </div>
            </div>
        </div>
    )
}
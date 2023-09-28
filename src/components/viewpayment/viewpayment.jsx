import React from "react";
import viewpaymentData from "./viewpaymentData";
import Viewpaymentprop from "./viewpaymentProps";

export default function Viewpayment() {
    const viewpayment = viewpaymentData.map(item => {
        return (
            <div>
                <Viewpaymentprop
                    viewpaymentNumber={item.viewpaymentNumber}
                    viewpaymentDate={item.viewpaymentDate}
                    viewpaymentCash={item.viewpaymentCash}
                    viewpaymentDelivery={item.viewpaymentDelivery}
                    viewpaymentAmount={item.viewpaymentAmount}
                />
            </div>
        )
    })

    return (
        <div className="grid gap-10">
            <div className="flex justify-between">
                <p className="mt-3 font-bold">View Payment</p>
                <input type="text" name="search" placeholder="Search..." className="rounded-xl w-56 p-3"/>
            </div>
            <div className="grid gap-10 bg-white p-5 rounded-xl">
                <div className="flex justify-between">
                    <p className="font-bold w-[23%]">ID Number</p>
                    <p className="font-bold w-[23%]">Date</p>
                    <p className="font-bold w-[23%]">Cash Collection</p>
                    <p className="font-bold w-[23%]">Delivery Charge</p>
                    <p className="font-bold w-[10%]">Amount Paid</p>
                </div>
                <div className="grid gap-10">
                    {viewpayment}
                </div>
            </div>
        </div>
    )
}
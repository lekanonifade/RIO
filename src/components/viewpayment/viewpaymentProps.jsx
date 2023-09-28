import React from "react";

export default function Viewpaymentprop(props) {
    return (
        <div className="flex justify-between">
            <p className="w-[23%]">{props.viewpaymentNumber}</p>
            <p className="w-[23%]">{props.viewpaymentDate}</p>
            <p className="w-[23%]">${props.viewpaymentCash}</p>
            <p className="w-[23%]">${props.viewpaymentDelivery}</p>
            <p className="w-[10%]">${props.viewpaymentAmount}</p>
        </div>
    )
}
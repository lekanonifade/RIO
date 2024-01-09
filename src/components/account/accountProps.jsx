import React from "react";

export default function Accountprop(props) {
    return (
        <div className="">
            <p className="p-1">{props.accountTitle}</p>
            <input type="text" placeholder={props.accountPlaceholder} className="border border-gray-300 outline-none rounded-xl w-full h-10 p-3"/>
        </div>
    )
}
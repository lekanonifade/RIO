import React from "react";

export default function Parcelprop(props) {
    return (
        <div className="">
            <p className="p-1">{props.parcelTitle}</p>
            <input type="text" placeholder={props.parcelPlaceholder} className="border rounded-xl w-full h-10 p-3"/>
        </div>
    )
}
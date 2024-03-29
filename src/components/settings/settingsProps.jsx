import React from "react";

export default function Settingsprop(props) {
    return (
        <div className="">
            <p className="p-1">{props.settingsTitle}</p>
            <input type="text" placeholder={props.settingsPlaceholder} className="border border-gray-300 outline-none rounded-xl w-full h-10 p-3"/>
        </div>
    )
}
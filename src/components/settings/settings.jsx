import React from "react";
import settingsData from "./settingsData";
import Settingsprop from "./settingsProps";

export default function Settings() {
    const settings = settingsData.map(item => {
        return (
            <div>
                <Settingsprop
                    settingsTitle={item.settingsTitle}
                    settingsPlaceholder={item.settingsPlaceholder}
                />
            </div>
        )
    })

    return (
        <div className="grid gap-10">
            <p className="font-bold mt-3">Settings</p>
            <div className="grid gap-10 bg-white p-5 rounded-xl">
                <div className="grid grid-cols-2 gap-10">
                    {settings}
                </div>
                <button className="w-[50%] ml-[25%] bg-[#F03D43] rounded-xl h-10 text-white">Update</button>
            </div>
        </div>
    )
}
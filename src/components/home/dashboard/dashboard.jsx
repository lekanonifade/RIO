import React from "react";
import dashboardData from "./dashboardData";
import Dashboardprop from "./dashboardProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {

    const dashboard = dashboardData.map(item => {
        return (
            <div className="dashboard--prop">
                <Dashboardprop
                    dashboardImage={item.dashboardImage}
                    dashboardAmount={item.dashboardAmount}
                    dashboardTitle={item.dashboardTitle}
                />
            </div>
        )
    })

    return (
        <div>
            <p className="mb-5 font-bold">Dashboard</p>
            <div className="flex flex-wrap gap-8">
                <div className="grid bg-red-300 rounded-xl h-32 w-64 pl-5 pt-3 gap-1">
                    <p className="plus"><FontAwesomeIcon icon={faPlus}/></p>
                    <p className="font-bold">New Parcel</p>
                    <p className="text-gray-400 text-sm">Add</p>
                </div>
                {dashboard}
            </div>
        </div>
    )
}
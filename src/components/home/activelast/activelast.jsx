import React from "react";
import activelastData from "./activelastData";
import Activelastprop from "./activelastProps";

export default function Activelast() {
    const activelast = activelastData.map(item => {
        return (
            <div className="flex-1">
                <Activelastprop
                    activelastTitle={item.activelastTitle}
                    activelastMoney={item.activelastMoney}
                    activelastContainer={item.information.container}
                />
            </div>
        )
    })

    return (
        <div className="flex flex-wrap gap-10">
            {activelast}
        </div>
    )
}
import React from "react";
import sidebarData from "./sidebarData";
import Sidebarprop from "./sidebarProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarDays, faGear, faHouse, faPhoneVolume, faRightFromBracket, faUser, faWallet } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {

    const sidebar = sidebarData.map(item => {
        return (
            <div className="mb-5">
                <Sidebarprop
                    sidebarImage={item.sidebarImage}
                    sidebarTitle={item.sidebarTitle}
                    sidebarNav={item.sidebarNav}
                />
            </div>
        )
    })

    return (
        <div className="p-3 bg-white fixed w-48 h-full">
            <img src="../images/sidebar/logo.svg" alt="" />
            <div className="mt-20 mb-32">
                {sidebar}
            </div>
            <div className="">
                <a href="" className="flex gap-2">
                    <p className="w-5"><FontAwesomeIcon icon={faRightFromBracket} /></p>
                    <p>Log Out</p>
                </a>
            </div>
        </div>
    )
}
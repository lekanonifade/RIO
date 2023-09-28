import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faEnvelope, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className="flex justify-between fixed w-full p-2 bg-white">
            <p><FontAwesomeIcon icon={faBars}/></p>
            <div className="flex justify-items-end text-2xl gap-x-3 mt-2">
                <p><FontAwesomeIcon icon={faMoon} /></p>
                <p><FontAwesomeIcon icon={faBell} /></p>
                <p><FontAwesomeIcon icon={faEnvelope} /></p>
                <img src="../images/header/lekan.png" className="w-10 h-10 -mt-1 rounded-full" />
            </div>
        </div>
    )
}
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faEnvelope, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import { BellIcon, EmailIcon, MoonIcon } from "@chakra-ui/icons";

export default function Header() {
    return (
        <div className="flex justify-between fixed w-full p-2 bg-white">
            <p><FontAwesomeIcon icon={faBars} /></p>
            <div className="flex justify-items-end text-2xl gap-x-3 mt-3">
                <MoonIcon />
                <BellIcon />
                <EmailIcon />
                <Avatar name="daffod" src="../images/header/lekan.png" className="-mt-3">
                    <AvatarBadge width={"1.3em"} height={"1.3em"} bg={"teal.500"}>
                        <Text fontSize={'xs'}>3</Text>
                    </AvatarBadge>
                </Avatar>
            </div>
        </div>
    )
}
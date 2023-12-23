import React from "react";
import accountData from "./accountData";
import Accountprop from "./accountProps";
import { Avatar, Image } from "@chakra-ui/react";

export default function Account() {
    const account = accountData.map(item => {
        return (
            <div>
                <Accountprop
                    accountTitle={item.accountTitle}
                    accountPlaceholder={item.accountPlaceholder}
                />
            </div>
        )
    })

    return (
        <div className="grid gap-10">
            <p className="font-bold mt-3">Edit Profile Information</p>
            <div className="flex gap-10 bg-white p-5 rounded-xl">
                <div className="w-[15%]">
                    {/* <img src="../images/header/lekan.png" className=" rounded-full" /> */}
                    {/* <Avatar name="daffod" src="../images/header/lekan.png"></Avatar> */}
                    <Image name="daffod" src="../images/header/lekan.png" className="rounded-full"></Image>
                </div>
                <div className="grid gap-10 w-[85%]">
                    <div className="grid grid-cols-2 gap-10">
                        {account}
                    </div>
                    <button className="w-[50%] ml-[25%] bg-[#F03D43] rounded-xl h-10 text-white">Update</button>
                </div>
            </div>
        </div>
    )
}
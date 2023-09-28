import React from "react";
import Header from "../../structure/header/header";
import Sidebar from "../../structure/sidebar/sidebar";
import Home from "../../components/home/home";
import Allsummary from "../../components/allsummary/allsummary";
import Viewpayment from "../../components/viewpayment/viewpayment";
import Settings from "../../components/settings/settings";
import Account from "../../components/account/account";
import Parcel from "../../components/parcel/parcel";
import { Routes, Route } from "react-router-dom";

export default function Website() {
    return (
        <div className="font-[arial]">
            <div className="">
                <Header />
            </div>
            <div className="flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="mt-12 ml-48 mr-10 p-10 w-full grid gap-96">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/allsummary" element={<Allsummary />} />
                        <Route path="/viewpayment" element={<Viewpayment />} />
                        <Route path="/parcel" element={<Parcel />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
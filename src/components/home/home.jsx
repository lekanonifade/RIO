import React from "react";
import Dashboard from "./dashboard/dashboard";
import Analysis from "./analysis/analysis";
import Activelast from "./activelast/activelast";

export default function Home() {
    return (
        <div className="grid gap-10">
            <Dashboard />
            <Analysis />
            <Activelast />
        </div>
    )
}
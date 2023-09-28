import React from "react";

export default function Allsummaryprop(props) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-3 w-1/5">
                <img src={props.allsummaryImage} />
                <p>{props.allsummaryName}</p>
            </div>
            <p className="w-1/12">{props.allsummaryNumber}</p>
            <p className="w-1/12">{props.allsummaryDate}</p>
            <p className="w-1/12">${props.allsummaryPayment}</p>
            <p className="w-1/12">${props.allsummaryCharge}</p>
            <p className="w-[10%]">{props.allsummaryStatus}</p>
        </div>
    )
}
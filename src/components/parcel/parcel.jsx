import React from "react";

export default function Parcel() {
    return (
        <div className="flex gap-10">
            <div className="w-[70%] h-full grid gap-5">
                <p className="font-bold mt-3 mb-7">Add New Parcel (Personal)</p>
                <div className="flex gap-10 bg-white p-5 rounded-xl">
                    <div className="grid gap-10 w-full">
                        <div className="grid grid-cols-2 gap-10">
                            <form className="">
                                <p className="p-1">Name</p>
                                <input type="text" placeholder="Enter Your ID" className="border rounded-xl w-full h-10 p-3" />
                            </form>
                            <div className="">
                                <p className="p-1">Company Name</p>
                                <div className="flex gap-10">
                                    <button className="border border-[#ED1C24] w-full rounded-xl h-10 bg-[#FBD0D1] text-[#ED1C24]">Solid</button>
                                    <button className="border w-full rounded-xl h-10">Liquid</button>
                                    <button className="border w-full rounded-xl h-10">Fragile</button>
                                </div>
                            </div>
                            <form className="">
                                <p className="p-1">Phone Number</p>
                                <input type="text" placeholder="Enter Your Phone Number" className="border rounded-xl w-full h-10 p-3" />
                            </form>
                            <form className="">
                                <p className="p-1">Weight</p>
                                <input type="text" placeholder="G/Kg" className="border rounded-xl w-full h-10 p-3" />
                            </form>
                            <form className="">
                                <p className="p-1">Address</p>
                                <textarea type="text" placeholder="Recipient Address" className="border rounded-xl w-full h-40 p-3" />
                            </form>
                            <form className="">
                                <p className="p-1">Note</p>
                                <textarea type="text" placeholder="Type your note" className="border rounded-xl w-full h-40 p-3" />
                            </form>
                        </div>
                        <button className="w-[50%] ml-[25%] bg-[#F03D43] rounded-xl h-10 text-white">Login</button>
                    </div>
                </div>
            </div>
            <div className="w-[30%] h-[30%] grid gap-5">
                <p className="font-bold mt-3 mb-7">Delivery</p>
                <div className="bg-white p-5 rounded-xl">
                    <div className="flex justify-between p-1">
                        <p>Cash</p>
                        <p>$200.00</p>
                    </div>
                    <div className="flex justify-between p-1">
                        <p>Delivery Change</p>
                        <p>$200.00</p>
                    </div>
                    <div className="flex justify-between mt-5 border p-1">
                        <p>Total Amount</p>
                        <p>$200.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
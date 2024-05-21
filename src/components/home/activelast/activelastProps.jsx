export default function Activelastprop(props) {
    return (
        <div className="h-auto w-full">
            <div className="flex justify-between p-1 font-bold">
                <p className="title">{props.activelastTitle}</p>
                <p>View All</p>
            </div>
            <div className="bg-white h-full text-sm p-2 rounded-xl">
                <div className="flex justify-between h-16">
                    <p className="w-40 mr-20">Name</p>
                    <p className="w-20 mr-10">Parcel ID</p>
                    <p className="w-32 flex justify-end">{props.activelastMoney}</p>
                </div>
                <div>
                    {props.activelastContainer.map(containerItem => {
                        return (
                            <div className="flex justify-between h-16">
                                <div className="flex gap-3 w-40 mr-20">
                                    <p><img src={containerItem.activelastImage} className="w-7 -mt-1"/></p>
                                    <p>{containerItem.activelastName}</p>
                                </div>
                                <p className="w-20 mr-10">{containerItem.activelastParcelID}</p>
                                <p className=" w-32 flex justify-end">{containerItem.activelastStatus}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
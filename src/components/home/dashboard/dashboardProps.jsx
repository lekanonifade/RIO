export default function Dashboardprop(props) {
    return (
        <div className="grid bg-white rounded-xl h-32 w-64 pl-5 pt-3 gap-1">
            <p><i className={props.dashboardImage}></i></p>
            <p className="font-bold">${props.dashboardAmount}</p>
            <p className="text-gray-400 text-sm">{props.dashboardTitle}</p>
        </div>
    )
}
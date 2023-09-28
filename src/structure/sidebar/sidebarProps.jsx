import { NavLink } from "react-router-dom"

export default function Sidebarprop(props) {

    const navLinkStyles = ({isActive}) => {
        return {
            backgroundColor: isActive ? "#FBD0D1" : "transparent",
            color: isActive ? "#ED1C24" : "black"
        }
    }

    return (
        <nav>
            <NavLink style={navLinkStyles} to={props.sidebarNav} className="flex gap-2 p-2 h-full w-[90%] rounded-md">
                <p className="w-5"><i className={props.sidebarImage}></i></p>
                <p>{props.sidebarTitle}</p>
            </NavLink>
        </nav>
    )
}
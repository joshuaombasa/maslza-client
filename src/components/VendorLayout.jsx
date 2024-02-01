import React from 'react'
import { Link, Outlet , NavLink} from 'react-router-dom'



export default function VendorLayout() {

    const activeStyle = {
        textDecoration: "underline"
    }


    return (
        <div className="vendor-layout">
            <nav className="vendor-layout-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Dashboard</NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Income</NavLink>
                <NavLink
                    to="equipment"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Equipment</NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
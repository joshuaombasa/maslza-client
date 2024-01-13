import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function VendorLayout() {

    return (
        <div className="vendor-layout">
            <nav className="vendor-layout-nav">
                <Link to=".">Dashboard</Link>
                <Link to="income">Income</Link>
                <Link to="equipment">Equipment</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
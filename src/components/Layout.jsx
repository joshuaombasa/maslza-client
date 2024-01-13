import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="">
            <header>
                <Link to="/" className="logo">MASLZA ENGINEERS</Link>
                <nav className="header-navlinks-parent">
                    <NavLink
                        to="about"
                        className='header-navlinks'
                    >About</NavLink>
                    <NavLink
                        to="vendor"
                        className='header-navlinks'
                    >Vendor</NavLink>
                    <NavLink
                        to="equipment"
                        className='header-navlinks'
                    >Equipment</NavLink>
                   
                </nav>
            </header>
            <div className="outlet--container">
                <Outlet />
            </div>
            <footer>
                <p className="footer-text">copyright maslza IT</p>
            </footer>
        </div>
    )
}
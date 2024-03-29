import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


export default function Layout() {

    const activeStyle = {
        textDecoration: "underline"
    }
    
    return (
        <div className="">
            <header>
                <Link to="/" className="logo">MASLZA ENGINEERS</Link>
                <nav className="header-navlinks-parent">
                    <NavLink
                        to="about"
                        className='header-navlinks'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >About</NavLink>
                    <NavLink
                        to="vendor"
                        className='header-navlinks'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >Vendor</NavLink>
                    <NavLink
                        to="equipment"
                        className='header-navlinks'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >Equipment</NavLink>
                    <NavLink
                        to="login"
                        className='header-navlinks'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >Login</NavLink>
                   
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
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div className="">
            <h1>Page not found</h1>
            <Link to="/">Return to homepage</Link>
        </div>
    )
} 
import React from "react";
import { useSearchParams } from 'react-router-dom'

export default function Equipment() {

    const [searchParams, setSearchParams] = useSearchParams()

    function generateNewUrlSearchParams(type, value) {
        const sp = new URLSearchParams()
        sp.set(type, value)
        setSearchParams(sp)
    }

    return (
        <div className="">
            <h1>Listed  equipment</h1>
            <nav className="vendor-layout-nav">
                <button
                    onClick={() => generateNewUrlSearchParams("type", "truck")}
                >Truck</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "grader")}
                >Grader</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "crane")}
                >Crane</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "loader")}
                >Loader</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "excavator")}
                >Excavator</button>
            </nav>
        </div>
    )
}
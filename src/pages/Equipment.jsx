import React, { Suspense } from "react";
import { Await, defer, useLoaderData, useSearchParams, Link } from 'react-router-dom'
import { getEquipment } from "../utils/api";

export async function loader() {
    return defer({equipment : getEquipment()})
}

export default function Equipment() {

    const dataPromise = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()

    function generateNewUrlSearchParams(type, value) {
        const sp = new URLSearchParams()
        sp.set(type, value)
        setSearchParams(sp)
    }

    function renderEquipment(equipment) {
        
        const equipmentEls = equipment.map(item => (
            <Link to={item._id} key={item._id} className="equipment-item">
                <img src={item.imageUrl}/>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
            </Link>
        ))

        return equipmentEls
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
            <Suspense  fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.equipment}>
                    {renderEquipment}
                </Await>
            </Suspense>
        </div>
    )
}
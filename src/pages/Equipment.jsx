import React, { Suspense } from "react";
import { Await, defer, useLoaderData, useSearchParams, Link } from 'react-router-dom'
import { getEquipment } from "../utils/api";

export async function loader() {
    return defer({ equipment: getEquipment() })
}

export default function Equipment() {

    const dataPromise = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()

    function generateNewUrlSearchParams(type, value) {
        const sp = new URLSearchParams()
        if (!value) {
            sp.delete(type)
        } else {
            sp.set(type,value)
        }
        setSearchParams(sp)
    }

    const equipmentType = searchParams.get('type')
  

    function renderEquipment(equipment) {

        const filteredEquipment = equipmentType  ? equipment.filter(item => item.type === equipmentType) : equipment


        const equipmentEls = filteredEquipment.map(item => (
            <Link to={item._id} key={item._id} className="equipment-item">
                <img src={item.imageUrl} />
                <h3>{item.name}</h3>
                <h3>$ {item.price}</h3>
            </Link>
        ))

        return equipmentEls
    }

    return (
        <div className="equipment-page">
            <h1>Listed  equipment</h1>
            <nav className="vendor-layout-nav">
                <button
                    onClick={() => generateNewUrlSearchParams("type", "Truck")}
                >Truck</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "Van")}
                >Van</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "Crane")}
                >Crane</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "Loader")}
                >Loader</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", "Excavator")}
                >Excavator</button>
                <button
                    onClick={() => generateNewUrlSearchParams("type", null)}
                >Clear filters</button>
            </nav>
            <div className="equipment-container">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Await resolve={dataPromise.equipment}>
                        {renderEquipment}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}
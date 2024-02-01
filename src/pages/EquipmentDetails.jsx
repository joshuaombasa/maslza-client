import React, { Suspense } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getSelectedEquipment } from "../utils/api";

export function loader({request,params}) {
    
    const id = params.id
    return defer({equipment: getSelectedEquipment(id)})
}

export default function EquipmentDetails() {

    const dataPromise = useLoaderData()

    function renderEquipment(equipment) {
        console.log(equipment)
        return (
            <div className="equipment-parent">
                <img src={equipment.imageUrl} alt="" />
                <h3>{equipment.name}</h3>
                <h3>{equipment.type}</h3>
                <h3>$ {equipment.price} / day</h3>
                <p>{equipment.description}</p>
                <Link>Book this equipment</Link>
            </div>
        )
    }

    return (
        <div className="equipment-details-page">
            <Link
                 to={`..`}
                 relative="path"
            >&larr;  Back to all equipment</Link>
            <Suspense>
                <Await resolve={dataPromise.equipment}>
                    {renderEquipment}
                </Await>
            </Suspense>
        </div>
    )
}
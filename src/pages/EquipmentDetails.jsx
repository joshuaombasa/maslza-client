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
    }

    return (
        <div className="equipment-details-page">
            <Link>&larr;</Link>
            <Suspense>
                <Await resolve={dataPromise.equipment}>
                    {renderEquipment}
                </Await>
            </Suspense>
        </div>
    )
}
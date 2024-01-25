

async function getEquipment() {
    try {
        const res = await fetch(`http://localhost:4001/api/equipment`)
        const data = await res.json()
        if (!res.ok) {
            throw {
                message: data.message,
                status: res.status
            }
        }
    } catch (error) {
        return error
    }
}

export  {getEquipment}


async function getEquipment() {

    try {
        const res = await fetch(`http://localhost:4001/api/equipment`)

        const data = await res.json()

        if (!res.ok) {
            throw {
                message: data.message,
                status: res.status,
                statusText: res.statusText,
            }
        }
        return data

    } catch (error) {

        return error

    }
}

async function getSelectedEquipment(id) {
    try {
        const res = await fetch(`http://localhost:4001/api/equipment/${id}`)

        const data = await res.json()

        if (!res.ok) {
            throw {
                message: data.message,
                status: res.status,
                statusText: res.statusText,
            }
        }

        return data

    } catch (error) {

        return error

    }
}

async function loginUser(userData) {
    console.log(userData)
    try {
        const res = await fetch("http://localhost:4001/api/login", {
            method: "post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userData)
        })

        const data = await res.json()

        if (!res.ok) {
            throw {
                message: data.message,
                status: res.status,
                statusText: res.statusText,
            }
        }

        return data

    } catch (error) {
        return error
    }
}

export { getEquipment, getSelectedEquipment, loginUser }
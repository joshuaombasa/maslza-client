import React from "react";
import { useState } from "react";
import { Form, useActionData } from 'react-router-dom'
import { loginUser } from "../utils/api";

export async function loader() {
    return null
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const userData = { email, password }

    try {
        const  data = await loginUser(userData)
        return data

    } catch (error) {
        return error
    }
    
}



export default function Login() {

    const actionData = useActionData()

    console.log(actionData)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData((prevState) => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }

   

    return (
        <div className="login-page">
            <div className="login-page-content">
                <Form method="post">
                    <div className="login-form-element">
                        <label htmlFor="">Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login-form-element">
                        <label htmlFor="">Password:</label>
                        <input
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="login-button">Login</button>
                </Form>
            </div>
        </div>
    )
}
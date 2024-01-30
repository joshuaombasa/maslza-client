import React from "react";
import { useState } from "react";



export default function Login() {

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

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className="login-page">
            <div className="login-page-content">
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
        </div>
    )
}
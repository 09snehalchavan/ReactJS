
import React, { useState } from 'react';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentData = {
            name: name,
            email: email,
            password: password,
            address: address
        };

        console.log("Sending data:", studentData);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(studentData)
                }
            );

            const data = await response.json();

            console.log("Django Response:", data);

            if (response.ok) {
                alert("Registration Successful!");

                // Clear form
                setName('');
                setEmail('');
                setPassword('');
                setAddress('');
            } else {
                alert("Registration Failed!");
            }

        } catch (error) {
            console.error("Server Error:", error);
            alert("Django server connection failed!");
        }
    };

    return (
        <div style={{ width: "400px", margin: "50px auto" }}>

            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <br />

                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
};

export default Register;

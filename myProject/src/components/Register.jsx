
import React, { useState } from 'react';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Address:", address);
    };

    return (
        <>
            <div style={{ width: "400px", margin: "50px auto" }}>

                <h2>Student Registration</h2>

                <form onSubmit={handleSubmit} className='bor'>

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
        </>
    );
};

export default Register;
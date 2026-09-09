import React, { useEffect, useState } from 'react'

const StudentDetails = () => {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        const dummyData = [
            { id: 1, name: "ABC", email: "abc@gmail.com", password: "12345", address: "Kolhapur" },
            { id: 2, name: "DEF", email: "def@gmail.com", password: "12345", address: "Solapur" },
            { id: 3, name: "GHI", email: "ghi@gmail.com", password: "12345", address: "Pune" },
            { id: 4, name: "JKL", email: "jkl@gmail.com", password: "12345", address: "Mumbai" }
        ];

        setStudent(dummyData);

    }, [])



    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((s) => (
                        <tr>
                            <td></td>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.password}</td>
                            <td>{s.address}</td>
                            <td>
                                <button className='btn btn-success'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default StudentDetails

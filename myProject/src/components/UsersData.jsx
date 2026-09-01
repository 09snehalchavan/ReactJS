import React, { useEffect, useState } from 'react'

const UsersData = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    return (
        <>
            {/* <h2>Hii</h2> */}

            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th colSpan={6}>Address</th>
                    </tr>
                </thead>
                <tbody>


                    {users.map((u) => (
                        <tr>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td >{u.address.street}</td>
                            <td>{u.address.suite}</td>
                        </tr>
                    ))}


                </tbody>
            </table >

        </>
    )
}

export default UsersData

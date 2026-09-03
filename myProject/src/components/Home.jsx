import React, { useContext } from 'react'
import { UserContext_example } from './UserContext_example'

const Home = () => {

    const name = useContext(UserContext_example)

    return (
        <>

            <h2>Name : {name} </h2>

        </>
    )
}

export default Home

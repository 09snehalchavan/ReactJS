import React, { useContext } from 'react'
import { UserContext_example } from './UserContext_example'

const About = () => {


    const age = useContext(UserContext_example);

    return (
        <>

            <h2>Age : {age}</h2>

        </>

    )
}

export default About

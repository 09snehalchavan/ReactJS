import React, { useMemo } from 'react'

const UseMemo_example = () => {

    const [number, setNumber] = useState(5);

    const square = useMemo(() => {

    })

    return (
        <>
            <h2> useMemo Example</h2>
            <h3>Number : {number}</h3>
            <h3>Square : {square}</h3>

            <button onClick={() => setNumber(number + 1)}>Increase</button>
        </>
    )
}

export default UseMemo_example

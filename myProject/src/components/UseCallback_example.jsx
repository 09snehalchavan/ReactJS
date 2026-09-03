import React, { use, useCallback, useState } from 'react'

const UseCallback_example = () => {

    const [count, setCount] = useState(0);

    const showMessage = useCallback(() => {

        // console.log("Hello, useCallback...!!");

        alert("Hello, useCallback...!!");

    }, []);

    return (
        <>
            <h2>useCallback Example</h2>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Increase</button><br /><br />

            <button onClick={showMessage}>Show Message</button>

        </>
    )
}

export default UseCallback_example
